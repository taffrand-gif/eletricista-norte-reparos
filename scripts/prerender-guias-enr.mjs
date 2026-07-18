// scripts/prerender-guias-enr.mjs
// Génère les HTML statiques /blog/guia-*.html à partir des composants React (.tsx).
// Approche pragmatique : on copie-colle le contenu Helmet + corps verbatim depuis le .tsx
// dans un template HTML minimal compatible cleanUrls:true.
//
// Anti-régression R11/R12/R145/§12 : zéro invention. Le script extrait le contenu EXISTANT
// des .tsx (Helmet + body verbatim) et le wrap dans une coquille HTML SEO-friendly.
// Aucun ajout de prix/délai/téléphone/claim. Pas de modification des .tsx.
//
// ENR only. Génère les deux guides ENR depuis les composants TSX.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

// Slugs à pré-rendre. Source unique = client/src/App.tsx + client/src/pages/blog/
const SLUGS = [
  {
    file: 'GuiaCurtoCircuito.tsx',
    slug: 'guia-curto-circuito',
    canonical: 'https://eletricista-norte-reparos.pt/blog/guia-curto-circuito',
  },
  {
    file: 'GuiaFalhaEnergia.tsx',
    slug: 'guia-falha-energia',
    canonical: 'https://eletricista-norte-reparos.pt/blog/guia-falha-energia',
  },
];

/**
 * Convertit le JSX hardcodé du composant en HTML pré-rendu.
 * Stratégie : remplacer les `className=` par `class=`, convertir la structure JSX simple.
 * Comme les composants Guia n'ont AUCUN hook React (vérifié), le rendu = le DOM statique.
 *
 * Approche encore plus simple : le composant Guia génère du HTML purement statique
 * (pas de useState/useEffect, juste du JSX avec className). On extrait la section <article>
 * directement, on convertit className → class, et on wrap.
 */
function extractArticleJsx(tsxContent) {
  // Find the <article ...>...</article> block
  const start = tsxContent.indexOf('<article');
  const end = tsxContent.lastIndexOf('</article>');
  if (start === -1 || end === -1) {
    throw new Error('Cannot find <article>...</article> in tsx');
  }
  // Include the closing </article> tag
  return tsxContent.substring(start, end + '</article>'.length);
}

/**
 * Convertit className → class (JSX → HTML), converts simple self-closing tags.
 * Assez naïf mais suffisant pour ces composants statiques.
 */
function jsxToHtml(jsx) {
  let html = jsx;
  // className (attribute, with optional value in quotes/braces)
  html = html.replace(/\sclassName=/g, ' class=');
  // Normalize /blog (extensionless) -> /blog/ (matches canonical serving path of
  // blog/index.html through Vercel + cleanUrls:true). This is a convention-level
  // normalization, NOT content invention: both paths resolve to the same HTML.
  html = html.replace(/href="\/blog"/g, 'href="/blog/"');
  // <br>, <hr>, <img> auto-closing (but our Guias don't use them)
  // Convert HTML entities that are JSX-safe in source
  return html;
}

function extractHelmet(tsxContent) {
  // Find Helmet block
  const start = tsxContent.indexOf('<Helmet>');
  const end = tsxContent.indexOf('</Helmet>');
  if (start === -1 || end === -1) {
    throw new Error('Cannot find <Helmet>...</Helmet> in tsx');
  }
  return tsxContent.substring(start + '<Helmet>'.length, end);
}

function extractJsonLdScripts(helmetBlock) {
  // Extract raw JSON.stringify({...}) string content from each <script type="application/ld+json">
  // Strategy: find each <script type="application/ld+json"> ... </script> and return its raw content
  const scripts = [];
  const re = /<script type="application\/ld\+json">\s*\{JSON\.stringify\(([\s\S]*?)\)\}\s*<\/script>/g;
  let match;
  while ((match = re.exec(helmetBlock)) !== null) {
    // The captured group is the JSON object literal
    let jsonLiteral = match[1].trim();
    // Replace JS-style escape: the JSON literal uses \" which is JS source. Convert to valid JSON.
    // Approach: eval(JSON.stringify(X)) inside a Function to materialize the JSON string
    // SAFER: since the source is our own .tsx, we trust it. Use eval to materialize.
    const fn = new Function('__X__', `return JSON.stringify(${jsonLiteral});`);
    const jsonStr = fn({});
    // Validate parse
    JSON.parse(jsonStr);
    scripts.push(jsonStr);
  }
  return scripts;
}

function extractTitle(helmetBlock) {
  const m = helmetBlock.match(/<title>([\s\S]*?)<\/title>/);
  return m ? m[1].trim() : 'Guia Norte Reparos';
}

function extractDescription(helmetBlock) {
  const m = helmetBlock.match(/name="description"\s+content="([^"]+)"/);
  return m ? m[1].trim() : '';
}

function extractCanonical(helmetBlock) {
  const m = helmetBlock.match(/<link rel="canonical"\s+href="([^"]+)"\s*\/>/);
  return m ? m[1].trim() : '';
}

function buildHtmlPage({ slug, canonical, title, description, jsonLds, bodyJsx }) {
  const ldScripts = jsonLds.map(ld => `    <script type="application/ld+json">\n${ld}\n    </script>`).join('\n');

  // Note: on conserve le JSX (et ses {...} ternaires éventuels résolus en texte littéral) :
  // nos Guia n'ont AUCUN ternaire dans le body, donc c'est safe de le stringify tel quel.
  // Convert className -> class
  const bodyHtml = jsxToHtml(bodyJsx);

  return `<!DOCTYPE html>
<html lang="pt-PT">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="pt_PT" />
  <meta property="og:site_name" content="Norte Reparos" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <meta name="theme-color" content="#dc2626" />
${ldScripts}
  <style>
    /* Coquille minimale pour rendre le HTML visuellement correct quand Googlebot le fetch
       sans hydratation. Tailwind/CSS du bundle n'est PAS dans cette page statique. */
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; color: #1f2937; background: #ffffff; line-height: 1.6; }
    a { color: #dc2626; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .text-4xl, .md\\:text-5xl { font-size: 2.5rem; font-weight: 800; line-height: 1.15; margin: 0 0 1rem; color: #111827; }
    @media (min-width: 768px) { .md\\:text-5xl { font-size: 3rem; } }
    .text-3xl { font-size: 1.875rem; font-weight: 700; margin: 2.5rem 0 1rem; color: #111827; line-height: 1.2; }
    .text-2xl { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.75rem; color: #111827; }
    .text-xl { font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem; color: #1f2937; }
    .text-lg { font-size: 1.125rem; }
    .text-sm { font-size: 0.875rem; }
    .font-bold { font-weight: 700; }
    .font-medium { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    p { margin: 0 0 1rem; color: #374151; }
    strong { font-weight: 600; color: #111827; }
    ul, ol { padding-left: 1.5rem; margin: 0 0 1rem; }
    li { margin-bottom: 0.5rem; color: #374151; }
    .max-w-4xl { max-width: 56rem; margin: 0 auto; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
    .p-6, .p-8 { padding: 1.5rem; }
    .p-8 { padding: 2rem; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-3 { margin-bottom: 0.75rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .mt-8 { margin-top: 2rem; }
    .mt-12 { margin-top: 3rem; }
    .my-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; }
    .text-blue-600 { color: #2563eb; }
    .text-blue-700 { color: #1d4ed8; }
    .text-red-700 { color: #b91c1c; }
    .text-gray-900 { color: #111827; }
    .text-gray-800 { color: #1f2937; }
    .text-gray-700 { color: #374151; }
    .text-gray-600 { color: #4b5563; }
    .text-gray-500 { color: #6b7280; }
    .bg-amber-50 { background-color: #fffbeb; }
    .bg-red-50 { background-color: #fef2f2; }
    .bg-red-100 { background-color: #fee2e2; }
    .bg-gray-50 { background-color: #f9fafb; }
    .border-l-4 { border-left: 4px solid; }
    .border-amber-500 { border-color: #f59e0b; }
    .border-red-600 { border-color: #dc2626; }
    .border-gray-400 { border-color: #9ca3af; }
    .rounded-r-lg { border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem; }
    .list-disc { list-style-type: disc; }
    .list-decimal { list-style-type: decimal; }
    .pl-6 { padding-left: 1.5rem; }
    .space-y-2 > * + * { margin-top: 0.5rem; }
    .space-y-3 > * + * { margin-top: 0.75rem; }
    .space-y-6 > * + * { margin-top: 1.5rem; }
    .mx-3 { margin-left: 0.75rem; margin-right: 0.75rem; }
    .hover\\:text-blue-700:hover { color: #1d4ed8; }
    .hover\\:underline:hover { text-decoration: underline; }
    .prose { max-width: 100%; }
  </style>
</head>
<body>
${bodyHtml}
  <hr style="margin: 3rem auto; max-width: 56rem; border: 0; border-top: 1px solid #e5e7eb;" />
  <footer style="max-width: 56rem; margin: 0 auto; padding: 0 1rem 3rem; color: #6b7280; font-size: 0.875rem;">
    <p><a href="${canonical}">${canonical}</a></p>
    <p style="margin-top: 1rem;">Norte Reparos · Trás-os-Montes</p>
  </footer>
</body>
</html>
`;
}

function processSlug(slugInfo) {
  const tsxPath = path.join(REPO_ROOT, 'client/src/pages/blog', slugInfo.file);
  const outPath = path.join(REPO_ROOT, 'client/public/blog', `${slugInfo.slug}.html`);

  const tsxContent = fs.readFileSync(tsxPath, 'utf8');

  const helmetBlock = extractHelmet(tsxContent);
  const title = extractTitle(helmetBlock);
  const description = extractDescription(helmetBlock);
  const jsonLds = extractJsonLdScripts(helmetBlock);
  const bodyJsx = extractArticleJsx(tsxContent);

  // Verify canonical matches expected
  const tsxCanonical = extractCanonical(helmetBlock);
  if (tsxCanonical !== slugInfo.canonical) {
    console.warn(`⚠️ canonical mismatch in ${slugInfo.file}: tsx="${tsxCanonical}" expected="${slugInfo.canonical}"`);
  }

  const html = buildHtmlPage({
    slug: slugInfo.slug,
    canonical: slugInfo.canonical,
    title,
    description,
    jsonLds,
    bodyJsx,
  });

  // Ensure output dir exists
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, 'utf8');

  console.log(`✓ ${slugInfo.slug}: ${html.length} bytes → ${path.relative(REPO_ROOT, outPath)}`);
  console.log(`   title: ${title.substring(0, 60)}...`);
  console.log(`   description: ${description.substring(0, 60)}...`);
  console.log(`   canonical: ${tsxCanonical}`);
  console.log(`   JSON-LD scripts: ${jsonLds.length}`);
  return { file: outPath, bytes: html.length };
}

console.log('=== prerender-guias.cjs.mjs ===\n');
const results = [];
for (const slug of SLUGS) {
  results.push(processSlug(slug));
}
console.log(`\nDone: ${results.length} HTML files generated.`);
console.log(`Modified: ${results.length}, Skipped: 0, Errors: 0, TOTAL: ${results.length}`);
