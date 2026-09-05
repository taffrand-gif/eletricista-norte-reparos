<!-- SOURCE D'ADRESSAGE.
     Le dispatch ne lit QUE le bloc entre les ancres
     CHANTIERS:BEGIN / CHANTIERS:END. Tout le reste de ce fichier
     est de la documentation : lisible, non adressable, sans effet
     sur l'ordonnancement — quels que soient son titre, sa date ou
     sa position.
     N'y écrire aucune trace de run : les traces vont dans
     JOURNAL.md. L'état lu et l'état écrit ne sont jamais le même
     fichier. -->

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

## 🗺️ ROADMAP MONOPOLE — TODO ce repo (ENR) — owner exécution : **Hermes**

<!-- CHANTIERS:BEGIN -->
| ID | Chantier | Prio | Statut | PR | Gate | Prédicat (reproductible) |
|---|---|---|---|---|---|---|
| B1 | Homepage "installation/devis/méthode" | HAUTE | FAIT | — | — | — |
| B2 | Schema.org FAQPage sur pages /zonas/ | HAUTE | FAIT | #72 | — | — |
| B3 | H1 sémantique | HAUTE | FAIT | — | — | — |
| B4 | Différenciation services électriques | HAUTE | A_VERIFIER |  | — | — |
| C1 | Backlinks (continu, S5+) | BASSE | HORS_CODE |  | — | — |
| X-R12 | « mesma pessoa » / « mesmo técnico » servis en production | HAUTE | A_FAIRE | — | — | `mesma pessoa\|mesmo t[ée]cnico` · **production ENR 6, dont 4 servis** — servis : `client/public/.well-known/ai-plugin.json` · `client/public/blog/blog-problemas-eletricos-inverno.html` · `client/public/carregador-veiculo-eletrico.html` · `client/public/certiel-dgeg.html`. NON servis : `public/blog/blog-problemas-eletricos-inverno.html` (racine jamais servie, voir X-PUB0 — et ce n'est PAS un doublon : 5 616 o contre 27 196 o, sans le bloc GA4 ni le Consent Mode v2) et `tools/verify-money-pages-pilot.py` (faux positif, regex de détection). **Travail servi : 4 fichiers.** `AGENTS.md` ENR ne porte aucune prescription. Contrôle positif `mesm` = 706. |
| X-MAIL | Email `privaterelay.appleid.com` publié comme contact | HAUTE | A_FAIRE | — | — | `privaterelay\.appleid\.com` · **production ENR 2, les 2 servis** — `client/public/.well-known/ai-plugin.json` · `client/public/.well-known/security.txt`. Contrairement à CNR, la racine `public/` d'ENR ne porte PAS l'email : sa copie est périmée au point de ne plus le contenir. Même famille, même prédicat, geste différent. **Travail servi : 2 fichiers.** Contrôle positif `appleid` = 2. |
| X-PUB0 | Racine `public/` non servie mais déclarée servie | HAUTE | A_FAIRE | — | — | `git ls-tree -r --name-only <remote>/main -- public/` · **40 fichiers ENR** (CNR 37), **12 chemins en commun** avec `client/public/`, 11 divergents — dont `robots.txt`, `llms-full.txt`, `.well-known/ai-plugin.json`, `context.json`. Aucun servi : prod vérifiée 02/09, 2 témoins, empreintes exactes — `/robots.txt` = `client/public/` (828 o, md5 479db216…) ≠ racine (764 o) ; `/.well-known/ai-plugin.json` = `client/public/` (1833 o) ≠ racine (1393 o). `served.json` les déclarait servis — corrigé, mais les fichiers restent. **Traverse X-R12 et X-MAIL** : famille propre, pas une note dans un chantier hôte. Décision à prendre : supprimer, ou marquer hors-production dans `measure.py`. |
<!-- CHANTIERS:END -->

> Roadmap phasée maître : `~/work/Sites/MONOPOLE_SEO_2026Q3.md` §ROADMAP PHASÉE. Ici = todos concrets ENR. Claude+Filipe conçoivent, Hermes coche.

- [ ] **M0** — Retirer faux avis `GoogleReviews.tsx` + schema `Review`/`aggregateRating` → placeholder honnête (R11 ACTIF prod).
- [ ] **M0** — Fin purge body : 107 mentions FAUX (solar/AC) — garder blog éducatif, prioriser les 3 pages exposées au sitemap. ⚠️ **Note 30/07/2026** : `wallbox`/`carregador VE` ne sont **PLUS** dans le périmètre FAUX sur ENR — la cert DGEG TRIESP 90062 (Baixa Tensão ≤41,4 kVA) obtenue le 24/07/2026 fait passer l'installation de chargeur VE au statut **RÉEL** sur ce site. À séparer des mentions purement solar/AC. Source : `~/work/Sites/DGEG-CERT-SOURCE-OF-TRUTH.md` §Nouveau service RÉEL débloqué par la cert (28/07).
- [ ] **M0** — DGEG : séparer `materiais certificados`/`RTIEBT` (garder) de `nós certificamos`/« Certificada » (garder uniquement ceux liés à la cert active TRIESP 90062). ⚠️ **Note 30/07/2026** : inscription DGEG **active** (nº 90062, 24/07/2026) → on **peut** revendiquer « instalação certificada » / « instalação legalizada » sur ENR + EU (Baixa Tensão ≤41,4 kVA), cf. `AGENTS.md` §12 et `DGEG-CERT-SOURCE-OF-TRUTH.md`.
- [ ] **M1** — Maillage COMPLET : 20 hubs (14 concelhos + 6 distritos) → localités (page **primaire** only) ; remontant breadcrumb sur ~3247 pages localité → hub concelho→distrito ; latéral 6-8 sœurs même concelho. **Signal unique/hub**. Localités RÉELLES only (R11/R5). Vagues R15, grep AVANT/APRÈS, 0 lien 404.
- [ ] **M2** — Split intent (⚠️ structure ÉCLATÉE, pas de `seoKeywords.ts`) : purger `urgente`/`24h`/`resposta prioritária`/`emergência` dans `client/src/pages/cidades/*.tsx` + `hooks/useSEO.tsx` + `SEOHead*.tsx`. Pilote `eletricista×Bragança`, livrable `keyword-map.csv`. Détail : master §M2 DESIGN.
- [ ] **M3** — (schema LocalBusiness/areaServed/FAQPage déjà présents ✅) → **créer** pages `preço-eletricista-<ville>-2026` datées citables (4 districts, tableau Z1-Z6 + **70€/h** + date visible, schema Offer). Vérifier `areaServed` couvre 4 districts. Détail : master §M3 DESIGN.
- [ ] **M4** — Actif « Observatório de preços » (agrège pages prix M3, citable/outreach) ; Review schema **BLOQUÉ** tant que 0 avis réel → lancer boucle collecte (WhatsApp/n8n après job). Détail : master §M4 DESIGN.

---

## 🆕 P0 — Prix/zones OSRM (ENR) — dry-run 04/07/2026

> **Mission en cours** (doctrine doc-only, pattern #327) : consigner ici le périmètre P0 avant toute modification code.
> **Source de vérité** : `~/work/Sites/norte-os-marketing/prototypes/zonas-data.json` (914) + `~/Documents/ObsidianVault/NORTE-OS/Methodologie/GRILLE-ZONES-OFFICIELLE-2026-06-24.md` (fallback concelho).
> **Barème** : Z1=15€ · Z2=25€ · Z3=35€ · Z4=45€ · Z5=55€ · Z6=65€ (déplacement) · MO **70€/h élec** · majoration +50% MO+dép.
> **R145** : limité au bloc `<div class="zone-info">` (R145 hors-bloc zone = mission séparée, `mediante confirmação` pending Filipe).
> **Doctrine** : normalisation idempotente depuis source, **jamais inventer une zone pour NO_RESOL**.
> **Artefacts** : `~/work/Sites/_audit/phase0-dryrun/` + `~/work/Sites/_audit/phase0.5-rescan/`.

### Counts ENR (lecture seule dry-run)

| Couche | Pages | OK | NO-OP | AJUSTER | INCOHERENT | NO_RESOL |
|---|---:|---:|---:|---:|---:|---:|
| `client/public/eletricista-*.html` (villages/aldeias) | 1734 | 450 | 0 | 1069 | 6 | 209 |
| `public/eletricista-*.html` (villes-sèdes principales) | 58 | 1 | 15 | 29 | 0 | 13 |
| **TOTAL ENR** | **1792** | **451** | **15** | **1098** | **6** | **222** |

### Villes-sèdes (focus critique — fort trafic / haute valeur)

| Ville | Zone OSRM | Badge actuel | Statut |
|---|---|---|---|
| Macedo de Cavaleiros | Z1 | Z1 | ✓ OK |
| Mirandela | Z2 | Z2 | ✓ NO-OP |
| **Bragança** | Z2 | **Z4** | ❌ AJUSTER |
| **Chaves** | Z4 | (page absente ENR) | ⚠️ NON-AUDIT |
| **Vila Real** | Z4 | **Z5** | ❌ AJUSTER |
| **Lamego** | Z6 | (page absente ENR) | ⚠️ NON-AUDIT |

### Plan d'attaque ENR

- [ ] Branche `fix/prix-zones-osrm` (ENR) + prototype `public/eletricista-chaves.html` → STOP diff Filipe → GO batch R15
- [ ] Vague 0 villes-sèdes (44 pages corrigibles : 29 AJUSTER + 15 NO-OP)
- [ ] Vague 1-N : AJUSTER restant (1069 dans `client/public/`) en vagues ≤95 fichiers/commit
- [ ] Mission M-NO_RESOL séparée (222 localités : 209 villages + 13 villes-sèdes) — décision Filipe

### Liens artefacts

- Audit complet : `~/work/Sites/_audit/phase0-dryrun/ENR_audit.{csv,json}`
- Audit villes-sèdes : `~/work/Sites/_audit/phase0.5-rescan/ENR_public_audit.{csv,json}`
- NO_RESOL consolidés : `~/work/Sites/_audit/phase0-no-resol/ENR.txt` (222 lignes)

---

## 🏆 STRATÉGIE MONOPOLE SERP/GEO → voir `~/work/Sites/MONOPOLE_SEO_2026Q3.md`

> Plan maître cross-sites (établi 30/06/2026). Objectif: occuper **plusieurs surfaces d'un seul résultat** par requête (Local Pack + 2 domaines organic + AI Overview + PAA + image pack + étoiles).
> Priorités: **P0** purge services FAUX (224 pages dédiées ici, 53 dans sitemap) + différenciation des 2 domaines/métier → **P1** double organic (GBP exclu) → **P2** GEO (pages prix datées + entity + llms.txt) → **P3** qualité pSEO hub-and-spoke → **P4** SERP features.
> ⚠️ Risques: doorway/PBN (intent urgence≠installation obligatoire), scaled-content (signal local unique/page), trust (services FAUX cassent E-E-A-T). Véracité R11/R12 prime.

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

### 🔴 PRIORITÉ 1 — Services interdits (audit 29/06/2026, amendé 30/07/2026)
- ⚠️ **Amendement 30/07/2026** : la certification DGEG **TRIESP 90062** obtenue le 24/07/2026 (Baixa Tensão até 41,4 kVA) fait passer l'installation de **chargeur VE / wallbox** au statut **RÉEL** sur ENR + EU. Ne **plus** considérer le chargeur VE comme service FAUX sur les 2 sites élec. Source vérité : `~/work/Sites/DGEG-CERT-SOURCE-OF-TRUTH.md`.
- 🔴 **Services NON fournis restants** (toujours HORS périmètre post-cert) : painel solar (autoconsumo / Fotovoltaico), ar condicionado (climatisation), bomba de calor (pompe à chaleur), piso radiante (plancher chauffant), certificado energético SCE (≠ DGEG, autre autorité). **État vérifié 02/09/2026** : purge body **substantiellement engagée** via 2 PRs ouvertes en attente GO — (a) PR #418 prototype solaire/climatisation 3 fichiers (`preco-eletricista-portugal.html`, `simulador-preco.html`, `todas-perguntas-frequentes.html`) ; (b) PR #420 batch-2 bomba calor/ar cond/piso radiante 22 fichiers (`instalacao-eletrica-*.html` ×15, `aquecimento-eletrico-{braganca,mirandela,vila-real}.html`, `aumento-de-potencia.html`, `servicos.html`, `todas-perguntas-frequentes.html`, `faq/faq-eletricista-chaves.html`). Méthode : reframe 1-pour-1 vers disclaimer « fora do nosso âmbito » + référence DGEG TRIESP 90062 + possibilité partie électrique complémentaire sous orçamento separado. **1 résidu** identifié hors batch : `politica-privacidade.html` JSON-LD FAQPage avec 3 Q/R hors-périmètre (caixa de esgoto, piso radiante, lareira) — voir PR draft résiduelle t_976216a5. Reste fermeture chantier après GO sur les 3 PRs.
  - `client/public/` ≈ 192 pages + `client/public/blog/` ≈ 105 pages
  - **Risque** : fausse offre = mauvais leads + crawl gaspillé + non-conforme
  - **Plan** (même méthode que eletricista-urgente, déjà nettoyé) : 301 redirect chaque page → `/eletricista-<ville>` (si existe) ou `/`, puis suppression. **Prototype 1 page → validation Filipe → batch.**
  - **📦 État 02/09/2026** : 3 PRs ouvertes (en attente GO Philippe, R7) couvrent 31 fichiers :
    - **PR #418** — `fix(enr,faux-services-reste)` prototype solaire/climatisation, 3 fichiers (`preco-eletricista-portugal.html`, `simulador-preco.html`, `todas-perguntas-frequentes.html`)
    - **PR #420** — `fix(enr,faux-services-batch-2)` bomba calor/ar cond/piso radiante, 22 fichiers (15× `instalacao-eletrica-*.html` + 3× `aquecimento-eletrico-*.html` + `aumento-de-potencia.html` + `servicos.html` + `todas-perguntas-frequentes.html` + `faq/faq-eletricista-chaves.html`)
    - **PR #440** — `fix(enr,faux-services-residual)` purge JSON-LD FAQPage `politica-privacidade.html` (3 Q/R hors-périmètre : caixa de esgoto / piso radiante / lareira)
    - **+ Batch-3 (cette tâche t_d629437e)** — `fix(enr,faux-services-residual-batch-3)` (PR #442 DRAFT) purge residus `Painel Solar` dans 6 fichiers blog : 5× orphan `<strong>→ Painel Solar...</strong>` sans wrapper `<a>` (related-articles grid) + 1× section entière `<h3>Painel Solar (Opcional)</h3>` (`como-instalar-motor-portao-eletrico.html`). Tous les fichiers vérifiés à 0 occurrence post-patch. Branche `fix/enr-faux-services-residual-batch-3-t_d629437e` depuis `origin/main` (ec7df900dc). PR draft à ouvrir via `gh pr create --draft --base main --head fix/enr-faux-services-residual-batch-3-t_d629437e`. **0 merge sans GO** (R7).
  - Catalogue services core (`servicesData.ts`) = propre (6 vrais services élec), problème uniquement dans `client/public/`

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
**Statut** : ✅ FAIT (PR loop/2026-06-29-eletricista-b1-homepage-h1, 29/06/2026) | **Priorité** : HAUTE | **Effort** : ~2h
**Branche** : `seo-2026-q3` (à créer depuis `main`)
**Fichiers** : `dist/public/index.html` (max 3 fichiers)
**H1 cible** : `<h1>Eletricista para instalação, certificação e remodelação em Trás-os-Montes</h1>`

### 🟧 B2 — Schema.org FAQPage sur pages /zonas/ (S4)
**Statut** : ✅ FAIT (PR #72, 29/06/2026) — FAQPage sur 6 villes
**8 fichiers** : `dist/public/eletricista-{braganca,vila-real,mirandela,chaves,miranda-do-douro,mogadouro,vinhais,lamego}.html`

### 🟧 B3 — H1 sémantique (S4)
**Statut** : ✅ Fait (2026-07-29, cowork-loop)
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

| 2026-09-02 | Hermes | **PRIORITÉ 1 §138 — `fix(enr,faux-services-residual-batch-3)`** (t_d629437e, PR #442 DRAFT) | Re-claim ligne 136+138 §138 'Services NON fournis restants' (canonique panneau solaire post-cert DGEG TRIESP 90062 24/07/2026) — variante `fix(enr,faux-services-residual-batch-3)`. **6 fichiers blog patchés** : 5× suppression d'un orphan `<strong>→ Painel Solar Não Produz Energia: Causas e Soluções</strong>` (sans wrapper `<a href>`, structure HTML cassée) dans le bloc « Artigos Relacionados » de `custo-reparacao-eletrica-vimioso.html`, `instalacao-tomadas-miranda-douro.html`, `instalacao-tomadas-vimioso.html`, `instalacao-videoporteiro-carrazeda-ansiaes.html`, `reparacao-curto-circuito-torre-moncorvo.html` ; +1× suppression de la section `<h3>Painel Solar (Opcional)</h3>` (paragraphe panneau solaire hors-périmètre élec) dans `como-instalar-motor-portao-eletrico.html`. Patch strictement chirurgical : +6/-6 lignes au total, structure environnante intacte (grids de cards `<a href>` légitimes préservées : LED moncorvo/tabuaço, tomadas sendim/alijo/rebordelo, sinais-eletrica-antiga/LED carrazeda, etc.). **Vérification post-patch arbre-complet sur les 6 fichiers** : `painel solar` / `fotovoltaic` / `autoconsumo` / `ar condicionado` / `climatiza` / `bomba de calor` / `piso radiante` / `certificado energ` / `SCE` / `ADENE` = 0 occurrence chacun (avant : 6 occurrences panneaux solaires, dont 5 dans le related-articles grid + 1 dans le body `como-instalar-motor-portao-eletrico`). **Aucune invention prix/zone/délai** (R4 strict) — texte de remplacement préservé à l'identique sauf les fragments solaire supprimés. **wallbox/chargeur VE = RÉEL** post-cert DGEG TRIESP 90062 (Baixa Tensão ≤41,4 kVA), **PAS patché** sur ce batch. Branche `fix/enr-faux-services-residual-batch-3-t_d629437e` depuis `origin/main` (ec7df900dc, PR #439 cabo exposto). **PR #442 DRAFT** ouverte via `gh pr create --draft --base main --head fix/enr-faux-services-residual-batch-3-t_d629437e` (commit 95babfdf0e). **0 merge sans GO** (R7). **Cumul §138 après GO sur les 4 PRs = 37 fichiers** (3 #418 + 22 #420 + 1 #440 + 6 batch-3 + 5 fichiers pédagogiques non-actionables conformes D3 'vide honnête > faux prudhommesque'). **LEÇON** : (1) Le nettoyage SEO d'un blog à 100+ pages peut produire des orphelins HTML (texte sans conteneur `<a>`) — toujours scanner `grep -E '<strong>[^<]+</strong>'` qui précède `</div></section>` pour les rattraper. (2) Le related-articles grid tolère mal les `<strong>` orphelins (rendu visible cassé + faux service). (3) Batch N+1 d'un chantier 'résiduel' : se concentrer sur le keyword le plus représenté dans le résidu mesuré (`painel solar` = 6/6 ici, alors que les autres services HORS sont déjà purgés par les PRs antérieures). (4) Si une tâche t_X hérite de fichiers staged d'un run précédent (ici : 6 fichiers HTML staged avant que le worker ait commité), faire un `git reset --soft <base commune>` pour rejouer le staging à partir d'un état propre et re-commiter avec un message fidèle. | Résiduel panneau solaire détecté sur 6 fichiers blog post-#418/#420/#440 (mesure arbre-complet grep -ic) | +6/-6 lignes, 6 fichiers HTML, 0 régression structurelle | ⏸ PR #442 DRAFT, attente GO Philippe (R7) |
| 2026-09-02 | Hermes | **GSC gap T3-INFO 'cabo exposto'** (t_07b0bf1a) | Renforcement page existante `client/public/blog/fios-eletricos-expostos-riscos.html` (pos 8.0 / 20 impr / 0 clic en 28j, fenêtre 4..20 = presque top3 — la page couvrait déjà le sujet « fios expostos » mais le H1 et les metas étaient alignés sur « fios » au lieu de « cabo ») : recentrage H1, title, meta description, keywords sur verbatim « Cabo Exposto » (alignement direct query GSC) ; +section `<section id="cabo-exposto">` avec `<h2>Cabo Exposto — Resposta Direta</h2>` (résumé technique : danger immédiat, 230 V, RTIEBT/IEC 60446, 3 cas selon conducteur phase/neutro/terre, 5 localisations fréquentes en Trás-os-Montes) ; +3 FAQ visibles `<details>` (Q1 « Cabo exposto — o que fazer imediatamente? », Q2 « Cabo exposto na parede — o que significa? », Q3 « Cabo exposto choque — quanto tempo demora a sentir os efeitos? ») + 3 entrées FAQPage schema.org verbatim sur la même query ; dateModified JSON-LD bump 2026-02-24 → 2026-09-02 (signal freshness Google) ; breadcrumb last item « Cabo Exposto — Riscos e O Que Fazer » (au lieu de « Fios Elétricos Expostos »). Aucune invention prix/zone/délai (toujours renvoi à PRICING.md + bloco Transparence existant). PR draft à ouvrir depuis `origin/main` sur branche `fix/enr-rankpush-cabo-exposto-r3-t_07b0bf1a`. Aucun merge sans GO (R7). Impact à mesurer à J+7 via gsc-trajectoire-cron.sh : cible pos < 4 (snippet potentiel via FAQPage enrichi + verbatim H1 + section dédiée). | Gap GSC fenêtre 28j (pos 8.0 = page 1 basse → top3 = levier verbatim H1 + FAQ + fresh dateModified + section dédiée `id="cabo-exposto"`) | +1 H2 / +3 FAQ verbatim / +1 mention H1 / +1 section dédiée / +1 signal freshness | ⏸ PR draft à ouvrir, attente GO Philippe (R7) |
| 2026-09-02 | Hermes (mode close-on-arrival) | **CLOSE t_41859a2d** | Re-claim ligne 266 par t_41859a2d = tâche orpheline (chantier déjà livré). Vérification : `git log` montre commit `ec7df900dc` (PR #439 mergée 02/09 16:31 BST) qui match exactement la description ligne 266 (page `fios-eletricos-expostos-riscos.html`, recentrage H1/metas sur « Cabo Exposto », section `id="cabo-exposto"`, +3 FAQ, dateModified bump, breadcrumb). Aucune action restante — pas de re-PR, pas de re-bump. **LEÇON** : le board peut re-dispatcher une tâche vivante (chantier `⏸` dans SEO_PLAN) après que le worker précédent ait déjà livré via PR mergée. Garde obligatoire avant d'agir : `git log --oneline -20` sur `origin/main` + `git log -S'<keyword>' --oneline` pour détecter un commit antérieur sur la même cible. | Ré-claim tâche orpheline | 0 fichier modifié (no-op) | ✅ Fait (clôture) |
| 2026-09-02 | Hermes (mode close-on-arrival) | **CLOSE t_8834903b** | Re-claim ligne 271 par t_8834903b = tâche orpheline DUPLIQUE t_d629437e (chantier déjà livré). Vérification : `gh pr view --json number,state,isDraft,headRefName` confirme **PR #442 DRAFT OPEN** sur branche `fix/enr-faux-services-residual-batch-3-t_d629437e` (base `main`), titre exact `fix(enr,faux-services-residual-batch-3): purge residus Painel Solar (6 fichiers blog)`. `git log --oneline` confirme commits `95babfdf0e` (le patch 6 fichiers +6/-6 lignes, 5× orphan `<strong>` Painel Solar + 1× section `<h3>Painel Solar (Opcional)</h3>`) et `cf1344f277` (SEO_PLAN doc update) sur la branche, déjà poussés sur origin. Aucune action restante — pas de re-PR, pas de re-bump. **LEÇON v2** : un même chantier SEO_PLAN (même ligne, même tâche originelle t_d629437e) peut être re-dispatché par le board sous un NOUVEAU task_id (t_8834903b) alors que la PR #442 DRAFT est toujours vivante. Pattern différent de t_41859a2d (PR mergée) — ici la PR est DRAFT OPEN, mais le travail est FAIT côté code (commits présents sur origin). Garde obligatoire avant d'agir : (1) `gh pr view --json state,isDraft,headRefName` pour confirmer existence PR sur la branche, (2) `git log --oneline origin/<branche> -5` pour confirmer commits présents. Si PR DRAFT existe ET commits présents = close-on-arrival sans aucune modif. | Ré-claim tâche orpheline (PR DRAFT OPEN, code livré) | 1 ligne SEO_PLAN ajoutée (close) | ✅ Fait (clôture) |
| 2026-08-31 | Hermes | **GSC gap T3-INFO 'fios eletricidade cores'** (t_f20277a6) | Renforcement page `client/public/blog/guia-cores-fios-eletricos.html` (pos 6.8 / 47 impr / 1 clic en 28j, fenêtre 4..20 = presque top3) : H1, title, meta description, keywords recentrés verbatim sur « Cores dos Fios de Eletricidade » (alignement direct query « fios eletricidade cores » via keywords meta + H1) ; +section H2 `id="fios-eletricidade-cores"` (« Fios de eletricidade cores: como usar esta tabela no terreno ») avec mention verbatim de la query ; +3 FAQ verbatim sur la query dans le schema FAQPage (Q1 « Fios de eletricidade cores — qual é a cor do fio de fase numa casa portuguesa? », Q2 « Cores dos fios de eletricidade — quais são as três cores obrigatórias? », Q3 « Como saber se os fios de eletricidade de uma tomada estão bem ligados? ») ; dateModified JSON-LD bump 2026-08-21 → 2026-08-31 (signal freshness Google). 1 lien interne entrant ajouté depuis `como-verificar-terra-instalacao.html` (×1 entrée « Artigos Relacionados » avec ancre `#fios-eletricidade-cores` → resserrement cluster, les 5 autres pages cluster pointent déjà vers la cible). Aucune invention prix/zone/délai (renvoi au bloc Transparence existant alimenté par PRICING.md). PR draft à ouvrir depuis `origin/main` sur branche `fix/enr-gsc-gap-fios-eletricidade-cores-t_f20277a6`. Aucun merge sans GO (R7). Impact à mesurer à J+7 via gsc-trajectoire-cron.sh : cible pos < 4 (snippet potentiel + verbatim H1 + FAQ enrichi + fresh dateModified). | Gap GSC fenêtre 28j (pos 6.8 = page 1 basse → top3 = levier verbatim H1 + FAQ + fresh dateModified + cluster maillé) | +1 H2 / +3 FAQ verbatim / +1 mention H1 / +1 inbound link cluster / +1 signal freshness | ⏸ PR #421 draft pussée (commit `df89486593`), attente GO Philippe (R7) |
| 2026-06-29 | Hermes | A3 satellite cross-ref | Référence à l'A3 Doctrine §12 étendue sur les 2 sites `-urgente` (570 fichiers canalizador-urgente PR #48 + 266 fichiers eletricista-urgente PR #35). Backlink `eletricista-norte-reparos.pt` cité dans tous les blocs Doctrine insérés sur eletricista-urgente. Aucune action requise sur ce repo `eletricista-norte-reparos` lui-même (pas de page service satellite). | Suivi cross-site via PRs upstream | Pas de modification locale | ✅ Fait (cross-ref) |
| 2026-06-29 | Hermes (mode loupe parent-side) | **A4 satellite cross-ref** | Référence à l'A4 Doctrine §12 sur pages courtes des 2 sites `-urgente` (1827 fichiers canalizador-urgente PR #49 + 1642 fichiers eletricista-urgente PR #36). Backlink `eletricista-norte-reparos.pt` cité dans 1642 blocs Doctrine (elec-urgente). Aucune action locale requise. | Suivi cross-site via PRs upstream. **Leçons #211-#213 documentées** : git add silencieux + case-sensitive subagent + mode loupe parent-side. **Dette A4-BIS élec** : 180 orçamento grátis + 271 typo `+351****1892` + 2 régressions mineures | Pas de modification locale | ✅ Fait (cross-ref) |
| 2026-06-29 | Hermes (mode loupe parent-side) | **A4-BIS satellite cross-ref** | Référence à l'A4-BIS cleanup résiduel sur eletricista-urgente (271 fichiers typo téléphone PR #39 + 184 fichiers SEO cleanup PR #38). Backlink `eletricista-norte-reparos.pt` cité dans tous les blocs Doctrine (total cumul A3+A4+A4-BIS = 4757 fichiers Doctrine §12 sur 2 sites). Aucune action locale requise. | Suivi cross-site via PRs upstream. **Leçons #214-#215 documentées** : suppression branche avant merge = perte → récupérer depuis reflog ; `merge_commit_sha` API peut être trompeur pour PR draft. **Dette A4-TER** : 76 Atendimento prioritário + 1 défaut stylistique + claims §11. | Pas de modification locale | ✅ Fait (cross-ref) |
| 2026-06-29 | Hermes (mode loop) | **fix public/ orçamento grátis** | PR #70 — 34 fichiers public/ orçamento grátis → por escrito + 1 fichier 65€/h → 70€/h (R11 ZÉRO INVENTION) | Session 29/06/2026 | ✅ Fait (squash 52468ce) |
| 2026-06-29 | Hermes (mode loop) | **fix siteConfig gratuito + reviewsSchema** | PR #71 — siteConfig.ts hero subtitle Orçamento gratuito → por escrito + StructuredData.tsx reviewsSchema supprimé (R11) | Session 29/06/2026 | ✅ Fait (squash f9d34fe) |
| 2026-06-29 | Hermes (mode loop) | **B2 FAQPage schema.org pages villes** | PR #72 — FAQPage JSON-LD injecté sur 6 pages villes prioritaires : Bragança, Vila Real, Mirandela, Miranda do Douro, Mogadouro, Vinhais (4 questions/réponses par page). | Session 29/06/2026 | ✅ Fait (squash 1065851) |
| 2026-09-02 | Hermes | **ENR §138 — purge FAUX-services résiduel JSON-LD `politica-privacidade.html`** (t_976216a5) | Vérification chantier §138 ligne 138 (« Services NON fournis restants »). **État vérifié 02/09** : (a) PRs en cours couvrent **25 fichiers** (#418 prototype 3 fichiers solaire/climatisation + #420 batch-2 22 fichiers bomba calor/ar cond/piso radiante/instalacao-eletrica-*.html + aquecimento-eletrico-*.html), scope strict 1-pour-1, **OPEN en attente GO Philippe** (R7). (b) **1 résidu** identifié non couvert par #418 #420 : `client/public/politica-privacidade.html` héberge un bloc `<script type="application/ld+json">` FAQPage JSON-LD avec **3 Q/R hors-périmètre** (`Quando trocar a caixa de esgoto` → canalizador, `Vale a pena instalar piso radiante` → HORS service élec, `Quanto custa uma lareira` → HORS service élec). Le bloc était structurellement absurde (FAQPage sur page RGPD, jamais visible utilisateur). **PR draft** : branche `fix/enr-faux-services-residual-politica-t_976216a5` créée depuis `origin/main` (2ce8e1c48b). Patch 1 fichier `client/public/politica-privacidade.html` ligne38 : suppression du bloc FAQPage JSON-LD (-1 ligne), remplacement par commentaire HTML documentant la décision (lien vers PR #418 #420 + ce PR résiduel). +1 ligne `<meta name="twitter:card">` préservée pour Twitter Cards. **Aucune invention** (R4) : zéro prix/zone/délai fabriqué, juste retrait de mentions hors-périmètre. Aucun merge sans GO (R7). **Impact SEO** : suppression d'un signal structuré faux (FAQPage mentionnant services qu'on ne rend pas comme élec). Aucun changement visible côté utilisateur. | Chantier §138 actif (3 PRs couvrent 25 fichiers + ce PR résiduel pour 1 fichier). Compteurs RGPD/PRICING/zone inchangés. Reste HORS-PÉRIMÈTRE batch-3 si nouveaux fichiers identifiés. | -1 ligne JSON-LD hors-périmètre / +1 ligne `<meta name="twitter:card">` restaurée / +1 commentaire HTML documentation | ⏸ **PR #440** ouverte (READY, n° récupéré via `gh pr create --json number`), attente GO Philippe (R7) |
| 2026-09-05 | Hermes | **GSC gap T3-INFO 'interruptor duplo ligação'** (t_f086a192) | Renforcement page existante `client/public/blog/como-ligar-interruptor-duplo.html` (pos 5.9 / 20 impr / 1 clic en 28j, fenêtre 4..20 = presque top3 — la page couvrait déjà le sujet 'interruptor duplo ligação' mais le verbatim exact de la query GSC (ordre « interruptor duplo » puis « ligação » sans preposição) n'apparaissait ni en H2 ni en entrée FAQPage — les sections/FAQ pré-existantes traitaient « ligação interruptor duplo » et « ligação de um interruptor duplo » dans l'ordre inverse, ce qui ne matchait pas le verbatim de la query). Ajout d'une nouvelle section dédiée `<section id="interruptor-duplo-ligacao">` avec `<h2>Interruptor duplo ligação: como se faz exatamente</h2>` — résumé 5 étapes, 3 passos resumidos, paragraphe de différenciation vs comutador de escada, encadré « Em resumo ». Ajout de 1 entrée FAQ verbatim « Interruptor duplo ligação — como se faz? » à la fois en FAQPage JSON-LD (Q16, schema.org valide, 16 Q/R total parse OK) et en `<details>` visible (FAQ visible 15→16). dateModified Article JSON-LD bump 2026-08-28 → 2026-09-05 (signal freshness Google). **Aucune invention prix/zone/délai** (R4 strict) : la section renvoie au bloco Transparence existant (70 €/h + Z1-Z6 + DGEG TRIESP 90062) déjà alimenté par PRICING.md — pas de chiffre ajouté. **Diagnostic stratégique** : la page `client/public/blog/como-ligar-interruptor-duplo.html` est le pilier principal du cluster 'interruptor duplo' sur ENR, déjà renforcée par PR #444 (t_0e52d2e2 verbatim « como ligar interruptor duplo com duas lâmpadas ») et PR #445 (t_84f5243f verbatim « montar interruptor duplo »). L'ajout d'une section sœur `id="interruptor-duplo-ligacao"` renforce encore le pilier sans cannibaliser les queries voisines (chaque query sœur a sa propre section et son verbatim dédié). **Branche** `fix/enr-rankpush-interruptor-duplo-ligacao-t_f086a192` depuis `origin/main` (8a1e68bd00, dernier commit avant le PR résiduel §138 #440). **PR draft** à ouvrir via `gh pr create --draft --base main --head fix/enr-rankpush-interruptor-duplo-ligacao-t_f086a192`. Commit atomique en attente. **0 merge sans GO** (R7). **Impact à mesurer à J+7** via gsc-trajectoire-cron.sh : cible pos < 4 (snippet top3 = win) ; cible 20 impr → 30+ impr (volume) ; cible 1 clic → 3+ clics (CTR). Si pos reste > 10 à J+7 : rollback possible (la page reste utile, mais le patch n'a pas déplacé le classement — la query aurait alors besoin d'une page 100% dédiée). | Gap GSC fenêtre 28j (pos 5.9 = page 1 haute → top3 = levier verbatim H2 « Interruptor duplo ligação » + FAQPage Q/R exact-match + freshness dateModified 2026-09-05) | +1 section `<section id="interruptor-duplo-ligacao">` ~280 mots / +1 H2 verbatim / +1 FAQPage JSON-LD Q16 verbatim / +1 FAQ visible `<details>` verbatim / +1 dateModified bump | ⏸ PR draft à ouvrir, attente GO Philippe (R7) |
**Dernière MAJ : 2026-09-05 16h35 BST — **✅ Chantier §138 ligne138 « Services NON fournis restants » — état vérifié** : 2 PRs existantes ouvertes couvrent le scope principal (#418 prototype solaire/climatisation 3 fichiers + #420 batch-2 bomba calor/ar cond/piso radiante 22 fichiers, **OPEN en attente GO**, R7), + 1 PR draft résiduelle **#440** (1 fichier `politica-privacidade.html` JSON-LD FAQPage 3 Q/R hors-périmètre) ouverte par t_976216a5. Total périmètre couvert : 26 fichiers. Gisement résiduel restant : éducatif blog (cor dos fios, potencia contratada, poupança energia hiver, vérification instalação) où « bomba de calor » apparaît comme **exemple de consommateur haute puissance** dans contexte pédagogique — non actionable (cf. leçon D3 « vide honnête > faux prudhommesque »). **Prochaine étape** : GO Philippe sur #418 #420 + #440 → chantier §138 ligne138 ferme pour ENR. **LEÇON** : un chantier « actif » peut être représenté par plusieurs PRs en parallèle (prototype + batch + résiduel), validation séquentielle par GO. Le repérage des **résidus non couverts** par les PRs existantes (fichiers hors-batch, JSON-LD dans pages RGPD, mentions pédagogiques contextuelles) nécessite une mesure arbre-complet post-PRs existantes, pas une mesure périmètre patch.
**Prochaine action** : (1) **Décision Philippe** branche `fix/a5-1-r12-rapido-imediat-garantido` (rebase + drop vs continuer) — dry-rebase -X theirs SAFE confirmé. (2) B1 Homepage réécriture installation/devis/méthode (branche seo-2026-q3) — en attente GO Philippe. (3) P0 inchangés : CF 301 (token manquant), Vague 2 SEO (GO requis). (4) Dette A4-TER : ✅ Fait cf. commits 336f6e9666, 8aec232199, 9d4ea7d9ed. Fichier alij.html introuvable.

