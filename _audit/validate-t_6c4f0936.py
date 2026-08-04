from pathlib import Path
import json
import re
import sys

page = Path("client/public/blog/fio-derretido-causas-perigos.html")
source = page.read_text()
blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', source, re.S)
data = [json.loads(block) for block in blocks]
faq = next(item for item in data if item.get("@type") == "FAQPage")
visible = re.findall(
    r"<details><summary><strong>(.*?)</strong></summary><p>(.*?)</p></details>",
    source,
    re.S,
)
title_match = re.search(r"<title>(.*?)</title>", source)
meta_match = re.search(r'<meta name="description" content="([^"]+)">', source)
main_match = re.search(r"<main>(.*?)</main>", source, re.S)
if not title_match or not meta_match or not main_match:
    raise SystemExit("Missing title, meta description, or main")
title = title_match.group(1)
meta = meta_match.group(1)
canonical = re.findall(r'<link rel="canonical" href="([^"]+)">', source)
main = main_match.group(1)
query = "cheiro de fio queimado na casa"
forbidden = [
    "atendemos 24h",
    "24h/7",
    "85-95",
    "20-40",
    "efapel",
    "je suis",
    "je fais",
    "mon entreprise",
    "sozinho",
    "falar comigo",
    "streetaddress",
]
forbidden_hits = {
    pattern: source.lower().count(pattern)
    for pattern in forbidden
    if pattern in source.lower()
}
base = Path("client/public")
internal_links = re.findall(r'href="(/[^"#?]*)', source)
missing = []
for href in internal_links:
    if href in ("", "/"):
        continue
    relative = href.lstrip("/")
    candidates = [base / relative, base / f"{relative}.html", base / relative / "index.html"]
    if not any(candidate.exists() for candidate in candidates):
        missing.append(href)

report = {
    "title": title,
    "title_chars": len(title),
    "meta_chars": len(meta),
    "canonical": canonical,
    "h1_count": len(re.findall(r"<h1\b", source, re.I)),
    "query_occurrences": re.sub(r"<[^>]+>", " ", source).lower().count(query),
    "word_count_main": len(re.findall(r"\b[\wÀ-ÿ]+\b", re.sub(r"<[^>]+>", " ", main))),
    "jsonld_types": [item.get("@type") for item in data],
    "faq_json": len(faq["mainEntity"]),
    "faq_visible": len(visible),
    "faq_names_match": [item["name"] for item in faq["mainEntity"]]
    == [re.sub(r"<[^>]+>", "", question) for question, _ in visible],
    "missing_internal_links": sorted(set(missing)),
    "forbidden_hits": forbidden_hits,
    "sitemap_lastmod_ok": "fio-derretido-causas-perigos.html</loc><lastmod>2026-08-04"
    in Path("client/public/sitemap-blog.xml").read_text(),
}
print(json.dumps(report, ensure_ascii=False, indent=2))
ok = (
    not report["missing_internal_links"]
    and not forbidden_hits
    and report["faq_names_match"]
    and len(canonical) == 1
    and report["h1_count"] == 1
    and len(title) <= 60
    and len(meta) <= 160
    and report["query_occurrences"] >= 3
    and report["sitemap_lastmod_ok"]
)
sys.exit(0 if ok else 1)
