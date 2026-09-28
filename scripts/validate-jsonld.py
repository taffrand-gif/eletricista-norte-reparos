#!/usr/bin/env python3
"""validate-jsonld.py — parse TOUT bloc `application/ld+json` de l'ARBRE SERVI.

POURQUOI CE FICHIER A CHANGÉ (12/09/2026)
Écrit en août 2026, ce script portait en dur un seul chemin —
`client/public/blog/tomada-queimada-perigos-solucoes.html` — sans argument
et sans parcours. Il rendait « All JSON-LD blocks parse OK », et c'était
vrai : pour ce fichier-là. Le JOURNAL le notait déjà « réutilisable pour
les autres pages du cluster » ; il ne l'a jamais été.

Pendant ce temps `client/public/blog/guia-cores-fios-eletricos.html`
servait en production un bloc `FAQPage` de 13 225 octets cassé par UNE
accolade manquante — 17 questions qu'aucun moteur ne pouvait lire. Le
contrôle était vert parce que son PÉRIMÈTRE valait un fichier sur 4 190,
pas parce que l'arbre était sain. Un contrôle qui rend 0 doit prouver sa
source, et le périmètre d'un compteur n'est jamais implicite.

CONTRÔLE POSITIF — le nombre de blocs qui PARSENT sort dans la MÊME
exécution. Une CIBLE à 0 avec un contrôle positif à 0 n'est pas une
absence de violation : c'est un parseur qui ne trouve plus rien, et rien
ne les distinguerait.

PÉRIMÈTRE — `.loop/served.json` fait foi (`servi` moins `jamais_servi`),
jamais une liste écrite à la main. La racine `public/` d'ENR n'est pas
servie (X-PUB0) : l'y inclure gonflerait le compte de fichiers morts.

Usage :
    python3 scripts/validate-jsonld.py                 # tout l'arbre servi
    python3 scripts/validate-jsonld.py <fichier>...    # ciblé
    python3 scripts/validate-jsonld.py --json
Sortie : exit 1 si au moins un bloc est illisible, 0 sinon.
"""
import json
import pathlib
import re
import subprocess
import sys

RACINE = pathlib.Path(__file__).resolve().parent.parent
BLOC = re.compile(r'(?is)<script[^>]+application/ld\+json[^>]*>(.*?)</script>')


def arbre_servi():
    """Liste les .html servis, d'après .loop/served.json."""
    served = json.loads((RACINE / '.loop' / 'served.json').read_text('utf-8'))
    servi = [re.compile(p) for p in served['servi']]
    jamais = [re.compile(p) for p in served['jamais_servi']]
    # `-z` et `core.quotepath=false` : sans eux git ÉCHAPPE les chemins
    # accentués (`"client/public/...pinh\303\243o.html"`, guillemets et
    # octal compris) et tout motif ancré devient muet dessus, sans erreur.
    out = subprocess.run(
        ['git', '-C', str(RACINE), '-c', 'core.quotepath=false',
         'ls-tree', '-r', '--name-only', '-z', 'HEAD'],
        capture_output=True, text=True, check=True)
    return [p for p in out.stdout.split('\0')
            if p.endswith('.html')
            and any(r.search(p) for r in servi)
            and not any(r.search(p) for r in jamais)]


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    en_json = '--json' in sys.argv[1:]
    cibles = args or arbre_servi()

    parsent, casses = 0, []
    for rel in cibles:
        chemin = RACINE / rel
        try:
            s = chemin.read_text(encoding='utf-8', errors='replace')
        except OSError as e:
            casses.append({'fichier': rel, 'bloc': None, 'erreur': str(e)})
            continue
        for i, m in enumerate(BLOC.finditer(s), 1):
            brut = m.group(1).strip()
            try:
                json.loads(brut)
                parsent += 1
            except json.JSONDecodeError as e:
                extrait = brut[max(0, e.pos - 60):e.pos + 60]
                casses.append({'fichier': rel, 'bloc': i,
                               'erreur': str(e), 'extrait': extrait})

    res = {'fichiers': len(cibles), 'controle_positif': parsent,
           'cible': len(casses), 'illisibles': casses}
    if en_json:
        print(json.dumps(res, ensure_ascii=False, indent=1))
    else:
        print('périmètre         : %6d fichiers .html servis' % len(cibles))
        print('contrôle positif  : %6d blocs ld+json PARSENT' % parsent)
        print('CIBLE             : %6d blocs ld+json ILLISIBLES' % len(casses))
        for c in casses[:20]:
            print('   ❌ %s (bloc %s) : %s' % (c['fichier'], c['bloc'], c['erreur']))
            if c.get('extrait'):
                print('      …%s…' % c['extrait'])
        if parsent == 0:
            print('   ⚠️  contrôle positif à 0 — le parseur ne trouve plus rien. '
                  "Le compte CIBLE ne vaut rien tant que ce 0 n'est pas expliqué.")
    return 1 if casses else 0


if __name__ == '__main__':
    raise SystemExit(main())
