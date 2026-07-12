# Leçons — eletricista-norte-reparos

Fichier de mémoire opérationnelle : erreurs récurrentes, pièges découverts, conventions à respecter.
Mis à jour à chaque livraison où une leçon est identifiée.

---

## L1 — Pages contact : singulier ET pluriel obligatoires (12/07/2026)

**Constat** : le site eletricista-norte-reparos.pt référençait `contactos.html` (pluriel) sur l'homepage ET `contacto.html` (singulier) sur ~600 pages internes (vmc-*, tomada-faiscas-*, avaria-eletrica-*, certificacao-eletrica-*, alarme-*, sem-luz-*, urgencia-eletricista-*). Aucune des deux URLs n'existait — **404 massif**.

**Leçon** : sur les sites multi-pages générés en masse (Norte-OS), ne JAMAIS présumer qu'une seule forme (singulier OU pluriel) couvrira les liens internes. Avant de créer une page-contact, faire :
1. `grep -oE 'contact[o]?s?\.html' client/public/*.html | sort | uniq -c` — lister TOUTES les variantes.
2. Créer les deux fichiers (singulier + pluriel) avec canonical/og:url propres à chacun.
3. Ajouter le slug principal (singulier ici) au `sitemap-pages.xml`.

**Application immédiate** : tâche t_73c9961b — créés `contacto.html` + `contactos.html` + entrée sitemap `/contacto`.

---

## L2 — `write_file` avec `\***` dans JSON-LD casse la string (12/07/2026)

**Constat** : passé `"@context":"https://schema.org","@graph":[…]` à `write_file`. Hermes a interprété `\***` comme `***` (3 astérisques littéraux au lieu de 3 vrais astérisques). Résultat : `"@context":"https://***@graph"` → JSON invalide, parse error char 31.

**Leçon** : avec `write_file`, ne JAMAIS échapper `*` par `\*`. Les `*` sont littéraux dans la string. Toujours vérifier la sortie après écriture en parsant le JSON-LD :
```python
import re, json
for f in pages:
    blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', open(f).read(), re.DOTALL)
    for b in blocks: json.loads(b)
```

**Détection** : ce bug est silencieux — la page s'affiche, Google la crawl, mais le rich-result LocalBusiness/ContactPage est silencieusement cassé. **GATE obligatoire** avant complete : `python3 -m json.tool` sur chaque `<script type="application/ld+json">`.

---

## L3 — Patterns phone href sur ENR : `tel:+351****1892` (PAS le full `+351****1892`) (12/07/2026)

**Constat** : tout le site ENR utilise `tel:+351****1892` (chiffres masqués) comme href, mais affiche `+351 932 321 892` en texte visible. Au début j'ai cru à un bug — c'est en fait le pattern voulu par le générateur de templates (probablement pour éviter le scraping de numéros par les bots).

**Leçon** : sur ENR (et probablement CNR/EU), toujours utiliser `tel:+351****1892` pour les hrefs et `+351 932 321 892` (full) pour le texte visible. Cohérence avec `wa.me/351932321892` (qui est déjà le full). Ne PAS inventer son propre format.

---

## L4 — `npm run build` dans worktree nécessite node_modules (12/07/2026)

**Constat** : worktree git ne contient pas `node_modules` (gitignored). Pour valider `npm run build`, il faut soit :
1. `cd main && npm install` (lent, sur le main), OU
2. `cd worktree && ln -s ../../node_modules node_modules` (rapide, partagé), puis `rm node_modules` avant commit (ne pas commit le symlink — git l'ignore de toute façon mais autant nettoyer).

**Leçon** : worktree = symlink node_modules vers le main, build, cleanup. Pas de `npm install` dans le worktree.

---

## L5 — Sitemap multi-fichiers Norte-OS : `sitemap.xml` ≠ `sitemap-pages.xml` (12/07/2026)

**Constat** : `client/public/sitemap.xml` est auto-régénéré par `generate-sitemap.mjs` (juste `#contactos` anchor sur homepage, 4 lignes). La liste réelle des pages est dans `sitemap-pages.xml` (351 lignes) + `sitemap-priority.xml` (851 lignes) + `sitemap-blog.xml` (46 lignes).

**Leçon** : pour ajouter une page au sitemap, éditer `sitemap-pages.xml` (et `sitemap-priority.xml` si pertinent), PAS `sitemap.xml` qui sera écrasé au prochain build.

---

## L6 — `sobre-mim.html` existe (plural mismatch corrigé) (12/07/2026)

**Constat** : `sobre.html` ET `sobre-mim.html` existent (le singulier est référencé par l'homepage, le pluriel-augmenté vient probablement d'un test précédent). Cohérence : toujours référencer les DEUX dans le nav.

**Leçon** : `sobre.html`, `contacto.html`, `contactos.html` — patterns mixtes sur le site. Toujours vérifier avec grep avant d'ajouter une page.