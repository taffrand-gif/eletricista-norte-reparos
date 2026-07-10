// GEO1 — FAQPage JSON-LD unificado + answer-first schema
// Réutilisé par 5 pages top money ENR/CNR pour maximiser citabilité IA
// Règles appliquées : R11 (zéro invention), R12 (grille tarifa + zonas + +50% nuit/WE/feriado),
//                    R145 (jamais de délai chiffré), §12 (pronom "nossa equipa"/"garantimos")
import React from 'react';

export interface FAQItem {
 question: string;
 answer: string;
}

export interface AnswerFirstFAQSchemaProps {
 pageTitle: string;
 pageUrl: string;
 faqs: FAQItem[];
 /** NAP affiché dans le CTA final (sans préfixe pays, formaté avec espaces) */
 phone: string;
 /** Nom commercial affiché dans le CTA final */
 businessName?: string;
 /** Domaine canonique (utile pour identifier le JSON-LD @id) */
 domain: string;
}

/**
 * Injecte un bloc FAQPage JSON-LD complet (toujours présent, indépendamment
 * du contenu visible de la page). Le bloc est marqué avec un id déterministe
 * pour permettre à d'autres scripts (StructuredData global) de le détecter.
 */
export default function AnswerFirstFAQSchema({
 pageTitle,
 pageUrl,
 faqs,
 phone,
 businessName = 'Norte Reparos',
 domain,
}: AnswerFirstFAQSchemaProps): null {
 const schemaId = 'geo1-faq-schema';
 React.useEffect(() => {
 // Éviter les doublons si la page en injecte plusieurs instances
 document.querySelectorAll(`#${schemaId}`).forEach((node) => {
 if (node.getAttribute('data-page-url') !== pageUrl) node.remove();
 });
 let script = document.getElementById(schemaId) as HTMLScriptElement | null;
 if (!script) {
 script = document.createElement('script');
 script.id = schemaId;
 script.type = 'application/ld+json';
 document.head.appendChild(script);
 }
 script.setAttribute('data-page-url', pageUrl);
 const schema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 '@id': `${pageUrl}#faqpage`,
 'name': pageTitle,
 'url': pageUrl,
 'inLanguage': 'pt-PT',
 'isPartOf': {
 '@type': 'WebSite',
 'name': businessName,
 'url': `https://${domain}`,
 },
 'about': {
 '@type': 'Service',
 'name': pageTitle,
 'provider': {
 '@type': 'Organization',
 'name': businessName,
 'url': `https://${domain}`,
 },
 },
 'mainEntity': faqs.map((faq, index) => ({
 '@type': 'Question',
 'position': index + 1,
 'name': faq.question,
 'acceptedAnswer': {
 '@type': 'Answer',
 'text': faq.answer,
 },
 })),
 };
 script.textContent = JSON.stringify(schema);
 return () => {
 const existing = document.getElementById(schemaId);
 if (existing && existing.getAttribute('data-page-url') === pageUrl) {
 existing.remove();
 }
 };
 }, [pageUrl, pageTitle, faqs, phone, businessName, domain]);

 // Pas de rendu DOM : c'est un composant head-only
 return null;
}