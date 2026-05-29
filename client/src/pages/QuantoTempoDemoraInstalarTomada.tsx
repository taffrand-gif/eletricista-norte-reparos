// Page SEO optimisée: "Quanto Tempo Demora Instalar Tomada" - Intention planification
// Recherche fréquente: "quanto tempo demora instalar tomada", "tempo instalar tomada", "quanto tempo eletricista"

import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, CheckCircle, Zap, AlertTriangle, Wrench } from 'lucide-react';

export default function QuantoTempoDemoraInstalarTomada() {
 const { config } = useSite();

 const schemaData = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Tempo Demora Instalar Tomada? Tempos Reais 2026",
 "description": "Guia completo de tempos para instalar tomada: desde avaliação até certificação",
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
 question: "Quanto tempo demora instalar tomada nova?",
 answer: "Tomada simples: 1-2 horas. Tomada com cablagem nova: 2-4 horas. Inclui: avaliação, passar cabos (se necessário), instalar tomada, ligar quadro, testar, certificar . Marcação: 932 321 892"
 },
 {
 question: "Quanto tempo fico sem luz ao instalar tomada?",
 answer: "Sem luz no circuito: 30-90 minutos (só circuito afectado). Resto da casa mantém luz. Desligamos apenas circuito necessário para segurança. Avisamos antes de cortar."
 },
 {
 question: "Posso instalar tomada em 1 dia?",
 answer: "SIM. Instalação tomada é feita em 1 dia (1-4h). Começamos, terminamos no mesmo dia. certificação elétrica emitida no final. Pode usar tomada imediatamente após."
 },
 {
 question: "Quanto tempo demora instalar várias tomadas?",
 answer: "2 tomadas: 2-3h. 3-4 tomadas: 3-5h. 5+ tomadas: 4-8h. Depende se cabos já existem ou precisam passar novos. Orçamento gratuito: 932 321 892"
 }
 ];

 const tempos = [
 {
 tipo: "Tomada Simples",
 descricao: "Substituir tomada existente",
 tempo: "1-2h",
 semLuz: "30-60 min",
 detalhes: [
 "Avaliação: 10 min",
 "Desligar circuito: 5 min",
 "Remover antiga: 10 min",
 "Instalar nova: 20-30 min",
 "Ligar quadro: 10 min",
 "Testar: 10-15 min",
 "Certificar: 15-20 min"
 ],
 icon: CheckCircle
 },
 {
 tipo: "Tomada Nova (Cabos Existem)",
 descricao: "Adicionar tomada em parede com cabos",
 tempo: "2-3h",
 semLuz: "60-90 min",
 detalhes: [
 "Avaliação: 15 min",
 "Desligar circuito: 5 min",
 "Abrir parede: 20-30 min",
 "Ligar cabos: 30-45 min",
 "Instalar tomada: 20-30 min",
 "Fechar parede: 30-45 min",
 "Testar: 15 min",
 "Certificar: 20 min"
 ],
 icon: Wrench
 },
 {
 tipo: "Tomada Nova (Cabos Novos)",
 descricao: "Passar cabos desde quadro",
 tempo: "3-5h",
 semLuz: "90-120 min",
 detalhes: [
 "Avaliação: 20 min",
 "Desligar circuito: 5 min",
 "Passar cabos: 90-150 min",
 "Ligar quadro: 30-45 min",
 "Instalar tomada: 20-30 min",
 "Fechar parede: 30-60 min",
 "Testar: 20 min",
 "Certificar: 20-30 min"
 ],
 icon: Zap
 },
 {
 tipo: "Várias Tomadas (5+)",
 descricao: "Instalar múltiplas tomadas",
 tempo: "4-8h",
 semLuz: "2-4 horas",
 detalhes: [
 "Avaliação: 30 min",
 "Desligar circuitos: 10 min",
 "Passar cabos: 120-240 min",
 "Ligar quadro: 45-90 min",
 "Instalar tomadas: 60-120 min",
 "Fechar paredes: 60-120 min",
 "Testar todas: 30-45 min",
 "Certificar: 30-45 min"
 ],
 icon: AlertTriangle
 }
 ];

 const factores = [
 {
 factor: "Tipo de Instalação",
 impacto: "Substituir: rápido. Nova com cabos: médio. Nova sem cabos: longo",
 tempo: "+30min a +3h"
 },
 {
 factor: "Distância ao Quadro",
 impacto: "Perto quadro: rápido. Longe quadro: precisa passar mais cabo",
 tempo: "+30min a +2h"
 },
 {
 factor: "Tipo de Parede",
 impacato: "Pladur: rápido. Tijolo: médio. Betão: mais tempo",
 tempo: "+20min a +1h30"
 },
 {
 factor: "Acessibilidade Cabos",
 impacto: "Calha vista: rápido. Calha escondida: médio. Sem calha: longo",
 tempo: "+30min a +2h"
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
 <title>Quanto Tempo Demora Instalar Tomada? Tempos Reais 2026 | 932 321 892</title>
 <meta name="description" content="Quanto tempo demora instalar tomada? 1-5h dependendo tipo. Simples: 1-2h, Nova com cabos: 2-3h, Cabos novos: 3-5h. Certificação incluída. Marcação: 932 321 892" />
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
 TEMPOS REAIS 2026
 </div>

 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Quanto Tempo Demora Instalar Tomada?
 </h1>

 <p className="text-xl mb-8">
 Tempos reais: 1 a 5 horas (feito em 1 dia).
 Inclui instalação completa + certificação elétrica.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#FF6B35] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Marcar: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Preciso instalar tomada. Quanto tempo demora?`}
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
 ⏱️ Tabela de Tempos por Tipo
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Tempos incluem: avaliação + instalação + testes + certificação elétrica
 </p>

 <div className="max-w-5xl mx-auto space-y-6">
 {tempos.map((item, index) => (
 <div key={index} className="bg-gradient-to-r from-orange-50 to-white rounded-xl shadow-lg overflow-hidden border-2 border-orange-200">
 <div className="bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white p-6">
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <item.icon className="w-8 h-8" />
 <div>
 <h3 className="text-2xl font-bold">{item.tipo}</h3>
 <p className="text-sm opacity-90">{item.descricao}</p>
 </div>
 </div>
 <div className="text-right">
 <div className="text-3xl font-bold">{item.tempo}</div>
 <div className="text-sm opacity-90">tempo total</div>
 </div>
 </div>
 </div>

 <div className="p-6">
 <div className="grid md:grid-cols-2 gap-6">
 <div>
 <h4 className="font-bold text-gray-900 mb-3">Etapas detalhadas:</h4>
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
 <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
 <div className="text-sm text-gray-600 mb-1">⚠️ Tempo sem luz (circuito):</div>
 <div className="text-2xl font-bold text-red-600">{item.semLuz}</div>
 <p className="text-xs text-gray-600 mt-2">
 Só circuito afectado. Resto casa mantém luz.
 </p>
 </div>
 <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
 <div className="text-sm text-gray-600 mb-1">✅ Incluído:</div>
 <ul className="text-sm text-gray-700 space-y-1">
 <li>• certificação elétrica</li>
 <li>• Teste segurança</li>
 <li>• Garantia 2 anos</li>
 </ul>
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
 📅 Timeline Típica (Tomada Nova com Cabos)
 </h2>

 <div className="max-w-3xl mx-auto">
 <div className="space-y-6">
 {[
 { tempo: "10:00", acao: "Chegada eletricista", descricao: "Avaliação local e planeamento instalação" },
 { tempo: "10:15", acao: "Desligar circuito", descricao: "Corte seguro circuito afectado (resto mantém luz)" },
 { tempo: "10:20", acao: "Abrir parede", descricao: "Abertura cuidadosa para acesso cabos" },
 { tempo: "10:50", acao: "Ligar cabos", descricao: "Ligação segura cabos existentes" },
 { tempo: "11:20", acao: "Instalar tomada", descricao: "Montagem tomada e fixação parede" },
 { tempo: "11:50", acao: "Fechar parede", descricao: "Restauro parede, preparação pintura" },
 { tempo: "12:05", acao: "Testar instalação", descricao: "Teste segurança, voltagem, ligação terra" },
 { tempo: "12:20", acao: "certificação elétrica", descricao: "Emissão certificado conformidade" }
 ].map((step, index) => (
 <div key={index} className="flex gap-4">
 <div className="flex flex-col items-center">
 <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
 {step.tempo}
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
 Perguntas Frequentes - Tempo Instalar Tomada
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>

 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white">
 <div className="container mx-auto px-4 text-center">
 <Clock className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Instalar Tomada? Feito em 1 Dia
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Instalação completa 1-5h com certificação elétrica incluída.
 Pode usar tomada imediatamente após.
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
