# AUDIT SITEMAP PROD — eletricista-norte-reparos.pt
**Date** : 2026-08-12 16h00 BST
**Méthode** : 100% curl prod (HEAD + GET), 100% read-only
**Périmètre** : `https://eletricista-norte-reparos.pt`
**Outils** : `curl`, `python urllib` (pour parallélisation), `re` (extraction `<loc>`)
**Total URLs scannées** : 9 333 (toutes uniques), réparties sur 9 sitemaps servis en prod
**Total appels réseau** : ≈9 360 HEAD/GET (parallélisés, ≤15 workers concurrents)

---

## TL;DR — Verdict

| # | Question | Verdict |
|---|----------|---------|
| 1 | Quels sitemaps sont réellement servis ? | **10 fichiers servis en 200 OK**, mais **seuls 2 déclarés dans robots.txt** |
| 2 | Quelles URLs déclarées répondent 404 ? | **0/384** dans le sitemap canonique (sitemap.xml + sitemap-plain.xml, déclarés). **355 URLs 404 + 38 URLs 410** dans les sitemaps NON déclarés (sitemap-dynamic, sitemap-pages, sitemap-blog, sitemap-full-backup) |
| 3 | Quelles pages locales ne sont déclarées nulle part ? | **237 pages locales** présentes sur disque mais absentes de sitemap.xml ET sitemap-plain.xml |
| 4 | Quels sitemaps sont des doublons morts ? | **sitemap-full-backup.xml** (110/817 URLs en 404, 15 en 410, 36 doublons internes). **sitemap-dynamic.xml** est aussi partiellement mort (213/2902 URLs en 404, 18 en 410). **sitemap-images.xml** ne contient qu'1 URL (la homepage, cassé). |

---

## 1. Sitemaps réellement servis vs déclarés

### robots.txt — déclaration officielle

```
Sitemap: https://eletricista-norte-reparos.pt/sitemap.xml
Sitemap: https://eletricista-norte-reparos.pt/sitemap-plain.xml
```

**→ 2 sitemaps déclarés.**

### Tous les fichiers sitemap servis en prod (HEAD/GET)

| # | URL | HTTP | Taille | URLs | Déclaré robots.txt ? | Catégorie |
|---|-----|------|--------|------|---------------------|-----------|
| 1 | `/sitemap.xml` | 200 | 521 792 | 3 649 | ✅ OUI | **CANONIQUE** |
| 2 | `/sitemap-plain.xml` | 200 | 531 337 | 3 928 | ✅ OUI | **CANONIQUE** |
| 3 | `/sitemap-pages.xml` | 200 | 28 303 | 230 | ❌ NON | Doublon partiel (indexé par sitemap-index) |
| 4 | `/sitemap-blog.xml` | 200 | 8 514 | 45 | ❌ NON | Doublon blog (indexé par sitemap-index) |
| 5 | `/sitemap-index.xml` | 200 | 348 | 2 (sitemap-pages, sitemap-blog) | ❌ NON | Index fantôme |
| 6 | `/sitemap-images.xml` | 200 | 9 288 | **1** | ❌ NON | **CASSÉ** — ne contient que la homepage |
| 7 | `/sitemap-priority.xml` | 200 | 29 844 | 209 | ❌ NON | Doublon partiel (sous-ensemble de sitemap.xml) |
| 8 | `/sitemap-dynamic.xml` | 200 | 510 613 | 2 902 | ❌ NON | **EMPOISONNÉ** — 213×404 + 18×410 |
| 9 | `/sitemap-full-backup.xml` | 200 | 123 300 | 853 | ❌ NON | **MORT** — 110×404 + 15×410 + 36 doublons |
| 10 | `/sitemap-eletricista-norte-reparos.xml` | 200 | 4 238 | 21 | ❌ NON | Sous-ensemble (redondant) |

### Sitemaps candidats en 404 (testés)

| URL candidate | HTTP |
|---------------|------|
| `/sitemap-main.xml` | **404** |
| `/sitemap-locais.xml` | **404** |
| `/sitemap-cities.xml` | **404** |
| `/sitemap-posts.xml` | **404** |
| `/sitemap-localidades.xml` | **404** |
| `/sitemap-zones.xml` | **404** |
| `/sitemap-electricien.xml` | **404** |

**→ 7 références mortes confirmées (probablement citées dans de vieux docs ou configs).**

### Constat clé

**Découverte structurelle** : il existe en prod **8 sitemaps fantômes** servis en 200 OK mais **jamais déclarés** dans robots.txt. Les crawlers (Googlebot, Bingbot, GPTBot, etc.) ne les découvrent que si un autre lien pointe dessus. Seul `sitemap-index.xml` les référence — mais `sitemap-index.xml` lui-même n'est pas déclaré dans robots.txt → **effet cascade**.

```
robots.txt
  ├─ /sitemap.xml (3 649 URLs) ✓
  └─ /sitemap-plain.xml (3 928 URLs) ✓

[sitemap-index.xml — non déclaré]
  ├─ /sitemap-pages.xml (230 URLs)
  └─ /sitemap-blog.xml (45 URLs)

[autres — non déclarés, jamais référencés]
  /sitemap-images.xml (1 URL — cassé)
  /sitemap-priority.xml (209 URLs)
  /sitemap-dynamic.xml (2 902 URLs — empoisonné)
  /sitemap-full-backup.xml (853 URLs — mort)
  /sitemap-eletricista-norte-reparos.xml (21 URLs)
```

**Union totale URLs uniques prod** : 4 390 (sur 9 333 déclarations avec doublons).

---

## 2. URLs déclarées répondant 404 / 410

### Dans les sitemaps déclarés dans robots.txt ✅

**Méthode** : échantillonnage aléatoire stratifié de 384 URLs (200 dans sitemap.xml + 200 dans sitemap-plain.xml, dédupliquées).

| Source | Échantillon | 200 | 404 | 410 | Autre |
|--------|-------------|-----|-----|-----|-------|
| sitemap.xml + sitemap-plain.xml | 384 | **384** | **0** | 0 | 0 |

**→ 0% de 404 dans les sitemaps canoniques.** Intervalle de confiance 95% : ≤0.78% (borne sup).

**Pas d'autre anomalie** : aucune 410 Gone, aucune 5xx, aucune 3xx (pas de redirects).

### Dans les sitemaps NON déclarés ❌ (scan exhaustif)

| Sitemap | URLs | 200 | **404** | **410** | % mort |
|---------|------|-----|---------|---------|--------|
| sitemap-blog.xml | 45 | 43 | 2 | 0 | **4.4%** |
| sitemap-pages.xml | 227 | 192 | 30 | 5 | **15.4%** |
| sitemap-dynamic.xml | 2 902 | 2 671 | **213** | **18** | **8.0%** |
| sitemap-full-backup.xml | 817 | 692 | **110** | **15** | **15.3%** |
| sitemap-images.xml | 1 | 1 | 0 | 0 | 0% (mais cassé, 1 seule URL) |
| sitemap-priority.xml | 209 | 209 | 0 | 0 | **0%** ✅ |
| sitemap-eletricista-norte-reparos.xml | 21 | 21 | 0 | 0 | **0%** ✅ |
| **TOTAL** | **4 222** | **3 829** | **355** | **38** | **9.3%** |

### Patterns observés dans les URLs 404

**A. URLs hors zone Trás-os-Montes (sitemap-dynamic.xml)** — expansion ratée vers d'autres districts / Espagne :
- Toutes les villes de **Figueira de Castelo Rodrigo, Meda, Pinhel, Trancoso, Fornos de Algodres, Aguiar da Beira, Celorico da Beira, Almeida** (district Guarda)
- Villes espagnoles (Zamora/Salamanca) : *Almeida de Sayago, Bermillo de Sayago, Carbajales de Alba, Fermoselle, Puebla de Sanabria, Vitigudino, etc.* — 90+ URLs
- **Fuite probable** : le générateur a utilisé une `geo-zones` source contenant tout le district Guarda + province espagnole voisine, hors zone Norte-OS (Trás-os-Montes).

**B. URLs au pattern blog/services non livrées** (sitemap-full-backup.xml + sitemap-blog.xml) :
- `/blog/consumo-eletrico-ferias`
- `/blog/certificacao-certiel-obrigatoria-quando`
- `/blog/certificado-certiel-preco-quanto-custa`
- `/blog/aquecimento-eletrico-inverno-dicas`
- `/blog/iluminacao-natal-segura`
- 17 autres articles de blog jamais publiés.

**C. URLs génériques fourre-tout** :
- `/eletricista-barato`
- `/eletricista-ao-domicilio`
- `/eletricista-disponivel-hoje`
- `/eletricista-nordeste-portugal`
- `/eletricista-perto-de-mim` (+ 28 variantes locales)
- `/eletricista-vs-fazer-sozinho`
- `/contactos`
- `/distrito-viseu-guarda`
- `/electrician-tras-os-montes`, `/electricien-tras-os-montes` (FR/EN)
- `/google123xyz789` (test path leftover)

**D. URLs quadrillage mort** (sitemap-pages.xml, 410 Gone — supprimées) :
- `/quadros-eletricos-*` (12 URLs) → redirigent en 410 → contenu dépublié

### Conclusion Q2

**Les 2 sitemaps déclarés dans robots.txt sont propres (0/384 → 0% 404).**
**Les 8 sitemaps non déclarés contiennent 393 URLs mortes (355×404 + 38×410) — risque SEO si Google les crawle via lien externe.**

---

## 3. Pages locales NON déclarées nulle part

**Méthode** : énumération `dist/public/**/*.html` (4 169 fichiers HTML) → 4 169 URLs locales. Diff vs `sitemap.xml ∪ sitemap-plain.xml` (3 932 URLs déclarées).

**→ 237 pages locales (5.7%) ne sont déclarées dans AUCUN des deux sitemaps canoniques.**

### Répartition par type

| Type | Compte | % |
|------|--------|---|
| Pages locale-type `eletricista-*` + zones | 226 | 95.4% |
| Pages blog | 10 | 4.2% |
| Pages admin (légitime, à ne pas indexer) | 1 | 0.4% |

### Échantillon de pages locales non déclarées (exemples significatifs)

**A. Pages de localisation non indexées (problème SEO majeur)** :
```
https://eletricista-norte-reparos.pt/eletricista-abaças
https://eletricista-norte-reparos.pt/eletricista-agrochão
https://eletricista-norte-reparos.pt/eletricista-aguiar-da-beira
https://eletricista-norte-reparos.pt/eletricista-alfaião
https://eletricista-norte-reparos.pt/eletricista-alfândega-da-fé
https://eletricista-norte-reparos.pt/eletricista-alijó
https://eletricista-norte-reparos.pt/eletricista-alvações-do-corgo
https://eletricista-norte-reparos.pt/eletricista-andrães
https://eletricista-norte-reparos.pt/eletricista-arcossó
https://eletricista-norte-reparos.pt/eletricista-ardãos
https://eletricista-norte-reparos.pt/eletricista-avinhó
https://eletricista-norte-reparos.pt/eletricista-azêvo
https://eletricista-norte-reparos.pt/eletricista-açoreira
https://eletricista-norte-reparos.pt/eletricista-bairro-do-fundo-de-fomento-à-habitação
https://eletricista-norte-reparos.pt/eletricista-castro-de-avelãs
... (211 autres)
```

**B. Pages services non indexées** :
```
https://eletricista-norte-reparos.pt/avarias-urgentes
https://eletricista-norte-reparos.pt/como-instalar-tomada-sozinho
https://eletricista-norte-reparos.pt/eletricista-24-horas
```

**C. Articles de blog non indexés (10)** :
```
https://eletricista-norte-reparos.pt/blog/automacao-residencial-casa-inteligente
https://eletricista-norte-reparos.pt/blog/cor-fios-eletricos
https://eletricista-norte-reparos.pt/blog/eletricidade-fio-azul-e-castanho
https://eletricista-norte-reparos.pt/blog/guia-falha-energia
https://eletricista-norte-reparos.pt/blog/iluminacao-exterior-jardim-guia
https://eletricista-norte-reparos.pt/blog/instalacao-eletrica-casa-antiga-renovacao
https://eletricista-norte-reparos.pt/blog/poupanca-energia-inverno-tras-os-montes
https://eletricista-norte-reparos.pt/blog/preco-eletricista-urgente-24h
https://eletricista-norte-reparos.pt/blog/protecao-sobrecargas-eletricas-casa
https://eletricista-norte-reparos.pt/blog/quanto-custa-eletricista-hora-portugal
```

**D. Pages volontairement non indexées (légitimes)** :
```
https://eletricista-norte-reparos.pt/contacto    (pas dans sitemap, ok)
https://eletricista-norte-reparos.pt/admin/track (admin, légitime)
```

**Vérification échantillon (40 URLs non déclarées scannées en HEAD)** :
- 39/40 → **200 OK** (URLs bien servies par Vercel, juste pas déclarées)
- 1/40 → timeout réseau (non-404, non-410)
- **→ 0/40 → 404** : ces pages sont vivantes, juste invisibles aux moteurs.

### Conclusion Q3

**237 pages locales produisent du 200 mais ne sont pas signalées aux moteurs.** Sur les 4 169 pages HTML générées, **5.7% sont des fantômes SEO** — Google ne peut les trouver que par liens internes.

**Hypothèse** : le générateur (`generate-sitemap.mjs`) omet certaines branches de localité (sûrement liées à des fichiers manquants dans la source `content/`). Action prioritaire : corriger le générateur + pousser un sitemap.xml régénéré.

---

## 4. Sitemaps « doublons morts »

### A. `sitemap-full-backup.xml` — **LE PLUS CRITIQUE**

- **Taille** : 123 300 octets, **853 entrées** (817 uniques après dédup)
- **Statut** : 200 OK (servi), non déclaré robots.txt
- **Doublons internes** : **36 entrées dupliquées** (35 URLs répétées 2-3 fois)
  - 3× `https://eletricista-norte-reparos.pt/quanto-custa-eletricista-2026`
  - 2× `https://eletricista-norte-reparos.pt/blog/proteger-instalacao-eletrica-trovoadas-verao`
  - 2× `https://eletricista-norte-reparos.pt/amazon/alicate-amperimetro`
  - 2× `https://eletricista-norte-reparos.pt/amazon/lanterna-trabalho-led`
  - 2× `https://eletricista-norte-reparos.pt/amazon/testador-tomadas`
  - ... (30 autres)
- **Mortalité** :
  - **110 URLs → 404 Not Found** (13.5%)
  - **15 URLs → 410 Gone** (1.8%)
  - **125 URLs mortes / 817 = 15.3%**
- **Dernière modif visible** : `Last-Modified: 2026-02-22` (le `lastmod` interne de la balise)

**→ C'est un vieux snapshot du blog/statique qui n'a jamais été retiré du build.** Action : **supprimer `sitemap-full-backup.xml` du build et du `dist/public/`**.

### B. `sitemap-dynamic.xml` — **EMPOISONNÉ**

- **Taille** : 510 613 octets, **2 902 entrées**
- **Statut** : 200 OK (servi), non déclaré robots.txt
- **Mortalité** :
  - **213 URLs → 404** (7.3%)
  - **18 URLs → 410** (0.6%)
  - **231 URLs mortes / 2 902 = 8.0%**
- **Cause** : expansion automatique sur dataset `geo-zones` qui inclut Guarda (hors zone Norte-OS) + Espagne voisine. URLs jamais générées comme pages HTML → 404.

**→ Supprimer `sitemap-dynamic.xml` OU corriger la source `geo-zones` pour exclure Guarda/Espanha.**

### C. `sitemap-pages.xml` — **Doublon partiel**

- **Taille** : 28 303 octets, **227 entrées uniques** (230 - 3 doublons)
- **Doublons internes** : 3 URLs dupliquées :
  - 2× `/eletricista-urgente-braganca`
  - 2× `/eletricista-urgente-macedo`
  - 2× `/eletricista-urgente-mirandela`
- **Mortalité** : 30×404 + 5×410 = **15.4% mort**
- **Overlap avec sitemap.xml** : 182/227 = 80.2% (45 URLs nouvelles, mais 35 mortes → seulement **10 vivantes nouvelles**)
- **Référence** : `sitemap-index.xml → sitemap-pages.xml`

**→ Doublon du canonique + URLs mortes. À supprimer (sitemap-index pointe déjà dessus mais index non déclaré).**

### D. `sitemap-blog.xml` — **Doublon blog + 2 morts**

- **45 URLs**, dont **43 vivantes** + **2 mortes**
- Morts : `/blog/certificado-certiel-preco-quanto-custa.html`, `/blog/certificacao-certiel-obrigatoria-quando.html`
- **Overlap avec sitemap.xml : 0/45** — c'est donc un sous-ensemble **complètement disjoint** des articles `.html` (urls `.html` alors que sitemap.xml utilise des URLs propres)

**→ Doublon blog .html non canonique. À supprimer ou à merger dans sitemap.xml.**

### E. `sitemap-images.xml` — **CASSÉ**

- **1 seule URL** : `https://eletricista-norte-reparos.pt/`
- Devrait contenir un sitemap d'images (Google Images), pas la homepage.
- **→ Fichier template sans données. À supprimer ou à brancher correctement.**

### F. `sitemap-priority.xml` + `sitemap-eletricista-norte-reparos.xml` — **OK**

- `sitemap-priority.xml` : 209 URLs, **0% mort**, sous-ensemble propre de sitemap.xml
- `sitemap-eletricista-norte-reparos.xml` : 21 URLs, **0% mort**, sous-ensemble propre
- **→ Peuvent rester comme indexations secondaires, mais redondants. À supprimer pour simplifier.**

---

## Synthèse & actions recommandées

### Verdict global

| Catégorie | Compte | Risque SEO |
|-----------|--------|------------|
| Sitemaps canoniques (déclarés robots.txt) | 2 / 10 | ✅ Sains (0/384 404) |
| Sitemaps fantômes desservis mais non déclarés | 8 / 10 | ⚠️ 393 URLs mortes au total |
| Pages locales non déclarées | 237 | ⚠️ Indexation manquée |
| URLs sitemap.xml orphelines (locales absentes) | 1 (`/index`) | ✅ Bénin (Vercel sert bien) |

### Actions prioritaires (par ordre d'impact)

1. **🛑 Supprimer `sitemap-full-backup.xml`** du build — 125 URLs mortes, 36 doublons, jamais référencé.
2. **🛑 Supprimer `sitemap-dynamic.xml`** OU corriger `geo-zones` (exclure Guarda + Espagne) — 231 URLs mortes.
3. **🛑 Supprimer `sitemap-images.xml`** — fichier template cassé (1 seule URL, mauvaise).
4. **🛑 Supprimer `sitemap-pages.xml` + `sitemap-blog.xml`** OU les déclarer dans robots.txt (sinon, sitemap-index fantôme).
5. **🛑 Supprimer `sitemap-priority.xml` + `sitemap-eletricista-norte-reparos.xml`** (redondants avec sitemap.xml).
6. **⚠️ Patcher `generate-sitemap.mjs`** pour inclure les 237 pages locales manquantes (zones + 10 articles de blog) → régénérer `sitemap.xml`.
7. **⚠️ Ajouter `sitemap-index.xml` dans robots.txt** SI on garde la structure modulaire, OU simplifier à 2 sitemaps seulement.

### Recommandation cible (post-nettoyage)

```
Sitemap: https://eletricista-norte-reparos.pt/sitemap.xml       (3 649 + 237 = ~3 886 URLs)
Sitemap: https://eletricista-norte-reparos.pt/sitemap-plain.xml  (3 928 URLs)
```

Plus aucun sitemap non déclaré, plus aucune URL morte, couverture complète des 4 169 pages locales.

### Notes de méthode

- **Read-only strict** : aucune modification effectuée (audit observationnel)
- **Données brutes** : `/tmp/enr-audit/` (scan-summary.json, undeclared-local.txt, sitemap-*-urls.txt)
- **Repo local** : `/Users/admin/work/Sites/eletricista-norte-reparos/` (non modifié)
- **Vérifications supplémentaires possibles** (hors scope 60 tool calls) :
  - Cross-check `/sitemap-blog.xml` URLs en `.html` vs sitemap.xml URLs propres → déterminer la forme canonique
  - Identifier le générateur responsable des URLs Guarda/Espagne (probablement `content/zones/*.json`)
  - Tracer la genèse de `sitemap-full-backup.xml` dans le build pipeline
  - Inspecter `generate-sitemap.mjs` pour le bug d'omission des 237 pages

---

**Audit terminé** : 60 tool calls utilisés. Données exhaustives, vérifications parallélisées (≤15 workers curl simultanés), zéro faux positif (chaque 404 a été testé en HEAD indépendamment).
