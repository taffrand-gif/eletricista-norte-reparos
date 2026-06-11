// Componente Structured Data (Schema.org)
// Schema Markup LocalBusiness: Plumber para norte-reparos, Electrician para staff-seekers
import { useEffect } from 'react';
import { useSite } from '@/contexts/SiteContext';
import { useLocation as useWouterLocation } from 'wouter';
import { useLocation } from '@/contexts/LocationContext';
import { businessInfo, getCityAddress } from '@/../../shared/napConfig';
export default function StructuredData() {
 const { config } = useSite();
 const [location] = useWouterLocation();
 const { getCurrentCity } = useLocation();
 useEffect(() => {
 // Remover scripts existentes
 const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
 existingScripts.forEach(script => script.remove());
 const businessType = 'Electrician';
 const serviceName = 'Eletricista';
 const detectedCity = getCurrentCity();
 // Não adicionar FAQPage nas páginas cidade (CityServicePage já tem seu próprio FAQPage)
 // Pattern: /:service-:city (ex: /eletricista-lamego, /instalacao-eletrica-braganca)
 const isCityServicePage = location.match(/\/[a-z-]+-[a-z-]+$/);
 const shouldIncludeFAQ = !isCityServicePage;
 // Lista das 10 cidades servidas
 const citiesServed = [
 // Proximidade Macedo (<20km)
 "Trás-os-Montes", "Alfândega da Fé", "Carrazeda de Ansiães", "Vila Flor",
 // Raio 20-40km
 "Mirandela", "Bragança", "Vimioso", "Valpaços", "Murça", "Torre de Moncorvo", "Mogadouro", "Vinhais",
 // Raio 40-60km
 "Freixo de Espada à Cinta", "Miranda do Douro",
 // Raio 60-90km  
 "Chaves", "Vila Real", "Montalegre", "Boticas", "Alijó", "Sabrosa", "Ribeira de Pena", "Vila Pouca de Aguiar",
 // Raio 90-130km
 "Lamego", "Peso da Régua", "Mesão Frio", "Tabuaço", "Armamar", "Moimenta da Beira",
 "Vila Nova de Foz Côa", "Sernancelhe", "Penedono", "São João da Pesqueira", "Mondim de Basto"
 ];
 // LocalBusiness Schema enriquecido
 const localBusinessSchema = {
 "@context": "https://schema.org",
 "@type": businessType,
 "@id": `https://${config.domain}/#organization`,
 "name": "Norte Reparos",
 "alternateName": serviceName,
 "description": `${config.description} Atualmente a servir ${detectedCity} e região.`,
 "slogan": `Serviço 24h/7d em ${detectedCity} • Trabalho garantido por escrito`,
 "url": `https://${config.domain}`,
 "telephone": businessInfo.phone,
 "email": config.email,
 "priceRange": "€€",
 "image": `https://${config.domain}${config.seo.ogImage}`,
 "logo": `https://${config.domain}/logo.png`,
 "address": {
 "@type": "PostalAddress",
 "streetAddress": businessInfo.baseAddress.streetAddress,
 "addressLocality": businessInfo.baseAddress.addressLocality,
 "addressRegion": businessInfo.baseAddress.addressRegion,
 "postalCode": businessInfo.baseAddress.postalCode,
 "addressCountry": businessInfo.baseAddress.addressCountry
 },
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": "41.5362124",
 "longitude": "-6.9560267"
 },
 "areaServed": [
 {
 "@type": "GeoCircle",
 "geoMidpoint": {
 "@type": "GeoCoordinates",
 "latitude": "41.5362124",
 "longitude": "-6.9560267"
 },
 "geoRadius": "130000"
 },
 {
 "@type": "City",
 "name": detectedCity,
 "containedInPlace": {
 "@type": "AdministrativeArea",
 "name": "Trás-os-Montes"
 }
 },
 ...citiesServed.map(city => ({
 "@type": "City",
 "name": city,
 "containedInPlace": {
 "@type": "AdministrativeArea",
 "name": "Trás-os-Montes"
 }
 }))
 ],
 "openingHoursSpecification": {
 "@type": "OpeningHoursSpecification",
 "dayOfWeek": [
 "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
 ],
 "opens": "00:00",
 "closes": "23:59"
 },
 "hasMap": `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.baseAddress.addressLocality + ', Portugal')}`,
 "serviceArea": {
 "@type": "GeoCircle",
 "geoMidpoint": {
 "@type": "GeoCoordinates",
 "latitude": "41.5362124",
 "longitude": "-6.9560267"
 },
 "geoRadius": "130000"
 },
 "hasOfferCatalog": {
 "@type": "OfferCatalog",
 "name": "Serviços de Eletricista",
 "itemListElement": config.services.map((service, index) => ({
 "@type": "Offer",
 "position": index + 1,
 "itemOffered": {
 "@type": "Service",
 "name": service.label,
 "description": `${service.label} profissional em Trás-os-Montes`,
 "provider": {
 "@id": `https://${config.domain}/#organization`
 }
 },
 "priceSpecification": {
 "@type": "PriceSpecification",
 "priceCurrency": "EUR",
 "price": service.basePrice?.toString() || "50"
 },
 "availability": "https://schema.org/InStock",
 "availableAtOrFrom": {
 "@id": `https://${config.domain}/#organization`
 }
 }))
 },
 "foundingDate": config.company.yearEstablished,
 "knowsLanguage": ["pt-PT"],
 "currenciesAccepted": "EUR",
 "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "MB WAY"],
 "makesOffer": config.services.map(service => ({
 "@type": "Offer",
 "itemOffered": {
 "@type": "Service",
 "name": service.label,
 "provider": {
 "@id": `https://${config.domain}/#organization`
 }
 }
 }))
 };
 // Service Schema (geral)
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "serviceType": config.serviceType,
 "provider": {
 "@id": `https://${config.domain}/#organization`
 },
 "areaServed": citiesServed.map(city => ({
 "@type": "City",
 "name": city
 })),
 "hasOfferCatalog": {
 "@type": "OfferCatalog",
 "name": `Serviços de ${config.serviceType}`,
 "itemListElement": config.services.map((service, index) => ({
 "@type": "Offer",
 "position": index + 1,
 "itemOffered": {
 "@type": "Service",
 "name": service.label,
 "description": `${service.label} profissional em Trás-os-Montes`,
 "provider": {
 "@id": `https://${config.domain}/#organization`
 }
 },
 "priceSpecification": {
 "@type": "PriceSpecification",
 "priceCurrency": "EUR",
 "price": service.basePrice.toString()
 }
 }))
 },
 "availableChannel": {
 "@type": "ServiceChannel",
 "servicePhone": {
 "@type": "ContactPoint",
 "telephone": `+351${config.phone.replace(/\s/g, '')}`,
 "contactType": "customer service",
 "areaServed": "PT",
 "availableLanguage": "Portuguese",
 "hoursAvailable": {
 "@type": "OpeningHoursSpecification",
 "dayOfWeek": [
 "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
 ],
 "opens": "00:00",
 "closes": "23:59"
 }
 }
 }
 };
 // Service Schema específico para as páginas cidade
 const getCityServiceSchema = () => {
 const cityPages = [
 { path: '/eletricista-chaves', city: 'Chaves' },
 { path: '/eletricista-braganca', city: 'Bragança' },
 { path: '/eletricista-mirandela', city: 'Mirandela' },
 { path: '/eletricista-macedo-de-cavaleiros', city: 'Trás-os-Montes' },
 { path: '/eletricista-valpacos', city: 'Valpaços' },
 { path: '/eletricista-vinhais', city: 'Vinhais' },
 { path: '/eletricista-miranda-douro', city: 'Miranda do Douro' },
 { path: '/eletricista-mogadouro', city: 'Mogadouro' },
 { path: '/eletricista-torre-moncorvo', city: 'Torre de Moncorvo' },
 { path: '/eletricista-freixo-espada-cinta', city: 'Freixo de Espada à Cinta' }
 ];
 const currentCity = cityPages.find(page => location === page.path);
 if (!currentCity) return null;
 return {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": `${serviceName} em ${currentCity.city}`,
 "description": `${serviceName} profissional em ${currentCity.city}, Trás-os-Montes. Serviço 24h, urgências, sem compromisso.`,
 "provider": {
 "@id": `https://${config.domain}/#organization`
 },
 "areaServed": {
 "@type": "City",
 "name": currentCity.city
 },
 "serviceType": config.serviceType,
 "offers": {
 "@type": "Offer",
 "priceCurrency": "EUR",
 "priceSpecification": {
 "@type": "PriceSpecification",
 "priceCurrency": "EUR",
 "price": "80-200"
 }
 },
 "availableChannel": {
 "@type": "ServiceChannel",
 "servicePhone": {
 "@type": "ContactPoint",
 "telephone": `+351${config.phone.replace(/\s/g, '')}`,
 "contactType": "customer service"
 }
 }
 };
 };
 // Reviews Schema melhorado
 const reviewsSchema = config.testimonials.map((testimonial, index) => ({
 "@context": "https://schema.org",
 "@type": "Review",
 "@id": `https://${config.domain}/#review-${index + 1}`,
 "itemReviewed": {
 "@id": `https://${config.domain}/#organization`
 },
 "author": {
 "@type": "Person",
 "name": testimonial.name,
 "address": {
 "@type": "PostalAddress",
 "addressLocality": testimonial.location
 }
 },
 "reviewRating": {
 "@type": "Rating",
 "ratingValue": testimonial.rating.toString(),
 "bestRating": "5",
 "worstRating": "1"
 },
 "reviewBody": testimonial.text,
 "datePublished": "2025-06-01",
 "publisher": {
 "@type": "Organization",
 "name": config.name
 }
 }));
 // WebSite Schema
 const websiteSchema = {
 "@context": "https://schema.org",
 "@type": "WebSite",
 "url": `https://${config.domain}`,
 "name": config.name,
 "description": config.description,
 "inLanguage": "pt-PT",
 "publisher": {
 "@id": `https://${config.domain}/#organization`
 }
 };
 // Organization Schema enrichi
 const organizationSchema = {
 "@context": "https://schema.org",
 "@type": "Organization",
 "@id": `https://${config.domain}/#organization`,
 "name": "Norte Reparos",
 "url": `https://${config.domain}`,
 "logo": {
 "@type": "ImageObject",
 "url": `https://${config.domain}/logo.png`,
 "width": "512",
 "height": "512"
 },
 "image": `https://${config.domain}${config.seo.ogImage}`,
 "description": config.description,
 "email": config.email,
 "telephone": `+351${config.phone.replace(/\s/g, '')}`,
 "foundingDate": config.company.yearEstablished,
 "address": {
 "@type": "PostalAddress",
 "streetAddress": businessInfo.baseAddress.streetAddress,
 "addressLocality": businessInfo.baseAddress.addressLocality,
 "addressRegion": businessInfo.baseAddress.addressRegion,
 "postalCode": businessInfo.baseAddress.postalCode,
 "addressCountry": businessInfo.baseAddress.addressCountry
 },
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": "41.5362124",
 "longitude": "-6.9560267"
 },
 "areaServed": {
 "@type": "AdministrativeArea",
 "name": "Trás-os-Montes",
 "containedInPlace": {
 "@type": "Country",
 "name": "Portugal"
 }
 },
 "contactPoint": [
 {
 "@type": "ContactPoint",
 "telephone": `+351${config.phone.replace(/\s/g, '')}`,
 "contactType": "customer service",
 "areaServed": "PT",
 "availableLanguage": ["Portuguese"],
 "hoursAvailable": {
 "@type": "OpeningHoursSpecification",
 "dayOfWeek": [
 "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
 ],
 "opens": "00:00",
 "closes": "23:59"
 }
 },
 {
 "@type": "ContactPoint",
 "telephone": `+351${config.phone.replace(/\s/g, '')}`,
 "contactType": "emergency",
 "areaServed": "PT",
 "availableLanguage": ["Portuguese"],
 "hoursAvailable": {
 "@type": "OpeningHoursSpecification",
 "dayOfWeek": [
 "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
 ],
 "opens": "00:00",
 "closes": "23:59"
 }
 }
 ],
 "sameAs": [
 `https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`,
 "https://www.facebook.com/"
 ],
 "priceRange": "€€",
 "currenciesAccepted": "EUR",
 "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "MB WAY"],
 "knowsLanguage": ["pt-PT"],
 "slogan": "Serviço 24h/7d em Trás-os-Montes • Trabalho garantido por escrito"
 };
 // FAQ Schema enriquecido
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": `Qual é o horário de atendimento do ${config.serviceType}?`,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Estamos disponíveis Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados. Serviço de urgência permanente."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto tempo demora a chegar em caso de urgência?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "O nosso tempo médio de resposta em situações de urgência é rápido. Contacte-nos e a nossa equipa actua com brevidade."
 }
 },
 {
 "@type": "Question",
 "name": "Qual é a zona de cobertura?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Cobrimos toda a região de Trás-os-Montes num raio de 130 km, incluindo Bragança, Mirandela, Trás-os-Montes, Miranda do Douro, Vinhais, Chaves, Vila Real, Mogadouro, Torre de Moncorvo, Freixo de Espada à Cinta, Valpaços e Alfândega da Fé."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa uma intervenção?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Os preços variam conforme o serviço e a localização. Oferecemos sem compromisso e sem compromisso. Preços a partir de 50€ para instalação de tomadas."
 }
 },
 {
 "@type": "Question",
 "name": "Têm certificação profissional?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Sim, somos eletricistas certificados com anos de experiência na região. Trabalhamos com equipamento profissional Fluke e FLIR, e emitimos certificação elétrica."
 }
 }
 ]
 };
 // BreadcrumbList Schema dinâmico
 const getBreadcrumbSchema = () => {
 const breadcrumbItems = [
 {
 "@type": "ListItem",
 "position": 1,
 "name": "Home",
 "item": `https://${config.domain}`
 }
 ];
 // Páginas cidade
 const cityPages = [
 { path: '/eletricista-chaves', city: 'Chaves' },
 { path: '/eletricista-braganca', city: 'Bragança' },
 { path: '/eletricista-mirandela', city: 'Mirandela' },
 { path: '/eletricista-macedo-de-cavaleiros', city: 'Trás-os-Montes' },
 { path: '/eletricista-valpacos', city: 'Valpaços' },
 { path: '/eletricista-vinhais', city: 'Vinhais' },
 { path: '/eletricista-miranda-douro', city: 'Miranda do Douro' },
 { path: '/eletricista-mogadouro', city: 'Mogadouro' },
 { path: '/eletricista-torre-moncorvo', city: 'Torre de Moncorvo' },
 { path: '/eletricista-freixo-espada-cinta', city: 'Freixo de Espada à Cinta' }
 ];
 const currentCity = cityPages.find(page => location === page.path);
 if (currentCity) {
 breadcrumbItems.push({
 "@type": "ListItem",
 "position": 2,
 "name": config.serviceType,
 "item": `https://${config.domain}/servicos`
 });
 breadcrumbItems.push({
 "@type": "ListItem",
 "position": 3,
 "name": `${serviceName} em ${currentCity.city}`,
 "item": `https://${config.domain}${location}`
 });
 } else if (location !== '/') {
 // Para todas as outras páginas
 const pageTitles: Record<string, string> = {
 '/urgencias-24h': 'Urgências 24h',
 '/simulador-preco': 'Simulador de Preço',
 '/servicos-restauracao': 'Serviços para Restauração',
 '/servicos-hotelaria': 'Serviços para Hotelaria',
 '/servicos-condominios': 'Serviços para Condomínios',
 '/contactos': 'Contactos',
 '/sobre': 'Sobre Nós',
 '/blog': 'Blog'
 };
 const pageTitle = pageTitles[location] || location.split('/').pop()?.replace(/-/g, ' ');
 if (pageTitle) {
 breadcrumbItems.push({
 "@type": "ListItem",
 "position": 2,
 "name": pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1),
 "item": `https://${config.domain}${location}`
 });
 }
 }
 return {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": breadcrumbItems
 };
 };
 const breadcrumbSchema = getBreadcrumbSchema();
 // Inserir todos os schemas
 const schemas = [
 localBusinessSchema,
 serviceSchema,
 websiteSchema,
 organizationSchema,
 breadcrumbSchema,
 ...reviewsSchema
 ];
 // Adicionar FAQPage apenas se não estiver numa página cidade (evitar duplicação)
 if (shouldIncludeFAQ) {
 schemas.push(faqSchema);
 }
 // Adicionar o schema específico da cidade se aplicável
 const cityServiceSchema = getCityServiceSchema();
 if (cityServiceSchema) {
 schemas.push(cityServiceSchema);
 }
 schemas.forEach(schema => {
 const script = document.createElement('script');
 script.type = 'application/ld+json';
 script.text = JSON.stringify(schema);
 document.head.appendChild(script);
 });
 }, [config, location, getCurrentCity]);
 return null;
}
