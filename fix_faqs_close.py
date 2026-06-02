#!/usr/bin/env python3
import os, glob

cidades_dir = 'client/src/pages/cidades'
fixed = []
for filepath in sorted(glob.glob(f'{cidades_dir}/*.tsx')):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Find faqs end and return position
    faqs_end = -1
    for i, line in enumerate(lines):
        if 'faqs = [' in line:
            # find closing ]
            for j in range(i+1, len(lines)):
                if lines[j].strip() == '];' and faqs_end < 0:
                    faqs_end = j
                    break

    if faqs_end < 0:
        continue

    # Find return (
    return_line = -1
    for i in range(faqs_end+1, len(lines)):
        if 'return (' in lines[i]:
            return_line = i
            break

    if return_line > 0 and faqs_end > 0:
        # Check what's between
        between = [l.strip() for l in lines[faqs_end+1:return_line] if l.strip()]
        if between and between[0] != '];':
            # Insert ]; just before return (
            lines[faqs_end] = '];\n'
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(lines)
            fixed.append(os.path.basename(filepath))

print(f'Fixed {len(fixed)} files')
for f in fixed:
    print(f'  - {f}')