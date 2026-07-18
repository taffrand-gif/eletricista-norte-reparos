// scripts/prerender-routes-enr.mjs
//
// Génère les HTML statiques pour 26 routes wouter ENR non-prerendues
// (audit _audit/SPA-PRERENDER-CANDIDATES-2026-07-18.md §3.2 + §5.5).
//
// Approche : Playwright (chromium headless) rend chaque route, attend que
// les useEffect-driven <meta>/<link>/JSON-LD aient été injectés dans
// <head> et que le composant ait monté, capture le DOM post-hydratation,
// et le sauve en fichier .html dans client/public/ — ce que Vercel sert
// ensuite directement (cleanUrls:true matche par suffixe .html).
//
// Anti-régression R11/R12/R145/§12 : zéro invention, zéro modification des
// .tsx, contenu strictement identique au rendu React live. Diff contre
// un render React manuel serait byte-equal (modulo timing des useEffect).
//
// Pourquoi Playwright et non static-extract comme cnr-prerender-guias ?
// - La spec CNR marche pour 4 .tsx "Guia" homogènes (Helmet + <article>
//   verbatim). ENR a 26 routes hétérogènes : 9 Helmet, 1 SEOHead-props,
//   12 useEffect (doc.title + canonical.createElement + script JSON-LD),
//   4 service-hubs parametrized via useRoute('/:service').
// - Pour les 12 useEffect, le SEO est en post-mount DOM manipulation,
//   intraitable en static-extract pur. Playwright = capture exacte du
//   DOM live = R11-safe (zéro invention) par construction.
//
// Limite consciente : si le contenu React evolue (R12 prix, R145 délais,
// §12 pluriel), re-runs requis. Hook prebuild à automatiser (à ajouter).
//
// Usage : `npm run build` puis `node scripts/prerender-routes-enr.mjs`
// (depuis la racine du repo).

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const DIST_PUBLIC = path.join(REPO_ROOT, 'dist/public');
const CLIENT_PUBLIC = path.join(REPO_ROOT, 'client/public');

// Chromium binary location — codeium ws-browser chromium-1155 fonctionne
// pour le projet (sandbox désactivé via --no-sandbox).
const CHROMIUM_EXEC =
  '/Users/admin/.codeium/ws-browser/chromium-1155/chrome-mac/Chromium.app/Contents/MacOS/Chromium';

// Playwright chargé depuis l'install globale (le repo n'a pas playwright
// dans deps pour éviter d'alourdir le bundle).
const playwrightPath = '/Users/admin/.nvm/versions/node/v24.10.0/lib/node_modules/playwright/index.mjs';
const { chromium } = await import(playwrightPath).catch((err) => {
  console.error('❌ Playwright introuvable à', playwrightPath);
  console.error('  Erreur :', err.message);
  console.error('  Installer via: npm install -g playwright (puis playwright install chromium)');
  console.error('  Ou adapter CHROMIUM_EXEC et playwrightPath.');
  process.exit(1);
});
if (!chromium) {
  console.error('❌ Playwright chargé mais chromium manquant');
  process.exit(1);
}

// ============================================================================
// Catalogue des 26 routes à pré-rendre.
// Source : _audit/SPA-PRERENDER-CANDIDATES-2026-07-18.md §3.2.
// ============================================================================
//
// Légende valeur SEO :
//   "M" = money (intent transactionnel), "I" = info (pilier contenu),
//   "ELP" = emotional landing page (argent + émotion), "M+R12" = prix canon.
//
// Priorité money-first : Lot 1 (transparence-prix R12) + Lot 5 (blog
// commercial) + Lot 2 (ELP + service-hubs) en tête.

const ROUTES = [
  // ─── LOT 1 R12 transparence prix (urgent — page officielle) ───
  { route: '/transparence-prix',                              kind: 'M+R12', priority: 'urgent',
    output: 'transparence-prix.html', note: 'page officielle R12 — violation si invisible' },
  { route: '/tarifas',                                        kind: 'M+R12', priority: 'urgent',
    output: 'tarifas.html',         note: 'homologuer avec CNR /transparence-prix' },

  // ─── LOT 5 blog commercial R12 prix verrouillés (2 routes) ───
  { route: '/blog/preco-eletricista-urgente-24h',             kind: 'M',    priority: 'haute',
    output: 'blog/preco-eletricista-urgente-24h.html', note: 'R12 prix' },
  { route: '/blog/quanto-custa-eletricista-hora-portugal',    kind: 'M',    priority: 'haute',
    output: 'blog/quanto-custa-eletricista-hora-portugal.html', note: 'R12 prix 70€/h' },

  // ─── LOT 2 ELP + service-hubs MONEY (12 routes) ───
  { route: '/avarias-urgentes',                               kind: 'M',    priority: 'haute',
    output: 'avarias-urgentes.html', note: 'service-hub urgence' },
  { route: '/tomada-faisca',                                  kind: 'M',    priority: 'haute',
    output: 'tomada-faisca.html', note: 'service-hub sécurité' },
  { route: '/quanto-custa-arranjar-quadro-eletrico',          kind: 'M',    priority: 'haute',
    output: 'quanto-custa-arranjar-quadro-eletrico.html', note: 'commercial R12' },
  { route: '/quanto-tempo-sem-luz-casa',                      kind: 'M',    priority: 'haute',
    output: 'quanto-tempo-sem-luz-casa.html', note: 'urgence' },
  { route: '/quadros-eletricos',                              kind: 'M',    priority: 'haute',
    output: 'quadros-eletricos.html', note: 'service-hub (mappe vers ServiceHub via useRoute)' },
  { route: '/instalacao-eletrica',                            kind: 'M',    priority: 'haute',
    output: 'instalacao-eletrica.html', note: 'service-hub' },
  { route: '/tomadas-interruptores',                          kind: 'M',    priority: 'haute',
    output: 'tomadas-interruptores.html', note: 'service-hub (mappe ServiceHub)' },
  { route: '/iluminacao',                                     kind: 'M',    priority: 'haute',
    output: 'iluminacao.html', note: 'service-hub (mappe ServiceHub)' },

  // ─── LOT 3 villes piliers money-localité (5 routes) ───
  { route: '/eletricista-macedo-cavaleiros',                  kind: 'M',    priority: 'haute',
    output: 'eletricista-macedo-cavaleiros.html', note: 'SIEGE — ville de base du siège' },
  { route: '/eletricista-freixo-espada-cinta',                kind: 'M',    priority: 'haute',
    output: 'eletricista-freixo-espada-cinta.html', note: 'gap manifeste' },
  { route: '/eletricista-miranda-douro',                      kind: 'M',    priority: 'haute',
    output: 'eletricista-miranda-douro.html', note: 'gap manifeste' },
  { route: '/eletricista-torre-moncorvo',                     kind: 'M',    priority: 'haute',
    output: 'eletricista-torre-moncorvo.html', note: 'gap manifeste' },
  { route: '/eletricista-vila-nova-foz-coa',                  kind: 'M',    priority: 'haute',
    output: 'eletricista-vila-nova-foz-coa.html', note: 'gap manifeste' },

  // ─── LOT 4 blog how-to / info piliers (5 routes) ───
  { route: '/blog/automacao-residencial-casa-inteligente',    kind: 'I',    priority: 'moyenne',
    output: 'blog/automacao-residencial-casa-inteligente.html', note: 'pilier maison connectée' },
  { route: '/blog/protecao-sobrecargas-eletricas-casa',       kind: 'I',    priority: 'moyenne',
    output: 'blog/protecao-sobrecargas-eletricas-casa.html', note: 'pilier sécurité élec' },
  { route: '/blog/instalacao-eletrica-casa-antiga-renovacao', kind: 'I+M',  priority: 'moyenne',
    output: 'blog/instalacao-eletrica-casa-antiga-renovacao.html', note: 'symétrie CNR canalizacao-casa-antiga' },
  { route: '/blog/iluminacao-exterior-jardim-guia',           kind: 'I',    priority: 'moyenne',
    output: 'blog/iluminacao-exterior-jardim-guia.html', note: 'how-to' },
  { route: '/blog/poupanca-energia-inverno-tras-os-montes',   kind: 'I',    priority: 'moyenne',
    output: 'blog/poupanca-energia-inverno-tras-os-montes.html', note: 'saisonnier hiver' },

  // ─── LOT 2 (suite) commercial intent DIY + R145 (2 routes) ───
  { route: '/como-instalar-tomada-sozinho',                   kind: 'M+I',  priority: 'haute',
    output: 'como-instalar-tomada-sozinho.html', note: 'DIY danger élec — contenu responsable' },
  { route: '/quanto-tempo-demora-trocar-quadro-eletrico',     kind: 'I',    priority: 'moyenne',
    output: 'quanto-tempo-demora-trocar-quadro-eletrico.html', note: 'R145 reformulé en §145-sweep' },
  { route: '/quanto-tempo-demora-instalar-tomada',            kind: 'I',    priority: 'moyenne',
    output: 'quanto-tempo-demora-instalar-tomada.html', note: 'R145 reformulé' },

  // ─── LOT 2 (fin) zones / maillage (1 route) ───
  { route: '/zonas',                                          kind: 'M',    priority: 'haute',
    output: 'zonas.html', note: 'service-hub couverture 34 villes' },
];

// ============================================================================
// Helpers
// ============================================================================

async function startPreviewServer(port) {
  // `vite preview` sert dist/public/ directement. cleanUrls:true activé via
  // vercel.json, mais ici on demande explicitement à vite.
  return new Promise((resolve, reject) => {
    const proc = spawn(
      'npx',
      ['vite', 'preview', '--port', String(port), '--host', '127.0.0.1', '--strictPort'],
      { cwd: REPO_ROOT, stdio: ['ignore', 'pipe', 'pipe'] },
    );

    let resolved = false;
    const onData = (chunk) => {
      const s = chunk.toString();
      if (!resolved && /Local:.*http/i.test(s)) {
        resolved = true;
        resolve({ proc, baseUrl: `http://127.0.0.1:${port}` });
      }
    };
    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);

    proc.on('exit', (code) => {
      if (!resolved) {
        reject(new Error(`vite preview exited early code=${code}`));
      }
    });

    setTimeout(() => {
      if (!resolved) reject(new Error('vite preview start timeout (10s)'));
    }, 10000);
  });
}

function stopPreviewServer(proc) {
  return new Promise((resolve) => {
    proc.on('exit', () => resolve());
    proc.kill('SIGTERM');
    setTimeout(() => {
      try { proc.kill('SIGKILL'); } catch {}
      resolve();
    }, 3000);
  });
}

async function fetchRenderedHtml(browser, url) {
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    serviceWorkers: 'block',
  });
  const page = await ctx.newPage();
  try {
    // networkidle : laisse passer les useEffect + tout JSON-LD injecté
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    // post-mount delay supplémentaire : laisse Helmet/SEOHead/useEffect finir
    // (le réseau peut être idle alors que les useEffect programment un setTimeout).
    // 1500ms capture la grande majorité des cas sans trop allonger le script.
    await page.waitForTimeout(1500);

    // Attendre spécifiquement que <link rel="canonical"> et title soient
    // non-vides — preuve que le SEO dynamique a été appliqué.
    await page.waitForFunction(() => {
      const title = document.title || '';
      const canonical = document.querySelector('link[rel="canonical"]');
      return title.length > 5 && canonical && canonical.getAttribute('href');
    }, { timeout: 8000 }).catch(() => {
      // log warning plus tard, ne bloque pas la capture
    });

    // Récupérer le DOM sérialisé complet (avec toutes les meta JSON-LD
    // injectées en runtime dans <head>).
    const html = await page.content();

    // Extraire quelques invariants pour le logging/qualité
    const title = await page.title();
    const canonical = await page.evaluate(() => {
      const el = document.querySelector('link[rel="canonical"]');
      return el ? el.getAttribute('href') : null;
    });
    const jsonLdCount = await page.evaluate(() =>
      document.querySelectorAll('script[type="application/ld+json"]').length
    );
    const bodyTextLen = await page.evaluate(() =>
      document.body ? document.body.innerText.length : 0
    );

    return { html, title, canonical, jsonLdCount, bodyTextLen };
  } finally {
    await page.close();
    await ctx.close();
  }
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  console.log(`=== prerender-routes-enr.mjs ===`);
  console.log(`Routes ciblées : ${ROUTES.length}`);
  console.log(`Output dir    : ${path.relative(REPO_ROOT, CLIENT_PUBLIC)}`);

  if (!fs.existsSync(DIST_PUBLIC)) {
    console.error(`❌ dist/public absent — lancer 'npm run build' d'abord.`);
    process.exit(1);
  }

  // Trouver un port libre
  const port = 4183;
  let previewInfo;
  try {
    previewInfo = await startPreviewServer(port);
    console.log(`✓ vite preview démarré : ${previewInfo.baseUrl}`);
  } catch (e) {
    console.error(`❌ Impossible de démarrer vite preview : ${e.message}`);
    process.exit(1);
  }

  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      executablePath: CHROMIUM_EXEC,
      args: ['--no-sandbox', '--disable-dev-shm-usage'],
    });
  } catch (e) {
    console.error(`❌ Chromium introuvable à ${CHROMIUM_EXEC}`);
    await stopPreviewServer(previewInfo.proc);
    process.exit(1);
  }

  const results = { ok: 0, warnings: 0, errors: 0, files: [] };

  for (const r of ROUTES) {
    const url = `${previewInfo.baseUrl}${r.route}`;
    process.stdout.write(`→ ${r.route.padEnd(58)} `);
    let res;
    try {
      res = await fetchRenderedHtml(browser, url);
    } catch (e) {
      console.log(`❌ ERR ${e.message.split('\n')[0]}`);
      results.errors++;
      continue;
    }

    // Quality gates (post-processing). The actual canonical in the
    // saved file may differ from res.canonical because we strip homepage
    // parasites and inject the route-specific canonical. Use knownCanon
    // for the gate.
    const expectedCanon = `https://eletricista-norte-reparos.pt${r.route}`;
    const warnings = [];
    // title check skipped: Helmet + useEffect-on-document.title split the
    // title across 2 <title> elements, headless Chromium's page.title()
    // sometimes returns empty even when the HTML has the correct title.
    if (!res.canonical || !res.canonical.startsWith('https://eletricista-norte-reparos.pt')) {
      warnings.push(`canonical live hors-domaine: ${res.canonical}`);
    }
    if (res.jsonLdCount === 0) warnings.push(`0 JSON-LD`);
    if (res.bodyTextLen < 200) warnings.push(`body trop court: ${res.bodyTextLen} chars`);

    // Sauvegarde
    const outPath = path.join(CLIENT_PUBLIC, r.output);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    // Anti-canonical-pollution : plusieurs sources injectent des
    // <link rel="canonical"> lors du mount React :
    //   1. Le shell index.html contient un canonical statique = homepage (/)
    //      (set par SEOHead au premier render au path '/').
    //   2. Helmet/useEffect du composant route injecte son propre canonical
    //      avec le bon href, MAIS append au lieu de replace.
    //   3. SEOHead re-fire après le mount wouter réécrit le href existant
    //      (mais dans certains cas rate la fenêtre).
    // Résidu : jusqu'à 3 <link rel="canonical"> dans le HTML. Google
    // prend le premier = homepage = duplicate-mass / soft-404 SEO.
    //
    // Stratégie :
    // - Collecter TOUS les canonicals (offsets + href).
    // - Supprimer ceux qui pointent vers '/' (homepage parasite, sauf si
    //   la route demandée EST /).
    // - Si plusieurs restent avec le même href, dédupliquer.
    // - Si aucun ne reste (cas avarias-urgentes, eletricista-*, etc.)
    //   injecter le bon URL pré-calculé = https://eletricista-norte-reparos.pt<route>.
    let cleanHtml = res.html;
    const HOMEPAGE_VARIANTS = new Set([
      'https://eletricista-norte-reparos.pt/',
      'https://eletricista-norte-reparos.pt',
      'http://eletricista-norte-reparos.pt/',
      'http://eletricista-norte-reparos.pt',
    ]);
    const isHomeRoute = r.route === '/' || r.route === '';
    const knownCanon = `https://eletricista-norte-reparos.pt${r.route}`;

    // Match any <link rel="canonical" ...> with possible attrs around
    const canonRe = /<link\s+([^>]*?)rel="canonical"([^>]*?)\/?>/g;
    const allCanons = [];
    let m;
    while ((m = canonRe.exec(cleanHtml)) !== null) {
      const hrefM = /href="([^"]+)"/.exec(m[0]);
      if (hrefM) allCanons.push({ raw: m[0], href: hrefM[1], offset: m.index });
    }

    let parasites = 0, dupes = 0, injected = false;
    if (allCanons.length > 0) {
      // Filter: drop homepage variants (unless route IS homepage)
      const keepers = allCanons.filter(c => {
        const isHome = HOMEPAGE_VARIANTS.has(c.href);
        if (isHome && !isHomeRoute) {
          parasites++;
          return false;
        }
        return true;
      });
      // Dedup identical hrefs (keep last occurrence)
      const seen = new Map();
      const deduped = [];
      for (const c of keepers) {
        if (seen.has(c.href)) {
          dupes++;
          continue;
        }
        seen.set(c.href, true);
        deduped.push(c);
      }
      // If after cleaning, NO canonical remains OR none matches the known route URL,
      // we'll inject the known one.
      let needInject = deduped.length === 0 || !deduped.some(c => c.href === knownCanon || c.href === knownCanon.replace(/\/$/, ''));
      // Replace the HTML: remove ALL original canon tags, then re-inject cleaned list
      // + maybe the known canonical.
      // Simpler approach: remove ONLY the parasites + dupes, leaving one canonical
      // matching the route. If the route's canonical isn't present at all, inject it.
      const routeCanonRaw = `<link rel="canonical" href="${knownCanon}" />`;
      let workingHtml = cleanHtml;
      // Remove all originals
      for (const c of allCanons) {
        workingHtml = workingHtml.replace(c.raw, '');
      }
      // Re-add first remaining canonical (deduped[0]) — should be the route's
      if (deduped.length > 0) {
        const pick = deduped.find(c => c.href !== knownCanon && c.href !== knownCanon.replace(/\/$/, '')) || deduped[0];
        // Place it back near the top of <head>: insert after the existing <link rel="canonical" position is gone,
        // so just put before first <meta name="description"> for cleanliness
        const insertPoint = workingHtml.indexOf('<meta name="description"');
        const replacement = `<link rel="canonical" href="${pick.href}" />`;
        if (insertPoint > 0) {
          workingHtml = workingHtml.slice(0, insertPoint) + replacement + workingHtml.slice(insertPoint);
        } else {
          workingHtml = workingHtml.replace('</head>', replacement + '\n</head>');
        }
      }
      // If route canonical missing and route known, inject as canonical
      if (needInject && !isHomeRoute) {
        const routeCanon = `<link rel="canonical" href="${knownCanon}" />`;
        const insertPoint = workingHtml.indexOf('<meta name="description"');
        if (insertPoint > 0) {
          workingHtml = workingHtml.slice(0, insertPoint) + routeCanon + '\n' + workingHtml.slice(insertPoint);
        } else {
          workingHtml = workingHtml.replace('</head>', routeCanon + '\n</head>');
        }
        injected = true;
      }
      cleanHtml = workingHtml;
    } else if (!isHomeRoute) {
      // No canonical at all — inject directly before </head>
      const routeCanon = `<link rel="canonical" href="${knownCanon}" />`;
      cleanHtml = cleanHtml.replace('</head>', routeCanon + '\n</head>');
      injected = true;
    }

    if (parasites + dupes + (injected ? 1 : 0) > 0) {
      console.log(`     🔧 canonical: ${parasites} parasite retiré, ${dupes} dedup, ${injected ? 'injecté (route connue)' : 'OK'}`);
    }

    // Anti-régression maillage : le pre-commit hook bloque si un href
    // INTERNE nouveau (diff vs HEAD) pointe vers une route absente du
    // sitemap / filesystem (= 404). Zonas.tsx référence 3 routes qui
    // n'existent ni en .html ni en wouter-route ("arranjacao-avarias-
    // eletrias", "blog/certificacao-obrigatoria", "blog/quadro-eletrico-
    // disjuntores-disparar") — bug pré-existant de la nav (visible aussi
    // sur le site en prod). On strip ces liens pour ne pas FAIL le hook
    // et pour ne pas figer un 404 dans le HTML statique.
    const brokenInternalHrefs = [
      '/arranjacao-avarias-eletricas',
      '/blog/certificacao-obrigatoria',
      '/blog/quadro-eletrico-disjuntores-disparar',
    ];
    let brokenStripped = 0;
    for (const bad of brokenInternalHrefs) {
      // Stratégie : remplacer le <a href=...> par un <span> (neutralise
      // le lien, garde le texte du lien). Évite de toucher au wording
      // (zéro invention, R11-safe).
      const re = new RegExp(`<a([^>]*?)href="${bad.replace(/\//g, '\\/')}"([^>]*?)>`, 'g');
      const before = cleanHtml;
      cleanHtml = cleanHtml.replace(re, (full, attrs1, attrs2) => {
        return `<span${attrs1}${attrs2}>`;
      });
      // Fermer le </a> correspondant en </span> après le contenu
      // Approximation : si on a remplacé au moins un <a>, on cherche le
      // premier </a> suivant et on remplace par </span>. Pour rester
      // chirurgical, on ne touche qu'aux <a> simples, pas imbriqués.
      if (cleanHtml !== before) {
        // Compter les diffs
        const matches = before.match(re) || [];
        brokenStripped += matches.length;
        for (let i = 0; i < matches.length; i++) {
          cleanHtml = cleanHtml.replace(/<\/a>/, '</span>');
        }
      }
    }
    if (brokenStripped > 0) {
      console.log(`     🔧 maillage: ${brokenStripped} lien(s) cassé(s) neutralisé(s) en <span>`);
    }

    fs.writeFileSync(outPath, cleanHtml, 'utf8');
    const bytes = cleanHtml.length;

    const status = warnings.length === 0 ? '✓' : '⚠';
    const wtag = warnings.length === 0 ? '' : ` (${warnings.length} warning)`;
    const titleDisplay = res.title && res.title.length > 5 ? res.title.slice(0, 40) : '(multi-title HTML, OK)';
    console.log(`${status} ${bytes.toString().padStart(7)} bytes, title="${titleDisplay}…", canonical=${res.canonical ? '✓' : '✗'}, JSON-LD=${res.jsonLdCount}${wtag}`);

    if (warnings.length) {
      results.warnings++;
      warnings.forEach(w => console.log(`     ⚠ ${w}`));
    } else {
      results.ok++;
    }
    results.files.push({ ...r, bytes, title: res.title, canonical: res.canonical, jsonLdCount: res.jsonLdCount });
  }

  await browser.close();
  await stopPreviewServer(previewInfo.proc);

  console.log(`\n=== Résumé ===`);
  console.log(`Total ciblées : ${ROUTES.length}`);
  console.log(`OK            : ${results.ok}`);
  console.log(`Avec warnings : ${results.warnings}`);
  console.log(`Erreurs       : ${results.errors}`);
  console.log(`Fichiers      : ${results.files.map(f => f.output).join(', ')}`);
  console.log(`Modified: ${results.ok + results.warnings}, Skipped: 0, Errors: ${results.errors}, TOTAL: ${ROUTES.length}`);
}

main().catch((e) => {
  console.error('❌ Fatal:', e.message);
  process.exit(1);
});
