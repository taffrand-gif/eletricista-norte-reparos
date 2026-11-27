# GATES. ENR coverage deletion 2026-11-25

BASE: origin/main
POPULATION: 16 HTML files explicitly authorized for deletion
SCOPE: confirmed Spain, Moimenta/Tavira/Viseu hors couverture, excluding Vila Verde da Raia (Chaves) and Vila Nova da Rainha (Macedo de Cavaleiros)
EXCLUDED: Chaves, ValpaMdos, reserved CNR PAA pages, all other files
INVARIANTS: no sitemap or generator edits in this deletion step; no production; no merge
CHECKS: exact manifest, git diff --check, deleted paths only, generators inspected before PR
STATUS: pending validation

## Intégration SEO/GEO/AEO 2026-11-27
BASE_EFFECTIVE: b4396703d3
OBJECTIF: conserver la population géographique prouvée et appliquer la présentation neutre du prototype ENR.
POPULATION_SUPPLÉMENTAIRE: 5 fichiers source du commit 81ceb314f9, plus ce gate.
INVARIANTS: Moimenta de Vinhais, Chaves et Vila Nova da Rainha conservées ; DGEG/TRIESP uniquement ENR et exacts ; aucune adresse privée ni délai/équipement non sourcé ; téléphone/WhatsApp conservés.
SOURCE: _governance/20-BUSINESS-FACTS.json ; client/src/hooks/useSEO.tsx et composants du prototype ; sitemaps/IndexNow du commit de base.
PREUVES: manifest exact, scan des fichiers présents, JSON-LD parseable, canonical, CTA, sitemap/XML, git diff --check, build/check-sitemap si possible.
STATUT: PARTIEL — intégration rejouée ; aucun merge, Ready ou Production.

## Preuves rejouées — 2026-11-27
- `npm run build`: exit 0.
- `node scripts/check-sitemap.mjs`: PASS ; sitemap principal 3559 URLs et IndexNow 3870 URLs, seuils respectés.
- XML des sitemaps `client/public`: valides ; `git diff --check`: PASS ; worktree propre après build et contrôles.
- Typecheck : NON VÉRIFIÉ / échec sur dette technique préexistante hors périmètre SEO (types `SiteConfig`, tRPC, routes/composants/imports).
- HTTP, DOM, Preview, Production et contrôle Jev : NON VÉRIFIÉS.
