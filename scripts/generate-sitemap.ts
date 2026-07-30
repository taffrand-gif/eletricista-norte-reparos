import { generateCityServiceMatrix } from '../shared/cityServiceMatrix';
import { CITIES } from '../shared/serviceConfig';
import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');

const DOMAIN = 'https://eletricista-norte-reparos.pt';

// PATH sous tsx/Node peut ne pas inclure /usr/bin ; on force le chemin absolu
// vers git pour eviter un spawn ETIMEDOUT silencieux.
const GIT_BIN = fs.existsSync('/usr/bin/git')
  ? '/usr/bin/git'
  : fs.existsSync('/opt/homebrew/bin/git')
  ? '/opt/homebrew/bin/git'
  : 'git';

/**
 * Renvoie la date du dernier commit (YYYY-MM-DD) sur le fichier source
 * de l'URL donnee, ou TODAY si git echoue / fichier absent.
 *
 * lastmod honnête (audit AUDIT-SITEMAP-TIERS-2026-07-30 §2.2 : 100% des URLs
 * etaient figees sur TODAY du build). Patch : git log -1 %aI par URL.
 */
function gitLastmod(fileRelPath: string): string {
  const abs = path.join(REPO_ROOT, fileRelPath);
  if (!fs.existsSync(abs)) {
    return new Date().toISOString().split('T')[0];
  }
  try {
    const out = execFileSync(
      GIT_BIN,
      ['log', '-1', '--format=%aI', '--', fileRelPath],
      { cwd: REPO_ROOT, encoding: 'utf-8', timeout: 5000 }
    ).trim();
    if (!out) return new Date().toISOString().split('T')[0];
    return out.slice(0, 10);
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * Fallback "corpus" : date du dernier commit sur client/public/ ou client/src/.
 * Plus honnête que TODAY pour une URL dont on ne trouve aucun fichier source
 * individuel. Renvoie TODAY si git echoue.
 */
let _corpusLastmodCache: string | null = null;
function corpusLastmod(): string {
  if (_corpusLastmodCache !== null) return _corpusLastmodCache;
  // on prend le max entre les deux corpus les plus actifs
  let best = '';
  for (const dir of ['client/public/', 'client/src/']) {
    try {
      const out = execFileSync(
        GIT_BIN,
        ['log', '-1', '--format=%aI', '--', dir],
        { cwd: REPO_ROOT, encoding: 'utf-8', timeout: 5000 }
      ).trim();
      if (out && (!best || out > best)) best = out;
    } catch {
      // ignore
    }
  }
  _corpusLastmodCache = best ? best.slice(0, 10) : new Date().toISOString().split('T')[0];
  return _corpusLastmodCache;
}

/**
 * Mappe une URL sitemap vers son fichier source probable (.html ou .tsx).
 * Renvoie null si introuvable → caller fallback sur corpus.
 */
function urlToSource(loc: string): string | null {
  let p = loc.startsWith(DOMAIN) ? loc.slice(DOMAIN.length) : loc;
  if (p === '' || p === '/') return 'client/public/index.html';
  if (p.startsWith('/')) p = p.slice(1);
  if (p === 'blog') return 'client/public/blog/index.html';

  // essai direct : client/public/<p>.html
  const direct = `client/public/${p}.html`;
  if (fs.existsSync(path.join(REPO_ROOT, direct))) return direct;
  // essai : client/public/<p>/index.html (routes hub)
  const idx = `client/public/${p}/index.html`;
  if (fs.existsSync(path.join(REPO_ROOT, idx))) return idx;

  // fallback prefixe (matrix URLs /<service>-<city> sans .html dedie) :
  // prendre le 1er fichier alphabetique client/public/<service>-*.html
  const dashIdx = p.indexOf('-');
  if (dashIdx > 0) {
    const head = p.slice(0, dashIdx);
    const dir = path.join(REPO_ROOT, 'client', 'public');
    try {
      const candidates = fs.readdirSync(dir)
        .filter((f) => f.startsWith(`${head}-`) && f.endsWith('.html'))
        .sort();
      if (candidates.length > 0) {
        return `client/public/${candidates[0]}`;
      }
    } catch {
      // ignore
    }
  }

  // SEO Vagues : canonical vient d'un .tsx dans client/src/pages/<dir>/<file>.tsx
  // Le pattern d'URL est /<dir>/<slug>, on retrouve le .tsx par suffixe.
  const segs = p.split('/').filter(Boolean);
  if (segs.length === 2) {
    const [dir, slug] = segs;
    if (['services', 'faq', 'urgencias'].includes(dir)) {
      const srcDir = path.join(REPO_ROOT, 'client', 'src', 'pages', dir);
      if (fs.existsSync(srcDir)) {
        // essai : fichier qui matche slug
        try {
          const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx'));
          for (const f of files) {
            if (f.replace(/\.tsx$/, '') === slug || f.startsWith(slug)) {
              return `client/src/pages/${dir}/${f}`;
            }
          }
        } catch {
          // ignore
        }
      }
    }
  }
  return null;
}

/**
 * lastmod pour une URL : git log du fichier source si trouve, sinon corpus.
 */
function lastmodFor(loc: string, fallbackFile?: string): string {
  const src = urlToSource(loc) ?? fallbackFile ?? null;
  if (src) return gitLastmod(src);
  return corpusLastmod();
}

function generateSitemap() {
 const urls: Array<{ loc: string; priority: number; changefreq: string; lastmod: string }> = [];

 // Homepage (highest priority)
 urls.push({
 loc: `${DOMAIN}/`,
 priority: 1.0,
 changefreq: 'daily',
 lastmod: lastmodFor(`${DOMAIN}/`, 'client/public/index.html')
 });

 // Service hub pages (high priority)
 const services = [
 'quadros-eletricos',
 'tomadas-interruptores',
 'certificacao-',
 'iluminacao',
 'avarias-urgentes'
 ];

 services.forEach(service => {
 urls.push({
 loc: `${DOMAIN}/${service}`,
 priority: 0.9,
 changefreq: 'weekly',
 lastmod: lastmodFor(`${DOMAIN}/${service}`, `client/public/${service}.html`)
 });
 });

 // Main city pages (high priority)
 const mainCities = CITIES.filter(c => !c.parentCity);
 mainCities.forEach(city => {
 urls.push({
 loc: `${DOMAIN}/eletricista-${city.slug}`,
 priority: 0.85,
 changefreq: 'weekly',
 lastmod: lastmodFor(`${DOMAIN}/eletricista-${city.slug}`, `client/public/eletricista-${city.slug}.html`)
 });
 });

 // City × Service pages (medium-high priority)
 const matrix = generateCityServiceMatrix();
 matrix.forEach(page => {
 urls.push({
 loc: `${DOMAIN}${page.url}`,
 priority: page.priority,
 changefreq: 'monthly',
 lastmod: lastmodFor(`${DOMAIN}${page.url}`, `client/public${page.url}.html`)
 });
 });

 // Static pages
 urls.push(
  { loc: `${DOMAIN}/servicos`, priority: 0.8, changefreq: 'monthly', lastmod: gitLastmod('client/public/servicos.html') },
  { loc: `${DOMAIN}/faq`, priority: 0.7, changefreq: 'monthly', lastmod: gitLastmod('client/public/faq.html') },
  { loc: `${DOMAIN}/zonas`, priority: 0.7, changefreq: 'monthly', lastmod: gitLastmod('client/public/zonas.html') },
  { loc: `${DOMAIN}/blog`, priority: 0.8, changefreq: 'weekly', lastmod: gitLastmod('client/public/blog/index.html') }
 );

 // SEO Vagues 1+2 (loop #6) : pages services/{ville}, faq/{topic}, urgencias/{ville}
 // Ces pages sont générées par scripts/seo_pages_generator.py (cf. handover Obsidian)
 // Sans ce bloc, Google ne sait pas qu'elles existent après merge.
 // PRINCIPE : on lit le canonical DIRECTEMENT depuis chaque fichier .tsx (regex)
 // plutôt que de re-deviner le slug.
 const seoDirs = ['services', 'faq', 'urgencias'];
 const clientPages = path.join(REPO_ROOT, 'client', 'src', 'pages');
 const canonicalRe = /canonical\.setAttribute\(['"]href['"]\s*,\s*['"]([^'"]+)['"]/;
 let seoCount = 0;
 for (const dir of seoDirs) {
  const fullDir = path.join(clientPages, dir);
  if (!fs.existsSync(fullDir)) continue;
  const stat = fs.statSync(fullDir);
  if (!stat.isDirectory()) continue;
  const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.tsx'));
  for (const file of files) {
   const fp = path.join(fullDir, file);
   let content: string;
   try { content = fs.readFileSync(fp, 'utf-8'); } catch { continue; }
   const m = content.match(canonicalRe);
   if (!m) continue;
   const canonical = m[1];
   if (!canonical.startsWith(DOMAIN)) continue;
   urls.push({ loc: canonical, priority: 0.6, changefreq: 'monthly',
              lastmod: gitLastmod(`client/src/pages/${dir}/${file}`) });
   seoCount++;
  }
 }
 console.log(`📄 SEO Vagues 1+2: ${seoCount} pages ajoutées au sitemap (canonical direct)`);

 // Generate XML
 const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => ` <url>
 <loc>${url.loc}</loc>
 <lastmod>${url.lastmod}</lastmod>
 <priority>${url.priority.toFixed(1)}</priority>
 <changefreq>${url.changefreq}</changefreq>
 </url>`).join('\n')}
</urlset>`;

 // Write to file
 const outputPath = path.join(__dirname, '../public/sitemap-dynamic.xml');
 fs.writeFileSync(outputPath, xml, 'utf-8');

 console.log(`✅ Generated sitemap with ${urls.length} URLs`);
 console.log(`📍 Saved to: ${outputPath}`);

 // Stats honestete lastmod (gate de validation)
 const today = new Date().toISOString().split('T')[0];
 const staleCount = urls.filter(u => u.lastmod === today).length;
 console.log(`🔍 Lastmod honnête : ${urls.length - staleCount}/${urls.length} URLs ont une date ≠ today (${staleCount} fallback TODAY).`);
}

generateSitemap();