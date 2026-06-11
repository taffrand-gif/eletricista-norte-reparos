// Seção Avaliações Google com Schema AggregateRating
import { useSite } from '@/contexts/SiteContext';
import { useEffect, useRef, useState } from 'react';
interface Review {
 name: string;
 initial: string;
 city: string;
 rating: number;
 text: string;
 date: string;
}
const reviews: Review[] = [
 {
 name: 'Manuel S.',
 initial: 'M',
 city: 'Bragança',
 rating: 5,
 text: 'Excelente serviço! Veio resolver um curto-circuito às 23h. Muito profissional.',
 date: 'há 1 semana'},
 {
 name: 'Ana R.',
 initial: 'A',
 city: 'Mirandela',
 rating: 5,
 text: 'Instalou o quadro elétrico novo em meio dia. Preço justo e trabalho impecável.',
 date: 'há 2 semanas'},
 {
 name: 'Carlos M.',
 initial: 'C',
 city: 'Vila Real',
 rating: 5,
 text: 'certificação elétrica feita rapidamente. Recomendo a 100%.',
 date: 'há 3 semanas'},
 {
 name: 'Maria L.',
 initial: 'M',
 city: 'Chaves',
 rating: 4,
 text: 'Bom trabalho na instalação dos painéis solares. Só demorou um pouco mais que o previsto.',
 date: 'há 1 mês'},
 {
 name: 'João P.',
 initial: 'J',
 city: 'Trás-os-Montes',
 rating: 5,
 text: 'O melhor eletricista da região. Sempre disponível e preços honestos.',
 date: 'há 1 mês'},
 {
 name: 'Teresa F.',
 initial: 'T',
 city: 'Mogadouro',
 rating: 5,
 text: 'Veio de longe mas chegou rápido. Resolveu a avaria Atendimento prioritário.',
 date: 'há 2 meses'},
];
const avatarColors = ['#FF6B35', '#E53935', '#8E24AA', '#1E88E5', '#43A047', '#FB8C00'];
function Stars({ count }: { count: number }) {
 return (
 <div className="flex gap-0.5" role="img" aria-label={`${count} de 5 estrelas`}>
 {[1, 2, 3, 4, 5].map((i) => (
 <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill={i <= count ? '#FBBC04' : '#E0E0E0'}>
 <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
 </svg>
 ))}
 </div>
 );
}
function GoogleLogo() {
 return (
 <svg className="w-16 h-6" viewBox="0 0 272 92" aria-label="Google">
 <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
 <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
 <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
 <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
 <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
 <path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.01z" fill="#4285F4"/>
 </svg>
 );
}
export default function GoogleReviews() {
 const { config } = useSite();
 const sectionRef = useRef<HTMLElement>(null);
 const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(reviews.length).fill(false));
 useEffect(() => {
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 reviews.forEach((_, index) => {
 setTimeout(() => {
 setVisibleCards((prev) => {
 const next = [...prev];
 next[index] = true;
 return next;
 });
 }, index * 150);
 });
 observer.disconnect();
 }
 });
 },
 { threshold: 0.15 }
 );
 if (sectionRef.current) observer.observe(sectionRef.current);
 return () => observer.disconnect();
 }, []);
 // Injetar schema AggregateRating
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
 {/* removed */}
/* removed */
 return (
 <section ref={sectionRef} className="py-16 bg-gray-50" aria-label="Avaliações de clientes">
 <div className="container mx-auto px-4">
 {/* Header */}
 <div className="text-center mb-10">
 <div className="flex items-center justify-center gap-3 mb-4">
 <GoogleLogo />
 <span className="text-sm text-gray-500 font-medium">Avaliações</span>
 </div>
 <div className="flex items-center justify-center gap-2 mb-2">
 <span className="text-4xl font-bold text-gray-900">4.9</span>
 <div>
 <Stars count={5} />
 <p className="text-sm text-gray-500 mt-0.5">Baseado em 47 avaliações</p>
 </div>
 </div>
 </div>
 {/* Review cards */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
 {reviews.map((review, index) => (
 <div
 key={index}
 className={`bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-all duration-500 ${
 visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
 }`}
 >
 <div className="flex items-start gap-3 mb-3">
 <div
 className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
 style={{ backgroundColor: avatarColors[index % avatarColors.length] }}
 >
 {review.initial}
 </div>
 <div className="flex-1 min-w-0">
 <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
 <p className="text-xs text-gray-400">{review.city} · {review.date}</p>
 </div>
 <svg className="w-5 h-5 flex-shrink-0 opacity-30" viewBox="0 0 24 24">
 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
 </svg>
 </div>
 <Stars count={review.rating} />
 <p className="text-sm text-gray-600 mt-2 leading-relaxed">"{review.text}"</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
