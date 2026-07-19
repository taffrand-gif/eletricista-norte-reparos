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

---

## Leçon #ENR-AF-01 (19/07/2026) — ENR villes answer-first V1 = 15 villes (top-traffic), stackée sur #215

**Contexte** : mission `feat/villes-answer-first` (PR DRAFT à créer, worktree `/tmp/enr-af`). 
Stackée sur `fix/prix-villes-v2` (PR #215 = grille prix + R145 harmonisés sur 987 fichiers), 
PAS sur `main`, pour éviter les conflits avec l'ordre de merge validé dans 
`~/work/Sites/_audit/MERGE-QUEUE-CHECK-2026-07-18.md` v2 (#215 passe d'abord, feat/villes-af ensuite).

**Scope décision** : brief dit "~15 fichiers". Tenté 33 (toutes villes-sedes de `cidadesProximas.ts`), 
réduit à 15 villes top-traffic (Bragança + Macedo + Mirandela + Vila Real + Chaves + Vinhais + Mogadouro + 
Torre de Moncorvo + Lamego + Peso da Régua + Alfândega da Fé + Vila Flor + Vimioso + Miranda do Douro + 
Freixo de Espada à Cinta). Choix conservateur — toute élargissement à 33 = vague 2.

**Patron du bloc** (calqué sur CU #181 / EU #169, sans `role="answer"`) :
```html
<p data-p1="answer-first" style="background:#fff5e0;border-left:4px solid #FF6B35;
padding:18px 22px;margin:0 0 24px 0;border-radius:8px;font-size:16px;
line-height:1.6;color:#333;max-width:920px">
Em {Cidade}, a deslocação é {preco}€ (Zona {n}, {km} km de Macedo de Cavaleiros). 
Mão de obra 70 €/h, orçamento por escrito. 
Contacto: <a href="tel:+351932321892" style="...">932 321 892</a>.
</p>
```

**Source des données (post-#215, AUCUNE invention)** :
| Source | Donnée | Justification |
|---|---|---|
| `precos-zonas.json` racine | zone | Source of truth (verrouillé R12/PRICING.md) |
| PRICING.md §Déplacement | preço (Z1=15, Z2=25, Z3=35, Z4=45, Z5=55, Z6=65) | Verifié cohérent avec zone |
| H1 page (post-#215) | zone finale confirmée par preço | Prix 55€ → Z5 (et pas Z4 même si OG dit Z4) |
| og:description page (post-#215) | km OSRM | Mesure réelle, déjà validée TomTom |

**Divergences #215 détectées et résolues** (5 villes, OG ≠ H1) :
- Chaves : H1=Z5/55€, OG=Z4/55€ → preço confirme Z5 (Z4=45€ ≠ 55€)
- Torre de Moncorvo : H1=Z4/45€, OG=Z3/45€ → preço confirme Z4
- Peso da Régua : H1=Z6/65€, OG=Z5/65€ → preço confirme Z6
- Alfândega da Fé : H1=Z3/35€, OG=Z2/35€ → preço confirme Z3
- Miranda do Douro + Freixo : H1=Z6/65€, OG=Z5/65€ → preço confirme Z6
Règle : **Z retenue = celle dont le preço matche PRICING.md**. Loggé pour mission dédiée 
"ENR-OG-zone-recalibrate" ultérieure.

**Tel littéral (directive CEO 18/07, abroge lesson SAB antérieure)** :
`tel:+351932321892` (jamais `****1892`, JAMAIS copié du fichier voisin). 
Codée en constante dans le script, JAMAIS lue depuis un fichier.
Vérification gate 2 : `git diff origin/main..HEAD -- client/public/ | grep -c '^+.*\*\*\*\*1892' = 0`.

**Diff** : 15 fichiers, 16 insertions (1 insertion/ville × 14 Template B, 2 insertions × 1 Template A 
= Bragança où la structure est différente). 0 deletion. 0 modification du contenu existant.

**Template mixing détecté** (cf leçon #314 P0.5 EU) :
- Template A (`<main class="wrap">`) : 1 fichier = Bragança (PR #215 n'a PAS touché cette page)
- Template B (`<main>` + `<section class="urgencia-ia-citable">`) : 14 fichiers (déjà harmonisés par #215)
Insertion idempotente via 2 regex complémentaires, `git checkout --` testé en pre-batch.

**Gates (sortie propre)** :
| # | Description | Résultat |
|---|---|---|
| G1 | 15/15 fichiers avec bloc contendo preço + 932 321 892 + Zona + km | **15/15** ✅ |
| G2 | diff `****1892` = 0 | **0** ✅ |
| G3 | blocos `****1892` = 0 | **0/15** ✅ |
| G4 | claims interditos (R11/R145/certif/role=answer) = 0 | **15/15 OK** ✅ |
| G5 | tel littéral canonique présent | **15/15** ✅ |

**Doctrine verrouillée respectée** :
- R12 (70 €/h + orçamento por escrito) ✅
- R145 (0 délai chiffré, 0 "mediante confirmação") ✅
- R11 (0 "garantimos", "garantia") ✅
- §12 (a nossa equipa / nous) ✅
- PRICING.md §NAP (tel littéral `+351932321892`) ✅
- Ruling Filipe 2026-07-08 (0 certificação/certificado/ficha) ✅
- R7 (PR + GO avant merge) — PR DRAFT, attente STOP validation

**Hors scope (à traiter en missions dédiées)** :
1. **5 divergences H1 ≠ og:description** (Chaves, Torre Moncorvo, Peso Régua, Alfândega, Miranda, Freixo) : 
   l'OG description contient encore l'ancienne Z. Mission dédiée "ENR-OG-zone-recalibrate" recommandée.
2. **« mediante confirmação » + tel masqué `****1892`** dans les blocs urgencia-ia-citable 
   existants (hérités de #215). Hors scope answer-first (R145 purge = mission séparée).
3. **18 autres villes-sedes** (Bragança-Miranda à Lamego, Murça, Valpaços, Alijó, etc.) : 
   vague 2 si CEO confirme (33 total - 15 = 18 restantes).

**Reproduction** : voir `~/work/Sites/eletricista-norte-reparos/scripts/p1/inject_answer_first_enr.py` 
(à créer si CEO demande reproductibilité inter-sessions).
