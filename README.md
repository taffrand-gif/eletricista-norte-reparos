# Trás-os-Montes Services - Multi-Site Platform

Plateforme multi-sites pour services de plomberie et électricité Atendimento 24h/7d dans la région de Trás-os-Montes, Portugal.

## Sites inclus

### 1. Norte-Reparos (norte-reparos.com)
- **Secteur** : Services de canalisations (plomberie)
- **Téléphone** : 932 321 892
- **Couleur principale** : Bleu (#1e40af)
- **Services** : Arranjo Fuga Água, Desentupimento, Instalação Esquentador, Substituição Canalização

### 2. Staff-Seekers (eletricista-norte-reparos.pt)
- **Secteur** : Services électriques
- **Téléphone** : 932 321 892
- **Couleur principale** : Orange (#ea580c)
- **Services** : Substituição Quadro Elétrico, Instalação Tomadas, Arranjo Curto-Circuito, Certificação DGEG

## Design Philosophy : Brutalisme Numérique Fonctionnel

Le design adopte une approche brutaliste moderne qui privilégie :

- **Typographie audacieuse** : Poppins ExtraBold (900) pour les titres H1, Bold (700) pour H2-H3
- **Couleurs saturées** : Bleu électrique pour plomberie, orange vif pour électricité
- **Bordures épaisses** : 4px sur les éléments principaux
- **Ombres portées dures** : `shadow-[6px_6px_0_0_rgba(0,0,0,0.3)]`
- **Interactions directes** : Transitions < 200ms, pas d'effets élastiques
- **Layout asymétrique** : Grilles brisées avec espaces négatifs intentionnels

## Architecture technique

### Stack
- **Framework** : Vite + React 19 + TypeScript
- **Styling** : TailwindCSS 4
- **Routing** : Wouter
- **UI Components** : shadcn/ui
- **Fonts** : Poppins (headings) + Inter (body)

### Structure du projet
```
client/
  src/
    components/
      Header.tsx          # Navigation sticky avec CTA téléphone
      Hero.tsx            # Section hero avec image de fond
      PriceCalculator.tsx # Calculateur de prix interactif
      Testimonials.tsx    # Témoignages clients
      CompanyInfo.tsx     # Présentation entreprise + raisons
      Footer.tsx          # Footer avec contact
      FloatingButtons.tsx # Boutons WhatsApp et Chat
    contexts/
      SiteContext.tsx     # Contexte pour configuration multi-sites
    pages/
      Home.tsx            # Page d'accueil assemblant tous les composants
shared/
  siteConfig.ts           # Configuration centralisée des deux sites
```

### Configuration multi-sites

Le système utilise une configuration centralisée dans `shared/siteConfig.ts` qui permet de :
- Gérer deux sites à partir du même code
- Personnaliser couleurs, contenu, téléphones, services
- Optimiser SEO avec meta tags spécifiques
- Maintenir une cohérence de design

La détection du site se fait via le hostname :
- `norte-reparos.com` ou `localhost` → Configuration Norte-Reparos (par défaut)
- `eletricista-norte-reparos.pt` → Configuration Staff-Seekers

## Fonctionnalités

### 1. Header sticky
- Barre supérieure avec numéro de téléphone cliquable
- Navigation principale (8 sections)
- Bouton WhatsApp
- Sticky avec bordure épaisse colorée

### 2. Hero section
- Image de fond générée par IA
- 3 badges de valeur avec icônes
- Titre massif (text-7xl)
- CTA surdimensionné avec ombre portée

### 3. Calculateur de prix
- Sélection du type de service
- Option urgence (+30%)
- Calcul instantané
- Affichage du prix estimé
- CTA secondaire pour appel

### 4. Témoignages
- Badge d'évaluation 5.0/5
- 3 témoignages en grille
- Cards avec ombres portées
- Initiales dans badges colorés

### 5. Informations entreprise
- Présentation longue
- 4 raisons de choisir avec checkmarks
- Image d'urgence 24h
- Layout asymétrique

### 6. Footer
- 3 colonnes : Entreprise, Links, Contact
- Informations complètes
- Copyright

### 7. Boutons flottants
- WhatsApp (vert, bas gauche)
- Chat (couleur thème, bas droite)
- Ombres portées dures

## Images générées

5 images professionnelles créées par IA :
1. `plumber-hero-bg.png` - Plombier au travail (hero Norte-Reparos)
2. `electrician-hero-bg.png` - Électricien au travail (hero Staff-Seekers)
3. `plumbing-service-detail.png` - Outils de plomberie (détail)
4. `electrical-service-detail.png` - Outils électriques (détail)
5. `emergency-service-24h.png` - Service d'urgence nocturne (partagé)

Toutes les images sont stockées dans `/home/ubuntu/webdev-static-assets/` et utilisées via CDN.

## Optimisations SEO

- Meta title optimisé avec mots-clés locaux
- Meta description 150-160 caractères
- Meta keywords spécifiques par site
- Structure H1-H6 hiérarchique
- Images avec alt text
- Schema.org markup (à implémenter)
- Sitemap.xml (à générer)
- Open Graph tags (à ajouter)

## Déploiement

### Déploiement sur Manus (recommandé)

1. Créer un checkpoint :
   ```
   Description : "Version initiale des deux sites"
   ```

2. Cliquer sur "Publish" dans l'interface Manus

3. Configurer les domaines :
   - Norte-Reparos : `norte-reparos.com`
   - Staff-Seekers : `eletricista-norte-reparos.pt`

### Déploiement externe (Cloudflare Pages)

1. Build de production :
   ```bash
   pnpm build
   ```

2. Déployer le dossier `dist/public` sur Cloudflare Pages

3. Configurer les domaines personnalisés

4. Activer HTTPS et CDN

## Variables d'environnement

Aucune variable d'environnement requise pour le fonctionnement de base.

Les variables suivantes sont automatiquement injectées par Manus :
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`
- `VITE_APP_TITLE`

## Développement local

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build de production
pnpm build

# Preview du build
pnpm preview
```

Le site sera accessible sur `http://localhost:3000`

## Personnalisation

### Changer les couleurs d'un site

Éditer `shared/siteConfig.ts` :
```typescript
colors: {
  primary: '#1e40af',      // Couleur principale
  primaryDark: '#1e3a8a',  // Version foncée (footer)
  primaryLight: '#3b82f6', // Version claire (boutons)
  accent: '#dc2626',       // Accent (CTAs urgents)
}
```

### Ajouter un témoignage

Éditer `shared/siteConfig.ts` dans la section `testimonials` :
```typescript
{
  id: '4',
  name: 'Nom Client',
  location: 'Ville',
  service: 'Type de service',
  text: 'Témoignage...',
  rating: 5,
}
```

### Modifier les services du calculateur

Éditer `shared/siteConfig.ts` dans la section `services` :
```typescript
{
  id: 'service-id',
  label: 'Nom du service',
  basePrice: 100, // Prix de base en euros
}
```

## Support et maintenance

Pour toute question ou assistance :
- Email : info@norte-reparos.com ou info@eletricista-norte-reparos.pt
- Téléphone : 932 321 892 (Norte-Reparos) ou 932 321 892 (Staff-Seekers)

## Licence

© 2026 Canalizador de Trás-os-Montes / Electricista de Trás-os-Montes. Tous droits réservés.
