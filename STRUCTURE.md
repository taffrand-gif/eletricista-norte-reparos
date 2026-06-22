# STRUCTURE — `eletricista-norte-reparos` (eletricista-norte-reparos.pt)

> Site React/Vite NORTE-OS. **Dérive du repo canonical `canalizador`** : même standard, même moteur de pages. En cas de doute sur une convention, le canonical fait foi.
> Doc = ce qui EXISTE et est prouvé sur disque (2026-06-22). Pas un idéal.
> **PROD** : projet Vercel `eletricista-norte-reparos`, branche `main`, domaine `eletricista-norte-reparos.pt`. Remote = source de vérité.

---

## 1. Stack

React 18 + TypeScript + Vite (SPA) · Wouter (routing) · TailwindCSS · esbuild (bundle serveur) · Drizzle.
Build = **npm** (voir §7). Déploiement = **push Git** (jamais API/CLI Vercel).

## 2. Arborescence réelle

```
eletricista-norte-reparos/
├── client/src/
│   ├── components/   composants UI partagés (front). Contiennent le conditionnel tél — voir §6
│   ├── contexts/     React contexts
│   ├── data/         contenu éditorial : cityContent.ts, cidadesProximas.ts
│   ├── hooks/        TOUS les hooks (client/src/_core fusionné ici — choix 1A)
│   ├── lib/          utilitaires bas niveau
│   ├── pages/        pages racine + blog/ + cidades/ + CityServicePage.tsx (template villes)
│   ├── shared/       composants partagés FRONT uniquement
│   ├── utils/
│   └── App.tsx       table de routes (dont la route dynamique ville — voir §4)
├── shared/           DONNÉES + CONFIG lues par build/server/drizzle. NE PAS déplacer
│   ├── serviceConfig.ts      ← CITIES[] (liste des villes, SOURCE) + autres configs
│   ├── cityServiceMatrix.ts  ← SERVICES[] + getCityServiceData() (moteur ville×service)
│   ├── siteConfig.ts         ← config site (nom, SEO de base)
│   ├── napConfig.ts          ← NAP (nom/adresse/téléphone) : phone '932 321 892'
│   ├── blogArticles.ts seoKeywords.ts images.ts const.ts types.ts
│   └── _core/errors.ts       (helper erreurs — voir §9)
├── content/ drizzle/ public/ server/
├── scripts/          generate-favicons, optimize-images.js
├── vite.config.ts vercel.json package.json tsconfig.json components.json
└── package-lock.json (lockfile npm — PAS de pnpm, voir §7)
```

## 3. Le moteur de pages-villes (équivalent React du « master R13 »)

**Aucun fichier `.tsx` par ville.** Pages ville×service générées par UN template + DEUX listes. Pattern data-driven à préserver.

| Pièce | Fichier | Rôle |
|---|---|---|
| Liste des villes | `shared/serviceConfig.ts` → `CITIES[]` | entrées `{ name, slug, district, parentCity? }` |
| Liste des services | `shared/cityServiceMatrix.ts` → `SERVICES_NORTE_REPAROS[]` | services électricité `{ slug, name, basePrice, icon, description }` |
| Combinateur | `shared/cityServiceMatrix.ts` → `getCityServiceData()` + `calculatePriority()` | retourne `{ city, service, url, priority }`, URL = `/{serviceSlug}-{citySlug}` |
| Template | `client/src/pages/CityServicePage.tsx` | une seule page React |
| Route | `client/src/App.tsx` → `<Route path="/:service-:city" component={CityServicePage} />` | route dynamique unique (lazy) |

Pages = `CITIES × SERVICES`.

## 4. Ajouter une ville (procédure prouvée)

1. Éditer `shared/serviceConfig.ts` → ajouter un objet à `CITIES[]` :
   ```ts
   { name: 'Nova Vila', slug: 'nova-vila', district: 'Bragança' }
   ```
2. Rien d'autre à router : la route `/:service-:city` + `CityServicePage.tsx` rendent chaque `/{service}-{slug}`.
3. Régénérer le sitemap (script sitemap du repo) puis vérifier en local (§7) et push.

**Ajouter un service** = objet dans `SERVICES_NORTE_REPAROS[]`. Périmètre métier = électricité uniquement.

## 5. Conventions verrouillées (Filipe, 2026-06-22)

- **1A — hooks unifiés** : un seul `client/src/hooks/` (`client/src/_core` fusionné). ≠ `shared/_core` (§9).
- **2A — deux `shared/` distincts** :
  - `shared/` (racine) = données/config lues par build/server/drizzle. **Déplacer = casser le build.**
  - `client/src/shared/` = composants front uniquement.

## 6. ⚠️ Piège : numéro de téléphone 932 / 928

Deux niveaux :

1. **Identité du site** : `shared/napConfig.ts` → `phone: '+351 932 321 892'` / `phoneFormatted: '932 321 892'` (propre à ce repo électricien).
2. **Conditionnel partagé** : les composants UI partagés (`Diagnostico.tsx`, `Garantias.tsx`, `CalculadorPreco.tsx`…) contiennent :
   ```ts
   const isPlumber = config.id === 'norte-reparos';
   const phone = isPlumber ? '928484451' : '932321892';
   ```
   → ici `config.id` ≠ `'norte-reparos'`, donc la branche `else` (932) est servie. Le littéral **`928` apparaît quand même dans ce repo** : branche plombier du composant partagé, non affichée ici.

🔴 **Ne JAMAIS remplacer `928` (ni `932`) en aveugle.** Casse une branche du ternaire `isPlumber ? … : …` (régression réelle déjà survenue côté canalizador, cf. execution-log #98). Display-text en dur = corrigeable ; le ternaire = NON sans intention.

## 7. Build & déploiement (réalité Vercel)

- Vercel exécute `npm install --legacy-peer-deps` puis `npm run build`. Lockfile = **`package-lock.json`**.
- **Pas de `pnpm-lock.yaml` ni `packageManager`** (retirés, stale).
- `npm run build` = `vite build` + `esbuild server/index.ts … --outdir=dist` ; `prebuild` = `optimize-images`.
- Scripts : `npm run check` (tsc), `npm run lint`, `npm run dev`.
- **Avant push** : `npm install --legacy-peer-deps && npm run build` local, vert obligatoire.
- Déploiement = `git push` sur `main`. Jamais d'API/CLI Vercel pour le code.

## 8. Hygiène repo

- Pas de `vercel.json.backup-*` ni de data brute en racine (le `matriz_keywords_seo.csv` parasite a été retiré).
- Un seul trigger deploy : `.vercel-deploy-trigger` (le `.force-deploy` a été nettoyé).

## 9. Divergences connues (signalées, NON corrigées — décision Filipe)

- `shared/_core/errors.ts` existe (racine, ≠ `client/src/_core` fusionné par 1A). Hors périmètre 1A.
- `shared/seoKeywords.ts` contient des titres mentionnant « Canalizador … 928 484 451 » (mots-clés plombier dans le repo électricien). À vérifier : copie non adaptée vs intention SEO. Non touché.
- Divergence vs `canalizador` dans `shared/` : ici `blogArticles.ts` + `napConfig.ts` ; là-bas `videoData.ts` + `topicClusters.ts`. Normal (contenu métier distinct).

## 10. Hors périmètre de ce repo

- Sites statiques `*-urgente` : voir leur `STRUCTURE.md`.
- `microsites` : monorepo. `fabric` : tiers, exclu.
