# Gate nettoyage géographique profond ENR — 2026-11-26

STATUS: PASS_COMPLET_AVEC_EXCEPTION — source/artefacts contrôlés, Preview/Production non vérifiés

## Scope verrouillé avant code

- Base : `origin/main` / `4346a759bbd6a7b01fe52d9d83e3bde3b921835a`.
- Population exacte : 35 pages HTML supprimées (34 Moimenta da Beira + 1 Requejo de Sanabria).
- Asset dédié supprimé : `client/public/og/eletricista-moimenta-da-beira.svg`.
- Justification : Moimenta da Beira confirmée hors couverture à 131,3 km par route ; Espagne non promise et Requejo de Sanabria est en Espagne.
- Hors scope : Moimenta de Vinhais/Moimenta autorisée, pages historiques non confirmées individuellement, Chaves/Vila Verde da Raia et Vila Nova da Rainha.
- Aucun merge, aucune publication Production, aucun changement dans une autre PR ou dépôt.

## Invariants

1. `client/public/eletricista-moimenta.html` reste présente ; elle correspond à Moimenta de Vinhais.
2. Les 35 chemins du manifest sont absents de `client/public` et `dist/public`.
3. Aucune occurrence de `Moimenta da Beira`, `moimenta-beira`, `Requejo de Sanabria` ou `requejo-de-sanabria` ne subsiste dans les surfaces source/dist contrôlées, sitemaps, IndexNow, LLM/context, maillage, Schema/FAQ ou `vercel.json`.
4. Les fichiers XML se parsèrent sans erreur.
5. Aucun prix, délai, service ou zone nouvelle n’a été inventé.

## Preuves exécutées

- `npm ci --legacy-peer-deps` : OK ; `npm ci` strict reste bloqué par le conflit préexistant Vite 7 / `@builder.io/vite-plugin-jsx-loc@0.1.1`.
- `npm run build` : OK — Vite, esbuild, `check-sitemap.mjs`, prerender asset sync ; contrôles sitemap/IndexNow OK.
- Scan final déterministe : `MANIFEST_HTML 35`, `FORBIDDEN_HITS 0`, `DELETED_PRESENT 0`, `AUTHORIZED_MOIMENTA_PRESENT True True`, `XML_FILES 22`, `XML_BAD 0`.
- `git diff --check` : OK.
- Population Git : 36 suppressions, dont 35 HTML + 1 asset OG ; modifications limitées aux surfaces listées par le manifest.

## Exception documentée

Le postbuild `prerender-routes-enr.mjs --sync-assets` réaligne les assets dans `dist` et a réintroduit cinq contenus historiques dans quatre HTML source pendant les essais. Les cinq occurrences ont donc été retirées par patchs textuels bornés après le dernier build ; aucun générateur n’a été relancé ensuite. Le build reste vert sur le code et les sitemaps ; le scan final porte sur l’état source/dist effectivement destiné au commit.

`npm run check` : NON VÉRIFIÉ / BLOCKED hors périmètre — 82 erreurs TypeScript préexistantes dans 29 fichiers (`GoogleReviews`, `@trpc/client`, icônes Lucide optionnelles, types de routes/serveur et environnement manquant). Aucune correction de typecheck n’est incluse dans ce lot.

## Statuts

- PASS_SOURCE : manifest, surfaces, maillage, Schema/FAQ, LLM/context, sitemaps, IndexNow et Vercel contrôlés.
- PASS_BUILD : `npm run build` vert ; exception postbuild documentée ci-dessus.
- PASS_HTTP : NON VÉRIFIÉ — à exécuter sur la Preview après création de la Draft PR.
- PRODUCTION : NON VÉRIFIÉ — aucun merge ni changement Production autorisé dans ce lot.
- FINI = [commandes de scan + git diff --check][35 pages + asset][commit à venir][manifest + 20-BUSINESS-FACTS][PASS_SOURCE/PASS_BUILD][Preview à venir, Production non vérifiée][typecheck préexistant bloqué + postbuild réécriture documentée]
