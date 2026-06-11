// Bandeau de confiance animé com compteur
import { useSite } from '@/contexts/SiteContext';
import { useEffect, useRef, useState } from 'react';
const trustItems = [
 { icon: '🕐', label: 'Disponível Atendimento 24h/7d' },
 { icon: '💰', label: 'Orçamento Gratuito' },
 { icon: '✅', label: 'Garantia de Serviço' },
 { icon: '📍', label: 'Toda Trás-os-Montes' },
];
function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
 const [count, setCount] = useState(0);
 useEffect(() => {
 if (!start) return;
 let startTime: number | null = null;
 let raf: number;
 const animate = (timestamp: number) => {
 if (!startTime) startTime = timestamp;
 const progress = Math.min((timestamp - startTime) / duration, 1);
 // Ease out cubic
 const eased = 1 - Math.pow(1 - progress, 3);
 setCount(Math.floor(eased * target));
 if (progress < 1) {
 raf = requestAnimationFrame(animate);
 }
 };
 raf = requestAnimationFrame(animate);
 return () => cancelAnimationFrame(raf);
 }, [target, duration, start]);
 return count;
}
export default function TrustBanner() {
 const { config } = useSite();
 const ref = useRef<HTMLElement>(null);
 const [visible, setVisible] = useState(false);
 const count = useCountUp(350, 2000, visible);
 // Show target value immediately for crawlers/noscript, animate only replaces it
 const displayCount = visible ? count : 350;
 useEffect(() => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setVisible(true);
 observer.disconnect();
 }
 },
 { threshold: 0.3 }
 );
 if (ref.current) observer.observe(ref.current);
 return () => observer.disconnect();
 }, []);
 return (
 <section
 ref={ref}
 className="py-8 border-y border-gray-100"
 style={{ backgroundColor: `${config.colors.primary}08` }}
 aria-label="Indicadores de confiança"
 >
 <div className="container mx-auto px-4">
 {/* Trust badges */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
 {trustItems.map((item, i) => (
 <div
 key={i}
 className="flex items-center gap-3 justify-center p-3 rounded-lg bg-white shadow-sm border border-gray-50 group hover:shadow-md transition-shadow duration-300"
 >
 <span className="text-2xl group-hover:scale-110 transition-transform duration-300" role="img" aria-hidden="true">
 {item.icon}
 </span>
 <span className="text-sm font-semibold text-gray-700">{item.label}</span>
 </div>
 ))}
 </div>
 {/* Counter */}
 <div className="text-center">
 <p className="text-lg font-bold text-gray-800">
 Mais de{' '}
 <span className="text-3xl" style={{ color: config.colors.primary }}>
 {displayCount}+
 </span>{' '}
 intervenções realizadas
 </p>
 </div>
 </div>
 </section>
 );
}
