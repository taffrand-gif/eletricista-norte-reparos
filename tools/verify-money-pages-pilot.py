#!/usr/bin/env python3
from pathlib import Path
import json,re,subprocess,urllib.request,urllib.error

FILES = [
'client/public/eletricista-quadro-eletrico-macedo-de-cavaleiros.html',
'client/public/blog/quadro-eletrico-antigo-mogadouro-substituir.html',
'client/public/eletricista-quadro-eletrico-peso-da-regua.html',
'client/public/blog/reparacao-curto-circuito-alijo.html',
'client/public/blog/reparacao-curto-circuito-mirandela.html',
'client/public/quadro-eletrico-vila-real.html',
'client/public/blog/reparacao-curto-circuito-vila-real.html',
'client/public/blog/quadro-eletrico-antigo-alijo-substituir.html',
'client/public/curto-circuito-macedo-de-cavaleiros.html',
'client/public/curto-circuito-mirandela.html',
]
expected={
'Macedo de Cavaleiros':(1,'15€',['macedo-de-cavaleiros']),
'Mogadouro':(3,'35€',['mogadouro']),
'Peso da Régua':(5,'55€',['peso-da-regua']),
'Alijó':(4,'45€',['alijo']),
'Mirandela':(2,'25€',['mirandela']),
'Vila Real':(4,'45€',['vila-real'])}
source=json.loads(Path('/Users/admin/work/Sites/norte-os-marketing/prototypes/zonas-data.json').read_text())
print('PRICE TRACE')
for city,(zone,price,slugs) in expected.items():
    actual=source.get(city)
    assert actual==zone,(city,actual,zone)
    matched=[p for p in FILES if any(slug in Path(p).stem for slug in slugs)]
    for p in matched:
        text=Path(p).read_text(encoding='utf-8')
        assert price in text and '70€/h' in text and 'Orçamento por escrito antes de qualquer intervenção' in text,(p,price)
    print(f'{city}: zonas-data.json={actual} => Z{zone}={price}; mão-de-obra=70€/h (SEO_PLAN.md:35); pages={len(matched)}')

patterns={
'pronoun/solo':r'(?i)\b(mesma pessoa|sozinh[oa]|contacte-me|falar comigo|eu faço|eu sou)\b',
'false services':r'(?i)\b(painel(?:es)? solar(?:es)?|fotovoltaic\w*|wallbox|carregador(?:es)? de ve[ií]culo|ar condicionado|bomba de calor)\b',
'fake review':r'(?i)aggregateRating|reviewCount|\b[45][,.][0-9]\s*/\s*5\b|⭐⭐⭐⭐⭐',
'precise address':r'(?i)streetAddress',
'ENR urgency':r'(?i)\b(urgente|urgência|emergência|24h|7 dias por semana|resposta imediata|resposta rápida)\b',
}
print('\nDOCTRINE')
for label,pat in patterns.items():
    hits=[]
    for p in FILES:
        text=Path(p).read_text(encoding='utf-8')
        # Exclude internal-link URLs where legacy slug itself contains no banned token here.
        for m in re.finditer(pat,text): hits.append((p,m.group(0)))
    print(label, len(hits))
    if hits:
        print(hits[:20])
        raise SystemExit(f'FAIL doctrine {label}')

hrefs=set()
for p in FILES:
    text=Path(p).read_text(encoding='utf-8')
    for href in re.findall(r'href=["\']([^"\']+)',text,re.I):
        if href.startswith('/') and not href.startswith('//') and href not in {'/','/styles.css'}:
            hrefs.add(href)
print('\nHREF DIRECT STATUS')
for href in sorted(hrefs):
    url='https://eletricista-norte-reparos.pt'+href
    try:
        req=urllib.request.Request(url,method='HEAD',headers={'User-Agent':'Mozilla/5.0'})
        with urllib.request.urlopen(req,timeout=15) as r:
            code=r.status; final=r.geturl()
    except urllib.error.HTTPError as e:
        code=e.code; final=e.geturl()
    print(f'{code} {href} final={final}')
    if code!=200 or final.rstrip('/')!=url.rstrip('/'):
        raise SystemExit(f'FAIL href {href}: {code} -> {final}')
print(f'PASS hrefs={len(hrefs)}')
