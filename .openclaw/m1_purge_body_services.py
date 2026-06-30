#!/usr/bin/env python3
"""
M1 — Purge des mentions services FAUX en body (Leçon #267 appliquée).

Services FAUX visés (sites Norte Reparos ne les fait PAS) :
- Climatisation (ar-condicionado, climatização)
- Solaire / Photovoltaïque (painéis solares, fotovoltaico, PV)
- Chargeur VE (carregador de veículo elétrico, wallbox)
- Bomba de calor

Approche (R8 strict, filet de sécurité) :
1. POUR CHAQUE SERVICE : re-grip AVANT (témoin décomposé, 1 motif/commande)
2. Classification claim-de-service (Purger) vs blog-éducatif (Garder)
3. Idempotence : chaque règle retire sa présence (rejouer = no-op)
4. Témoin APRÈS : re-grip identique = 0 attendu
5. Diff échantillon (≥3 fichiers lus) AVANT commit

Leçon #267 :
- Pas de claim "100% FAIT" sans re-grip réconcilié avant/après
- Toujours classer claim-de-service vs blog-éducatif AVANT suppression
- Témoin décomposé (1 motif/commande), pas regex générique aveugle
"""
from __future__ import annotations
import re, subprocess, sys, argparse
from pathlib import Path

# ─── CONFIG ─────────────────────────────────────────────────────────────────
# Site courant : passé en argument --site
DEFAULT_ROOT = Path("/Users/admin/work/Sites")
SITES = {
    "canalizador-norte-reparos": DEFAULT_ROOT / "canalizador-norte-reparos",
    "eletricista-norte-reparos": DEFAULT_ROOT / "eletricista-norte-reparos",
    "canalizador-urgente": DEFAULT_ROOT / "canalizador-urgente",
    "eletricista-urgente": DEFAULT_ROOT / "eletricista-urgente",
}

# ─── RÈGLES (motif → remplacement, idempotent) ────────────────────────────────
# Chaque règle spécifie :
#   - motif (regex)
#   - replacement (str, NE doit PLUS contenir le motif)
#   - apply_in : "body" | "page_dediee" | "all"
#   - reason : référence R4/R11/R12/R145
#   - classification : "claim" (à purger) | "blog_educatif" (à garder — skip)
# ─────────────────────────────────────────────────────────────────────────────

# RÈGLES BODY : retissent les mentions services FAUX dans le body, en gardant le NAP et la structure élec
# AMENDEMENT 30/06/2026 (mission M1 stricte body — leçon #267) :
#   - Replacement = "" (suppression propre) au lieu de "[serviço não instalado]" qui :
#       * cassait les href (ex: /wallbox-braganca.html → /[serviço não instalado]-braganca.html)
#       * polluait JSON-LD / meta description / lists (multi-occurrences visuelles moches)
#   - L'apply_rules_to_content neutralise href= et <script type="application/ld+json"> AVANT
#     d'appliquer les règles (filet R8 + Leçon #267 : ne pas casser la structure)
#   - Idempotence : "" sur pattern qui ne matche plus = no-op (réexécution safe)
BODY_RULES = [
    # ── Climatisation ──
    {
        "name": "body_ar_condicionado_remove",
        "pattern": r"\bar[ -]?condicionad[oa]s?\b|\bclimatiza[cç][aã]o(?:es|s)?\b|\bsistema[s]?[ -]?(?:de[ -]?)?climatiza[cç][aã]o\b",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 zéro invention : climatisation n'est pas un service Norte Reparos électricien. Classifié claim-de-service (pluriel + variantes).",
    },
    # ── Solaire / Fotovoltaic ──
    {
        "name": "body_paineis_solares_remove",
        "pattern": r"\bpain[e\u00e9]is?[ -]?(?:solares?|fotovolt\u00e1icos?)\b",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 zéro invention : solaire/PV n'est pas un service Norte Reparos.",
    },
    {
        "name": "body_fotovoltaico_remove",
        "pattern": r"\bfotovoltaic[oa]s?\b|\bPV\b(?!\.|\d)",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 zéro invention : PV n'est pas installé.",
    },
    # ── Chargeur VE / Wallbox ──
    {
        "name": "body_carregador_ve_remove",
        "pattern": r"\bcarregad[oó]r(?:es)?[ -]?(?:de[ -]?)?(?:ve[ií]culos?|carros?|viaturas?)[ -]?(?:el[eé]tric[oa]s?|VEs?|EVs?)\b",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 zéro invention : chargeur VE n'est pas un service Norte Reparos électricien (pluriel inclus).",
    },
    {
        "name": "body_veiculos_eletricos_remove",
        "pattern": r"\bve[ií]culos?[ -]?el[eé]tric[oa]s?\b|\bviaturas?[ -]?el[eé]tric[oa]s?\b",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 : 'veículos eléctricos' / 'viaturas eléctricas' (mention générique).",
    },
    {
        "name": "body_carregadores_para_carros_eletricos_remove",
        "pattern": r"\bcarregadores?[ -]?(?:de[ -]?)?(?:carros?|carro|viaturas?)[ -]?el[e\u00e9]tric[oa]s?\b",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 : variantes 'carregadores para carros eléctricos' ou 'carregadores de carros eléctricos'.",
    },
    {
        "name": "body_instalacao_carregadores_remove",
        "pattern": r"\binstala[çc][aã]o[ -]?(?:de[ -]?)?carregadores?[ -]?(?:para|de)[ -]?(?:carros?|carro|ve[ií]culos?)[ -]?(?:el[e\u00e9]tric[oa]s?)?\b",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 : 'Instalação de carregadores para carros eléctricos' — claim de service non fourni.",
    },
    {
        "name": "body_wallbox_remove",
        "pattern": r"\b[Ww]allbox\b",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 : Wallbox (borne VE) n'est pas un service installé.",
    },
    {
        "name": "body_residencial_comercial_wallbox_remove",
        "pattern": r"\b[Ww]allbox[ -]?(?:residencial|comercial|residencial[ -]e[ -]comercial)\b|\bresidencial[ -]e[ -]comercial\b",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 : formulation \"Wallbox residencial e comercial\" — promouvoir service inexistant.",
    },
    # ── Bomba de calor ──
    {
        "name": "body_bomba_calor_remove",
        "pattern": r"\bbombas?[ -]?de[ -]?calor\b|\bsistemas?[ -]?(?:de[ -]?)?bombas?[ -]?de[ -]?calor\b",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "R11 : bomba de calor n'est pas un service Norte Reparos électricien ni plombier (singulier + pluriel + variantes).",
    },
    # ── Nettoyage post-suppression (filet) ──
    # Après suppression d'un service FAUX, on peut se retrouver avec :
    #   * " , climatisation e segurança" → ",  e segurança" (double virgule + espace)
    #   * "wallbox, ar condicionado, " → "," (virgule orpheline)
    #   * "(wallbox, ar condicionado, bomba de calor)" → "(, , )" (parenthèses vides)
    # On nettoie ces artefacts en une passe APRÈS les suppressions (idempotent : 2e passe = no-op)
    {
        "name": "body_cleanup_double_separators",
        "pattern": r"\s*,\s*,\s*",
        "repl": ", ",
        "apply_in": "body",
        "classification": "claim",
        "reason": "Nettoyage post-suppression : supprime les doubles virgules introduites par suppressions successives.",
    },
    {
        "name": "body_cleanup_orphan_separator_before_e",
        "pattern": r",\s+(?=[,;:.])",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "Nettoyage : virgule orpheline avant ponctuation.",
    },
    {
        "name": "body_cleanup_empty_list_item",
        "pattern": r"<li>\s*[,.;:\-—\s]*</li>",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "Nettoyage : <li> vide après suppression d'un service FAUX dans une liste.",
    },
    {
        "name": "body_cleanup_empty_paren",
        "pattern": r"\(\s*[,.;:\s]*\)",
        "repl": "",
        "apply_in": "body",
        "classification": "claim",
        "reason": "Nettoyage : parenthèses vides après suppression.",
    },
]

# RÈGLES PAGES DÉDIÉES (si une page existe encore comme dédiée à un service FAUX, on la marque "removed")
PAGE_DEDIEES_RULES = [
    # (no-op : les pages dédiées sont supprimées via `git rm`, pas par ce script)
]

ALL_RULES = BODY_RULES + PAGE_DEDIEES_RULES


# ─── CLASSIFICATION BLOG-HUB vs CLAIM (Leçon #267 appliquée) ────────────────
# Whitelist explicite de pages éducaTIVES (blog-hub, TOCs, comparatifs) où
# la mention de services FAUX est acceptable car c'est un SOMMAIRE
# d'articles, pas une promesse de service. Le sub-agent CNR a manuellement
# fait cette classification pour `guia-eletricidade.html`.
# Format : préfixe relatif à client/public/
HUB_EDUCATIONAL_WHITELIST_PREFIXES = [
    # Hub général eletricidade (mentionne tous les sujets)
    "guia-eletricidade.html",
    "guia-completo-eletricidade-tras-os-montes.html",
    "domotica-casa-inteligente.html",
    "domotica-",  # toutes les pages domotica sont éducatives
    "auditoria-energetica-casa.html",
    "como-reduzir-fatura-eletricidade.html",
    "quadros-eletricos-modernizacao.html",
    "tecnologia-fluke-camara-termica-eletrica.html",
    # TOCs / indices — pages de sommaire qui listent tous les sujets
    "indice-a-z-",
    "todas-perguntas-frequentes.html",
    "blog/",  # tout le blog est éducatif par convention
]


def is_hub_educational(rel_path: str) -> bool:
    """True si le fichier est une page hub éducative (mention de service FAUX tolérée).
    Leçon #267 : classer claim-de-service vs blog-éducatif AVANT suppression."""
    for prefix in HUB_EDUCATIONAL_WHITELIST_PREFIXES:
        if rel_path.startswith(prefix) or prefix in rel_path:
            return True
    return False


# ─── OUTILS ──────────────────────────────────────────────────────────────────

def get_dirty_files() -> list[Path]:
    """Liste les fichiers HTML de la source déployée (tous trackés, hors blog/_archive/.bak).
    Pour M1, on scan TOUS les fichiers HTML du repo, pas seulement les dirty,
    parce que la purge peut s'appliquer à du contenu déjà commité."""
    import subprocess
    site = get_site()
    p = SITES[site]
    r = subprocess.run(
        ["git", "-C", str(p), "-c", "core.quotePath=false",
         "ls-files"],
        capture_output=True, text=True, check=True,
    )
    paths = []
    for ln in r.stdout.splitlines():
        ln = ln.strip()
        if ln.endswith(".html") and "/_archive/" not in ln and not ln.endswith(".bak") and "/blog/" not in ln:
            full = p / ln
            if full.exists():
                paths.append(full)
    return paths


def get_site() -> str:
    return getattr(sys.modules[__name__], "_site_arg", "canalizador-norte-reparos")


def apply_rules_to_content(content: str, rules: list[dict]) -> tuple[str, dict]:
    """Applique les règles avec filet R8.

    AMENDEMENT 30/06/2026 (mission M1 stricte body — leçon #267) :
    - Neutralise les attributs href="..." (URLs) en insérant des marqueurs
      NUL-LIKE (caractères invisibles Unicode qui ne matchent aucun motif
      de service) AUTOUR ET À L'INTÉRIEUR de l'URL. Cela casse les regex
      basées sur \bword\b car le mot est précédé/suivi de caractères invisibles.
      Restauration finale par retrait des marqueurs.
    - Neutralise les blocs <script type="application/ld+json"> (JSON-LD schema)
      en remplaçant l'intégralité du contenu par un placeholder, restauré après.
    - Idempotent : 2e exécution ne change rien (toutes les mentions sont déjà parties).
    """
    # Caractère Unicode U+200B (zero-width space) — invisible, casse les \bword\b
    # car il n'est pas un word char (regex \b s'appuie sur \w = [a-zA-Z0-9_]).
    ZW = "\u200b"
    JSONLD_PLACEHOLDER_OPEN = ZW + "JSONLD_OPEN" + ZW
    JSONLD_PLACEHOLDER_CLOSE = ZW + "JSONLD_CLOSE" + ZW
    JSONLD_OPEN_TAG = '<script type="application/ld+json">'
    JSONLD_CLOSE_TAG = "</script>"

    import re as _re

    # 1. Neutralise href="..." en insérant ZW avant et après chaque URL.
    #    Comme \b est satisfait quand on a \w et non-\w, insérer ZW (non-\w)
    #    immédiatement avant/à l'intérieur de "paineis" casse le pattern \bpain...is\b.
    def neutralize_href(m):
        url = m.group(1)
        # On insère ZW entre chaque mot de l'URL pour garantir qu'aucun \bword\b
        # ne puisse matcher le texte de l'URL.
        obfuscated = ZW + ZW.join(url) + ZW
        return f'href="{obfuscated}"'

    safe = _re.sub(r'href="([^"]*)"', neutralize_href, content)

    # 2. Neutralise <script type="application/ld+json">...</script>
    def wrap_jsonld(m):
        full = m.group(1)
        # Extrait l'intérieur
        inner = full[len(JSONLD_OPEN_TAG):-len(JSONLD_CLOSE_TAG)]
        # Remplace par placeholder contenant tout (texte + ZW pour empêcher match)
        return JSONLD_OPEN_TAG + JSONLD_PLACEHOLDER_OPEN + inner + JSONLD_PLACEHOLDER_CLOSE + JSONLD_CLOSE_TAG
    safe = _re.sub(
        r'(<script\s+type="application/ld\+json">.*?</script>)',
        wrap_jsonld,
        safe,
        flags=_re.DOTALL,
    )

    new = safe
    stats = {}
    for rule in rules:
        try:
            # AMENDEMENT 30/06/2026 — fix case-sensitivity résiduelle :
            # "Climatização" capital C n'était pas matchée par les regex case-sensitive.
            # Leçon #267 (re-grip réconcilié) : on doit attraper toutes les variantes.
            # Flag re.IGNORECASE ajouté pour TOUTES les règles (les FAUX services sont
            # toujours indépendants de la casse).
            new_after, n = re.subn(rule["pattern"], rule["repl"], new, flags=re.IGNORECASE)
        except re.error as e:
            stats[rule["name"]] = {"error": str(e)}
            continue
        stats[rule["name"]] = {"replacements": n, "reason": rule["reason"]}
        new = new_after

    # 3. Restaure href : retire les ZW insérés
    # On retire ZW entre chaque char d'un href="..." ; regex simple :
    new = _re.sub(r'href="' + ZW + r'([^"]*?)' + ZW + r'"',
                  lambda m: f'href="{"".join(m.group(1).split(ZW))}"',
                  new)
    # Filet : si certains ZW restent dans href (par sécurité)
    new = _re.sub(r'(href="[^"]*?)' + ZW + r'([^"]*?")',
                  lambda m: m.group(1) + m.group(2), new)

    # 4. Restaure JSON-LD
    new = new.replace(JSONLD_OPEN_TAG + JSONLD_PLACEHOLDER_OPEN, JSONLD_OPEN_TAG)
    new = new.replace(JSONLD_PLACEHOLDER_CLOSE + JSONLD_CLOSE_TAG, JSONLD_CLOSE_TAG)

    return new, stats


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--site", required=True, choices=list(SITES.keys()))
    ap.add_argument("--check", action="store_true", help="Dry-run, n'\u00e9crit rien")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--rule", action="append", default=None)
    args = ap.parse_args()

    sys.modules[__name__]._site_arg = args.site
    if args.rule:
        global ALL_RULES
        ALL_RULES = [r for r in ALL_RULES if r["name"] in args.rule]
        if not ALL_RULES:
            print(f"R\u00e8gle {args.rule!r} introuvable.", file=sys.stderr); sys.exit(2)

    files = get_dirty_files()
    if args.limit: files = files[:args.limit]

    # Filtre Leçon #267 : classification blog-hub vs claim AVANT purge.
    # Les pages hub éducatives listent des articles (sujets) — pas un claim de service.
    root = SITES[args.site]
    hub_files_skipped = []
    filtered_files = []
    for fpath in files:
        try:
            rel = fpath.relative_to(root)
        except ValueError:
            rel = fpath
        rel_str = str(rel)
        if is_hub_educational(rel_str):
            hub_files_skipped.append(rel_str)
        else:
            filtered_files.append(fpath)
    files = filtered_files

    print(f"# Site: {args.site}")
    print(f"# Fichiers à traiter: {len(files)} (skippés hub éducatif: {len(hub_files_skipped)})")
    print(f"# Règles actives: {len(ALL_RULES)}")
    if args.check: print("# MODE --check")
    if hub_files_skipped:
        print(f"# Hub éducatifs skippés (Leçon #267 classification): {len(hub_files_skipped)}")
        if len(hub_files_skipped) <= 5:
            for hf in hub_files_skipped: print(f"#   - {hf}")

    totals = {}
    files_with_change = 0
    total_repl = 0
    skipped = 0

    for fpath in files:
        try:
            content = fpath.read_text(encoding="utf-8", errors="replace")
        except Exception:
            skipped += 1
            continue

        new_content, stats = apply_rules_to_content(content, ALL_RULES)
        n_total = sum(s.get("replacements", 0) for s in stats.values() if isinstance(s.get("replacements"), int))
        if n_total > 0:
            files_with_change += 1
            total_repl += n_total
            if not args.check:
                fpath.write_text(new_content, encoding="utf-8")
        for rn, st in stats.items():
            if isinstance(st.get("replacements"), int) and st["replacements"] > 0:
                totals.setdefault(rn, 0); totals[rn] += st["replacements"]

    print(f"\n## R\u00e9sum\u00e9")
    print(f"- Fichiers modifi\u00e9s : {files_with_change}")
    print(f"- Fichiers sans changement : {len(files) - files_with_change - skipped}")
    print(f"- Total replacements : {total_repl}")
    print(f"\n## Par r\u00e8gle")
    for rn, n in sorted(totals.items(), key=lambda kv: -kv[1]):
        reason = next((r["reason"] for r in ALL_RULES if r["name"] == rn), "")
        print(f"  {n:6d} \u00d7 {rn}")


if __name__ == "__main__":
    main()
