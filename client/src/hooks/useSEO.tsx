import { useEffect } from 'react';
import { ACTIVE_CONFIG } from '../../../shared/serviceConfig';
interface SEOProps {
 title: string;
 description: string;
 canonical?: string;
 schema?: object;
 image?: string;
 keywords?: string;
 ogType?: 'website' | 'article';
 author?: string;
 publishedTime?: string;
 modifiedTime?: string;
}
export function useSEO({ 
 title, 
 description, 
 canonical, 
 schema,
 image,
 keywords,
 ogType = 'website',
 author,
 publishedTime,
 modifiedTime
}: SEOProps) {
 useEffect(() => {
 const config = ACTIVE_CONFIG;
 const defaultImage = `https://${config.domain}/og-image.jpg`;
 const finalImage = image || defaultImage;
 const finalCanonical = canonical || window.location.href;
 // Mettre à jour le titre
 document.title = title;
 // Helper pour créer ou mettre à jour une meta tag
 const setMetaTag = (name: string, content: string, isProperty = false) => {
 const attribute = isProperty ? 'property' : 'name';
 let meta = document.querySelector(`meta[${attribute}="${name}"]`);
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute(attribute, name);
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', content);
 };
 // Meta tags basiques
 setMetaTag('description', description);
 if (keywords) {
 setMetaTag('keywords', keywords);
 }
 setMetaTag('author', author || config.businessName);
 setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
 setMetaTag('googlebot', 'index, follow');
 // Open Graph tags
 setMetaTag('og:title', title, true);
 setMetaTag('og:description', description, true);
 setMetaTag('og:image', finalImage, true);
 setMetaTag('og:url', finalCanonical, true);
 setMetaTag('og:type', ogType, true);
 setMetaTag('og:site_name', config.businessName, true);
 setMetaTag('og:locale', 'pt_PT', true);
 
 if (ogType === 'article' && publishedTime) {
 setMetaTag('article:published_time', publishedTime, true);
 }
 if (ogType === 'article' && modifiedTime) {
 setMetaTag('article:modified_time', modifiedTime, true);
 }
 if (ogType === 'article' && author) {
 setMetaTag('article:author', author, true);
 }
 // Twitter Card tags
 setMetaTag('twitter:card', 'summary_large_image');
 setMetaTag('twitter:title', title);
 setMetaTag('twitter:description', description);
 setMetaTag('twitter:image', finalImage);
 // Canonical URL
 let linkCanonical = document.querySelector('link[rel="canonical"]');
 if (!linkCanonical) {
 linkCanonical = document.createElement('link');
 linkCanonical.setAttribute('rel', 'canonical');
 document.head.appendChild(linkCanonical);
 }
 linkCanonical.setAttribute('href', finalCanonical);
 // Ajouter les données structurées Schema.org
 if (schema) {
 const scriptId = 'schema-org-data';
 let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
 
 if (!scriptTag) {
 scriptTag = document.createElement('script');
 scriptTag.id = scriptId;
 scriptTag.type = 'application/ld+json';
 document.head.appendChild(scriptTag);
 }
 
 scriptTag.textContent = JSON.stringify(schema);
 }
 }, [title, description, canonical, schema, image, keywords, ogType, author, publishedTime, modifiedTime]);
}
// SEO Title generator - Dynamic based on city
export function generateSEOTitle(ville?: string): string {
 const config = ACTIVE_CONFIG;
 
 if (ville) {
 // Main cities list
 const villesPrincipales = ["Macedo", "Mirandela", "Bragança"];
 
 // Avoid duplicates
 const villeNormalisee = ville.replace(/[^a-zA-Zàáâãçéêíóôõú]/g, '');
 const villesAInclure = villesPrincipales.filter(v => 
 !v.toLowerCase().includes(villeNormalisee.toLowerCase()) && 
 !villeNormalisee.toLowerCase().includes(v.toLowerCase())
 );
 
 // Format: [Service] em [City], [other cities] - [Phone]
 const autresVilles = villesAInclure.length > 0 ? `, ${villesAInclure.join(', ')}` : '';
 return `${config.name} em ${ville}${autresVilles} - ${config.phone}`;
 }
 
 // Homepage: [Service] 24h em Macedo, Mirandela, Bragança - [Phone]
 return `${config.name} 24h em Macedo, Mirandela, Bragança - ${config.phone}`;
}
// Fonction helper pour générer la meta description
export function generateMetaDescription(ville?: string): string {
 const config = ACTIVE_CONFIG;
 
 if (ville) {
 // Meta descriptions optimisées par ville (<160 chars, mots-clés locaux, CTA, )
 return `Eletricista Trabalho garantido por escrito em ${ville} 24h/7d. Avarias, disjuntores, quadros elétricos. Chegamos assim que possível. ☎️ ${config.phone}`;
 }
 
 // Page d'accueil
 return `${config.name} 24h - instalação, arranjo e manutenção de sistemas elétricos. Equipa de eletricistas profissionais certificados. Ligue ${config.phone}`;
}
// Fonction pour générer les mots-clés SEO
export function generateKeywords(ville?: string): string {
 const config = ACTIVE_CONFIG;
 
 const baseKeywords = ['eletricista', 'eletricista certificado', 'curto-circuito', 'quadro elétrico', 'instalação elétrica', 'urgência 24h', 'certificação elétrica'];
 
 if (ville) {
 return [...baseKeywords, ville, `${config.name} ${ville}`, `urgência ${ville}`].join(', ');
 }
 
 return [...baseKeywords, 'Bragança', 'distrito de Bragança', config.businessName].join(', ');
}
// Fonction pour générer le schema LocalBusiness enrichi
export function generateLocalBusinessSchema(ville?: string) {
 const config = ACTIVE_CONFIG;
 
 return {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "name": config.businessName,
 "image": `https://${config.domain}/logo.png`,
 "telephone": `+${config.whatsappNumber}`,
 "priceRange": "€€",
 "address": {
 "@type": "PostalAddress",
 "addressLocality": ville || "Trás-os-Montes",
 "addressRegion": "Bragança",
 "addressCountry": "PT"
 },
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": ville ? getCityCoordinates(ville).lat : 41.5382,
 "longitude": ville ? getCityCoordinates(ville).lng : -6.9667
 },
 "url": `https://${config.domain}${ville ? `/servicos/${getCitySlug(ville)}` : ''}`,
 "openingHoursSpecification": {
 "@type": "OpeningHoursSpecification",
 "dayOfWeek": [
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday",
 "Sunday"
 ],
 "opens": "00:00",
 "closes": "23:59"
 },
 "areaServed": {
 "@type": "City",
 "name": ville || "Bragança"
 }
 };
}
// Fonction pour générer le schema Organization
export function generateOrganizationSchema() {
 const config = ACTIVE_CONFIG;
 
 return {
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": config.businessName,
 "url": `https://${config.domain}`,
 "logo": `https://${config.domain}/logo.png`,
 "contactPoint": {
 "@type": "ContactPoint",
 "telephone": `+${config.whatsappNumber}`,
 "contactType": "customer service",
 "areaServed": "PT",
 "availableLanguage": ["Portuguese"]
 }
 };
}
// Fonction pour générer le schema FAQPage
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
 return {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 };
}
// Fonction pour générer le schema Article (pour le blog)
export function generateArticleSchema(article: {
 title: string;
 description: string;
 author: string;
 publishedTime: string;
 modifiedTime?: string;
 image: string;
 url: string;
}) {
 const config = ACTIVE_CONFIG;
 
 return {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": article.title,
 "description": article.description,
 "image": article.image,
 "author": {
 "@type": "Person",
 "name": article.author
 },
 "publisher": {
 "@type": "Organization",
 "name": config.businessName,
 "logo": {
 "@type": "ImageObject",
 "url": `https://${config.domain}/logo.png`
 }
 },
 "datePublished": article.publishedTime,
 "dateModified": article.modifiedTime || article.publishedTime,
 "mainEntityOfPage": {
 "@type": "WebPage",
 "@id": article.url
 }
 };
}
// Fonction pour générer le schema BreadcrumbList
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
 const config = ACTIVE_CONFIG;
 
 return {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": breadcrumbs.map((crumb, index) => ({
 "@type": "ListItem",
 "position": index + 1,
 "name": crumb.name,
 "item": `https://${config.domain}${crumb.url}`
 }))
 };
}
// Fonction helper pour obtenir les coordonnées d'une ville (approximatives)
function getCityCoordinates(ville: string): { lat: number; lng: number } {
 const coordinates: Record<string, { lat: number; lng: number }> = {
 "Alfândega da Fé": { lat: 41.3444, lng: -6.9667 },
 "Bragança": { lat: 41.8058, lng: -6.7567 },
 "Carrazeda de Ansiães": { lat: 41.2422, lng: -7.3056 },
 "Freixo de Espada à Cinta": { lat: 41.0892, lng: -6.8061 },
 "Trás-os-Montes": { lat: 41.5382, lng: -6.9667 },
 "Miranda do Douro": { lat: 41.4972, lng: -6.2739 },
 "Mirandela": { lat: 41.4867, lng: -7.1858 },
 "Mogadouro": { lat: 41.3403, lng: -6.7128 },
 "Torre de Moncorvo": { lat: 41.1786, lng: -7.0536 },
 "Vila Flor": { lat: 41.3072, lng: -7.1514 },
 "Vimioso": { lat: 41.5836, lng: -6.5264 },
 "Vinhais": { lat: 41.8372, lng: -7.0014 }};
 
 return coordinates[ville] || { lat: 41.5382, lng: -6.9667 };
}
// Fonction helper pour obtenir le slug d'une ville
function getCitySlug(ville: string): string {
 return (typeof ville === 'string' ? ville : String(ville))
 .toLowerCase()
 .normalize("NFD")
 .replace(/[\u0300-\u036f]/g, "")
 .replace(/\s+/g, "-");
}
