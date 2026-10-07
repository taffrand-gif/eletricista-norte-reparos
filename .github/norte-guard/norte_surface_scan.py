#!/usr/bin/env python3
"""norte_surface_scan — read-only guard for the SERVED surfaces of one Norte site.

Usage: norte_surface_scan.py --site CNR|CU|ENR|EU --root <repo or tree> [--html] [--json out.json] [--md out.md]
Exit code: 0 = no BLOCK finding, 1 = at least one BLOCK, 2 = usage/IO error.
Never writes inside --root. Scans only served files (see SERVED), ignores node_modules, dist, archives,
worktrees, _audit, reports. A "sibling block" (heading containing irmão/frère/outros sites, or a line holding
the sibling domain) is allowed to mention the other trade, but never the other trade's phone number.
"""
import argparse, json, re, sys
from pathlib import Path

SITES = {
    "CNR": dict(trade="plumb", phone="928 484 451", other_phone="932 321 892", base="client/public",
                sibling_domains=["eletricista-norte-reparos.pt", "eletricista-urgente.pt"]),
    "CU":  dict(trade="plumb", phone="928 484 451", other_phone="932 321 892", base=".",
                sibling_domains=["eletricista-norte-reparos.pt", "eletricista-urgente.pt"]),
    "ENR": dict(trade="elec", phone="932 321 892", other_phone="928 484 451", base="client/public",
                sibling_domains=["canalizador-norte-reparos.pt", "canalizador-urgente.pt"]),
    "EU":  dict(trade="elec", phone="932 321 892", other_phone="928 484 451", base=".",
                sibling_domains=["canalizador-norte-reparos.pt", "canalizador-urgente.pt"]),
}
AI_FILES = ["llms.txt", "llms-full.txt", "ai.txt", "ai-plugin.json", ".well-known/ai-plugin.json"]
IGN = re.compile(r"(^|/)(node_modules|dist|_archive|archive|\.worktrees|_worktrees|_audit|\.git|tmp)(/|$)")

PLUMB_WORDS = re.compile(r"canaliz|desentup|fuga[s]? de água|esgoto|esquentador|canalizador", re.I)
ELEC_WORDS = re.compile(r"eletric|elétric|disjuntor|DGEG|TRIESP|ficha eletrot|termo[s]? de responsabilidade|quadro elétrico", re.I)
HIST = re.compile(r"hist[óo]ric|anterior|antigo|legacy|substitu[ií]d|já não|n[ãa]o (é|se aplica)|compara", re.I)

def digits(s):
    return re.sub(r"\D", "", s)

RULES = [  # (id, severity, regex, only_site_trade or None)
    ("ZONE_GRID", "BLOCK", re.compile(r"\bZ[1-6]\b"), None),
    ("OLD_RATE_65", "BLOCK", re.compile(r"65\s?(€|EUR)\s?/\s?h|65\s?(€|EUR)\s?por hora", re.I), None),
    ("PLUS_50_PCT", "BLOCK", re.compile(r"\+\s?50\s?%"), None),
    ("OLD_WINDOW_09_17", "BLOCK", re.compile(r"09\s?h?(?:00)?\s?[–-]\s?17\s?h?|17h\s?[–-]\s?09h", re.I), None),
    ("ROLEAK", "BLOCK", re.compile(r"roleak", re.I), None),
    ("INTERNAL_NOTE", "BLOCK", re.compile(r"Notas editoriais|Pronoun|Pronom|NÃO publicar|PRICING-CANONIQUE|slots? organiques?|instruction.{0,20}(agent|gerador)", re.I), None),
    ("UNVALIDATED_FROM_PRICE", "BLOCK", re.compile(r"a partir de (?!350\b)\d{2,4}\s?(€|EUR)(?!\s?/\s?h)", re.I), None),
    ("MESMA_PESSOA", "BLOCK", re.compile(r"mesma pessoa|même personne", re.I), None),
    ("FREE_QUOTE_TRAVEL", "WARN", re.compile(r"or[çc]amento gr[aá]tis|gratuito|devis gratuit", re.I), None),
    ("ARRIVAL_DELAY", "BLOCK", re.compile(r"(chegad|chegamos|chegar|arrival|arriv)[^.\n]{0,60}\d+\s?(?:[–-]\s?\d+\s?)?(min|minutos|horas)\b|\b\d+\s?[–-]\s?\d+\s?min[^.\n]{0,30}(chegad|chegamos|chegar)", re.I), None),
    ("IVA_UNCONFIRMED", "BLOCK", re.compile(r"sem IVA|\+\s?IVA|IVA n[ãa]o inclu|isento de IVA|art\.?º? 53", re.I), None),
    ("FICHA_350_ON_PLUMB", "BLOCK", re.compile(r"350\s?(€|EUR)|Ficha eletrot|Termos? de responsabilidade|50\s?000\s?(€|EUR)|responsabilidade civil profissional", re.I), "plumb"),
]
SEV_ORDER = {"BLOCK": 0, "WARN": 1, "INFO": 2}

def sibling_lines(lines, domains):
    """indices of lines inside an allowed sibling block."""
    allowed, inside = set(), False
    for i, l in enumerate(lines):
        if re.match(r"\s*#{1,6}\s", l):
            inside = bool(re.search(r"irm[ãa]o|fr[èe]re|outros sites|sites norte|cross-sites", l, re.I))
        if inside or any(d in l for d in domains):
            allowed.add(i)
    return allowed

def scan_text(site, path, text, cfg):
    out = []
    lines = text.split("\n")
    sib = sibling_lines(lines, cfg["sibling_domains"])
    for n, l in enumerate(lines):
        if not l.strip():
            continue
        hist = bool(HIST.search(l))
        for rid, sev, rx, only in RULES:
            if only and only != cfg["trade"]:
                continue
            for m in rx.finditer(l):
                if rid == "FICHA_350_ON_PLUMB" and n in sib:
                    pass
                s = sev
                if rid == "ARRIVAL_DELAY" and re.search(r"\b(n[ãa]o|nunca|sem)\s+(usa|usamos|prometemos|prometer|garant)", l, re.I):
                    continue
                if rid == "FREE_QUOTE_TRAVEL" and re.search(r"\b(n[ãa]o|sem)\b|\?\*?\*?$", l, re.I):
                    continue
                if hist and rid in ("ZONE_GRID", "OLD_RATE_65", "PLUS_50_PCT", "OLD_WINDOW_09_17"):
                    s = "INFO"
                out.append(dict(rule=rid, severity=s, file=str(path), line=n + 1, text=l.strip()[:200]))
        # wrong trade content
        other = ELEC_WORDS if cfg["trade"] == "plumb" else PLUMB_WORDS
        if n not in sib and other.search(l):
            out.append(dict(rule="OTHER_TRADE_CONTENT", severity="BLOCK", file=str(path), line=n + 1, text=l.strip()[:200]))
        # phone numbers
        if digits(cfg["other_phone"]) in digits(l):
            out.append(dict(rule="OTHER_TRADE_PHONE", severity="BLOCK", file=str(path), line=n + 1, text=l.strip()[:200]))
        # amounts: hourly and travel must belong to the official grid
        for m in re.finditer(r"(\d{2,3})\s?(?:€|EUR)\s?/\s?h", l):
            if int(m.group(1)) not in (70, 100) and not hist:
                out.append(dict(rule="BAD_HOURLY_AMOUNT", severity="BLOCK", file=str(path), line=n + 1, text=l.strip()[:200]))
        for m in re.finditer(r"deslocação\s*[:=–-]?\s*(\d{2,3})\s?(?:€|EUR)|(\d{2,3})\s?(?:€|EUR)\s?(?:de\s)?deslocação", l, re.I):
            v = int(m.group(1) or m.group(2))
            if v not in (30, 50) and not hist:
                out.append(dict(rule="BAD_TRAVEL_AMOUNT", severity="BLOCK", file=str(path), line=n + 1, text=l.strip()[:200]))
    return out

def visible_text(html):
    html = re.sub(r"(?is)<script.*?</script>|<style.*?</style>", " ", html)
    return re.sub(r"(?s)<[^>]+>", " ", html)

def scan_html(site, path, html, cfg):
    out = scan_text(site, path, visible_text(html), cfg)
    for blk in re.findall(r'(?is)<script[^>]+application/ld\+json[^>]*>(.*?)</script>', html):
        try:
            json.loads(blk)
        except Exception:
            out.append(dict(rule="JSONLD_INVALID", severity="BLOCK", file=str(path), line=0, text=blk[:80]))
            continue
        if re.search(r"350\s?(€|EUR)|\"price\"\s*:\s*\"?350|50\s?000\s?(€|EUR)|responsabilidade civil", blk, re.I):
            out.append(dict(rule="JSONLD_350_OR_RC", severity="BLOCK", file=str(path), line=0, text="350/50000 in JSON-LD"))
    return out

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--site", required=True, choices=SITES)
    ap.add_argument("--root", required=True)
    ap.add_argument("--html", action="store_true", help="also scan served *.html at the base dir (visible text + JSON-LD)")
    ap.add_argument("--json"); ap.add_argument("--md")
    a = ap.parse_args()
    cfg = SITES[a.site]
    base = Path(a.root) / cfg["base"]
    if not base.is_dir():
        print(f"no such dir {base}", file=sys.stderr); return 2
    findings, scanned = [], []
    files = [base / f for f in AI_FILES if (base / f).is_file()]
    if a.html:
        files += [p for p in sorted(base.glob("*.html")) if not IGN.search(str(p.relative_to(base)))]
    for p in files:
        try:
            txt = p.read_text(encoding="utf-8", errors="replace")
        except OSError as e:
            print(e, file=sys.stderr); return 2
        scanned.append(str(p.relative_to(a.root)))
        rel = p.relative_to(a.root)
        if p.suffix == ".html":
            findings += scan_html(a.site, rel, txt, cfg)
        else:
            if p.name.endswith(".json"):
                try: json.loads(txt)
                except Exception: findings.append(dict(rule="JSON_INVALID", severity="BLOCK", file=str(rel), line=0, text=""))
            findings += scan_text(a.site, rel, txt, cfg)
    findings.sort(key=lambda f: (SEV_ORDER[f["severity"]], f["file"], f["line"], f["rule"]))
    blocks = sum(1 for f in findings if f["severity"] == "BLOCK")
    res = dict(site=a.site, root=a.root, files_scanned=len(scanned), block=blocks,
               warn=sum(1 for f in findings if f["severity"] == "WARN"), findings=findings)
    if a.json: Path(a.json).write_text(json.dumps(res, ensure_ascii=False, indent=1), encoding="utf-8")
    if a.md:
        md = [f"# norte_surface_scan — {a.site}", f"- root: `{a.root}`", f"- fichiers scannés: {len(scanned)}", f"- BLOCK: {blocks} · WARN: {res['warn']}", ""]
        md += [f"- **{f['severity']}** `{f['rule']}` {f['file']}:{f['line']} — {f['text']}" for f in findings[:300]]
        Path(a.md).write_text("\n".join(md) + "\n", encoding="utf-8")
    print(f"norte_surface_scan site={a.site} files={len(scanned)} BLOCK={blocks} WARN={res['warn']}")
    for f in findings[:15]:
        print(f"  {f['severity']} {f['rule']} {f['file']}:{f['line']} {f['text'][:100]}")
    return 1 if blocks else 0

if __name__ == "__main__":
    sys.exit(main())
