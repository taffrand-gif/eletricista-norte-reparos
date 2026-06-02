#!/usr/bin/env python3
import glob, re

fixed = []
for fp in sorted(glob.glob('client/src/pages/cidades/*.tsx')):
    with open(fp) as f:
        content = f.read()

    # Fix pattern where { opening brace is missing before question in FAQ
    # Pattern: ...answer: "...",\n  question: "..." -> should be { question: "...", answer: "..." }
    # Also handle missing ]; before return (

    lines = content.split('\n')
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # If a line starts with "question:" or "  question:" without being inside an object
        if stripped.startswith('question:') and not stripped.startswith('{'):
            # Check if previous line is the closing of previous object or just after [
            if new_lines and new_lines[-1].strip() in ['},', '];']:
                # Good - previous line is properly closed
                new_lines.append(line)
            elif new_lines and '{' in new_lines[-1]:
                # Previous line has { but this line is a direct question
                new_lines.append(line)
            else:
                # Missing { - add it
                new_lines.append('  {')
                new_lines.append(line)
        elif stripped == 'return (' and new_lines and new_lines[-1].strip() == '},':
            # Insert ]; before return
            new_lines[-1] = '  },'
            new_lines.append('];')
            new_lines.append('')
            new_lines.append(line)
        else:
            new_lines.append(line)
        i += 1

    new_content = '\n'.join(new_lines)
    if new_content != content:
        with open(fp, 'w') as f:
            f.write(new_content)
        fixed.append(fp.split('/')[-1])

print(f'Fixed {len(fixed)} files')
for f in fixed:
    print(f'  - {f}')