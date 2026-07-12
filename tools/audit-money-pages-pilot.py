#!/usr/bin/env python3
from pathlib import Path
import html, json, re, unicodedata
from itertools import combinations

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
STOP = set('a ao aos as o os e em de da das do dos um uma uns umas para por com sem no na nos nas que se seu sua seus suas como mais ou é ser antes depois entre sobre esta este isto essa esse muito também quando onde qualquer cada não sim já'.split())

def visible_words(path):
    text=Path(path).read_text(encoding='utf-8')
    text=re.sub(r'<script\b.*?</script>|<style\b.*?</style>',' ',text,flags=re.I|re.S)
    text=re.sub(r'<nav\b.*?</nav>|<footer\b.*?</footer>|<section class="related".*?</section>',' ',text,flags=re.I|re.S)
    text=html.unescape(re.sub(r'<[^>]+>',' ',text))
    words=[]
    for w in re.findall(r"[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'-]+", text.lower()):
        w=''.join(c for c in unicodedata.normalize('NFD',w) if unicodedata.category(c)!='Mn')
        if len(w)>=4 and w not in STOP:
            words.append(w)
    return set(words)

def validate(path):
    text=Path(path).read_text(encoding='utf-8')
    h1=re.findall(r'<h1\b[^>]*>(.*?)</h1>',text,re.I|re.S)
    jsonlds=re.findall(r'<script\b[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',text,re.I|re.S)
    for raw in jsonlds: json.loads(raw)
    return len(h1),len(jsonlds)

sets={p:visible_words(p) for p in FILES}
print('PAIRWISE SHARED-VOCAB (Jaccard unique visible words, stopwords removed)')
mx=(0,None)
for a,b in combinations(FILES,2):
    inter=len(sets[a]&sets[b]); union=len(sets[a]|sets[b]); pct=100*inter/union if union else 0
    print(f'{Path(a).stem[:28]:28} | {Path(b).stem[:28]:28} | {pct:5.1f}% ({inter}/{union})')
    if pct>mx[0]: mx=(pct,(a,b))
print(f'MAX={mx[0]:.1f}% PAIR={mx[1]}')
print('\nSTRUCTURE')
for p in FILES:
    h,j=validate(p)
    print(f'{p}: h1={h} jsonld={j} words={len(sets[p])}')
if mx[0]>=50: raise SystemExit('FAIL uniqueness >= 50%')
if any(validate(p)[0]!=1 for p in FILES): raise SystemExit('FAIL h1 count')
print('PASS')
