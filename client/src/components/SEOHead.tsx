// SEO Head component - Manages all meta tags, Open Graph, Twitter Cards, and tracking
// Preserves all existing SEO work from the original sites
import { useEffect } from 'react';
import { useSite } from '@/contexts/SiteContext';
import { useLocation } from 'wouter';
export default function SEOHead() {
 const { config } = useSite();
 const [location] = useLocation();
 useEffect(() => {
 // Atualizar título do documento
 document.title = config.title;
 // Definir idioma
 document.documentElement.lang = 'pt-PT';
 // Função auxiliar para atualizar ou criar meta tag
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
 // Meta tags básicas
 updateMetaTag('meta[name="description"]', 'content', config.description);
 updateMetaTag('meta[name="author"]', 'content', config.name);
 updateMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
 updateMetaTag('meta[name="googlebot"]', 'content', 'index, follow');
 updateMetaTag('meta[name="keywords"]', 'content', config.seo.keywords.join(', '));
 updateMetaTag('meta[name="language"]', 'content', 'pt-PT');
 // Geo tags para SEO local
 updateMetaTag('meta[name="geo.region"]', 'content', 'PT-04');
 updateMetaTag('meta[name="geo.placename"]', 'content', 'Macedo de Cavaleiros');
 updateMetaTag('meta[name="geo.position"]', 'content', '41.5382;-6.9667');
 updateMetaTag('meta[name="ICBM"]', 'content', '41.5382, -6.9667');
 // Open Graph tags
 updateMetaTag('meta[property="og:type"]', 'content', 'website');
 updateMetaTag('meta[property="og:locale"]', 'content', 'pt_PT');
 updateMetaTag('meta[property="og:site_name"]', 'content', config.name);
 updateMetaTag('meta[property="og:title"]', 'content', config.title);
 updateMetaTag('meta[property="og:description"]', 'content', config.description);
 updateMetaTag('meta[property="og:image"]', 'content', `https://${config.domain}${config.seo.ogImage}`);
 updateMetaTag('meta[property="og:url"]', 'content', `https://${config.domain}${location === '/' ? '' : location}`);
 // Cartão Twitter
 updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
 updateMetaTag('meta[name="twitter:title"]', 'content', config.title);
 updateMetaTag('meta[name="twitter:description"]', 'content', config.description);
 updateMetaTag('meta[name="twitter:image"]', 'content', `https://${config.domain}${config.seo.ogImage}`);
 // URL Canónica (dinâmica baseada no caminho)
 let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.rel = 'canonical';
 document.head.appendChild(canonical);
 }
 canonical.href = `https://${config.domain}${location === '/' ? '' : location}`;
 // Hreflang alternativo
 let hreflang = document.querySelector('link[hreflang="pt-PT"]') as HTMLLinkElement;
 if (!hreflang) {
 hreflang = document.createElement('link');
 hreflang.rel = 'alternate';
 hreflang.hreflang = 'pt-PT';
 document.head.appendChild(hreflang);
 }
 hreflang.href = `https://${config.domain}`;
 // Rastreamento Google Ads - diferido para evitar bloquear thread principal
 if (!window.dataLayer) {
 window.dataLayer = [];
 }
 // Diferir carregamento GTM por 3s após carregamento da página para melhor desempenho
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
 // Modo de Consentimento GDPR (preservado do original)
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
 }, [config, location]);
 return null; // Este componente não renderiza nada
}
// Estender interface Window para TypeScript
declare global {
 interface Window {
 dataLayer: any[];
 gtag: (...args: any[]) => void;
 }
}
