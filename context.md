# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-07-29
- Tâche exécutée : **B3 — H1 sémantique** (SEO_PLAN.md §B3, priorité BASSE) — extraction du `style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}` inline du H1 homepage vers une classe CSS `.hero-title-shadow`.
- Branche créée : `loop/2026-07-29-eletricista-norte-reparos-b3-h1-semantique`
- Commits : `d67003b0b9` (client/src/index.css), `767996dc60` (client/src/components/Hero.tsx), + 1 commit SEO_PLAN.md
- PR ouverte : https://github.com/taffrand-gif/eletricista-norte-reparos/pull/233
- Résultat : ✅ 3 commits, 3 fichiers (1 par commit, atomique). Témoins R8 : `textShadow` Hero.tsx 1→0 ; `hero-title-shadow` index.css 0→1 ; `<h1 ... style=` dans `client/src/` 1→0. Critère GO/STOP (rendu visuel identique) respecté. `npx tsc --noEmit` : 0 erreur dans `Hero.tsx`. Attente GO merge Philippe (R7).

## Tâche suivante recommandée
- **B3 est TERMINÉ — ne pas le rouvrir.** Il reste 0 `<h1 ... style=` dans `client/src/`.
- Tâche : **B4 — Différenciation services électriques** (SEO_PLAN.md §B4, S5) — section « Serviços » avec 4-6 services distincts (Instalação, Quadro Elétrico, Certificação, LED).
- Priorité : MOYENNE
- ⚠️ **Garde-fou R4 impératif sur B4** : ne lister que des services réellement présents dans `shared/siteConfig.ts` → `services[]`. Et surtout **ne PAS réintroduire les services interdits** (chargeur VE, solaire, AC) qui sont précisément le blocage §1 ci-dessous.

## Apprentissages (self-improving)
- **`client/src/index.css` de ce site contient 2 `@layer`** (`base` L125, `components` L179), contrairement à `canalizador-norte-reparos` qui n'en a aucun. Placement sûr d'une règle custom : **en fin de fichier, hors de tout `@layer`** — le CSS non-layered l'emporte sur le CSS layered dans la cascade, donc jamais écrasé par Tailwind.
- Tailwind (version de ce repo) **ne fournit aucune utilitaire `text-shadow`** → extraire une ombre inline vers une classe custom est sans risque de conflit.
- **Le `<h1>` est strictement identique sur les 2 sites `*-norte-reparos`** (mêmes classes, même ombre) : les patchs cosmétiques du hero sont copiables tels quels d'un site à l'autre.
- Le bug « Garantia 2 Anos » (écart Hero.tsx ↔ siteConfig) signalé au run du 30/06 est **résolu** : Hero.tsx L99 dit « Garantia 1 ano », aligné sur `siteConfig.ts` L108/L124. Ne pas re-flaguer.
- « WhatsApp Grátis » (Hero.tsx L89) : **non-violation** confirmée (canal de messagerie gratuit par nature ≠ claim commercial sur le prix). Ne pas re-flaguer.
- `SEO_PLAN.md` de ce repo a des entrées HISTORIQUE jusqu'au 2026-07-17 (MONOPOLE money-kw PR #204 draft, P0 NAP click-to-call) alors que `context.md` datait du 30/06 : **les deux fichiers dérivent indépendamment, lire les DEUX**.

## Edge cases détectés
- **`mcp__desktop-commander__edit_block` échoue sur `Hero.tsx`** : l'indentation réelle du fichier diffère de celle retournée par les outils de lecture. Workaround fiable : `perl -0pi -e "s/…/…/"` avec motif échappé, puis vérification obligatoire par `git diff`.
- ⚠️ **Ne jamais lancer `git checkout origin/main -- .` depuis une branche de travail** pour inspecter un fichier : ça écrase tout le worktree. Utiliser `git show origin/main:<path>` (lecture pure).
- Le sandbox `mcp__workspace__bash` **n'a ni `gh` ni credentials Git** → tout git/gh doit passer par `mcp__desktop-commander__start_process` (host macOS, `gh` authentifié `taffrand-gif` via keyring).
- Untracked `.worktrees/` et `memory/` à la racine (autre automation) — inoffensifs, à ignorer, ne jamais les committer/supprimer.
- Ce repo n'a qu'un seul remote, nommé `origin` → pointe bien vers GitHub (contrairement à `canalizador-norte-reparos` où `origin` est un chemin local et le vrai remote s'appelle `github`). **Vérifier `git remote -v` avant chaque push.**

## Blocages connus
1. **Services interdits dans `client/public/`** (~297 pages : chargeur VE, solaire, AC) → 🛑 STOP, attente GO explicite de Philippe avant tout batch fix. Non touché ce run, comme aux précédents.
2. PR #204 (MONOPOLE money-kw, draft, branche `feat/monopole-guias-enr`) — vérifier son statut.
3. PR #78 (R4/R11 Hero trust indicators, run du 30/06) — vérifier si elle a été mergée.

## Instructions améliorées pour prochain run
1. **Vérifier `git remote -v` en premier** : sur ce repo le remote GitHub s'appelle `origin` ; sur `canalizador-norte-reparos` il s'appelle `github`. Ne pas supposer.
2. Créer la branche loop depuis le remote (`git checkout -b loop/YYYY-MM-DD-{site}-{tache} origin/main`), pas depuis `main` local.
3. Lire **`SEO_PLAN.md` HISTORIQUE ET `context.md`** — les deux dérivent indépendamment (constaté ce run : 17/07 vs 30/06).
4. Grep `Grátis|Garantia [0-9]|⭐` sur le fichier cible en premier (pattern récurrent R4/R11) — mais les 2 hits actuels de `Hero.tsx` sont tranchés comme non-violations, ne pas les re-flaguer.
5. Vérifier le build avec `npx tsc --noEmit` après patch : le repo a des erreurs TS **pré-existantes** (`GoogleReviews.tsx`, `lib/trpc.ts`, `pages/cidades/*.tsx`) — ne pas les confondre avec une régression, filtrer sur le fichier patché.
6. Utiliser `perl -0pi -e` (pas `edit_block`) pour les patchs sur `Hero.tsx`, puis vérifier par `git diff`.
7. NE PAS toucher `client/public/` services interdits sans GO explicite de Philippe.
