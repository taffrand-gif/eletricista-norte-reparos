# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-24
- Tâche prévue : rang 3 de la file du 23/08 — les 3 fichiers `client/public/` libres.
- Tâche réellement exécutée : **la tâche prévue, en entier, les 3 fichiers**. Rangs 1, 2, 4 et 6 toujours pris par des PR ouvertes ; rang 5 en attente de GO périmètre.
- **1 PR ouverte** :
  - **#371** — https://github.com/taffrand-gif/eletricista-norte-reparos/pull/371 — branche `loop/2026-08-24-enr-jsonld-invalides` — 4 commits, **3 fichiers de production** + `SEO_PLAN.md`
- ⚠️ **#368 (run du 23/08) n'a pas mergé.** 23 PR ouvertes ce run, contre 20 la veille : **le stock grossit**.

### 1. 🔴 Trois blocs JSON-LD étaient illisibles sur une page de rank-push GSC
`blog/fase-e-neutro-cores.html` : 3 des 4 blocs `ld+json` portaient `"@context":"https://***@type"` au lieu de la chaîne complète. Le JSON échoue au caractère 30 → **`Article`, `BreadcrumbList` et `FAQPage` étaient purement et simplement ignorés par les crawlers**, sur une page travaillée pour la position 4.6 (47 impressions/28 j au 18/08).

**La valeur de restauration était dans le fichier lui-même** : le 4ᵉ bloc (`Service`) est resté intact et porte la chaîne complète. Zéro invention, zéro source externe.

### 2. 🔴 Le défaut est RÉCIDIVANT, et sa cause est documentée depuis le 28/07
`git log -S` sur le motif rend **3 commits sur ce seul fichier** : introduit, réparé par `76ec277e81` (« restaure le @context masqué »), puis **réintroduit par la PR #344 du 18/08**.

`LECONS.md` **L#003** l'explique : les tools runtime `write_file` / `patch` / `open()` **et** le heredoc shell `cat <<EOF` **muent la chaîne à chaque écriture de fichier**. Seul Python pur y échappe.

➡️ **Méthode appliquée ce run, à reprendre systématiquement** : patch en Python pur, chaîne **jamais écrite littéralement** dans une commande (reconstruite par concaténation), et **contrôle sur le BLOB git après commit** — le contrôle sur le fichier de travail ne prouve rien si le canal mute à l'écriture. Résultat : 4 occurrences correctes, 0 masquée dans le blob.

🛑 **Conséquence de doctrine, plus importante que le patch : la réparation N'EST PAS DURABLE.** Toute future écriture Hermes sur une page contenant cette chaîne la re-cassera. L#003 prescrit déjà un contrôle final mais **rien ne l'impose**. **Le livrable qui manque est un garde-fou de pré-commit, pas un patch de plus. → arbitrage Philippe.**

### 3. Deux pages avaient perdu une balise ouvrante — position d'insertion établie par invariant
`contacto.html` (`<section>` 1/2, `<div>` 13/12) et `eletricista-24-horas.html` (`<section>` 3/4, `<div>` 7/6) : **même défaut au byte près**. Le bloc « 📚 Recursos Úteis » avait perdu son `<section class="related" style="…">`, et `<div class="content">` n'était jamais fermé.

| Invariant mesuré | Résultat |
|---|---|
| pages ouvrant le bloc par la **même balise au byte près** | **2830** |
| pages portant `<div class="content">` | **283** — 281 équilibrées, et **les 2 déséquilibrées sont exactement ces deux fichiers** |
| profondeur `<div>` à l'ouverture de `<section class="related">`, pages saines | **0 sur 279/279** |
| profondeur `<div>` à `</main>`, pages saines | **0 sur 279/279** |

➡️ Le `</div>` va **avant** le bloc `related`, **pas** avant `</main>`. **Les deux positions donnent le même compteur équilibré ; une seule respecte l'invariant d'imbrication.**

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge**. Aucun gate réécrit. 23 PR étaient ouvertes ; la #371 a été ouverte quand même.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-24

| Rang | Cible | Statut |
|---|---|---|
| — | `fase-e-neutro-cores.html` (3 JSON-LD illisibles + `<section>` 9/8) · `contacto.html` · `eletricista-24-horas.html` | ✅ **traité ce run (#371)** |
| **1** | 🔴 **Garde-fou de pré-commit contre la mutation `@context`** | 🛑 **ARBITRAGE PHILIPPE.** Le défaut a été réparé deux fois et réintroduit deux fois. Sans garde-fou, il reviendra. `LECONS.md` L#003 donne déjà le contrôle (`grep` du motif masqué = 0) — **il manque le point d'accrochage** (hook pre-commit ou étape de la chaîne Hermes). **Le plus fort levier du repo : une ligne de garde vaut tous les patchs à venir.** |
| **2** | 🔎 **NOUVEAU — 14 pages de `client/public/` ont un `<div>` déséquilibré** | ⏳ **aucun GO requis.** 12 restantes hors périmètre de #371 : `certificacao-certiel-macedo-de-cavaleiros` · `distrito-vila-real` · `servicos` · `galeria` · `instalacao-eletrica` · `garantias-e-seguros` (25/27, **le pire**) · `parcerias` · `recursos-gratuitos` · `equipa` · `distrito-braganca` · `faq` (24/28, **le pire**) · `blog/guia-cores-fios-eletricos`. **Méthode prouvée ce run : mesurer la PROFONDEUR aux points de repère sur les pages saines, pas seulement les totaux.** ⚠️ Contrôler les réservations : `guia-cores-fios-eletricos` est pris par #362/#370. |
| **3** | 🔴 **`client/public/comparacao.html` — TROIS copies du corps de page** (`<h1>` ×3, `<main>` 3/1, `<section>` 3/1) | ⏸ **pris par la PR #348.** Dès merge : méthode CU #271. Emporte les **6 chaînes françaises** et les `Você` de la page **sans consommer de GO**. ⚠️ Le titre de #348 ne laisse pas deviner qu'elle prend ce fichier — **vérifier son diff, pas son titre**. |
| **4** | 🔴 **`blog/blog-problemas-eletricos-inverno.html` — `<h1>` ×26** | ⏸ **pris par une PR ouverte.** Le plus gros déséquilibre du repo. |
| **5** | **2 pages à JSON-LD invalide encore réservées** : `blog/guia-cores-fios-eletricos.html` (#362, #370) · `blog/tomada-queimada-perigos-solucoes.html` (#345) | ⏸ **à reprendre dès merge.** Les 3 autres pages invalides du repo sont déjà corrigées par **#368**. Vérifier d'abord si le défaut y est **le même motif masqué** — si oui, c'est le rang 1 qui compte, pas le patch. |
| **6** | **`components/SEO/FAQSchema.tsx` — RETRAIT, pas patch** | ⏸ **0 importeur dans tout le dépôt** → code mort, comme son jumeau CNR (PR #321). Porte **7 familles de violations**. **Toujours pris par #350 ET #349.** Re-tester le prédicat d'importeur avant. |
| **7** | **Corruption de prose `repar`→`arranj` — ~140 occurrences restantes** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **8** | **`pages/QuantoTempoDemoraT rocarQuadroEletrico.tsx` — le nom du fichier contient une ESPACE** | ⏳ `App.tsx` L89 l'importe avec l'espace, route L167 active : fichier **vivant**. **Pris par une PR ouverte.** |
| **9** | `grep -rn 'gratuit' client/src` + `grep -rn 'raio de' client/src` | ⏳ prédicat `PRICING.md` L54-56 passé seulement sur `faqData.ts`. 💡 **Méthode validée sur CNR ce run (#327)** : ventiler par famille, puis chercher le **sous-ensemble homogène** (sur CNR, 48 occurrences d'**une seule forme exacte**) — c'est lui qui rend le contrôle exhaustif possible. |
| **10** | 12 fichiers morts sans violation | ⏳ dont `ComponentShowcase.tsx` (1375 L), `blog/QuadroEletricoDispara.tsx` (1072 L), `GaleriaOld.tsx`. ⚠️ `blog/ComoTrocarTomadaEletricaSozinho.tsx` : contenu « faire soi-même » sur un site d'électricien certifié — **positionnement ET sécurité**, à arbitrer. |
| 11 | `Diagnostico.tsx` (6 occ) | ⏳ **à requalifier d'abord** — R145 autorise `24h/7 dias` |
| 12 | Les **deux `FAQPage` distincts** de `precos.html` | ⏳ anomalie de schéma, arbitrage |
| — | `PriceTable.tsx` | 🛑 **BLOQUÉ — arbitrage de prix** |
| — | `CalculadorPreco.tsx` · `InnovativeHero.tsx` · `TrustBanner.tsx` · `Blog.tsx` | ⏸ requalifier en lecture |

## Tâche suivante recommandée
1. **Rang 2 — les 12 pages à `<div>` déséquilibré**, en commençant par `faq.html` (24/28) et `garantias-e-seguros.html` (25/27), les deux pires. **Aucun GO, méthode prouvée ce run.** C'est la seule tâche large et entièrement libre du repo.
2. **Poser le rang 1 à Philippe en une ligne** : « garde-fou pré-commit contre la mutation `@context` — OK ? ». Deux réparations, deux récidives.
3. **Rang 3 dès #348 mergée** — vérifier son **diff**, pas son titre.
4. **Rang 5 dès #362/#370/#345 mergées** — et d'abord vérifier si c'est le même motif masqué.
5. Vocabulaire validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un défaut DÉJÀ RÉPARÉ qui revient n'est pas un défaut : c'est un générateur non corrigé.** `git log -S <motif>` l'a prouvé en une commande — 3 commits, dont un intitulé « restaure le @context masqué ». ➡️ **Avant de patcher, faire `git log -S` sur le motif. Si le motif a un historique de réparations, le livrable est le GARDE-FOU, pas le patch.** Le patch seul donne l'illusion du progrès et sera défait.
- 🔴 **NOUVEAU — certaines chaînes ne survivent pas au canal d'écriture.** `https://schema.org` est muté par les tools runtime **et** par `cat <<EOF`, mais pas par Python pur (`LECONS.md` L#003). ➡️ **Pour toute chaîne connue comme fragile : la construire par concaténation, ne jamais l'écrire littéralement dans une commande, et CONTRÔLER LE BLOB GIT APRÈS COMMIT.** Le contrôle sur le fichier de travail ne prouve rien si le canal mute à l'écriture. Ce contrôle post-commit est nouveau et doit devenir systématique sur ce repo.
- 🔴 **NOUVEAU — deux positions d'insertion peuvent donner le même compteur équilibré et une seule être correcte.** `</div>` avant `</main>` équilibrait aussi bien qu'avant `<section class="related">`. Seul l'invariant d'imbrication mesuré sur 279 pages saines tranche. ➡️ **Un compteur équilibré n'est pas une preuve de structure : mesurer la PROFONDEUR aux points de repère, pas seulement les totaux.**
- 🔴 **NOUVEAU — le donneur d'une transplantation ne se choisit pas, il se compte.** 2830 pages ouvrent le bloc par la même balise au byte près : la balise à restaurer est un **fait mesuré**, pas un choix éditorial. Corollaire du 23/08 (« le bon donneur est celui dont la zone adjacente est byte-identique »), poussé un cran plus loin : **quand la population est grande, la majorité byte-identique EST la source de vérité.**
- 🔴 **Un compteur de déséquilibre pointe le symptôme, jamais la cause.** `<section> 9/8` venait d'un `</section>` manquant **cinq sections plus haut**. **Lire les DEUX bornes du déséquilibre avant d'en patcher une.**
- 🔴 **Un `<style>` qui manque son ouverture ne casse pas le CSS : il fait DISPARAÎTRE la page.** Un compteur `<script> n/n-1` est une alerte de **contenu manquant**.
- 🔴 **Un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** Équilibre et délimiteurs non résolus : deux contrôles complémentaires.
- 🔴 **Ne retirer un doublon que s'il est byte-identique** (md5 par bloc, méthode EU #314).
- 🔴 **Le contrôle des PR ouvertes se fait AVANT de calculer le périmètre.** Ce run, il a confirmé que les 3 cibles étaient libres — donc que la tâche était faisable — **et** a évité de rouvrir 2 pages JSON-LD déjà réservées. ⚠️ **Un titre de PR ne dit pas ce qu'elle couvre** — `gh pr view <n> --json files`.
- 🔴 **Avant de patcher une chaîne, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.** Contrôle passé ce run : `<h1>` ×1 sur les 3 fichiers.
- 🔴 **« Valeur non sourçable » se PROUVE en remontant la chaîne de définition.** Ce run l'illustre à nouveau : la valeur manquante était dans le **même fichier**, quatre blocs plus bas.
- 🔴 **Ventiler par famille avant de choisir le périmètre** (leçon CNR #327) : chercher le **sous-ensemble homogène**, c'est lui qui rend le contrôle exhaustif possible en une commande.
- 🔴 **Le sweep `${…}` / `{{…}}` / `%%…%%` / `__…__` rend 0 sur ENR** (contre 105 sur CNR). Le JSX non compilé est propre au générateur de CNR. Ce 0 évite de rouvrir la chasse ici.
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt**, jamais sur un sous-arbre.
- 🔴 **La signature d'une corruption de batch, c'est le MOT INEXISTANT.** Méthode affinée sur CNR ce run : **diff des ensembles de mots avant/après**, pas grep du lemme — réponse binaire et exhaustive.
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.** Ce run le confirme pour la deuxième fois en trois jours.
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai.

## Edge cases détectés
- **Ce repo n'a QU'UN remote : `origin`.** Contrairement à CNR (qui a `github` **et** `origin`), `git fetch github` échoue ici. **Diffuser contre `origin/main`.**
- 🔴 **`LECONS.md` L#003 : les tools runtime et `cat <<EOF` muent `https://schema.org`.** Python pur y échappe. ➡️ Écrire les corps de PR contenant cette chaîne **en Python**, pas en heredoc shell.
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Répartition : lecture / grep / parsing Python / **écriture de fichiers** → sandbox `mcp__workspace__bash` ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Un `--body-file` de PR doit être écrit sous `~/work/Sites/_worktrees/`, jamais dans `/tmp`. **Et il faut le supprimer après le `gh pr create`**, sinon il traîne en fichier non suivi.
- 🔴 **Un worktree n'est PAS un dépôt git vu depuis le sandbox** : `git show`/`diff`/`log` y rendent des **compteurs à zéro** trompeurs. ➡️ **Tout témoin se compte en Python sur le CONTENU des fichiers.**
- ⚠️ **Un script Python qui construit un dict d'exemples peut faire exploser la sortie.** **Borner explicitement ce qu'on imprime**, surtout en balayant ~2 900 fichiers.
- 🔴 **`grep -P` n'existe pas sur macOS** ; **`grep -E` de macOS ne matche pas de façon fiable `ç`/`ã`/`õ`** (faux négatif silencieux observé sur CNR ce run : 0 résultat là où `git grep` en rendait 48) ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**. **Pour tout motif accentué ou non trivial : Python.**
- 🔴 **`grep -c '***'` échoue en zsh** (« repetition-operator operand invalid ») : les astérisques doivent passer par `printf` ou, mieux, par Python.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `printf … | git commit -F -`. Corps de PR : `--body-file`, jamais `--body` inline. ⚠️ **Les accents et les apostrophes typographiques passent mal dans un `printf` de message de commit** — préférer l'ASCII dans les messages, l'UTF-8 dans les fichiers.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. 🛑 **NOUVEAU RANG 1 — garde-fou de pré-commit contre la mutation `@context`.** Deux réparations, deux récidives. Sans point d'accrochage imposé, le défaut reviendra. **Arbitrage Philippe.**
2. ⏸ **Rangs 3, 4, 5, 6 et 8 pris par des PR ouvertes** — pas des blocages de fond, des attentes de merge. **Le rang 2 (12 pages à `<div>` déséquilibré) est entièrement libre : y aller.**
3. 🔴 **Le stock de PR ouvertes grossit : 20 le 23/08, 23 le 24/08, aucune n'a mergé entre les deux runs.** Cinq rangs de la file sont bloqués mécaniquement par ce stock.
4. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos.
5. 🛑 **`Você`** — corpus **INTERDIT** selon `LECONS.md`. GO requis. ℹ️ **Chercher les doublons avant de dépenser un arbitrage** : sur CU, 4 occurrences sont tombées sans consommer le GO parce qu'elles vivaient dans un bloc mort. Idem ici dès que #348 merge.
6. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** : le renommer **change l'offre affichée** → GO. **Même question sur CNR : un seul arbitrage débloque les 2 repos.**
7. 🛑 **`PriceTable.tsx`** — arbitrage de prix.
8. ⚠️ **`blog/ComoTrocarTomadaEletricaSozinho.tsx`** — contenu « faire soi-même » sur un site d'électricien certifié DGEG : **question de positionnement ET de sécurité**.
9. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** de la PR #240 — périmètre parké. Rappel d'une ligne.
10. ⚠️ **La chaîne de génération de pages statiques reste non auditée.** Familles connues issues d'elle : `##style##` (CNR/CU/EU), corps de page dupliqués (CU 2, ENR 3), JSON-LD tronqué écrasant `<style>` (ENR), JSX non compilé (CNR), **et désormais la mutation `@context` (ENR)**. **Cinq familles, une chaîne. C'est le point de levier le plus élevé des 4 repos.**
