# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-27
- Tâche prévue : **rang 6 — `servicos.html` et `galeria.html`, wrapper `<div>` manquant**. ✅ **Exécutée.**
- Tâche additionnelle : **rang 10 — re-mesure `gratuit` à périmètre ET motif élargis.** ✅ **Livrée** (le verdict *est* le livrable).
- **1 PR ouverte** :
  - **#383** — https://github.com/taffrand-gif/eletricista-norte-reparos/pull/383 — branche `loop/2026-08-27-enr-wrapper-servicos-galeria` — 3 commits, **2 fichiers de production** + `SEO_PLAN.md`
- Branche partie de `origin/main` = `aa36278ccb`.

### 🟢 ÉVÉNEMENT MAJEUR DU RUN — le stock de PR est vide
`gh pr list --state open` rend **0 PR ouverte sur les 4 repos**. Sur ENR, **les 24 PR ont toutes mergé** depuis le 25/08.

Le `context.md` du 25/08 écrivait : « *le stock ne cesse de croître : 20 → 23 → 24, aucune mergée. Six rangs sont bloqués mécaniquement par ce stock. **C'est le premier facteur limitant du repo, devant tous les GO de périmètre.*** » **Ce facteur limitant a disparu entre deux runs.** Les rangs 4, 5, 6, 7, 8 et 11 sont **tous libres**.

### 1. Le correctif du rang 6
`servicos.html` et `galeria.html` sont exactement les 2 pages que **#374** (mergée) avait écartées de son périmètre au motif de la réservation par **#350**. Correctif **rejoué à l'identique**, sans réanalyse.

**Prédicat nommé** : après le `<h2>` du bloc de liens, le wrapper `<div style="margin-top:10px;font-size:13px">` manque ; seul son `</div>` fermant subsiste.

| Mesure (sur les 4188 `client/public/*.html`) | Valeur |
|---|---:|
| Pages au prédicat cassé | **2** |
| Donneurs intacts | **5** |
| Formes distinctes du wrapper chez les donneurs | **1** |

Témoin : prédicat **2 → 0** ; `<div>` **−1 → 0** sur chacune ; delta de balises = `div` +1, **tout le reste inchangé** ; **ensembles de mots avant/après strictement identiques** (correction purement structurelle).

### 2. 📏 RANG 10 LIVRÉ — la prédiction de CNR est confirmée
**Périmètre énoncé** : `client/ server/ shared/ public/ api/ src/`, **hors `.md`**, hors `_archive/ _audit/ _backlog/` = **4608 fichiers**. **Motif large** = fenêtre de **60 caractères** (le HTML est minifié : « même ligne » n'est pas une proximité).

| Prédicat | Occurrences | Fichiers |
|---|---:|---:|
| **`orçamento`↔`gratuit` (60c)** | **3700** | **1678** |
| `Orçamento gratuito` littéral | 2235 | 1033 |
| `gratuit*` toutes formes | 4070 | 1805 |
| `diagnóstico gratuito` | 392 | 287 |
| `orçamento (é\|sempre) gratuito` | 337 | 315 |
| `Atendimento 24h` | 290 | 121 |
| corruption `*Parranj*` | 107 | 43 |
| `Você` | 82 | 75 |
| **`raio de 130 km`** | **36** | **34** |
| `deslocação gratuita` | 5 | 4 |

**CNR au même périmètre et au même motif : 4701 / 2037.** Même ordre de grandeur ⇒ **les deux compteurs avaient bien la même origine** : périmètre implicite `client/src` + motif littéral. Le rang 10 est clos.

### 3. 🔴 DÉCOUVERTE — ENR porte la contradiction `100 km` / `130 km`, **et elle est déjà interne à `client/src`**
Sur CNR, la contradiction opposait la source (130 km) à ses jumeaux générés (100 km). **Sur ENR, `client/src` se contredit lui-même** :

| Fichier | Valeur |
|---|---|
| `components/StructuredData.tsx` L76, L111 | `geoRadius: 130000` |
| `components/StructuredData.tsx` L365 | `raio de 130 km` |
| `components/CidadesProximas.tsx` L55 · `OptimizedServices.tsx` L223 · `ZonaIntervencao.tsx` L41 | `130 km` |
| `components/SEO/FAQSchema.tsx` L78 | `130km` |
| **`components/SEO/FAQSchema.tsx` L70** | **`raio de 50km`** ⚠️ |
| **`pages/InstalacaoEletrica.tsx` L48 · `pages/QuadrosEletricos.tsx` L20** | **`geoRadius: 100000`** ⚠️ |
| `pages/cidades/Chaves.tsx` L91 | `geoRadius: 20000` |
| `pages/cidades/Mirandela.tsx` L91 | `geoRadius: 15000` |
| **`client/public/` (36 occ. / 34 fic.)** | **`raio de 130 km`** ⚠️ |

**La majorité `130 km` est la forme de référence** (5 fichiers de composants + le JSON-LD principal). ⚠️ Les `geoRadius` par ville (20000/15000) relèvent d'un **autre prédicat** (`GeoCircle` local) — **ne pas les confondre** avec le rayon de couverture.

## ✅ Gate merge — aucun gate actif
Aucune mention d'attente de merge dans le `context.md` lu ce run. Aucun gate réécrit. 0 PR ouverte ; la #383 a été ouverte.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-27

| Rang | Cible | Statut |
|---|---|---|
| — | `servicos.html` · `galeria.html` (wrapper) | ✅ **traité ce run (#383)** |
| — | Rang 10 — re-mesure `gratuit` élargie | ✅ **livré ce run** — 3700 / 1678 |
| **1** | 🔴 **`raio de 130 km` — 36 occ. / 34 fichiers** dans `client/public/`, **+ 2 `geoRadius: 100000`** (`InstalacaoEletrica.tsx` L48, `QuadrosEletricos.tsx` L20) **+ 1 `raio de 50km`** (`FAQSchema.tsx` L70). La production **se contredit elle-même**. | 🟢 **AUCUN GO. Tâche du prochain run.** Forme de référence `130 km` **sourcée et majoritaire** dans `client/src`. ⚠️ **Ne pas toucher** aux `geoRadius` par ville (`Chaves` 20000, `Mirandela` 15000) : autre prédicat. ⚠️ Traiter `client/src` **et** les 34 jumeaux dans le même run — sinon on refait l'erreur de CNR #319. |
| **2** | 🔴 **Garde-fou de pré-commit contre la mutation `@context`** | 🛑 **ARBITRAGE PHILIPPE.** Réparé deux fois, réintroduit deux fois. `LECONS.md` L#003 donne le contrôle ; **il manque le point d'accrochage** (hook pre-commit ou étape Hermes). **Le plus fort levier du repo.** |
| **3** | 🔴 **3 défauts de CONTENU détruit** : question de FAQ effacée (`garantias-e-seguros`) · phrase de CTA amputée ×2 (`distrito-braganca`, `distrito-vila-real`) | 🛑 **GO ou donneur requis.** Aucun donneur dans le dépôt pour les `distrito-*`. **La structure est réparée, le contenu ne l'est pas.** |
| **4** | **`faq.html` (4 `</div>` orphelins, famille `faq-item`) · `instalacao-eletrica.html` (+1)** | 🟢 **libres, aucun GO.** **Chercher leur PRÉDICAT NOMMÉ** (« quelle balise précise manque, et qui l'a encore »), pas leur compteur. Méthode prouvée par #374 et #383. |
| **5** | **`comparacao.html` — TROIS copies du corps de page** (`<h1>` ×3) | 🟢 **libéré** (#348 mergée). Méthode CU #271 : **md5 par bloc, ne retirer que le byte-identique**. Emporte les 6 chaînes françaises et les `Você` **sans consommer de GO**. |
| **6** | **`blog/blog-problemas-eletricos-inverno.html` — `<h1>` ×26** | 🟢 **libéré.** Le plus gros déséquilibre du repo. Même méthode que le rang 5. |
| **7** | **2 pages à JSON-LD invalide** : `blog/guia-cores-fios-eletricos.html` · `blog/tomada-queimada-perigos-solucoes.html` | 🟢 **libérées.** ⚠️ **Vérifier d'abord si c'est le motif `@context` muté** — si oui, c'est le **rang 2** qui compte, pas le patch. |
| **8** | **`components/SEO/FAQSchema.tsx` — RETRAIT, pas patch** | 🟢 **libéré.** 0 importeur → code mort. **Re-tester le prédicat d'importeur avant.** ⚠️ Il porte aussi le `raio de 50km` du rang 1 : **si on le retire, le rang 1 perd une occurrence** — traiter dans cet ordre. |
| **9** | 🔴 **Batch `orçamento`↔`gratuit` — 3700 occ. / 1678 fichiers** | 🛑 **GO PÉRIMÈTRE requis.** Correctif prouvé et **mergé sur CNR** (#327) : `Orçamento gratuito` → `Orçamento por escrito`. **Un GO d'une ligne débloque ~1700 fichiers ici et ~2000 sur CNR.** |
| **10** | **Corruption de prose `*Parranj*` — 107 occ. / 43 fichiers** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`. |
| **11** | **`Você` — 82 occ. / 75 fichiers** | ⏳ GO souhaitable ; substitution non triviale (accord verbal). Le rang 5 en emporte une partie gratuitement. |
| **12** | **`pages/QuantoTempoDemoraT rocarQuadroEletrico.tsx`** — le nom du fichier contient une **ESPACE** | 🟢 **libéré.** Fichier **vivant** (`App.tsx` L89, route L167) : renommer **et** corriger les deux références. |
| **13** | 12 fichiers morts sans violation | ⏳ dont `ComponentShowcase.tsx` (1375 L), `blog/QuadroEletricoDispara.tsx` (1072 L), `GaleriaOld.tsx`. ⚠️ `blog/ComoTrocarTomadaEletricaSozinho.tsx` : contenu « faire soi-même » sur un site d'électricien certifié — **positionnement ET sécurité**. |
| 14 | `Diagnostico.tsx` (6 occ) | ⏳ **requalifier d'abord** — R145 autorise `24h/7 dias` |
| 15 | Les **deux `FAQPage` distincts** de `precos.html` | ⏳ anomalie de schéma, arbitrage |
| — | `PriceTable.tsx` | 🛑 **BLOQUÉ — arbitrage de prix** |
| — | `CalculadorPreco.tsx` · `InnovativeHero.tsx` · `TrustBanner.tsx` · `Blog.tsx` | ⏸ requalifier en lecture |

## Tâche suivante recommandée
1. 🟢 **Rang 1 — `raio de 130 km` → `130 km`**, 36 occ. / 34 fichiers + 2 `geoRadius: 100000` + 1 `raio de 50km`. **Aucun GO, forme de référence sourcée et majoritaire.** ⚠️ Traiter `client/src` **et** les jumeaux `client/public/` dans le même run.
2. 🟢 **Rang 4 — `faq.html` / `instalacao-eletrica.html`** : chercher le **prédicat nommé**, pas le compteur. Deux runs consécutifs ont validé la méthode.
3. 🟢 **Rangs 5 et 6 — les corps de page dupliqués** (`comparacao.html` ×3, `blog-problemas-eletricos-inverno.html` `<h1>` ×26). Méthode CU #271, **md5 par bloc**. Gros gain, zéro GO.
4. **Poser les 3 arbitrages d'une ligne à Philippe** : rang 2 (garde-fou `@context`), rang 3 (3 textes détruits), rang 9 (GO périmètre `gratuit`).
5. Vocabulaire validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un blocage « mécanique » n'est pas un arbitrage : il se re-teste à chaque run.** Le `context.md` du 25/08 décrivait le stock de PR comme *le premier facteur limitant du repo* et le voyait croître (20 → 23 → 24). Il a disparu entre deux runs, sans que rien de ce que le loop faisait n'y contribue. ➡️ **Toujours écrire, à côté d'un blocage, PAR QUOI il tombe** — un merge, un GO, une mesure. Un blocage dont la condition de levée n'est pas écrite se reconduit indéfiniment ; un blocage dont elle est écrite se teste en une commande.
- 🔴 **NOUVEAU — un correctif rejoué à l'identique ne se réanalyse pas.** #374 avait consigné *pourquoi* `servicos.html` et `galeria.html` étaient exclues (réservation par #350). Le motif d'exclusion étant écrit, la reprise a coûté une mesure et une insertion. ➡️ **Consigner le motif d'exclusion d'un périmètre le rend rejouable sans réanalyse.**
- 🔴 **NOUVEAU — une correction purement structurelle doit le PROUVER.** L'égalité **stricte et bilatérale** des ensembles de mots avant/après est le seul témoin qui distingue « j'ai réparé une balise » de « j'ai touché au texte ». Ce run : ensembles identiques dans les deux sens sur les 2 fichiers.
- 🔴 **NOUVEAU — une contradiction peut être INTERNE à la source.** Sur CNR, `100 km` vs `130 km` opposait la source à ses jumeaux. **Sur ENR, `client/src` se contredit lui-même** (130 km dans 5 composants, 100000 dans 2 pages, 50km dans `FAQSchema`). ➡️ **Avant de transplanter « la » valeur sourcée, vérifier que la source n'en porte pas plusieurs — et prendre la MAJORITÉ, en la comptant.**
- 🔴 **NOUVEAU — deux prédicats qui se ressemblent ne se traitent pas ensemble.** `geoRadius: 20000` (Chaves) et `geoRadius: 15000` (Mirandela) sont des **`GeoCircle` par ville**, pas le rayon de couverture. Les mettre dans le même batch que `100000` détruirait une information juste.
- 🔴 **Passer du COMPTEUR au PRÉDICAT NOMMÉ avant de patcher.** « `div` 31/32 » ne se réutilise pas ; « le wrapper `<div style="margin-top:10px;font-size:13px">` manque après le `<h2>` » se compte sur 4188 fichiers et **désigne son propre donneur**. **Le compteur pointe, le prédicat explique.**
- 🔴 **Un donneur reste un fait mesuré SI SA FORME EST UNIQUE.** Ce run : 5 donneurs, **1 seule forme distincte** — vérifié en comptant les variantes chez tous.
- 🔴 **Un fichier peut porter DEUX défauts de familles différentes.** **Dérouler la pile jusqu'au bout.**
- 🔴 **Réparer la structure ne répare pas le contenu, et il faut le DIRE.** Un témoin structurel à 0 donne l'illusion de pages saines.
- 🔴 **Un compteur de violation vaut ce que vaut son PÉRIMÈTRE, et le périmètre est presque toujours IMPLICITE.** Démontré deux fois, sur deux repos. **Ne jamais écrire « il en reste N » sans écrire sur quel arbre, avec quel motif et avec quelle fenêtre.** Ce run énonce les trois (4608 fichiers / hors `.md` / fenêtre 60c).
- 🔴 **Un défaut DÉJÀ RÉPARÉ qui revient n'est pas un défaut : c'est un générateur non corrigé.** `git log -S <motif>` le prouve en une commande. **Si le motif a un historique de réparations, le livrable est le GARDE-FOU, pas le patch.**
- 🔴 **Certaines chaînes ne survivent pas au canal d'écriture.** `https://schema.org` est muté par les tools runtime **et** par `cat <<EOF`, pas par Python pur (`LECONS.md` L#003). **CONTRÔLER LE BLOB GIT APRÈS COMMIT.**
- 🔴 **Deux positions d'insertion peuvent donner le même compteur équilibré et une seule être correcte.** **Mesurer la PROFONDEUR aux points de repère, pas seulement les totaux.**
- 🔴 **Un compteur de déséquilibre pointe le symptôme, jamais la cause.** **Lire les DEUX bornes du déséquilibre avant d'en patcher une.**
- 🔴 **Un `<style>` qui manque son ouverture ne casse pas le CSS : il fait DISPARAÎTRE la page.**
- 🔴 **Un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** Deux contrôles complémentaires.
- 🔴 **Ne retirer un doublon que s'il est byte-identique** (md5 par bloc, méthode EU #314).
- 🔴 **Le contrôle des PR ouvertes se fait AVANT de calculer le périmètre.** ⚠️ **Un titre de PR ne dit pas ce qu'elle couvre** — lire le **diff**.
- 🔴 **Avant de patcher une chaîne, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.**
- 🔴 **« Valeur non sourçable » se PROUVE en remontant la chaîne de définition.**
- 🔴 **Ventiler par famille avant de choisir le périmètre** : chercher le **sous-ensemble homogène**.
- 🔴 **Le sweep `${…}` / `{{…}}` / `%%…%%` / `__…__` rend 0 sur ENR.** Le JSX non compilé est propre au générateur de CNR.
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt**, jamais sur un sous-arbre.
- 🔴 **La signature d'une corruption de batch, c'est le MOT INEXISTANT** — par **diff des ensembles de mots**, pas grep du lemme. ⚠️ Distinguer *prose visible* et *valeur d'attribut* : un percent-encodage crée des « mots » légitimes.
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.**
- 🔴 **Un motif de violation dans un `.md` qui CITE la règle est un faux positif systématique** — d'où l'exclusion des `.md` du périmètre de production.
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- **Ne pas sur-purger.** R4 se viole dans les deux sens.

## Edge cases détectés
- **Ce repo n'a QU'UN remote : `origin`.** Contrairement à CNR (qui a `github` **et** `origin`), `git fetch github` échoue ici. **Diffuser contre `origin/main`.**
- 🔴 **`LECONS.md` L#003 : les tools runtime et `cat <<EOF` muent `https://schema.org`.** Python pur y échappe.
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Reconfirmé ce run : `git push --dry-run` depuis le sandbox → `could not read Username for 'https://github.com'`, et `gh` est absent du `PATH` du sandbox. **Répartition** : lecture / `git fetch` / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → **host**. Le montage étant partagé, un `git fetch` lancé depuis le sandbox met bien à jour le vrai `.git`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees et `--body-file` sous `~/work/Sites/_worktrees/` ou `~/work/Sites/_loop-<date>/`. Le `--body-file` doit vivre **hors du worktree**.
- 🔴 **Un worktree n'est PAS un dépôt git vu depuis le sandbox** : `git show`/`diff`/`log` y rendent des **compteurs à zéro** trompeurs. **Tout témoin se compte en Python sur le CONTENU des fichiers.** ✅ Corollaire : les comparaisons « avant » se lisent depuis le **checkout principal** via `git show origin/main:<path>`, qui fonctionne.
- ⚠️ **Un script Python qui balaie ~4 600 fichiers doit BORNER explicitement ce qu'il imprime.**
- 🔴 **`grep -P` n'existe pas sur macOS** ; **`grep -E` de macOS ne matche pas de façon fiable `ç`/`ã`/`õ`** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**. **Pour tout motif accentué ou non trivial : Python.**
- 🔴 **`grep -c '***'` échoue en zsh.**
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `printf … | git commit -F -`. **ASCII dans les messages de commit, UTF-8 dans les fichiers.** Corps de PR : `--body-file`, jamais `--body` inline.
- ⚠️ **L'ancre du HISTORIQUE diffère d'un repo à l'autre** : `## 🔄 HISTORIQUE` ici (**L195**, et il y en a **trois occurrences** dans le fichier — prendre la première), `## 🔄 HISTORIQUE — Journal des actions` sur CNR. **Vérifier l'ancre par assertion avant d'insérer**, sinon l'insertion échoue silencieusement ou au mauvais endroit.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Vérifié ce run : checkout partagé sur `fix/conformidade-enr-como-instalar-sensor-movimento-t_7be78ae1` avec des fichiers non suivis dans `_audit/` — **non touché**. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. 🛑 **RANG 2 — garde-fou de pré-commit contre la mutation `@context`.** Deux réparations, deux récidives. **Tombe par : arbitrage Philippe.**
2. 🛑 **RANG 3 — 3 textes détruits** (question de FAQ, phrase de CTA ×2). **Aucun donneur pour les `distrito-*`. Tombe par : GO ou donneur.**
3. 🛑 **RANG 9 — batch `orçamento`↔`gratuit`, 3700 occ. / 1678 fichiers.** Correctif prouvé et mergé sur CNR (#327). **Tombe par : GO périmètre.**
4. 🛑 **Corruption de prose `*Parranj*`, 107 occ. / 43 fichiers. Tombe par : GO périmètre.**
5. 🛑 **`Você` — 82 occ. / 75 fichiers. Tombe par : GO.**
6. 🛑 **`PriceTable.tsx` — arbitrage de prix.**
7. ✅ **RÉSOLU — le stock de PR ouvertes.** 24 → **0**. Six rangs libérés d'un coup. **Ce n'était pas un blocage de fond, c'était une attente.**
8. ⚠️ **La production se contredit sur le rayon de couverture** : `130 km` (majoritaire, 5 composants + JSON-LD), `100 km` (36 occ. `client/public` + 2 `geoRadius`), `50km` (`FAQSchema.tsx` L70). **Tombe par : le rang 1, aucun GO.**
9. 🔴 **La cause racine reste inconnue** pour la corruption `*Parranj*`, pour les corps de page dupliqués, pour le wrapper `<div>` amputé et pour la mutation `@context`. **Quatre défauts distincts issus de la même chaîne de génération.** Le volume (1678 fichiers `client/public` portant les mêmes chaînes) **désigne cette chaîne comme le générateur unique.** **Corriger le générateur vaut mieux que 1700 patchs.** ➡️ **C'est le seul chantier qui change l'ordre de grandeur du backlog** — et c'est le même constat, mot pour mot, sur CNR.
