// Tests for scripts/check-sitemap-drift.mjs.
// Fixture: a temporary git repo whose base commit holds the real sitemap/IndexNow
// files of BASE. The working tree starts identical to the base, so every test
// only measures its own change and does not depend on the PR content.
// Run: node --test scripts/check-sitemap-drift.test.mjs  (DRIFT_BASE defaults to origin/main)
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
const MANIFEST = 'DELETE-MANIFEST.json';

const git = (cwd, ...args) => execFileSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 1 << 28 });
const commit = (dir, msg) => git(dir, '-c', 'user.name=t', '-c', 'user.email=t@t', 'commit', '-qm', msg);

// extra: { path: content } committed in the base together with the surface files.
function fixture(extra = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-drift-'));
  git(dir, 'init', '-q');
  const baseFiles = git(REPO, 'ls-tree', '-r', '--name-only', BASE).split('\n').filter((f) => SURFACE.test(f));
  for (const f of baseFiles) write(dir, f, git(REPO, 'show', `${BASE}:${f}`));
  for (const [f, txt] of Object.entries(extra)) write(dir, f, txt);
  git(dir, 'add', '-A');
  commit(dir, 'base');
  git(dir, 'tag', 'base');
  return dir;
}

function write(dir, f, txt) {
  fs.mkdirSync(path.join(dir, path.dirname(f)), { recursive: true });
  fs.writeFileSync(path.join(dir, f), txt);
}

function run(dir) {
  const r = spawnSync('node', [SCRIPT, '--base', 'base', '--root', dir], { encoding: 'utf8' });
  return { code: r.status, out: r.stdout + r.stderr };
}

const urlBlocks = (xml) => xml.match(/<url>(?:(?!<\/url>)[\s\S])*<\/url>/g) || [];
const read = (dir, f) => fs.readFileSync(path.join(dir, f), 'utf8');
const origin = (dir) => read(dir, MAIN_SITEMAP).match(/<loc>\s*(https?:\/\/[^/<]+)/)[1];
const appendUrl = (dir, url) =>
  write(dir, MAIN_SITEMAP, read(dir, MAIN_SITEMAP).replace('</urlset>', `<url><loc>${url}</loc></url></urlset>`));
// First URL of sitemap.xml whose path is a single segment, and its <url> block.
const firstPage = (dir) => {
  const block = urlBlocks(read(dir, MAIN_SITEMAP)).find((b) => /<loc>\s*https?:\/\/[^/]+\/[a-z0-9-]+\s*<\/loc>/.test(b));
  return { block, url: block.match(/<loc>\s*([^<]*?)\s*<\/loc>/)[1] };
};

test('positive witness: unchanged head passes', () => {
  const r = run(fixture());
  assert.equal(r.code, 0, r.out);
  assert.match(r.out, /check-sitemap-drift OK/);
});

test('negative: 1 500 URLs removed from sitemap.xml fails', () => {
  const dir = fixture();
  let xml = read(dir, MAIN_SITEMAP);
  const blocks = urlBlocks(xml);
  assert.ok(blocks.length > 1500);
  for (const b of blocks.slice(0, 1500)) xml = xml.replace(b, '');
  write(dir, MAIN_SITEMAP, xml);
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /client\/public\/sitemap\.xml: 1500 expected URL\(s\) missing/);
});

test('negative: 50 URLs replaced by foreign URLs fails', () => {
  const dir = fixture();
  let xml = read(dir, MAIN_SITEMAP);
  const locs = xml.match(/<loc>[^<]+<\/loc>/g).slice(10, 60);
  locs.forEach((l, i) => { xml = xml.replace(l, `<loc>https://foreign.example/pagina-${i}</loc>`); });
  write(dir, MAIN_SITEMAP, xml);
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
      const f = `${d}/${name}`;
      if (!SURFACE.test(f)) continue;
      const txt = read(dir, f);
      const out = name.endsWith('.txt')
        ? txt.split('\n').filter((l) => !l.includes(VILA_VERDE)).join('\n')
        : urlBlocks(txt).filter((b) => b.includes(VILA_VERDE)).reduce((x, b) => x.replace(b, ''), txt);
      if (out !== txt) { write(dir, f, out); touched++; }
    }
  }
  assert.ok(touched >= 2, `Vila Verde found in ${touched} files`);
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /eletricista-vila-verde-da-raia/);
  assert.match(r.out, /indexnow-urls\.txt: 1 expected URL\(s\) missing/);
});

test('negative: URL declared in a new manifest but still present fails', () => {
  const dir = fixture();
  const { url } = firstPage(dir);
  write(dir, MANIFEST, JSON.stringify({ paths: [new URL(url).pathname] }));
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /unexpected URL\(s\)/);
  assert.ok(r.out.includes(url), r.out);
});

test('negative: sitemap file deleted or added fails', () => {
  const dir = fixture();
  fs.rmSync(path.join(dir, 'client/public/sitemap-dynamic.xml'));
  write(dir, 'client/public/sitemap-new.xml', '<urlset><url><loc>https://x.example/a</loc></url></urlset>');
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /sitemap-dynamic\.xml: file missing in head/);
  assert.match(r.out, /sitemap-new\.xml: file absent from base/);
});

test('positive: added URL whose HTML file exists in the PR passes', () => {
  const dir = fixture();
  write(dir, 'public/blog/teste-garde-adicao.html', '<!doctype html><title>t</title>');
  git(dir, 'add', 'public/blog/teste-garde-adicao.html');
  appendUrl(dir, `${origin(dir)}/blog/teste-garde-adicao.html`);
  const r = run(dir);
  assert.equal(r.code, 0, r.out);
  assert.match(r.out, /added_with_html=1/);
});

test('negative: added URL without HTML file fails', () => {
  const dir = fixture();
  appendUrl(dir, `${origin(dir)}/blog/teste-garde-sem-html.html`);
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /1 unexpected URL\(s\).*teste-garde-sem-html/s);
});

test('negative: added URL with an untracked HTML file fails', () => {
  const dir = fixture();
  write(dir, 'public/blog/teste-garde-nao-versionado.html', '<!doctype html>');
  appendUrl(dir, `${origin(dir)}/blog/teste-garde-nao-versionado.html`);
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /teste-garde-nao-versionado/);
});

test('inherited manifest unchanged from base is ignored', () => {
  // Base already holds a manifest declaring a URL that is still in the sitemap.
  // If the guard read it, that URL would be expected removed and the run would fail.
  const probe = fixture();
  const { url } = firstPage(probe);
  const dir = fixture({ [MANIFEST]: JSON.stringify({ paths: [new URL(url).pathname] }) });
  const r = run(dir);
  assert.equal(r.code, 0, r.out);
  assert.match(r.out, /DELETE-MANIFEST\.json unchanged from base: ignored/);
  assert.match(r.out, /manifest_keys=0/);
});

test('negative: undeclared removal fails', () => {
  const dir = fixture();
  const { block, url } = firstPage(dir);
  write(dir, MAIN_SITEMAP, read(dir, MAIN_SITEMAP).replace(block, ''));
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /client\/public\/sitemap\.xml: 1 expected URL\(s\) missing/);
  assert.ok(r.out.includes(url), r.out);
});

test('negative: undeclared removal under an inherited manifest fails', () => {
  const probe = fixture();
  const { url } = firstPage(probe);
  const dir = fixture({ [MANIFEST]: JSON.stringify({ paths: [new URL(url).pathname] }) });
  const { block } = firstPage(dir);
  write(dir, MAIN_SITEMAP, read(dir, MAIN_SITEMAP).replace(block, ''));
  const r = run(dir);
  assert.notEqual(r.code, 0, r.out);
  assert.match(r.out, /1 expected URL\(s\) missing/);
});
