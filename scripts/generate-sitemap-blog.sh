#!/bin/bash

# Script pour régénérer sitemaps avec nouveaux articles blog
# Sites: staff-seekers (eletricista-norte-reparos.pt)
#
# Patch AUDIT-SITEMAP-TIERS-2026-07-30 (t_85288418) : `<lastmod>` calculé
# via `git log -1 %aI -- <path>` (date honnête du fichier servi) au lieu
# d'une date hardcodée.

set -euo pipefail

SITE_URL="https://eletricista-norte-reparos.pt"

git_lastmod() {
  local relPath="$1"
  local d
  d="$(git log -1 --format='%aI' -- "$relPath" 2>/dev/null | head -1 || true)"
  if [ -z "$d" ]; then
    d="$(date +%Y-%m-%d)"
  fi
  printf '%s' "${d:0:10}"
}

echo "Génération sitemap blog avec 60 articles..."

TMP_FILE="$(mktemp -t sitemap-blog.XXXXXX)"
trap 'rm -f "$TMP_FILE"' EXIT

cat > "$TMP_FILE" <<XMLEOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>${SITE_URL}/blog/</loc><lastmod>$(git_lastmod 'client/public/blog/index.html')</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
XMLEOF

count=0
shopt -s nullglob
for file in content/blog/*.md; do
  filename=$(basename "$file" .md)
  rel="public/blog/${filename}.html"
  d="$(git_lastmod "$rel")"
  echo "<url><loc>${SITE_URL}/blog/${filename}.html</loc><lastmod>${d}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>" >> "$TMP_FILE"
  count=$((count + 1))
done

echo "</urlset>" >> "$TMP_FILE"

mv "$TMP_FILE" public/sitemap-blog.xml
trap - EXIT

echo "✓ Sitemap blog généré avec $count articles"
