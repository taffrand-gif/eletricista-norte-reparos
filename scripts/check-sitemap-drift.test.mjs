// Tests for scripts/check-sitemap-drift.mjs.
// Fixture: a temporary git repo whose base commit holds the real origin/main
// sitemap/IndexNow files and whose working tree holds this branch's files.
// Run: node --test scripts/check-sitemap-drift.test.mjs  (needs origin/main fetched)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const REPO = process.cwd();
const BASE = process.env.DRIFT_BASE || 'origin/main';
const SCRIPT = path.join(REPO, 'scripts', 'check-sitemap-drift.mjs');
const SURFACE = /^(client\/public|public)\/(sitemap[^/]*\.xml|[^/]*indexnow[^/]*\.txt)$/;
const MAIN_SITEMAP = 'client/public/sitemap.xml';
const VILA_VERDE = '/eletricista-vila-verde-da-raia';

const git = (cwd, ...args) => execFileSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 1 << 28 });

function fixture() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-drift-'));
  git(dir, 'init', '-q');
  const baseFiles = git(REPO, 'ls-tree', '-r', '--name-only', BASE).split('\n').filter((f) => SURFACE.test(f));
  for (const f of baseFiles) {
    fs.mkdirSync(path.join(dir, path.dirname(f)), { recursive: true });
    fs.writeFileSync(path.join(dir, f), git(REPO, 'show', `${BASE}:${f}`));
  }
  git(dir, 'add', '-A');
  git(dir, '-c', 'user.name=t', '-c', 'user.email=t@t', 'commit', '-qm', 'base');
  git(dir, 'tag', 'base');
  for (const f of baseFiles) fs.rmSync(path.join(dir, f));
  for (const d of ['client/public', 'public']) {
    if (!fs.existsSync(path.join(REPO, d))) continue;
    for (const name of fs.readdirSync(path.join(REPO, d))) {
      const f = `${d}/${name}`;
      if (SURFACE.test(f)) fs.copyFileSync(path.join(REPO, f), path.join(dir, f));
    }
  }
  fs.copyFileSync(path.join(REPO, 'DELETE-MANIFEST.json'), path.join(dir, 'DELETE-MANIFEST.json'));
  return dir;
}

function run(dir) {
  const r = spawnSync('node', [SCRIPT, '--base', 'base', '--root', dir], { encoding: 'utf8' });
  return { code: r.status, out: r.stdout + r.stderr };
}

const urlBlocks = (xml) => xml.match(/<url>(?:(?!<\/url>)[\s\S])*<\/url>/g) || [];

test('positive witness: branch head matches origin/main minus manifest', () => {
  const r = run(fixture());
  assert.equal(r.code, 0, r.out);
  assert.match(r.out, /check-sitemap-drift OK/);
});

test('negative: 1 500 URLs removed from sitemap.xml fails', () => {
  const dir = fixture();
  const f = path.join(dir, MAIN_SITEMAP);
  let xml = fs.readFileSync(f, 'utf8');
  const blocks = urlBlocks(xml);
  assert.ok(blocks.length > 1500);
  for (const b of blocks.slice(0, 1500)) xml = xml.replace(b, '');
  fs.writeFileSync(f, xml);
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /client\/public\/sitemap\.xml: 1500 expected URL\(s\) missing/);
});

test('negative: 50 URLs replaced by foreign URLs fails', () => {
  const dir = fixture();
  const f = path.join(dir, MAIN_SITEMAP);
  let xml = fs.readFileSync(f, 'utf8');
  const locs = xml.match(/<loc>[^<]+<\/loc>/g).slice(10, 60);
  locs.forEach((l, i) => { xml = xml.replace(l, `<loc>https://foreign.example/pagina-${i}</loc>`); });
  fs.writeFileSync(f, xml);
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /client\/public\/sitemap\.xml: 50 expected URL\(s\) missing/);
  assert.match(r.out, /client\/public\/sitemap\.xml: 50 unexpected URL\(s\)/);
  assert.match(r.out, /foreign\.example/);
});

test('negative: Vila Verde da Raia removed from every sitemap and IndexNow fails', () => {
  const dir = fixture();
  let touched = 0;
  for (const d of ['client/public', 'public']) {
    if (!fs.existsSync(path.join(dir, d))) continue;
    for (const name of fs.readdirSync(path.join(dir, d))) {
      const f = path.join(dir, d, name);
      if (!SURFACE.test(`${d}/${name}`)) continue;
      const txt = fs.readFileSync(f, 'utf8');
      const out = name.endsWith('.txt')
        ? txt.split('\n').filter((l) => !l.includes(VILA_VERDE)).join('\n')
        : urlBlocks(txt).filter((b) => b.includes(VILA_VERDE)).reduce((x, b) => x.replace(b, ''), txt);
      if (out !== txt) { fs.writeFileSync(f, out); touched++; }
    }
  }
  assert.ok(touched >= 2, `Vila Verde found in ${touched} files`);
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /eletricista-vila-verde-da-raia/);
  assert.match(r.out, /indexnow-urls\.txt: 1 expected URL\(s\) missing/);
});

test('negative: manifest URL still present (removal not applied) fails', () => {
  const dir = fixture();
  const f = path.join(dir, MAIN_SITEMAP);
  const base = git(dir, 'show', `base:${MAIN_SITEMAP}`);
  const block = urlBlocks(base).find((b) => b.includes('/eletricista-xinzo-de-limia<'));
  fs.writeFileSync(f, fs.readFileSync(f, 'utf8').replace('</urlset>', `${block}</urlset>`));
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /1 unexpected URL\(s\).*xinzo-de-limia/s);
});

test('negative: sitemap file deleted or added fails', () => {
  const dir = fixture();
  fs.rmSync(path.join(dir, 'client/public/sitemap-dynamic.xml'));
  fs.writeFileSync(path.join(dir, 'client/public/sitemap-new.xml'), '<urlset><url><loc>https://x.example/a</loc></url></urlset>');
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /sitemap-dynamic\.xml: file missing in head/);
  assert.match(r.out, /sitemap-new\.xml: file absent from base/);
});
