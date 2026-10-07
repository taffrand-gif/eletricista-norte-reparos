#!/bin/bash
# Regression + false-positive tests on a TEMP COPY. Usage: test_norte_surface_scan.sh <clean ENR tree>
set -u; H=$(cd "$(dirname "$0")" && pwd); SRC=$1; T=$(mktemp -d /private/tmp/claude-501/scantest-XXXX); fail=0
mkdir -p $T/client; cp -R $SRC/client/public $T/client/public 2>/dev/null
P=$T/client/public
python3 $H/norte_surface_scan.py --site ENR --root $T >/dev/null || { echo "FAIL: clean tree must pass"; fail=1; }
inj(){ cp $P/llms.txt $T/bak; { printf '%s\n' "$2"; cat $T/bak; } > $P/llms.txt; python3 $H/norte_surface_scan.py --site ENR --root $T | grep -q "$1" && echo "ok detect $1" || { echo "FAIL not detected $1"; fail=1; }; cp $T/bak $P/llms.txt; }
inj ZONE_GRID "Z3: 35 EUR"; inj OLD_RATE_65 "Tarifa 65 €/h"; inj PLUS_50_PCT "Noite +50 %"; inj ROLEAK "Usamos ROLeak"
inj OTHER_TRADE_PHONE "Ligue 928 484 451"; inj OTHER_TRADE_CONTENT "Fazemos desentupimento de esgotos"; inj OLD_WINDOW_09_17 "Dias úteis 09h–17h"
inj INTERNAL_NOTE "Notas editoriais: não mudar"; inj ARRIVAL_DELAY "Chegamos em 15–40 min"; inj BAD_TRAVEL_AMOUNT "deslocação 25 €"; inj BAD_HOURLY_AMOUNT "mão de obra 80 €/h"
# false positives that must NOT block
cp $P/llms.txt $T/bak
printf '%s\n' "Duração do trabalho: 1–2 horas (indicativa)." "A janela de chegada é confirmada por telefone." "Ficha eletrotécnica: a partir de 350 € TTC, sob orçamento." "Seguro de responsabilidade civil profissional até 50 000 €." "## Site irmão (canalização)" "Para canalização: canalizador-norte-reparos.pt, desentupimento." >> $P/llms.txt
python3 $H/norte_surface_scan.py --site ENR --root $T >/dev/null && echo "ok no false positive" || { echo "FAIL false positive"; python3 $H/norte_surface_scan.py --site ENR --root $T | head -5; fail=1; }
# read-only proof
a=$(find $T -type f | xargs shasum | shasum); python3 $H/norte_surface_scan.py --site ENR --root $T >/dev/null; b=$(find $T -type f | xargs shasum | shasum); [ "$a" = "$b" ] && echo "ok read-only" || { echo "FAIL modified files"; fail=1; }
# plumbing site must reject 350/RC
mkdir -p $T/p && printf 'Ficha eletrotécnica a partir de 350 € TTC\n' > $T/p/llms.txt; python3 $H/norte_surface_scan.py --site CU --root $T/p | grep -q FICHA_350_ON_PLUMB && echo "ok CU rejects 350" || { echo "FAIL CU 350"; fail=1; }
exit $fail
