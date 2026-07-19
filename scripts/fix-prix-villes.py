#!/usr/bin/env python3
"""
Fix displacement prices in client/public/eletricista-*.html files.

Grille verrouillée (R-fix/prix-villes-v2):
  Z1: 0-15 km  → 15€       Z4: 50-70 km → 45€
  Z2: 15-30 km → 25€       Z5: 70-90 km → 55€
  Z3: 30-50 km → 35€       Z6: 90-140 km → 65€

Pour chaque fichier:
  - lit le km de la ville (skip 130 km = portée max service)
  - déduit la zone + prix cible
  - harmonise le prix PARTOUT (body, meta, og, JSON-LD price field)
  - harmonise le label "Zona N" (N=1..6, standalone — PAS "Z1-Z6")
  - remplace '48h' patterns par 'confirmado por telefone'
  - ne touche PAS 70€/h, +50%, ni la phrase grid "(15€ a 65€ deslocação)"

Idempotent.
"""
import re
import sys
from pathlib import Path
from collections import Counter

# Grille verrouillée (max_km_inclusif, zone_label_sans_Z, prix_eur)
ZONES = [
    (15,  '1', 15),
    (30,  '2', 25),
    (50,  '3', 35),
    (70,  '4', 45),
    (90,  '5', 55),
    (140, '6', 65),
]

# Prix de déplacement à remplacer:
# - 15/25/35/45/55/65€ = grille officielle (Z1-Z6)
# - 20/30/40€ = anomalies courantes (ne correspondent à aucune zone, toujours faux)
# - 70€/h exclu = main d'oeuvre horaire
# - 110€/180€ exclus = prix avaria/inspeção (pas deslocação)
# - 500.000€ exclu = assurance RC
DISPLACEMENT_PRICES = ['15', '20', '25', '30', '35', '40', '45', '55', '65']

# Phrases à protéger (descriptions de la grille globale, PAS prix de la ville)
PROTECTED_PHRASES = [
    # Standard: '(15€ a 65€ deslocação)' — apparaît dans 94% des fichiers
    ('(15€ a 65€ deslocação)', '___PROT_GRID_RANGE___'),
]

# Patterns 48h à remplacer (variantes) — case-insensitive
PATTERNS_48H = [
    (re.compile(r'[Oo]r[çc]amento por escrito em 48\s*h,?\s*sem compromisso'),
     'orçamento por escrito, confirmado por telefone, sem compromisso'),
    (re.compile(r'[Oo]r[çc]amento detalhado em 48\s*h,?\s*sem compromisso'),
     'orçamento por escrito, confirmado por telefone, sem compromisso'),
    (re.compile(r'[Oo]r[çc]amento por escrito em 48\s*h(?!\s*,)'),
     'orçamento por escrito, confirmado por telefone'),
    (re.compile(r'[Oo]r[çc]amento detalhado em 48\s*h(?!\s*,)'),
     'orçamento por escrito, confirmado por telefone'),
    (re.compile(r'em 48\s*h após visita técnica'),
     'após visita técnica, confirmado por telefone'),
    (re.compile(r'em <strong>48\s*h</strong>\s*após visita'),
     'após visita, confirmado por telefone'),
    (re.compile(r'\bem 48\s*horas\b'),
     'confirmado por telefone'),
    (re.compile(r'\bem <strong>48\s*h</strong>\b'),
     'confirmado por telefone'),
    (re.compile(r'<strong>48\s*h</strong>'),
     'confirmado por telefone'),
]


def get_zone(km):
    for max_km, label, price in ZONES:
        if km <= max_km:
            return label, price
    return None, None


def extract_city_km(content):
    """Extrait la distance de la ville (skip 130 km = portée max service)."""
    kms = re.findall(r'(\d+(?:[.,]\d+)?)\s*km', content)
    if not kms:
        return None
    city_kms = []
    for k in kms:
        try:
            val = float(k.replace(',', '.'))
            if val >= 130:  # skip portée max service
                continue
            if val <= 0:
                continue
            city_kms.append(val)
        except ValueError:
            continue
    if not city_kms:
        return None
    counts = Counter(city_kms)
    return counts.most_common(1)[0][0]


def fix_content(content):
    """Retourne (nouveau_contenu, changements)."""
    original = content
    changes = []
    sentinels_used = []

    # Étape 0: Protéger les phrases grid (avant tout remplacement)
    for phrase, sentinel in PROTECTED_PHRASES:
        if phrase in content:
            content = content.replace(phrase, sentinel)
            sentinels_used.append((sentinel, phrase))

    # Étape 1: Déterminer la zone cible
    city_km = extract_city_km(content)  # NB: content peut contenir des sentinels, OK car pas de km
    zone_label, target_price = None, None
    if city_km is not None:
        zone_label, target_price = get_zone(city_km)

    if zone_label is not None and target_price is not None:
        # 1a. Remplacer les prix de déplacement (15€/25€/35€/45€/55€/65€)
        for old_price in DISPLACEMENT_PRICES:
            # (?<![0-9]) évite de matcher dans des nombres plus grands (ex: 150€)
            pattern = re.compile(rf'(?<![0-9]){old_price}€')
            matches = pattern.findall(content)
            if matches:
                count = len(matches)
                content = pattern.sub(f'{target_price}€', content)
                if old_price != str(target_price):
                    changes.append(f'  - {old_price}€ → {target_price}€  (×{count})')

        # 1b. Remplacer le champ JSON-LD "price":"<X>"
        for old_price in DISPLACEMENT_PRICES:
            pattern = re.compile(rf'"price":"{old_price}"')
            if pattern.search(content):
                content = pattern.sub(f'"price":"{target_price}"', content)
                if old_price != str(target_price):
                    changes.append(f'  - JSON-LD price:"{old_price}" → "{target_price}"')

        # 1c. Remplacer les labels "Zona N" (N=1..6, standalone)
        # N'est PAS matché par "Z1-Z6" (qui n'a pas "Zona " prefix)
        pattern_zona = re.compile(r'\b(Zona)\s+(\d+)\b')
        zona_subs = 0
        def replace_zona(m, _target=zone_label):
            nonlocal zona_subs
            existing = m.group(2)
            if existing != _target:
                zona_subs += 1
            return f'{m.group(1)} {_target}'
        content = pattern_zona.sub(replace_zona, content)
        if zona_subs > 0:
            changes.append(f'  - Zona N → Zona {zone_label}  ({zona_subs}× wrong → corrected)')

        # 1c-bis. Remplacer l'attribut HTML data-zone="N"
        pattern_data_zone = re.compile(r'data-zone="(\d+)"')
        data_zone_subs = 0
        def replace_data_zone(m, _target=zone_label):
            nonlocal data_zone_subs
            existing = m.group(1)
            if existing != _target:
                data_zone_subs += 1
            return f'data-zone="{_target}"'
        content = pattern_data_zone.sub(replace_data_zone, content)
        if data_zone_subs > 0:
            changes.append(f'  - data-zone="N" → data-zone="{zone_label}"  ({data_zone_subs}× wrong → corrected)')

    # Étape 2: Remplacer les patterns 48h
    for pattern, replacement in PATTERNS_48H:
        if pattern.search(content):
            content = pattern.sub(replacement, content)
            changes.append(f'  - 48h → confirmado por telefone')

    # Étape 3: Restaurer les phrases protégées
    for sentinel, phrase in sentinels_used:
        content = content.replace(sentinel, phrase)

    if content != original:
        return content, changes
    return original, []


def main():
    public_dir = Path('/tmp/enr-prix-oc/client/public')
    files = sorted(public_dir.glob('eletricista-*.html'))
    print(f'Total files: {len(files)}')

    # Mode test (--limit N) ou run complet
    test_mode = False
    limit = None
    if len(sys.argv) > 1 and sys.argv[1] == '--limit':
        test_mode = True
        limit = int(sys.argv[2]) if len(sys.argv) > 2 else 5
        files = files[:limit]
        print(f'[TEST MODE] Limited to first {limit} files\n')

    total_changed = 0
    total_unchanged = 0
    errors = []
    for filepath in files:
        try:
            content = filepath.read_text(encoding='utf-8', errors='replace')
            new_content, changes = fix_content(content)
            if changes:
                total_changed += 1
                if test_mode:
                    print(f'=== {filepath.name} ===')
                    for c in changes:
                        print(c)
                    print()
                filepath.write_text(new_content, encoding='utf-8', errors='replace')
            else:
                total_unchanged += 1
        except Exception as e:
            errors.append((filepath.name, str(e)))

    print(f'=== SUMMARY ===')
    print(f'Changed:   {total_changed}')
    print(f'Unchanged: {total_unchanged}')
    print(f'Total:     {total_changed + total_unchanged}')
    if errors:
        print(f'\nERRORS ({len(errors)}):')
        for name, err in errors[:10]:
            print(f'  - {name}: {err}')


if __name__ == '__main__':
    main()