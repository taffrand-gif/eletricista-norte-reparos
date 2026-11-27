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
- `PASS_HTTP` : Preview publique `https://eletricista-norte-reparos-goy56babc-filipes-projects-4b992c3d.vercel.app/certiel-dgeg` = HTTP 200 ; variante `.html` = HTTP 200 ; `robots.txt` = HTTP 200 ; `sitemap.xml` = HTTP 200. Commande : `curl -L -sS -o /dev/null -w '%{http_code}\n'` sur chaque route, exécutée le 2026-11-26.
- `PASS_DOM` : contrôle indépendant navigateur sur la Preview prête : titre `Certiel ou DGEG — Quem certifica instalações elétricas em Portugal · TRIESP n.º 90062`, H1 unique, CTA `tel:+351932321892` et WhatsApp `wa.me/351932321892` visibles (5 liens au total), DGEG/TR​​IESP `90062`, limite `41,4 kVA`, Ficha/Termo et `350 € TTC` présents, JSON-LD parsable, dialogue RGPD avec boutons `Aceitar`/`Recusar`, aucun chevauchement CTA. Preuves : snapshot AX et mesures `browser_evaluate_readonly` du 2026-11-26.
- `PASS_PREVIEW` : déploiement Vercel `dpl_CcG7VZT5nNGKnzjFmF62we9Jy1CW` = `READY`, commit `8cb17fe59d5a292adf1bfe232bad6a6ac52d87c3`, build/prerender terminés ; rendu public contrôlé sur `/certiel-dgeg`.
- `NON VÉRIFIÉ` : régénération complète rejouée par le done-gate, contrôle Production et `PASS_PRODUCTION` (la PR n’est pas fusionnée).
- Statut gate : `PARTIEL — PASS_SOURCE + PASS_BUILD + PASS_HTTP + PASS_DOM + PASS_PREVIEW`, sans exception et sans publication. PR #723 conservée `OPEN`, `Draft=true`, `mergeStateStatus=CLEAN` ; aucun merge, Ready ou Production.
- Aucune exception autorisée.
