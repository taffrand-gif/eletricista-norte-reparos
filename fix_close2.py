#!/usr/bin/env python3
import glob

fixed = []
for fp in sorted(glob.glob('client/src/pages/cidades/*.tsx')):
    with open(fp) as f:
        lines = f.readlines()

    # Find the line with `];` (faq end) and line with `return (`
    faq_closing = -1
    return_line = -1
    for i, line in enumerate(lines):
        if line.strip() == '];':
            faq_closing = i
        if 'return (' in line and faq_closing > 0:
            return_line = i
            break

    if faq_closing > 0 and return_line > 0:
        between = [lines[j].strip() for j in range(faq_closing+1, return_line) if lines[j].strip()]
        if between and between[0] == '},':  # missing ];
            lines[faq_closing] = '];\n'
            with open(fp, 'w') as f:
                f.writelines(lines)
            fixed.append(fp.split('/')[-1])

print(f'Fixed {len(fixed)} files')
for f in fixed:
    print(f'  - {f}')