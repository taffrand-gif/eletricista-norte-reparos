#!/usr/bin/env python3
import os, re, glob

cidades_dir = 'client/src/pages/cidades'
fixed_files = []
for filepath in sorted(glob.glob(f'{cidades_dir}/*.tsx')):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    changed = False
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        # Look for line where answer: " ... without closing "
        stripped = line.strip()
        if stripped.startswith('answer:') and '"' in stripped and not stripped.rstrip().endswith('",'):
            # Unterminated string - get city name for context
            city = os.path.basename(filepath).replace('.tsx', '').replace('Da', ' da ').replace('De', ' de ')
            new_lines.append('    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",\n')
            new_lines.append('  },\n')
            changed = True
            i += 2  # skip next line too
        else:
            new_lines.append(line)
            i += 1

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        fixed_files.append(os.path.basename(filepath))

print(f'Fixed {len(fixed_files)} files: {fixed_files}')
print('Done')