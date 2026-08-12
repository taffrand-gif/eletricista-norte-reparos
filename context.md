# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-12
- Tâche exécutée : **R12 — file de tâches loop, rang 1 : `client/src/components/FAQLocal.tsx`**, avec la question ouverte du 11/08 tranchée.
- Branche : `loop/2026-08-12-eletricista-norte-reparos-faqlocal-dead-branch` (depuis `origin/main`, **en worktree**)
- Commits : `418efaffd7` (`FAQLocal.tsx`), puis le commit `SEO_PLAN.md`
- PR ouverte : https://github.com/taffrand-gif/eletricista-norte-reparos/pull/325
- Résultat : ✅ 2 commits, 2 fichiers. **Compteur R12 du fichier : 9 → 0**, par **retrait de la branche morte** (+1 / −21). Témoins R8 : `isPlumber` 2→0 · `canalizador` 3→0 · `desentupimento` 2→0 · `esquentador` 2→0 · `Atendimento 24h/7d` 3→0 · `domingos` 1→0 · `urgência` 3→0 · `eletricista` 6→6 · `Orçamento por escrito em 48h` 3→3 (contrôles positifs). `questions == answers == 6`. `./node_modules/.bin/tsc --noEmit` : 0 erreur sur le fichier, **total 82** (baseline conforme).

## ✅ RÉSOLU ce run — l'ambiguïté `FAQLocal.tsx` du 11/08

> *« `FAQLocal.tsx` a déjà été traité par la PR #291 et compte pourtant 9 — (a) résiduel de branche morte, ou (b) régression réelle ? »*

**Réponse : (a), et de façon STATIQUE, pas circonstancielle.**

- `shared/siteConfig.ts` **L105** : `id: 'eletricista-norte-reparos'`
- `shared/siteConfig.ts` **L233-235** : `getCurrentSiteConfig()` retourne le `siteConfig` unique — **aucune commutation à l'exécution**
- donc `isPlumber = config.id === 'norte-reparos'` (L13) est **statiquement faux sur ce repo**

Les 9 occurrences vivaient **toutes** dans la branche `isPlumber ? [...]` (L14-L32), **jamais rendue**. La branche électricité (L34-L51), seule rendue, était déjà propre : **la PR #291 avait bien fait son travail — c'est le compteur qui mentait.**

**Traitement retenu : retrait de la branche morte plutôt que clôture de l'entrée.** Elle embarquait du contenu **plomberie** (`canalizador`, `desentupimento`, `esquentador`, une grille de prix de désentupimento) dans le bundle d'un site d'électricité. Même famille que le retrait du `.md` mort sur CNR (**#286**, 10/08). Retrait pur, zéro vocabulaire introduit, branche électricité inchangée octet pour octet.

## ✅ Gate merge — aucun gate actif
Vérifié au run du 11/08 : #295 (ENR), #269 (CNR), #240 (CU), #200 (EU) **toutes MERGED**. Aucun gate réécrit ce run.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. Ne jamais réécrire un gate de ce type.

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-12

Recompte effectué en début de run sur `origin/main`.

| Rang | Composant | Occurrences R12 | Statut |
|---|---|---|---|
| — | `InnovativeHero.tsx` | 2 (branche `isPlumber` morte) | ✅ run 04/08 — **à re-vérifier : candidat au retrait de branche morte** |
| — | `FAQ.tsx` | 0 | ✅ PR #307 |
| — | `FAQLocal.tsx` | 9 → **0** | ✅ **PR #325 (ce run)** |
| — | `OptimizedServices.tsx` | 20 | ✅ PR #295 (mergée) — ⚠️ **résiduel annoncé « 8 clés + branche morte » : à re-statuer avec la méthode du ternaire statique** |
| **1** | **`Footer.tsx`** | **7** | ⏳ **PROCHAINE TÂCHE** — ⚠️ contient du NAP, ne pas y toucher. **Lire d'abord la PR CNR du 10/08** : sur CNR le résiduel s'est révélé être le maillage de segmentation d'intent, pas une violation. |
| 2 | `Diagnostico.tsx` | 6 | ⏳ à faire — **jumelle de la PR #280 sur CNR**, patron déjà validé |
| 3 | `Contactos.tsx` | 4 | ⏳ à faire — **jumelle du prochain run CNR, candidat binôme** |
| 4 | `PriceTable.tsx` | 3 | 🛑 **BLOQUÉ — arbitrage de prix requis, voir ci-dessous. Ne pas patcher.** |
| 5 | `CalculadorPreco.tsx` | 2 | ⏳ à faire |
| 6 | `TrustBanner.tsx` | 1 | ⏳ à faire |
| 6 | `OrcamentoGratuitoBadge.tsx` | 1 | ⏳ à faire |
| 6 | `Blog.tsx` | 1 | ⏳ à faire |
| — | `ZonaIntervencao`, `Trabalhos`, autres | 0 | rien à faire (R12) |

Script de recomptage :
```bash
for c in $(grep "^import" client/src/pages/OptimizedHome.tsx | sed -E "s|.*components/([A-Za-z]+)['\"].*|\1|" | grep -v import); do
  f=client/src/components/$c.tsx
  [ -f "$f" ] && echo "$c $(grep -oiE '24h|24 horas|urgent[ea]|urgência|emergênci[ao]s?|domingo|7/7|24/7|7 dias|prioritári' "$f" | wc -l | tr -d ' ')"
done | sort -k2 -rn
```

## 🛑 `PriceTable.tsx` — 3 écarts de prix relevés ce run, NON patchés

Le binôme avec CNR (PR #290, prix de deslocação faux) a fait vérifier `PriceTable.tsx` ici. **Les deslocações sont correctes** (Z1 = 15 €, Z3 = 35 €) — le défaut CNR ne s'est pas propagé. Mais un défaut **différent** existe, sur la **main-d'œuvre** :

| Ligne | Affiché | Canonique (`hourlyRate: 70` · `PRICING-CANONIQUE.md` L7 « Eletricidade : 70 €/h ») | Écart |
|---|---|---|---|
| L109 | « Mão de Obra (**mín. 1h**) : **35 €** » | 1 h = **70 €** | **−50 %** |
| L12 | « Pequena Arranjo » : « **35€** - 70€ », détail « **Mínimo 1h** » | plancher **70 €** | plancher faux |
| L117 | « Intervenção Urgência (1h) : **100 €** » | 70 × `urgencyMultiplier: 1.5` = **105 €** | −5 € |

Le fichier **se contredit lui-même** : L17 affiche « 70€ - 140€ » pour « 1-2h de trabalho », soit exactement 70 €/h.

**Pourquoi non patché** : corriger L109 à 70 € rend L12 incohérent, et corriger L12 à son tour ferait de « Pequena Arranjo » un **doublon exact** d'« Intervenção Standard » (70€ - 140€). **Aucune correction verbatim n'existe sans redéfinir la structure de l'offre** — arbitrage, pas patch. Inventer une grille violerait R4.

➡️ **Décision demandée** : quel est le prix plancher réel d'une « Pequena Arranjo » (tomadas, interruptores, pontos de luz) ? Si c'est bien 1 h minimum → plancher 70 € et la ligne fusionne avec « Intervenção Standard ». S'il existe un forfait court sous l'heure, **il doit entrer dans `PRICING-CANONIQUE.md` — il n'y figure pas aujourd'hui.**

## Tâche suivante recommandée
1. **`Footer.tsx`** (7) — d'abord **statuer** (NAP + maillage d'intent probablement hors périmètre, comme sur CNR), puis patcher ou **clore l'entrée**.
2. Sinon **`Diagnostico.tsx`** (6) : jumelle directe de la PR #280 (CNR), patron déjà écrit — défaut attendu « Técnico **Atendimento 24h** em {ville} » → « Técnico **ao seu domicílio** em {ville} ». ⚠️ **Ne pas toucher `value: 'urgente'`** : clé de lookup consommée par `if (urgency === 'urgente')`, la renommer casse le message WhatsApp **sans erreur TypeScript**.
3. **Passer les composants au test du ternaire statique** (voir Apprentissages) : plusieurs entrées de la file sont probablement du code mort, et le compteur les fait remonter à tort.
- Vocabulaire de remplacement validé, **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12.

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — une branche `isPlumber ? A : B` sur un repo mono-config est du code MORT permanent, pas une variante.** `getCurrentSiteConfig()` retourne une constante : il n'y a pas de commutation. ➡️ **Contrôle générique à passer avant tout patch au compteur : les occurrences sont-elles derrière un ternaire statiquement faux ?** **10 autres composants** utilisent le même motif `config.id === 'norte-reparos'` ici (`Diagnostico`, `OptimizedServices`, `Garantias`, `EquipamentoProfissional`, `WhyWePublishPrices`, `PriceTransparency`…) — **le même gisement de code mort existe très probablement ailleurs, et il gonfle les compteurs R12 de la file.** `OptimizedServices.tsx` (20, résiduel annoncé « 8 clés + branche morte ») est le premier suspect.
- 🔴 **NOUVEAU — retirer la branche morte vaut mieux que clore l'entrée.** Clore laisse du contenu cross-métier dans le bundle **et** laisse le compteur mentir au prochain run. Retirer règle les deux, et c'est un retrait pur donc sans risque R4.
- 🔴 **NOUVEAU — le binôme cross-repo paie dans les deux sens.** Ce run il a **confirmé** que le défaut de prix CNR ne s'était pas propagé ici, **et** révélé un défaut ENR distinct que personne ne cherchait. Le binôme n'est pas qu'un accélérateur de propagation, c'est un **détecteur**.
- **La propagation cross-repo traîne quand elle n'est pas faite dans le même run** : `seo.keywords` 14 j · `FAQLocal.tsx` 6 j · `FAQ.tsx` 6 j · `OptimizedServices.tsx` **~20 min** (binôme). **Le binôme reste la méthode.**
- 🔴 **Un artefact de purge peut créer un contresens de SÉCURITÉ**, pas seulement une faute de grammaire (« Desligue o disjuntor geral **mediante confirmação** »). **Relire en priorité les contenus à enjeu physique** (électricité, gaz, eau).
- **Quand une question FAQ porte sur un délai ou sur la disponibilité 24/7, retirer le couple Q/R plutôt que le réécrire.** Aucune réponse honnête ET conforme n'existe. Validé par le merge de la PR #200 (EU).
- **Purger par retrait plutôt que par réécriture** quand c'est possible : zéro vocabulaire nouveau = zéro risque R4.
- 🔴 **Un batch de conformité peut corrompre la RÈGLE qu'il applique** (leçon CU, `fb9dd2415`). **Tout batch de substitution doit exclure `AGENTS.md`, `SEO_PLAN.md`, `context.md`, `CLAUDE.md`.** Et **avant d'escalader une contradiction de doctrine : `git log -S "<fragment>" -- AGENTS.md`.** ➡️ Vérifié : l'`AGENTS.md` d'ENR n'est **pas** corrompu.
- 🔴 **`npx tsc` est un piège** (résout vers un paquet npm homonyme, sort en erreur sans rien typer). Utiliser **`./node_modules/.bin/tsc --noEmit`**, total attendu **82**. Dans un worktree : `ln -sfn ~/work/Sites/eletricista-norte-reparos/node_modules ./node_modules`, puis `rm -f ./node_modules` **avant** le commit.
- `SEO_PLAN.md` et `context.md` **dérivent indépendamment** — lire les DEUX, et vérifier le statut d'une tâche dans **sa propre fiche**, pas via `grep ⏳`.
- **`SEO_PLAN.md` est append-only** : après édition, contrôler `git diff --numstat SEO_PLAN.md` → **N ajoutées, 0 supprimée**.
- B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox = lecture/grep/scripts (`git fetch` y marche, repos publics) ; **git en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`** (host, `gh` authentifié `taffrand-gif`).
- ⚠️ **Le sandbox ne peut pas supprimer les `.git/objects/*.lock`** (« Operation not permitted ») — `git fetch` émet des warnings d'unlink mais **réussit**.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/`.
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** (le `.git` contient un chemin absolu host).
- L'outil `Edit` (chemin host) fonctionne dans un worktree et gère les accents — plus sûr que `sed` pour patcher.
- Corps de PR long : fichier + `gh pr create --body-file`, jamais `--body` inline.

## Blocages connus
1. 🛑 **`PriceTable.tsx` — plancher de « Pequena Arranjo » à définir** (voir ci-dessus). Bloque 3 corrections de prix sur une money page.
2. 🛑 **Le service `'Urgências 24h'`** : même question ouverte sur CNR — **un seul arbitrage débloque les 2 repos**.
