#!/usr/bin/env node
// Fails the build when a served sitemap is empty or abnormally small.
// Origin: PR #714 emptied client/public/sitemap.xml (3635 URLs -> 0) unnoticed.
import fs from 'node:fs';
import path from 'node:path';

const dir = process.argv[2] || path.join(process.cwd(), 'client', 'public');

// Minimum <loc> count per served file. sitemap.xml is the file declared in robots.txt.
const FLOORS = {
  'sitemap.xml': 1000,
  'sitemap-plain.xml': 1000,
};
const INDEXNOW = 'eletricista-norte-reparos-indexnow-urls.txt';
const INDEXNOW_FLOOR = 1000;

const errors = [];
const files = fs.readdirSync(dir).filter((f) => /^sitemap.*\.xml$/.test(f));
if (!files.includes('sitemap.xml')) errors.push('sitemap.xml missing');

for (const f of files) {
  const xml = fs.readFileSync(path.join(dir, f), 'utf8');
  const isIndex = /<sitemapindex[\s>]/.test(xml);
  const count = (xml.match(/<loc>\s*[^<\s][^<]*<\/loc>/g) || []).length;
  const floor = FLOORS[f] ?? 1;
  if (!isIndex && !/<urlset[\s>]/.test(xml)) errors.push(`${f}: no <urlset> or <sitemapindex>`);
  if (count < floor) errors.push(`${f}: ${count} <loc>, minimum ${floor}`);
  const noLoc = (xml.match(/<url>(?:(?!<\/url>)[\s\S])*<\/url>/g) || []).filter((b) => !b.includes('<loc>')).length;
  if (noLoc) errors.push(`${f}: ${noLoc} <url> without <loc>`);
  console.log(`check-sitemap ${f} loc=${count} min=${floor}`);
}

const idx = path.join(dir, INDEXNOW);
if (fs.existsSync(idx)) {
  const n = fs.readFileSync(idx, 'utf8').split('\n').filter((l) => l.trim().startsWith('https://')).length;
  console.log(`check-sitemap ${INDEXNOW} urls=${n} min=${INDEXNOW_FLOOR}`);
  if (n < INDEXNOW_FLOOR) errors.push(`${INDEXNOW}: ${n} URLs, minimum ${INDEXNOW_FLOOR}`);
}

if (errors.length) {
  console.error('check-sitemap FAIL\n' + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log('check-sitemap OK');
