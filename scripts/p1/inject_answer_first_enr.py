"""
inject_answer_first_enr.py — ENR villes answer-first V1

Mission symétrique CU #181 (canalizador-urgente) / EU #169 (eletricista-urgente).
Ajoute un bloc <p data-p1="answer-first"> en tête de contenu des 15 villes
top-traffic ENR. Données 100% réelles extraites du mapping local (validé contre
precos-zonas.json + H1/OG post-#215). Tel LITTÉRAL canonique.

Usage :
    python3 scripts/p1/inject_answer_first_enr.py [--dry-run]

Pré-requis : exécuté depuis /tmp/enr-af (worktree feat/villes-answer-first)
"""

from pathlib import Path
import re
import argparse

ROOT = Path(__file__).parent.parent.parent
CLIENT = ROOT / "client" / "public"

MAPPING = {
    "braganca":                  ("Bragança",                  3,  40.0, 35),
    "macedo-de-cavaleiros":      ("Macedo de Cavaleiros",      1,   0.0, 15),
    "mirandela":                 ("Mirandela",                 2,  27.4, 25),
    "vila-real":                 ("Vila Real",                 5,  87.0, 55),
    "chaves":                    ("Chaves",                    5,  74.7, 55),
    "vinhais":                   ("Vinhais",                   3,  48.8, 35),
    "mogadouro":                 ("Mogadouro",                 3,  48.5, 35),
    "torre-de-moncorvo":         ("Torre de Moncorvo",         4,  52.2, 45),
    "lamego":                    ("Lamego",                    6, 110.7, 65),
    "peso-da-regua":             ("Peso da Régua",             6,  98.4, 65),
    "alfandega-da-fe":           ("Alfândega da Fé",           3,  31.1, 35),
    "vila-flor":                 ("Vila Flor",                 3,  40.1, 35),
    "vimioso":                   ("Vimioso",                   4,  64.0, 45),
    "miranda-do-douro":          ("Miranda do Douro",          6,  92.2, 65),
    "freixo-de-espada-a-cinta":  ("Freixo de Espada à Cinta",  6,  94.0, 65),
}

# Constante site — JAMAS lue depuis un fichier (directive CEO 18/07)
TEL_HREF = "tel:+351932321892"
TEL_DISPLAY = "932 321 892"


def build_block(cidade, z, km, preco):
    km_str = f"{km:.1f}".rstrip('0').rstrip('.') if km != 0 else "0"
    return (
        f'<p data-p1="answer-first" '
        f'style="background:#fff5e0;border-left:4px solid #FF6B35;'
        f'padding:18px 22px;margin:0 0 24px 0;border-radius:8px;'
        f'font-size:16px;line-height:1.6;color:#333;max-width:920px">'
        f'Em {cidade}, a deslocação é {preco}€ (Zona {z}, {km_str} km de Macedo de Cavaleiros). '
        f'Mão de obra 70 €/h, orçamento por escrito. '
        f'Contacto: <a href="{TEL_HREF}" style="color:#FF6B35;font-weight:bold;text-decoration:none">{TEL_DISPLAY}</a>.'
        f'</p>\n'
    )


def patch_file(path, cidade, z, km, preco, dry_run=False):
    txt = path.read_text(encoding='utf-8')
    if 'data-p1="answer-first"' in txt:
        return ('SKIP', None)
    block = build_block(cidade, z, km, preco)
    pat_a = '<main class="wrap">\n'
    pat_b = '<main>\n'
    if pat_a in txt:
        new_txt = txt.replace(pat_a, pat_a + '\n' + block, 1)
        tpl = 'A'
    elif pat_b in txt:
        idx = txt.find(pat_b)
        new_txt = txt[:idx + len(pat_b)] + block + txt[idx + len(pat_b):]
        tpl = 'B'
    else:
        return ('FAIL', None)
    if not dry_run:
        path.write_text(new_txt, encoding='utf-8')
    return ('PATCHED', tpl)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()

    print(f"Mode: {'DRY-RUN' if args.dry_run else 'APPLY'}")
    for slug, (cid, z, km, preco) in MAPPING.items():
        fpath = CLIENT / f"eletricista-{slug}.html"
        if not fpath.exists():
            print(f"  MISSING: {slug}")
            continue
        status, tpl = patch_file(fpath, cid, z, km, preco, dry_run=args.dry_run)
        print(f"  {slug:<32} {status:<8} {tpl or '-':<4}")


if __name__ == '__main__':
    main()
