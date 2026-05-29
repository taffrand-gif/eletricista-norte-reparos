#!/usr/bin/env python3
"""generate_seo_v3.py — Page generator for 4 sites — FIXED"""
import csv, os, re, json
from pathlib import Path

CSV_PATH = os.path.expanduser("~/projects/matriz_keywords_seo.csv")
BASE = {
    "Canalizador": {
        "normal_dir": os.path.expanduser("~/projects/canalizador-norte-reparos"),
        "urg_dir":    os.path.expanduser("~/projects/canalizador-urgente"),
        "tel": "+351 928 484 451",
        "whatsapp": "https://wa.me/351928484451",
        "cor": "#2193b0",
        "icon": "💧",
        "slug": "canalizador",
        "price_detail": "65€/h (mín. 1h)",
        "驱赶到": "canalizador-norte-reparos.pt",
        "site_name": "Norte Reparos — Canalizador Profissional",
    },
    "Eletricista": {
        "normal_dir": os.path.expanduser("~/projects/eletricista-norte-reparos"),
        "urg_dir":    os.path.expanduser("~/projects/eletricista-urgente"),
        "tel": "+351 932 321 892",
        "whatsapp": "https://wa.me/351932321892",
        "cor": "#FF6B35",
        "icon": "⚡",
        "slug": "eletricista",
        "price_detail": "70€/h (mín. 1h)",
        "驱赶到": "eletricista-norte-reparos.pt",
        "site_name": "Norte Reparos — Eletricista Profissional",
    },
}
SERVICOS = {
    "Canalizador": [
        ("Desentupimentos", "Desentupimento rápido de canos, esgotos e sanitas. Serviço 24h."),
        ("Reparação Fugas", "Deteção e reparação de fugas de água com equipamento profissional."),
        ("Esquentadores", "Instalação e reparação de esquentadores a gás e elétricos."),
        ("Canalização Nova", "Instalação de canalizações novas em casas e empresas."),
    ],
    "Eletricista": [
        ("Avarias Elétricas", "Reparação de avarias elétricas, curto-circuitos e disjuntores a disparar."),
        ("Quadros Elétricos", "Instalação e substituição de quadros elétricos certificados."),
        ("Iluminação LED", "Instalação de iluminação interior e exterior, tecnologia LED económica."),
        ("Certificação Elétrica", "Certificação elétrica para fins de licenciamento e seguro."),
    ],
}
TRAVEL = {
    "Bragança":  {"price": "30€", "zone": "Zona 3"},
    "Vila Real": {"price": "45€", "zone": "Zona 5"},
    "Guarda":    {"price": "50€", "zone": "Zona 6"},
}

def slugify(s):
    s = s.lower().replace(' ','-').replace('ã','a').replace('á','a').replace('é','e').replace('ê','e').replace('ô','o').replace('ç','c').replace("'",'-')
    return re.sub(r'[^a-z0-9\-]', '', s)

def load_csv():
    data = {"District": {}, "Cidade": {}, "Aldeia": {}}
    p = Path(CSV_PATH)
    if not p.exists():
        print(f"[WARN] CSV not found: {CSV_PATH}"); return data
    with open(p, newline='', encoding='utf-8') as f:
        for row in csv.DictReader(f):
            nivel = row.get('Nível','').strip()
            loc   = row.get('Localidade','').strip()
            dist  = row.get('Distrito','').strip()
            met   = row.get('Métier','').strip()
            if nivel not in data or not loc or not met: continue
            key = (loc, dist, met)
            if key not in data[nivel]: data[nivel][key] = []
            data[nivel][key].append(row.get('Keyword','').strip())
    return data

def gen_page(meta, loc, nivel, dist, out_dir):
    cor = meta["cor"]; slug = slugify(loc)
    url_slug = f"{meta['slug']}-{slug}"
    page_file = f"{meta['slug']}-{slug}.html"
    pub = Path(out_dir) / "public"
    pub.mkdir(parents=True, exist_ok=True)
    page_path = pub / page_file
    travel = TRAVEL.get(dist, {"price": "30€", "zone": "Zona 3"})
    canonical = f"https://{meta['驱赶到']}/{url_slug}"
    svc_html = ""
    svc_key = "Canalizador" if meta["icon"] == "💧" else "Eletricista"
    for name, desc in SERVICOS.get(svc_key, []):
        svc_html += f'<div style="padding:1rem;background:#f8f9fa;border-radius:8px;border-left:4px solid {cor};margin-bottom:.75rem;"><strong style="color:{cor};">{name}</strong><p style="margin:.25rem 0 0;font-size:.85rem;color:#555;">{desc}</p></div>'
    title = f"{meta['icon']} {meta['slug'].capitalize()} {loc} — {meta['price_detail']} | 24h | {meta['tel']}"
    description = f"{meta['slug'].capitalize()} profissional em {loc}, {dist}. Atendimento 24h. Orçamento grátis. {meta['price_detail']}. Ligue já!"
    json_ld = json.dumps({"@context":"https://schema.org","@type":"LocalBusiness","name":f"Norte Reparos — {meta['slug'].capitalize()} {loc}","description":description,"telephone":meta["tel"],"url":canonical,"address":{"@type":"PostalAddress","addressLocality":loc,"addressRegion":dist,"addressCountry":"PT"},"openingHours":"Mo-Su","priceRange":"€€"},ensure_ascii=False,indent=2)
    breadcrumb = f'<a href="https://{meta["驱赶到"]}/" style="color:{cor};text-decoration:none;">Início</a> » <span style="color:#666;">{meta["slug"].capitalize()} {loc}</span>'
    html = f'''<!DOCTYPE html>
<html lang="pt-PT">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<meta name="robots" content="index,follow">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description[:200]}">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">{json_ld}</script>
</head>
<body style="margin:0;font-family:Inter,sans-serif;background:#f8f9fa;color:#222;">
<header style="background:{cor};color:#fff;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center;">
<div style="display:flex;align-items:center;gap:.5rem;">
<span style="font-size:2rem;">{meta["icon"]}</span>
<div><div style="font-weight:700;font-size:1.1rem;">{meta["site_name"]}</div><div style="font-size:.75rem;opacity:.9;">Atendimento 24h • 7 dias</div></div>
</div>
<div style="display:flex;gap:1rem;align-items:center;">
<a href="tel:{meta["tel"]}" style="color:#fff;font-weight:600;text-decoration:none;font-size:1.1rem;">📞 {meta["tel"]}</a>
<a href="{meta["whatsapp"]}" style="background:#25D366;color:#fff;padding:.5rem 1rem;border-radius:8px;text-decoration:none;font-weight:600;">WhatsApp</a>
</div>
</header>
<main style="max-width:900px;margin:2rem auto;padding:0 1rem;">
<nav style="margin-bottom:1.5rem;font-size:.85rem;color:#666;">{breadcrumb}</nav>
<div style="background:{cor};color:#fff;padding:1.5rem 2rem;border-radius:12px;margin-bottom:2rem;">
<div style="font-size:2rem;font-weight:700;margin-bottom:.5rem;">{meta["icon"]} O seu {meta["slug"].lower()} em {loc}</div>
<div style="font-size:1rem;opacity:.9;">Atendimento 24 horas • Todos os dias incluiu domingos e feriados</div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2rem;">
<div style="background:#fff;padding:1.5rem;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.08);">
<div style="font-size:1rem;font-weight:600;margin-bottom:.75rem;">💰 Preço por Hora</div>
<div style="font-size:1.5rem;font-weight:700;color:{cor};">{meta["price_detail"]}</div>
<div style="font-size:.8rem;color:#666;margin-top:.25rem;">Mín. 1h • Orçamento grátis</div>
</div>
<div style="background:#fff;padding:1.5rem;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.08);">
<div style="font-size:1rem;font-weight:600;margin-bottom:.75rem;">🚗 Deslocação</div>
<div style="font-size:1.5rem;font-weight:700;color:{cor};">{travel["price"]}</div>
<div style="font-size:.8rem;color:#666;margin-top:.25rem;">{travel["zone"]}</div>
</div>
</div>
<div style="background:#fff;padding:1.5rem 2rem;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.08);margin-bottom:1.5rem;">
<h2 style="font-size:1.2rem;font-weight:700;margin-bottom:1rem;">Serviços Disponíveis</h2>
{svc_html}
</div>
<div style="background:{cor};color:#fff;padding:2rem;border-radius:10px;text-align:center;margin-bottom:2rem;">
<div style="font-size:1.3rem;font-weight:700;margin-bottom:.5rem;">⚡ Precisa de ajuda? Ligue agora!</div>
<a href="tel:{meta["tel"]}" style="display:inline-block;background:#fff;color:{cor};padding:.75rem 2rem;border-radius:8px;font-weight:700;font-size:1.2rem;text-decoration:none;margin-bottom:.5rem;">📞 {meta["tel"]}</a>
<div style="font-size:.85rem;opacity:.9;">Resposta em menos de 30 min • Atendimento 24h</div>
</div>
<div style="background:#fff;padding:1.5rem 2rem;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.08);">
<h2 style="font-size:1.2rem;font-weight:700;margin-bottom:1rem;">Perguntas Frequentes</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
<div><strong style="color:{cor};">Como solicito um orçamento?</strong><p style="margin:.25rem 0 0;font-size:.85rem;color:#555;">Ligue ou use o WhatsApp. O orçamento é gratuito e sem compromisso.</p></div>
<div><strong style="color:{cor};">Trabalha aos domingos?</strong><p style="margin:.25rem 0 0;font-size:.85rem;color:#555;">Sim. Serviço disponível 7 dias por semana, incluiu domingos e feriados.</p></div>
<div><strong style="color:{cor};">Tem equipamento profissional?</strong><p style="margin:.25rem 0 0;font-size:.85rem;color:#555;">Sim. Utilizamos Ridgid, Fluke e FLIR para resultados superiores.</p></div>
<div><strong style="color:{cor};">Que zonas atende?</strong><p style="margin:.25rem 0 0;font-size:.85rem;color:#555;">Atendemos todas as freguesias de {loc} e concelhos vizinhos num raio de 130km.</p></div>
</div>
</div>
</main>
<footer style="background:#222;color:#fff;padding:2rem;text-align:center;margin-top:3rem;">
<div style="font-size:.9rem;margin-bottom:.5rem;">© 2024 {meta["site_name"]} — Todos os direitos reservados</div>
<div style="font-size:.75rem;opacity:.6;">Tel: {meta["tel"]} | {meta["whatsapp"]}</div>
</footer>
</body>
</html>'''
    with open(page_path, 'w', encoding='utf-8') as f: f.write(html)
    return page_path

def main():
    print("="*60); print("Atlas SEO v3 — FIXED + RUNNING"); print("="*60)
    data = load_csv()
    counts = {"Canalizador": {"normal": 0, "urg": 0}, "Eletricista": {"normal": 0, "urg": 0}}
    for metier in ["Canalizador", "Eletricista"]:
        meta = BASE[metier]
        for nivel in ["District", "Cidade", "Aldeia"]:
            for (loc, dist, m) in data[nivel]:
                if m != metier: continue
                try:
                    gen_page(meta, loc, nivel, dist, meta["normal_dir"])
                    counts[metier]["normal"] += 1
                except Exception as e:
                    print(f"  ERROR NORMAL {loc} ({nivel}): {e}")
                if nivel != "District":
                    try:
                        gen_page(meta, loc, nivel, dist, meta["urg_dir"])
                        counts[metier]["urg"] += 1
                    except Exception as e:
                        print(f"  ERROR URG {loc} ({nivel}): {e}")
    print("\n📊 Pages générées:")
    for metier in ["Canalizador", "Eletricista"]:
        n = counts[metier]["normal"]; u = counts[metier]["urg"]
        print(f"  {metier}: {n} normal + {u} urgente = {n+u} pages")
    total = sum(sum(counts[m].values()) for m in counts)
    print(f"\n✅ TOTAL: {total} pages")
    return total

if __name__ == "__main__": main()
