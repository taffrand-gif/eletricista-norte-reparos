# ENR — Pipeline sitemaps — 2026-08-04

## Décision

Le générateur `scripts/generate-sitemap.ts` écrit désormais directement dans `client/public/`, dossier copié par Vite vers `dist/public` puis servi par Vercel (`vercel.json: outputDirectory`). C'est la cible unique réellement servie ; aucune étape de copie supplémentaire n'est ajoutée.

## Table avant correction

| Fichier | `public/` (loc) | `client/public/` (loc) | Production observée avec `?cb=timestamp` (loc) |
|---|---:|---:|---:|
| sitemap-index.xml | 3 | 2 | 2 |
| sitemap.xml | 3880 | 3650 | 3650 |
| sitemap-plain.xml | absent | 3927 | 3927 |
| sitemap-dynamic.xml | 417 | 2902 | 2902 |
| sitemap-pages.xml | 230 | 230 | 230 |
| sitemap-blog.xml | 58 | 43 | 44 |
| sitemap-priority.xml | absent | 208 | 208 |
| sitemap-images.xml | absent | 1 | 1 |
| sitemap-full-backup.xml | absent | 853 | 853 |
| sitemap-eletricista-norte-reparos.xml | absent | 21 | 21 |

Production values were fetched on 2026-08-04 with a cache-busting query parameter. The one-count drift on `sitemap-blog.xml` is recorded as observed production drift.

## Table après correction (workspace / commit)

| Fichier | `public/` (loc) | `client/public/` (loc) | Cible production après déploiement |
|---|---:|---:|---:|
| sitemap-index.xml | 3 | 3 | 3 |
| sitemap.xml | 3880 | 3649 | 3649 |
| sitemap-plain.xml | absent | 3926 | 3926 |
| sitemap-dynamic.xml | 417 | 417 | 417 |
| sitemap-pages.xml | 230 | 230 | 230 |
| sitemap-blog.xml | 58 | 43 | 43 (régénération dédiée à vérifier) |
| sitemap-priority.xml | absent | 208 | 208 |
| sitemap-images.xml | absent | 1 | 1 |
| sitemap-full-backup.xml | absent | 852 | 852 |
| sitemap-eletricista-norte-reparos.xml | absent | 21 | 21 |

`quadros-eletricos-duas-igrejas` est à 0 occurrence dans tous les sitemaps de `client/public/` après correction. Le `public/` historique est conservé : `vercel.json` confirme qu'il n'est pas le dossier de sortie, mais il contient encore des sitemaps legacy et reste lu par des scripts historiques ; sa suppression n'est donc pas nécessaire à ce correctif et n'est pas faite ici.
