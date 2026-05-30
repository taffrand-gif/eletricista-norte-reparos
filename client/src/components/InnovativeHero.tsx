// Hero section profissional com design moderno
import React from 'react';
import { useSite } from '@/contexts/SiteContext';
const InnovativeHero: React.FC = () => {
 const { config } = useSite();
 // Determinar dados conforme o site
 const isPlumber = config.id === 'norte-reparos';
 const statsData = isPlumber
 ? [
 { icon: '💧', value: 'Certificado', label: 'Seguro Ativo' },
 { icon: '🔬', value: 'Ridgid', label: 'Câmara Inspeção' },
 { icon: '🛡️', value: '500+', label: 'Intervenções' },
 { icon: '📞', value: '40 min', label: 'Chegada Bragança' },
 ]
 : [
 { icon: '✅', value: '', label: 'Certificado' },
 { icon: '🔬', value: 'Fluke & FLIR', label: 'Diagnóstico Pro' },
 { icon: '⚡', value: '350+', label: 'Intervenções' },
 { icon: '📞', value: '40 min', label: 'Chegada Bragança' },
 ];
 const badgeText = isPlumber
 ? 'CANALIZADOR Atendimento 24h — RESPOSTA EM 2 MIN'
 : 'ELETRICISTA CERTIFICADO — CHEGAMOS EM 40 MINUTOS';
 const badgeEmoji = isPlumber ? '💧' : '⚡';
 const gradientFrom = isPlumber ? 'from-blue-600' : 'from-amber-500';
 const gradientVia = isPlumber ? 'via-blue-700' : 'via-amber-600';
 const gradientTo = isPlumber ? 'to-blue-900' : 'to-blue-900';
 const overlayFrom = isPlumber ? 'from-blue-900/40' : 'from-amber-900/40';
 const overlayTo = isPlumber ? 'to-blue-900/60' : 'to-blue-900/60';
 const ctaPrimaryBg = isPlumber
 ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600'
 : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600';
 const ctaSecondaryBorder = isPlumber ? 'border-blue-500' : 'border-amber-500';
 const ctaSecondaryText = isPlumber ? 'text-blue-900' : 'text-blue-900';
 const statBorderHover = isPlumber ? 'hover:border-blue-400' : 'hover:border-amber-400';
 return (
 <section
 id="home"
 className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
 style={{
 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${config.hero.backgroundImage}')`}}
 >
 {/* LCP Image preload hint */}
 <link rel="preload" as="image" href={config.hero.backgroundImage} fetchPriority="high" />
 {/* Background overlay */}
 <div className={`absolute inset-0 bg-gradient-to-br ${overlayFrom} via-transparent ${overlayTo}`} />
 
 {/* Contenu principal */}
 <div className="container relative z-10 mx-auto px-4 py-16 text-center">
 <div className="max-w-4xl mx-auto">
 {/* Badge professionnel */}
 <div className="inline-flex items-center gap-3 bg-white/20 border border-white/30 rounded-full px-8 py-4 mb-10 shadow-2xl">
 <span className="text-3xl">{badgeEmoji}</span>
 <span className="text-white font-bold text-xl tracking-wide">
 {badgeText}
 </span>
 </div>
 
 {/* Titre H1 principal */}
 <div className="relative mb-8">
 <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
 <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
 {config.hero.title}
 </span>
 </h1>
 </div>
 
 {/* Sous-titre */}
 <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
 {config.hero.subtitle}
 </p>
 
 {/* Botões CTA */}
 <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className={`group relative overflow-hidden ${ctaPrimaryBg} text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto sm:min-w-[280px]`}
 style={{ minHeight: '56px' }}
 >
 <span className="relative z-10 flex items-center justify-center gap-4">
 <span className="text-2xl">📞</span>
 <span className="text-xl">LIGAR AGORA: {config.phone}</span>
 </span>
 </a>
 
 <a
 href={`https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`}
 target="_blank"
 rel="noopener noreferrer"
 className={`group relative overflow-hidden bg-white hover:bg-gray-50 ${ctaSecondaryText} font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto sm:min-w-[280px] border-2 ${ctaSecondaryBorder}`}
 style={{ minHeight: '56px' }}
 >
 <span className="relative z-10 flex items-center justify-center gap-4">
 <span className="text-2xl">💬</span>
 <span className="text-xl">CONTACTAR TÉCNICO</span>
 </span>
 </a>
 </div>
 
 {/* Estatísticas */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
 {statsData.map((stat, index) => (
 <div 
 key={index}
 className={`bg-white/10 rounded-2xl p-6 border border-white/20 ${statBorderHover} transition-all duration-300 hover:scale-105`}
 >
 <div className="text-3xl mb-3">{stat.icon}</div>
 <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
 <div className="text-white/80 text-sm">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </div>
 
 {/* Flèche de scroll */}
 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
 <div className="text-white text-3xl">↓</div>
 </div>
 </section>
 );
};
export default InnovativeHero;
