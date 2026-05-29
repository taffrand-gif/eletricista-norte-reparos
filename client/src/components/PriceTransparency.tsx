import React from 'react';
// Price Transparency Component - Comparaison 3 colonnes
// Outros vs Nós vs Você Economiza
// Impact: Lever objection #1 "Combien ça coûte?"

import { useSite } from '@/contexts/SiteContext';
import { useAnalytics } from '@/hooks/useAnalytics';
// memo removed from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface ComparisonColumn {
 title: string;
 icon: string;
 items: string[];
 highlight: boolean;
}

function PriceTransparency() {
 const { config } = useSite();
 const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();

 const serviceType = config.id === 'norte-reparos' ? 'Canalizadores' : 'Eletricistas';

 const columns: ComparisonColumn[] = [
 {
 title: `Outros ${serviceType}`,
 icon: '❌',
 items: [
 'Preço só no final',
 'Taxas escondidas',
 'Sem garantia escrita',
 '"Depois vemos o preço"',
 'Surpresas na fatura'
 ],
 highlight: false
 },
 {
 title: config.name,
 icon: '✅',
 items: [
 'Preço fixo ANTES de sair',
 'Orçamento grátis 2min telefone',
 'Garantia 2 anos escrita',
 'Sem surpresas garantido',
 'Preço = Preço combinado'
 ],
 highlight: true
 },
 {
 title: 'Você Economiza',
 icon: '💰',
 items: [
 'Sem stress',
 'Sem surpresas desagradáveis',
 'Arranjo definitiva',
 'Tranquilidade total',
 'Confiança 100%'
 ],
 highlight: false
 }
 ];

 const handlePhoneClick = () => {
 trackPhoneClick(config.phone);
 };

 const handleWhatsAppClick = () => {
 trackWhatsAppClick('PriceTransparency');
 };

 return (
 <section className="py-16" style={{ backgroundColor: config.id === 'norte-reparos' ? '#f0f9ff' : '#fff7ed' }}>
 <div className="container">
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-4">
 💰 Orçamento Gratuito por Telefone
 </div>
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 Preço Transparente — Sem Surpresas
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Saiba exatamente quanto vai pagar ANTES de começarmos.
 Orçamento gratuito em 2 minutos por telefone.
 </p>
 </div>

 {/* Comparison Grid */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
 {columns.map((column, index) => (
 <div
 key={index}
 className={`bg-white p-6 rounded-xl transition-all ${
 column.highlight
 ? 'border-4 shadow-lg transform md:scale-105'
 : 'border-2 border-gray-200'
 }`}
 style={column.highlight ? { borderColor: config.colors.primary } : {}}
 >
 {/* Column Header */}
 <div className="text-center mb-6">
 <div className="text-5xl mb-3">{column.icon}</div>
 <h3 className="text-xl font-black text-gray-900">
 {column.title}
 </h3>
 {column.highlight && (
 <div
 className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mt-2"
 style={{ backgroundColor: config.colors.primary }}
 >
 RECOMENDADO
 </div>
 )}
 </div>

 {/* Items List */}
 <ul className="space-y-3">
 {column.items.map((item, itemIndex) => (
 <li key={itemIndex} className="flex items-start gap-3">
 <span className={`text-xl flex-shrink-0 ${column.highlight ? '' : 'opacity-50'}`}>
 {column.icon}
 </span>
 <span className={`text-gray-700 ${column.highlight ? 'font-semibold' : ''}`}>
 {item}
 </span>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>

 {/* CTA Banner */}
 <div
 className="bg-white p-8 rounded-xl border-4 text-center"
 style={{ borderColor: config.colors.primary }}
 >
 <h3 className="text-2xl font-black mb-4">
 Ligue Agora — Saiba o Preço em 2 Minutos
 </h3>
 <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
 Orçamento gratuito e sem compromisso. Preço fixo garantido antes de começarmos.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 onClick={handlePhoneClick}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
 style={{ backgroundColor: config.colors.primary }}
 aria-label={`Ligar para ${config.phone}`}
 >
 <Phone className="w-5 h-5" />
 Ligar: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de um orçamento gratuito.')}`}
 onClick={handleWhatsAppClick}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-[#128C7E] rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
 aria-label="Contactar via WhatsApp"
 >
 <MessageCircle className="w-5 h-5" />
 WhatsApp
 </a>
 </div>
 <p className="text-sm text-gray-500 mt-4">
 ✅ Orçamento gratuito • ✅ Sem compromisso • ✅ Preço fixo garantido
 </p>
 </div>

 {/* Social Proof */}
 <div className="mt-8 text-center">
 <div className="inline-flex items-center gap-2 text-yellow-500 text-2xl mb-2">
 ★★★★★
 </div>
 <p className="text-gray-600">
 <strong className="text-gray-900"></strong> baseado em{' '}
 <strong className="text-gray-900">500+</strong> clientes que apreciaram a transparência
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}

export default React.memo(PriceTransparency);
