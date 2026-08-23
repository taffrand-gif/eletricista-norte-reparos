# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-23
- Tâche prévue : rang 5 de la file du 22/08 — les 9 fichiers HTML déséquilibrés.
- Tâche réellement exécutée : **la tâche prévue**, sur les fichiers **libres**. Rangs 1 et 2 toujours pris par des PR ouvertes.
- **1 PR ouverte** :
  - **#368** — https://github.com/taffrand-gif/eletricista-norte-reparos/pull/368 — branche `loop/2026-08-23-enr-html-desequilibres` — 5 commits, **4 fichiers de production** + `SEO_PLAN.md`

### 1. 🔴 Trois pages perdaient leur `<h1>` et leurs CTA au rendu (PR #368)
`aquecimento-eletrico-macedo.html`, `quadros-eletricos-alfandega.html`, `quadros-eletricos-macedo.html` — **même défaut, au byte près**.

Un `<script type="application/ld+json">` portant un objet `Service` était **tronqué en plein objet**, et la suite reprenait **en CSS** : l'ouverture `<style>` **et** la règle `.sticky-cta{…}` avaient été **écrasées** par ce fragment de **198 octets**.

🔴 **Conséquence réelle, bien pire que « le CSS ne s'applique pas »** : le `</style>` qui suit **ne ferme pas un `<script>`**. Le parseur consomme en texte brut tout ce qui suit jusqu'au `</script>` suivant — **la barre de CTA collante, le `<h1>`, le bloc DGEG et toute la section d'ouverture**.

**Correctif** : retrait du fragment JSON tronqué + restauration de `<style>` et `.sticky-cta{…}` **transplantée verbatim** de `client/public/domotica-casa-inteligente.html`. Donneur choisi parce que **sa queue de bloc `<style>` est byte-identique** à celle des 3 cassés (198 pages du repo partagent cette queue ; 40 partagent aussi la tête).
- **Preuve** : après patch, le bloc `<style>` complet des 3 fichiers est **byte-identique** à celui du donneur.
- Le fragment retiré ne portait **aucune information unique** : `name`, `provider`, `telephone` sont déjà dans le nœud `Electrician` **valide** du même fichier.
- **Témoins R8**, identiques sur les 3 : `<script>` **5/4 → 4/4** · `<style>` **0/1 → 1/1** · JSON-LD invalides **1 → 0** · bloc `<style>` = donneur **False → True**.

### 2. `precos.html` — 3 blocs JSON-LD dupliqués byte-à-byte
`BreadcrumbList`, `Service`, `LocalBusiness` chacun en double, byte pour byte. Méthode EU #314 : md5 par bloc, retrait de la seconde occurrence seulement.
- **Témoins** : blocs JSON-LD **10 → 7** · doublons **3 → 0** · `<script>` **12/12 → 9/9** · `<main>`/`<section>`/`<h1>` **inchangés** · tous les blocs restants en JSON valide.
- ⚠️ **Non touché** : les **deux `FAQPage` distincts** (749 et 1167 octets) — non byte-identiques, hors prédicat prouvable. Deux `FAQPage` sur une page reste une anomalie de schéma à arbitrer.

### 3. Contrôle de réservation : 42 % du périmètre était pris
281 chemins pris par les **20 PR ouvertes**. Sur les **12** fichiers `client/public/` à problème, **5 réservés**, **7 libres**, **4 traités**. Compteur global **12 → 8**.

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge**. Aucun gate réécrit. 20 PR étaient ouvertes ; la #368 a été ouverte quand même.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-23

| Rang | Cible | Statut |
|---|---|---|
| — | 3 pages à `<script>` non fermé + `precos.html` | ✅ **traité ce run (#368)** |
| **1** | 🔴 **`client/public/comparacao.html` — TROIS copies du corps de page** (`<h1>` ×3, `<main>` 3/1, `<section>` 3/1) | ⏸ **pris par la PR #348.** Dès son merge : méthode CU #271 (segmenter la copie à retirer sur `</li\|p\|td\|h2\|h3>`, vérifier que chaque segment > 45 caractères se retrouve dans la copie conservée). Emporte les **6 chaînes françaises** et les `Você` de la page, **sans consommer de GO**. ⚠️ Le titre de #348 ne laisse pas deviner qu'elle prend ce fichier — **vérifier son diff, pas son titre**. |
| **2** | 🔴 **`blog/blog-problemas-eletricos-inverno.html` — `<h1>` ×26** | ⏸ **pris par une PR ouverte.** 26 `<h1>` sur une page : soit une duplication massive, soit des `<h1>` utilisés en sous-titres. **Le plus gros déséquilibre du repo**, à ouvrir dès libération. |
| **3** | **3 fichiers libres laissés en file** : `contacto.html` (`<section>` 1/2), `eletricista-24-horas.html` (`<section>` 3/4), `blog/fase-e-neutro-cores.html` (**3 JSON-LD invalides** + `<section>` 9/8) | ⏳ **aucun GO requis, aucune PR ne les prend.** Pas de prédicat mécanique : lecture au cas par cas. `fase-e-neutro-cores` d'abord — 3 JSON-LD invalides est le plus mesurable. |
| **4** | **`components/SEO/FAQSchema.tsx` — RETRAIT, pas patch** | ⏸ **0 importeur dans tout le dépôt** → code mort, comme son jumeau CNR (PR #321). Porte **7 familles de violations**. **Toujours pris par #350 ET #349.** Re-tester le prédicat d'importeur avant. |
| **5** | **Corruption de prose `repar`→`arranj` — ~140 occurrences restantes** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **6** | **`pages/QuantoTempoDemoraT rocarQuadroEletrico.tsx` — le nom du fichier contient une ESPACE** | ⏳ `App.tsx` L89 l'importe avec l'espace, route L167 active : fichier **vivant**. Seul fichier source avec une espace sur les 4 repos. **Pris par une PR ouverte.** |
| **7** | `grep -rn 'gratuit' client/src` + `grep -rn 'raio de' client/src` | ⏳ prédicat `PRICING.md` L54-56 passé seulement sur `faqData.ts` |
| **8** | 12 fichiers morts sans violation | ⏳ dont `ComponentShowcase.tsx` (1375 L), `blog/QuadroEletricoDispara.tsx` (1072 L), `GaleriaOld.tsx`. ⚠️ `blog/ComoTrocarTomadaEletricaSozinho.tsx` : contenu « faire soi-même » sur un site d'électricien certifié — **positionnement ET sécurité**, à arbitrer. |
| 9 | `Diagnostico.tsx` (6 occ) | ⏳ **à requalifier d'abord** — R145 autorise `24h/7 dias` |
| 10 | Les **deux `FAQPage` distincts** de `precos.html` | ⏳ anomalie de schéma, arbitrage |
| — | `PriceTable.tsx` | 🛑 **BLOQUÉ — arbitrage de prix** |
| — | `CalculadorPreco.tsx` · `InnovativeHero.tsx` · `TrustBanner.tsx` · `Blog.tsx` | ⏸ requalifier en lecture |

## Tâche suivante recommandée
1. **Rang 3 — les 3 fichiers libres**, en commençant par `blog/fase-e-neutro-cores.html` (3 JSON-LD invalides, le plus mesurable). **Aucun GO, aucune PR bloquante : la seule tâche entièrement libre du repo.**
2. **Rang 2 (`<h1>` ×26)** dès libération — plus gros déséquilibre du repo.
3. **Rang 1 dès #348 mergée** — vérifier son **diff**, pas son titre.
4. **Rang 4 (`FAQSchema.tsx` en RETRAIT)** dès #350 et #349 mergées.
5. **Chercher le générateur, pas la page** : quatre familles de défauts issues de la même chaîne (`##style##`, corps dupliqués, JSON-LD tronqué écrasant `<style>`, JSX non compilé sur CNR). **Un audit du générateur rapporterait plus que la somme des correctifs.**
6. Vocabulaire validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — un `<style>` qui manque son ouverture ne casse pas le CSS : il fait DISPARAÎTRE la page.** Le contenu se retrouve à l'intérieur d'un `<script>` resté ouvert, et tout le HTML jusqu'au prochain `</script>` est avalé en texte brut. ➡️ **Un compteur `<script> n/n-1` est une alerte de CONTENU MANQUANT, pas une coquetterie de validation.**
- 🔴 **NOUVEAU — le déséquilibre pointe le symptôme, jamais la cause.** Le compteur disait `<style> 0/1` ; la cause était 198 octets de JSON-LD tronqué trois lignes plus haut. ➡️ **Lire les DEUX bornes du déséquilibre avant d'en patcher une.** Ajouter un `<style>` au petit bonheur aurait laissé le `<script>` ouvert et le corps toujours avalé.
- 🔴 **NOUVEAU — le bon donneur d'une transplantation est celui dont la ZONE ADJACENTE est byte-identique, pas le premier jumeau venu.** Deux pages du même gabarit divergent (`rgba(0,0,0,.3)` vs `rgba(0,0,0.3)` selon la génération). ➡️ **Sélectionner le donneur sur l'égalité byte-à-byte de la portion SURVIVANTE, puis vérifier après patch que le bloc reconstruit est byte-identique au donneur.** La restauration devient *prouvable*, pas *plausible*.
- 🔴 **NOUVEAU — trois fichiers, un fragment de 198 octets identique au byte près : c'est une SIGNATURE DE GÉNÉRATEUR, pas trois accidents.** Avec `##style##` (CNR/CU/EU), les corps de page dupliqués (CU 2, ENR 3) et le JSX non compilé de CNR, cela fait **quatre familles de défauts issues de la même chaîne**. **Audit du générateur > somme des correctifs.**
- 🔴 **Un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** Grep des délimiteurs non résolus **et** contrôle d'équilibre : les deux, ils ne se recouvrent pas.
- 🔴 **Ne retirer un doublon que s'il est byte-identique** (md5 par bloc, méthode EU #314). Deux `FAQPage` de tailles différentes ne se tranchent pas mécaniquement.
- 🔴 **Le contrôle des PR ouvertes a réservé 5 des 12 fichiers, soit 42 % du périmètre.** À faire **avant** de calculer le périmètre, pas avant de committer. ⚠️ **Un titre de PR ne dit pas ce qu'elle couvre** — `gh pr view <n> --json files`.
- 🔴 **Avant de patcher une chaîne, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.** Sur CU les 3 chaînes interdites vivaient toutes dans une copie périmée : les patcher aurait « corrigé » le mort. **Le bon niveau n'est ni la chaîne ni la page : c'est le bloc.**
- 🔴 **« Valeur non sourçable » se PROUVE en remontant la chaîne de définition** (leçon CNR de ce run : un rang est resté bloqué un run entier pour un motif faux — la valeur était dans le module que l'expression cassée nomme). **Distinguer « aucune source » de « source pas encore cherchée ».**
- 🔴 **Le sweep `${…}` / `{{…}}` / `%%…%%` / `__…__` rend 0 sur ENR** (contre 105 sur CNR). Le défaut de JSX non compilé **n'est pas systémique aux 4 repos** : il est propre au générateur de CNR. Ce 0 évite de rouvrir la chasse ici.
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt**, jamais sur un sous-arbre.
- 🔴 **La signature d'une corruption de batch, c'est le MOT INEXISTANT.** `grep -rIoE '[[:alpha:]]*<lemme>[[:alpha:]]*' | sort | uniq -c`.
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.**
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- **Ne pas sur-purger.** R4 se viole dans les deux sens : inventer **et** effacer ce qui est vrai.

## Edge cases détectés
- **Ce repo n'a QU'UN remote : `origin`.** Contrairement à CNR (qui a `github` **et** `origin`), il n'y a pas de remote `github` ici — `git fetch github` échoue. **Diffuser contre `origin/main`.**
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox `mcp__workspace__bash` : `git fetch` OK, **`git push` impossible**. Répartition : lecture / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Un `--body-file` de PR doit être écrit sous `~/work/Sites/_worktrees/`, jamais dans `/tmp`.
- 🔴 **Un worktree n'est PAS un dépôt git vu depuis le sandbox** : `git show`/`diff`/`log` y rendent des **compteurs à zéro** trompeurs. ➡️ **Tout témoin se compte en Python sur le CONTENU des fichiers.**
- ⚠️ **Un script Python qui construit un dict d'exemples peut faire exploser la sortie** (196 000 caractères ce run, résultat tronqué et inutilisable). **Borner explicitement ce qu'on imprime**, surtout en balayant ~2 000 fichiers.
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**. Pour tout motif non trivial : **Python**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `git commit -F -` avec heredoc. Corps de PR : `--body-file`, jamais `--body` inline.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. ⏸ **Rangs 1, 2, 4 et 6 pris par des PR ouvertes** — pas des blocages de fond, des attentes de merge. **Le rang 3 est entièrement libre : y aller.**
2. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos.
3. 🛑 **`Você`** — corpus **INTERDIT** selon `LECONS.md`. GO requis. ℹ️ **Chercher les doublons avant de dépenser un arbitrage** : sur CU, 4 occurrences sont tombées sans consommer le GO parce qu'elles vivaient dans un bloc mort. Idem ici dès que #348 merge.
4. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** : le renommer **change l'offre affichée** → GO. **Même question sur CNR : un seul arbitrage débloque les 2 repos.**
5. 🛑 **`PriceTable.tsx`** — arbitrage de prix.
6. ⚠️ **`blog/ComoTrocarTomadaEletricaSozinho.tsx`** — contenu « faire soi-même » sur un site d'électricien certifié DGEG : **question de positionnement ET de sécurité**.
7. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** de la PR #240 — périmètre parké. Rappel d'une ligne.
8. ⚠️ **La cause racine n'est identifiée pour aucune des quatre familles de défauts de génération.** **La chaîne de génération de pages statiques mérite un audit dédié** — c'est le point de levier le plus élevé des 4 repos.
