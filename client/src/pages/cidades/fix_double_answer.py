#!/usr/bin/env python3
import os

for fname in os.listdir('.'):
    if not fname.endswith('.tsx'):
        continue
    filepath = fname
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    
    # Check if this file has the double-answer pattern
    if 'answer: "Chegamos' in content and 'em aproximadamente answer:' in content:
        # This is the broken pattern - replace entire file content with clean version
        # Find the FAQ section and replace the broken answers
        lines = content.split('\n')
        fixed_lines = []
        i = 0
        while i < len(lines):
            line = lines[i]
            stripped = line.rstrip('\n')
            
            # Check if this line starts an answer with "Chegamos" AND contains "answer:"
            if 'answer: "Chegamos' in line and 'em aproximadamente answer:' in line:
                # This is the broken line - replace entirely
                fixed_lines.append('        answer: "A nossa equipa actua com rapidez. Contacte-nos para saber mais." },\n')
                print(f"Fixed double-answer in {fname}")
                i += 1
                # Skip the closing },\n line too if it follows
                if i < len(lines) and lines[i].strip() == '},':
                    i += 1
                continue
            fixed_lines.append(line)
            i += 1
        
        content = '\n'.join(fixed_lines)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {fname}")
    else:
        print(f"No change: {fname}")