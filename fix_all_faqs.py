#!/usr/bin/env python3
import os, re, glob

# Fix all cidade pages with broken FAQ strings
cidades_dir = 'client/src/pages/cidades'
for filepath in sorted(glob.glob(f'{cidades_dir}/*.tsx')):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern: answer: "text that is unclosed and next line starts with },
    # Fix: close the string properly
    fixed = False
    # Find lines where answer: " ... and next line is },
    lines = content.split('\n')
    for i in range(len(lines)):
        line = lines[i]
        if re.match(r'^\s+answer:\s+"[^"]*$', line.strip()):
            # This line has an unterminated string
            # The next line is likely },
            if i+1 < len(lines) and lines[i+1].strip() == '},':
                # Extract city name from file path
                basename = os.path.basename(filepath)
                city = basename.replace('.tsx', '').replace('Da', ' da ').replace('De', ' de ').replace('Do', ' do ')
                # Rebuild the line with proper closing
                lines[i] = '    answer: "Chegamos rapidamente. Cobrimos todo o conselho.",'
                lines[i+1] = '  },'
                fixed = True

    if fixed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))
        print(f'Fixed: {os.path.basename(filepath)}')

print('Done')