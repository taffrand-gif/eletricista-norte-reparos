# Gate — Pilote ENR wallbox / carregador de veículo elétrico

## Périmètre verrouillé

- Dépôt : `eletricista-norte-reparos`
- Branche : `seo-pilot-enr-wallbox-20261127`
- Base : `origin/main` à `d00fc299f8`
- Fichier servi autorisé : `client/public/carregador-veiculo-eletrico.html` uniquement.
- Hors périmètre : pages locales, blogs, sitemaps, autres branches/PR ENR, merge, Ready et Production.

## Source de vérité et contrôles prévus

- Faits métier : `../_governance/20-BUSINESS-FACTS.json` et doctrine centrale.
- Faits autorisés à conserver : service wallbox dans le périmètre ENR, statut DGEG/TR​​IESP `90062`, Execução em Baixa Tensão jusqu’à `41,4 kVA`, téléphone `932 321 892`, modèle tarifaire central et formulation Ficha/Termos à partir de `350 € TTC` sous devis conforme au cas.
- Claims à vérifier/prudencer avant code : Fundo Ambiental, marques/modèles, délais, puissance, composants inclus, assurance, documentation automatique, horaires et zone commerciale.
- Gate attendu : `PASS_SOURCE` puis build/HTTP/Preview/DOM indépendants ; aucun statut déduit d’un grep seul.

## Résultat intermédiaire

- `PASS_SOURCE` : page réécrite dans `client/public/carregador-veiculo-eletrico.html` uniquement. Un H1, title/canonical présents, DGEG/TR​​IESP `90062`, limite `41,4 kVA`, téléphone/WhatsApp, tarifs centraux et Ficha/Termos `350 € TTC` conservés. Claims non prouvés retirés : Fundo Ambiental, marques, délais, forfaits, IVA isento, visite gratuite, équipements plomberie, zone Douro et documentation automatique. JSON-LD unique parsable. Témoin source : script Python avec assertions négatives/positives, exit 0, 2026-11-27.
- `PASS_BUILD` : lien `node_modules` réversible vers les dépendances locales existantes ; `npm run build` exit 0, Vite OK, esbuild serveur OK, `check-sitemap OK`, prerender OK, 264 références d’assets réalignées dans 26 HTML ; `git diff --check` OK.
- `PASS_PREVIEW` : déploiement Vercel `dpl_5mnc6o6vRXgMfPzFzanupZVNERjP`, `READY`, Preview associé exactement au commit `0498263ecd2285c180937c18b9f691e36e87d934`, URL `https://eletricista-norte-reparos-jax49djcr-filipes-projects-4b992c3d.vercel.app/carregador-veiculo-eletrico`, vérifié le 2026-11-27.
- `PASS_HTTP` : fetch public du Preview réussi, statut `success`, contenu de la page wallbox renvoyé ; title `Instalação de Wallbox em Casa | Eletricista DGEG — Norte Reparos`, canonical et contenu commercial présents ; contrôle réalisé le 2026-11-27.
- `PASS_DOM` : navigateur connecté sur le Preview ; H1 rendu `Instalação de Wallbox em Casa`, H1 unique observé, CTA téléphone `932 321 892` et WhatsApp visibles, bandeau RGPD avec `Política de cookies`, `Aceitar` et `Recusar` visibles ; DOM rendu contrôlé le 2026-11-27. Mentions DGEG/TR​​IESP `90062`, `41,4 kVA`, tarifs, Ficha/Termos `350 € TTC` et équipements Fluke/FLIR E96 présents dans le contenu rendu.
- `NON VÉRIFIÉ` : régénération complète rejouée par le done-gate et Production.
- Statut gate : `PARTIEL — PASS_SOURCE + PASS_BUILD + PASS_PREVIEW + PASS_HTTP + PASS_DOM`, sans exception et sans publication. Aucun merge, passage en Ready ou déploiement Production autorisé par ce pilote.
