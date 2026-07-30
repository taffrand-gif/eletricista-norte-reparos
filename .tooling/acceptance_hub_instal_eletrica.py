"""Acceptance gate for t_ce03467b (instalacao-eletrica.html enrichment)."""
import re, json, os, sys

PATH = '/tmp/enr-t_C-hub-instal-eletrica/client/public/instalacao-eletrica.html'

with open(PATH, 'r', encoding='utf-8') as f:
    html = f.read()

print("=== ACCEPTANCE CHECKS ===")

# 1. body >=1500 mots
m_main = re.search(r'<main[^>]*>', html)
m_main_end = re.search(r'</main>', html)
main_region = html[m_main.start():m_main_end.end()]
main_clean = re.sub(r'<script[^>]*>.*?</script>', '', main_region, flags=re.DOTALL)
main_clean = re.sub(r'<style[^>]*>.*?</style>', '', main_clean, flags=re.DOTALL)
text = re.sub(r'<[^>]+>', ' ', main_clean)
text = re.sub(r'\s+', ' ', text).strip()
n_words = len(text.split())
print(f"[1] body words (main region): {n_words} {'PASS' if n_words >= 1500 else 'FAIL'}")

# 2. FAQPage parse + 5-6 questions
faq_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
faq_blocks = [b for b in faq_blocks if 'FAQPage' in b]
n_q = 0
parse_ok = False
if faq_blocks:
    try:
        d = json.loads(faq_blocks[0])
        n_q = len(d.get('mainEntity', []))
        parse_ok = True
    except Exception as e:
        parse_ok = False
print(f"[2] FAQPage: {n_q} questions, parse={'OK' if parse_ok else 'FAIL'} | {'PASS' if parse_ok and 5 <= n_q <= 6 else 'FAIL'}")

# 3. >=5 H2
h2 = re.findall(r'<h2[^>]*>', html)
print(f"[3] H2 sections: {len(h2)} {'PASS' if len(h2) >= 5 else 'FAIL'}")

# 4. hasCredential preserved
hc = '"hasCredential"' in html or "'hasCredential'" in html
print(f"[4] hasCredential preserved: {'PASS' if hc else 'FAIL'}")

# 5. canonical link
can = '<link rel="canonical"' in html
print(f"[5] canonical link: {'PASS' if can else 'FAIL'}")

# 6. TRIESP 90062
tri = '90062' in html
print(f"[6] TRIESP 90062 wording: {'PASS' if tri else 'FAIL'}")

# 7. Lei 14/2015
lei = '14/2015' in html
print(f"[7] Lei 14/2015 reference: {'PASS' if lei else 'FAIL'}")

# 8. Seguro RC 50k
seguro = ('50.000' in html or '50000' in html or '50 000' in html or '50.000€' in html or '50 000€' in html or '€50.000' in html or '50k' in html.lower())
print(f"[8] Seguro RC 50k: {'PASS' if seguro else 'FAIL'}")

# 9. pronom 'nossa equipa'
nossa = 'nossa equipa' in html.lower()
print(f"[9] 'nossa equipa' pronom: {'PASS' if nossa else 'FAIL'}")

# 10. DGEG-CERT-BLOCK preserved
dg = '<!-- DGEG-CERT-BLOCK -->' in html
print(f"[10] DGEG-CERT-BLOCK preserved: {'PASS' if dg else 'FAIL'}")

# 11. No 'CERTIEL'
n_certiel = 'CERTIEL' in html
print(f"[11] no 'CERTIEL': {'PASS' if not n_certiel else 'FAIL'}")

# 12. Visible FAQ items
n_visible_q = len(re.findall(r'itemScope\s+itemType="https://schema\.org/Question"', html))
print(f"[12] visible FAQ items: {n_visible_q} {'PASS' if n_visible_q == 6 else 'FAIL'}")

# 13. No sur-claim 'definitivo' in cert context
# Look for any "definitivo" near "certifica" or "TRIESP"
# Use a simple check: does the page claim "certificação definitiva"?
sur_claim = bool(re.search(r'certifica[çc][ãa]o\s+definitiva', html, re.IGNORECASE))
print(f"[13] no 'certificação definitiva' sur-claim: {'PASS' if not sur_claim else 'FAIL'}")

# 14. R12 check: no urgency claim in body
r12 = bool(re.search(r'(resposta\s+imediata|24\s*horas\s+para\s+si|servi[çc]o\s+imediato)', html, re.IGNORECASE))
print(f"[14] no R12 sur-claim (imediato): {'PASS' if not r12 else 'FAIL'}")

# 15. New H2 sections present
new_h2_required = ['Instalação Elétrica Residencial', 'Instalação Elétrica Comercial', 'Remodelação Elétrica', 'Quadro Elétrico']
present = [h for h in new_h2_required if h in html]
print(f"[15] New H2 sections present: {len(present)}/4 {'PASS' if len(present) == 4 else 'FAIL'}")

# 16. FAQ schema.org parse: text fields non-empty
if parse_ok:
    all_text_ok = all(
        q.get('acceptedAnswer', {}).get('text', '').strip()
        for q in d.get('mainEntity', [])
    )
    print(f"[16] FAQPage all answers non-empty: {'PASS' if all_text_ok else 'FAIL'}")

# 17. File size
size = os.path.getsize(PATH)
print(f"\n[meta] file size: {size} bytes")

print("\n=== END ===")