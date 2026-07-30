# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-07-30
- Tâche exécutée : **R12 violation (priorité R11/R12)** — purge de 9 mots-clés d'urgence dans `shared/siteConfig.ts` → `seo.keywords`, injectés en `<meta name="keywords">` sur **toutes les pages** (`SEOHead.tsx` L35, `SEOHeadEnhanced.tsx` L29). Détectée en lecture pré-B4, corrigée en premier conformément à R11/R12.
- Branche créée : `loop/2026-07-30-eletricista-norte-reparos-r12-seo-keywords` (depuis `origin/main`)
- Commits : `2ad6a16838` (shared/siteConfig.ts), puis 1 commit `SEO_PLAN.md` (HISTORIQUE)
- PR ouverte : https://github.com/taffrand-gif/eletricista-norte-reparos/pull/239
- Résultat : ✅ 2 commits, 2 fichiers (1 par commit, atomique). Témoins R8 sur `seo.keywords` : AVANT 41 entrées / 39 uniques (2 doublons) / **9 violations R12** → APRÈS 41 entrées / **41 uniques (0 doublon)** / **0 violation R12**. Remplacements issus exclusivement de `siteConfig.services[]` → zéro invention (R4). Aucun mot-clé `certificação`/DGEG/CERTIEL introduit (garde-fou vs PR #235 en cours). `npx tsc --noEmit` : 0 erreur sur `shared/siteConfig.ts` (82 pré-existantes ailleurs, inchangées). Attente GO merge Philippe (R7).

## Tâche suivante recommandée
- **B1, B2, B3 sont TERMINÉS** — ne pas les rouvrir.
- Tâche : **B4 — Différenciation services électriques** (SEO_PLAN.md §B4, S5).
- ⚠️ **B4 est BLOQUÉE en l'état : sa fiche est squelettique (2 lignes).** Contrairement à B1/B2/B3, §B4 n'a **ni statut, ni fichier cible, ni effort, ni critère GO/STOP** — seulement « **Action** : section "Serviços" avec 4-6 services distincts ». Exécuter B4 telle quelle obligerait le loop à **inventer** le périmètre (quels services ? quelle page ? quel composant ?), ce qui contrevient à R4. **Demander à Philippe de spécifier §B4**, ou appliquer le garde-fou ci-dessous.
- **Garde-fou si GO sur B4** : ne lister que les 4 services réellement présents dans `shared/siteConfig.ts` → `services[]` : `Reparação Avaria Elétrica` (80€), `Quadro Elétrico` (250€), `Instalação Elétrica` (200€), `Iluminação LED` (75€). **Ne PAS réintroduire les services interdits** (chargeur VE, solaire, AC — blocage §1). **Ne PAS introduire de claim `certificação`/DGEG/CERTIEL** tant que PR #235 `fix/dgeg-certiel-removal` n'est pas tranchée.
- Alternative loop-compatible si B4 reste bloquée : appliquer la **méthode d'audit par point d'entrée** (cf. §Instructions §4) sur la homepage de ce repo pour trouver la prochaine violation R12 active — c'est ce qui a produit les 2 dernières PR utiles.

## Apprentissages (self-improving)
- 🔴 **Les corrections R12 ne sont PAS propagées entre les 4 repos.** `seo.keywords` a été purgé sur `canalizador-norte-reparos` le **16/07** (PR #203) ; ce repo portait la **violation identique** encore le **30/07**, 14 jours plus tard. **Règle nouvelle : toute correction R12 sur un repo doit déclencher le même grep sur les 3 autres dans le même run**, et le résultat doit être consigné dans les 4 `context.md`. C'est le pattern le plus coûteux du cycle.
- 🔴 **Vérifier `gh pr list` AVANT de choisir un vocabulaire de remplacement.** Ici, la liste des PR ouvertes a révélé `fix/dgeg-certiel-removal` (#235) : sans cette vérification, le run aurait introduit des mots-clés `certificação elétrica` qu'une autre branche est en train de supprimer → conflit + travail annulé.
- **Compter les doublons programmatiquement**, jamais à l'œil : `seo.keywords` contenait 2 doublons invisibles en lecture (`eletricista 24 horas mirandela`, `instalação elétrica mirandela`). Script réutilisable : parser le tableau avec `re.findall(r"'([^']+)'", ...)` + `collections.Counter`.
- `npx tsc --noEmit 2>&1 | grep -i siteconfig` est un **faux positif** : ça matche le *type* `SiteConfig` dans les messages d'erreur d'autres fichiers. Filtrer sur `^shared/siteConfig.ts`.
- **`client/src/index.css` de ce site contient 2 `@layer`** (`base` L125, `components` L179), contrairement à `canalizador-norte-reparos` qui n'en a aucun. Placement sûr d'une règle custom : en fin de fichier, hors de tout `@layer`.
- Tailwind (version de ce repo) ne fournit aucune utilitaire `text-shadow`.
- Le `<h1>` est strictement identique sur les 2 sites `*-norte-reparos` : les patchs cosmétiques du hero sont copiables tels quels.
- Le bug « Garantia 2 Anos » (écart Hero.tsx ↔ siteConfig) est **résolu** (Hero.tsx L99 = « Garantia 1 ano »). Ne pas re-flaguer.
- « WhatsApp Grátis » (Hero.tsx L89) : **non-violation** confirmée. Ne pas re-flaguer.
- `SEO_PLAN.md` et `context.md` **dérivent indépendamment** — lire les DEUX, et vérifier le statut d'une tâche dans **sa propre fiche `### X — …`**, pas via `grep ⏳` (qui matche aussi HISTORIQUE et le glossaire des statuts).

## Edge cases détectés
- Ce repo n'a **qu'un seul remote, nommé `origin`**, qui pointe bien vers GitHub — contrairement à `canalizador-norte-reparos` où `origin` est un **chemin local** et le vrai remote s'appelle `github`. Un `git fetch github` a échoué ici avant correction. **Toujours `git remote -v` en premier.**
- ⚠️ **Ne jamais lancer `git checkout origin/main -- .`** depuis une branche de travail pour inspecter un fichier : ça écrase tout le worktree. Utiliser `git show origin/main:<path>` (lecture pure) — utilisé ce run pour calculer les témoins AVANT.
- Le sandbox `mcp__workspace__bash` **n'a ni `gh` ni credentials Git en écriture** ; il est en revanche rapide et fiable pour tous les **grep/lecture** sur les fichiers montés. Répartition optimale : lecture/grep → sandbox ; git/gh/npx → `mcp__desktop-commander__start_process` (host macOS, `gh` authentifié `taffrand-gif` via keyring).
- **`Read` puis `Edit` (chaîne exacte) fonctionne bien** sur `shared/siteConfig.ts`. Préférer ce couple à `edit_block` (qui échoue silencieusement sur indentation approximative). Fallback : `perl -0pi -e`.
- Corps de PR long : `cat > /tmp/pr-xxx.md <<'EOF'` puis `gh pr create --body-file`, jamais `--body` inline (échappement zsh).
- Untracked `.worktrees/`, `_indexing/`, `memory/` à la racine (autre automation) — inoffensifs, à ignorer, ne jamais les committer/supprimer.
- `npx tsc --noEmit` : **82 erreurs pré-existantes** sur ce repo (`GoogleReviews.tsx` → `config.contact` inexistant, `QuantoTempo*.tsx` → `config.businessName` inexistant, `lib/trpc.ts`, `pages/cidades/*`). Filtrer sur le fichier patché, ne pas comparer les totaux.

## Blocages connus
1. **Services interdits dans `client/public/`** (~297 pages : chargeur VE, solaire, AC) → 🛑 STOP, attente GO explicite de Philippe avant tout batch fix. Non touché ce run, comme aux précédents.
2. **§B4 de `SEO_PLAN.md` est sous-spécifiée** (2 lignes, pas de critère GO/STOP) → demande une spécification de Philippe avant exécution. Voir §Tâche suivante.
3. **PR #235 `fix/dgeg-certiel-removal` en cours** : tant qu'elle n'est pas tranchée, ne pas introduire de claim `certificação`/DGEG/CERTIEL nulle part sur ce repo.
4. **Dette de type `SiteConfig`** : `GoogleReviews.tsx` référence `config.contact` et `QuantoTempo*.tsx` référence `config.businessName`, deux propriétés **absentes** de l'interface `SiteConfig`. 82 erreurs TS pré-existantes. Candidat à une tâche loop propre (1 fichier = 1 PR) si Philippe veut réduire la dette.
5. **6 PR ouvertes en attente de Philippe** : #226, #235, #236, #237, #238, **#239 (ce run)**. Le goulot n'est plus la production de PR mais leur merge — à signaler.
6. PR #204 (MONOPOLE money-kw, draft, branche `feat/monopole-guias-enr`) : **absente de la liste des PR ouvertes** → mergée ou fermée. Point clos.
7. PR #78 (R4/R11 Hero trust indicators, 30/06) : idem, absente → point clos.

## Instructions améliorées pour prochain run
1. 🔴 **Séquence d'ouverture obligatoire** : `git remote -v` (le remote GitHub est `origin` **ici**) → `git fetch origin main -q` → `git checkout main` → `git reset --hard origin/main` → **puis seulement** lire `context.md`, `SEO_PLAN.md`, `AGENTS.md`. Ne jamais lire l'état du loop depuis une branche feature.
2. **Créer la branche loop depuis le remote** : `git checkout -b loop/YYYY-MM-DD-{site}-{tache} origin/main`.
3. **`gh pr list --repo taffrand-gif/eletricista-norte-reparos --state open`** avant de choisir la tâche ET avant de choisir un vocabulaire : évite les collisions avec les branches en cours (leçon PR #235).
4. **Audit R12 par point d'entrée** : `grep -n "^import" client/src/pages/<HomePage>.tsx`, puis grep `24h|urgente|urgência|emergência|grátis|gratuito|domingo|24 horas` sur chaque composant importé. C'est la méthode qui a produit les 2 dernières PR utiles du cycle.
5. **Propagation cross-repo** : après toute correction R12 ici, lancer le même grep sur `canalizador-norte-reparos`, `canalizador-urgente`, `eletricista-urgente` — et l'inverse. Consigner le résultat dans les 4 `context.md`.
6. **Choisir la tâche en lisant sa fiche `### X — …`**, pas via `grep ⏳`.
7. Patch : `Read` puis `Edit` (chaîne exacte). Fallback `perl -0pi -e`. Vérifier par `git diff --stat`.
8. `npx tsc --noEmit 2>&1 | grep "^<chemin/exact/du/fichier>"` — pas de `grep -i` sur un nom de type.
9. PR : `cat > /tmp/pr-xxx.md <<'EOF'` + `gh pr create --body-file`.
10. NE PAS toucher `client/public/` services interdits sans GO explicite de Philippe.
11. NE PAS introduire de claim `certificação`/DGEG/CERTIEL tant que PR #235 est ouverte.
