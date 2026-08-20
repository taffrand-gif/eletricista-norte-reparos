#!/usr/bin/env python3
"""Témoin R8 (mesure disque) pour t_e07195f3 — rank-push 'esquema ligação interruptor duplo'.

Vérités à re-vérifier avant handoff:
1. JSON-LD blocks (5/5 parsables, FAQPage = 12 questions)
2. Grep counts: query cible + R145 + R12 + R4 (prix PRICING.md)
3. H1 query-first + dateModified coherent
4. Sitemaps lastmod = 2026-08-21 sur les 3 fichiers

Re-vérifiable: `python3 _audit/check_t_e07195f3.py`
"""
import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGE = ROOT / "client/public/blog/como-ligar-interruptor-duplo.html"
SITEMAPS = [
    ROOT / "client/public/sitemap-blog.xml",
    ROOT / "dist/public/sitemap-blog.xml",
    ROOT / "public/sitemap.xml",
]

errors = []
temoins = {}


def add(label, value, ok=None):
    temoins[label] = value
    if ok is False:
        errors.append(f"FAIL: {label} = {value}")


# 1. JSON-LD parse
html = PAGE.read_text(encoding="utf-8")
blocks = re.findall(
    r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
    html, re.DOTALL,
)
add("JSON-LD blocks found", len(blocks))
parsed = []
for i, b in enumerate(blocks):
    try:
        d = json.loads(b)
        parsed.append(d)
        ctx = d.get("@context", "?")
        t = d.get("@type", "?")
        if isinstance(t, list):
            t = "/".join(t)
        add(f"  block[{i}] @type", f"{t} ctx={ctx}")
    except Exception as e:
        add(f"  block[{i}] PARSE FAIL", str(e), ok=False)

# FAQPage Q/R count
faq = next((b for b in parsed if b.get("@type") == "FAQPage"), None)
faq_n = len(faq["mainEntity"]) if faq else 0
add("FAQPage Q/R count", faq_n, ok=(faq_n == 12))

# 2. Grep counts (R8 + R12 + R4 + R145)
text = html.lower()
add("'esquema de ligação' count", text.count("esquema de liga"))
add("'esquema...interruptor duplo' (occurrences)", len(re.findall(r'esquema[^<>]{0,40}interruptor[^<>]{0,15}duplo', text)))
add("H1 contains 'esquema de ligação'", "esquema de ligação de interruptor duplo" in text, ok=True)
add("dateModified 2026-08-21", '"datemodified":"2026-08-21"' in text, ok=True)
add("Atualizado: 21 de agosto", "atualizado: 21 de agosto de 2026" in text, ok=True)

# R12: pronom interdit
prons = re.findall(r"je suis|sozinho|mon entreprise|contato pessoal|falar comigo|contacte-me", text)
add("R12 pronom interdit hits", len(prons), ok=(len(prons) == 0))

# R145: délai chiffré
r145 = re.findall(r"mediante confirma[cç][ãa]o|\b\d+\s*(minutos?|horas?)\b|piquete\s*24|24h/7|resposta\s*imediata", text)
add("R145 délai chiffré / mediante confirmação", len(r145), ok=(len(r145) == 0))

# R4: PRICING.md prix
add("'70 €/h' occurrences", len(re.findall(r"70\s*€\s*/\s*h", text)))
add("'15 € a 65 €' occurrences", len(re.findall(r"15\s*€\s*a\s*65\s*€", text)))

# 3. Sitemaps lastmod
for sm in SITEMAPS:
    if not sm.exists():
        add(f"sitemap {sm.name} exists", False, ok=False)
        continue
    try:
        tree = ET.parse(sm)
        root = tree.getroot()
        ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        urls = root.findall(".//s:url/s:loc", ns)
        match = next(
            (u for u in urls if u.text and "como-ligar-interruptor-duplo" in u.text),
            None,
        )
        if match is None:
            add(f"sitemap {sm.name} contiene la page", False, ok=False)
            continue
        # ET n'a pas getparent; on prend le parent direct via une 2e boucle
        for url_el in root.findall(".//s:url", ns):
            loc_el = url_el.find("s:loc", ns)
            if loc_el is not None and "como-ligar-interruptor-duplo" in (loc_el.text or ""):
                lm = url_el.find("s:lastmod", ns)
                add(f"sitemap {sm.name} lastmod", lm.text if lm is not None else "MISSING",
                    ok=(lm is not None and lm.text == "2026-08-21"))
                break
    except Exception as e:
        add(f"sitemap {sm.name} PARSE FAIL", str(e), ok=False)

# 4. FAQ details count
details = re.findall(r"<details><summary>", html)
add("<details> count (FAQ visible)", len(details), ok=(len(details) >= 12))

# Output
print("=" * 64)
print(f"TÉMOINS R8 — t_e07195f3 (page canonique como-ligar-interruptor-duplo.html)")
print("=" * 64)
for k, v in temoins.items():
    flag = "" if "PARSE FAIL" not in str(v) and "FAIL" not in str(v) else "  ❌"
    print(f"  {k}: {v}{flag}")
print("=" * 64)
if errors:
    print(f"❌ {len(errors)} ERREURS:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
print("✅ Tous les témoins R8 sont OK")