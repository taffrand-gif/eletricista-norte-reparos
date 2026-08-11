#!/usr/bin/env python3
"""
scripts/lot-r145-resposta-para-atendimento.py
==============================================

Lot R145 ENR — Remplacement littéral "Resposta mediante confirmação" →
"Atendimento confirmado por telefone" sur tous les fichiers
`client/public/**/*.html` du site eletricista-norte-reparos.

Pourquoi ce script existe
-------------------------
L'audit AUDIT-EXHAUSTIF-31-2026-08-11-ENR.md §III.1+III.2 a documenté
que la forme R145 ("Atendimento confirmado por telefone") est appliquée
dans 1 SEUL fichier (eletricista-24-horas.html) alors que la forme
legacy "Resposta mediante confirmação" subsiste dans 3366 fichiers
(.html dans client/public — git grep origin/main).

L'annonce du patch R145 ENR "31 fichiers patchés" (rapport 10/08)
était sous-comptée de ×100. Ce lot comble le gap.

Stratégie
---------
Remplacement littéral strict :
  Texte cherché      : "Resposta mediante confirmação"
  Texte de remplace. : "Atendimento confirmado por telefone"

Le remplacement conserve la ponctuation d'origine : "Resposta
mediante confirmação." → "Atendimento confirmado por telefone." car
on ne touche qu'à la chaîne visée, pas au contexte.

Vérifications :
  - Contrôle positif AVANT : 3366 fichiers contiennent la chaîne.
  - Contrôle positif APRÈS : 0 fichier ne contient la chaîne.
  - Diff strict : chaque remplacement doit retirer la chaîne legacy
    et insérer la chaîne R145 à la même position.

Comportement :
  - Patche UNIQUEMENT les fichiers contenant la chaîne stricte.
  - Idempotent : repasser ne change rien (la chaîne est partie).
  - Aucune modification de structure HTML, JSON, ou autre.

Usage
-----
  python3 scripts/lot-r145-resposta-para-atendimento.py [--dry-run] [--root PATH]

  --dry-run   : simule sans écrire (affiche le résumé)
  --root PATH : racine du repo (défaut: répertoire courant)

Témoins R8 obligatoires
-----------------------
- Avant  : 3366 fichiers contiennent "Resposta mediante confirmação"
- Après  : 0 fichier   contient "Resposta mediante confirmação"
- Après  : N+1 fichiers contiennent "Atendimento confirmado por telefone"
           (1 fichier préexistant + 3366 patchés = 3367 cible)
- build  : npm run build exit 0
- gate   : recompte post-batch + spot-check 5 fichiers aléatoires
"""
import argparse
import sys
from pathlib import Path

OLD_TEXT = "Resposta mediante confirmação"
NEW_TEXT = "Atendimento confirmado por telefone"


def find_html_files(root: Path):
    """Yield client/public/**/*.html files (recursive, UTF-8 safe)."""
    public_dir = root / "client" / "public"
    yield from sorted(public_dir.rglob("*.html"))


def patch_file(path: Path, dry_run: bool = False) -> tuple[bool, int]:
    """Patch a single file. Returns (changed, count_replacements)."""
    try:
        text = path.read_text(encoding="utf-8")
    except (UnicodeDecodeError, OSError) as exc:
        print(f"SKIP {path}: {exc}", file=sys.stderr)
        return False, 0

    if OLD_TEXT not in text:
        return False, 0

    count = text.count(OLD_TEXT)
    new_text = text.replace(OLD_TEXT, NEW_TEXT)
    if not dry_run:
        path.write_text(new_text, encoding="utf-8")

    return True, count


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true", help="Simulate without writing")
    parser.add_argument("--root", default=".", help="Root directory (default: cwd)")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    public_dir = root / "client" / "public"
    if not public_dir.is_dir():
        print(f"ERROR: {public_dir} not found. Run from repo root.", file=sys.stderr)
        sys.exit(1)

    changed_files = 0
    total_replacements = 0
    sample_patched = []

    for html_path in find_html_files(root):
        changed, count = patch_file(html_path, dry_run=args.dry_run)
        if changed:
            changed_files += 1
            total_replacements += count
            if len(sample_patched) < 5:
                sample_patched.append(str(html_path.relative_to(root)))

    print(f"--- LOT R145 Resposta→Atendimento ({'DRY-RUN' if args.dry_run else 'APPLIED'}) ---")
    print(f"Root               : {root}")
    print(f"Files patched      : {changed_files}")
    print(f"Total replacements : {total_replacements}")
    if sample_patched:
        print(f"Sample (first 5)   :")
        for name in sample_patched:
            print(f"  - {name}")

    return 0 if changed_files > 0 else 1


if __name__ == "__main__":
    sys.exit(main())