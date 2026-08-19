# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-19
- Tâche prévue : `context.md` du 14/08, **tâche recommandée n°3** — `client/src/data/faqData.ts`, *invisible au compteur de composants*.
- Tâche réellement exécutée : **la tâche prévue, audit élargi au fichier entier.** 3 violations réelles.
- Branche (depuis `refs/remotes/origin/main`, **en worktree**) : `loop/2026-08-19-enr-faqdata`
- Commits : 2 (1 fichier de production + `SEO_PLAN.md`)
- PR ouverte : **#351** — https://github.com/taffrand-gif/eletricista-norte-reparos/pull/351
- **PR jumelle CNR : #319**
- Résultat : ✅ 1 fichier. **Et une conclusion du run précédent invalidée.**

### Les 3 corrections (toutes dans `electricFaqs`, la branche VIVE)
| Avant | Verdict | Traitement |
|---|---|---|
| `Deslocamo-nos gratuitamente para avaliar o problema` | 🔴 | **retrait** — `PRICING.md` L56 (verrouillé) : « ❌ JAMAIS *deslocacao gratuita* : la deslocacao a un prix tabelado par zone (Z1-Z6) » |
| `temos equipas de piquete sempre disponíveis` | 🔴 | **retrait** — claim d'effectif non vérifiable (R4/R5). `24h/7d` **conservé**, R145 l'autorise |
| `raio de 100km a partir de Trás-os-Montes` | 🔴 | → `raio de cerca de 130 km a partir de Macedo de Cavaleiros` + tarif tabelado Z1-Z6 |

**Zéro invention (R4)** : la formulation de la 3ᵉ est **verbatim** `AGENTS.md` §12 L116 (verrouillé 30/06) et existe **déjà en production sur ce repo** (`client/src/pages/blog/QuantoCustaEletricistaHoraPortugal.tsx` L38).

### 🔴 La conclusion du 14/08 sur le rayon était FAUSSE
Le `context.md` du 14/08 écrivait : « la divergence de rayon est tranchée, **et en faveur d'ENR** — ENR (130 km) est conforme ; c'est CNR qui diverge ». Le contrôle avait porté sur `StructuredData.tsx` **seul**. Grep exhaustif :
- ✅ **130 km** : `StructuredData.tsx` L365 · `CidadesProximas.tsx` L55 · `OptimizedServices.tsx` L223 · `ZonaIntervencao.tsx` L41 · `Zonas.tsx` L70/L112 · 2 pages blog
- 🔴 **100 km** : `data/faqData.ts` L42 — **corrigé ce run**
- 🔴 **50 km de Bragança** : `components/SEO/FAQSchema.tsx` L70 — **non retouché** (PR #350 ouverte dessus)

- **Témoins R8** (`client/src/data/faqData.ts`) : `raio de 100km` **1→0** · `raio de cerca de 130 km` **0→1** · `piquete` **2→1** · `Deslocamo-nos gratuitamente` **2→1** (résiduels = branche morte) · `24h/7d` **6→6** (contrôle positif).
- Contrôle d'ouverture `grep -rn 'A confirmar-' client/src` = **0** ✅.

## ✅ Gate merge — aucun gate actif
Vérifié ce run sur les 4 `context.md` : **aucune mention d'attente de merge**. Aucun gate réécrit.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. Ne jamais réécrire un gate de ce type.

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-19

**Le compteur R12 par composant a atteint sa limite sur ce repo.** Les 3 violations de ce run étaient invisibles pour lui, comme les 2 du run précédent (`StructuredData.tsx`). **Les gisements sont dans les fichiers de DONNÉES et dans le JSON-LD.**

| Rang | Cible | Statut |
|---|---|---|
| — | `FAQ.tsx` · `FAQLocal.tsx` · `OptimizedServices.tsx` · `Footer.tsx` · `StructuredData.tsx` · `Contactos.tsx` · `data/faqData.ts` | ✅ traités |
| **1** | **`plumberFaqs` dans `data/faqData.ts` (L85 → fin) = BRANCHE MORTE permanente** | ⏳ **PROCHAINE TÂCHE.** `FAQ.tsx` L21 : `isPlumber ? plumberFaqs : electricFaqs`, repo mono-config électricité → `isPlumber` statiquement **false**. Le bloc porte du contenu **plomberie** (« emergências de canalização », « Fazem certificação de gás? ») et les 2 résiduels des témoins. **Retrait de branche morte**, pas patch au compteur |
| 2 | `components/SEO/FAQSchema.tsx` L70 — « deslocação **incluída** … raio de **50km de Bragança** » | ⏳ double violation réelle. ⚠️ **Fichier pris par la PR #350** — attendre son merge |
| 3 | Passer `grep -rn 'gratuit' client/src` + `grep -rn 'raio de' client/src` sur **tout** le repo | ⏳ le prédicat `PRICING.md` L54-56 n'a été passé que sur `faqData.ts` |
| 4 | `Diagnostico.tsx` (6 occ) — jumelle de la PR #280 (CNR) | ⏳ **à requalifier d'abord** (R145 autorise `24h/7 dias`) |
| 5 | `PriceTable.tsx` (3) | 🛑 **BLOQUÉ — arbitrage de prix. Ne pas patcher** |
| 6 | `CalculadorPreco.tsx` · `InnovativeHero.tsx` · `TrustBanner.tsx` · `Blog.tsx` | ⏸ **requalifier en lecture** — vraisemblablement vides de violations réelles |

## Tâche suivante recommandée
1. **Retrait de la branche morte `plumberFaqs`** — voir rang 1. Décision de périmètre légère (le code est inatteignable), gros gain : contenu cross-métier hors du bundle **et** compteur qui cesse de mentir.
2. **Passer le prédicat `gratuit` sur tout `client/src/` et `client/public/`.** Sur CU le même prédicat a donné **38 fichiers + 1 page** (PR #267).
3. **Auditer `shared/` et `client/src/data/` comme des pages.** C'est là qu'étaient les 3 violations de ce run.
4. **`garantia de 24 meses` (L50) et durées chiffrées (L46) de `faqData.ts`** — non retouchés ce run : les PR **#342** et **#350** sont ouvertes sur ces sujets exacts. **Reprendre après leur merge.**
5. **Batch R145 `rápida`/`rápido` — 61 occurrences dans `client/src/`.** GO requis. Patron validé : ventiler → prototyper → GO en un tap.
6. Vocabulaire validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un contrôle de conformité sur UN fichier ne clôt pas une divergence de doctrine.** « ENR est conforme sur le rayon » était vrai pour `StructuredData.tsx` et **faux pour le repo**. ➡️ **Grepper la VALEUR sur tout `client/src/`, jamais conclure depuis le fichier qu'on vient de lire.**
- 🔴 **NOUVEAU — `PRICING.md` porte des interdictions verbatim (L54-56) qu'aucun compteur R12 ne teste.** `gratuito / gratuita` y est banni **par construction**. Prédicat trivial, jamais passé : **2 occurrences ici, 6 sur CNR, 38 fichiers + 1 page sur CU**. ➡️ **`grep -c 'gratuit'` au contrôle d'ouverture des 4 repos.**
- 🔴 **NOUVEAU — une branche morte n'est pas neutre : elle FAUSSE les audits.** Les 2 résiduels `piquete` / `Deslocamo-nos gratuitamente` sont dans `plumberFaqs`, inatteignable. Un témoin R8 qui ne tombe pas à 0 alors que le travail est complet **coûte du temps d'analyse à chaque run**. ➡️ **Retirer la branche morte vaut mieux que la documenter une fois de plus.**
- 🔴 **Vérifier les PR ouvertes AVANT de patcher** a évité 2 conflits ce run (#342, #350). `gh pr view <n> --json files --jq '.files[].path'` en début de run.
- 🔴 **Le compteur R12 ne voit pas le JSON-LD, et c'est là que sont les violations les plus graves.** Vérifié sur les 4 repos. ➡️ **Auditer `StructuredData.tsx` et `data/` en début de run, indépendamment du compteur.**
- 🔴 **Le binôme cross-repo fournit un REMPLACEMENT verbatim, pas seulement une détection.** Utilisé 4 fois maintenant. **Avant de déclarer une valeur irrécupérable, regarder le jumeau.**
- 🔴 **Un doublon `X e X` est une signature de purge**, au même titre qu'un suffixe orphelin. Motif : `(\b\w[\w\s]{4,}\b) e \1`. **Variante trouvée sur CU ce run : `X: X`.**
- 🔴 **Un `SEO_PLAN.md` append-only entre en conflit à CHAQUE merge de `main`.** Résolution mécanique : **conserver les DEUX côtés** (main d'abord). Contrôle : `git diff --numstat SEO_PLAN.md` → N ajoutées, **0 supprimée**.
- 🔴 **R6 interdit `--force`, donc une PR déjà ouverte se met à jour par MERGE, jamais par rebase.**
- 🔴 **Une branche `isPlumber ? A : B` sur un repo mono-config est du code MORT permanent.** `getCurrentSiteConfig()` retourne une constante.
- 🔴 **Une PR mergée peut DISPARAÎTRE de `main`** (constaté sur CNR, PR #300). ➡️ **Contrôle de fin de run : `git merge-base --is-ancestor <mergeCommit> <remote>/main`.** Audit du 14/08 : **ENR est propre sur les 12 dernières PR.**
- ⚠️ **Baseline `tsc` mesurée le 14/08 : 106** (`./node_modules/.bin/tsc --noEmit`, `npx tsc` est un piège).
- **Quand une question FAQ porte sur un délai, retirer le couple Q/R plutôt que le réécrire.** Validé par le merge de la PR #200 (EU).
- **Un artefact de purge peut créer un contresens de SÉCURITÉ.** Relire en priorité les contenus à enjeu physique.
- **`SEO_PLAN.md` et `context.md` dérivent indépendamment — lire les DEUX.**
- B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- 🔴 **CE REPO A UNE BRANCHE LOCALE PARASITE `refs/heads/origin/main`.** Elle rend `origin/main` **ambigu**. ➡️ **TOUJOURS écrire `refs/remotes/origin/main` en entier** (fait ce run pour le `git worktree add`). **Candidat à suppression : `git branch -D origin/main` — ne pas supprimer sans GO.**
- 🔴 **Le hook `maillage-gate` produit un FAUX POSITIF sur tout merge commit.** Procédure : vérifier que le fichier incriminé n'est pas dans `git diff --name-only <remote>/main...HEAD`, vérifier que les href préexistent sur main, puis `--no-verify` en le justifiant dans le message de commit. Ne jamais bypasser sans ces deux vérifications.
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox = lecture / grep / parsing Python / **écriture de fichiers** ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/` — lisibles depuis le sandbox.
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** (chemin absolu host dans `.git`). **L'écriture de fichiers, si.**
- 🔴 **`gh pr diff <n>` peut dépasser la limite de sortie de l'outil.** Préférer `gh pr view <n> --json files`.
- 🔴 **zsh ne fait PAS de word-splitting** — `set -- $var` dans une boucle échoue silencieusement.
- 🔴 **`grep -P` n'existe pas sur macOS.** Python pour tout motif non trivial.
- 🔴 **`git commit -m` multiligne avec backticks/parenthèses est fragile en zsh.** `git commit -F -` + heredoc `<<'MSG'`.
- L'outil `Edit`/`Write` (chemin host) gère parfaitement les accents — plus sûr que `sed`.
- Corps de PR long : `gh pr create --body-file`, jamais `--body` inline.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : aucune prescription de `reset --hard` dans les 4 `context.md` — rien à corriger.

## Blocages connus
1. 🛑 **`PriceTable.tsx` — plancher de « Pequena Arranjo » à définir.** L109 « Mão de Obra (mín. 1h) : 35 € » contre 70 €/h canonique. **Arbitrage, pas patch.** Bloque 3 corrections de prix sur une money page.
2. 🛑 **Le service `'Urgências 24h'`** : même question ouverte sur CNR — **un seul arbitrage débloque les 2 repos**.
3. ✅ **REFERMÉ — rayon de couverture.** Ce n'était pas un arbitrage : `AGENTS.md` §12 le verrouille à ~130 km depuis le 30/06. Appliqué ici (PR #351) et sur CNR (PR #319).
4. ⚠️ **`plumberFaqs` = branche morte** portant du contenu plomberie sur un site électricité. Décision de périmètre légère, à prendre au prochain run.
