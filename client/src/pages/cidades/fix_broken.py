#!/usr/bin/env python3
import os, re

for fname in os.listdir('.'):
    if not fname.endswith('.tsx'):
        continue
    filepath = fname
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        lines = f.readlines()
    
    fixed_lines = []
    for line in lines:
        # Detect broken "Chegamos" answer lines:
        # - Starts with 'answer: "Chegamos'
        # - Does NOT end with '"\n' (no closing quote before newline)
        stripped = line.rstrip('\n')
        if stripped.startswith('answer: "Chegamos') and not stripped.endswith('"'):
            # This line is broken - replace entirely with fixed answer
            fixed_line = '        answer: "A nossa equipa actua com rapidez. Contacte-nos para saber mais." },\n'
            fixed_lines.append(fixed_line)
            print(f"Fixed broken line in {fname}")
        else:
            # Also fix "Chegamos" in complete strings that shouldn't be there
            if 'Chegamos a ' in line or 'Chegamos em ' in line:
                # Fix single-line complete Chegamos answers
                newline = re.sub(
                    r'answer: "Chegamos a [^"]+? em (?:approximately )?(?:[0-9]+h[0-9]+|[0-9]+-[0-9]+ minutos)[^"]*"',
                    'answer: "A nossa equipa actua com rapidez. Contacte-nos para saber mais."',
                    line
                )
                newline = re.sub(
                    r'answer: "[^"]*Chegamos em (?:approximately )?[0-9]+-[0-9]+ minutos[^"]*"',
                    'answer: "A nossa equipa actua com rapidez. Contacte-nos para saber mais."',
                    newline
                )
                # Fix Macedo references
                newline = re.sub(
                    r'estamos sediados em Trás-os-Montes[^"]*',
                    'a nossa equipa actua em Trás-os-Montes e regiao',
                    newline
                )
                newline = re.sub(
                    r'A deslocacao a Trás-os-Montes[^"]*',
                    'A deslocacao a Trás-os-Montes varia conforme a zona',
                    newline
                )
                fixed_lines.append(newline)
            else:
                fixed_lines.append(line)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)
    print(f"Processed: {fname}")