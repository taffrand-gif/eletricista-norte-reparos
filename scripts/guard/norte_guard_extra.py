#!/usr/bin/env python3
"""norte_guard_extra — garde-fou LECTURE SEULE, complément de norte_surface_scan.py / guard_septic.py (lot 10, 2026-10-12).
usage: norte_guard_extra.py --site CNR|CU|ENR|EU --root REPO [--csv out.csv] [--md out.md] [--exceptions exceptions.json] [--max-print 15]
Code retour: --mode warn (défaut) toujours 0 · --mode block: 0 aucun BLOCK, 1 au moins un BLOCK · 2 erreur d'usage. N'écrit JAMAIS dans --root (sorties seulement où demandé).
Périmètre = fichiers réellement servis: base = client/public (CNR/ENR, Vite) ou racine (CU/EU), hors node_modules/dist/_archive*/_audit/_prototype/tools/scripts/*.md ; les .md ne sont pas servis.
Chaque constat porte: règle, sévérité, fichier, état d'indexation (indexable|noindex|n/a), extrait. Exceptions documentées dans un JSON {"RULE": ["regex de fichier ou d'extrait", ...], "_raison": "..."}.
Règles: OLD_HOURS (09h–17h, 8h-20h), BRAND_PROOF (warn), SISTER_PHONE, ROLEAK, PLUMBING_CONTENT (elec), ELEC_CONTENT (plumb), INTERNAL_FILE_EXPOSED (boucle 2), STAFF_SEEKERS, EQUIP_SEPARATION, EQUIP_UNCONFIRMED, WARRANTY_UNCONFIRMED, FREE_ESTIMATE, OLD_FEES, PRICERANGE, EQUIP_PRICE_AS_INTERVENTION, DEAD_INTERNAL_LINK, VERCEL_DEAD_ROUTE,
OUT_OF_COVERAGE_INDEXABLE, DUPLICATION, SEPTIC_SERVICE, BAD_JSONLD. (Z1–Z6, 65 €/h, +50 %, ROLeak, délais, mesma pessoa, sitemap/noindex, numéro du métier frère: norte_surface_scan.py.)"""
import argparse, csv, hashlib, json, os, re, sys, collections
from pathlib import Path

BASE = {"CNR": "client/public", "ENR": "client/public", "CU": ".", "EU": "."}
TRADE = {"CNR": "plumb", "CU": "plumb", "ENR": "elec", "EU": "elec"}
SKIP_DIR = {"node_modules", "dist", ".git", "_audit", "_prototype", "tools", "scripts", "_reports", "chantier", ".worktrees", "_worktrees", "client/src", "server", "shared", "drizzle", "content"}
SERVED_EXT = (".html", ".htm", ".txt", ".js", ".json", ".xml")
SKIP_NAME = {"vercel.json", "package.json", "package-lock.json", "tsconfig.json", "components.json"}

import fnmatch
def load_vignore(root, site):
    vi = Path(root) / ".vercelignore"
    return [l.strip() for l in vi.read_text(encoding="utf-8").splitlines() if l.strip() and not l.strip().startswith("#")] if (vi.exists() and site in ("CU", "EU")) else []
def vignored_rel(rel, pats):
    for pt in pats:
        if pt.endswith("/"):
            d = pt.strip("/")
            if rel.startswith(d + "/") or ("/" + d + "/") in ("/" + rel): return True
        elif pt.startswith("/"):
            if fnmatch.fnmatch(rel, pt[1:]): return True
        elif fnmatch.fnmatch(rel, pt) or fnmatch.fnmatch(os.path.basename(rel), pt) or rel == pt: return True
    return False

def served_files(root, site):
    VPATS = load_vignore(root, site)
    base = Path(root) / BASE[site]
    out = []
    for dp, dn, fn in os.walk(base):
        rel_dir = os.path.relpath(dp, root)
        dn[:] = [d for d in dn if d not in SKIP_DIR and not d.startswith("_archive") and not d.startswith("_prototype") and not d.startswith(".")]
        for f in fn:
            if f.endswith(SERVED_EXT) and f not in SKIP_NAME and not f.startswith("."):
                if site in ("CU", "EU") and vignored_rel(str((Path(dp) / f).relative_to(root)), VPATS): continue
                out.append(Path(dp) / f)
    return sorted(out)

SIB_A = re.compile(r"(?is)<a\s[^>]*href=\"[^\"]*(?:canalizador|eletricista)-(?:norte-reparos|urgente)\.pt[^\"]*\"[^>]*>.*?</a>")
FP_PLUMB = re.compile(r"(?i)canaliza[cç][aã]o el[eé]tric|canaliza[cç][oõ]es? el[eé]tric|fuga[s]? de corrente|fuga[s]? el[eé]tric|bomba de [aá]gua[^.<]{0,40}(?:quadro|el[eé]tric|disjuntor)|precisa de canalizador|canalizador (?:profissional|urgente)? ?\??$")
PLUMB_RX = re.compile(r"(?i)desentup|torneira|autoclism|esquentador|termoacumulador|fuga[s]? de [aá]gua|entupiment|canos? rebentad|picagem de [aá]gua|sanita")
ELEC_RX = re.compile(r"(?i)quadro el[eé]trico|curto-circuito|certiel|\bdgeg\b|ficha eletrot[eé]cnica|certifica[cç][aã]o el[eé]trica|disjuntor diferencial")
INTERNAL_NAMES = re.compile(r"(?i)(?:^|/)(?:design-preview[^/]*|precos-zonas\.json|PRICING\.md|AGENTS\.md|CLAUDE\.md|context\.md|SEO_PLAN\.md|JOURNAL\.md|LECONS\.md|MARKETING\.md|[^/]*\.(?:py|sh|csv|bak[^/]*|orig|rej|log)|[^/]*\.PRE(?:-[^/]*)?)$|(?:^|/)(?:_audit|_reports|_outils|\.openclaw|\.hermes|\.loop|scripts|tools|tests|client/src)/")
NEG = re.compile(r"(?i)\bn[ãa]o\b|sem\s+or[çc]amento\s+gratuito|fazem or[çc]amentos? gr[aá]tis\?|há .{0,30}gr[aá]tis\?")
RULES = [
 ("STAFF_SEEKERS", "BLOCK", re.compile(r"(?i)staff-?seekers"), None),
 ("EQUIP_SEPARATION", "BLOCK", re.compile(r"(?i)ridgid"), "elec"),
 ("EQUIP_SEPARATION", "BLOCK", re.compile(r"(?i)\bflir\b|\bfluke\b"), "plumb"),
 ("EQUIP_UNCONFIRMED", "BLOCK", re.compile(r"(?i)megger|analisador (?:de )?redes?|fluke\s?(?:T6|1587|87|117|\d{3,4})|T6-1000|43\s?200\s?px|geofone|endosc[óo]pio|c[âa]mara (?:endosc|de inspe)[^.<]{0,20}30\s?m|multímetro Fluke"), None),
 ("WARRANTY_UNCONFIRMED", "BLOCK", re.compile(r"(?i)garantia\s*(?:de\s*)?\d|\d+\s*(?:anos?|meses)\s*(?:de\s*)?garantia|garantia\s*(?:escrita|por escrito|total|extensa)|garantia\s+(?:do|de|sobre|em)\s+(?:servi|trabalho|todos|m[aã]o|obra)|voltamos (?:gr[aá]tis|gratuitamente)|com garantia(?! (?:do )?fabricante)|trabalho garantido"), None),
 ("FREE_ESTIMATE", "BLOCK", re.compile(r"(?i)or[çc]amento\s*(?:</div><div[^>]*>\s*)?(?:gratuito|gr[aá]tis)|estimativas? (?:sem custo|gratuita|gr[aá]tis)|diagn[oó]stico (?:gratuito|gr[aá]tis)|desloca[çc][aã]o (?:gratuita|inclu[ií]da)|desloca[çc][aã]o é de \d+ ?€ e est[aá] inclu[ií]da|visita (?:t[eé]cnica )?gratuita|avalia[çc][aã]o gr[aá]tis"), None),
 ("OLD_FEES", "BLOCK", re.compile(r"(?i)\b(?:15|25|35|45|55|65)\s?€\s*(?:de\s*)?(?:desloca|taxa de sa[ií]da)|desloca[çc][aã]o[^.<]{0,25}\b(?:15|25|35|45|55|65)\s?€|\bzona\s+Z?[1-6]\b(?=[^.<]{0,40}€)|\bZ[1-6]\s?=\s?\d+"), None),
 ("EQUIP_PRICE_AS_INTERVENTION", "BLOCK", re.compile(r"€\s?\d{1,2}\.\d{3}\+?|€\s?\d{1,3}\.?\d*\+?\s*(?:em equipamento|investid)|em Equipamento Certificado"), None),
 ("ZONE_GRID", "BLOCK", re.compile(r"\bZ[1-6]\b\s*(?:[:=]\s*\*{0,2}\d|\|\s*(?:\d|\*))|\|\s*\*{0,2}Z[1-6]\*{0,2}\s*\||Z1\s?[-–]\s?Z6"), None),
 ("PLUS_50_PCT", "BLOCK", re.compile(r"(?i)\+\s?50\s?%|acr[ée]scimo de 50\s?%|majora[çc][aã]o[^.<]{0,20}50\s?%"), None),
 ("OLD_RATE_65", "BLOCK", re.compile(r"\b65\s?€\s?/\s?h|\b65\s?€/hora"), None),
 ("RC_500K", "BLOCK", re.compile(r"(?i)(?:responsabilidade civil|\bRC\b|seguro)[^.<\n]{0,60}\b500[. ]?000|\b500[. ]?000\s?€?[^.<\n]{0,40}(?:responsabilidade|seguro)"), None),
 ("ARRIVAL_PROMISE", "BLOCK", re.compile(r"(?i)aten[çc][aã]o imediata|chegamos em \d+|chegada em \d+\s?min|resposta imediata|garantimos resposta"), None),
 ("SISTER_PHONE", "BLOCK", re.compile(r"928[\s.\-]?484[\s.\-]?451"), "elec"),
 ("SISTER_PHONE", "BLOCK", re.compile(r"932[\s.\-]?321[\s.\-]?892"), "plumb"),
 ("ROLEAK", "BLOCK", re.compile(r"(?i)ro-?leak"), None),
 ("PLUMBING_CONTENT", "BLOCK", PLUMB_RX, "elec"),
 ("ELEC_CONTENT", "BLOCK", ELEC_RX, "plumb"),
 ("OLD_HOURS", "BLOCK", re.compile(r"\b0?9h\s?[–-]\s?17h|\b17h\s?[–-]\s?0?9h|\b0?8h\s?[–-]\s?20h"), None),
 ("WARRANTY_UNCONFIRMED", "BLOCK", re.compile(r"(?i)garantia (?:alargada|extensa|incluída|todos os trabalhos|no servi[çc]o)|a mesma garantia|serve para garantia|d[ãa]o garantia\?|trabalho garantido"), None),
 ("ARRIVAL_PROMISE", "BLOCK", re.compile(r"(?i)\b30\s?[-–]\s?45\s?min|tempo de chegada\s?:\s?\d|chegamos [^.<]{0,30}em aproximadamente \d"), None),
 ("BRAND_PROOF", "WARN", re.compile(r"(?i)(?:trabalhamos com|utilizamos|usamos|materiais de|marcas de)[^.<]{0,60}(?:Legrand|Schneider|Hager|Siemens|Efapel)"), None),
 ("SEPTIC_SERVICE", "BLOCK", re.compile(r"(?i)(?:limpeza|desentupimento|esvaziamento|bombagem|vidange|curagem|repara[çc][aã]o|instala[çc][aã]o|manuten[çc][aã]o)\s+de\s+fossas?\s+s[ée]pticas?|fossas?\s+s[ée]pticas?\s+(?:urgente|24h)"), None),
]
def html_meta(t):
    noindex = bool(re.search(r'<meta[^>]+name=["\']robots["\'][^>]*noindex', t, re.I))
    m = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)', t, re.I)
    return noindex, (m.group(1) if m else None)

def visible(t):
    t = re.sub(r"(?s)<script.*?</script>|<style.*?</style>|<!--.*?-->", " ", t)
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", t))

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--site", required=True, choices=list(BASE)); ap.add_argument("--root", required=True)
    ap.add_argument("--csv"); ap.add_argument("--md"); ap.add_argument("--exceptions"); ap.add_argument("--max-print", type=int, default=15); ap.add_argument("--mode", choices=["warn", "block"], default="warn")
    a = ap.parse_args(); root = Path(a.root)
    if not root.is_dir(): print("root introuvable", file=sys.stderr); return 2
    exc = json.load(open(a.exceptions)) if a.exceptions else {}
    excrx = {k: [re.compile(x) for x in v] for k, v in exc.items() if isinstance(v, list)}
    trade = TRADE[a.site]; base = root / BASE[a.site]
    files = served_files(root, a.site); served_rel = {str(f.relative_to(base)) for f in files}
    F = []; dup = collections.defaultdict(list)
    def add(rule, sev, f, idx, ex):
        rel = str(f.relative_to(root)) if isinstance(f, Path) else f
        for rx in excrx.get(rule, []):
            if rx.search(rel) or rx.search(ex): return
        F.append(dict(rule=rule, severity=sev, file=rel, indexation=idx, extrait=ex[:160]))
    for f in files:
        try: t = f.read_text(encoding="utf-8")
        except Exception: continue
        is_html = f.suffix in (".html", ".htm")
        noidx, canon = html_meta(t) if is_html else (False, None)
        idx = ("noindex" if noidx else "indexable") if is_html else "n/a"
        # JSON-LD
        if is_html:
            for b in re.findall(r'<script type="application/ld\+json">(.*?)</script>', t, re.S):
                try: j = json.loads(b)
                except Exception: add("BAD_JSONLD", "BLOCK", f, idx, b[:100]); continue
                for m in re.finditer(r'"priceRange"\s*:\s*"([^"]*)"', b):
                    v = m.group(1)
                    if re.search(r"\d", v):
                        nums = set(re.findall(r"\d+", v))
                        if nums <= {"30", "50", "70", "100"}:  # montants de la grille officielle seulement
                            add("PRICERANGE", "INFO" if re.search(r"(?i)desloca|\+", v) else "WARN", f, idx, f"priceRange grille officielle={v}")
                        else: add("PRICERANGE", "BLOCK", f, idx, f"priceRange={v}")
                    elif v.strip(): add("PRICERANGE", "INFO", f, idx, f"priceRange symbolique={v}")
        body = visible(t) if is_html else t
        scan_src = t if f.suffix in (".html", ".htm") else t
        for rid, sev, rx, only in RULES:
            if only and only != trade: continue
            if rid in ("PLUMBING_CONTENT", "ELEC_CONTENT"):
                src = FP_PLUMB.sub(" ", visible(SIB_A.sub(" ", t))) if is_html else ""
                if is_html:
                    for b in re.findall(r'<script type="application/ld\+json">(.*?)</script>', t, re.S):
                        src += " " + re.sub(r'"(?:sameAs|url|@id|item|image|logo|mainEntityOfPage)"\s*:\s*(?:\[[^\]]*\]|"[^"]*")', "", b)
            else: src = scan_src if rid in ("EQUIP_UNCONFIRMED", "STAFF_SEEKERS", "SEPTIC_SERVICE", "SISTER_PHONE", "ROLEAK") else body
            for m in rx.finditer(src):
                ex = re.sub(r"\s+", " ", src[max(0, m.start() - 60):m.end() + 60])
                if rid in ("FREE_ESTIMATE", "WARRANTY_UNCONFIRMED") and NEG.search(ex) and rid == "FREE_ESTIMATE": continue
                if rid == "ARRIVAL_PROMISE" and re.search(r"(?i)n[ãa]o (?:promete|prometemos|comunicamos|anuncia)|nunca promet|sem promessa", ex): continue  # négation explicite = pas une promesse
                if rid == "WARRANTY_UNCONFIRMED" and re.search(r"(?i)garantia (?:do )?fabricante|garantia legal", ex): continue
                add(rid, sev, f, idx, ex); break  # un constat par fichier et règle (compte de fichiers, pas d'occurrences)
        if is_html:
            # liens internes morts
            for h in sorted(set(re.findall(r'href="(/[^"#?]*)"', t))):
                p = h.strip("/")
                cands = {p, p + ".html", p + "/index.html"} if p else {"index.html"}
                if not (cands & served_rel) and not re.search(r"\.(?:css|js|png|jpg|webp|svg|ico|xml|txt|pdf|json|woff2?)$", h) and not h.startswith(("/api", "/_")):
                    add("DEAD_INTERNAL_LINK", "WARN", f, idx, h); break
            # couverture: distance > plafond sur page indexable
            if not noidx:
                for m in re.finditer(r"(\d{2,3})\s?km", body):
                    if int(m.group(1)) > 130 and re.search(r"(?i)dist[âa]ncia|desde Macedo|por estrada", body[max(0, m.start() - 80):m.end() + 40]):
                        add("OUT_OF_COVERAGE_INDEXABLE", "BLOCK", f, idx, body[max(0, m.start() - 60):m.end() + 40]); break
            # duplication: texte visible normalisé (sans chiffres ni majuscules de lieu) — empreinte
            if not noidx and len(body) > 600:
                norm = re.sub(r"\d+", "N", re.sub(r"\b[A-ZÁÉÍÓÚÂÊÔÃÕÇ][\wáéíóúâêôãõç]+(?: (?:d[aeo]s?|de la) [A-ZÁÉÍÓÚÂÊÔÃÕÇ][\wáéíóúâêôãõç]+)*", "L", body))
                dup[hashlib.sha1(norm.encode()).hexdigest()[:10]].append(f)
    for h, fl in dup.items():
        if len(fl) >= 50: add("DUPLICATION", "WARN", fl[0], "indexable", f"{len(fl)} pages indexables au texte identique hors lieux/chiffres (ex. {fl[1].name})")
    # fichiers internes exposés (nom/chemin), hors .vercelignore (CU/EU : racine du dépôt)
    pats = load_vignore(root, a.site)
    vignored = lambda rel: vignored_rel(rel, pats)
    for dp, dn, fn in os.walk(base):
        dn[:] = [d for d in dn if d not in (".git", "node_modules", "dist") ]
        for fx in fn:
            fp = Path(dp) / fx; rel = str(fp.relative_to(base))
            if INTERNAL_NAMES.search(rel) and not vignored(rel) and not rel.startswith(("_archive", "_prototype")):
                add("INTERNAL_FILE_EXPOSED", "BLOCK", fp, "n/a", rel)
    # routes Vercel mortes
    vj = root / "vercel.json"
    if vj.exists():
        try: v = json.loads(vj.read_text(encoding="utf-8"))
        except Exception: add("VERCEL_DEAD_ROUTE", "BLOCK", vj, "n/a", "vercel.json invalide"); v = {}
        dead = 0; ex_ = ""
        for r in v.get("redirects", []):
            d = r.get("destination", "")
            if d.startswith("/") and ":" not in d and "*" not in d:
                p = d.split("?")[0].strip("/")
                if p and not ({p, p + ".html", p + "/index.html"} & served_rel) and r.get("statusCode") in (301, 308, 302, 307, None):
                    dead += 1; ex_ = ex_ or f"{r.get('source')} -> {d}"
        for r in v.get("rewrites", []):
            d = r.get("destination", "")
            if d.startswith("/") and ":" not in d and "*" not in d and d not in ("/index.html",):
                if d.strip("/") not in served_rel and d.strip("/") + ".html" not in served_rel: dead += 1; ex_ = ex_ or f"rewrite {r.get('source')} -> {d}"
        if dead: add("VERCEL_DEAD_ROUTE", "WARN", vj, "n/a", f"{dead} route(s) vers fichier absent, ex. {ex_}")
    cnt = collections.Counter((x["rule"], x["severity"]) for x in F)
    nb = sum(1 for x in F if x["severity"] == "BLOCK")
    if a.csv:
        with open(a.csv, "w", newline="", encoding="utf-8") as fh:
            w = csv.DictWriter(fh, fieldnames=["rule", "severity", "file", "indexation", "extrait"]); w.writeheader(); w.writerows(F)
    if a.md:
        with open(a.md, "w", encoding="utf-8") as fh:
            fh.write(f"# norte_guard_extra {a.site} — {len(files)} fichiers servis scannés\n\n| règle | sévérité | fichiers |\n|---|---|---:|\n")
            for (r, s), n in sorted(cnt.items()): fh.write(f"| {r} | {s} | {n} |\n")
    print(f"{a.site}: servis={len(files)} BLOCK={nb} total={len(F)}")
    for (r, s), n in sorted(cnt.items()): print(f"  {r:28s} {s:5s} {n}")
    for x in F[: a.max_print]: print("   ", x["rule"], x["file"], "|", x["extrait"][:90])
    if a.mode == "warn":
        print(f"MODE=warn: {nb} BLOCK rapportés comme avertissements (code retour 0) ; --mode block pour bloquer")
        return 0
    return 1 if nb else 0

if __name__ == "__main__":
    sys.exit(main())
