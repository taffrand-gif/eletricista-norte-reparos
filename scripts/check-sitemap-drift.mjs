#!/usr/bin/env node
// Sitemap/IndexNow drift guard: for every sitemap*.xml and *indexnow*.txt in
// client/public/ and public/, the head URL set must equal exactly
//   base URL set - URLs declared in DELETE-MANIFEST.json (paths + sitemap_only_paths).
// sitemap_only_paths are not removed from the files listed in sitemap_only_kept_in.
// Any missing URL, extra URL, deleted file or new file fails with exit 1.
// Usage: node scripts/check-sitemap-drift.mjs [--base origin/main] [--root .] [--manifest DELETE-MANIFEST.json]
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc), []),
);
const BASE = args.base || 'origin/main';
const ROOT = path.resolve(args.root || process.cwd());
const MANIFEST = path.join(ROOT, args.manifest || 'DELETE-MANIFEST.json');
const DIRS = ['client/public', 'public'];
const SURFACE = /^(client\/public|public)\/(sitemap[^/]*\.xml|[^/]*indexnow[^/]*\.txt)$/;

const git = (...a) => execFileSync('git', a, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 28 });

// "/eletricista-x", "/distritos/viseu": comparable key for a URL or a file path.
const key = (p) => {
  let s = p.replace(/^https?:\/\/[^/]+/, '').replace(/^(client\/public|public)(?=\/)/, '');
  s = s.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/+$/, '');
  return s.startsWith('/') ? s || '/' : '/' + s;
};

const urls = (file, text) =>
  file.endsWith('.txt')
    ? new Set(text.split('\n').map((l) => l.trim()).filter((l) => /^https?:\/\//.test(l)))
    : new Set([...text.matchAll(/<loc>\s*([^<]*?)\s*<\/loc>/g)].map((m) => m[1]).filter(Boolean));

let deleted = new Set();
let sitemapOnly = new Set();
let keptIn = new Set();
if (fs.existsSync(MANIFEST)) {
  const m = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  deleted = new Set((m.paths || []).map(key));
  sitemapOnly = new Set((m.sitemap_only_paths || []).map(key));
  keptIn = new Set(m.sitemap_only_kept_in || []);
}

const baseFiles = git('ls-tree', '-r', '--name-only', BASE).split('\n').filter((f) => SURFACE.test(f));
const headFiles = DIRS.flatMap((d) =>
  fs.existsSync(path.join(ROOT, d)) ? fs.readdirSync(path.join(ROOT, d)).map((n) => `${d}/${n}`) : [],
).filter((f) => SURFACE.test(f));

const errors = [];
const show = (list) => list.slice(0, 5).join(', ') + (list.length > 5 ? ', …' : '');
const removedSeen = new Set();

for (const f of [...new Set([...baseFiles, ...headFiles])].sort()) {
  if (!baseFiles.includes(f)) { errors.push(`${f}: file absent from base ${BASE}`); continue; }
  if (!headFiles.includes(f)) { errors.push(`${f}: file missing in head`); continue; }
  const base = urls(f, git('show', `${BASE}:${f}`));
  const head = urls(f, fs.readFileSync(path.join(ROOT, f), 'utf8'));
  const removed = (u) => deleted.has(key(u)) || (!keptIn.has(f) && sitemapOnly.has(key(u)));
  const expected = new Set([...base].filter((u) => !removed(u)));
  [...base].filter(removed).forEach((u) => removedSeen.add(key(u)));
  const missing = [...expected].filter((u) => !head.has(u));
  const extra = [...head].filter((u) => !expected.has(u));
  console.log(`check-sitemap-drift ${f} base=${base.size} expected=${expected.size} head=${head.size} missing=${missing.length} unexpected=${extra.length}`);
  if (missing.length) errors.push(`${f}: ${missing.length} expected URL(s) missing: ${show(missing)}`);
  if (extra.length) errors.push(`${f}: ${extra.length} unexpected URL(s): ${show(extra)}`);
}

console.log(`check-sitemap-drift manifest_keys=${deleted.size + sitemapOnly.size} found_in_base=${removedSeen.size}`);
if (errors.length) {
  console.error('check-sitemap-drift FAIL\n' + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log('check-sitemap-drift OK');
