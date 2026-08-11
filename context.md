# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-11
- Tâche exécutée : **R12 + R145 — file de tâches loop, rang 1 : `client/src/components/FAQ.tsx`**, jumelle de la **PR #268** sur `canalizador-norte-reparos`.
- Branche : `loop/2026-08-11-eletricista-norte-reparos-r12-faq` (depuis `origin/main`, **en worktree**)
- Commits : `7f6cd6b351` (`FAQ.tsx`), puis `10ceafeeb9` (`SEO_PLAN.md`)
- PR ouverte : https://github.com/taffrand-gif/eletricista-norte-reparos/pull/307
- Résultat : ✅ 2 commits, 2 fichiers. **Compteur R12 du fichier : 11 → 0.** `FAQPage` **10 → 7 Q/R** (`questions == answers == 7`, contrôlé). Témoins R8 : `eletricista urgente` 3→0 · `Deslocação urgente` 1→0 · `mediante confirmação` 3→0 · `Atendimento 24h/7d` 1→0 · `Serviço disponível 24h/7d` 1→0 · `24h/7d` 2→0 · `7 dias por semana` 2→0 · `a qualquer hora` 1→0 · `domingos` 1→0 · `actua com rapidez` 1→0 · `Orçamento por escrito (Certificação` 1→0 · `têm experiência .` 1→0. `./node_modules/.bin/tsc --noEmit` : 0 erreur sur le fichier, **total 82** (baseline conforme). **Purge par retrait pur : aucun vocabulaire nouveau introduit.**

## ✅ Gate merge — CADUC, vérifié ce run
Le `context.md` du 06/08 portait « Attente GO merge Philippe (R7) » en citant la PR **#295**. Vérification `gh pr view` ce run : **#295 MERGED**, ainsi que **#269** (CNR) et **#240** (CU). **Le gate est caduc et a été effacé.**

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. Ne jamais réécrire un gate de ce type.

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-11

Recompte effectué en début de run sur `origin/main`.

| Rang | Composant | Occurrences R12 | Statut |
|---|---|---|---|
| — | `InnovativeHero.tsx` | 2 (branche `isPlumber` morte) | ✅ run 04/08 |
| — | `FAQ.tsx` | 11 → **0** | ✅ **PR #307 (ce run)** |
| — | `OptimizedServices.tsx` | 20 (résiduel = 8 clés + branche morte) | ✅ PR #295 (**mergée**) |
| **1** | **`FAQLocal.tsx`** | **9** | ⏳ **PROCHAINE TÂCHE** — ⚠️ voir ci-dessous |
| 2 | `Footer.tsx` | 7 | ⏳ à faire — ⚠️ contient du NAP, ne pas y toucher. **Lire d'abord la PR CNR du 10/08** : sur CNR, le résiduel s'est révélé être le maillage de segmentation d'intent, pas une violation. |
| 3 | `Diagnostico.tsx` | 6 | ⏳ à faire — **jumelle de la PR #280 sur CNR (ce run)**, patron déjà validé |
| 4 | `Contactos.tsx` | 4 | ⏳ à faire |
| 5 | `PriceTable.tsx` | 3 | ⏳ à faire — jumelle du prochain run CNR |
| 6 | `CalculadorPreco.tsx` | 2 | ⏳ à faire |
| 7 | `TrustBanner.tsx` | 1 | ⏳ à faire |
| 7 | `OrcamentoGratuitoBadge.tsx` | 1 | ⏳ à faire |
| 7 | `Blog.tsx` | 1 | ⏳ à faire |
| — | `ZonaIntervencao`, `Trabalhos`, autres | 0 | rien à faire (R12) |

⚠️ **`FAQLocal.tsx` a déjà été traité par la PR #291 (05/08) et compte pourtant 9.** Avant de rouvrir : **vérifier si #291 est mergée** et **lire les lignes**. Deux hypothèses à départager — (a) résiduel de la branche plomberie morte (`isPlumber` faux ici, jamais rendu) et donc hors périmètre ; (b) régression réelle. **Ne pas repatcher au compteur.**

Script de recomptage :
```bash
for c in $(grep "^import" client/src/pages/OptimizedHome.tsx | sed -E "s|.*components/([A-Za-z]+)['\"].*|\1|" | grep -v import); do
  f=client/src/components/$c.tsx
  [ -f "$f" ] && echo "$c $(grep -oiE '24h|24 horas|urgent[ea]|urgência|emergênci[ao]s?|domingo|7/7|24/7|7 dias|prioritári' "$f" | wc -l | tr -d ' ')"
done | sort -k2 -rn
```

## Tâche suivante recommandée
1. **`FAQLocal.tsx`** — d'abord **statuer** (résiduel branche morte vs régression), puis patcher ou **clore l'entrée**.
2. Sinon **`Diagnostico.tsx`** (6) : jumelle directe de la PR #280 ouverte ce run sur CNR, patron déjà écrit — le défaut attendu est « Técnico **Atendimento 24h** em {ville} » dans le bloc de résultat, à remplacer par « Técnico **ao seu domicílio** em {ville} ». ⚠️ **Ne pas toucher `value: 'urgente'`** : c'est une clé de lookup consommée par `if (urgency === 'urgente')`, la renommer casse le message WhatsApp **sans erreur TypeScript**.
- Vocabulaire de remplacement validé, **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159 → « Eletricista para instalação, reparação e remodelação », « Orçamento por escrito em 48h », « garantia 1 ano », « Instalação, remodelação e diagnóstico elétrico ao seu domicílio », « equipamento profissional de diagnóstico ». Pronoms : `AGENTS.md` §12.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un artefact de purge peut créer un contresens de SÉCURITÉ, pas seulement une faute de grammaire.** Dans `FAQ.tsx` : « **Desligue o disjuntor geral mediante confirmação** » disait au lecteur d'attendre une confirmation téléphonique **avant de couper le courant**. **Les purges automatisées doivent être relues en priorité sur les contenus à enjeu physique** (électricité, gaz, eau).
- 🔴 **NOUVEAU — quand un artefact a mangé un terme de CONFORMITÉ, le réparer revient à réintroduire le claim qu'une PR précédente a retiré.** Ici « Eletricista precisa de **Orçamento por escrito**? / é obrigatório Orçamento por escrito (**Certificação de Instalações Elétricas**) » : le substantif de conformité a été remplacé par la formule commerciale. Le réparer imposait de réécrire un claim DGEG/CERTIEL que la PR #235 avait précisément retiré → **retrait du couple Q/R = seule issue** qui ne rouvre pas le chantier.
- 🔴 **Leçon transverse du run, venue de `canalizador-urgente` — un batch de conformité peut corrompre la RÈGLE qu'il applique.** Sur CU, le commit `fb9dd2415` a substitué `relatório técnico` → `orçamento por escrito` sur 2003 fichiers **y compris `AGENTS.md`**. **C'est la même famille de substitution qui a produit l'artefact « Orçamento por escrito » de `FAQ.tsx` ici** (PR #126 est le miroir ENR de la PR #119 CU). ➡️ **Vérifié ce run : l'`AGENTS.md` d'ENR n'est PAS corrompu** (0 occurrence de la ligne défectueuse). ➡️ **Règle proposée pour les 4 repos : tout batch de substitution doit exclure explicitement `AGENTS.md`, `SEO_PLAN.md`, `context.md`, `CLAUDE.md`.** Et **avant d'escalader une contradiction de doctrine : `git log -S "<fragment>" -- AGENTS.md`.**
- **Le compteur R12 brut est un indicateur, pas un verdict** (leçon CNR de ce run) : sur CNR, `Footer.tsx` sortait à 5 alors que les 5 occurrences étaient les URL des sites frères — le maillage de segmentation d'intent. **Clore explicitement une entrée dont le résiduel est hors périmètre**, sinon chaque run reprend le même rang 1.
- **La propagation cross-repo par composant fonctionne, mais elle traîne quand elle n'est pas faite dans le même run** : `seo.keywords` 14 j · `FAQLocal.tsx` 6 j · `FAQ.tsx` 6 j (#268 05/08 → #307 11/08) · `OptimizedServices.tsx` **~20 min** (#269 → #295, binôme dans le même run). **Le binôme reste la méthode.**
- 🔴 **`npx tsc` est un piège** (résout vers un paquet npm homonyme, sort en erreur sans rien typer). Utiliser **`./node_modules/.bin/tsc --noEmit`**, total attendu **82**. Dans un worktree : `ln -sfn ~/work/Sites/eletricista-norte-reparos/node_modules ./node_modules`, puis `rm -f ./node_modules` **avant** le commit.
- **Quand une question FAQ porte sur un délai ou sur la disponibilité 24/7, retirer le couple Q/R plutôt que le réécrire.** Aucune réponse honnête ET conforme n'existe. Validé par le merge de la PR #200 (EU).
- **Séparer prix et claims d'urgence** : seuls les qualificatifs relèvent de R12, les montants restent (« Deslocação **urgente**: €15 » → « Deslocação: €15 »).
- **Purger par retrait plutôt que par réécriture** quand c'est possible : zéro vocabulaire nouveau = zéro risque R4.
- `SEO_PLAN.md` et `context.md` **dérivent indépendamment** — lire les DEUX, et vérifier le statut d'une tâche dans **sa propre fiche**, pas via `grep ⏳`.
- **`SEO_PLAN.md` est append-only** : après édition, contrôler `git diff --numstat SEO_PLAN.md` → **N ajoutées, 0 supprimée**. Ce run a rattrapé ainsi une troncature accidentelle d'une ligne existante.
- B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox = lecture/grep/scripts (`git fetch` y marche, repos publics) ; **git en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`** (host, `gh` authentifié `taffrand-gif`).
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/` (monté des deux côtés).
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** (le `.git` contient un chemin absolu host).
- 🔴 **`set -e` + zsh : un glob sans correspondance (`rm -f .git/*.lock`) fait AVORTER tout le script.** Utiliser `setopt null_glob`.
- Ce repo n'a **qu'un seul remote, `origin`** — contrairement à CNR où le remote GitHub s'appelle `github`. **Toujours `git remote -v` en premier.**
- ⚠️ **Ne jamais lancer `git checkout origin/main -- .`** pour inspecter un fichier : ça écrase tout le worktree. Utiliser `git show origin/main:<path>`.
- Corps de PR long : fichier + `gh pr create --body-file`, jamais `--body` inline.
- Untracked `.worktrees/`, `_indexing/`, `memory/` — autres automations, ne jamais les toucher.
- `tsc --noEmit` : **82 erreurs pré-existantes** (`GoogleReviews.tsx`, `QuantoTempo*.tsx`, `lib/trpc.ts`, `pages/cidades/*`).

## Blocages connus
1. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** (`OptimizedServices.tsx` L111). Le renommer change l'offre affichée → GO Philippe. **Même question ouverte sur CNR : un seul arbitrage débloque les 2 repos.**
2. **Branche plomberie morte dans les composants partagés** (`OptimizedServices.tsx`, `FAQLocal.tsx`, `InnovativeHero.tsx`) : contenu plomberie livré dans le bundle du site électricité, jamais rendu (`isPlumber` faux) donc **pas de violation visible en prod**, mais poids mort et **source de faux positifs dans tous les compteurs R12**. **Décision demandée** : ces composants doivent-ils rester identiques entre CNR et ENR ? Si oui, le bon correctif est de sortir ces tables dans `siteConfig` plutôt que de dupliquer un ternaire.
3. ⚠️ **`certificação elétrica quando aplicável`** (`FAQ.tsx` L34, non touché ce run) : claim de **périmètre d'offre**, relève du chantier DGEG/CERTIEL (PR #235 mergée) → GO Philippe.

## Instructions améliorées pour prochain run
1. **Pré-flight** : `setopt null_glob` puis `rm -f ~/work/Sites/eletricista-norte-reparos/.git/*.lock`.
2. **Worktree obligatoire** sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/enr`, depuis `origin/main`. **Jamais `/tmp`, jamais la copie principale, jamais `reset --hard`/`stash`/`clean`** (R-WT).
3. **Recompter la file** et **statuer sur `FAQLocal.tsx`** (résiduel branche morte vs régression) avant de choisir la cible.
4. `tsc` : `./node_modules/.bin/tsc --noEmit`, total attendu **82**.
5. **Traiter la jumelle sur `canalizador-norte-reparos` dans le MÊME run.**
6. Après tout patch d'une FAQ : contrôler `questions == answers` et que chaque réponse fait > 20 caractères.
7. **Contrôler `git diff --numstat SEO_PLAN.md`** = N ajoutées / **0 supprimée** (fichier append-only).
8. **Vérifier que `context.md` est arrivé sur `main`** : `git show origin/main:context.md | head -6` doit afficher la date du jour. Le run du 05/08 avait sauté cette étape et perdu ses apprentissages.
9. Nettoyer : `git worktree remove …` puis `git worktree prune`. Si le retrait échoue, laisser en place et le signaler — ne jamais forcer.
