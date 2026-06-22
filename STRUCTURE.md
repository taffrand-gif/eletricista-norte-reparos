# STRUCTURE — Standard NORTE-OS (sites React/Vite)

> Référence: ce repo (canalizador, canonical). eletricista en dérive. Validé Filipe 2026-06-22 (choix 1A/2A/3A).
> Build réel = **npm** (`npm install --legacy-peer-deps`), PAS pnpm (voir §Build).

## Arborescence cible
```
<repo>/
├── client/src/
│   ├── components/    composants UI partagés (front)
│   ├── contexts/      React contexts
│   ├── data/          cityContent.ts (contenu éditorial par ville)
│   ├── hooks/         TOUS les hooks (1A: _core/ fusionné ici)
│   ├── lib/           utilitaires bas niveau
│   ├── pages/         pages racine + blog/ + cidades/
│   ├── shared/        composants partagés FRONT uniquement
│   └── utils/
├── shared/            DONNÉES + CONFIG partagées build+runtime
│   ├── cityServiceMatrix.ts   ← matrice villes × services (SOURCE)
│   └── siteConfig.ts          ← config site (isPlumber ? canal : elec)
├── content/ drizzle/ public/ server/
├── scripts/           génération (sitemap, favicons, optimize-images)
├── vite.config.ts vercel.json package.json tsconfig.json components.json
```

## Conventions (choix validés)
- **1A — hooks unifiés:** un seul dossier `client/src/hooks/`. Pas de `_core/`.
- **2A — deux `shared/` distincts (frontière claire, PAS de fusion):**
  - `shared/` (racine) = données + config lues par build/server/drizzle (matrix, siteConfig). NE PAS déplacer (casse les imports build).
  - `client/src/shared/` = composants partagés du front uniquement.
- **3A — pas de réorg des URLs statiques** (urgente): voir repo urgente.

## Ajouter une ville (React)
**Ne créez PAS de fichier .tsx par ville.** Éditez `shared/cityServiceMatrix.ts` (ajout ville × services). Le template `client/src/pages/CityServicePage.tsx` rend la page. Régénérez le sitemap (`scripts/generate-sitemap.ts`).

## Numéro de téléphone / identité
Source: `shared/siteConfig.ts` via `isPlumber ? '928 484 451' : '932 321 892'`. **Ne jamais remplacer le littéral `932` en aveugle** (casse la branche élec du composant partagé). Display-text dans pages = peut être corrigé, le conditionnel NON.

## Build (réalité Vercel)
- Vercel exécute `npm install --legacy-peer-deps` + `npm run build`. Lockfile = `package-lock.json`. **Pas de pnpm-lock.yaml ni de champ `packageManager: pnpm`** (retirés — étaient stale, Vercel ignore pnpm).
- Vérifier un changement = `npm install --legacy-peer-deps && npm run build` localement avant push.

## Hygiène repo
- Pas de `vercel.json.backup-*` (utiliser git).
- Pas de data brute en racine (ex: `*.csv` → `client/src/data/` ou hors repo).
- Un seul trigger deploy: `.vercel-deploy-trigger`.

## Hors standard
- **Sites statiques** (urgente): template R13 `master-canal-R13.html` + substitution `{{placeholders}}` → `<ville>.html`. Masters à rapatrier dans le repo (`_templates/`) — décision en cours.
- **microsites**: monorepo, 1 dossier/site (index.html + posts/). Convention simple, déjà OK.
- **fabric**: tiers, EXCLU.
