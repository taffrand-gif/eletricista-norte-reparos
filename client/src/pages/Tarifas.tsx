import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSite } from '@/contexts/SiteContext';
import TauxHoraireDisplay from '@/components/TauxHoraireDisplay';
import ForfaitsGrid from '@/components/ForfaitsGrid';
import WhyWePublishPrices from '@/components/WhyWePublishPrices';
import FloatingCTA from '@/components/FloatingCTA';
import MobileStickyBar from '@/components/MobileStickyBar';
function Tarifas() {
 const { config } = useSite();
 const accentColor = config.id === 'norte-reparos' ? '#0e7490' : '#FF6B35';
 return (
 <>
 <Helmet>
 <title>Tarifas Transparentes - {config.name}</title>
 <meta
 name="description"
 content="Preços claros e transparentes. Sem surpresas. Consulte os nossos tarifários completos antes de ligar."
 />
 <meta name="robots" content="index, follow" />
 <link rel="canonical" href={`https://${config.domain}/tarifas`} />
 </Helmet>
 {/* Hero Section */}
 <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
 <div className="absolute inset-0 opacity-10">
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
 </div>
 <div className="container mx-auto px-4 relative z-10">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
 <span className="text-sm font-bold" style={{ color: accentColor }}>
 100% TRANSPARENTE
 </span>
 </div>
 <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
 Tarifas Claras.<br />
 Sem Surpresas.
 </h1>
 <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
 Somos uma das poucas empresas em Portugal que publica os seus preços online.
 Porque acreditamos que merece saber quanto vai pagar <strong>antes</strong> de nos ligar.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.id === 'norte-reparos' ? '928484451' : '932321892'}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: accentColor }}
 >
 📞 Ligar Agora
 </a>
 <a
 href={`https://wa.me/351${config.id === 'norte-reparos' ? '928484451' : '932321892'}?text=${encodeURIComponent('Olá! Vi os vossos preços. Gostaria de confirmar disponibilidade.')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-gray-900 text-lg shadow-lg hover:shadow-xl transition-all"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Main Content */}
 <TauxHoraireDisplay />
 <ForfaitsGrid />
 <WhyWePublishPrices />
 {/* Final Trust Section */}
 <section className="py-16 bg-gray-900 text-white">
 <div className="container mx-auto px-4 max-w-4xl text-center">
 <h2 className="text-3xl md:text-4xl font-bold mb-6">
 Pronto Para Começar?
 </h2>
 <p className="text-xl text-gray-300 mb-8">
 Já sabe quanto custa. Agora só precisa de confirmar a nossa disponibilidade.
 </p>
 <div className="grid md:grid-cols-3 gap-6 mb-8">
 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
 <div className="text-4xl mb-3">⚡</div>
 <h3 className="font-bold mb-2">Resposta Rápida</h3>
 <p className="text-sm text-gray-300">Atendemos em menos de 2 minutos</p>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
 <div className="text-4xl mb-3">✅</div>
 <h3 className="font-bold mb-2">Preço Garantido</h3>
 <p className="text-sm text-gray-300">O que vê é o que paga</p>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
 <div className="text-4xl mb-3">🛡️</div>
 <h3 className="font-bold mb-2">Garantia Total</h3>
 <p className="text-sm text-gray-300">Trabalho garantido por escrito garantida</p>
 </div>
 </div>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.id === 'norte-reparos' ? '928484451' : '932321892'}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: accentColor }}
 >
 📞 {config.id === 'norte-reparos' ? '928 484 451' : '932 321 892'}
 </a>
 <a
 href={`https://wa.me/351${config.id === 'norte-reparos' ? '928484451' : '932321892'}?text=${encodeURIComponent('Olá! Vi os vossos preços. Gostaria de confirmar disponibilidade.')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-green-600 text-white text-lg shadow-lg hover:shadow-xl transition-all hover:bg-green-700"
 >
 💬 Enviar WhatsApp
 </a>
 </div>
 </div>
 </section>
 <FloatingCTA />
 <MobileStickyBar />
 </>
 );
}
export default Tarifas;
