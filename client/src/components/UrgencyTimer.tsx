import React from 'react';
// Component: Urgency Timer - Eletricista
// Creates time-based urgency with limited-time offers
// Psychological trigger: scarcity + FOMO + certification
import { useSite } from '@/contexts/SiteContext';
import { useState, useEffect } from 'react';
function UrgencyTimer() {
 const { config } = useSite();
 const [timeLeft, setTimeLeft] = useState({
 hours: 0,
 minutes: 0,
 seconds: 0});
 useEffect(() => {
 // Calculate time until end of day (midnight)
 const calculateTimeLeft = () => {
 const now = new Date();
 const midnight = new Date();
 midnight.setHours(24, 0, 0, 0);
 const difference = midnight.getTime() - now.getTime();
 if (difference > 0) {
 setTimeLeft({
 hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
 minutes: Math.floor((difference / 1000 / 60) % 60),
 seconds: Math.floor((difference / 1000) % 60)});
 }
 };
 calculateTimeLeft();
 const timer = setInterval(calculateTimeLeft, 1000);
 return () => clearInterval(timer);
 }, []);
 const offers = [
 {
 icon: '🎁',
 title: 'Desconto 15% Hoje',
 description: 'Ligue hoje e ganhe 15% desconto em qualquer serviço',
 value: 'Até €40 economizado'},
 {
 icon: '🚀',
 title: 'Prioridade Urgente',
 description: 'Clientes que ligam hoje têm prioridade máxima',
 value: 'Resposta rápida garantida, em minutos'},
 {
 icon: '📜',
 title: ' Grátis',
 description: 'certificação elétrica incluída sem custo extra',
 value: '€150 valor'},
 ];
 return (
 <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
 {/* Animated background */}
 <div className="absolute inset-0 opacity-10">
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
 </div>
 <div className="container relative z-10">
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-8">
 <div className="inline-block px-6 py-2 bg-yellow-400 text-gray-900 font-black text-sm rounded-full mb-4 animate-bounce">
 ⚡ OFERTA LIMITADA HOJE ⚡
 </div>
 <h2 className="text-4xl md:text-5xl font-black mb-4">
 🔥 Promoção Termina em:
 </h2>
 </div>
 {/* Countdown Timer */}
 <div className="flex justify-center gap-4 mb-8">
 <div className="bg-white text-gray-900 rounded-lg p-6 min-w-[100px] text-center shadow-2xl">
 <div className="text-5xl font-black mb-2" style={{ color: config.colors.primary }}>
 {String(timeLeft.hours).padStart(2, '0')}
 </div>
 <div className="text-sm font-bold uppercase">Horas</div>
 </div>
 <div className="flex items-center text-4xl font-black">:</div>
 <div className="bg-white text-gray-900 rounded-lg p-6 min-w-[100px] text-center shadow-2xl">
 <div className="text-5xl font-black mb-2" style={{ color: config.colors.primary }}>
 {String(timeLeft.minutes).padStart(2, '0')}
 </div>
 <div className="text-sm font-bold uppercase">Minutos</div>
 </div>
 <div className="flex items-center text-4xl font-black">:</div>
 <div className="bg-white text-gray-900 rounded-lg p-6 min-w-[100px] text-center shadow-2xl">
 <div className="text-5xl font-black mb-2" style={{ color: config.colors.primary }}>
 {String(timeLeft.seconds).padStart(2, '0')}
 </div>
 <div className="text-sm font-bold uppercase">Segundos</div>
 </div>
 </div>
 {/* Offers Grid */}
 <div className="grid md:grid-cols-3 gap-6 mb-8">
 {offers.map((offer, index) => (
 <div
 key={index}
 className="bg-white text-gray-900 p-6 rounded-lg shadow-xl"
 >
 <div className="text-5xl mb-3">{offer.icon}</div>
 <h3 className="text-xl font-black mb-2" style={{ color: config.colors.primary }}>
 {offer.title}
 </h3>
 <p className="text-gray-700 mb-3">{offer.description}</p>
 <div className="inline-block px-4 py-2 bg-green-100 text-green-800 font-bold rounded-full text-sm">
 {offer.value}
 </div>
 </div>
 ))}
 </div>
 {/* CTA */}
 <div className="text-center">
 <p className="text-2xl font-black mb-6">
 ⏰ Não Perca! Ligue AGORA e Aproveite!
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 px-10 py-6 font-black text-2xl bg-white rounded-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 style={{ color: config.colors.primary }}
 >
 📞 {config.phone}
 </a>
 <a
 href={`https://wa.me/351${config.phone.replace(/\s/g, '')}?text=Olá, quero aproveitar a promoção de hoje com 15% desconto + grátis!`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-10 py-6 font-black text-2xl bg-green-500 text-white rounded-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
 >
 💬 WhatsApp
 </a>
 </div>
 <p className="text-sm mt-4 opacity-90">
 ✅ Válido apenas para chamadas feitas hoje • ✅ Mencione "promoção site"
 </p>
 </div>
 {/* Social Proof */}
 <div className="mt-8 text-center">
 <p className="text-lg font-bold">
 🔥 <span className="text-yellow-300">18 pessoas</span> já aproveitaram hoje!
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(UrgencyTimer);
