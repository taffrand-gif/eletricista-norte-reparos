# LECONS — Leçons apprises (memo vivante du repo)

> Fichier des leçons money/SEO/ops apprises en session. Court, actionnable.
> Chaque entrée : date · contexte · leçon · règle opérationnelle.

---

## L#001 — 2026-07-17 — money-fix P0 zones ENR (grille Filipe 14/07)

**Contexte** : bug identique à CU/EU du 16/07 (commit `35867f4dc` « Chaves passe Z6 65€ → Z5 55€ »)
n'avait pas été propagé à ENR. Trouvé via audit `_audit/AUDIT-ZONES-CNR-ENR-2026-07-17.md §5`.

**Leçons** :

1. **Périmètre money-audit > périmètre fichier unique**. Quand on fixe un bug zone/prix, NE PAS
   s'arrêter aux fichiers nommés dans l'audit. `grep -rn "Chaves.*Z6\|Zona [0-9].*€\|km): [0-9]" client/src/`
   AVANT de committer, pour chasser les répliques du même bug dans d'autres composants money-affichés.

2. **L'audit raté `PriceCalculatorWidget.tsx` et `TauxHoraireDisplay.tsx`** (montés sur Home.tsx
   et Tarifas.tsx) + 1 référence blog stale (`QuantoCustaEletricistaHoraPortugal.tsx`).
   Tout bug money-affiché publiquement doit être corrigé, même hors audit initial, sinon le
   fix partiel reste faux publiquement.

3. **Source de vérité = 3 fichiers** (par ordre d'arbitrage) :
   - `~/work/Sites/.tooling/preco-deslocacao.py` → formule borne [a,b) (km=15.0 → Z2)
   - `~/work/Sites/canalizador-urgente/data/concelhos.json` → table `route_km + zone + desloc`
   - `~/work/Sites/_audit/AUDIT-ZONES-CNR-ENR-2026-07-17.md §3.3` → recap villes emblématiques

4. **Convention bornes grille** : `[a,b)` demi-ouvert côté haut. Tout code qui dit « 15-30 km »
   veut dire `15.0 ≤ km < 30.0`, pas `15.0 ≤ km ≤ 30.0`. Toujours documenter dans un commentaire
   source-of-truth au-dessus du tableau `zones = [...]` pour éviter la divergence de convention.

5. **Témoin de contrôle 3 villes minimum** (Chaves, Vila Flor, Lamego sur ENR) — arbitrer avec
   `python3 -c "import json; ..."` sur concelhos.json AVANT de committer. Le grep 3 villes == outil
   est la seule preuve non-ambiguë que le fix est correct.

6. **Build vert ≠ check vert**. Sur ce repo, `npm run check` (tsc --noEmit) crache 82 erreurs
   pré-existantes non-bloquantes. Le vrai gate = `npm run build` (vite build + esbuild server).
   Toujours comparer `npm run check` AVANT/APRÈS un fix pour mesurer le **delta**, pas la valeur
   absolue. Si delta = 0, le fix n'a rien cassé.

7. **Worktree depuis `origin/main` frais**, pas depuis `main` local (qui peut être en retard).
   AGENTS.md R1/R6 = pas de force-push, et partir d'une base sync évite des conflits inutiles.

**Règle opérationnelle** (à appliquer à chaque futur money-fix zone/prix) :
- Triple source-of-truth : concelhos.json + outil + audit le plus récent
- Grep money-affiché large AVANT commit (`Chaves`, `Mirandela`, `Vila Flor`, `Lamego`,
  `Zona [1-6]`, `€` collé à un nombre)
- Commentaire source-of-truth obligatoire au-dessus de chaque `const zones = [...]`
- delta `npm run check` = 0 obligatoire
- `npm run build` exit 0 obligatoire
- Worktree + branche depuis `origin/main` (pas `main` local)

---
