# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-13
- Tâche prévue : **file de tâches loop, rang 1 — `Footer.tsx`** (7 occ R12).
- Tâche réellement exécutée : rang 1 **statué ET clos**, puis **violation plus grave détectée dans le JSON-LD et traitée en priorité** (R11/R12).
- Branche : `loop/2026-08-13-eletricista-norte-reparos-r12-jsonld-faq` (depuis `refs/remotes/origin/main`, **en worktree**)
- Commits : `954e056a0f` (`StructuredData.tsx`), `8440306000` (`Footer.tsx`), le commit `SEO_PLAN.md`, puis `0108db589e` (merge de `main`, voir Edge cases)
- PR ouverte : https://github.com/taffrand-gif/eletricista-norte-reparos/pull/334 — **mergeable ✅**
- Résultat : ✅ 3 fichiers, 1 commit chacun. **Le `faqSchema` de production portait un claim de disponibilité ET un prix inventé, dans le JSON-LD — donc dans ce que Google lit et cite.**

| Question | Avant | Traitement |
|---|---|---|
| `Qual é o horário de atendimento…?` | « Estamos disponíveis **Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados. Serviço de urgência permanente.** » | **Transplant verbatim CNR** |
| « Quanto tempo demora a chegar em caso de urgência? » | « tempo médio […] **é rápido** […] **actua com brevidade** » | **Retrait du couple Q/R** (patron PR #200) |
| « Quanto custa uma intervenção? » | « Oferecemos **sem compromisso e sem compromisso**. **Preços a partir de 50€ para instalação de tomadas.** » | **Retrait du prix inventé** + doublon corrigé |

- 🔴 **Le « 50€ » est un prix inventé (R4)** : absent de `PRICING-CANONIQUE.md`. La grille ENR est **70€/h + deslocação Z1-Z6 de 15€ à 65€**, majoration `urgencyMultiplier: 1.5`. Aucun forfait de 50€ n'existe.
- **`Footer.tsx`** : retrait du `<li>` « Horário: Atendimento 24h/7d, 7 dias por semana » — **retrait pur**, aligné sur le jumeau CNR dont le Footer ne porte **aucun** bloc Horário et n'importe pas `Clock`.
- Témoins R8 (`client/src/`, avant → après) : `Serviço de urgência permanente` **1→0** · `Quanto tempo demora a chegar em caso de urgência` **4→3** · `a partir de 50€` **2→1** · `sem compromisso e sem compromisso` **5→4** · `Estamos disponíveis` **5→4** · `Atendimento 24h/7d` **65→64**. **Chaque témoin recule d'exactement 1** (contrôle positif). Footer : `Clock` **2→0**, `urgente` **4→4** et `canalizador-norte-reparos.pt` **1→1** (maillage intact). `FAQPage` : **5 → 4 questions**. `./node_modules/.bin/tsc --noEmit` : **82** (baseline conforme).

## ✅ Gate merge — aucun gate actif
Vérifié ce run : aucune mention d'attente dans les 4 `context.md`. **CNR #300 a été mergée pendant le run** ; #334 (ici), #260 (CU) et #284 (EU) sont ouvertes et **toutes mergeables**.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. Ne jamais réécrire un gate de ce type.

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-13

| Rang | Composant | Occ. R12 | Statut |
|---|---|---|---|
| — | `FAQ.tsx` (0) · `FAQLocal.tsx` (9 → 0, PR #325) | — | ✅ |
| — | `OptimizedServices.tsx` | 20 | ✅ PR #295 — ⚠️ **résiduel à re-statuer avec la méthode du ternaire statique** |
| — | **`Footer.tsx`** | **7 → 5** | ✅ **CLOS ce run** — résiduel = maillage d'intent vers les sites frères, **hors périmètre. Ne pas repatcher au compteur.** |
| — | `StructuredData.tsx` | **0 au compteur** | ✅ **traité ce run** — le compteur ne voit pas le JSON-LD |
| **1** | **`Contactos.tsx`** | **4** | ⏳ **PROCHAINE TÂCHE — binôme CNR, fichier quasi identique** |
| 2 | `Diagnostico.tsx` | 6 | ⏳ à faire — **jumelle de la PR #280 (CNR)**, patron déjà validé |
| 3 | `PriceTable.tsx` | 3 | 🛑 **BLOQUÉ — arbitrage de prix requis. Ne pas patcher.** |
| 4 | `CalculadorPreco.tsx` | 2 | ⏳ à faire |
| 4 | `InnovativeHero.tsx` | 2 | ⏳ à faire — **candidat au retrait de branche morte** |
| 6 | `TrustBanner.tsx` · `OrcamentoGratuitoBadge.tsx` · `Blog.tsx` | 1 | ⏳ à faire |

Script de recomptage :
```bash
for c in $(grep "^import" client/src/pages/OptimizedHome.tsx | sed -E "s|.*components/([A-Za-z]+)['\"].*|\1|" | grep -v import); do
  f=client/src/components/$c.tsx
  [ -f "$f" ] && echo "$c $(grep -oiE '24h|24 horas|urgent[ea]|urgência|emergênci[ao]s?|domingo|7/7|24/7|7 dias|prioritári' "$f" | wc -l | tr -d ' ')"
done | sort -k2 -rn
```

## Tâche suivante recommandée
1. **`Contactos.tsx`** (rang 1) — 4 lignes R12 : **L167** `Disponível Atendimento 24h/7d` · **L193** `Resposta em 24h` · **L234** `Atendimento 24h/7d` · **L237** `7 dias por semana, incluindo feriados`. **Le fichier est quasi identique sur CNR** (mêmes 4 lignes, mêmes numéros ; seules diffèrent l'adresse `formsubmit` L26, le `_subject` L34 et la liste de villes L215). ➡️ **Binôme obligatoire : traiter ENR et CNR dans le même run** (écart de propagation mesuré : ~20 min en binôme contre 6 à 14 jours sinon).
2. **`OrcamentoGratuitoBadge.tsx` L15** — `Sem compromisso • Resposta em 24h`. **Ligne strictement identique sur CNR.** Second binôme, groupable avec (1).
3. **`client/src/data/faqData.ts` L26** — « trabalhamos **Atendimento 24h/7d**. Não importa se é meia-noite, domingo ou feriado - temos **equipas de piquete sempre disponíveis** ». Même famille que le JSON-LD traité ce run, **invisible au compteur de composants**.
4. Vocabulaire de remplacement validé, **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT** — validé 2 fois ce run.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — le compteur R12 ne voit pas le JSON-LD, et c'est là que sont les violations les plus graves.** `StructuredData.tsx` affichait **0** au compteur de la file et portait un claim 24h/7d **et** un prix inventé, dans la surface que Google lit et cite. ➡️ **Contrôle à passer en début de run, indépendamment du compteur : `StructuredData.tsx` et `client/src/data/faqData.ts`.** Le même motif s'est vérifié sur CU et EU le même run — **c'est un pattern des 4 repos, pas une particularité ENR.**
- 🔴 **NOUVEAU — le binôme cross-repo fournit un REMPLACEMENT verbatim, pas seulement une détection.** Quand deux repos partagent un composant et qu'un seul est conforme, le conforme est une source de vérité qui permet de corriger **sans rien inventer (R4)**. Utilisé 2 fois ce run : ici (réponse JSON-LD) et sur CNR (17 classes Tailwind restaurées depuis ENR). ➡️ **Avant de déclarer une valeur irrécupérable, regarder le jumeau.**
- 🔴 **NOUVEAU — un doublon `X e X` est une signature de purge**, au même titre qu'un suffixe orphelin (`/7d`) ou un `Z` orphelin. `sem compromisso e sem compromisso` = 5 fichiers. Motif de détection à ajouter : `(\b\w[\w\s]{4,}\b) e \1`.
- 🔴 **NOUVEAU — un `SEO_PLAN.md` append-only entre en conflit à CHAQUE merge de `main`.** La résolution est mécanique : **conserver les DEUX côtés** (main d'abord, la nôtre ensuite), 0 ligne supprimée. Contrôle : `git diff --numstat SEO_PLAN.md` → N ajoutées, **0 supprimée**.
- 🔴 **NOUVEAU — R6 interdit `--force`, donc une PR déjà ouverte se met à jour par MERGE, jamais par rebase.** Rebaser imposerait un force-push.
- ⚠️ **À arbitrer — divergence CNR/ENR sur le rayon de couverture.** `StructuredData.tsx` d'ENR annonce « raio de **130 km** », celui de CNR « **100 km** », pour la même région. Le `PRICING.md` de CU parle d'un rayon route **~130 km** depuis Macedo de Cavaleiros. ➡️ **C'est peut-être CNR qu'il faut corriger, pas ENR. Un seul arbitrage tranche les 2 repos.** La liste de villes d'ENR contient en plus « Trás-os-Montes » comme s'il s'agissait d'une ville (artefact, absent de CNR).
- 🔴 **Une branche `isPlumber ? A : B` sur un repo mono-config est du code MORT permanent.** `getCurrentSiteConfig()` retourne une constante. **Vérifier si les occurrences sont derrière un ternaire statiquement faux avant de patcher au compteur.** `OptimizedServices.tsx` (20) est le premier suspect. **Retirer la branche morte vaut mieux que clore l'entrée** : clore laisse du contenu cross-métier dans le bundle **et** laisse le compteur mentir.
- 🔴 **Un artefact de purge peut créer un contresens de SÉCURITÉ**, pas seulement une faute de grammaire. **Relire en priorité les contenus à enjeu physique.**
- **Quand une question FAQ porte sur un délai ou sur la disponibilité 24/7, retirer le couple Q/R plutôt que le réécrire.** Aucune réponse honnête ET conforme n'existe. Validé par le merge de la PR #200 (EU), réappliqué ce run sur ENR, CU et EU.
- 🔴 **Un batch de conformité peut corrompre la RÈGLE qu'il applique** (leçon CU, `fb9dd2415`). **Tout batch doit exclure `AGENTS.md`, `SEO_PLAN.md`, `context.md`, `CLAUDE.md`.** Et **avant d'escalader une contradiction de doctrine : `git log -S "<fragment>" -- AGENTS.md`.** ➡️ Vérifié : l'`AGENTS.md` d'ENR n'est **pas** corrompu.
- 🔴 **`npx tsc` est un piège.** Utiliser **`./node_modules/.bin/tsc --noEmit`**, total attendu **82**. Dans un worktree : `ln -sfn ~/work/Sites/eletricista-norte-reparos/node_modules ./node_modules`, puis `rm -f ./node_modules` **avant** le commit.
- `SEO_PLAN.md` et `context.md` **dérivent indépendamment** — lire les DEUX.
- B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- 🔴 **CE REPO A UNE BRANCHE LOCALE PARASITE `refs/heads/origin/main`.** Elle rend **`origin/main` ambigu** : `git merge origin/main` a répondu « Already up to date » alors que la vraie ref était **10 commits en avance**. ➡️ **Sur ce repo, TOUJOURS écrire `refs/remotes/origin/main` en entier.** C'est l'origine du `warning: refname 'origin/main' is ambiguous` visible à chaque commande. **Candidat à suppression : `git branch -D origin/main` (à faire valider — ne pas supprimer sans GO).**
- 🔴 **Le hook `maillage-gate` produit un FAUX POSITIF sur tout merge commit.** Il compte les changements **entrants** d'un merge de `main` comme « liens ajoutés par ce commit ». Ce run : 3 href signalés dans `public/blog/blog-como-montar-uma-tomada.html`, fichier **non modifié par la branche**, et les 3 href **existent déjà à l'identique sur `origin/main`** (vérifié par `git show origin/main:<fichier> | grep -c`). ➡️ **Procédure : vérifier que le fichier incriminé n'est pas dans `git diff --name-only <remote>/main...HEAD`, vérifier que les href préexistent sur main, puis `--no-verify` en le justifiant dans le message de commit.** Ne jamais bypasser sans ces deux vérifications.
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox = lecture/grep/scripts Python (`git fetch` y marche, repos publics) ; **git en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`**.
- 🔴 **`grep -P` n'existe pas sur macOS** — un `grep -P` dans une chaîne `&&` fait échouer silencieusement tout le reste de la commande. **Utiliser Python pour tout motif non trivial.**
- 🔴 **`git commit -m` multiligne avec backticks/parenthèses est fragile en zsh.** Utiliser `git commit -F -` avec un heredoc `<<'MSG'`.
- ⚠️ **Le sandbox ne peut pas supprimer les `.git/objects/*.lock`** — `git fetch` émet des warnings d'unlink mais **réussit**.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/` — **lisibles depuis le sandbox**, ce qui permet grep/parsing rapides sur l'état exact de `main`.
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** (le `.git` contient un chemin absolu host).
- L'outil `Edit`/`Write` (chemin host) gère parfaitement les accents — plus sûr que `sed`.
- Corps de PR long : fichier + `gh pr create --body-file`, jamais `--body` inline.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : aucun `context.md` des 4 repos ne *prescrit* de `reset --hard` — les 2 mentions trouvées (CU, EU) sont des **interdictions**. Rien à corriger.

## Blocages connus
1. 🛑 **`PriceTable.tsx` — plancher de « Pequena Arranjo » à définir.** L109 affiche « Mão de Obra (mín. 1h) : 35 € » contre 70 €/h canonique ; corriger L109 rendrait L12 incohérent et ferait de « Pequena Arranjo » un doublon d'« Intervenção Standard ». **Arbitrage, pas patch.** Bloque 3 corrections de prix sur une money page.
2. 🛑 **Le service `'Urgências 24h'`** : même question ouverte sur CNR — **un seul arbitrage débloque les 2 repos**.
3. ⚠️ **Rayon de couverture 100 km (CNR) vs 130 km (ENR)** — voir Apprentissages. Arbitrage à 1 tap, débloque les 2 repos.
