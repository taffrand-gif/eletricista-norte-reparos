import React from 'react';
// Componente Seção de Garantia - 4 cartões de garantia
// Superar objeção #2 "Ele vai realmente resolver?"
// Impacto: Confiança + Conversão
import { useSite } from '@/contexts/SiteContext';
import { useAnalytics } from '@/hooks/useAnalytics';
// memo removed from 'react';
import { Phone, MessageCircle } from 'lucide-react';
interface Guarantee {
 icon: string;
 title: string;
 description: string;
 badge: string;
}
function GuaranteeSection() {
 const { config } = useSite();
 const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();
 // Garanties spécifiques selon le site
 const guarantees: Guarantee[] = config.id === 'norte-reparos'
 ? [
 {
 icon: '🛡️',
 title: 'Garantia 2 Anos',
 description: 'Se o problema voltar em 2 anos, intervenção gratuita. Sem letra pequena.',
 badge: 'Escrita'
 },
 {
 icon: '🔧',
 title: 'Equipamento Profissional',
 description: 'Ridgid K-9102 + Câmara 30m + FLIR — Resolve na primeira vez',
 badge: 'Pro'
 },
 {
 icon: '👨‍🔧',
 title: 'Técnico Certificado',
 description: '12+ anos de experiência — Sabe o que faz',
 badge: '12+ anos'
 },
 {
 icon: '✅',
 title: 'Material Homologado',
 description: 'Garantia 12 meses — Não voltamos daqui a 2 semanas',
 badge: '12 meses'
 }
 ]
 : [
 {
 icon: '🛡️',
 title: 'Garantia 2 Anos',
 description: 'Se o problema voltar em 2 anos, intervenção gratuita. Sem letra pequena.',
 badge: 'Escrita'
 },
 {
 icon: '🔧',
 title: 'Equipamento Profissional',
 description: 'Fluke + FLIR + Analisador redes — Resolve na primeira vez',
 badge: 'Pro'
 },
 {
 icon: '👨‍🔧',
 title: 'Técnico Certificado',
 description: '12+ anos de experiência + — Sabe o que faz',
 badge: ''
 },
 {
 icon: '✅',
 title: 'Material Homologado',
 description: 'Schneider/Hager/Legrand — Não voltamos daqui a 2 semanas',
 badge: 'Premium'
 }
 ];
 const handlePhoneClick = () => {
 trackPhoneClick(config.phone);
 };
 const handleWhatsAppClick = () => {
 trackWhatsAppClick('GuaranteeSection');
 };
 return (
 <section className="py-16 bg-green-50">
 <div className="container">
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-4">
 🛡️ Garantia Escrita — Sem Letra Pequena
 </div>
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 Garantia 2 Anos — Se Voltar, Voltamos Grátis
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Arranjo definitiva, não temporária. Por isso garantimos 2 anos.
 </p>
 </div>
 {/* Guarantees Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
 {guarantees.map((guarantee, index) => (
 <article
 key={index}
 className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 group"
 >
 {/* Icon */}
 <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
 {guarantee.icon}
 </div>
 {/* Badge */}
 <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full mb-3">
 {guarantee.badge}
 </div>
 {/* Title */}
 <h3 className="text-xl font-black text-gray-900 mb-3">
 {guarantee.title}
 </h3>
 {/* Description */}
 <p className="text-gray-700 leading-relaxed">
 {guarantee.description}
 </p>
 </article>
 ))}
 </div>
 {/* CTA Banner */}
 <div className="bg-white p-8 rounded-xl border-4 border-green-500 text-center">
 <h3 className="text-2xl font-black mb-4">
 Arranjo com Garantia — Ligue Já
 </h3>
 <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
 Trabalho garantido 2 anos. Se o problema voltar, voltamos gratuitamente.
 Sem letra pequena, sem desculpas.
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
 href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent('Olá! Quero uma arranjo com garantia escrita.')}`}
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
 ✅ Garantia escrita • ✅ Equipamento profissional • ✅ Técnico certificado
 </p>
 </div>
 {/* Social Proof */}
 <div className="mt-8 text-center">
 <p className="text-gray-600">
 <strong className="text-gray-900">0 reclamações</strong> em 2 anos •{' '}
 <strong className="text-gray-900">500+ trabalhos</strong> garantidos
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(GuaranteeSection);
