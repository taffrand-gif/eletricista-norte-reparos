# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-25
- Tâche prévue : **rang 2 — les pages `client/public/` à `<div>` déséquilibré**. ✅ **Exécutée**, et **la cause de la famille principale a été identifiée.**
- **1 PR ouverte** :
  - **#374** — https://github.com/taffrand-gif/eletricista-norte-reparos/pull/374 — branche `loop/2026-08-25-enr-div-desequilibre` — 7 commits, **6 fichiers de production** + `SEO_PLAN.md`
- ⚠️ **#371 (run du 24/08) n'a pas mergé.** **24 PR ouvertes** ce run : 20 le 23/08, 23 le 24/08, **24 le 25/08. Le stock continue de grossir, aucune n'a jamais mergé sur la période.**

### 1. 🔴 La cause de la famille principale est nommée
La chaîne de génération injecte le bloc de liens internes **À L'INTÉRIEUR du `<h2>`**. Sur 6 pages, son `<div>` **ouvrant** a disparu ; seul le `</div>` fermant subsiste → déséquilibre de −1.

```html
<!-- sain — sobre-mim.html -->
<h2 style="…"><div style="margin-top:10px;font-size:13px"><a href="/areas-atuacao" …</div>
<!-- cassé — 6 pages -->
<h2 style="color:#333"><a href="/areas-atuacao" …</div>
```

| Mesure | Valeur |
|---|---|
| Pages au prédicat cassé | **6** |
| Donneurs intacts | **1** (`sobre-mim.html`) |
| Formes distinctes du wrapper chez les donneurs | **1** |

4 traitées ; `servicos.html` et `galeria.html` réservées par **#350**.

### 2. Invariant du bloc `related` — population portée à 2843 pages
Profondeur `<div>` à `<section class="related">` = **0 sur 2843/2843** ; à `</main>` = **0 sur 1936/1936**. `equipa.html` (`class="team"` resté ouvert) et `recursos-gratuitos.html` (`class="grid"`) étaient à 1 → `</div>` inséré **avant le bloc `related`**.

### 3. Un fichier peut porter DEUX défauts de familles différentes
`garantias-e-seguros.html` était à **−2** : le wrapper **et** un `<div class="faq-item">` ouvrant disparu (forme donnée par les 3 autres `faq-item` de la même page).

### 4. ⚠️ La structure est réparée, le CONTENU ne l'est pas
Trois défauts de texte **signalés et non reconstruits (R4)** :
- `garantias-e-seguros.html` — la **question** d'un bloc FAQ est détruite, sa réponse commence par une prose tronquée : « **O** tem um número único… » (sujet effacé).
- `distrito-braganca.html` / `distrito-vila-real.html` — `<div class="cta"><h2>` partiellement détruit, la phrase du CTA commence à nu. **Aucun donneur** : les 2 seules pages porteuses sont les 2 cassées.

**Un compteur de balises à 0 donnerait l'illusion que ces pages sont saines. Elles ne le sont pas.**

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge**. Aucun gate réécrit. 24 PR étaient ouvertes ; la #374 a été ouverte quand même.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Entre le 06/08 et le 09/08, « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-25

| Rang | Cible | Statut |
|---|---|---|
| — | `distrito-braganca` · `distrito-vila-real` · `parcerias` · `garantias-e-seguros` · `equipa` · `recursos-gratuitos` | ✅ **structure traitée ce run (#374)** |
| **1** | 🔴 **Garde-fou de pré-commit contre la mutation `@context`** | 🛑 **ARBITRAGE PHILIPPE.** Réparé deux fois, réintroduit deux fois. `LECONS.md` L#003 donne le contrôle ; **il manque le point d'accrochage** (hook pre-commit ou étape Hermes). **Le plus fort levier du repo.** |
| **2** | 🔴 **NOUVEAU — 3 défauts de CONTENU détruit, révélés par la réparation structurelle** : question de FAQ effacée (`garantias-e-seguros`) · phrase de CTA amputée ×2 (`distrito-*`) | 🛑 **GO ou donneur requis.** Aucun donneur dans le dépôt pour les `distrito-*`. **Chercher d'abord si un jumeau `client/src/pages/*.tsx` existe** — il n'y en avait pas pour `Distrito*`, mais le réflexe vaut pour les autres. |
| **3** | **`faq.html` (4 `</div>` orphelins, famille `faq-item`) · `instalacao-eletrica.html` (+1, page à `data-loc`)** | ⏳ **libres, aucun GO** — mais **sans donneur identifié à ce stade**. Familles distinctes de celles traitées ce run. **Prochaine cible évidente : chercher leur prédicat nommé** (pas leur compteur). |
| **4** | **`comparacao.html` — TROIS copies du corps de page** (`<h1>` ×3) | ⏸ **pris par #348.** Dès merge : méthode CU #271. Emporte les 6 chaînes françaises et les `Você` **sans consommer de GO**. ⚠️ Vérifier son **diff**, pas son titre. |
| **5** | **`blog/blog-problemas-eletricos-inverno.html` — `<h1>` ×26** | ⏸ pris par une PR ouverte. Le plus gros déséquilibre du repo. |
| **6** | **`servicos.html` · `galeria.html`** — même défaut de wrapper que ce run | ⏸ **pris par #350.** **Correctif déjà écrit et prouvé (#374) : 1 insertion par fichier.** À reprendre dès merge. |
| **7** | **2 pages à JSON-LD invalide réservées** : `blog/guia-cores-fios-eletricos.html` (#362/#370) · `blog/tomada-queimada-perigos-solucoes.html` (#345) | ⏸ **à reprendre dès merge.** Vérifier d'abord si c'est **le même motif masqué** — si oui, c'est le rang 1 qui compte, pas le patch. |
| **8** | **`components/SEO/FAQSchema.tsx` — RETRAIT, pas patch** | ⏸ 0 importeur → code mort. **Toujours pris par #350 ET #349.** Re-tester le prédicat d'importeur avant. |
| **9** | **Corruption de prose `repar`→`arranj` — ~140 occurrences restantes** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **10** | 🔴 **NOUVEAU — refaire la mesure `gratuit` avec PÉRIMÈTRE ET MOTIF ÉLARGIS** | ⏳ **Sur CNR ce run, le même prédicat est passé de « ~27 restantes » à 3822 occurrences / 1723 fichiers** — le compteur antérieur ne balayait que `client/src` avec un motif littéral. **Le compteur d'ENR a exactement la même origine. À remesurer en priorité.** |
| **11** | **`pages/QuantoTempoDemoraT rocarQuadroEletrico.tsx`** — le nom du fichier contient une ESPACE | ⏳ fichier **vivant** (`App.tsx` L89, route L167). **Pris par une PR ouverte.** |
| **12** | 12 fichiers morts sans violation | ⏳ dont `ComponentShowcase.tsx` (1375 L), `blog/QuadroEletricoDispara.tsx` (1072 L), `GaleriaOld.tsx`. ⚠️ `blog/ComoTrocarTomadaEletricaSozinho.tsx` : contenu « faire soi-même » sur un site d'électricien certifié — **positionnement ET sécurité**. |
| 13 | `Diagnostico.tsx` (6 occ) | ⏳ **requalifier d'abord** — R145 autorise `24h/7 dias` |
| 14 | Les **deux `FAQPage` distincts** de `precos.html` | ⏳ anomalie de schéma, arbitrage |
| — | `PriceTable.tsx` | 🛑 **BLOQUÉ — arbitrage de prix** |
| — | `CalculadorPreco.tsx` · `InnovativeHero.tsx` · `TrustBanner.tsx` · `Blog.tsx` | ⏸ requalifier en lecture |

## Tâche suivante recommandée
1. 🔴 **Rang 10 — remesurer `gratuit` avec périmètre ET motif élargis.** Sur CNR le même prédicat est passé de 27 à **3822**. **C'est la tâche à plus fort rendement du prochain run**, et elle ne coûte qu'une commande Python.
2. **Rang 3 — `faq.html` et `instalacao-eletrica.html`** : chercher leur **prédicat nommé** (« quelle balise précise manque, et qui l'a encore »), pas leur compteur. Méthode prouvée ce run.
3. **Poser le rang 1 à Philippe en une ligne** : « garde-fou pré-commit contre la mutation `@context` — OK ? ».
4. **Poser le rang 2** : les 3 textes détruits, avec ou sans reconstruction.
5. **Rangs 4/5/6/7/8 dès qu'une PR merge** — vérifier le **diff**, pas le titre.
6. Vocabulaire validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — passer du COMPTEUR au PRÉDICAT NOMMÉ avant de patcher.** « `div` 31/32 » ne se réutilise pas ; « le wrapper `<div style="margin-top:10px;font-size:13px">` manque après le `<h2>` » se réutilise, se compte sur tout le dépôt et **désigne son propre donneur**. Ce run : 6 pages cassées / 1 donneur, trouvés en une commande. **Le compteur pointe, le prédicat explique.**
- 🔴 **NOUVEAU — un donneur unique reste un fait mesuré SI SA FORME EST UNIQUE.** Corollaire de la leçon du 24/08 (« quand la population est grande, la majorité byte-identique est la source de vérité ») : **quand la population est de 1, ce qui légitime la transplantation, c'est l'unicité de la forme** — vérifiée en comptant les variantes chez tous les donneurs.
- 🔴 **NOUVEAU — un fichier peut porter DEUX défauts de familles différentes.** `garantias-e-seguros.html` était à −2. **Ne pas s'arrêter au premier orphelin : dérouler la pile jusqu'au bout**, sinon on livre un fichier « corrigé » toujours déséquilibré.
- 🔴 **NOUVEAU — réparer la structure ne répare pas le contenu, et il faut le DIRE.** Les 6 pages sont équilibrées, **3 textes restent détruits**. Un témoin structurel à 0 donnerait l'illusion de pages saines. **Distinguer explicitement le témoin structurel du verdict de contenu.**
- 🔴 **NOUVEAU (transposé de CNR) — un compteur de violation vaut ce que vaut son PÉRIMÈTRE, et le périmètre est presque toujours IMPLICITE.** `client/src` a été le périmètre par défaut, jamais énoncé. **Ne jamais écrire « il en reste N » sans écrire sur quel arbre et avec quel motif.** Voir rang 10.
- 🔴 **Un défaut DÉJÀ RÉPARÉ qui revient n'est pas un défaut : c'est un générateur non corrigé.** `git log -S <motif>` le prouve en une commande. **Si le motif a un historique de réparations, le livrable est le GARDE-FOU, pas le patch.**
- 🔴 **Certaines chaînes ne survivent pas au canal d'écriture.** `https://schema.org` est muté par les tools runtime **et** par `cat <<EOF`, pas par Python pur (`LECONS.md` L#003). **La construire par concaténation et CONTRÔLER LE BLOB GIT APRÈS COMMIT.**
- 🔴 **Deux positions d'insertion peuvent donner le même compteur équilibré et une seule être correcte.** **Mesurer la PROFONDEUR aux points de repère, pas seulement les totaux.**
- 🔴 **Un compteur de déséquilibre pointe le symptôme, jamais la cause.** **Lire les DEUX bornes du déséquilibre avant d'en patcher une.**
- 🔴 **Un `<style>` qui manque son ouverture ne casse pas le CSS : il fait DISPARAÎTRE la page.**
- 🔴 **Un marqueur non substitué peut laisser les balises PARFAITEMENT ÉQUILIBRÉES.** Deux contrôles complémentaires.
- 🔴 **Ne retirer un doublon que s'il est byte-identique** (md5 par bloc, méthode EU #314).
- 🔴 **Le contrôle des PR ouvertes se fait AVANT de calculer le périmètre.** Ce run : 24 PR passées à `gh pr view --json files`, 5 des 13 cibles écartées d'emblée. ⚠️ **Un titre de PR ne dit pas ce qu'elle couvre.**
- 🔴 **Avant de patcher une chaîne, vérifier qu'elle ne vit pas dans un BLOC DUPLIQUÉ.**
- 🔴 **« Valeur non sourçable » se PROUVE en remontant la chaîne de définition.**
- 🔴 **Ventiler par famille avant de choisir le périmètre** : chercher le **sous-ensemble homogène**.
- 🔴 **Le sweep `${…}` / `{{…}}` / `%%…%%` / `__…__` rend 0 sur ENR** (contre 105 sur CNR). Le JSX non compilé est propre au générateur de CNR.
- 🔴 **Un prédicat de code mort doit porter sur TOUT le dépôt**, jamais sur un sous-arbre.
- 🔴 **La signature d'une corruption de batch, c'est le MOT INEXISTANT** — par **diff des ensembles de mots** avant/après, pas grep du lemme.
- 🔴 **Quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page.**
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`.
- **Ne pas sur-purger.** R4 se viole dans les deux sens.

## Edge cases détectés
- **Ce repo n'a QU'UN remote : `origin`.** Contrairement à CNR (qui a `github` **et** `origin`), `git fetch github` échoue ici. **Diffuser contre `origin/main`.**
- 🔴 **`LECONS.md` L#003 : les tools runtime et `cat <<EOF` muent `https://schema.org`.** Python pur y échappe.
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Reconfirmé ce run : `git push --dry-run` depuis le sandbox → `could not read Username for 'https://github.com'`. Répartition : lecture / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → host.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees et `--body-file` sous `~/work/Sites/_worktrees/` ou `~/work/Sites/_loop-<date>/`. Le `--body-file` doit vivre **hors du worktree**.
- 🔴 **Un worktree n'est PAS un dépôt git vu depuis le sandbox** : `git show`/`diff`/`log` y rendent des **compteurs à zéro** trompeurs. **Tout témoin se compte en Python sur le CONTENU des fichiers.**
- ⚠️ **Un script Python qui balaie ~2 900 fichiers doit BORNER explicitement ce qu'il imprime.**
- 🔴 **`grep -P` n'existe pas sur macOS** ; **`grep -E` de macOS ne matche pas de façon fiable `ç`/`ã`/`õ`** ; **zsh ne fait pas de word-splitting** ; **`set -e` + glob vide fait avorter le script**. **Pour tout motif accentué ou non trivial : Python.**
- 🔴 **`grep -c '***'` échoue en zsh.**
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `printf … | git commit -F -`. **Les accents et apostrophes typographiques passent mal dans un `printf` de message de commit** — ASCII dans les messages, UTF-8 dans les fichiers. Corps de PR : `--body-file`, jamais `--body` inline.
- ⚠️ **L'ancre du HISTORIQUE diffère d'un repo à l'autre** : `## 🔄 HISTORIQUE` ici, `## 🔄 HISTORIQUE — Journal des actions` sur CNR. **Vérifier l'ancre avant d'insérer**, sinon l'insertion échoue silencieusement ou au mauvais endroit.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé. Aucun `context.md` ne *prescrit* de `reset --hard`.

## Blocages connus
1. 🛑 **RANG 1 — garde-fou de pré-commit contre la mutation `@context`.** Deux réparations, deux récidives. **Arbitrage Philippe.**
2. 🛑 **NOUVEAU — 3 textes détruits révélés par la réparation structurelle** (question de FAQ, phrase de CTA ×2). **Aucun donneur pour les `distrito-*`. GO requis.**
3. ⏸ **Rangs 4, 5, 6, 7, 8 et 11 pris par des PR ouvertes** — pas des blocages de fond, des attentes de merge.
4. 🔴 **Le stock de PR ouvertes ne cesse de croître : 20 → 23 → 24, aucune mergée.** Six rangs sont bloqués mécaniquement par ce stock. **C'est le premier facteur limitant du repo, devant tous les GO de périmètre.**
5. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos.
6. 🛑 **`Você`** — corpus **INTERDIT** selon `LECONS.md`. GO requis. ℹ️ **Chercher les doublons avant de dépenser un arbitrage** (sur CU, 4 occurrences sont tombées gratuitement, dans un bloc mort ; idem ici dès #348 mergée).
7. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** : le renommer **change l'offre affichée** → GO. **Même question sur CNR : un seul arbitrage débloque les 2 repos.**
8. 🛑 **`PriceTable.tsx`** — arbitrage de prix.
9. ⚠️ **`blog/ComoTrocarTomadaEletricaSozinho.tsx`** — « faire soi-même » sur un site d'électricien certifié DGEG : **positionnement ET sécurité**.
10. 🛑 **Batch FAQ (~815 fichiers)** et **batch prix (~73)** de la PR #240 — périmètre parké. Rappel d'une ligne.
11. ⚠️ **La chaîne de génération de pages statiques reste non auditée.** Familles connues : `##style##` (CNR/CU/EU) · corps de page dupliqués (CU 2, ENR 3) · JSON-LD tronqué écrasant `<style>` (ENR) · JSX non compilé (CNR) · mutation `@context` (ENR) · **et désormais la perte du `<div>` ouvrant du bloc de liens internes, injecté à l'intérieur d'un `<h2>` (ENR, 6 pages)**. **Six familles, une chaîne. C'est le point de levier le plus élevé des 4 repos** — et le volume découvert sur CNR le même jour (1723 fichiers `client/public`) le confirme. **Corriger le générateur vaut mieux que N patchs.**
