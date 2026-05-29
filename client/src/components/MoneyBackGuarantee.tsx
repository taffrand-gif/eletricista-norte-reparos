import React from 'react';
// Component: Money-Back Guarantee - Eletricista
// Risk reversal strategy - removes fear of trying the service
// Shows confidence in quality and builds trust with certification

import { useSite } from '@/contexts/SiteContext';
// memo removed from 'react';

function MoneyBackGuarantee() {
 const { config } = useSite();

 const guarantees = [
 {
 icon: '🎯',
 title: 'Problema Não Resolvido?',
 description: 'Se não resolvermos o problema elétrico, não paga NADA.',
 badge: '100% Grátis'},
 {
 icon: '⏰',
 title: 'Atrasamos Mais de 1 Hora?',
 description: 'Desconto automático de 20% no serviço.',
 badge: '-20% Desconto'},
 {
 icon: '🔄',
 title: 'Problema Volta em 12 Meses?',
 description: 'Voltamos GRÁTIS quantas vezes for necessário.',
 badge: 'Garantia 12 Meses'},
 {
 icon: '💯',
 title: 'Não Ficou Satisfeito?',
 description: 'Devolução 100% do dinheiro, sem perguntas.',
 badge: 'Satisfação Total'},
 ];

 return (
 <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
 <div className="container">
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-block p-4 rounded-full mb-6" style={{ backgroundColor: `${config.colors.primary}15` }}>
 <span className="text-6xl">🛡️</span>
 </div>
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 Garantia "Risco ZERO" para Si
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Estamos TÃO confiantes na qualidade do nosso trabalho Trabalho garantido por escrito que assumimos TODO o risco.
 Se não ficar 100% satisfeito, não paga.
 </p>
 </div>

 {/* Guarantees Grid */}
 <div className="grid md:grid-cols-2 gap-6 mb-12">
 {guarantees.map((guarantee, index) => (
 <div
 key={index}
 className="bg-white p-8 rounded-lg border-4 shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
 style={{ borderColor: config.colors.primary }}
 >
 {/* Badge */}
 <div
 className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-black text-white"
 style={{ backgroundColor: config.colors.primary }}
 >
 {guarantee.badge}
 </div>

 {/* Icon */}
 <div className="text-6xl mb-4">{guarantee.icon}</div>

 {/* Title */}
 <h3 className="text-2xl font-black mb-3 text-gray-900">
 {guarantee.title}
 </h3>

 {/* Description */}
 <p className="text-lg text-gray-700 leading-relaxed">
 {guarantee.description}
 </p>
 </div>
 ))}
 </div>

 {/* Main Guarantee Box */}
 <div
 className="bg-white p-10 rounded-lg border-4 shadow-2xl text-center"
 style={{ borderColor: config.colors.primary }}
 >
 <h3 className="text-3xl font-black mb-6" style={{ color: config.colors.primary }}>
 ✅ Garantia Certificada Por Escrito + 
 </h3>
 <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
 Não é conversa. Recebe certificado de garantia por escrito + certificação elétrica com todas estas condições.
 Sem letra pequena. Sem truques. Sem desculpas.
 </p>

 {/* Why We Can Offer This */}
 <div className="bg-green-50 border-4 border-green-500 rounded-lg p-8 mb-8">
 <h4 className="text-2xl font-black text-green-900 mb-4">
 Porquê Podemos Oferecer Isto?
 </h4>
 <div className="grid md:grid-cols-3 gap-6 text-left">
 <div>
 <div className="text-3xl mb-2">👨‍🔧</div>
 <p className="font-bold text-green-900 mb-1">10+ Anos Experiência</p>
 <p className="text-green-800">Eletricistas certificados </p>
 </div>
 <div>
 <div className="text-3xl mb-2">🔧</div>
 <p className="font-bold text-green-900 mb-1">Equipamento Profissional</p>
 <p className="text-green-800">Multímetro Fluke + termografia</p>
 </div>
 <div>
 <div className="text-3xl mb-2">⭐</div>
 <p className="font-bold text-green-900 mb-1">500+ Instalações </p>
 <p className="text-green-800">Menos de 1% reclamações</p>
 </div>
 </div>
 </div>

 {/* CTA */}
 <div>
 <p className="text-2xl font-black mb-6">
 Experimente SEM RISCO Hoje!
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-5 font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-xl"
 style={{ backgroundColor: config.colors.primary }}
 >
 📞 Ligue: {config.phone}
 </a>
 <a
 href={`https://wa.me/351${config.phone.replace(/\s/g, '')}?text=Olá, quero saber mais sobre a garantia risco zero + !`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-5 font-bold text-white bg-green-500 rounded-lg shadow-lg hover:shadow-xl transition-all text-xl"
 >
 💬 WhatsApp
 </a>
 </div>
 <p className="text-sm text-gray-500 mt-4">
 ✅ Sem compromisso • ✅ Inspeção grátis • ✅ Chegamos em 40min
 </p>
 </div>
 </div>

 {/* Trust Indicators */}
 <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
 <div className="p-6 bg-white rounded-lg border-2 border-gray-200">
 <div className="text-4xl mb-2">📜</div>
 <p className="font-bold text-gray-900">certificação elétrica</p>
 <p className="text-gray-600 text-sm">Conforme legislação portuguesa</p>
 </div>
 <div className="p-6 bg-white rounded-lg border-2 border-gray-200">
 <div className="text-4xl mb-2">🏆</div>
 <p className="font-bold text-gray-900"> Estrelas</p>
 <p className="text-gray-600 text-sm">500+ instalações certificadas</p>
 </div>
 <div className="p-6 bg-white rounded-lg border-2 border-gray-200">
 <div className="text-4xl mb-2">⚡</div>
 <p className="font-bold text-gray-900">Resposta {'<'}5min</p>
 <p className="text-gray-600 text-sm">Atendimento 24h real</p>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

export default React.memo(MoneyBackGuarantee);
