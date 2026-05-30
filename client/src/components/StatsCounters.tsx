'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSite } from '@/contexts/SiteContext';
interface CounterProps {
 end: number;
 duration?: number;
 suffix?: string;
 prefix?: string;
}
function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
 const [count, setCount] = useState(0);
 const [isVisible, setIsVisible] = useState(false);
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting && !isVisible) {
 setIsVisible(true);
 }
 },
 { threshold: 0.3 }
 );
 if (ref.current) {
 observer.observe(ref.current);
 }
 return () => observer.disconnect();
 }, [isVisible]);
 useEffect(() => {
 if (!isVisible) return;
 let startTime: number | null = null;
 const animate = (currentTime: number) => {
 if (!startTime) startTime = currentTime;
 const progress = Math.min((currentTime - startTime) / duration, 1);
 
 // Easing function (ease-out)
 const easeOut = 1 - Math.pow(1 - progress, 3);
 setCount(Math.floor(easeOut * end));
 if (progress < 1) {
 requestAnimationFrame(animate);
 }
 };
 requestAnimationFrame(animate);
 }, [isVisible, end, duration]);
 return (
 <div ref={ref} className="text-5xl md:text-6xl font-black text-gray-900">
 {prefix}{count}{suffix}
 </div>
 );
}
export default function StatsCounters() {
 const { config } = useSite();
 const isPlumber = config.id === 'norte-reparos';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
 const stats = isPlumber
 ? [
 { value: 500, suffix: '+', label: 'Canalizações Arranjadas', icon: '💧' },
 { value: 10, suffix: '+', label: 'Anos de Experiência', icon: '⭐' },
 { value: 40, label: 'Min Chegada a Bragança', icon: '⏱️' },
 { value: 4.9, suffix: '/5', label: 'Avaliação Clientes', icon: '🌟' },
 ]
 : [
 { value: 350, suffix: '+', label: 'Instalações Realizadas', icon: '⚡' },
 { value: 10, suffix: '+', label: 'Anos de Experiência', icon: '⭐' },
 { value: 40, label: 'Min Chegada a Bragança', icon: '⏱️' },
 { value: 4.9, suffix: '/5', label: 'Avaliação Clientes', icon: '🌟' },
 ];
 return (
 <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
 Números que Falam por Si
 </h2>
 <p className="text-lg text-gray-600">
 Experiência comprovada em Trás-os-Montes
 </p>
 </div>
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
 {stats.map((stat, idx) => (
 <div
 key={idx}
 className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
 >
 <div className="text-5xl mb-4">{stat.icon}</div>
 <div className="text-gray-900">
 <AnimatedCounter
 end={stat.value}
 suffix={stat.suffix || ''}
 duration={2500}
 />
 </div>
 <div className="text-sm md:text-base font-semibold text-gray-700 mt-3">
 {stat.label}
 </div>
 </div>
 ))}
 </div>
 <div className="text-center mt-12">
 <p className="text-gray-600 text-sm max-w-2xl mx-auto">
 {isPlumber
 ? 'Mais de 500 famílias em Trás-os-Montes confiam no nosso trabalho. Fugas resolvidas, entupimentos eliminados, casas de banho renovadas — sempre com garantia e transparência total.'
 : 'Mais de 350 instalações elétricas certificadas em Trás-os-Montes. Quadros modernizados, certificações emitidas, problemas resolvidos — sempre com equipamento profissional Fluke e FLIR.'}
 </p>
 </div>
 </div>
 </section>
 );
}
