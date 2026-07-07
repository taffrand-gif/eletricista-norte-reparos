#!/usr/bin/env python3
"""
Prototype V2 ENR declaim — Patch + Gates.

Applique le mapping EU V2 + 3 mappings ENR spécifiques + 2 mappings faux-services
(Page 1 cert dédiée + Page 2 faux-services + DGEG aside).

Doctrine §L1-L8 (prototype 2-pages) :
- AVANT commit : inventaire exhaustif ligne-par-ligne
- Order M1 : longueur décroissante de old
- Gate L4 : 5 gates obligatoires (gate regex, gate faux-services, check-purge-witness,
  sanity prix/tél/CJK, symétrie insertions/deletions)
- M8 : 8 variantes casse cover pour TIER 2
- M11-bis : gate étendu head+JSON-LD+body (via get_scannable)
"""
from __future__ import annotations
import os
import re
import sys
import subprocess

sys.path.insert(0, '/Users/admin/.hermes/skills/software-development/norte-os-content-cleanup/scripts')
from norte_os_visible_body import get_scannable, GATE_RE_CERT, count_gate

# ===== MAPPINGS =====
# Tri M1 : longueur décroissante de old
MAPPINGS_CERT = sorted([
    # ENR-A1 : Aside DGEG Direção-Geral avec espaces manquants autour de "atualizada</strong>"
    ("<li><strong> atualizada</strong> (Direção-Geral de Energia e Geologia</li>",
     "<li><strong> atualizada</strong></li>"),
    # ENR-A2 : JSON-LD FAQPage "emissão de profissionais oficial, válido" — reformulé cohérent
    ("Certificação a partir de 180€ na Zona 1. Inclui inspeção completa da instalação, emissão de profissionais oficial, válido.",
     "Inspeção a partir de 180€ na Zona 1. Inclui inspeção completa da instalação, emissão de relatório técnico detalhado."),
    # ENR-A3 : "Inspeção completa + emissão de certificado válido por" (variante tronquée)
    ("Inspeção completa + emissão de certificado válido por",
     "Inspeção completa + emissão de relatório técnico"),
    # TIER 1 EU PR1 (8 mappings directs)
    ("Certificação elétrica oficial. Válida para licenciamento, seguro, venda de imóvel.",
     "Inspeção completa da instalação com relatório técnico detalhado."),
    ("📋 Certificado de exploração", "🔎 Inspeção da instalação"),
    ("Para instalações existentes. Inspeção completa + emissão de certificado válido por 8 anos.",
     "Para instalações existentes. Inspeção completa do estado da instalação + relatório técnico."),
    ("🏗️ Certificado de projeto", "📑 Relatório técnico"),
    ("Certificado obrigatório para escritura de imóvel e contrato de arrendamento.",
     "Documento do estado da instalação elétrica, entregue no fim do serviço."),
    ("Sim, sempre. Fatura detalhada + relatório técnico quando aplicável. Válido para seguro e licenciamento.",
     "Sim, sempre. Fatura detalhada com NIF + relatório técnico da intervenção."),
    ("certificação de instalações elétrica atualizada" if False else "certificação de instalações elétricas atualizada",
     "inspeção de instalações elétricas atualizada"),
    ("Emissão de certificado de exploração elétrica oficial, válido para licenciamento e seguro.",
     "Emissão de relatório técnico da instalação."),
    # TIER 1-bis PR1 (Aside equipment Fluke strip "certificado")
    ("<li><strong>Equipamento certificado:</strong> multímetro Fluke, detetor de tensão</li>",
     "<li><strong>Equipamento profissional:</strong> multímetro Fluke, detetor de tensão</li>"),
    # TIER 2 EU PR1 (M8 — 8 variantes casse de "certificação elétrica")
    ("Certificacao Eletrica", "Inspeção Elétrica"),
    ("Certificação Elétrica", "Inspeção Elétrica"),
    ("certificação elétrica", "inspeção elétrica"),
    # TIER 1 EU PR2 (Pacote + FAQ urgente + Substituição certificado)
    ("Substituição ou upgrade certificado", "Substituição ou upgrade do quadro"),
    ("Certificação elétrica oficial", "Relatório técnico detalhado"),
    ("Certificado oficial para licenças e seguros", "Diagnóstico e relatório técnico da instalação"),
    ("Certificado reconhecido", "Relatório detalhado"),
    ("certificado de exploração", "relatório técnico"),
    ("certificação oficial", "relatório técnico"),
    ('<strong style="color:#FF6B35">Tem certificação?</strong>',
     '<strong style="color:#FF6B35">Fazem orçamento antes de começar?</strong>'),
    ('<div class="pacote"><div class="icon">&#128220;</div><h3>Certificação Elétrica</h3>',
     '<div class="pacote"><div class="icon">&#128270;</div><h3>Inspeção Elétrica</h3>'),
    ('<h3>Certificação Elétrica</h3>', '<h3>Inspeção Elétrica</h3>'),
    ("diferencial 30mA, barramento de terra. Certificação oficial.",
     "diferencial 30mA, barramento de terra. Relatório técnico."),
    ("Material de qualidade (marcas reconhecidas", "Material de qualidade (marcas de referência"),
    ("Material certificados", "Material profissional"),
    ("Certificação de instalações elétricas", "Inspeção de instalações elétricas"),
    ("certificação de instalações elétricas", "inspeção de instalações elétricas"),
    ("Instalação e certificação elétrica", "Instalação elétrica"),
    ("Emissão de relatório técnico elétrica oficial, válido para licenciamento e seguro.",
     "Emissão de relatório técnico da instalação."),
], key=lambda m: -len(m[0]))

MAPPINGS_FAUX_SVC = [
    # FS-A1 : Aside DGEG Empresa inscrita — strip claim DGEG
    ("A Norte Reparos é uma empresa inscrita na (Direção-Geral de Energia e Geologia) para a emissão de fichas eletrotécnicas",
     "A Norte Reparos realiza inspeções elétricas com técnicos com experiência para a emissão de fichas eletrotécnicas"),
    # FS-A2 : Énumération wallbox/ar condicionado/bomba de calor — retrait noms
    ("após adição de novos equipamentos (wallbox, ar condicionado, bomba de calor)",
     "após adição de novos equipamentos de grande carga"),
]

# Faux-services regex (conservateur — claim fort uniquement)
SVC_RE = r'\b(climatiza[çc][aã]o|ar\s+condicionado|bomba\s+de\s+calor|fotovoltaic|wallbox|ve[ií]culo\s+el[eé]trico|carregador\s+para)\b'

PAGES = [
    {
        'path': 'client/public/eletricista-certificacao-eletrica-almendra.html',
        'label': 'CERT (Almendra)',
        'mappings': MAPPINGS_CERT,
    },
    {
        'path': 'client/public/tecnologia-fluke-camara-termica-eletrica.html',
        'label': 'FAUX-SVC (Tecnologia Fluke)',
        'mappings': MAPPINGS_CERT + MAPPINGS_FAUX_SVC,
    },
]


def apply_mappings(text: str, mappings: list) -> tuple[str, list]:
    """Apply mappings (M1 order — already sorted) + return diff applied."""
    out = text
    applied = []
    for old, new in mappings:
        n = out.count(old)
        if n:
            out = out.replace(old, new)
            applied.append((old, new, n))
    return out, applied


def gate_cert(text: str) -> int:
    """Gate cert étendu head+JSON-LD+body."""
    return count_gate(text)


def gate_faux_services(text: str) -> int:
    """Gate faux-services (claim fort uniquement)."""
    body = get_scannable(text)
    return len(re.findall(SVC_RE, body, re.IGNORECASE))


def main():
    print("=" * 70)
    print("V2 ENR DECLAIM — PROTOTYPE 2 PAGES")
    print("=" * 70)

    repo_root = '/Users/admin/work/Sites/.worktrees/enr-v2-proto'
    os.chdir(repo_root)

    all_ok = True
    for spec in PAGES:
        path = spec['path']
        label = spec['label']

        print(f"\n=== {label}: {path} ===")

        text_orig = open(path, encoding='utf-8').read()

        # Vérif invariantes AVANT
        before_tel = text_orig.count("932 321 892")
        before_70 = text_orig.count("70 €")
        before_180 = text_orig.count("180€")
        cert_before = gate_cert(text_orig)
        svc_before = gate_faux_services(text_orig)

        # Patch
        text_new, applied = apply_mappings(text_orig, spec['mappings'])
        n_replaced = sum(n for _, _, n in applied)
        n_diff = len(text_new) - len(text_orig)

        # Vérif invariantes APRÈS
        after_tel = text_new.count("932 321 892")
        after_70 = text_new.count("70 €")
        after_180 = text_new.count("180€")
        cert_after = gate_cert(text_new)
        svc_after = gate_faux_services(text_new)

        # CJK/cyr
        cjk_before = len(re.findall(r'[\u4e00-\u9fff\u0400-\u04ff]', text_orig))
        cjk_after = len(re.findall(r'[\u4e00-\u9fff\u0400-\u04ff]', text_new))

        # Output
        print(f"  Avant:")
        print(f"    gate cert: {cert_before}, gate faux-svc: {svc_before}")
        print(f"    Invariants: 932={before_tel}, 70€={before_70}, 180€={before_180}, CJK/cyr={cjk_before}")
        print(f"  Après:")
        print(f"    gate cert: {cert_after}, gate faux-svc: {svc_after}")
        print(f"    Invariants: 932={after_tel}, 70€={after_70}, 180€={after_180}, CJK/cyr={cjk_after}")
        print(f"  Mappings:    {len(applied)} mappings appliqués, {n_replaced} remplacements totaux")
        print(f"  Diff bytes:  {n_diff:+d} ({len(text_orig)} → {len(text_new)})")

        # Gates
        ok = True
        if cert_after != 0:
            print(f"  ❌ FAIL: gate cert != 0 ({cert_after} hits)")
            ok = False
        if svc_after != 0:
            print(f"  ❌ FAIL: gate faux-svc != 0 ({svc_after} hits)")
            ok = False
        if after_tel != before_tel:
            print(f"  ❌ FAIL: régression tél 932 ({before_tel} → {after_tel})")
            ok = False
        if after_70 != before_70:
            print(f"  ❌ FAIL: régression prix 70€ ({before_70} → {after_70})")
            ok = False
        if after_180 != before_180:
            print(f"  ❌ FAIL: régression prix 180€ ({before_180} → {after_180})")
            ok = False
        if cjk_after != cjk_before:
            print(f"  ❌ FAIL: régression CJK/cyr ({cjk_before} → {cjk_after})")
            ok = False
        if ok:
            print(f"  ✅ PASS — 6 gates OK")

        if ok:
            # Save patched file
            with open(path, 'w', encoding='utf-8') as fp:
                fp.write(text_new)
            print(f"  💾 Fichier sauvegardé")
        else:
            all_ok = False
            # Pas de save — garder original pour debug
            print(f"  ⚠️ Pas de save (gates fail)")

    print()
    print("=" * 70)
    if all_ok:
        print("✅ PROTOTYPE 2 PAGES — TOUS GATES PASS")
    else:
        print("❌ PROTOTYPE 2 PAGES — CERTAINS GATES FAIL — voir détails ci-dessus")
    print("=" * 70)
    return 0 if all_ok else 1


if __name__ == '__main__':
    sys.exit(main())
