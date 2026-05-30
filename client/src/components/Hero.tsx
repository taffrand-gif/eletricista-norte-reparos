import React from 'react';
// Design: Layout de Serviço Profissional
// - Título massivo com ExtraBold Poppins
// - Hero de largura total com sobreposição
// - Botão CTA grande com sombra dura
// - Três badges de valor com bordas grossas
import { useSite } from '@/contexts/SiteContext';
import { useMemo } from 'react';
import { Phone } from 'lucide-react';
import { ServicesSlider } from './ServicesSlider';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLocationContent, usePersonalizedWhatsAppMessage } from '@/hooks/useLocationContent';
function Hero() {
 const { config } = useSite();
 const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();
 const { city, arrivalTime } = useLocationContent();
 // Título e subtítulo personalizados
 const personalizedTitle = useMemo(() => {
 return `${config.hero.title.split('—')[0]}— ${city}`;
 }, [config.hero.title, city]);
 const personalizedSubtitle = useMemo(() => {
 return `Serviço 24h/7d em ${city} • Chegamos em ${arrivalTime}`;
 }, [city, arrivalTime]);
 const whatsappMessage = usePersonalizedWhatsAppMessage(config.whatsappMessage);
 return (
 <section
 id="home"
 className="relative min-h-[600px] flex items-center justify-center bg-gray-900"
 >
 {/* Hero image with fetchpriority for LCP optimization */}
 <img
 src={config.hero.backgroundImage}
 alt="Eletricista profissional a trabalhar em Trás-os-Montes"
 fetchPriority="high"
 className="absolute inset-0 w-full h-full object-cover"
 style={{ filter: 'brightness(0.35)' }}
 />
 <div className="container py-20 text-center text-white relative z-10">
 {/* Services Slider */}
 <div className="mb-12">
 <ServicesSlider />
 </div>
 {/* Título principal - Título massivo brutalista */}
 <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
 {personalizedTitle}
 </h1>
 {/* Subtítulo */}
 <p className="text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto">
 {personalizedSubtitle}
 </p>
 {/* Badge de urgência */}
 <div className="mb-6 inline-block">
 <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse">
 🚨 TÉCNICO DISPONÍVEL EM {city.toUpperCase()} • CHEGAMOS EM {arrivalTime.toUpperCase()}
 </div>
 </div>
 {/* Botões CTA — mobile: largura total empilhados, desktop: inline */}
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 onClick={() => trackPhoneClick(config.phone)}
 className="w-full sm:w-auto inline-flex items-center justify-center text-lg md:text-2xl px-8 md:px-12 font-black tracking-wide text-white rounded shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95"
 style={{
 backgroundColor: config.colors.primary,
 minHeight: '56px'}}
 aria-label={`Ligar agora para ${config.phone}`}
 >
 <Phone className="w-6 h-6 mr-3" />
 LIGAR AGORA
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
 onClick={() => trackWhatsAppClick('Hero')}
 target="_blank"
 rel="noopener noreferrer"
 className="w-full sm:w-auto inline-flex items-center justify-center text-lg md:text-2xl px-8 md:px-12 font-black tracking-wide text-white rounded shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95"
 style={{
 backgroundColor: '#25D366',
 minHeight: '56px'}}
 aria-label="Contactar via WhatsApp"
 >
 💬 WhatsApp Grátis
 </a>
 </div>
 {/* Indicadores de confiança abaixo do CTA */}
 <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-sm">
 <div className="flex items-center gap-2">
 <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
 <span className="font-bold"> (500+ avaliações)</span>
 </div>
 <div className="hidden sm:block text-white/50">•</div>
 <div className="font-semibold">
 ✓ Orçamento 100% Grátis
 </div>
 <div className="hidden sm:block text-white/50">•</div>
 <div className="font-semibold">
 ✓ Garantia 2 Anos
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(Hero);
