#!/usr/bin/env python3
"""Validate JSON-LD blocks: extract every <script type="application/ld+json"> and json.loads it."""
import re, json, pathlib

path = pathlib.Path('client/public/blog/tomada-queimada-perigos-solucoes.html').resolve()
s = path.read_text(encoding='utf-8')

# Match all blocks. Since the file is single-line and contains multiple <script type="application/ld+json">...</script>
# Use a non-greedy regex.
pattern = re.compile(r'<script type="application/ld\+json">(.*?)</script>', re.DOTALL)
blocks = pattern.findall(s)
print(f'Found {len(blocks)} JSON-LD blocks')
for i, b in enumerate(blocks, 1):
    try:
        obj = json.loads(b)
        t = obj.get('@type', '?')
        # Top-level FAQPage check
        if t == 'FAQPage':
            n = len(obj.get('mainEntity', []))
            print(f'  block {i}: {t} OK ({n} Q/R)')
        else:
            print(f'  block {i}: {t} OK')
    except json.JSONDecodeError as e:
        print(f'  block {i}: ❌ JSON ERROR: {e}')
        # print excerpt around the error
        ln = e.lineno - 1
        col = e.colno
        lines = b.splitlines()
        if ln < len(lines):
            print(f'    line {ln}: {lines[ln][max(0, col-50):col+50]}')
        raise SystemExit(1)

print('All JSON-LD blocks parse OK')