# context.md — Loop State

> Écrit par le loop Cowork après chaque run. NE PAS ÉDITER MANUELLEMENT.

## Dernier run
- Date : 2026-08-21
- Tâche prévue : rang 1 de la file du 20/08 — audit systématique du code mort.
- Tâche réellement exécutée : l'audit a été fait, **mais une violation découverte pendant a pris la priorité (R11/R12)** et constitue la PR livrée.
- **PR ouverte : #363** — https://github.com/taffrand-gif/eletricista-norte-reparos/pull/363 — branche `loop/2026-08-21-enr-liens-corrompus` — 21 commits, 20 fichiers, **22 liens internes morts réparés**.

### 🔴 Batch `repar`→`arranj` appliqué sans limite de mot — les 4 repos sont touchés
Trouvé en requalifiant `pages/CityPage.tsx` sur CNR : « a nosso trabalho está **parranjada** ». `p|repar|ada` → `p`+`arranj`+`ada`. Un batch a remplacé la sous-chaîne `repar` par `arranj` **sans `\b`**, corrompant tout mot contenant `repar`.

**523 occurrences / 258 fichiers** sur les 4 repos — CNR 296/138 · **ENR 164/81** · CU 33/19 · EU 30/20.
Formes : `parranjar` 221 (`preparar`) · `arranjacao` 113 (`reparacao`) · `parranjo` 96 (`preparação`) · `parranjada/o/os/as` 41 · `parranjou` 14 · `parranja` 8 · `parranjamos` 2 · `arranjacoes` 2.

⚠️ **Le sous-ensemble grave : les `href`.** Les fichiers cibles ont gardé leur nom correct sur le disque **et les sitemaps déclarent la forme correcte** → ce sont des **404 internes durs**, pas un renommage.
Sur ENR : `/arranjacao-avarias-eletricas` **29×** (cible `reparacao-avarias-eletricas.html` présente), `/blog/parranjar-instalacao-eletrica-inverno` 4×, `/blog/parranjar-casa-verao-eletricidade`, `/arranjacao-eletrica`, image OG `og/arranjacao-avarias-eletricas.svg`.
🔴 **Le plus grave : `client/src/components/Footer.tsx` portait un de ces liens morts — donc servi sur toutes les pages du site.**

- **Témoin R8** `(href|src|content)="…(parranjar|arranjacao)…"` : **48 → 26**. Le résiduel est **entièrement** constitué des 11 fichiers pris par des PR ouvertes et des liens sans cible sous aucune forme (`/servicos/arranjacao-eletrica` ×3).
- **Réparé uniquement ce dont la cible corrigée a été vérifiée présente sur le disque** — zéro invention (R4).

### Audit du code mort — résultat, non livré en PR
🔴 **Le prédicat prescrit était faux.** « Grepper le nom d'export sur `client/src` + `shared` » manque les consommateurs situés dans `scripts/` (sur CNR il aurait fait supprimer 5 pages pré-rendues en production). **Prédicat corrigé : grep sur tout le dépôt** (4667 fichiers), mentions dans `SEO_PLAN.md`/`context.md` exclues.
Résultat ENR : **14 fichiers morts**, dont **6 porteurs de motifs**. Après requalification en lecture, **2 faux positifs** (`DashboardLayout.tsx` : les « délais » sont les classes CSS `min-w-0`).
**Presque tout le gisement est bloqué par des PR ouvertes** — d'où le choix de livrer la corruption à la place.

## ✅ Gate merge — aucun gate actif
Vérifié ce run : **aucune mention d'attente de merge** dans les 4 `context.md`. Aucun gate réécrit.

🔴 **Rappel de doctrine, à ne jamais réécrire** : R7 interdit de **MERGER**, pas de **PRODUIRE**. Une PR en attente ne gèle pas le repo — ce run a ouvert une PR pendant que 16 autres restaient ouvertes. Entre le 06/08 et le 09/08, la mention « Attente GO merge (R7) » a été relue chaque nuit comme un ordre d'arrêt → **4 runs sans production**. **Ne jamais réécrire un gate de ce type.**

## 🎯 FILE DE TÂCHES LOOP — état au 2026-08-21

| Rang | Cible | Statut |
|---|---|---|
| — | 20 fichiers à liens corrompus, dont `Footer.tsx` | ✅ **traité ce run (#363)** |
| **1** | **`components/SEO/FAQSchema.tsx` — RETRAIT, pas patch** | ⏸ **hypothèse du 20/08 CONFIRMÉE ce run** : **0 importeur dans tout le dépôt** → c'est du code mort, exactement comme son jumeau CNR (PR #321, 10 violations retirées). Il porte **7 familles de violations** (`raio de …km` ×2, `deslocação incluída`, `gratuito` ×2, stat non sourcée, `A confirmar`, délai, garantie). **Toujours pris par les PR #350 ET #349** — reprendre après leur merge. |
| **2** | **`##style##` / `##endstyle##` — marqueurs de gabarit non substitués** | ⏳ **PROCHAINE TÂCHE SANS GO.** `client/public/sobre.html` L21, `client/public/calculadora-de-preco.html` L21. Sur CU/EU le même défaut faisait **servir tout le CSS comme texte visible** ; correctif validé et mergeable tel quel (PR #270/#313). |
| **3** | **Corruption de prose `repar`→`arranj` — ~140 occurrences restantes sur ENR** | ⏳ **GO périmètre requis.** Inclut `Parranjo` = `Preparação`, restauration *probable* mais **pas prouvable par un fichier sur disque** → hors R4 sans arbitrage. **Un GO d'une ligne débloque les 523 des 4 repos.** |
| **4** | **`pages/QuantoTempoDemoraT rocarQuadroEletrico.tsx` — le nom du fichier contient une ESPACE** | ⏳ `App.tsx` L89 l'importe avec l'espace, la route L167 est active : le fichier est **vivant**, mais c'est le **seul fichier source avec une espace sur les 4 repos**. Il porte aussi 35 motifs de délai à requalifier. **Pris par une PR ouverte** → après merge. |
| **5** | **9 chaînes françaises du corpus INTERDIT** (`satisfait ou refait`, `parle uniquement`, `Marque grande`, `Comparez vous-même`, `tout le pays`, `à l'avenir`) | ⏳ 6 occurrences sur ENR. Interdites **verbatim** par `LECONS.md`. Petit volume. |
| **6** | `grep -rn 'gratuit' client/src` + `grep -rn 'raio de' client/src` | ⏳ prédicat `PRICING.md` L54-56 passé seulement sur `faqData.ts` |
| **7** | 12 fichiers morts sans violation | ⏳ dont `ComponentShowcase.tsx` (1375 L), `blog/QuadroEletricoDispara.tsx` (1072 L), `GaleriaOld.tsx`. Retrait de confort. ⚠️ `blog/ComoTrocarTomadaEletricaSozinho.tsx` : contenu « faire soi-même » sur un site d'électricien certifié — **question de positionnement ET de sécurité**, à arbitrer. |
| 8 | `Diagnostico.tsx` (6 occ) | ⏳ **à requalifier d'abord** — R145 autorise `24h/7 dias` |
| — | `PriceTable.tsx` | 🛑 **BLOQUÉ — arbitrage de prix** |
| — | `CalculadorPreco.tsx` · `InnovativeHero.tsx` · `TrustBanner.tsx` · `Blog.tsx` | ⏸ requalifier en lecture |

## Tâche suivante recommandée
1. **Rang 2 — les marqueurs `##style##`** : 2 fichiers, correctif déterministe déjà validé sur CU et EU, aucun GO.
2. **Rang 5 — les 6 chaînes françaises interdites** : petit, sourcé verbatim, aucun GO.
3. **`FAQSchema.tsx` en RETRAIT** dès #350 et #349 mergées — commencer par re-tester le prédicat d'importeur.
4. **Le prédicat `gratuit` sur tout `client/src/` et `client/public/`.**
5. **`garantia de 24 meses` (L50) et durées chiffrées (L46) de `faqData.ts`** — PR #342 et #350 ouvertes sur ces sujets exacts. Après leur merge.
6. Vocabulaire validé **verbatim** : `shared/siteConfig.ts` L107/L108/L123/L124/L158/L159. Pronoms : `AGENTS.md` §12. **Privilégier le RETRAIT.**

## Apprentissages (self-improving)
- 🔴 **NOUVEAU — la signature d'une corruption de batch, c'est le MOT INEXISTANT.** Personne ne pense à grepper `parranjar`. `grep -rIoE '[[:alpha:]]*<lemme>[[:alpha:]]*' | sort | uniq -c` sort les formes légitimes **et**, juste en dessous, les non-mots : 1361 `arranjar` valides, puis 221 `parranjar` qui ne le sont pas. Une commande, 523 corruptions révélées. ➡️ **À passer sur `urgência`, `rápido`, `garantia`, `gratuito`.**
- 🔴 **NOUVEAU — tout batch de substitution doit ancrer ses motifs sur `\b` et livrer le compte des non-mots créés.**
- 🔴 **NOUVEAU — un prédicat de code mort doit porter sur TOUT le dépôt.** Les consommateurs vivent aussi dans `scripts/` et les manifestes de pré-rendu. **Seconde fois en deux runs qu'une méthode écrite dans un `context.md` se révèle fausse à l'exécution.**
- 🔴 **NOUVEAU — un scanner qui tokenise sur `\w` rate les noms de fichier contenant une espace.** `QuantoTempoDemoraT rocarQuadroEletrico.tsx` était compté mort alors qu'il est importé et routé. Contrôle : `find . -type f -name "* *"`.
- 🔴 **NOUVEAU — un lien corrompu est invisible à l'audit de conformité ET à l'audit de sitemap.** Contrôle dédié : **résoudre chaque lien interne contre le disque**.
- 🔴 **NOUVEAU — quand un défaut récidive, chercher le GÉNÉRATEUR, pas la page** (leçon CU/EU de ce run : le NAP parasite était écrit en dur dans deux scripts Python).
- 🔴 **NOUVEAU — un motif de violation dans un commentaire qui CITE la règle est un faux positif systématique.**
- 🔴 **ATTENTION, hypothèse invalidée ce run** : ENR est un **codebase multi-sites**. `shared/serviceConfig.ts` porte les domaines plomberie **et** électricité, et les composants branchent dessus (`config.x ? '…canalizadores…' : '…'`). **Un grep « contamination cross-métier » brut sort 17 fichiers de faux positifs.** Ne l'appliquer qu'aux **pages autonomes**, jamais aux composants pilotés par config.
- 🔴 **Vérifier les PR ouvertes AVANT de patcher** : `gh pr view <n> --json files --jq '.files[].path'`. Sur ENR, **11 des 31 fichiers porteurs étaient pris** — contrôle indispensable, 3ᵉ run consécutif où il évite un conflit.
- 🔴 **Le compteur R12 sur-compte** : R145 **autorise** `24h/7 dias`. Requalifier avant de patcher.
- 🔴 **Une baseline se remesure sur un arbre intact dans le même run** (CNR : `tsc` = **215**, pas 322).
- **Ne pas sur-purger.** R4 se viole dans les deux sens.

## Edge cases détectés
- **`gh` et les credentials Git n'existent QUE sur le host macOS.** Sandbox : `git fetch` OK, **`git push` impossible**. **Répartition** : lecture / grep / parsing Python / **écriture de fichiers** → sandbox ; `git` en écriture / `gh` / `tsc` → `mcp__desktop-commander__start_process`.
- **Le `/tmp` du sandbox ≠ le `/tmp` du host.** Worktrees sous `~/work/Sites/_worktrees/loop-YYYY-MM-DD/`.
- 🔴 **`git worktree add … -b X <remote>/main` puis `git switch -c Y <remote>/main` conserve les modifications non commitées** — manière propre de scinder un run en 2 PR sans `stash` (interdit R-WT).
- 🔴 **`grep -P` n'existe pas sur macOS** ; **zsh ne fait pas de word-splitting**. Pour tout motif non trivial : **Python**.
- 🔴 **`git commit -m` multiligne est fragile en zsh** → `git commit -F -`. Corps de PR : `--body-file`.
- **Worktree obligatoire** (R-WT). **Jamais `reset --hard` / `checkout -- .` / `stash` / `clean`** sur le checkout partagé.

## Blocages connus
1. 🛑 **GO périmètre — corruption de prose `repar`→`arranj`** : 523 occurrences / 258 fichiers sur les 4 repos.
2. 🛑 **`Você` — 184 occurrences / 161 fichiers sur les 4 repos, dont ENR 103/96** — le plus gros gisement des 4. `LECONS.md` le classe dans le **corpus INTERDIT** (marqueur pt-BR sur sites pt-PT). GO requis.
3. 🛑 **Le service s'appelle littéralement `'Urgências 24h'`** — le renommer **change l'offre affichée** → GO. **Même question sur CNR : un seul arbitrage débloque les 2 repos.**
4. 🛑 **Batch R145 `rápida`/`rápido` — 61 occurrences.** GO requis.
5. ⏸ **`FAQSchema.tsx`** — bloqué par #350 et #349, **pas par un arbitrage**. La réponse est le RETRAIT.
6. ⚠️ **9 fichiers HTML déséquilibrés** relevés par le contrôle de balises : `client/public/blog/tomada-queimada-perigos-solucoes.html` (`<script>` 10/8 + 2 JSON-LD invalides), `aquecimento-eletrico-macedo.html`, `quadros-eletricos-alfandega.html`, `quadros-eletricos-macedo.html` (`<script>` 5/4 + `<style>` 0/1 + JSON-LD invalide chacun), `blog/fase-e-neutro-cores.html` (3 JSON-LD invalides), `blog/como-instalar-fechadura-eletrica.html`, `blog/guia-cores-fios-eletricos.html`, `public/blog/blog-domotica-para-casas-inteligentes.html`, `public/blog/blog-reparacao-cabos-danificados.html`. **Gisement dense, aucun GO requis** — plusieurs sont pris par des PR ouvertes.
7. ⚠️ **`https://***` résiduel : 3 occurrences / 1 fichier.**
8. ⚠️ **La cause racine du batch `repar`→`arranj` n'est pas identifiée.** **Retrouver le script pour s'assurer qu'il n'est pas rejoué.**
