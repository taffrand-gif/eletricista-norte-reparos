#!/bin/bash
# Extra tests: exit codes, json, ignored dirs, sibling section, html mode. Temp dirs only.
H=$(cd "$(dirname "$0")" && pwd); T=$(mktemp -d /private/tmp/claude-501/scanx-XXXX); f=0
t(){ [ "$2" = "$3" ] && echo "ok $1" || { echo "FAIL $1 (got $3 want $2)"; f=1; }; }
python3 $H/norte_surface_scan.py --site CU --root $T/nope >/dev/null 2>&1; t "exit2 missing root" 2 $?
python3 $H/norte_surface_scan.py --site XX --root $T >/dev/null 2>&1; t "exit2 bad site (argparse)" 2 $?
mkdir -p $T/cu/node_modules/x $T/cu/_archive $T/cu/dist; printf 'Z1: 15 EUR\n' > $T/cu/node_modules/x/llms.txt; printf '<p>ROLeak</p>' > $T/cu/_archive/a.html
printf 'Tel 928 484 451\n09h–18h 70 €/h + 30 € deslocação\n' > $T/cu/llms.txt
python3 $H/norte_surface_scan.py --site CU --root $T/cu --html --json $T/o.json >/dev/null; t "exit0 clean + ignored dirs" 0 $?
python3 -c "import json;d=json.load(open('$T/o.json'));assert d['block']==0 and d['files_scanned']==1" ; t "json ok files=1" 0 $?
printf '<html><body><p>ROLeak Aqua</p><script type="application/ld+json">{"@type":"Service","offers":{"price":"350 EUR"}}</script></body></html>' > $T/cu/p.html
python3 $H/norte_surface_scan.py --site CU --root $T/cu --html >/dev/null; t "exit1 html ROLeak+JSONLD350" 1 $?
rm -f $T/cu/p.html
printf '## Site irmão (eletricidade)\nEletricidade: disjuntores, DGEG, eletricista-urgente.pt\n' >> $T/cu/llms.txt
python3 $H/norte_surface_scan.py --site CU --root $T/cu >/dev/null; t "sibling section allowed" 0 $?
printf 'Ligue 932 321 892\n' >> $T/cu/llms.txt
python3 $H/norte_surface_scan.py --site CU --root $T/cu >/dev/null; t "sibling phone blocked" 1 $?
exit $f
