import { generateCityServiceMatrix } from '../shared/cityServiceMatrix';
import { CITIES } from '../shared/serviceConfig';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = 'https://eletricista-norte-reparos.pt';
const REPO_ROOT = path.resolve(__dirname, '..');

/**
 * Renvoie la date du dernier commit (YYYY-MM-DD) pour `relPath` (chemin
 * relatif depuis la racine du repo) ou la date du jour si git échoue.
 *
 * Justification : le sitemap généré doit exposer un `<lastmod>` qui reflète
 * la dernière modification réelle du fichier .html servi, pas la date de
 * génération du script. Audit AUDIT-SITEMAP-TIERS-2026-07-30 (t_85288418) :
 * 9/10 sitemaps Norte-OS étaient à 0-1.5 % honnête. Patch légitime tant
 * qu'il ne supprime aucun fichier ni ne change la liste des URLs.
 */
function gitLastmod(relPath: string): string {
  const today = new Date().toISOString().split('T')[0];
  try {
    const out = execSync(
      ['git', 'log', '-1', '--format=%aI', '--', relPath].join(' '),
      { cwd: REPO_ROOT, stdio: ['pipe', 'pipe', 'pipe'] }
    ).toString().trim();
    if (!out) return today;
    return out.slice(0, 10);
  } catch {
    return today;
  }
}

interface SitemapEntry {
  loc: string;
  priority: number;
  changefreq: string;
  relPath: string;
}

function generateSitemap() {
 const urls: SitemapEntry[] = [];

 // Homepage (highest priority).
 urls.push({
 loc: `${DOMAIN}/`,
 priority: 1.0,
 changefreq: 'daily',
 relPath: 'public/index.html',
 });

 // Service hub pages (high priority).
 const services = [
 'quadros-eletricos',
 'tomadas-interruptores',
 'certificacao-',
 'iluminacao',
 'avarias-urgentes',
 ] as const;

 services.forEach(service => {
 urls.push({
 loc: `${DOMAIN}/${service}`,
 priority: 0.9,
 changefreq: 'weekly',
 relPath: `public/${service}.html`,
 });
 });

 // Main city pages (high priority).
 const mainCities = CITIES.filter(c => !c.parentCity);
 mainCities.forEach(city => {
 urls.push({
 loc: `${DOMAIN}/eletricista-${city.slug}`,
 priority: 0.85,
 changefreq: 'weekly',
 relPath: `public/eletricista-${city.slug}.html`,
 });
 });

 // City × Service pages (medium-high priority).
 const matrix = generateCityServiceMatrix();
 matrix.forEach(page => {
 const urlPath = page.url.replace(/^\//, '');
 urls.push({
 loc: `${DOMAIN}${page.url}`,
 priority: page.priority,
 changefreq: 'monthly',
 relPath: `client/public/${urlPath}`,
 });
 });

 // Static pages
 urls.push(
 { loc: `${DOMAIN}/servicos`, priority: 0.8, changefreq: 'monthly', relPath: 'client/public/servicos.html' },
 { loc: `${DOMAIN}/faq`, priority: 0.7, changefreq: 'monthly', relPath: 'client/public/faq.html' },
 { loc: `${DOMAIN}/zonas`, priority: 0.7, changefreq: 'monthly', relPath: 'client/public/zonas.html' },
 { loc: `${DOMAIN}/blog`, priority: 0.8, changefreq: 'weekly', relPath: 'client/public/blog/index.html' }
 );

 // SEO Vagues 1+2 (loop #6) : pages services/{ville}, faq/{topic}, urgencias/{ville}.
 // On lit le canonical DIRECTEMENT depuis chaque fichier .tsx.
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
 const urlPath = canonical.replace(DOMAIN, '').replace(/^\//, '');
 urls.push({ loc: canonical, priority: 0.6, changefreq: 'monthly', relPath: `client/public/${urlPath}` });
 seoCount++;
 }
 }
 console.log(`📄 SEO Vagues 1+2: ${seoCount} pages ajoutées au sitemap (canonical direct)`);

 // Generate XML — lastmod calculé par fichier.
 const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => ` <url>
 <loc>${url.loc}</loc>
 <lastmod>${gitLastmod(url.relPath)}</lastmod>
 <priority>${url.priority.toFixed(1)}</priority>
 <changefreq>${url.changefreq}</changefreq>
 </url>`).join('\n')}
</urlset>`;

 // Write to file
 const outputPath = path.join(__dirname, '../public/sitemap-dynamic.xml');
 fs.writeFileSync(outputPath, xml, 'utf-8');

 console.log(`✅ Generated sitemap with ${urls.length} URLs`);
 console.log(`📍 Saved to: ${outputPath}`);
}

generateSitemap();
