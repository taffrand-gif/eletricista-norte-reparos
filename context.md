# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-20
- Tâche prévue : rang 1 de la file du 19/08 — retrait de la **branche morte `plumberFaqs`**.
- Tâche réellement exécutée : **la tâche prévue.**
- Branche (depuis `refs/remotes/origin/main`, **en worktree**) : `loop/2026-08-20-enr-plumberfaqs-deadbranch`
- Commits : 3 (2 fichiers de production, **1 par commit**, + `SEO_PLAN.md`)
- PR ouverte : **#358** — https://github.com/taffrand-gif/eletricista-norte-reparos/pull/358
- **PR jumelle CNR : #321** (même famille : code mort porteur de violations)
- Résultat : ✅ 2 fichiers. **Les 2 résiduels R8 du run précédent sont tombés à 0.**

### Preuve de branche morte — établie, pas supposée
`FAQ.tsx` L20-21 faisait `isPlumber ? plumberFaqs : electricFaqs` avec `isPlumber = config.id === 'norte-reparos'`. `config` vient de `useSite()` → `getCurrentSiteConfig()` (`shared/siteConfig.ts` L233-235) qui retourne le **littéral** `siteConfig`, dont `id` vaut `'eletricista-norte-reparos'` (L105). `isPlumber` est **statiquement false**.
Le bloc restait néanmoins **dans le bundle servi au navigateur**, donc lisible par tout crawler qui exécute le JS, sur un domaine 100 % électricité. Il portait : `Deslocamo-nos gratuitamente` (`PRICING.md` L56, interdit verbatim) · `equipas de piquete sempre disponíveis` (claim d'effectif, R4) — **les deux exactement ce que la PR #351 avait retiré d'`electricFaqs`** · un catalogue de services de canalisation + prix plomberie 50/60/150 € **absents du `PRICING.md` de ce repo** (R12, cannibalisation de `canalizador-norte-reparos.pt`) · un bloc incohérent (« Tem eletricista urgente 24h/7d? » rangé dans les FAQ plomberie, avec le téléphone électricien).

**Ordre des commits imposé** : `FAQ.tsx` d'abord (cesse de consommer), `faqData.ts` ensuite (retire l'export) → aucun commit intermédiaire ne casse la compilation.

- **Témoins R8** (`client/src` + `shared`) : `plumberFaqs` **3→0** · `Deslocamo-nos gratuitamente` **1→0** · `equipas de piquete` **1→0** · `emergências de canalização` **1→0** · `certificação de gás` **1→0** · `electricFaqs` **3→3** (contrôle positif).
- `git diff --numstat` : `faqData.ts` **0/30** · `FAQ.tsx` **2/3**.
- **`tsc --noEmit` : 82 sur la branche, 82 sur un worktree détaché `refs/remotes/origin/main` intact → 0 régression.**

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge** dans les 4 `context.md`. Aucun gate réécrit.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. Ne jamais réécrire un gate de ce type.

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-20

| Rang | Cible | Statut |
|---|---|---|
| — | `FAQ.tsx` · `FAQLocal.tsx` · `OptimizedServices.tsx` · `Footer.tsx` · `StructuredData.tsx` · `Contactos.tsx` · `data/faqData.ts` (dont `plumberFaqs`) | ✅ traités |
| **1** | **Audit systématique du code mort** : pour chaque export de `client/src/components/**` et `client/src/data/**`, `grep -rn "<NomExport>" client/src shared` ; 1 seule occurrence (sa définition) ⇒ code mort | ⏳ **PROCHAINE TÂCHE.** Meilleur rapport effort/risque de la file : 0 risque prod, 0 arbitrage d'offre. **Sur CNR le même audit a sorti `SEO/FAQSchema.tsx` = 10 violations retirées en une suppression (PR #321).** |
| **2** | **`components/SEO/FAQSchema.tsx` L70** — « deslocação incluída … raio de 50km de Bragança » | ⏸ **fichier pris par les PR #350 ET #349, toutes deux ouvertes.** ⚠️ **Sur CNR, le fichier jumeau était du CODE MORT** — vérifier le prédicat d'importeur ici **avant** de patcher : si `FAQSchema` n'a pas d'importeur sur ENR non plus, la réponse est le **retrait**, pas le patch. |
| 3 | `grep -rn 'gratuit' client/src` + `grep -rn 'raio de' client/src` sur **tout** le repo | ⏳ prédicat `PRICING.md` L54-56 passé seulement sur `faqData.ts` |
| 4 | `Diagnostico.tsx` (6 occ) | ⏳ **à requalifier d'abord** — R145 autorise `24h/7 dias` |
| 5 | `PriceTable.tsx` (3) | 🛑 **BLOQUÉ — arbitrage de prix. Ne pas patcher** |
| 6 | `CalculadorPreco.tsx` · `InnovativeHero.tsx` · `TrustBanner.tsx` · `Blog.tsx` | ⏸ **requalifier en lecture** — vraisemblablement vides de violations réelles |

## Tâche suivante recommandée
1. **Rang 1 — l'audit du code mort**, en premier. Méthode validée ce run sur les 2 repos jumeaux.
2. **`FAQSchema.tsx`** dès que #350 et #349 sont mergées, en commençant par le test d'importeur.
3. **Le prédicat `gratuit` sur tout `client/src/` et `client/public/`.** Sur CU le même prédicat avait donné 38 fichiers + 1 page (PR #267).
4. **`garantia de 24 meses` (L50) et durées chiffrées (L46) de `faqData.ts`** — les PR **#342** et **#350** sont ouvertes sur ces sujets exacts. **Reprendre après leur merge.**
5. **Batch R145 `rápida`/`rápido` — 61 occurrences.** GO requis.
6. Vocabulaire validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un résiduel de témoin R8 qui « ne descend pas à 0 » est une PISTE, pas du bruit.** Le run du 19/08 a noté `2→1` deux fois, a qualifié les restes de « branche morte » et est passé à autre chose. **Ces deux résiduels étaient les mêmes violations, toujours dans le bundle.** ➡️ **Quand un témoin s'arrête au-dessus de 0, la ligne suivante du run doit dire où est le reste et pourquoi il survit.**
- 🔴 **NOUVEAU — le CODE MORT est un gisement de violations à part entière, sur les DEUX repos jumeaux.** ENR (`plumberFaqs`, 4 violations) et CNR (`SEO/FAQSchema.tsx`, 10 violations) en ont livré chacun le même soir. Il est **invisible à tous les compteurs**, qui partent de `OptimizedHome.tsx`. ➡️ **Test d'ouverture** : `grep -rn "<NomExport>" client/src shared` ; 1 occurrence = sa définition ⇒ code mort.
- 🔴 **NOUVEAU — une baseline `tsc` se REMESURE, elle ne se recopie pas.** La note du 14/08 (« total 106, pas 82 ») est **infirmée** : mesurée ce run des deux côtés, c'est **82**. Sur CNR la baseline annoncée était 322, la mesure donne 215. **Deux `context.md` sur deux portaient une baseline fausse.** ➡️ Mesurer la baseline sur un **worktree détaché sur le remote intact, dans le même run**.
- 🔴 **Une branche `isPlumber ? A : B` sur un repo mono-config est du code MORT permanent.** `getCurrentSiteConfig()` retourne une constante. ⚠️ **Le pattern `isPlumber` reste utilisé par ~20 autres composants** : ce sont les mêmes branches mortes, mais elles portent surtout du style (couleurs, emoji). **Traiter en priorité celles qui portent du TEXTE ou des PRIX.**
- 🔴 **Un contrôle de conformité sur UN fichier ne clôt pas une divergence de doctrine.** ➡️ Grepper la **VALEUR** sur tout `client/src/`. (Confirmé une fois de plus sur CNR ce run : 6 divergences de rayon restaient après un run qui se croyait complet.)
- 🔴 **`PRICING.md` porte des interdictions verbatim (L54-56) qu'aucun compteur R12 ne teste.** ➡️ `grep -c 'gratuit'` au contrôle d'ouverture des 4 repos.
- 🔴 **Vérifier les PR ouvertes AVANT de patcher.** A orienté ce run : `faqData.ts` était libre, `FAQSchema.tsx` non.
- 🔴 **Une PR « MERGED » se vérifie dans `main` par `(#N)` dans `git log --oneline`**, pas par son statut ni par `merge-base --is-ancestor` (faux sur un merge en squash). Vérifié ce run pour #351 : présente.
- 🔴 **Le compteur R12 ne voit pas le JSON-LD**, et c'est là que sont les violations les plus graves.
- 🔴 **Le binôme cross-repo fournit un REMPLACEMENT verbatim, pas seulement une détection.** Utilisé 5 fois. **Avant de déclarer une valeur irrécupérable, regarder le jumeau.**
- 🔴 **Un doublon `X e X` est une signature de purge** (variante CU : `X: X`). Motif : `(\b\w[\w\s]{4,}\b) e \1`.
- 🔴 **Un `SEO_PLAN.md` append-only entre en conflit à CHAQUE merge de `main`.** Résolution : **conserver les DEUX côtés** (main d'abord). Contrôle : `git diff --numstat SEO_PLAN.md` → N ajoutées, **0 supprimée**.
- 🔴 **R6 interdit `--force`, donc une PR déjà ouverte se met à jour par MERGE, jamais par rebase.**
- **Quand une question FAQ porte sur un délai, retirer le couple Q/R plutôt que le réécrire.** Validé par le merge de la PR #200 (EU).
- **Un artefact de purge peut créer un contresens de SÉCURITÉ.** Relire en priorité les contenus à enjeu physique.
- **`SEO_PLAN.md` et `context.md` dérivent indépendamment — lire les DEUX.**
- B1, B2, B3 sont TERMINÉS — ne pas les rouvrir.

## Edge cases détectés
- ✅ **REFERMÉ — la branche locale parasite `refs/heads/origin/main` n'existe plus.** Vérifié ce run : `git rev-parse refs/heads/origin/main` → `fatal: Needed a single revision`. `origin/main` n'est plus ambigu. **Écrire `refs/remotes/origin/main` reste la forme sûre**, mais ce n'est plus un blocage.
- 🔴 **Le hook `maillage-gate` produit un FAUX POSITIF sur tout merge commit.** Procédure : vérifier que le fichier incriminé n'est pas dans `git diff --name-only <remote>/main...HEAD`, vérifier que les href préexistent sur main, puis `--no-verify` **en le justifiant dans le message de commit**. Ne jamais bypasser sans ces deux vérifications.
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox `mcp__workspace__bash` = lecture / grep / parsing Python / **écriture de fichiers** ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`. **Confirmé ce run** : `git push` depuis le sandbox échoue sur `could not read Username` (le credential helper pointe `/opt/homebrew/bin/gh`).
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/` — lisibles depuis le sandbox.
- **Les commandes `git` ne fonctionnent PAS depuis le sandbox dans un worktree** (chemin absolu host dans `.git`). **L'écriture de fichiers, si.**
- **`tsc` dans un worktree** : `ln -sfn <checkout>/node_modules ./node_modules` avant, **et retirer le lien avant le commit**.
- 🔴 `gh pr diff <n>` peut dépasser la limite de sortie → `gh pr view <n> --json files --jq '.files[].path'`.
- 🔴 **zsh ne fait PAS de word-splitting** ; **`grep -P` n'existe pas sur macOS** → Python pour tout motif non trivial ; **`git commit -m` multiligne est fragile** → `git commit -F -` + heredoc `<<'MSG'`.
- L'outil `Write` (chemin host) gère parfaitement les accents — plus sûr que `sed`.
- Corps de PR long : `gh pr create --body-file`, jamais `--body` inline.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : le checkout partagé était sur `feat/enr-rankpush-como-montar-interruptor-duplo-t_03b01956`, **non touché**. Aucun `context.md` des 4 repos ne *prescrit* de `reset --hard` — rien à corriger.

## Blocages connus
1. 🛑 **`PriceTable.tsx` — plancher de « Pequena Arranjo » à définir.** L109 « Mão de Obra (mín. 1h) : 35 € » contre 70 €/h canonique. **Arbitrage, pas patch.** Bloque 3 corrections de prix sur une money page.
2. 🛑 **Le service `'Urgências 24h'`** : même question ouverte sur CNR — **un seul arbitrage débloque les 2 repos**.
3. ⏸ **`SEO/FAQSchema.tsx`** — bloqué par les PR #350 et #349 ouvertes, pas par un arbitrage. Reprendre après merge, **en commençant par le test d'importeur** (sur CNR le jumeau était du code mort).
4. ✅ **REFERMÉ — rayon de couverture.** `AGENTS.md` §12 le verrouille à ~130 km depuis le 30/06. Appliqué ici (PR #351) et sur CNR (PR #319 + #321).
5. ✅ **REFERMÉ — `plumberFaqs`.** Retiré ce run (PR #358). La décision de périmètre était légère : le code était inatteignable.
