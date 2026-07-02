# MISSION HERMES P0.5 — ENR (eletricista-norte-reparos) — 2026-07-02

> Suite du batch P0 prix/zones OSRM (branche `fix/prix-zones-osrm`, PR draft #114).
> Audit CEO complet : `~/work/Sites/PLAN_ACTION_CEO_2026-07-02.md`. Arbitrages Q1-Q4 du
> `BRIEF_HERMES_PRIX_ZONES_OSRM.md` §4bis restent valables (idempotent, pas de dist/, dry-run).

## Constat (grep vérifié + triangulé leçon #298, 02/07)

| KO sur ce repo | Compte |
|---|---|
| Badge `data-zone` ≠ zonas-data.json | **71** |
| Badge ≠ JSON-LD "Deslocação Zona X" (page interne contradictoire) | **218** |
| JSON-LD prix deslocação ≠ grille | **14** |
| Pages sans badge mais zone/prix FAUX dans body | à mesurer au dry-run (ex. torre-de-dona-chama "Zona 1: 20€", vrai Z2/25€) |

Cas témoins : `eletricista-vila-real.html` : badge Z4/45€ mais title/meta/OG/H1/JSON-LD(Offer 55€)/FAQ/body TOUS restés Z5/55€ — cas type de la normalisation partielle.

## Cause racine
Le batch P0 a normalisé le **badge zone-info seul**. Title, meta, OG, H1, body,
FAQ et JSON-LD sont restés sur l'ancienne grille → pages internes contradictoires.

## Tâche P0.5 — normalisation PAGE ENTIÈRE (même branche)

Pour chaque page localité (source unique : `~/work/Sites/norte-os-marketing/prototypes/zonas-data.json`, Z1=15€ … Z6=65€) réécrire ENSEMBLE :
1. `<title>`, `meta description`, `og:title`, `og:description`
2. H1 + badge `zone-info` + `data-zone`
3. Toute mention body `Zona X` / `deslocação XX€` / "Deslocação Zona X: XX€"
4. JSON-LD : `priceRange`, l'Offer **Deslocação** (price + description), réponses FAQPage
5. FAQ `<details>` (montants + zone)

⚠️ Ne PAS toucher les Offers JSON-LD de **service** (110€/150€/280€ = prix prestation, pas deslocação).
⚠️ Taux horaire : 65€/h canalização · 70€/h eletricidade. Majoration +50% s'applique aussi à la deslocação.
⚠️ R145 : zone-block only (Q3). Purge globale "mediante confirmação" = mission séparée (décision D2 Filipe pendante).

## Procédure (R3/R12)
1. Dry-run : re-mesurer les 71 + 218 KO avec résolution slug (strip préfixes service) → liste exacte.
2. Prototype **1 page** (choisir un cas contradictoire, ex. `eletricista-vila-real.html`) → diff → **GO Filipe (D5)**.
3. Vagues ≤100 fichiers, grep AVANT/APRÈS par vague, commits `fix(enr): P0.5 vague N`.
4. Vérif finale : badge≠json = 0, badge≠JSON-LD = 0 → PR draft → ready for review.

## Après merge (rappel file ROI master)
P0.3 faux avis → P0.1 résidus → M1 maillage → M2 différenciation intent.
