# Gate — Pilote ENR DGEG / TRIESP / Ficha / Termos

## Périmètre verrouillé

- Dépôt : `eletricista-norte-reparos`
- Branche : `seo-pilot-enr-dgeg-20261126`
- Base : `origin/main` à `d00fc299f8`
- Fichier servi autorisé : `client/public/certiel-dgeg.html` uniquement.
- Hors périmètre : pages locales, blogs, sitemaps, autres branches/PR ENR, merge, Ready et Production.

## Source de vérité et contrôles prévus

- Faits métier : `../_governance/20-BUSINESS-FACTS.json` et doctrine centrale.
- Contrôler avant code : title, canonical, H1, intention certification, DGEG/TR​​IESP autorisé, Ficha Eletrotécnica, Termo de Responsabilidade, CTA téléphone/WhatsApp, prix uniquement s’ils sont présents dans la source de vérité.
- Gate attendu : `PASS_SOURCE` puis build/Preview/DOM indépendants ; aucun statut déduit d’un grep seul.

## Résultat

- Modification fonctionnelle : `client/public/certiel-dgeg.html` uniquement ; claims d’assurance/documentation automatique retirés ou prudencés, formulation autorisée `Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso` ajoutée/clarifiée, CTA téléphone/WhatsApp conservés.
- `PASS_BUILD` : `npm run build` exécuté avec succès après liaison réversible vers les dépendances locales existantes ; Vite OK, esbuild serveur OK, `check-sitemap OK`, prerender OK, 26 références d’assets réalignées.
- `PASS_SOURCE` : diff limité au manifeste et à la page témoin ; aucune page locale, aucun sitemap ni générateur modifié. Contrôles textuels des claims exécutés dans le périmètre du fichier ; aucun résidu des formulations retirées.
- `NON VÉRIFIÉ` : Preview Vercel, HTTP public, DOM indépendant, régénération complète du fichier HTML témoin et Production.
- Statut gate : `PARTIEL — PASS_SOURCE + PASS_BUILD`, sans exception et sans publication. PR/Ready/merge à venir uniquement après Preview/DOM ; aucun merge ni Production.
- Aucune exception autorisée.
