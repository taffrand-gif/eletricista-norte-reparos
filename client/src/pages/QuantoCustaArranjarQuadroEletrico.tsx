// Page SEO optimisée: "Quanto Custa Arranjar Quadro Elétrico" - Intention commerciale
// Recherche fréquente: "quanto custa arranjar quadro elétrico", "preço quadro elétrico", "substituir quadro preço"
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, Euro, CheckCircle, AlertTriangle, Clock, Zap } from 'lucide-react';
export default function QuantoCustaArranjarQuadroEletrico() {
 const { config } = useSite();
 const faqs = [
 {
 question: "Quanto custa substituir quadro elétrico completo?",
 answer: "Quadro elétrico completo: 370-650€ para quadro 8-12 circuitos (depende tamanho casa). Inclui: quadro novo, disjuntores, diferencial, instalação, certificação elétrica. T1/T2: 370-450€, T3/T4: 450-650€. Orçamento grátis: 932 321 892"
 },
 {
 question: "Quanto custa substituir um disjuntor?",
 answer: "Substituir disjuntor simples: 60-100€. Substituir diferencial: 100-150€. Inclui deslocação, disjuntor novo, instalação, teste e certificação. Urgente 24h disponível."
 },
 {
 question: "Quando devo substituir quadro elétrico?",
 answer: "Substitua se: quadro com fusíveis (>30 anos), disjuntores disparam frequentemente, sem diferencial (obrigatório), cheiro queimado, marcas pretas, quadro pequeno para consumo atual, não tem certificação elétrica."
 },
 {
 question: "Quadro elétrico precisa certificação?",
 answer: "SIM. Toda instalação elétrica em Portugal precisa certificação elétrica (Decreto-Lei 226/2005). Sem certificação = ilegal, seguro não cobre, não pode vender casa. Eletricista certificado emite certificado."
 }
 ];
 const precos = [
 {
 servico: "Substituir Disjuntor Simples",
 preco: "60-100€",
 tempo: "1-2h",
 descricao: "Substituir disjuntor avariado (10A, 16A, 20A, 25A, 32A)",
 inclui: ["Disjuntor novo", "Instalação", "Teste", "Certificação"]
 },
 {
 servico: "Substituir Diferencial",
 preco: "100-150€",
 tempo: "1-2h",
 descricao: "Substituir diferencial 30mA avariado (proteção choque)",
 inclui: ["Diferencial novo 30mA", "Instalação", "Teste sensibilidade", "Certificação"]
 },
 {
 servico: "Adicionar Circuito Novo",
 preco: "80-150€",
 tempo: "2-3h",
 descricao: "Adicionar circuito novo ao quadro existente (tomadas, luzes)",
 inclui: ["Disjuntor novo", "Cablagem até 10m", "Instalação", "Certificação"]
 },
 {
 servico: "Quadro Elétrico T1/T2",
 preco: "370-450€",
 tempo: "3-5h",
 descricao: "Quadro completo para apartamento pequeno (6-8 circuitos)",
 inclui: ["Quadro 8 módulos", "Diferencial 40A", "6-8 disjuntores", "Instalação", "certificação elétrica"]
 },
 {
 servico: "Quadro Elétrico T3/T4",
 preco: "450-650€",
 tempo: "4-6h",
 descricao: "Quadro completo para apartamento médio (10-12 circuitos)",
 inclui: ["Quadro 12 módulos", "Diferencial 63A", "10-12 disjuntores", "Instalação", "certificação elétrica"]
 },
 {
 servico: "Quadro Elétrico Moradia",
 preco: "650-900€",
 tempo: "5-8h",
 descricao: "Quadro completo para moradia (14-18 circuitos)",
 inclui: ["Quadro 18 módulos", "2 Diferenciais", "14-18 disjuntores", "Instalação", "certificação elétrica"]
 }
 ];
 const sinaisSubstituir = [
 {
 sinal: "Quadro com Fusíveis",
 descricao: "Quadro antigo com fusíveis cerâmicos (>30 anos). Obsoleto, perigoso, sem proteção adequada.",
 urgencia: "ALTA",
 icon: AlertTriangle
 },
 {
 sinal: "Disjuntores Disparam Frequentemente",
 descricao: "Disjuntores saltam constantemente. Indica sobrecarga, curto-circuito ou disjuntores velhos.",
 urgencia: "ALTA",
 icon: Zap
 },
 {
 sinal: "Sem Diferencial",
 descricao: "Quadro sem diferencial 30mA (obrigatório desde 1980). Risco choque elétrico fatal.",
 urgencia: "CRÍTICA",
 icon: AlertTriangle
 },
 {
 sinal: "Cheiro a Queimado",
 descricao: "Cheiro queimado no quadro. Indica sobreaquecimento, ligações soltas. PERIGO INCÊNDIO.",
 urgencia: "CRÍTICA",
 icon: AlertTriangle
 },
 {
 sinal: "Marcas Pretas/Queimadas",
 descricao: "Marcas pretas em disjuntores ou quadro. Sinal de arco elétrico, sobreaquecimento.",
 urgencia: "ALTA",
 icon: AlertTriangle
 },
 {
 sinal: "Quadro Pequeno",
 descricao: "Quadro cheio, sem espaço para novos circuitos. Não suporta consumo atual.",
 urgencia: "MÉDIA",
 icon: CheckCircle
 }
 ];
 return (
 <>
 <Helmet>
 <title>Quanto Custa Arranjar Quadro Elétrico? Preços 2026 | 932 321 892</title>
 <meta name="description" content="Quanto custa arranjar quadro elétrico? Preços 2026: substituir disjuntor 60-100€, quadro completo 300-800€. certificação elétrica incluída. Orçamento grátis: 932 321 892" />
 </Helmet>
 <Header />
 <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
 {/* Hero */}
 <section className="bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-6">
 <Euro className="w-5 h-5" />
 PREÇOS TRANSPARENTES 2026
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Quanto Custa Arranjar Quadro Elétrico?
 </h1>
 <p className="text-xl mb-8">
 Preços claros e honestos: 60-800€ (depende serviço).
 certificação elétrica incluída. Orçamento gratuito sem compromisso.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#FF6B35] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Orçamento Grátis: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Preciso orçamento para quadro elétrico`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
 >
 💬 WhatsApp Orçamento
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Tabela de Preços */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">
 💰 Tabela de Preços - Quadro Elétrico 2026
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Preços incluem: deslocação, material, instalação, certificação elétrica.
 Orçamento final após avaliação no local.
 </p>
 <div className="max-w-5xl mx-auto space-y-6">
 {precos.map((item, index) => (
 <div key={index} className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-200">
 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.servico}</h3>
 <p className="text-gray-600 mb-3">{item.descricao}</p>
 <div className="flex flex-wrap gap-2">
 {item.inclui.map((inc, i) => (
 <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
 <CheckCircle className="w-4 h-4" />
 {inc}
 </span>
 ))}
 </div>
 </div>
 <div className="flex flex-col sm:flex-row lg:flex-col gap-4 items-start sm:items-center lg:items-end">
 <div className="text-center lg:text-right">
 <div className="text-sm text-gray-500 mb-1">Preço</div>
 <div className="text-3xl font-bold text-[#FF6B35]">{item.preco}</div>
 </div>
 <div className="text-center lg:text-right">
 <div className="text-sm text-gray-500 mb-1">Tempo</div>
 <div className="text-lg font-semibold text-gray-700">{item.tempo}</div>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 <div className="mt-8 text-center">
 <p className="text-gray-600 mb-4">
 ✅ Orçamento gratuito sem compromisso<br />
 ✅ certificação elétrica incluída (obrigatória)<br />
 ✅ Garantia 2 anos<br />
 ✅ Atendimento urgente 24h disponível
 </p>
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
 >
 <Phone className="w-6 h-6" />
 Pedir Orçamento: {config.phone}
 </a>
 </div>
 </div>
 </section>
 {/* Sinais para Substituir */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">
 ⚠️ Sinais que Precisa Substituir Quadro Elétrico
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Se tem algum destes sinais, chame eletricista urgente
 </p>
 <div className="max-w-4xl mx-auto space-y-4">
 {sinaisSubstituir.map((item, index) => (
 <div key={index} className={`p-6 rounded-xl shadow-md border-l-4 ${
 item.urgencia === 'CRÍTICA' ? 'bg-red-50 border-red-600' :
 item.urgencia === 'ALTA' ? 'bg-orange-50 border-orange-600' :
 'bg-yellow-50 border-yellow-600'
 }`}>
 <div className="flex items-start gap-4">
 <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
 item.urgencia === 'CRÍTICA' ? 'bg-red-600' :
 item.urgencia === 'ALTA' ? 'bg-orange-600' :
 'bg-yellow-600'
 }`}>
 <item.icon className="w-6 h-6 text-white" />
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-3 mb-2">
 <h3 className="text-xl font-bold text-gray-900">{item.sinal}</h3>
 <span className={`px-3 py-1 rounded-full text-xs font-bold ${
 item.urgencia === 'CRÍTICA' ? 'bg-red-600 text-white' :
 item.urgencia === 'ALTA' ? 'bg-orange-600 text-white' :
 'bg-yellow-600 text-white'
 }`}>
 {item.urgencia}
 </span>
 </div>
 <p className="text-gray-700">{item.descricao}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* O Que Está Incluído */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 ✅ O Que Está Incluído no Preço
 </h2>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
 {[
 "Deslocação gratuita em Trás-os-Montes",
 "Avaliação e diagnóstico completo",
 "Material certificado (quadro, disjuntores, diferencial)",
 "Instalação profissional",
 "Teste de todos os circuitos",
 "certificação elétrica (obrigatória)",
 "Garantia 2 anos",
 "Limpeza após intervenção"
 ].map((item, index) => (
 <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
 <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
 <span className="text-gray-700">{item}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perguntas Frequentes - Quadro Elétrico
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white">
 <div className="container mx-auto px-4 text-center">
 <Clock className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Precisa Arranjar Quadro Elétrico?
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Orçamento gratuito sem compromisso. certificação elétrica incluída.
 Atendimento urgente 24h.
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
