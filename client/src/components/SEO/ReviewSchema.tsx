// Review Schema Component - Témoignages Individuels avec Rich Snippets
// Affiche les étoiles dans Google Search Results

interface ReviewData {
 author: string;
 rating: number;
 date: string;
 text: string;
 city?: string;
}

interface ReviewSchemaProps {
 reviews: ReviewData[];
 businessName: string;
 businessUrl: string;
}

export function ReviewSchema({ reviews, businessName, businessUrl }: ReviewSchemaProps) {
 const schema = {
 "@context": "https://schema.org",
 "@graph": reviews.map(review => ({
 "@type": "Review",
 "itemReviewed": {
 "@type": "LocalBusiness",
 "name": businessName,
 "url": businessUrl
 },
 "author": {
 "@type": "Person",
 "name": review.author
 },
 "reviewRating": {
 "@type": "Rating",
 "ratingValue": review.rating.toString(),
 "bestRating": "5",
 "worstRating": "1"
 },
 "reviewBody": review.text,
 "datePublished": review.date
 }))
 };

 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 />
 );
}

// Témoignages Premium Eletricista
export const eletricistaReviews: ReviewData[] = [
 {
 author: "Paulo R.",
 rating: 5,
 date: "2026-02-16",
 text: "Curto-circuito às 2h da manhã. Chegaram em 35 minutos e resolveram tudo com segurança. certificação elétrica incluída!",
 city: "Bragança"
 },
 {
 author: "Sandra M.",
 rating: 5,
 date: "2026-02-27",
 text: "Quadro elétrico a disparar constantemente. Identificaram problema e substituíram disjuntor. Muito profissionais!",
 city: "Bragança"
 },
 {
 author: "Ricardo F.",
 rating: 5,
 date: "2026-03-06",
 text: "certificação elétrica para apartamento. Serviço rápido, preço justo e entrega em 48h. Recomendo!",
 city: "Bragança"
 },
 {
 author: "Fernando L.",
 rating: 5,
 date: "2026-02-21",
 text: "Quadro elétrico completamente queimado. Substituíram tudo em 3h com certificação. Excelente trabalho!",
 city: "Mirandela"
 },
 {
 author: "Cristina P.",
 rating: 5,
 date: "2026-03-02",
 text: "Avaria elétrica urgente. Vieram logo e resolveram com garantia de 12 meses. Top!",
 city: "Mirandela"
 },
 {
 author: "Armando S.",
 rating: 5,
 date: "2026-02-19",
 text: "Bomba de água sem funcionar. Identificaram problema elétrico e resolveram no mesmo dia. Perfeito!",
 city: "Macedo de Cavaleiros"
 },
 {
 author: "Isabel C.",
 rating: 5,
 date: "2026-02-26",
 text: "certificação elétrica para casa nova. Serviço impecável e preço combinado antes. Obrigada!",
 city: "Macedo de Cavaleiros"
 },
 {
 author: "Rui A.",
 rating: 5,
 date: "2026-02-23",
 text: "Aquecimento elétrico avariado no inverno. Vieram urgente e resolveram com garantia. Muito bom!",
 city: "Chaves"
 },
 {
 author: "Nuno M.",
 rating: 5,
 date: "2026-03-03",
 text: "Avaria elétrica no 6º andar. Resolveram rapidamente com certificação. Profissionais de confiança!",
 city: "Vila Real"
 },
 {
 author: "Alberto B.",
 rating: 5,
 date: "2026-02-20",
 text: "Casa isolada sem eletricidade. Vieram até aqui e resolveram tudo com certificação. Muito obrigado!",
 city: "Vinhais"
 }
];
