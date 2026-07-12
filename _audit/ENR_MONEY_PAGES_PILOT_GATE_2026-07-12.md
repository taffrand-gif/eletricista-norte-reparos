# Gate — pilote anti-doorway ENR (10 pages money-intent)

Date : 2026-07-12
Branche : `fix/enr-diff-pilote`

## Pages

1. `/eletricista-quadro-eletrico-macedo-de-cavaleiros`
2. `/blog/quadro-eletrico-antigo-mogadouro-substituir`
3. `/eletricista-quadro-eletrico-peso-da-regua`
4. `/blog/reparacao-curto-circuito-alijo`
5. `/blog/reparacao-curto-circuito-mirandela`
6. `/quadro-eletrico-vila-real`
7. `/blog/reparacao-curto-circuito-vila-real`
8. `/blog/quadro-eletrico-antigo-alijo-substituir`
9. `/curto-circuito-macedo-de-cavaleiros`
10. `/curto-circuito-mirandela`

## Gate unicité

Script reproductible : `python3 tools/audit-money-pages-pilot.py`

Méthode : texte visible uniquement, balises/scripts/styles/nav/footer/bloc ressources retirés, normalisation des diacritiques, mots uniques de 4 caractères ou plus, stopwords PT retirés, intersection/union (Jaccard) pour les 45 paires.

Résultat : 45/45 paires < 50 %. Maximum = **40,1 %** entre les deux pages service `curto-circuito` de Macedo et Mirandela. Les 44 autres paires sont comprises entre 14,8 % et 31,9 %.

Matrice complète générée dans `/tmp/enr-money-pages-matrix.txt` pendant la validation. Le script affiche aussi `h1=1` et JSON-LD valide pour les 10 pages.

## Traçabilité des prix

Source rechargée au moment du gate : `/Users/admin/work/Sites/norte-os-marketing/prototypes/zonas-data.json`.

| Localité | Valeur source | Grille déplacement | Pages |
|---|---:|---:|---:|
| Macedo de Cavaleiros | Z1 | 15€ | 2 |
| Mirandela | Z2 | 25€ | 2 |
| Mogadouro | Z3 | 35€ | 1 |
| Alijó | Z4 | 45€ | 2 |
| Vila Real | Z4 | 45€ | 2 |
| Peso da Régua | Z5 | 55€ | 1 |

Mão-de-obra élec : **70€/h**, source repo `SEO_PLAN.md:35`. Phrase présente sur chaque page : « Orçamento por escrito antes de qualquer intervenção ».

Important : le gate source-of-truth a corrigé une valeur périmée du premier draft (Alijó et Vila Real étaient en Z5/55€ ; la source actuelle dit Z4/45€).

## Gate conformité et liens

Script reproductible : `python3 tools/verify-money-pages-pilot.py`

Résultats :
- 0 `mesma pessoa`, `sozinho/a`, `contacte-me`, formulation « je ».
- 0 service non fourni : solaire, photovoltaïque, wallbox/VE, climatisation, pompe à chaleur.
- 0 faux avis/rating/reviewCount/étoiles.
- 0 `streetAddress`.
- 0 vocabulaire d'intention `urgente`, `urgência`, `emergência`, `24h`, `7 dias por semana`, `resposta imediata/rápida` dans ce lot ENR.
- 22 hrefs internes distincts testés sur la production : **22/22 HTTP 200 direct**, URL finale identique, aucun 301/308/404.
- 10/10 pages : exactement 1 H1 et JSON-LD parseable.

## Validation projet

- `npm run lint` : **bloqué par la configuration préexistante** — ESLint 9 ne trouve pas `eslint.config.js` et ignore `.eslintignore`; aucune règle n'est exécutée.
- `npm run check` : **bloqué par 74 erreurs TypeScript préexistantes hors scope**, notamment `GoogleReviews.tsx`, `trpc.ts`, pages cidades et modules `server/_core` absents. Le lot ne modifie aucun `.ts`/`.tsx` applicatif.
- `npm run build` : **PASS**, Vite 1803 modules, `✓ built in 3.49s`, puis esbuild `Done in 14ms`.
- `git diff --check` : **PASS**.
