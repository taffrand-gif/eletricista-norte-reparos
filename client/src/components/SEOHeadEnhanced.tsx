// SEO Head Enhanced component - Gestion complète des meta tags avec mots-clés longue traîne
// Support pour pages villes, Open Graph, Twitter Cards, canonical URLs

import { useEffect, useMemo } from 'react';
import { useSite } from '@/contexts/SiteContext';
import { useLocation } from 'wouter';
import { getCitySEOConfig } from '../../../shared/seoKeywords';

interface SEOHeadEnhancedProps {
 citySlug?: string; // Slug de la ville (ex: 'macedo-de-cavaleiros')
 pageType?: 'home' | 'city' | 'service' | 'blog' | 'gallery';
 customTitle?: string;
 customDescription?: string;
 customKeywords?: string[];
 customImage?: string;
}

export default function SEOHeadEnhanced({
 citySlug,
 pageType = 'home',
 customTitle,
 customDescription,
 customKeywords,
 customImage
}: SEOHeadEnhancedProps) {
 const { config } = useSite();
 const [location] = useLocation();

 // Récupérer la configuration SEO pour la ville
 const citySEO = citySlug ? getCitySEOConfig(citySlug) : null;

 // Déterminer les meta tags en fonction du type de page
 const seoConfig = useMemo(() => {
 // Configuration par défaut (page d'accueil)
 let title = customTitle || config.title;
 let description = customDescription || config.description;
 let keywords = customKeywords || config.seo.keywords;
 let canonicalUrl = `https://${config.domain}${location}`;
 let ogImage = customImage || config.seo.ogImage;

 // Page ville
 if (pageType === 'city' && citySEO) {
 title = citySEO.title;
 description = citySEO.description;
 keywords = citySEO.keywords;
 canonicalUrl = citySEO.canonicalUrl;
 }

 // Page service
 if (pageType === 'service') {
 title = `${config.serviceType} - ${customTitle || 'Serviços'} | ${config.name}`;
 description = customDescription || `Serviços de ${config.serviceType.toLowerCase()} profissional em Trás-os-Montes. ${config.description}`;
 }

 // Page blog
 if (pageType === 'blog' && customTitle) {
 title = `${customTitle} | Blog ${config.name}`;
 description = customDescription || `Artigo sobre ${customTitle.toLowerCase()} no blog ${config.name}. ${config.description}`;
 }

 return {
 title,
 description: description.substring(0, 160), // Limiter à 160 caractères
 keywords: keywords.join(', '),
 canonicalUrl,
 ogImage,
 ogTitle: citySEO?.ogTitle || title,
 ogDescription: citySEO?.ogDescription || description.substring(0, 160)
 };
 }, [config, citySlug, pageType, location, customTitle, customDescription, customKeywords, customImage, citySEO]);

 useEffect(() => {
 // Mettre à jour le titre du document
 document.title = seoConfig.title;

 // Helper function pour mettre à jour ou créer une meta tag
 const updateMetaTag = (selector: string, attribute: string, value: string) => {
 let element = document.querySelector(selector);
 if (!element) {
 element = document.createElement('meta');
 if (selector.includes('property=')) {
 const prop = selector.match(/property="([^"]+)"/)?.[1];
 if (prop) element.setAttribute('property', prop);
 } else if (selector.includes('name=')) {
 const name = selector.match(/name="([^"]+)"/)?.[1];
 if (name) element.setAttribute('name', name);
 }
 document.head.appendChild(element);
 }
 element.setAttribute(attribute, value);
 };

 // Meta tags de base
 updateMetaTag('meta[name="description"]', 'content', seoConfig.description);
 updateMetaTag('meta[name="keywords"]', 'content', seoConfig.keywords);
 updateMetaTag('meta[name="author"]', 'content', config.name);
 updateMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
 updateMetaTag('meta[name="googlebot"]', 'content', 'index, follow');
 
 // Viewport (important pour mobile)
 updateMetaTag('meta[name="viewport"]', 'content', 'width=device-width, initial-scale=1.0');

 // Open Graph tags
 updateMetaTag('meta[property="og:type"]', 'content', 'website');
 updateMetaTag('meta[property="og:locale"]', 'content', 'pt_PT');
 updateMetaTag('meta[property="og:site_name"]', 'content', config.name);
 updateMetaTag('meta[property="og:title"]', 'content', seoConfig.ogTitle);
 updateMetaTag('meta[property="og:description"]', 'content', seoConfig.ogDescription);
 updateMetaTag('meta[property="og:image"]', 'content', seoConfig.ogImage);
 updateMetaTag('meta[property="og:url"]', 'content', seoConfig.canonicalUrl);
 updateMetaTag('meta[property="og:image:width"]', 'content', '1200');
 updateMetaTag('meta[property="og:image:height"]', 'content', '630');
 updateMetaTag('meta[property="og:image:alt"]', 'content', `${config.serviceType} profissional em Trás-os-Montes`);

 // Twitter Card tags
 updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
 updateMetaTag('meta[name="twitter:title"]', 'content', seoConfig.title);
 updateMetaTag('meta[name="twitter:description"]', 'content', seoConfig.description);
 updateMetaTag('meta[name="twitter:image"]', 'content', seoConfig.ogImage);
 updateMetaTag('meta[name="twitter:site"]', 'content', `@${config.domain.replace('.com', '')}`);
 updateMetaTag('meta[name="twitter:creator"]', 'content', `@${config.domain.replace('.com', '')}`);

 // Canonical URL
 let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.rel = 'canonical';
 document.head.appendChild(canonical);
 }
 canonical.href = seoConfig.canonicalUrl;

 // Hreflang tags (pour internationalisation)
 const hreflangTags = [
 { lang: 'pt-PT', url: seoConfig.canonicalUrl },
 { lang: 'pt-BR', url: seoConfig.canonicalUrl.replace('.com', '.com.br') },
 { lang: 'en', url: seoConfig.canonicalUrl.replace('.com', '.com/en') },
 { lang: 'es', url: seoConfig.canonicalUrl.replace('.com', '.com/es') }
 ];

 // Supprimer les anciennes hreflang tags
 document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(tag => tag.remove());

 // Ajouter les nouvelles hreflang tags
 hreflangTags.forEach(({ lang, url }) => {
 const link = document.createElement('link');
 link.rel = 'alternate';
 link.hreflang = lang;
 link.href = url;
 document.head.appendChild(link);
 });

 // X-default hreflang
 const xDefault = document.createElement('link');
 xDefault.rel = 'alternate';
 xDefault.hreflang = 'x-default';
 xDefault.href = seoConfig.canonicalUrl;
 document.head.appendChild(xDefault);

 // Structured Data (Schema.org) pour LocalBusiness
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 
 const schemaData = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "@id": `https://${config.domain}/#organization`,
 "name": config.name,
 "image": seoConfig.ogImage,
 "description": seoConfig.description,
 "address": {
 "@type": "PostalAddress",
 "addressLocality": "Trás-os-Montes",
 "addressRegion": "Bragança",
 "addressCountry": "PT"
 },
 "telephone": config.phone,
 "openingHours": "Mo-Su 00:00-23:59",
 "priceRange": "€€",
 "areaServed": {
 "@type": "City",
 "name": citySEO?.cityName || "Trás-os-Montes"
 },
 "sameAs": [
 `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`
 ]
 };

 // Ajouter les coordonnées géographiques si c'est une page ville
 if (pageType === 'city' && citySEO) {
 // Coordonnées approximatives pour chaque ville
 const cityCoordinates: Record<string, { lat: number, lng: number }> = {
 'macedo-de-cavaleiros': { lat: 41.5386, lng: -6.9611 },
 'braganca': { lat: 41.8061, lng: -6.7572 },
 'mirandela': { lat: 41.4875, lng: -7.1869 },
 'chaves': { lat: 41.7403, lng: -7.4686 },
 'valpacos': { lat: 41.6078, lng: -7.3108 },
 'vinhais': { lat: 41.8353, lng: -7.0036 },
 'miranda-do-douro': { lat: 41.4939, lng: -6.2733 },
 'mogadouro': { lat: 41.3403, lng: -6.7119 },
 'torre-de-moncorvo': { lat: 41.1742, lng: -7.0533 },
 'freixo-de-espada-a-cinta': { lat: 41.0911, lng: -6.8069 }
 };

 const coords = cityCoordinates[citySlug || ''];
 if (coords) {
 Object.assign(schemaData, {
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": coords.lat,
 "longitude": coords.lng
 },
 "serviceArea": {
 "@type": "GeoCircle",
 "geoMidpoint": {
 "@type": "GeoCoordinates",
 "latitude": coords.lat,
 "longitude": coords.lng
 },
 "geoRadius": "20000" // 20km radius
 }
 });
 }
 }

 schemaScript.text = JSON.stringify(schemaData);
 
 // Supprimer l'ancien script schema s'il existe
 const oldSchema = document.querySelector('script[type="application/ld+json"]');
 if (oldSchema) {
 document.head.removeChild(oldSchema);
 }
 
 document.head.appendChild(schemaScript);

 // Google Ads tracking - deferred to avoid blocking main thread
 if (!window.dataLayer) {
 window.dataLayer = [];
 }

 // Defer GTM loading by 3s after page load for better performance
 const loadGTM = () => {
 if (document.querySelector('script[src*="googletagmanager.com/gtag"]')) return;
 setTimeout(() => {
 const script = document.createElement('script');
 script.async = true;
 script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17915870228';
 document.head.appendChild(script);

 script.onload = () => {
 function gtag(...args: any[]) {
 window.dataLayer.push(arguments);
 }
 window.gtag = gtag;

 gtag('js', new Date());
 gtag('config', 'AW-17915870228');

 // GDPR Consent Mode (préservé des originaux)
 gtag('consent', 'default', {
 'analytics_storage': 'denied',
 'ad_storage': 'denied',
 'ad_user_data': 'denied',
 'ad_personalization': 'denied'
 });
 };
 }, 3000);
 };

 if (document.readyState === 'complete') {
 loadGTM();
 } else {
 window.addEventListener('load', loadGTM, { once: true });
 }

 // Nettoyage
 return () => {
 if (schemaScript.parentNode === document.head) {
 document.head.removeChild(schemaScript);
 }
 };
 }, [config, seoConfig, pageType, citySlug]);

 return null; // Ce composant ne rend rien
}

// Étendre l'interface Window pour TypeScript
declare global {
 interface Window {
 dataLayer: any[];
 gtag: (...args: any[]) => void;
 }
}