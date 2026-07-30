# AUDIT-ENR-INSTAL-VILLES-2026-07-30

**Tâche** : t_c5866298 — Enrichir 17 instalacao-eletrica-{concelho}.html (≥800 mots, FAQPage 5-6 Q)
**Branche** : wt/t_9be541cf.B-instal-eletrica-enr-villes
**Date** : 2026-07-30
**Status** : PR draft — review-required (pas de merge)

## 1. Pre-flight doublons — verdict DOORWAY

Analyse de 17 fichiers cible. Verdict des 2 cas suspects :

### 1.1 `instalacao-eletrica-alfandega-fe.html` vs `instalacao-eletrica-alfandega.html`

- **Verdict** : DOORWAY (page variante sans sémantique propre)
- Preuves :
  - Slug `-fe` est un suffixe historiquement ajouté par erreur
  - Contenu sémantiquement identique (Alfândega da Fé)
  - Page absente du sitemap canonique, non référencée en maillage interne
- **Action** : canonicalisé vers `/instalacao-eletrica-alfandega` + `noindex, follow`

### 1.2 `instalacao-eletrica-macedo-cavaleiros.html` vs `instalacao-eletrica-macedo.html`

- **Verdict** : DOORWAY (variante longue vs canonique courte)
- Preuves :
  - `macedo-cavaleiros` est la forme développée, `macedo` est la forme canonique (référencée en pilier racine, sitemap, maillage)
  - Contenu sémantiquement identique, seul le suffixe diffère
  - Doublon = signal doorway pour Google (cf M19)
- **Action** : canonicalisé vers `/instalacao-eletrica-macedo` + `noindex, follow`

### 1.3 Bilan

- 17 fichiers cible → **14 fichiers canoniques** à enrichir + **2 doorway** à canonicaliser + 1 hub (`instalacao-eletrica-completa` skip)
- Les 2 doorway gardent leur contenu (430 mots + FAQPage 2 Q résiduelle) mais ne sont plus indexables ; Googlebot suit le canonical vers la version canonique.

## 2. Mesure avant/après

| Fichier | Type | Mots avant | Mots après | FAQ avant | FAQ après | H2 final | hasCred | Canonical | Robots |
|---|---|---:|---:|---:|---:|---:|---:|---|---|
| instalacao-eletrica-alfandega-fe.html | DOORWAY | 430 | **430** | 2 | **2** | 8 | 1 | `/instalacao-eletrica-alfandega` | `noindex, follow` |
| instalacao-eletrica-alfandega.html | CANONIQUE | 600 | **1478** | 2 | **6** | 11 | 1 | `/instalacao-eletrica-alfandega` | `index, follow` |
| instalacao-eletrica-braganca.html | CANONIQUE | 400 | **1253** | 2 | **6** | 13 | 1 | `/instalacao-eletrica-braganca` | `index, follow` |
| instalacao-eletrica-chaves.html | CANONIQUE | 402 | **1259** | 2 | **6** | 13 | 1 | `/instalacao-eletrica-chaves` | `index, follow` |
| instalacao-eletrica-lamego.html | CANONIQUE | 403 | **1257** | 2 | **6** | 13 | 1 | `/instalacao-eletrica-lamego` | `index, follow` |
| instalacao-eletrica-macedo-cavaleiros.html | DOORWAY | 430 | **430** | 2 | **2** | 8 | 1 | `/instalacao-eletrica-macedo` | `noindex, follow` |
| instalacao-eletrica-macedo.html | CANONIQUE | 602 | **1459** | 2 | **6** | 11 | 1 | `/instalacao-eletrica-macedo` | `index, follow` |
| instalacao-eletrica-miranda-douro.html | CANONIQUE | 601 | **1460** | 2 | **6** | 11 | 1 | `/instalacao-eletrica-miranda-douro` | `index, follow` |
| instalacao-eletrica-mirandela.html | CANONIQUE | 400 | **1237** | 2 | **6** | 13 | 1 | `/instalacao-eletrica-mirandela` | `index, follow` |
| instalacao-eletrica-mogadouro.html | CANONIQUE | 594 | **1439** | 2 | **6** | 11 | 1 | `/instalacao-eletrica-mogadouro` | `index, follow` |
| instalacao-eletrica-regua.html | CANONIQUE | 394 | **1252** | 2 | **6** | 13 | 1 | `/instalacao-eletrica-regua` | `index, follow` |
| instalacao-eletrica-torre-moncorvo.html | CANONIQUE | 601 | **1444** | 2 | **6** | 11 | 1 | `/instalacao-eletrica-torre-moncorvo` | `index, follow` |
| instalacao-eletrica-valpacos.html | CANONIQUE | 597 | **1424** | 2 | **6** | 11 | 1 | `/instalacao-eletrica-valpacos` | `index, follow` |
| instalacao-eletrica-vila-flor.html | CANONIQUE | 418 | **1258** | 2 | **6** | 13 | 1 | `/instalacao-eletrica-vila-flor` | `index, follow` |
| instalacao-eletrica-vila-real.html | CANONIQUE | 421 | **1270** | 2 | **6** | 13 | 1 | `/instalacao-eletrica-vila-real` | `index, follow` |
| instalacao-eletrica-vinhais.html | CANONIQUE | 400 | **1233** | 2 | **6** | 13 | 1 | `/instalacao-eletrica-vinhais` | `index, follow` |

**Résumé** : 14 pages canoniques, mots 1233-1478 (toutes ≥800), FAQ 6 (toutes ≥5), 5 nouveaux H2 synonymes insérés, hasCredential 1 élément sur chaque. 2 doorway canonicalisées.

## 3. Doctrine respectée

- **R11** : pas d'invention. Faits vérifiables (TRIESP 90062, Lei 14/2015, Decreto-Lei 72/2020, Despacho 13/2022, RC 50.000 €)
- **R12** : pas de délai chiffré d'urgence hors zone-info (utilisé «mediante confirmação por telefone»)
- **R145** : pas d'horaire chiffré («mediante confirmação por telefone» dans Q6)
- **R5** : géo-neutre. Pas de `streetAddress` précise (LocalBusiness déjà OK)
- **hasCredential** : 1 élément (EducationalOccupationalCredential — Registo profissional DGEG — TRIESP n.º 90062)
- **A2 DGEG-CITABILITE-MARKETING** : Q&A DGEG answer-first (Q1 cite Lei + DGEG + RC 50.000 €)
- **Pricing canonique** : 70€/h + majoration +50% (105€/h), deslocação Z1-Z6 (15-65€), 41,4 kVA, 50.000 € RC
- **Chargeur VE** : mentionné uniquement dans Q4 — conforme à leçon #441 (REAL post-cert 24/07/2026)

## 4. Build TS

- `npx tsc --noEmit` : **0 nouvelle erreur** (erreurs pré-existantes dans `client/src/pages/*.tsx` non touchés, dans `server/*` non touchés)
- Tous les fichiers modifiés sont des `.html` statiques pré-rendus (pas de TS impacté)

## 5. Acceptance

- [x] Pre-flight rapport doublons : 2 doorway confirmés et canonicalisés
- [x] 14 pages canoniques : body ≥800 mots (min 1233, max 1478)
- [x] FAQPage 6 Q avec Q DGEG answer-first (cf A2)
- [x] hasCredential = 1 élément (cohérent avec pilier racine)
- [x] 5 nouveaux H2 synonymes insérés (Contexto Local, Tipos, Certificação, Custos, Cobertura)
- [x] `npx tsc --noEmit` : 0 nouvelle erreur

## 6. Fichiers modifiés (16)

```
client/public/instalacao-eletrica-alfandega-fe.html       (doorway — canonical fix)
client/public/instalacao-eletrica-alfandega.html          (enrichi 600→1478 mots)
client/public/instalacao-eletrica-braganca.html           (enrichi 400→1253 mots)
client/public/instalacao-eletrica-chaves.html             (enrichi 402→1259 mots)
client/public/instalacao-eletrica-lamego.html             (enrichi 403→1257 mots)
client/public/instalacao-eletrica-macedo-cavaleiros.html  (doorway — canonical fix)
client/public/instalacao-eletrica-macedo.html             (enrichi 602→1459 mots)
client/public/instalacao-eletrica-miranda-douro.html      (enrichi 601→1460 mots)
client/public/instalacao-eletrica-mirandela.html          (enrichi 400→1237 mots)
client/public/instalacao-eletrica-mogadouro.html          (enrichi 594→1439 mots)
client/public/instalacao-eletrica-regua.html              (enrichi 394→1252 mots)
client/public/instalacao-eletrica-torre-moncorvo.html     (enrichi 601→1444 mots)
client/public/instalacao-eletrica-valpacos.html           (enrichi 597→1424 mots)
client/public/instalacao-eletrica-vila-flor.html          (enrichi 418→1258 mots)
client/public/instalacao-eletrica-vila-real.html          (enrichi 421→1270 mots)
client/public/instalacao-eletrica-vinhais.html            (enrichi 400→1233 mots)
```

## 7. Reproduction

Scripts :
- `/Users/admin/.hermes/kanban/workspaces/t_c5866298/enrich_instal_eletrica.py` — script principal (CORRIGÉ : `answer` Q6 interpolé en f-string)
- `/Users/admin/.hermes/kanban/workspaces/t_c5866298/fix_faq_leak.py` — script correctif qui réécrit uniquement la FAQPage (1 patch pour 14 fichiers)
