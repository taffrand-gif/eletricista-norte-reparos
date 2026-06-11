// Script to generate sitemap.xml for both sites
// Run with: node generate-sitemap.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sites = [
  {
    domain: 'norte-reparos.com',
    name: 'Norte-Reparos',
  },
  {
    domain: '',
    name: 'Staff-Seekers',
  },
];

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/#servicos', priority: '0.9', changefreq: 'weekly' },
  { path: '/#faq', priority: '0.8', changefreq: 'monthly' },
  { path: '/#trabalhos', priority: '0.8', changefreq: 'monthly' },
  { path: '/#equipa', priority: '0.7', changefreq: 'monthly' },
  { path: '/#testemunhos', priority: '0.8', changefreq: 'monthly' },
  { path: '/#blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/#contactos', priority: '0.9', changefreq: 'monthly' },
];

function generateSitemap(domain) {
  const lastmod = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>https://${domain}${page.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

// Generate sitemaps for both sites
sites.forEach(site => {
  const sitemap = generateSitemap(site.domain);
  const outputPath = path.join(__dirname, 'client', 'public', `sitemap-${site.domain}.xml`);
  
  fs.writeFileSync(outputPath, sitemap, 'utf-8');
  console.log(`✅ Sitemap generated for ${site.name}: ${outputPath}`);
});

// Generate a generic sitemap.xml (will be used based on domain)
const genericSitemap = generateSitemap('norte-reparos.com');
const genericPath = path.join(__dirname, 'client', 'public', 'sitemap.xml');
fs.writeFileSync(genericPath, genericSitemap, 'utf-8');
console.log(`✅ Generic sitemap generated: ${genericPath}`);

console.log('\n📝 Note: Upload these sitemaps to Google Search Console for both domains.');
