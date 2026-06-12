// Page SEO optimisée: "Quanto Tempo Demora Trocar Quadro Elétrico" - Intention planification
// Recherche fréquente: "quanto tempo demora trocar quadro elétrico", "tempo instalar quadro", "quanto tempo eletricista"
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, CheckCircle, Zap, AlertTriangle, Wrench } from 'lucide-react';
export default function QuantoTempoQuadro() {
 const { config } = useSite();
 const schemaData = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": "Quanto Tempo Demora Trocar Quadro Elétrico? Tempos Reais 2026",
 "description": "Guia completo de tempos para trocar quadro elétrico: desde avaliação até certificação",
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
 question: "Quanto tempo demora trocar quadro elétrico completo?",
 answer: "Quadro elétrico completo: 3 a 8 horas. T1/T2: 3-5h, T3/T4: 4-6h, Moradia: 5-8h. Inclui: desligar circuitos, remover quadro antigo, instalar novo, ligar circuitos, testar tudo, certificação elétrica. Marcação: 932 321 892"
 },
 {
 question: "Quanto tempo fico sem luz ao trocar quadro?",
 answer: "Sem luz total: 3-8 horas (durante instalação). Não é possível manter luz porque precisa desligar tudo para segurança. Planeie: carregue telemóveis, prepare lanterna, avise vizinhos se partilham contador."
 },
 {
 question: "Posso trocar quadro elétrico em 1 dia?",
 answer: "SIM. Quadro completo é feito em 1 dia (3-8h). Começamos de manhã, terminamos tarde. certificação elétrica emitida no final. Marcação antecipada recomendada: 932 321 892"
 },
 {
 question: "Quanto tempo demora substituir só um disjuntor?",
 answer: "Substituir disjuntor: 1-2 horas. Inclui: chegada eletricista (30-resposta prioritária), desligar circuito (resposta prioritária), substituir disjuntor (15-resposta prioritária), testar (10-resposta prioritária), certificar (15-resposta prioritária). Urgente 24h disponível."
 }
 ];
 const tempos = [
 {
 tipo: "Substituir Disjuntor",
 tamanho: "1 disjuntor",
 tempo: "1-2h",
 semLuz: "30-resposta prioritária",
 detalhes: [
 "Avaliação: resposta prioritária",
 "Desligar circuito: resposta prioritária",
 "Substituir: 15-resposta prioritária",
 "Testar: 10-resposta prioritária",
 "Certificar: 15-resposta prioritária"
 ],
 icon: Wrench
 },
 {
 tipo: "Quadro T1/T2",
 tamanho: "6-8 circuitos",
 tempo: "3-5h",
 semLuz: "3-5 horas",
 detalhes: [
 "Avaliação: resposta prioritária",
 "Desligar tudo: resposta prioritária",
 "Remover antigo: 30-resposta prioritária",
 "Instalar novo: 90-resposta prioritária",
 "Ligar circuitos: 45-resposta prioritária",
 "Testar tudo: 30-resposta prioritária",
 "Certificação: 20-resposta prioritária"
 ],
 icon: CheckCircle
 },
 {
 tipo: "Quadro T3/T4",
 tamanho: "10-12 circuitos",
 tempo: "4-6h",
 semLuz: "4-6 horas",
 detalhes: [
 "Avaliação: 30-resposta prioritária",
 "Desligar tudo: resposta prioritária",
 "Remover antigo: 45-resposta prioritária",
 "Instalar novo: 120-resposta prioritária",
 "Ligar circuitos: 60-resposta prioritária",
 "Testar tudo: 45-resposta prioritária",
 "Certificação: resposta prioritária"
 ],
 icon: Zap
 },
 {
 tipo: "Quadro Moradia",
 tamanho: "14-18 circuitos",
 tempo: "5-8h",
 semLuz: "5-8 horas",
 detalhes: [
 "Avaliação: 45-resposta prioritária",
 "Desligar tudo: resposta prioritária",
 "Remover antigo: 60-resposta prioritária",
 "Instalar novo: 150-resposta prioritária",
 "Ligar circuitos: 90-resposta prioritária",
 "Testar tudo: 60-resposta prioritária",
 "Certificação: 30-resposta prioritária"
 ],
 icon: AlertTriangle
 }
 ];
 const factores = [
 {
 factor: "Tamanho da Casa",
 impacto: "Mais circuitos = mais tempo ligar e testar cada um",
 tempo: "+1h a +3h"
 },
 {
 factor: "Estado Quadro Antigo",
 impacto: "Quadro muito antigo (fusíveis) demora mais remover",
 tempo: "+resposta prioritária a +1h"
 },
 {
 factor: "Acessibilidade",
 impacto: "Quadro em local difícil acesso demora mais trabalhar",
 tempo: "+resposta prioritária a +1h30"
 },
 {
 factor: "Cablagem Existente",
 impacto: "Cabos antigos podem precisar substituir alguns troços",
 tempo: "+1h a +3h"
 },
 {
 factor: "Certificação",
 impacto: "certificação elétrica obrigatória, incluída no tempo",
 tempo: "20-resposta prioritária"
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Tempo Demora Trocar Quadro Elétrico? Tempos Reais 2026 | 932 321 892</title>
 <meta name="description" content="Quanto tempo demora trocar quadro elétrico? 3-8h dependendo tamanho. T1/T2: 3-5h, T3/T4: 4-6h, Moradia: 5-8h. Certificação incluída. Marcação: 932 321 892" />
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
 Quanto Tempo Demora Trocar Quadro Elétrico?
 </h1>
 <p className="text-xl mb-8">
 Tempos reais: 3 a 8 horas (feito em 1 dia).
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
 href={`https://wa.me/${config.whatsapp}?text=Preciso trocar quadro elétrico. Quanto tempo demora?`}
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
 ⏱️ Tabela de Tempos por Tamanho
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
 <p className="text-sm opacity-90">{item.tamanho}</p>
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
 <div className="text-sm text-gray-600 mb-1">⚠️ Tempo sem luz:</div>
 <div className="text-2xl font-bold text-red-600">{item.semLuz}</div>
 <p className="text-xs text-gray-600 mt-2">
 Não é possível manter luz durante instalação (segurança)
 </p>
 </div>
 <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
 <div className="text-sm text-gray-600 mb-1">✅ Incluído:</div>
 <ul className="text-sm text-gray-700 space-y-1">
 <li>• certificação elétrica</li>
 <li>• Teste todos circuitos</li>
 <li>• Garantia do serviço</li>
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
 📅 Timeline Típica (Quadro T3)
 </h2>
 <div className="max-w-3xl mx-auto">
 <div className="space-y-6">
 {[
 { tempo: "09:00", acao: "Chegada eletricista", descricao: "Avaliação quadro antigo e planeamento" },
 { tempo: "09:30", acao: "Desligar electricidade", descricao: "Corte seguro de todos os circuitos" },
 { tempo: "09:50", acao: "Remover quadro antigo", descricao: "Desmontagem cuidadosa, identificação cabos" },
 { tempo: "10:45", acao: "Instalar quadro novo", descricao: "Montagem, ligação diferencial e disjuntores" },
 { tempo: "12:30", acao: "Pausa almoço", descricao: "30-resposta prioritária" },
 { tempo: "13:15", acao: "Ligar circuitos", descricao: "Ligação ordenada: iluminação, tomadas, cozinha, aquecimento" },
 { tempo: "14:45", acao: "Testes completos", descricao: "Teste cada circuito, verificação diferencial, medição corrente" },
 { tempo: "15:45", acao: "certificação elétrica", descricao: "Emissão certificado conformidade obrigatório" },
 { tempo: "16:15", acao: "Conclusão e limpeza", descricao: "Explicação funcionamento, entrega documentação" }
 ].map((step, index) => (
 <div key={index} className="flex gap-4">
 <div className="flex flex-col items-center">
 <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
 {step.tempo}
 </div>
 {index < 8 && <div className="w-0.5 h-full bg-[#FF6B35] mt-2"></div>}
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
 {/* Preparação */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">
 📋 Como Preparar para Trocar Quadro
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Preparação ajuda reduzir tempo instalação resposta prioritária
 </p>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
 {[
 { titulo: "Libertar Acesso", descricao: "Remover móveis, caixas perto quadro (1m raio livre)", icon: "🚪" },
 { titulo: "Carregar Dispositivos", descricao: "Telemóveis, tablets, portáteis (sem luz 3-8h)", icon: "🔋" },
 { titulo: "Preparar Lanterna", descricao: "Lanterna ou velas (trabalho pode ir até noite)", icon: "🔦" },
 { titulo: "Avisar Vizinhos", descricao: "Se partilham contador, avisar corte luz", icon: "👥" },
 { titulo: "Guardar Alimentos", descricao: "Frigorífico desligado: não abrir porta (mantém frio 4h)", icon: "🧊" },
 { titulo: "Desligar Equipamentos", descricao: "Computadores, TVs, electrodomésticos sensíveis", icon: "💻" },
 { titulo: "Ter Água Disponível", descricao: "Garrafas água para eletricista (trabalho físico)", icon: "💧" },
 { titulo: "Documentos Prontos", descricao: "Certificado antigo (se tiver), planta eléctrica", icon: "📄" }
 ].map((item, index) => (
 <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6B35]">
 <div className="flex items-start gap-4">
 <div className="text-4xl">{item.icon}</div>
 <div className="flex-1">
 <h3 className="text-lg font-bold text-gray-900 mb-2">{item.titulo}</h3>
 <p className="text-gray-600 text-sm">{item.descricao}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16 bg-white">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perguntas Frequentes - Tempo Trocar Quadro
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white">
 <div className="container mx-auto px-4 text-center">
 <Clock className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Trocar Quadro Elétrico? Feito em 1 Dia
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Instalação completa 3-8h com certificação elétrica incluída.
 Marcação: começamos de manhã, terminamos tarde.
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
