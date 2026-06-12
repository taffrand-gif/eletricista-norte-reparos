import React from 'react';
import { useState, memo } from 'react';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useAnalytics } from '@/hooks/useAnalytics';
function QuoteCalculator() {
 const [isOpen, setIsOpen] = useState(false);
 const { trackQuoteCalculated, trackQuoteSentWhatsApp } = useAnalytics();
 const isPlumber = ACTIVE_CONFIG.type === 'plomberie';
 const accentColor = isPlumber ? '#0e7490' : '#D84315'; // Darker orange for better contrast
 const services = isPlumber ? [
 { id: 'fuga', name: 'Arranjo de Fuga de Água', base: 80, urgent: 120, icon: '💧' },
 { id: 'desentupimento', name: 'Desentupimento', base: 60, urgent: 90, icon: '🚿' },
 { id: 'esquentador', name: 'Arranjo Esquentador', base: 90, urgent: 130, icon: '🔥' },
 { id: 'torneira', name: 'Substituição Torneira', base: 50, urgent: 75, icon: '🚰' },
 { id: 'sanita', name: 'Arranjo Sanita', base: 70, urgent: 100, icon: '🚽' },
 { id: 'canalizacao', name: 'Instalação Canalização Nova', base: 150, urgent: 200, icon: '🔧' },
 ] : [
 { id: 'quadro', name: 'Arranjo Quadro Elétrico', base: 100, urgent: 150, icon: '⚡' },
 { id: 'tomada', name: 'Instalação Tomada/Interruptor', base: 40, urgent: 60, icon: '🔌' },
 { id: 'iluminacao', name: 'Instalação Iluminação', base: 60, urgent: 90, icon: '💡' },
 { id: 'avaria', name: 'Arranjo Avaria Urgente', base: 80, urgent: 120, icon: '🚨' },
 { id: 'certificacao', name: 'certificação elétrica', base: 120, urgent: 180, icon: '📋' },
 { id: 'instalacao', name: 'Instalação Elétrica Nova', base: 200, urgent: 280, icon: '🏗️' },
 ];
 const handleServiceClick = (selectedService: typeof services[0]) => {
 const basePrice = selectedService.base;
 const minPrice = Math.floor(basePrice * 0.9);
 const maxPrice = Math.ceil(basePrice * 1.3);
 const priceRange = `${minPrice}€ - ${maxPrice}€`;
 trackQuoteCalculated(selectedService.name, 'normal', priceRange);
 trackQuoteSentWhatsApp(selectedService.name);
 const message = `Olá! Vi o calculador no vosso site e preciso de:\n\nServiço: ${selectedService.name}\nOrçamento estimado: ${priceRange}\n\nPode confirmar o preço exato?`;
 window.open(`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
 };
 if (!isOpen) {
 return (
 <button
 onClick={() => setIsOpen(true)}
 className="fixed bottom-[152px] right-4 md:bottom-6 md:right-6 z-40 text-white font-bold px-5 py-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-resposta prioritária-w-[56px] min-h-[56px]"
 style={{ backgroundColor: accentColor }}
 aria-label="Abrir calculador de orçamento"
 >
 <span className="text-2xl">💰</span>
 <span className="hidden md:inline">Ver Preços</span>
 </button>
 );
 }
 return (
 <div className="fixed bottom-[152px] right-4 left-4 md:bottom-6 md:right-6 md:left-auto z-50 md:w-[480px] bg-white rounded-2xl shadow-2xl animate-slide-up max-h-[calc(100vh-120px)] overflow-y-auto">
 <div className="p-5 md:p-6">
 {/* Header */}
 <div className="flex justify-between items-center mb-4">
 <h3 className="text-lg md:text-xl font-bold text-gray-900">
 💰 Pedir Orçamento Rápido
 </h3>
 <button
 onClick={() => setIsOpen(false)}
 className="text-gray-400 hover:text-gray-600 text-3xl min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
 aria-label="Fechar"
 >
 ×
 </button>
 </div>
 <p className="text-base md:text-sm text-gray-600 mb-4">
 Clique no serviço para pedir orçamento direto no WhatsApp
 </p>
 {/* Service Cards Grid */}
 <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
 {services.map((service) => {
 const minPrice = Math.floor(service.base * 0.9);
 const maxPrice = Math.ceil(service.base * 1.3);
 return (
 <button
 key={service.id}
 onClick={() => handleServiceClick(service)}
 className="group relative bg-white border-2 border-gray-200 rounded-xl p-4 transition-all hover:border-current hover:shadow-lg hover:scale-105 text-left min-h-[120px]"
 style={{
 '--hover-color': accentColor} as React.CSSProperties}
 >
 <div className="text-3xl mb-2">{service.icon}</div>
 <h4 className="text-sm md:text-xs font-bold text-gray-900 mb-2 leading-tight">
 {service.name}
 </h4>
 <div className="text-base md:text-lg font-bold group-hover:text-current transition-colors" style={{ color: accentColor }}>
 {minPrice}€ - {maxPrice}€
 </div>
 <div className="mt-2 text-xs text-gray-500">
 Clique para pedir
 </div>
 </button>
 );
 })}
 </div>
 {/* Trust Indicators */}
 <div className="bg-gray-50 rounded-xl p-4 space-y-2">
 <div className="flex items-center gap-2 text-base md:text-sm text-gray-700">
 <span className="text-green-600">✓</span>
 <span>Sem compromisso e sem compromisso</span>
 </div>
 <div className="flex items-center gap-2 text-base md:text-sm text-gray-700">
 <span className="text-green-600">✓</span>
 <span>Resposta em menos de 1 hora</span>
 </div>
 <div className="flex items-center gap-2 text-base md:text-sm text-gray-700">
 <span className="text-green-600">✓</span>
 <span>Preço final confirmado após avaliação</span>
 </div>
 </div>
 </div>
 <style>{`
 @keyframes slide-up {
 from {
 opacity: 0;
 transform: translateY(20px);
 }
 to {
 opacity: 1;
 transform: translateY(0);
 }
 }
 .animate-slide-up {
 animation: slide-up 0.3s ease-out;
 }
 button:hover {
 border-color: var(--hover-color);
 }
 `}</style>
 </div>
 );
}
export default React.memo(QuoteCalculator);
