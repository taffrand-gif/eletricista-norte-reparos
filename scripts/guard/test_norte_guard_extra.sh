#!/bin/bash
# Test local du garde-fou lot 10 : témoin positif (chaque règle déclenche) + témoin négatif (page conforme = 0 BLOCK) + lecture seule (hash avant/après).
set -u; D=$(cd "$(dirname "$0")" && pwd); T=$(mktemp -d "${TMPDIR:-/tmp}/guardtest.XXXXXX"); fail=0
mk(){ mkdir -p "$T/$1"; }
mk bad; mk good
cat > $T/bad/index.html <<'H'
<html><head><link rel="canonical" href="https://x.pt/"><script type="application/ld+json">{"@type":"LocalBusiness","priceRange":"30€–100€/h"}</script></head><body>
<p>Na Staff-Seekers / Norte Reparos. Equipamento Fluke e Megger. Garantia 2 anos. Orçamento Gratuito. Deslocação 25 € de deslocação.</p>
<p>Z1: 15 EUR; | **Z2** | 25 €. Acréscimo +50 % à noite. 65 €/h. Seguro de responsabilidade civil 500.000€. Garantimos atenção imediata à sua chamada.</p>
<p>€10.000+ investido. Limpeza de fossa séptica. <a href="/nao-existe">x</a> Distância desde Macedo: 200 km por estrada.</p></body></html>
H
cat > $T/good/index.html <<'H'
<html><head><link rel="canonical" href="https://x.pt/"></head><body><p>Mão de obra 70 €/h (09h–18h) ou 100 €/h, deslocação 30 € ou 50 €. Cada hora iniciada é devida. Não há orçamento gratuito quando a deslocação é necessária. Equipamento FLIR E96.</p></body></html>
H
h0=$(find $T/bad $T/good -type f | sort | xargs shasum | shasum)
python3 $D/norte_guard_extra.py --site CU --root $T/bad --csv $T/bad.csv --max-print 0 --mode block > $T/bad.out; rc_bad=$?
python3 $D/norte_guard_extra.py --site ENR --root $T/good --max-print 0 > /dev/null 2>&1; rc_good_enr=$?   # ENR lit client/public -> 0 fichier servi
mkdir -p $T/goodcu; cp $T/good/index.html $T/goodcu/index.html
python3 $D/norte_guard_extra.py --site EU --root $T/goodcu --max-print 0 --mode block > $T/good.out; rc_good=$?
[ $rc_bad -eq 1 ] || { echo "FAIL: bad rc=$rc_bad (attendu 1)"; fail=1; }
[ $rc_good -eq 0 ] || { echo "FAIL: good rc=$rc_good (attendu 0)"; cat $T/good.out; fail=1; }
for r in STAFF_SEEKERS EQUIP_SEPARATION WARRANTY_UNCONFIRMED FREE_ESTIMATE OLD_FEES PRICERANGE EQUIP_PRICE_AS_INTERVENTION SEPTIC_SERVICE DEAD_INTERNAL_LINK OUT_OF_COVERAGE_INDEXABLE EQUIP_UNCONFIRMED ZONE_GRID PLUS_50_PCT OLD_RATE_65 RC_500K ARRIVAL_PROMISE; do grep -q "^$r," $T/bad.csv || grep -q ",$r," $T/bad.csv || grep -q "$r" $T/bad.out || { echo "FAIL: règle $r non déclenchée"; fail=1; }; done
# mode warn : rc 0 même avec BLOCK ; priceRange grille officielle != BLOCK ; exceptions documentées
python3 $D/norte_guard_extra.py --site CU --root $T/bad --max-print 0 > $T/warn.out; rc_warn=$?
[ $rc_warn -eq 0 ] && grep -q "MODE=warn" $T/warn.out || { echo "FAIL: mode warn rc=$rc_warn"; fail=1; }
mkdir -p $T/offgrid; cat > $T/offgrid/index.html <<'H'
<html><head><link rel="canonical" href="https://x.pt/"><script type="application/ld+json">{"@type":"LocalBusiness","priceRange":"70 €/h + deslocação 30 € ou 100 €/h + deslocação 50 €"}</script></head><body><p>ok</p></body></html>
H
python3 $D/norte_guard_extra.py --site CU --root $T/offgrid --csv $T/offgrid.csv --max-print 0 --mode block > /dev/null; rc_off=$?
[ $rc_off -eq 0 ] || { echo "FAIL: priceRange grille officielle BLOCK (rc=$rc_off)"; fail=1; }
echo '{"STAFF_SEEKERS": ["index\\.html"], "_raison": "test exception"}' > $T/exc.json
python3 $D/norte_guard_extra.py --site CU --root $T/bad --csv $T/exc.csv --exceptions $T/exc.json --max-print 0 --mode block > /dev/null
grep -q "^STAFF_SEEKERS," $T/exc.csv && { echo "FAIL: exception non appliquée"; fail=1; }
h1=$(find $T/bad $T/good -type f | sort | xargs shasum | shasum)
[ "$h0" = "$h1" ] && echo "lecture seule: arbres inchangés (hash identique avant/après)" || { echo "FAIL: arbre modifié"; fail=1; }
[ $fail -eq 0 ] && echo "OK test_norte_guard_extra (témoin positif ×16 règles, négatif 0 BLOCK, rc 1/0, mode warn rc 0, priceRange officielle, exceptions)" || exit 1
