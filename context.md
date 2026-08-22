# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-22
- Tâche prévue : rang 2 de la file du 21/08 — marqueurs de gabarit `##endstyle##`.
- Tâche réellement exécutée : **la tâche prévue**. Une seconde PR sur `comparacao.html` a été **préparée puis abandonnée** : le fichier est pris par une PR ouverte (voir §2).
- **1 PR ouverte** :
  - **#366** — https://github.com/taffrand-gif/eletricista-norte-reparos/pull/366 — branche `loop/2026-08-22-enr-style-markers` — 3 commits, 2 fichiers de production + `SEO_PLAN.md`

### 1. Les marqueurs `##endstyle##` (PR #366)
`client/public/sobre.html` L21 et `client/public/calculadora-de-preco.html` L21 portaient un `##endstyle##` résiduel **à l'intérieur** du bloc `<style>` ouvert L12 — ligne de CSS invalide livrée au parseur.
⚠️ **Les deux fichiers étaient DÉJÀ ÉQUILIBRÉS 2/2.** Le contrôle d'équilibre des balises — celui qui avait tout trouvé sur CU (#270) et EU (#313) — ne les sortait pas. Seul le grep des délimiteurs non résolus les trouve.
Contrairement à CNR, ENR n'avait **pas** de `##style##` en position d'ouverture : aucun CSS servi en clair ici.
- **Témoins R8** (tout le dépôt hors `.git`/`node_modules`/`dist`, docs exclus) : `##[a-zA-Z_]{3,}##` **2 → 0** · `<style>`/`</style>` **2/2 → 2/2** sur les deux fichiers.
- Contrôle PR ouvertes avant patch : **281 fichiers** pris par les 19 PR ouvertes, **aucun des 2 fichiers cibles**.

### 2. 🔴 DÉCOUVERTE — `client/public/comparacao.html` contient TROIS copies de son corps de page
Trouvé en traitant le rang 5 (les 6 chaînes françaises du corpus INTERDIT). **Elles sont toutes sur la même ligne du même fichier.**
Mesure : **`<h1>` ×3, `<header>` 3/3, `<main>` 3/1, `<section>` 3/1** — trois rendus du même gabarit concaténés. `Marca grande nacional` apparaît **2×** (les copies saines) contre `Marque grande` **1×** (la copie périmée) : **les chaînes françaises ne vivent que dans la copie périmée.**
🔎 **Le même défaut a été trouvé et corrigé sur CU ce run (PR #271, 2 copies).** Méthode validée là-bas : segmenter la copie à retirer sur `</li|p|td|h2|h3>` et vérifier que chaque segment > 45 caractères se retrouve dans la copie conservée. Sur CU, les **seules** exceptions étaient exactement les 7 fragments corrompus → suppression prouvée sans perte, et les 4 `Você` sont tombés **sans consommer le GO**.
🛑 **Non fait ici : `client/public/comparacao.html` est pris par la PR #348.**
⚠️ **Et le titre de la #348 ne le laisse pas deviner** : « fix(R145): supprime les promesses de délai, restaure les adverbes (ENR) ». Elle ne traitera vraisemblablement **pas** les 3 copies. **Rouvrir le sujet dès son merge, en vérifiant son diff et non son titre.**

### 3. Sweep élargi — résultat négatif, et il est utile
`${…}`, `{{…}}`, `%%…%%`, `__…__` hors `<script>` et hors commentaires, sur tout `client/public/` → **0 occurrence**.
À comparer à **CNR : 72 occurrences sur 19 pages de JSX brut servi au navigateur** (CTA `tel:` et WhatsApp morts). **Le défaut n'est donc pas systémique aux 4 repos** : il est propre au générateur de pages statiques de CNR. Ce 0 évite d'ouvrir une chasse inutile sur ENR au prochain run.

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge** dans les 4 `context.md`. Aucun gate réécrit.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo — ce run a ouvert la #366 pendant que 19 autres restaient ouvertes. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-22

| Rang | Cible | Statut |
|---|---|---|
| — | `##endstyle##` ×2 | ✅ **traité ce run (#366)** |
| **1** | 🔴 **`client/public/comparacao.html` — TROIS copies du corps de page** | ⏸ **pris par la PR #348.** Dès son merge : méthode CU #271, aucun GO. Emporte les **6 chaînes françaises** (rang 5 de l'ancienne file), les `Você` de la page, et répare `<h1>` ×3 + `<main>` 3/1. **Le meilleur rapport effort/résultat en attente sur ce repo.** |
| **2** | **`components/SEO/FAQSchema.tsx` — RETRAIT, pas patch** | ⏸ **0 importeur dans tout le dépôt** → code mort, exactement comme son jumeau CNR (PR #321, 10 violations retirées). Il porte **7 familles de violations**. **Toujours pris par #350 ET #349** — reprendre après leur merge. |
| **3** | **Corruption de prose `repar`→`arranj` — ~140 occurrences restantes** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`, restauration *probable* mais **pas prouvable par un fichier sur disque** → hors R4 sans arbitrage. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **4** | **`pages/QuantoTempoDemoraT rocarQuadroEletrico.tsx` — le nom du fichier contient une ESPACE** | ⏳ `App.tsx` L89 l'importe avec l'espace, la route L167 est active : le fichier est **vivant**. Seul fichier source avec une espace sur les 4 repos. 35 motifs de délai à requalifier. **Pris par une PR ouverte.** |
| **5** | **9 fichiers HTML déséquilibrés** relevés par le contrôle de balises | ⏳ `blog/tomada-queimada-perigos-solucoes.html` (`<script>` 10/8 + 2 JSON-LD invalides), `aquecimento-eletrico-macedo.html`, `quadros-eletricos-alfandega.html`, `quadros-eletricos-macedo.html`, `blog/fase-e-neutro-cores.html` (3 JSON-LD invalides), etc. **Aucun GO requis.** ⚠️ Plusieurs sont pris par des PR ouvertes — **contrôler avant**. ℹ️ **Méthode validée sur EU ce run** (PR #314) : hacher chaque bloc JSON-LD ; ne retirer que les doublons **byte-à-byte**. |
| **6** | `grep -rn 'gratuit' client/src` + `grep -rn 'raio de' client/src` | ⏳ prédicat `PRICING.md` L54-56 passé seulement sur `faqData.ts` |
| **7** | 12 fichiers morts sans violation | ⏳ dont `ComponentShowcase.tsx` (1375 L), `blog/QuadroEletricoDispara.tsx` (1072 L), `GaleriaOld.tsx`. ⚠️ `blog/ComoTrocarTomadaEletricaSozinho.tsx` : contenu « faire soi-même » sur un site d'électricien certifié — **question de positionnement ET de sécurité**, à arbitrer. |
| 8 | `Diagnostico.tsx` (6 occ) | ⏳ **à requalifier d'abord** — R145 autorise `24h/7 dias` |
| — | `PriceTable.tsx` | 🛑 **BLOQUÉ — arbitrage de prix** |
| — | `CalculadorPreco.tsx` · `InnovativeHero.tsx` · `TrustBanner.tsx` · `Blog.tsx` | ⏸ requalifier en lecture |

## Tâche suivante recommandée
1. **Rang 5 — les 9 HTML déséquilibrés**, avec la méthode EU #314 (hachage des blocs, retrait des seuls doublons byte-à-byte). C'est le plus gros gisement **sans GO et non bloqué** du repo. Contrôler les PR ouvertes fichier par fichier avant de patcher.
2. **Rang 1 dès #348 mergée** — vérifier son **diff**, pas son titre.
3. **Rang 6 — le prédicat `gratuit`** sur tout `client/src/` et `client/public/`.
4. **Rang 2 (`FAQSchema.tsx` en RETRAIT)** dès #350 et #349 mergées — re-tester le prédicat d'importeur d'abord.
5. **`garantia de 24 meses` (L50) et durées chiffrées (L46) de `faqData.ts`** — PR #342 et #350 ouvertes sur ces sujets exacts. Après leur merge.
6. Vocabulaire validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** Les 2 fichiers de ce run étaient 2/2, comme 2 des 3 de CNR. ➡️ **Le grep des délimiteurs non résolus et le contrôle d'équilibre ne se recouvrent pas : il faut les deux.**
- 🔴 **NOUVEAU — un sweep qui rend 0 est une information, pas une perte de temps.** Comparé à CNR (72 occurrences), ce 0 **localise** le défaut sur un générateur précis au lieu de le supposer partagé.
- 🔴 **NOUVEAU — avant de patcher une chaîne interdite, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.** Les 6 chaînes françaises de ce repo sont **toutes** dans la copie périmée de `comparacao.html`. Les patcher une par une aurait « corrigé » le mort et laissé la page avec trois `<h1>` et un `<main>` non fermé — **un correctif qui aggrave.**
- 🔴 **NOUVEAU — un compteur de balises ÉQUILIBRÉ peut signaler une duplication, pas une santé.** `<header>` 3/3 et `<h1>` 3/3 sont « équilibrés » — c'est-à-dire **triplés**. ➡️ **Compter les balises uniques par document (`<h1>`, `<header>`, `<main>`), pas seulement leur équilibre. Un `<h1>` à 2 est toujours un défaut, même parfaitement fermé.**
- 🔴 **NOUVEAU — un doublon byte-à-byte est le seul retrait qui se prouve sans arbitrage** (méthode EU #314). md5 identique → je retire ; md5 différent → je documente et je laisse. C'est la ligne de partage utile entre corriger et escalader.
- 🔴 **Un titre de PR ne dit pas ce que la PR couvre — confirmé de façon spectaculaire ce run.** La #348 s'intitule « supprime les promesses de délai (R145) » et prend `comparacao.html`, un fichier sans rapport. **4ᵉ run consécutif** que `gh pr view <n> --json files` évite un conflit. **À garder en ouverture systématique.**
- 🔴 **La signature d'une corruption de batch, c'est le MOT INEXISTANT.** `grep -rIoE '[[:alpha:]]*<lemme>[[:alpha:]]*' | sort | uniq -c`. **Reste à passer sur** `urgência`, `rápido`, `garantia`, `gratuito`.
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt.** Les consommateurs vivent aussi dans `scripts/` et les manifestes de pré-rendu.
- 🔴 **Un scanner qui tokenise sur `\w` rate les noms de fichier contenant une espace.** Contrôle : `find . -type f -name "* *"`.
- 🔴 **Un lien corrompu est invisible à l'audit de conformité ET à l'audit de sitemap.**
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.**
- 🔴 **ENR est un codebase multi-sites.** `shared/serviceConfig.ts` porte plomberie **et** électricité. **Un grep « contamination cross-métier » brut sort 17 faux positifs.** Ne l'appliquer qu'aux **pages autonomes**.
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- **Ne pas sur-purger.** R4 se viole dans les deux sens.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox : `git fetch` OK, **`git push` impossible**. **Répartition** : lecture / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/`.
- 🔴 **NOUVEAU — un worktree n'est PAS un dépôt git vu depuis le sandbox** : son `.git` est un fichier pointant vers un chemin macOS. `git show`/`git diff`/`git log` y **échouent** depuis `mcp__workspace__bash`, et un `python3` qui lit leur stdout renvoie des compteurs **à zéro** qui ressemblent à un résultat. ➡️ **Tout « avant » mesuré par git se prend depuis le host.**
- 🔴 **`git worktree add … -b X <remote>/main` puis `git switch -c Y <remote>/main`** — manière propre de scinder un run en 2 PR sans `stash` (interdit R-WT).
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting**. Pour tout motif non trivial : **Python**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `git commit -F -`. Corps de PR : `--body-file`.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : checkout partagé sur `feat/enr-rankpush-fechadura-eletrica-t_8d9e484d`, 4 fichiers non commités — **non touché**.

## Blocages connus
1. ⏸ **`comparacao.html` (3 copies) et `FAQSchema.tsx`** — bloqués par des **PR ouvertes**, pas par un arbitrage. La réponse est connue dans les deux cas.
2. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos.
3. 🛑 **`Você` — 184 occurrences / 161 fichiers sur les 4 repos, dont ENR 103/96** — le plus gros gisement. Corpus INTERDIT `LECONS.md`. GO requis. ℹ️ **4 occurrences sont tombées sur CU ce run sans consommer le GO**, parce qu'elles vivaient dans un bloc mort — **chercher les doublons avant de dépenser un arbitrage.**
4. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** — le renommer **change l'offre affichée** → GO. **Même question sur CNR : un seul arbitrage débloque les 2 repos.**
5. 🛑 **Batch R145 `rápida`/`rápido` — 61 occurrences.** GO requis.
6. ⚠️ **`https://***` résiduel : 3 occurrences / 1 fichier.**
7. ⚠️ **La cause racine du batch `repar`→`arranj` n'est pas identifiée**, et **celle des duplications de corps de page non plus** (ENR 3 copies, CU 2 copies, EU 5 pages à double groupe JSON-LD, tout cela trouvé ce run). **Trois défauts de duplication distincts en deux runs : la chaîne de génération de pages statiques mérite un audit dédié.**
