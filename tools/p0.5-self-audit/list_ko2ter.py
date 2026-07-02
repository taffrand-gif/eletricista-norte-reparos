#!/usr/bin/env python3.12
# -*- coding: utf-8 -*-
"""Listeur de fichiers pour vagues P0.5 ENR (tier 1 = KO2ter).

Usage :
  python3.12 list_ko2ter.py <repo_dir> <output_json>

Produit un JSON {"files":[rel_path, ...]} consomme par apply_vague.py.

Tier 1 stricte : on garde UNIQUEMENT les fichiers qui ont AU MOINS UN KO
appartenant a la categorie KO2ter_body_vs_badge (incoherence interne
badge vs body, detectable MÊME en NO_RESOL = D3 in-scope coherence).

On inclut aussi :
  - KO2ter_zone_attendue (page resolue, body zone != attendu)
  - KO2ter_body_seul    (page resolue, pas de badge, body zone != attendu)
car ces fichiers beneficient du meme patch canonique (body "Deslocação
Zona N" -> cible). Meme vague, meme patcher.
"""
import importlib.util
import json
import sys
from pathlib import Path

_TOOLS_DIR = Path(__file__).parent
sys.path.insert(0, str(_TOOLS_DIR))
_spec = importlib.util.spec_from_file_location(
    "self_audit_zones", _TOOLS_DIR / "self-audit-zones.py"
)
assert _spec is not None and _spec.loader is not None, "spec/loader manquant"
saz = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(saz)


def load_zonas():
    if not saz.SOURCE_OF_TRUTH.exists():
        sys.exit(f"Source-of-truth introuvable : {saz.SOURCE_OF_TRUTH}")
    return json.loads(saz.SOURCE_OF_TRUTH.read_text(encoding="utf-8"))


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(2)
    repo_dir = Path(sys.argv[1]).expanduser().resolve()
    out_path = Path(sys.argv[2]).expanduser().resolve()
    if not repo_dir.exists():
        sys.exit(f"Repo introuvable : {repo_dir}")

    zonas = load_zonas()
    print(f"Source-of-truth chargée : {saz.SOURCE_OF_TRUTH} ({len(zonas)} localités)")

    targets = []      # fichiers a patcher (relatif au repo)
    skipped = {"no_resol_out_of_area": [], "unknown_no_ko2ter_vs_badge": [],
               "es_html": [], "not_html": []}
    reasons_ko = {"body_vs_badge": 0, "zone_attendue": 0, "body_seul": 0}

    for root, dirs, files in saz.os.walk(repo_dir):
        dirs[:] = [d for d in dirs
                   if d not in {"node_modules", "_archive", "dist",
                                "build", ".git", ".hermes"}]
        for fn in files:
            if not fn.endswith(".html"):
                skipped["not_html"].append(fn)
                continue
            if fn.endswith("-es.html"):
                skipped["es_html"].append(fn)
                continue
            full = Path(root) / fn
            r = saz.audit_page(full, zonas)
            status = r.get("status")
            # Garde-fou OUT_OF_AREA : on ne patche JAMAIS (D6 pending).
            if status == "out_of_area":
                skipped["no_resol_out_of_area"].append(
                    str(full.relative_to(repo_dir)))
                continue
            rel = str(full.relative_to(repo_dir))
            seen_t1 = False
            for ko in r.get("kos", []):
                t = ko["type"]
                if t == "KO2ter_body_vs_badge":
                    reasons_ko["body_vs_badge"] += 1
                    seen_t1 = True
                elif t == "KO2ter_zone_attendue":
                    reasons_ko["zone_attendue"] += 1
                    seen_t1 = True
                elif t == "KO2ter_body_seul":
                    reasons_ko["body_seul"] += 1
                    seen_t1 = True
            if seen_t1:
                targets.append(rel)
            else:
                skipped["unknown_no_ko2ter_vs_badge"].append(rel)

    out_path.write_text(
        json.dumps({"files": targets}, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )
    print(f"\n=== Listeur vagues P0.5 ENR — tier 1 (KO2ter) ===")
    print(f"  Repo          : {repo_dir}")
    print(f"  Output JSON   : {out_path}")
    print(f"  Cibles patch  : {len(targets)}")
    print(f"    body_vs_badge     : {reasons_ko['body_vs_badge']}")
    print(f"    zone_attendue     : {reasons_ko['zone_attendue']}")
    print(f"    body_seul         : {reasons_ko['body_seul']}")
    print(f"  Skipped :")
    print(f"    out_of_area       : {len(skipped['no_resol_out_of_area'])}")
    print(f"    -es.html          : {len(skipped['es_html'])}")
    print(f"    autres (no KO2ter): {len(skipped['unknown_no_ko2ter_vs_badge'])}")


if __name__ == "__main__":
    main()
