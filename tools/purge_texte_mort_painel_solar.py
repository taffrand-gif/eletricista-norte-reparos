#!/usr/bin/env python3
"""
purge_texte_mort_painel_solar.py
Kanban t_2c3d350c — SEO_PLAN ligne 115.

Purge texte mort orphelin "Painel Solar" dans client/public/.
Pattern exact : vestiges de maillage cassé vers pages panneaux solaires
supprimées, R4 violation (mention service hors périmètre), UX cassée.

SCOPE STRICT (R4 zero invention) :
  - Pattern 1 : <strong>→ Instalação Painel Solar em X</strong>
                (followed by <a href> to DIFFERENT article, OR orphan in </section>)
  - Pattern 2 : <li><span ... >→</span>Instalação Painel Solar em X</li>
  - Pattern 3 : <li>Painel Solar Varanda</li>

GARDE (Filipe 10/08 chantier-1-hors-perimetre-t_1b984298) :
  - melhores-camaras-vigilancia.html : description produit caméra
  - como-instalar-motor-portao-eletrico.html : conseil portail isolé
  - todas-perguntas-frequentes.html : formulation 'Sim, fazemos parte elétrica'
  - autres mentions pédagogiques / 'não trabalhamos com'

GATING R7 : PR draft seule, 0 merge sans GO Philippe.
"""

import os, re, sys, json, subprocess

ROOT = 'client/public'

PATTERNS = [
    # Pattern 1: <strong>→ Instalação Painel Solar em X</strong>
    (re.compile(r'<strong>→ Instalação Painel Solar em [^<]+</strong>'),
     '<strong>→ Instalação Painel Solar em X</strong>'),
    # Pattern 2: <li><span ...>→</span>Instalação Painel Solar em X</li>
    (re.compile(r'<li><span[^>]*>→</span>Instalação Painel Solar em [^<]+</li>'),
     '<li><span>→</span>Instalação Painel Solar em X</li>'),
    # Pattern 3: <li>Painel Solar Varanda</li>
    (re.compile(r'<li>Painel Solar Varanda</li>'),
     '<li>Painel Solar Varanda</li>'),
]


def purge_file(path):
    """Purge Painel Solar texte mort orphelin in a single file. Returns (changed, before, after, found)."""
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content
    found = []
    for pat, desc in PATTERNS:
        matches = pat.findall(content)
        if matches:
            found.extend(matches)
            content = pat.sub('', content)
    return (content != original, original, content, found)


def main():
    if not os.path.isdir(ROOT):
        print("ERROR: {} not found".format(ROOT), file=sys.stderr)
        sys.exit(1)

    # Files matching 'Painel Solar' (case-insensitive)
    r = subprocess.run(['git', 'grep', '-lI', '-i', '--', 'Painel Solar', '--', 'client/public/'],
                       capture_output=True, text=True)
    files = [f for f in r.stdout.strip().split('\n') if f]
    print("Candidates (Painel Solar -i): {}".format(len(files)))

    stats = {
        'files_scanned': 0,
        'files_changed': 0,
        'occurrences_removed': 0,
        'per_file': [],
        'errors': [],
    }

    for path in files:
        stats['files_scanned'] += 1
        try:
            changed, before, after, found = purge_file(path)
            if changed:
                stats['files_changed'] += 1
                stats['occurrences_removed'] += len(found)
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(after)
                stats['per_file'].append({
                    'file': path,
                    'removed': len(found),
                    'chars_delta': len(before) - len(after),
                    'samples': found[:3],
                })
        except Exception as e:
            stats['errors'].append({'file': path, 'error': str(e)})

    # Output JSON
    print(json.dumps(stats, ensure_ascii=False, indent=2))
    print("\nSUMMARY: {}/{} fichiers modifiés, {} occurrences supprimées, {} erreurs".format(
        stats['files_changed'], stats['files_scanned'],
        stats['occurrences_removed'], len(stats['errors'])), file=sys.stderr)


if __name__ == '__main__':
    main()
