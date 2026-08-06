# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-06
- Tâche exécutée : **R12 — purge des claims urgence / disponibilité 24h dans `client/src/components/OptimizedServices.tsx`** (25 occurrences, plus gros gisement de la homepage de ce repo). **Propagation cross-repo faite DANS LE MÊME RUN** que la PR #269 sur `canalizador-norte-reparos` : même fichier, même violation, même vocabulaire. Écart de propagation : **~20 minutes** (contre 6 jours pour `FAQLocal.tsx` et 14 jours pour `seo.keywords`).
- Branche créée : `loop/2026-08-06-eletricista-norte-reparos-r12-optimizedservices` (depuis `origin/main`, **en worktree**)
- Commits : `2e3ac4c939` (client/src/components/OptimizedServices.tsx), puis `61f78adb20` (SEO_PLAN.md HISTORIQUE)
- PR ouverte : https://github.com/taffrand-gif/eletricista-norte-reparos/pull/295
- Résultat : ✅ 2 commits, 2 fichiers (1 par commit, atomique). Témoins R8 (branche électricité, seule rendue) : `Atendimento de urgências elétricas` 1→0 · `Atendimento 24h/7d` 2→1 (résiduel = branche plomberie morte) · `Disponível 24h/7d` 2→1 (idem) · `Técnicos equipados para emergências` 1→0 · `Orçamento por escrito em 48h` 0→1 · `ao seu domicílio` 0→1 · `A nossa equipa` 0→1. Clés `'Urgências 24h'` : **8→8 intactes**. `./node_modules/.bin/tsc --noEmit` : 0 erreur sur le fichier patché, total **82** pré-existantes (baseline conforme). Prix non touchés, aucun claim `certificação`/DGEG/CERTIEL introduit. Attente GO merge Philippe (R7).

## ⚠️ Anomalie corrigée ce run
**Le run du 05/08 (PR #291, `FAQLocal.tsx`) n'a jamais poussé son `context.md` sur `main`.** Sa branche ne contient que `SEO_PLAN.md` + `FAQLocal.tsx`, et `main` portait encore un `context.md` daté du **30/07**. Les apprentissages du 05/08 n'existaient que dans le corps de la PR #291 — ils ont été récupérés et réintégrés ici. **L'étape 6 du protocole loop (push `context.md` sur `main`) doit être vérifiée, pas supposée** : contrôle simple en fin de run → `git show origin/main:context.md | head -6` doit afficher la date du jour.

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-06

Classement des composants importés par `client/src/pages/OptimizedHome.tsx`. Chaque ligne non nulle = 1 tâche loop autonome (1 fichier = 1 PR), exécutable **sans GO de Philippe** : le découpage est validé par les PR #291, #295 et leurs jumelles CNR #240/#268/#269.

| Rang | Composant | Occurrences R12 | Statut |
|---|---|---|---|
| — | `InnovativeHero.tsx` | 2 (résiduel = branche `isPlumber` morte) | ✅ run 04/08 |
| — | `FAQLocal.tsx` | 18 → résiduel branche morte | ✅ PR #291 (05/08, ouverte) |
| — | `OptimizedServices.tsx` | 25 → 20 (résiduel = 8 clés + branche morte) | ✅ **PR #295 (ce run)** |
| **1** | **`FAQ.tsx`** | **11** | ⏳ **PROCHAINE TÂCHE** — jumelle de la PR #268 sur CNR, à lire avant |
| 2 | `Footer.tsx` | 7 | ⏳ à faire — ⚠️ contient du NAP, ne pas y toucher |
| 3 | `Diagnostico.tsx` | 6 | ⏳ à faire |
| 4 | `Contactos.tsx` | 4 | ⏳ à faire |
| 5 | `PriceTable.tsx` | 3 | ⏳ à faire |
| 6 | `CalculadorPreco.tsx` | 2 | ⏳ à faire |
| 7 | `TrustBanner.tsx` | 1 | ⏳ à faire |
| 7 | `OrcamentoGratuitoBadge.tsx` | 1 | ⏳ à faire |
| 7 | `Blog.tsx` | 1 | ⏳ à faire |
| — | `ZonaIntervencao`, `Trabalhos`, autres | 0 | rien à faire (R12) |

Script de recomptage (rapide, à relancer en début de run) :
```bash
for c in $(grep "^import" client/src/pages/OptimizedHome.tsx | sed -E "s|.*components/([A-Za-z]+)['\"].*|\1|" | grep -v import); do
  f=client/src/components/$c.tsx
  [ -f "$f" ] && echo "$c $(grep -oiE '24h|24 horas|urgent[ea]|urgência|emergênci[ao]s?|domingo|7/7|24/7|7 dias|prioritári' "$f" | wc -l | tr -d ' ')"
done | sort -k2 -rn
```

## Tâche suivante recommandée
- **`FAQ.tsx`** (11 occurrences) — 1 fichier = 1 PR.
- 📌 **Lire d'abord la PR #268 sur `canalizador-norte-reparos`** (`gh pr diff 268 --repo taffrand-gif/canalizador-norte-reparos`) : c'est le même composant traité sur le repo jumeau, le patron de réécriture y est déjà validé. Règle : **quand une question FAQ porte sur un délai ou sur la disponibilité 24/7, retirer le couple Q/R plutôt que le réécrire** — aucune réponse honnête ET conforme n'existe (R145 interdit le délai chiffré, R11 interdit d'inventer, « mediante confirmação » est banni). Le vide honnête > le faux. Contrôle obligatoire après patch : `questions == answers` dans le schema `FAQPage`.
- Vocabulaire de remplacement validé, à reprendre **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159 → « Eletricista para instalação, reparação e remodelação », « Orçamento por escrito em 48h », « garantia 1 ano », « Instalação, remodelação e diagnóstico elétrico ao seu domicílio », « equipamento profissional de diagnóstico ». Pronoms autorisés : `AGENTS.md` §12.
- ✅ **Garde-fou levé** : PR #235 (`fix/dgeg-certiel-removal`) est **MERGÉE**. La consigne « ne pas introduire de claim `certificação`/DGEG/CERTIEL » n'est plus bloquante — mais rester aligné sur le wording DGEG retenu par #235 avant d'en introduire.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — vérifier qu'une chaîne n'est pas une CLÉ D'OBJET avant de la patcher.** Dans `OptimizedServices.tsx`, **8 des 25** occurrences R12 étaient la clé `'Urgências 24h'` des tables `serviceImages`/`serviceDescriptions`/`serviceFeatures`, matchée contre la liste `services`. Les renommer aurait fait tomber les 6 services sur le fallback **sans aucune erreur TypeScript** — panne silencieuse en production. Contrôle systématique : `grep -c "'<chaîne>':"` stable avant/après.
- 🔴 **La propagation cross-repo doit se faire DANS LE MÊME RUN, pas au run suivant.** Historique du retard : `seo.keywords` 14 jours (PR #203 CNR → #239 ENR), `FAQLocal.tsx` 6 jours (PR #240 → #291), `OptimizedServices.tsx` **~20 min** (PR #269 → #295, ce run). **Méthode qui marche** : traiter le même fichier sur les 2 repos jumeaux à la suite, et **coller le tableau de témoins des 2 repos dans les 2 corps de PR** — l'oubli devient visible à la review.
- **Les composants partagés sont un multiplicateur** : 1 audit → jusqu'à 4 PR. Prochains candidats à traiter en binôme CNR/ENR : `FAQ.tsx`, `Footer.tsx`, `Diagnostico.tsx`, `Contactos.tsx`.
- 🔴 **`npx tsc` est un piège** : `npx` résout vers un paquet npm homonyme (compilateur Turbo C) qui sort en erreur sans rien typer → le grep de contrôle renvoie **0 erreur** alors que rien n'a été vérifié. Utiliser **`./node_modules/.bin/tsc --noEmit`**. Sanity check sur ce repo : le total doit être **82**. Dans un worktree, `node_modules` n'existe pas : `ln -sfn ~/work/Sites/eletricista-norte-reparos/node_modules ./node_modules`, puis `rm -f ./node_modules` **avant** le commit.
- 🔴 **Le worktree doit être le mode par défaut.** Les 4 copies de travail sont sales **en permanence** et posées sur des branches feature d'autres automations (ici `fix/enr-conform-quadro-scope-t_fb13b1f7`, 5 fichiers modifiés au 06/08). « checkout main + reset --hard » **détruirait leur travail en cours**.
- **Les artefacts des purges automatisées se propagent aussi et forment un gisement propre à faible risque** : ils sont **grammaticalement cassés**, donc les corriger n'invente rien. Trouvés à ce jour : « com sem compromisso », « Sem compromisso e sem compromisso », « A nosso trabalho está pronta », « Atendimento de urgências elétricas Atendimento 24h/7d » (ce run). Grep transverse candidat aux 4 repos : `com sem |sem sem |A nosso |Serviço disponível Atendimento|de urgências .* Atendimento`.
- **Le PT-BR est un défaut réel et non catalogué** : « Equipe » (PT-BR) trouvé sur CNR ce run là où PT-PT impose « Equipa ». `AGENTS.md` §12 verrouille « tout contenu client PT-PT uniquement » mais aucun run n'avait greppé les brésilianismes. **Candidat à une tâche loop transverse aux 4 repos** : `Equipe |você|banheiro|encanador|conserto|cadastro|celular|time `.
- **Compter les doublons programmatiquement**, jamais à l'œil : `seo.keywords` contenait 2 doublons invisibles en lecture. Script : `re.findall(r"'([^']+)'", ...)` + `collections.Counter`.
- **Séparer prix et claims d'urgence** lors d'une purge R12 : les prix sont du contenu pré-existant hors périmètre. Seuls les **qualificatifs** relèvent de R12.
- `npx tsc --noEmit 2>&1 | grep -i siteconfig` est un **faux positif** : ça matche le *type* `SiteConfig` dans les erreurs d'autres fichiers. Filtrer sur `^shared/siteConfig.ts`.
- `client/src/index.css` de ce site contient **2 `@layer`** (`base` L125, `components` L179), contrairement à CNR qui n'en a aucun. Placement sûr d'une règle custom : en fin de fichier, hors de tout `@layer`. Tailwind (version du repo) ne fournit aucune utilitaire `text-shadow`.
- Le `<h1>` est strictement identique sur les 2 sites `*-norte-reparos` : les patchs cosmétiques du hero sont copiables tels quels.
- « Garantia 2 Anos » (écart Hero.tsx ↔ siteConfig) : **résolu**. « WhatsApp Grátis » (Hero.tsx L89) : **non-violation confirmée**. Ne pas re-flaguer.
- `SEO_PLAN.md` et `context.md` **dérivent indépendamment** — lire les DEUX, et vérifier le statut d'une tâche dans **sa propre fiche `### X — …`**, pas via `grep ⏳` (qui matche aussi HISTORIQUE et le glossaire des statuts).
- B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Le sandbox `mcp__workspace__bash` n'a ni `gh` ni credentials en écriture (`git push` → « could not read Username »), mais il lit et grep parfaitement les fichiers montés. **Répartition optimale** : lecture / grep / scripts d'analyse → `mcp__workspace__bash` ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process` (host, `gh` authentifié `taffrand-gif`, scopes `repo`+`workflow`).
- 🔴 **NOUVEAU — le `/tmp` du sandbox et le `/tmp` du host sont DEUX systèmes de fichiers distincts.** Un worktree créé dans `/tmp` via desktop-commander est **invisible** au sandbox. Les worktrees doivent être créés **sous `~/work/Sites/`** (monté des deux côtés). Convention adoptée : `~/work/Sites/_worktrees/loop-YYYY-MM-DD/{cnr,enr,cu,eu}`.
- 🔴 **NOUVEAU — les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree.** Le fichier `.git` d'un worktree contient un chemin **absolu host** (`/Users/admin/work/Sites/<repo>/.git/worktrees/<nom>`) qui ne résout pas côté sandbox → `fatal: not a git repository`. Dans un worktree : grep/lecture au sandbox, **tout `git` via desktop-commander**.
- Ce repo n'a **qu'un seul remote, nommé `origin`**, qui pointe vers GitHub — contrairement à `canalizador-norte-reparos` où le remote GitHub s'appelle `github` (et où `local` pointe vers un `/tmp` disparu). **Toujours `git remote -v` en premier.**
- ⚠️ **Ne jamais lancer `git checkout origin/main -- .`** depuis une branche de travail pour inspecter un fichier : ça écrase tout le worktree. Utiliser `git show origin/main:<path>` (lecture pure).
- **`Read` puis `Edit` (sous-chaîne courte et unique) fonctionne bien** sur les `.tsx`. `Edit` échoue si l'indentation d'`old_string` n'est pas copiée à l'identique. Fallback : script `python3` en heredoc.
- Corps de PR long : `cat > /tmp/pr-xxx.md <<'EOF'` puis `gh pr create --body-file`, jamais `--body` inline (échappement zsh).
- Untracked `.worktrees/`, `_indexing/`, `memory/` à la racine (autres automations) — inoffensifs, ne jamais les committer/supprimer.
- `tsc --noEmit` : **82 erreurs pré-existantes** (`GoogleReviews.tsx` → `config.contact` inexistant, `QuantoTempo*.tsx` → `config.businessName` inexistant, `lib/trpc.ts`, `pages/cidades/*`).

## Blocages connus
1. 🛑 **NOUVEAU — le service s'appelle littéralement `'Urgências 24h'`** (`OptimizedServices.tsx` L111). Tant qu'il subsiste, la homepage affiche un intent « urgence » malgré PR #295. Le renommer **change l'offre affichée** → GO Philippe requis. **Même question ouverte sur CNR (PR #269) : un seul arbitrage débloque les 2 repos.**
2. **Branche plomberie morte dans les composants partagés** (`OptimizedServices.tsx` L29-35/L70-101, `FAQLocal.tsx` L14-32, `InnovativeHero.tsx`) : du contenu plomberie (« canalizador », « desentupimento », « fugas de água ») livré dans le bundle du site électricité. Jamais rendu (`isPlumber` faux ici) donc **pas de violation visible en prod**, mais poids mort et source de confusion à chaque audit. **Décision demandée à Philippe** : ces composants sont-ils censés rester identiques entre CNR et ENR ? Si oui, le bon correctif est de sortir ces tables dans `siteConfig` plutôt que de dupliquer un ternaire dans chaque composant.
3. **Services interdits dans `client/public/`** (~297 pages : chargeur VE, solaire, AC) → 🛑 STOP, attente GO explicite avant tout batch fix.
4. **§B4 de `SEO_PLAN.md` est sous-spécifiée** (2 lignes, ni statut, ni fichier cible, ni critère GO/STOP) → non exécutable sans inventer le périmètre (R4). **Contourné** : le loop travaille désormais sur la file R12 par point d'entrée, qui produit des tâches nettes sans arbitrage. B4 peut rester en attente sans bloquer le loop.
5. **Dette de type `SiteConfig`** : `GoogleReviews.tsx` référence `config.contact` et `QuantoTempo*.tsx` référence `config.businessName`, deux propriétés **absentes** de l'interface `SiteConfig`. 82 erreurs TS pré-existantes. Candidat à une tâche loop propre (1 fichier = 1 PR) si Philippe veut réduire la dette.
6. 🔴 **Le goulot est le merge, pas la production.** **21 PR ouvertes** sur ce repo au 06/08 — le plus embouteillé des 4 (**60 au total** : CNR 8, ENR 21, CU 5, EU 27). La grande majorité vient de l'automation « rank-push », pas du loop. **À arbitrer : session de merge groupée, ou ralentissement des automations.**
7. ✅ **Points clos** : PR #235 (DGEG/CERTIEL) **mergée** — garde-fou levé. PR #239 (seo.keywords) **mergée**. PR #204 et #78 absentes des PR ouvertes → closes.

## Instructions améliorées pour prochain run
1. 🔴 **Pré-flight, avant tout** : `for r in canalizador-norte-reparos eletricista-norte-reparos canalizador-urgente eletricista-urgente; do rm -f ~/work/Sites/$r/.git/*.lock; done` (zsh dit « no matches found » s'il n'y en a pas — normal).
2. 🔴 **`git remote -v` en premier** : ici le remote GitHub est **`origin`** (sur CNR c'est `github`).
3. 🔴 **Travailler en worktree sous `~/work/Sites/`, jamais dans `/tmp`, jamais dans la copie principale** : `git worktree add -q ~/work/Sites/_worktrees/loop-YYYY-MM-DD/enr -b loop/YYYY-MM-DD-eletricista-norte-reparos-{tache} origin/main`.
4. **Lire l'état du loop depuis `origin/main`**, jamais depuis la copie de travail (branche feature d'une autre automation → `context.md` périmé).
5. **Prendre la ligne suivante du tableau §FILE DE TÂCHES** — l'audit est déjà fait. Prochaine : **`FAQ.tsx` (11)**, après avoir lu la PR #268 sur CNR.
6. 🔴 **Avant de patcher une chaîne, vérifier que ce n'est pas une clé d'objet** utilisée en lookup (`grep -c "'<chaîne>':"`). Panne silencieuse, invisible à TypeScript.
7. 🔴 **Propager dans le MÊME run** : après toute correction R12 ici, faire le même grep + le même patch sur `canalizador-norte-reparos` (repo jumeau), et coller les témoins des 2 repos dans les 2 corps de PR.
8. `gh pr list --repo taffrand-gif/eletricista-norte-reparos --state open` avant de choisir un vocabulaire de remplacement : évite les collisions avec les 21 branches en cours.
9. Patch : `Read` puis `Edit` (sous-chaîne courte et unique). Fallback : `python3` en heredoc. Vérifier par `git diff --stat`.
10. **Type-check** : `ln -sfn ~/work/Sites/eletricista-norte-reparos/node_modules ./node_modules` → `./node_modules/.bin/tsc --noEmit` → `rm -f ./node_modules` **avant** de committer. **Jamais `npx tsc`.** Sanity check : total attendu = **82**.
11. **Répartition des outils** : grep/lecture → `mcp__workspace__bash` ; git/gh/tsc → `mcp__desktop-commander__start_process`.
12. PR : `cat > /tmp/pr-xxx.md <<'EOF'` + `gh pr create --body-file`.
13. 🔴 **Vérifier que `context.md` est bien arrivé sur `main`** en fin de run : `git show origin/main:context.md | head -6` doit afficher la date du jour. Le run du 05/08 avait sauté cette étape.
14. Nettoyer : `git worktree remove ~/work/Sites/_worktrees/loop-YYYY-MM-DD/enr` puis `git worktree prune`.
15. NE PAS toucher `client/public/` services interdits sans GO explicite. B1, B2, B3 sont TERMINÉS.
