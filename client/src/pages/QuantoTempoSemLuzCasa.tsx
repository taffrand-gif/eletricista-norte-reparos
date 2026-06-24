// Page SEO optimisée: "Quanto Tempo Sem Luz Casa" - Intention urgence/panique
// Recherche fréquente: "quanto tempo sem luz casa", "avaria eletrica quanto tempo", "quanto tempo eletricista"
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, CheckCircle, AlertTriangle, Wrench, Zap } from 'lucide-react';
export default function QuantoTempoSemLuzCasa() {
 const { config } = useSite();
 const schemaData = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Tempo Sem Luz Casa? Avaria Arranjada em 1-3h",
 "description": "Guia completo de tempos para arranjar avaria eléctrica: desde diagnóstico até luz restabelecida",
 "author": {
 "@type": "Organization",
 "name": config.businessName
 },
 "publisher": {
 "@type": "Organization",
 "name": config.businessName,
 "telephone": config.phone
 }
 };
 const faqs = [
 {
 question: "Quanto tempo fico sem luz se disjuntor disparar?",
 answer: "Disjuntor simples: 1-2 horas. Curto-circuito: 2-4 horas. Problema quadro: 3-6 horas. Eletricista chega em 30-45 min. Começamos arranjo imediatamente. Urgente 24h: 932 321 892"
 },
 {
 question: "Eletricista consegue restabelecer luz no mesmo dia?",
 answer: "SIM, 95% avarias resolvidas mesmo dia. Trazemos material comum (disjuntores, cabos, fusíveis). Se precisar peça especial, instalamos provisório até chegar. Urgente 24h disponível."
 },
 {
 question: "Quanto tempo demora arranjar curto-circuito?",
 answer: "Curto-circuito: 2-4 horas. Inclui: localizar curto (30-90min), reparar cabo/tomada (30-120min), testar circuito (20-30min), certificar (20min). Feito em 1 dia."
 },
 {
 question: "Posso ter luz hoje se avaria acontecer de manhã?",
 answer: "SIM, se ligar de manhã. Chegamos 30-45 min, arranjamos 1-4h. Se ligar 09:00, luz restabelecida 11:00-14:00. Atendemos urgências 24h: 932 321 892"
 }
 ];
 const tempos = [
 {
 tipo: "Disjuntor Disparado",
 problema: "Sobrecarga, disjuntor avariado",
 tempo: "1-2h",
 solucao: "Substituir disjuntor",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico: 10-15 min",
 "Substituir disjuntor: 20-30 min",
 "Testar circuito: 10-15 min",
 "Certificar: 15-20 min"
 ],
 urgencia: "MÉDIA",
 icon: CheckCircle
 },
 {
 tipo: "Curto-Circuito",
 problema: "Cabo danificado, tomada queimada",
 tempo: "2-4h",
 solucao: "Reparar circuito",
 detalhes: [
 "Chegada: 30-45 min",
 "Localizar curto: 30-90 min",
 "Desligar circuito: 5 min",
 "Reparar cabo/tomada: 30-120 min",
 "Testar circuito: 20-30 min",
 "Certificar: 20 min"
 ],
 urgencia: "ALTA",
 icon: Wrench
 },
 {
 tipo: "Problema Quadro",
 problema: "Diferencial avariado, quadro antigo",
 tempo: "3-6h",
 solucao: "Reparar/substituir componente",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico quadro: 20-30 min",
 "Desligar geral: 5 min",
 "Substituir diferencial: 45-120 min",
 "Ligar circuitos: 30-60 min",
 "Testar todos: 30-45 min",
 "Certificar: 20-30 min"
 ],
 urgencia: "ALTA",
 icon: AlertTriangle
 },
 {
 tipo: "Falta Luz Geral",
 problema: "Problema rede, contador",
 tempo: "2-8h",
 solucao: "Coordenar com EDP",
 detalhes: [
 "Chegada: 30-45 min",
 "Diagnóstico: 15-20 min",
 "Contactar EDP: 30-60 min",
 "Espera técnico EDP: 1-4 horas",
 "Reparar ligação: 30-90 min",
 "Testar: 20-30 min"
 ],
 urgencia: "CRÍTICA",
 icon: Zap
 }
 ];
 const factores = [
 {
 factor: "Tipo de Avaria",
 impacto: "Disjuntor: rápido. Curto: médio. Quadro: longo. Rede: muito longo",
 tempo: "+30min a +6h"
 },
 {
 factor: "Localização Problema",
 impacto: "Quadro: rápido. Circuito: médio. Parede escondida: longo",
 tempo: "+20min a +3h"
 },
 {
 factor: "Disponibilidade Material",
 impacto: "Material comum (stock): rápido. Material especial: +1-2 dias",
 tempo: "+30min a +48h"
 },
 {
 factor: "Hora do Dia",
 impacto: "Dia: normal. Noite/fim-semana: pode demorar mais chegar",
 tempo: "+15min a +1h"
 },
 {
 factor: "certificação elétrica",
 impacto: "Certificação obrigatória, incluída no tempo",
 tempo: "15-30 min"
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Tempo Sem Luz Casa? Avaria Arranjada 1-3h | 932 321 892</title>
 <meta name="description" content="Quanto tempo sem luz casa? Avaria arranjada em 1-3h. Disjuntor: 1-2h, Curto-circuito: 2-4h, Quadro: 3-6h. Eletricista chega 30-45min. Urgente 24h: 932 321 892" />
 <script type="application/ld+json">
 {JSON.stringify(schemaData)}
 </script>
 </Helmet>
 <Header />
 <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
 {/* Hero */}
 <section className="bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-6">
 <Clock className="w-5 h-5" />
 URGENTE 24H
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Quanto Tempo Sem Luz Casa?
 </h1>
 <p className="text-xl mb-8">
 Avaria arranjada em 1-3 horas. Eletricista chega em 30-45 minutos.
 95% avarias resolvidas no mesmo dia. Atendimento urgente 24h.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#FF6B35] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Urgente: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Sem luz em casa. Avaria eléctrica. Urgente!`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Tabela de Tempos */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">
 ⏱️ Quanto Tempo Até Ter Luz?
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Tempos incluem: chegada + diagnóstico + arranjo + teste + luz restabelecida
 </p>
 <div className="max-w-5xl mx-auto space-y-6">
 {tempos.map((item, index) => (
 <div key={index} className={`rounded-xl shadow-lg overflow-hidden border-2 ${
 item.urgencia === 'CRÍTICA' ? 'border-red-500 bg-red-50' :
 item.urgencia === 'ALTA' ? 'border-orange-500 bg-orange-50' :
 'border-yellow-500 bg-yellow-50'
 }`}>
 <div className={`p-6 ${
 item.urgencia === 'CRÍTICA' ? 'bg-gradient-to-r from-red-600 to-red-500' :
 item.urgencia === 'ALTA' ? 'bg-gradient-to-r from-orange-600 to-orange-500' :
 'bg-gradient-to-r from-yellow-600 to-yellow-500'
 } text-white`}>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <item.icon className="w-8 h-8" />
 <div>
 <h3 className="text-2xl font-bold">{item.tipo}</h3>
 <p className="text-sm opacity-90">{item.problema}</p>
 </div>
 </div>
 <div className="text-right">
 <div className="text-3xl font-bold">{item.tempo}</div>
 <div className="text-sm opacity-90">até ter luz</div>
 </div>
 </div>
 </div>
 <div className="p-6">
 <div className="grid md:grid-cols-2 gap-6">
 <div>
 <h4 className="font-bold text-gray-900 mb-3">Etapas:</h4>
 <ul className="space-y-2">
 {item.detalhes.map((detalhe, i) => (
 <li key={i} className="flex items-start gap-2 text-gray-700">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
 <span>{detalhe}</span>
 </li>
 ))}
 </ul>
 </div>
 <div className="space-y-4">
 <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
 <div className="text-sm text-gray-600 mb-1">Solução:</div>
 <div className="text-xl font-bold text-gray-900">{item.solucao}</div>
 </div>
 <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
 <div className="text-sm text-gray-600 mb-1">Urgência:</div>
 <div className={`text-xl font-bold ${
 item.urgencia === 'CRÍTICA' ? 'text-red-600' :
 item.urgencia === 'ALTA' ? 'text-orange-600' :
 'text-yellow-600'
 }`}>{item.urgencia}</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Factores */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 ⚙️ Factores que Afectam o Tempo
 </h2>
 <div className="max-w-4xl mx-auto space-y-4">
 {factores.map((item, index) => (
 <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6B35]">
 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.factor}</h3>
 <p className="text-gray-600">{item.impacto}</p>
 </div>
 <div className="bg-orange-50 px-4 py-2 rounded-lg text-center">
 <div className="text-sm text-gray-600">Impacto</div>
 <div className="text-lg font-bold text-[#FF6B35]">{item.tempo}</div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* Timeline */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 📅 Timeline Típica (Disjuntor Disparado)
 </h2>
 <div className="max-w-3xl mx-auto">
 <div className="space-y-6">
 {[
 { tempo: "14:00", acao: "Liga para 932 321 892", descricao: "Sem luz em casa. Atendimento imediato." },
 { tempo: "14:05", acao: "Eletricista a caminho", descricao: "Confirmamos chegada em 30-45 minutos" },
 { tempo: "14:35", acao: "Eletricista chega", descricao: "Avaliação quadro eléctrico e diagnóstico" },
 { tempo: "14:45", acao: "Diagnóstico completo", descricao: "Identificamos problema: disjuntor avariado" },
 { tempo: "14:50", acao: "Início reparação", descricao: "Substituição disjuntor (material em stock)" },
 { tempo: "15:10", acao: "Reparação concluída", descricao: "Disjuntor novo instalado" },
 { tempo: "15:20", acao: "Teste circuito", descricao: "Verificação voltagem e segurança" },
 { tempo: "15:35", acao: "Luz restabelecida!", descricao: "Casa com luz. Certificação emitida." }
 ].map((step, index) => (
 <div key={index} className="flex gap-4">
 <div className="flex flex-col items-center">
 <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
 {index + 1}
 </div>
 {index < 7 && <div className="w-0.5 h-full bg-[#FF6B35] mt-2"></div>}
 </div>
 <div className="flex-1 pb-8">
 <div className="bg-orange-50 p-4 rounded-lg">
 <div className="flex items-center gap-3 mb-2">
 <Clock className="w-5 h-5 text-[#FF6B35]" />
 <span className="font-bold text-[#FF6B35]">{step.tempo}</span>
 <span className="text-gray-900 font-semibold">{step.acao}</span>
 </div>
 <p className="text-gray-600 text-sm ml-8">{step.descricao}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perguntas Frequentes - Tempo Sem Luz Casa
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white">
 <div className="container mx-auto px-4 text-center">
 <Clock className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Sem Luz Casa? Arranjamos em 1-3 Horas
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Eletricista chega em 30-45 minutos. 95% avarias resolvidas mesmo dia.
 Atendimento urgente 24h em Trás-os-Montes.
 </p>
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#FF6B35] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors inline-flex items-center gap-2 shadow-lg"
 >
 <Phone className="w-6 h-6" />
 {config.phone}
 </a>
 </div>
 </section>
 </main>
 <Footer />
 </>
 );
}
