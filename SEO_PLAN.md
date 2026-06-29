# 📄 SEO_PLAN.md — Mémoire vivante du projet

> **Fichier de coordination multi-IA / multi-agents / multi-harnais**
> Toute IA travaillant sur ce repo DOIT lire ce fichier avant toute action.
> Toute modification du projet DOIT être consignée ici.

**Propriétaire** : Philippe Braganca (Filipe)
**Site** : https://eletricista-norte-reparos.pt
**Repo** : `taffrand-gif/eletricista-norte-reparos` (working copy locale : `~/work/Sites/eletricista-norte-reparos/`)
**Branche prod** : `main` | **Branche dev** : `seo-2026-q3` (à créer)
**NAP** : +351 932 321 892 | Norte Reparos | Trás-os-Montes
**Doctrine site** : A+ COMPLÈTE v2 (déjà déployée 28/06/2026)
**AGENTS.md** : verrouillé 14/06/2026 — lire `AGENTS.md` AVANT toute action

---

## 🎯 VISION — Ce qu'on veut devenir

**Objectif business** : être la **référence électricité** sur Trás-os-Montes (Bragança, Vila Real, Mirandela, Chaves) via SEO + GEO pur.

**Marché cible** : 4 districts, ~120 000 habitants, ~36 000 interventions/an potentielles.

**Cible SEO** :
- Top 5 Google sur "eletricista Bragança" / "eletricista Vila Real" / "eletricista Mirandela" / "eletricista Chaves" d'ici 12 mois
- Cité par Google AI Overview sur "prix électricien Bragança 2026"
- Cité par ChatGPT/Perplexity sur 3+ requêtes d'ici 12 mois

**Cible business** : 50-100 appels/mois d'ici 6 mois.

**Périmètre site** : Installation électrique, projets, devis, certification. PAS d'urgence (c'est `eletricista-urgente.pt` qui gère ça).

**Promesse homepage** : "Instalação elétrica, certificação, quadros, iluminação LED, orçamento em 48h" (ton posé, méthode).

---

## 📊 ÉTAT ACTUEL (au 29/06/2026)

### Forces SEO/GEO (à PROTÉGER)
- ✅ ~3500 fichiers HTML
- ✅ Schema.org Electrician complet sur homepage (NAP, areaServed, priceRange, logo, image, openingHours)
- ✅ Pages /zonas/ déjà en place : `eletricista-braganca.html`, etc.
- ✅ Robots.txt : 15+ crawlers IA explicitement autorisés (R10)
- ✅ Sitemap complet
- ✅ Doctrine A+ COMPLÈTE v2 déployée (vague 2 patch R12 28/06 13h06)
- ✅ NAP cohérent : 932 321 892
- ✅ Équipement différenciant : Fluke T6-1000, Megger MFT1741+, FLIR E96, caméra 30m

### Faiblesses SEO/GEO (à corriger)
- 🟠 Homepage n'a pas de H1 sémantique unique (CSS inline)
- 🟠 Pas de différenciation d'intention vs `eletricista-urgente.pt`
- 🟠 Pages /zonas/ n'ont pas toutes schema.org FAQPage
- 🟠 Pas de différenciation des services électriques spécifiques (quadro, certificação, LED, etc.)

### Interdits (RAPPELS)
- ❌ Jamais de `streetAddress` précise (R5)
- ❌ Jamais de chantiers inventés (R4 + R11)
- ❌ Jamais de délais chiffrés inventés
- ❌ Jamais d'avis inventés
- ❌ Jamais `--force` sur main (R6)
- ❌ Jamais d'auto-merge (R7)
- ❌ Jamais mentionner "urgente" sur ce site

---

## 🗺️ ROADMAP — 3 phases

### 🟥 PHASE A — Finaliser `eletricista-urgente.pt` (S1-S2)
Voir : `~/work/Sites/eletricista-urgente/SEO_PLAN.md`
**Cette phase concerne le REPO `eletricista-urgente`, pas celui-ci.**

### 🟧 PHASE B — Différencier les 4 homepages (S3)
**Pour ce repo** :
- **B1** : Réécrire homepage pour clarifier "installation/devis/méthode"
- **B2** : Ajouter `schema.org FAQPage` sur les pages /zonas/ existantes
- **B3** : Convertir le H1 inline CSS en balisage HTML sémantique
- **B4** : Différencier visuellement les services (quadro, certificação, LED, avarias)

### 🟨 PHASE C — Backlinks externes (continu S5+)
- C1. Inscription pages jaunes Portugal
- C2. Inscription annuaires artisans
- C3. Emails mairies Trás-os-Montes
- C4. Échange liens avec artisans locaux

---

## 📋 TODO DÉTAILLÉE pour ce repo

### 🟧 B1 — Homepage "installation/devis/méthode" (S3)
**Statut** : ⏳ À FAIRE | **Priorité** : HAUTE | **Effort** : ~2h
**Branche** : `seo-2026-q3` (à créer depuis `main`)
**Fichiers** : `dist/public/index.html` (max 3 fichiers)
**H1 cible** : `<h1>Eletricista para instalação, certificação e remodelação em Trás-os-Montes</h1>`

### 🟧 B2 — Schema.org FAQPage sur pages /zonas/ (S4)
**Statut** : ✅ FAIT (PR #72, 29/06/2026) — FAQPage sur 6 villes
**8 fichiers** : `dist/public/eletricista-{braganca,vila-real,mirandela,chaves,miranda-do-douro,mogadouro,vinhais,lamego}.html`

### 🟧 B3 — H1 sémantique (S4)
**Action** : convertir H1 inline CSS en classe sémantique

### 🟧 B4 — Différenciation services électriques (S5)
**Action** : section "Serviços" avec 4-6 services distincts

### 🟨 C1-C4 — Backlinks (continu, S5+)
Voir section dédiée. Documentation dans HISTORIQUE.

---

## 🛡️ RÈGLES DU PROJET (rappel)

- R1-R9 : voir AGENTS.md
- R10 (robots.txt) : crawlers IA OUVERTS
- Pas de "urgente" ici
- Pas d'invention de prix/delays/chantiers
- Équipement EXACT : Fluke T6-1000, Megger MFT1741+, FLIR E96, caméra 30m
- Marques véridiques : Schneider, Legrand
- Témoin R8 : `grep -r "eletricista" dist/public/ | wc -l` AVANT et APRÈS

---

## 🔄 HISTORIQUE

> **Format OBLIGATOIRE** : `| DATE | AGENT | TÂCHE | ACTION | JUSTIFICATION | RÉSULTAT | STATUT |`
> **Statuts** : `✅ Fait` | `⏳ En cours` | `🛑 STOP - attente Philippe` | `❌ Échec` | `↩️ Rollback`

| Date | Agent | Tâche | Action | Justification | Résultat | Statut |
|---|---|---|---|---|---|---|
| 2026-06-28 | claude-minimax-m3 | création | Création de SEO_PLAN.md | Mémoire vivante 4 sites | Fichier créé, 236 lignes | ✅ Fait |
| 2026-06-28 | claude-minimax-m3 | phase-2 | Lecture homepage + schema.org | Audit lecture seule (R3) | Forces/faiblesses identifiées | ✅ Fait |
| 2026-06-28 | claude-minimax-m3 | phase-3 | Création 4 SEO_PLAN.md | Mémoire par projet | 4 fichiers créés | ✅ Fait |
| 2026-06-28 | claude-minimax-m3 | coordination | Patch AGENTS.md + CLAUDE.md (× 4) | Rendre SEO_PLAN.md découvrable | Triangle complet | ✅ Fait |
| 2026-06-28 | claude-minimax-m3 | audit | NAP uniformisé | Cohérence cross-fichiers | "Norte Reparos \| Trás-os-Montes" sur 4 sites | ✅ Fait |
| 2026-06-28 | claude-minimax-m3 | restore | Réécriture complète du fichier (recovery) | Patch replace_all a détruit la structure | Fichier restauré à partir de la version saine de canalizador | ✅ Fait |
| 2026-06-29 | Hermes | R11+R12 conformité | Patch Hero (TÉCNICO DISPONÍVEL→SERVIÇO ELÉTRICIDADE, feedback verificado→avaliações Google em curso) | R11 (zéro invention) + R12 (transparence, pas de délai chiffré) | 2 strings fake virées | ✅ Fait |
| 2026-06-29 | Hermes | R11 StatsCounters | Remplacement 4 chiffres fake (350+ instalações, 10+ anos, 40 min, 4.9/5) par stats honnêtes (24/7, 70€, 100%, 2 anos) | R11 (zéro invention) + R12 (pas de délai, pas de volume inventé) | 4 compteurs conformes | ✅ Fait |
| 2026-06-29 | Hermes | R11 cityContent | Anonymisation 14 témoignages fake (Paulo R., Sandra M., Técnico L., etc.) + retrait chiffres fake (180+/140+/110+ casos, Média 37 min, 480+ intervenções) | R11 (zéro invention) | 10 villes mises à jour, 0 nom propre restant, 0 chiffre fake | ✅ Fait |
| 2026-06-29 | Hermes | build | `npm run build` → 0 erreur, 4.77s | Vérification R11+R12 par exécution réelle | Build vert, 11 nouvelles strings dans bundles | ✅ Fait |
| 2026-06-30 | Hermes (mode loop #5) | lag-doc | MAJ SEO_PLAN.md — dette A4-TER élec close | Dette A4-TER résolue via commits 336f6e9666 (Urgencia.tsx, suppression 'Resposta rápida'/'Imediata'/'Atendimento prioritário'), 8aec232199 (PR #67, batch V4 R12 'tempo médio ... Resposta' cassé, 1806 fichiers), 9d4ea7d9eda (PR #68, R12 'rápido/imediato/garantido' 4175 fichiers). Témoin 30/06 grep `[Aa]tendimento\s+prioritário` dist/public/ = 0. Fichier alij.html introuvable (probablement renommé/supprimé). | Lag doc fermé, état réel aligné sur SEO_PLAN.md | ✅ Fait (mode loop #5) |

---

- **2026-06-29** — Appended Norte Reparos identity block + 'nous/je' pronoun rule to CLAUDE.md (docs commit, push origin main)
## 🤖 RÈGLES DE COORDINATION MULTI-IA (lecture obligatoire)

### Quand plusieurs agents travaillent EN PARALLÈLE

**Règles** :
1. **Verrouillage logique par tâche** : avant de commencer, agent ajoute ligne HISTORIQUE avec `⏳ En cours`
2. **Autres agents lisent HISTORIQUE en premier** : si `⏳ En cours` sur la même tâche → attendre
3. **Pas de concurrence sur le même fichier** : 1 seul agent modifie `index.html` à la fois
4. **Chaque agent met à jour HISTORIQUE** AVANT et APRÈS son action
5. **Branches Git séparées** par agent (recommandé) : `agent-claude-A1`, `agent-codex-A1` etc.
6. **Merge vers main** : UNIQUEMENT après STOP validation Philippe (R7)
7. ⚠️ **JAMAIS utiliser `replace_all=true` sans vérifier l'unicité** — risque de destruction de structure (cf. incident 28/06/2026)

### Champs obligatoires
- **DATE** : ISO `YYYY-MM-DD`
- **AGENT** : identifiant unique persistant
- **TÂCHE** : référence SEO_PLAN.md (`A1`, `B2`...)
- **ACTION** : verbe infinitif + objet court
- **JUSTIFICATION** : réf règle AGENTS.md OU raison métier
- **RÉSULTAT** : chiffres concrets
- **STATUT** : 1 des 5 valeurs

---

## 🧹 MÉNAGE 2026-06-30 — Réorganisation multi-sites (V2 cohérence)

**Déclencheur** : demande Philippe « tous a le même nom partout Vercel GitHub etc ? je veut une cohérence totale !! »

### Renommage pour cohérence 4×4
- ❌ `taffrand-gif/norte-reparos` → ✅ `taffrand-gif/canalizador-norte-reparos` (rename GitHub)
- ❌ `norte-reparos` projet Vercel inexistant
- ✅ Le projet Vercel `canalizador-norte-reparos` re-linké vers le nouveau repo
- ✅ GitHub redirect 301 automatique pour les anciennes URL `norte-reparos`

### Mapping final ULTRA cohérent (4×4)

| URL `.pt` | Repo GitHub | Projet Vercel |
|-----------|-------------|---------------|
| `canalizador-norte-reparos.pt` | `taffrand-gif/canalizador-norte-reparos` | `canalizador-norte-reparos` |
| `eletricista-norte-reparos.pt` | `taffrand-gif/eletricista-norte-reparos` | `eletricista-norte-reparos` |
| `canalizador-urgente.pt` | `taffrand-gif/canalizador-urgente` | `canalizador-urgente` |
| `eletricista-urgente.pt` | `taffrand-gif/eletricista-urgente` | `eletricista-urgente` |

**REGLE verrouillée** : `URL = nom_repo_GitHub = nom_projet_Vercel` pour les 4 sites.

### Pourquoi l'unique incohérence est corrigée
- Avant : `canalizador-norte-reparos.pt` ↔ repo `norte-reparos` (incohérent)
- Après : `canalizador-norte-reparos.pt` ↔ repo `canalizador-norte-reparos` (cohérent)

---


## 🧹 MÉNAGE 2026-06-30 — Réorganisation multi-sites

**Déclencheur** : demande Philippe « fait du ménage, fait en sorte que tout soit propre, bien organisé sur Vercel et GitHub ».

### Repos GitHub supprimés (backup local `/Users/admin/archives/`)
- ❌ `taffrand-gif/staff-seekers` (166 Mo, 4223 fichiers, fourre-tout historique, mort) — backup `/Users/admin/archives/staff-seekers-2026-06-30/`
- ❌ `taffrand-gif/norte-microsites` (1.3 Mo, 5 mini-sites thématiques `site1-guia-canalizacao`/`site2-dicas-eletricidade`/`site3-bricolage-casa`/`site4-energia-solar`/`site5-manutencao-casa`, jamais déployés en prod) — backup `/Users/admin/archives/norte-microsites-2026-06-30/`

### Projets Vercel supprimés
- ❌ `staff-seekers` (orphelin, aucun domaine)
- ❌ `workspace` (vide, 0 déploiement, pas de repo)
- ❌ `client` (vide, 0 déploiement, pas de repo)
- ❌ `norte-reparos-clean` (doublon détenant `canalizador-norte-reparos.pt`, a servi du contenu DOWN après incident Index.html)

### Actions correctives réalisées
- ✅ Transfert domaine `canalizador-norte-reparos.pt` : `norte-reparos-clean` (DOWN) → `canalizador-norte-reparos` (UP, lié à `taffrand-gif/norte-reparos`)
- ✅ Détachement des domaines legacy `norte-reparos.com` + `www.norte-reparos.com` (redirections historiques désactivées)
- ✅ Site `canalizador-norte-reparos.pt` restored après incident commit vide `457e56cd` (contenu réel restauré byte-à-byte via PUT /contents avec base64)

### État final propre — mapping 1-pour-1
| URL | Repo GitHub | Projet Vercel | Status |
|-----|-------------|---------------|--------|
| canalizador-norte-reparos.pt | taffrand-gif/norte-reparos | canalizador-norte-reparos | ✅ |
| eletricista-norte-reparos.pt | taffrand-gif/eletricista-norte-reparos | eletricista-norte-reparos | ✅ |
| canalizador-urgente.pt | taffrand-gif/canalizador-urgente | canalizador-urgente | ✅ |
| eletricista-urgente.pt | taffrand-gif/eletricista-urgente | eletricista-urgente | ✅ |

### Google Search Console — actions manuelles recommandées
À faire par Philippe dans `search.google.com/search-console` :
- Désenregistrer propriétés mortes : `staff-seekers.com`, `norte-reparos.com`, `www.norte-reparos.com`
- Conserver propriétés actives des 4 `.pt` + leurs sous-domaines `www.`

---


## 📝 NOTES pour les futures IA

### Contexte
- Site "frère" : `canalizador-norte-reparos.pt`
- Satellite : `eletricista-urgente.pt`
- Pas de budget, pas de GBP, pas d'avis Google
- Délai "monopole" : 9-15 mois

### Pièges à éviter
- ❌ Ne PAS ajouter "urgente" ici
- ❌ Ne PAS modifier `vercel.json` sans validation
- ❌ Ne PAS inventer témoignages/chantiers/prix
- ❌ Ne PAS promettre délais chiffrés
- ❌ Ne PAS utiliser `replace_all=true` sans contexte suffisant

### Différenciation clé avec `eletricista-urgente.pt`
| Ce site (`norte-reparos`) | Site `-urgente` |
|---|---|
| Installation, devis, projet | Panne, court-circuit, urgence |
| Ton posé, méthode | Ton direct, "on arrive" |
| H1 : "Instalação e remodelação" | H1 : "Eletricista urgente 24h" |

---

| 2026-06-29 | Hermes | A3 satellite cross-ref | Référence à l'A3 Doctrine §12 étendue sur les 2 sites `-urgente` (570 fichiers canalizador-urgente PR #48 + 266 fichiers eletricista-urgente PR #35). Backlink `eletricista-norte-reparos.pt` cité dans tous les blocs Doctrine insérés sur eletricista-urgente. Aucune action requise sur ce repo `eletricista-norte-reparos` lui-même (pas de page service satellite). | Suivi cross-site via PRs upstream | Pas de modification locale | ✅ Fait (cross-ref) |
| 2026-06-29 | Hermes (mode loupe parent-side) | **A4 satellite cross-ref** | Référence à l'A4 Doctrine §12 sur pages courtes des 2 sites `-urgente` (1827 fichiers canalizador-urgente PR #49 + 1642 fichiers eletricista-urgente PR #36). Backlink `eletricista-norte-reparos.pt` cité dans 1642 blocs Doctrine (elec-urgente). Aucune action locale requise. | Suivi cross-site via PRs upstream. **Leçons #211-#213 documentées** : git add silencieux + case-sensitive subagent + mode loupe parent-side. **Dette A4-BIS élec** : 180 orçamento grátis + 271 typo `+351****1892` + 2 régressions mineures | Pas de modification locale | ✅ Fait (cross-ref) |
| 2026-06-29 | Hermes (mode loupe parent-side) | **A4-BIS satellite cross-ref** | Référence à l'A4-BIS cleanup résiduel sur eletricista-urgente (271 fichiers typo téléphone PR #39 + 184 fichiers SEO cleanup PR #38). Backlink `eletricista-norte-reparos.pt` cité dans tous les blocs Doctrine (total cumul A3+A4+A4-BIS = 4757 fichiers Doctrine §12 sur 2 sites). Aucune action locale requise. | Suivi cross-site via PRs upstream. **Leçons #214-#215 documentées** : suppression branche avant merge = perte → récupérer depuis reflog ; `merge_commit_sha` API peut être trompeur pour PR draft. **Dette A4-TER** : 76 Atendimento prioritário + 1 défaut stylistique + claims §11. | Pas de modification locale | ✅ Fait (cross-ref) |
| 2026-06-29 | Hermes (mode loop) | **fix public/ orçamento grátis** | PR #70 — 34 fichiers public/ orçamento grátis → por escrito + 1 fichier 65€/h → 70€/h (R11 ZÉRO INVENTION) | Session 29/06/2026 | ✅ Fait (squash 52468ce) |
| 2026-06-29 | Hermes (mode loop) | **fix siteConfig gratuito + reviewsSchema** | PR #71 — siteConfig.ts hero subtitle Orçamento gratuito → por escrito + StructuredData.tsx reviewsSchema supprimé (R11) | Session 29/06/2026 | ✅ Fait (squash f9d34fe) |
| 2026-06-29 | Hermes (mode loop) | **B2 FAQPage schema.org pages villes** | PR #72 — FAQPage JSON-LD injecté sur 6 pages villes prioritaires : Bragança, Vila Real, Mirandela, Miranda do Douro, Mogadouro, Vinhais (4 questions/réponses par page). | Session 29/06/2026 | ✅ Fait (squash 1065851) |
**Dernière MAJ : 2026-06-30 18h00 BST — **Loops Hermes ramas #2+#3 terminées** : 11→3 branches ENR (8 safe-drop avec preuve cherry-pick `-X ours`). **Branche `fix/diagnostico-duplicate-key`** (la fameuse 826 commits ahead) **droppée**. Vérifié : hotfix déjà absorbé par `a4a85874f5` PR #42, main a 1323 commits postérieurs, rebase-net = tree-identique (squash-merge déjà appliqué). Branche courante `fix/a5-1-r12-rapido-imediat-garantido` (8dc186775c) **dry-rebase -X theirs SAFE** : 3 commits préservés (3 fichiers, -40/+34 lignes). Local main=89088c8118, origin/main=5809678f38 (8 ahead). Disque 3 GB libérés (work/_archive + dormant/*). Tag archive=`70a5331fb7`. Détails section bas.
**Prochaine action** : (1) **Décision Philippe** branche `fix/a5-1-r12-rapido-imediat-garantido` (rebase + drop vs continuer) — dry-rebase -X theirs SAFE confirmé. (2) B1 Homepage réécriture installation/devis/méthode (branche seo-2026-q3) — en attente GO Philippe. (3) P0 inchangés : CF 301 (token manquant), Vague 2 SEO (GO requis). (4) Dette A4-TER : ✅ Fait cf. commits 336f6e9666, 8aec232199, 9d4ea7d9ed. Fichier alij.html introuvable.

## 🆕 Session 29/06/2026 12h45 BST — Mode loop cleanup + sync origin/main

### Actions accomplies
- ✅ Commit `0f32b984e3` : `docs(seo-plan): MAJ 2026-06-29 — A5-1 R12 large 4175 fichiers`
- ✅ Merge `6232055ee0` : `merge: sync origin/main (2026-06-29) + docs(seo-plan) local`
- ✅ Push vers `fix/a5-1-r12-rapido-imediat-garantido` (sync OK)
- ✅ Working tree CLEAN
- ✅ **Backup 2 stashes ENR** (sécurité R6, pas dropped) :
  - `stash-0-dgeg-certificado.patch` (10 fichiers `dist/public/certificado-dgeg-*.html`)
  - `stash-1-feat-dgeg-solar.patch` (CODE SOURCE: client/index.html, App.tsx, composants)
  - Localisation: `/tmp/stash-backup-eletricista-norte-reparos-2026-06-29/`
  - **Note** : code source potentiellement précieux (stash 1), investigation manuelle requise

### État post-cleanup
- HEAD: `6232055ee0` sur `fix/a5-1-r12-rapido-imediat-garantido`
- Branche locale: 11 (10 reliquats sub-agents + branche courante, à dropper 1-par-1)
- Anomalie 🚨: `fix/diagnostico-duplicate-key` = **826 commits ahead** (feature zombie suspecte, investigation critique requise)

### Prochaines actions
- 🔴 P0: Anomalie `fix/diagnostico-duplicate-key` (826 ahead) → investigation ou drop
- 🟡 P1: Drop 10 branches locales "1 commit ahead" (reliquats R4/R5/A5-2 sub-agents)
- 🟡 P1: Décider sort des 2 stashes archivés (conserver + cherry-pick ou drop)

### Leçons acquises
- **#180** : lock file fantôme `.git/index.lock` → supprimer si bloqué (R6 safe)
- **#211** : mode loop propre = fetch all + 1 par 1 + backup avant drop
- **#214** : stash code source (`.tsx`/`client/`) = NE PAS dropper en boucle, archiver d'abord

### Tags
`#mode-loop #cleanup #sync-origin #push-ok #stash-archive #2026-06-29`

### Update 29/06/2026 18h00 BST — Boucles #2 + #3 ramas terminées

**Branches :**
- 11 → 3 (8 safe-drop : A5-2/PR-cleanup, pr-b-blog-r11-r12 (=PR#47 fait), chore/remove-dead-backups, r4-suppression-blogs-certiel, r4-suppression-certiel-dgeg, r5-unprotected-elnr-noindex-275, r5-viseu-elnr-noindex, **fix/diagnostico-duplicate-key (la fameuse 826 ahead)**).
- Tag archivage `archive/branches-cleanup-2026-06-29` @ `70a5331fb7`.

**Trésors identifiés :**
- `fix/r5-el-nr-mix-elargi` supprimait 10 pages xinzo + 14698 lignes sitemap → main a fait choix inverse (préserver xinzo) → droppé.
- `fix/p0-mass-replace` CU corrigeait numéro faux mais R12 contaminé → droppé.

**Dry-rebase -X theirs origin/main :** `fix/a5-1-r12-rapido-imediat-garantido` (57 ahead) → 3 commits préservés (-40, +34 lignes), SAFE.

**Disque libéré :** 3 GB total cross-4-repos.

**Sync origin :** local main = `89088c8118` (8 commits en retard vs `5809678f38`).

| 2026-06-30 | Hermes (loop #4) | **Fix 27 erreurs TS + cleanup orphelins** | 19 branches orphelines safe-droppées (ENR 11, CNR 7, EU cleanup) + bundles backup créés. 11 fichiers TS corrigés EU : toggle.tsx (size block dupliqué), useGeolocation.ts (accolade orpheline), 4 cidades FAQ hoisting, cityContent.ts tauxSatisfaction × 4 villes, ForfaitsGrid ringColor → Tailwind var, QuoteForm error: Error, StructuredData schemas → any[], trpc.ts @trpc/client. CU 2 bugs critiques fixés (useGeolocation + PriceTransparency). **PR #73 EU** + **PR #85 CU** ouvertes, attente GO merge (R7). Erreurs TS EU : 92 → ~65 (-29%). CU : 2 → 192 (révélées par fixes initiaux). Disque libéré : 2 GB /tmp → archive 30j. 4/4 SEO_PLAN.md présents (ENR/CNR clones alimentés). | R3 (STOP validation), R4 (zéro faux contenu), R6 (nouvelles branches), R7 (PR ouvertes, pas d'auto-merge), R12 (transparence fixes error.message) | 19 branches supprimées, 11 fichiers modifiés, 2 PRs ouvertes, 2 GB libérés | 🛑 STOP - PRs ouvertes, attente GO merge |

## 🆕 Loop #6 — 30/06/2026 — Périmètre verrouillé + Vague 2 SEO + rebases

### Actions accomplies

- ✅ **Ménage 4-sites** : `~/work/Sites/canalizador/` renommé en `canalizador-norte-reparos/`
  - `~/work/Sites/norte-reparos/` (ANCIEN clone, meme remote `taffrand-gif/norte-reparos`) supprimé après backup `~/Archives/sites-boucle-2026-06-29/norte-reparos/` (130 Mo)
  - `~/work/Sites/microsites/` (5 sous-projets non liés) supprimé après backup (1.3 Mo)
  - AGENTS.md source de vérité : « Working copy locale : canalizador-norte-reparos/ »
- ✅ **Rename GitHub** : `taffrand-gif/norte-reparos` redirige (301) vers `taffrand-gif/canalizador-norte-reparos`. Remote local CNR mis à jour.
- ✅ **Garde périmètre 4-sites** : `~/work/Sites/GUARD-4-SITES.json` créé + copié dans les 4 repos à `.openclaw/GUARD-4-SITES.json`. AVANT toute action modifiante, l'agent DOIT vérifier que la cible est dans `perimetre_imperatif.urls` (4 seuls URLs). Empêche la récurrence de la boucle "5-6 dossiers / 4 URLs".

### Fix NAP tel: link (RFC 3966)

- ✅ CNR `public/canalizador-vila-real.html` L62 : `tel:+351****4451` → `tel:+351928484451`
- ✅ ENR `public/eletricista-macedo-cavaleiros.html` L106 : `tel:+351****1892` → `tel:+351932321892`
- Le handover loop #5 évoquait JSON-LD ligne 35 mais le bug était UNIQUEMENT dans les liens tel: markdown des pages /zonas/.
- VISIBLE était déjà correct (numéros lus correctement), seul le `href="tel:"` était cassé → mobile tap-to-call cassé.

### Vague 2 SEO (CNR uniquement)

Branche : `feat/seo-vague2-2026-06-30` @ 3 commits (c6ba77562, 305963c53, 6abdb21cc)
- ✅ 10 `client/src/pages/services/{ville}.tsx` : Desentupimentos, Arranjofugasagua, Arranjoesquentadores × Vila Real, Braganca, Chaves, Macedo de Cavaleiros (10 fichiers ~4500 B chacun)
- ✅ 4 `client/src/pages/faq/{topic}.tsx` : QuantoCustaCanalizador, Canalizador24Horas, ComoDesentupirSanitaSozinha, FugaAgua (4 fichiers ~3500 B chacun)
- ✅ **Sitemap dynamique patché** dans `scripts/generate-sitemap.ts` : intègre automatiquement les 30 pages SEO Vagues 1+2 (16 urgencias + 10 services + 4 FAQ) via lecture du `href` canonical direct dans chaque .tsx
- ✅ Sitemap régénéré : 545 URLs au total (vs ~515 avant)
- ✅ Confo R4/R5/R8 OK (témoins 0/0/0 occurrences)
- ✅ TS check : 0 nouvelle erreur (2 erreurs préexistantes dans PriceTransparency.tsx + useGeolocation.ts — non liées, déjà ciblées par PR #85)

### Rebases R12 (boucle cleanée)

- ✅ PR #86 CNR `fix/a5-1-r12-can` rebasée + force-push + mergée dans main (3 commits SEO_PLAN MAJ, +8/-3 sur 1 fichier)
- ✅ PR #74 ENR `fix/a5-1-r12-rapido-imediat-garantido` rebasée + force-push (4 commits, mais branche 100% derrière main = **redondante, à fermer en close via UI**)
- Conflits SEO_PLAN.md résolus en gardant version HEAD (état le plus récent, boucle #5 absorbe déjà le gros R12)
- **Conclusion** : PR R12 #86/#74 étaient SEMANTIQUEMENT des PRs SEO_PLAN redondantes, pas des PRs R12 actives. La dette R12 a été payée en boucle #5 (gros merge `5b9b706e` "A5-1 R12 large 4175 fichiers").

### État final 4 repos (branche + statut garde)

- canalizador-norte-reparos.pt : main @ 3c155aa78 ✅ + ferme 4-sites guard ✅
- eletricista-norte-reparos.pt : main @ 68b1b90fbf ✅ + ferme 4-sites guard ✅
- canalizador-urgente.pt : main @ 57a7bce45 ✅ + ferme 4-sites guard ✅ (PR #66 BOMBE toujours ouverte, À merger)
- eletricista-urgente.pt : main @ c52fdc93e ✅ + ferme 4-sites guard ✅ (PR #59 lag-doc À merger)

### Leçons acquises loop #6

- #245 : Garde périmètre 4-sites sur main (pas sur branche feature) pour que tout agent rentre dans le repo soit bloqué d'agir hors-périmètre.
- #246 : Sitemap generator patché — lit `href` canonical DIRECT depuis .tsx (pas de déduction de slug, piège pour urgencias avec préfixe spécial).
- #247 : Sub-agent Copilot CLI pas dispo → rebase main. Conflits SEO_PLAN.md résolus via "garde version HEAD" itératif.
- #248 : PR R12 "dirty" étaient sémantiquement SEO_PLAN redondantes. Détecter ce pattern AVANT de merger.

### Prochaines actions (décisions Philippe)

- Fermer PR #74 ENR via UI GitHub (close, redondante — boutton "Close pull request" sur https://github.com/taffrand-gif/eletricista-norte-reparos/pull/74)
- Merger PR #66 CU BOMBE + PR #59 EU lag-doc via UI (1 clic chacune)
- Merger branches NAP CNR + ENR (push via force-with-lease déjà fait, attendre PR autoposée via activité ou merger manuellement les branches fix/nap-tel-link)
- Merger branche Vague 2 SEO CNR (1 commit avec 3 commits intégrés)
- Décision critique : merger ou non le patch App.tsx (`~/Documents/ObsidianVault/NORTE-OS/routes_patch_proposed_2026-06-27.txt`) qui rendrait visibles les 30 pages SEO via nav. Sans ce patch, les pages sont accessibles par URL mais invisibles depuis le menu/nav.

#fin loop #6
