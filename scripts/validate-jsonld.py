#!/usr/bin/env python3
"""Valide TOUT le JSON-LD de l'arbre servi.

Deux défauts de périmètre corrigés le 15/09/2026 :

1. la version précédente était câblée sur UN fichier
   (`client/public/blog/tomada-queimada-perigos-solucoes.html`) : elle
   rendait vert sur 1 fichier sur 4189 et n'a pas vu un FAQPage illisible
   servi en production.
2. sa regex exigeait la forme exacte `<script type="application/ld+json">` :
   1213 blocs sur 18041 (1202 fichiers) portent un attribut supplémentaire
   ou des guillemets simples et lui étaient invisibles.

Un contrôle qui ne dit pas sur quoi il a porté ne prouve rien : ce script
imprime toujours son CONTRÔLE POSITIF (fichiers lus, blocs trouvés, blocs
qui parsent) dans la même exécution que son verdict. Un zéro sans contrôle
positif ne distingue pas « aucune violation » de « outil cassé ».

Usage :  python3 scripts/validate-jsonld.py [arbre]   (défaut : client/public)
Sortie :  0 = tout parse · 1 = au moins un bloc illisible
"""
import json
import pathlib
import re
import sys

# Attributs libres, guillemets simples ou doubles, casse indifférente.
RE_LD = re.compile(
    r'<script[^>]*type\s*=\s*["\']application/ld\+json["\'][^>]*>(.*?)</script>',
    re.S | re.I,
)


def main() -> int:
    racine = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "client/public")
    if not racine.is_dir():
        print(f"arbre introuvable : {racine}", file=sys.stderr)
        return 2

    n_fichiers = n_blocs = n_ok = 0
    echecs: list[tuple[str, int, str]] = []

    for f in sorted(racine.rglob("*.html")):
        n_fichiers += 1
        texte = f.read_text(encoding="utf-8", errors="replace")
        for i, bloc in enumerate(RE_LD.findall(texte)):
            n_blocs += 1
            try:
                json.loads(bloc)
                n_ok += 1
            except json.JSONDecodeError as e:
                echecs.append((str(f), i, str(e)))

    print(f"arbre            : {racine}")
    print(f"CONTRÔLE POSITIF : {n_fichiers} fichiers HTML lus")
    print(f"CONTRÔLE POSITIF : {n_blocs} blocs JSON-LD trouvés, {n_ok} parsent")
    print(f"CIBLE            : {len(echecs)} bloc(s) illisible(s)")

    if n_blocs == 0:
        print("\n⚠️  zéro bloc trouvé — l'outil est cassé ou l'arbre est vide.")
        print("    Ce n'est PAS un succès : refus de rendre vert.")
        return 2

    for chemin, i, err in echecs:
        print(f"\n❌ {chemin}  bloc n°{i}\n   {err}")
        print("   Rappel : le parseur nomme la position où il bute, pas la")
        print("   faute. Une accolade non fermée se signale souvent des")
        print("   centaines de caractères plus loin, sur un caractère valide.")

    if echecs:
        return 1
    print("\n✅ tous les blocs JSON-LD de l'arbre servi parsent.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
