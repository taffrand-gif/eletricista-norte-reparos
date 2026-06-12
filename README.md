# Eletricista Norte Reparos

Site corporate statique (HTML pré-rendu) pour services de électricité (eletricidade) dans la région
de Trás-os-Montes, Portugal.

- **Domaine** : eletricista-norte-reparos.pt
- **Métier** : électricité (eletricidade)
- **Zone d'intervention** : Trás-os-Montes (rayon 100 km depuis Macedo de Cavaleiros)
- **Type de déploiement** : site statique (HTML/CSS/JS), hébergé sur Vercel

## Architecture technique

| Composant | Technologie |
|-----------|-------------|
| Front-end | HTML statique pré-rendu (≈ 10 000+ pages) |
| Templating | Templates HTML + JSON data + script de génération |
| Hosting | Vercel (auto-deploy depuis GitHub) |
| Routing | Vercel rewrites (`/slug` → `/slug.html`) |
| Sitemap | `public/sitemap*.xml` (sitemap principal + blog + dynamique) |
| Schema.org | JSON-LD inline dans `<head>` (Plumber/Electrician, FAQPage, HowTo) |

### Fichiers de configuration

- `vercel.json` — redirects (301/410) et rewrites. **Limite stricte : 64 KB**.
- `package.json` — dépendances de build (Vite, TailwindCSS) et scripts de maintenance
- `.gitignore` — exclut `node_modules`, `dist`, `.env`, `.backups`, `*.tar.gz`, `*.log`, `.DS_Store`

## Structure du projet

```
.
├── client/                 # Code source front-end (templates + assets)
│   ├── public/             # Fichiers statiques servis en prod (HTML, CSS, images, sitemap)
│   │   ├── *.html          # Pages individuelles (≈ 10 000+)
│   │   ├── styles.css      # CSS global
│   │   └── sitemap*.xml    # Sitemaps
│   └── src/                # Templates, composants React, configurations partagées
│       ├── components/     # Composants UI (Header, Footer, Hero, etc.)
│       ├── pages/          # Templates de pages (CityPage, ServicePage, etc.)
│       └── contexts/       # Contextes React (SiteContext, etc.)
├── shared/                 # Configuration partagée (services, villes, SEO, topics)
│   ├── siteConfig.ts       # Branding (téléphone, couleurs, NAP)
│   ├── serviceConfig.ts    # Catalogue de services
│   ├── cityServiceMatrix.ts# Matrice villes × services
│   ├── seoKeywords.ts      # Mots-clés SEO
│   └── topicClusters.ts    # Clusters de sujets pour le blog
├── scripts/                # Scripts de génération et maintenance
│   ├── generate-sitemap.ts # Génération sitemaps
│   ├── generate-favicons.* # Génération favicons multi-formats
│   ├── optimize-images.js  # Optimisation images (WebP, compression)
│   └── archive/            # Scripts one-shot archivés (Lot 1+)
├── vercel.json             # Configuration Vercel (redirects, rewrites, headers)
├── robots.txt              # Directives crawlers
├── package.json            # Dépendances npm
└── README.md               # Ce fichier
```

## Maintenance courante

### Régénérer les sitemaps

```bash
npm run build
# ou manuellement :
node scripts/generate-sitemap.ts
```

### Ajouter un nouveau service

1. Ajouter l'entrée dans `shared/serviceConfig.ts`
2. Ajouter la page dans `shared/cityServiceMatrix.ts` (génère les URLs ville×service)
3. Régénérer le sitemap

### Ajouter une nouvelle ville

1. Vérifier que la localité est dans l'INE portugais (966 localités valides)
2. Ajouter dans `shared/cityServiceMatrix.ts`
3. Régénérer le sitemap

## SEO

- **Schema.org** : LocalBusiness, Plumber/Electrician, FAQPage, HowTo, BreadcrumbList
- **Open Graph + Twitter Cards** sur toutes les pages
- **Canonical** URLs absolues
- **Hreflang** : `pt-PT` uniquement
- **Sitemaps** : `sitemap.xml` (principal, 60+ URLs canoniques), `sitemap-blog.xml`, `sitemap-dynamic.xml`, `sitemap-pages.xml`
- **IndexNow** : soumission auto des nouvelles URLs
- **robots.txt** : autorise tout sauf `/admin/`, `/api/`, `/private/`

## Déploiement

- **Production** : auto-deploy depuis la branche `main` (Vercel)
- **Previews** : chaque PR génère un preview URL
- **Domaine principal** : `eletricista-norte-reparos.pt` (configuré dans Vercel)
- **Aliases** : aucun (un seul domaine par projet)

## Licence

Propriétaire — code source non distribuable.

## Contact technique

Pour toute question sur l'architecture, consulter `docs/` ou la branche
`fix/lot-X-...` correspondante dans l'historique Git.
