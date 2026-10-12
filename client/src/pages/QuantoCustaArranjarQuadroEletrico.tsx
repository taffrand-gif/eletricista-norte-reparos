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
 answer: "Depende do número de circuitos, da dimensão da casa e do material. Mão de obra: 70 €/hora das 09h às 18h; 100 €/hora à noite, ao fim de semana e em feriados. Deslocação: 30 € ou 50 € conforme o horário. Valores TTC; qualquer hora iniciada é devida. O material é orçamentado à parte. Com descrição e fotos suficientes, damos uma estimativa indicativa à distância; o valor final fecha-se no local."
 },
 {
 question: "Quanto custa substituir um disjuntor?",
 answer: "Depende do tipo de disjuntor ou diferencial e do tempo de intervenção. Mão de obra: 70 €/hora das 09h às 18h; 100 €/hora à noite, ao fim de semana e em feriados. Deslocação: 30 € ou 50 € conforme o horário. Valores TTC; qualquer hora iniciada é devida. Urgência 24h disponível, com a tarifa de noite, fim de semana e feriados."
 },
 {
 question: "Quando devo substituir quadro elétrico?",
 answer: "Substitua se: quadro com fusíveis (>30 anos), disjuntores disparam frequentemente, sem diferencial (obrigatório), cheiro queimado, marcas pretas, quadro pequeno para consumo atual, não tem certificação elétrica."
 },
 {
 question: "Quadro elétrico precisa certificação?",
 answer: "Em muitas situações, sim. A Ficha eletrotécnica e os Termos de responsabilidade são emitidos a partir de 350 € TTC, sob orçamento conforme o caso."
 }
 ];
 const precos = [
 {
 servico: "Substituir Disjuntor Simples",
 preco: "Sob orçamento",
 tempo: "Conforme o caso",
 descricao: "Substituir disjuntor avariado (10A, 16A, 20A, 25A, 32A)",
 inclui: ["Disjuntor novo", "Instalação", "Teste", "Diagnóstico"]
 },
 {
 servico: "Substituir Diferencial",
 preco: "Sob orçamento",
 tempo: "Conforme o caso",
 descricao: "Substituir diferencial 30mA avariado (proteção choque)",
 inclui: ["Diferencial novo 30mA", "Instalação", "Teste sensibilidade", "Diagnóstico"]
 },
 {
 servico: "Adicionar Circuito Novo",
 preco: "Sob orçamento",
 tempo: "Conforme o caso",
 descricao: "Adicionar circuito novo ao quadro existente (tomadas, luzes)",
 inclui: ["Disjuntor novo", "Cablagem até 10m", "Instalação", "Diagnóstico"]
 },
 {
 servico: "Quadro Elétrico T1/T2",
 preco: "Sob orçamento",
 tempo: "Conforme o caso",
 descricao: "Quadro completo para apartamento pequeno (6-8 circuitos)",
 inclui: ["Quadro 8 módulos", "Diferencial 40A", "6-8 disjuntores", "Instalação", "diagnóstico elétrico"]
 },
 {
 servico: "Quadro Elétrico T3/T4",
 preco: "Sob orçamento",
 tempo: "Conforme o caso",
 descricao: "Quadro completo para apartamento médio (10-12 circuitos)",
 inclui: ["Quadro 12 módulos", "Diferencial 63A", "10-12 disjuntores", "Instalação", "diagnóstico elétrico"]
 },
 {
 servico: "Quadro Elétrico Moradia",
 preco: "Sob orçamento",
 tempo: "Conforme o caso",
 descricao: "Quadro completo para moradia (14-18 circuitos)",
 inclui: ["Quadro 18 módulos", "2 Diferenciais", "14-18 disjuntores", "Instalação", "diagnóstico elétrico"]
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
 <title>Quanto Custa Arranjar Quadro Elétrico? Como se calcula | 932 321 892</title>
 <meta name="description" content="Quanto custa arranjar um quadro elétrico? Mão de obra a 70 €/h (09h–18h) ou 100 €/h (noite, fim de semana, feriados) mais deslocação de 30 € ou 50 €, TTC. Estimativa indicativa à distância com fotos. Contacto: 932 321 892" />
 </Helmet>
 <Header />
 <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
 {/* Hero */}
 <section className="bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-6">
 <Euro className="w-5 h-5" />
 FATURAÇÃO À HORA
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Quanto Custa Arranjar Quadro Elétrico?
 </h1>
 <p className="text-xl mb-8">
 Faturação à hora, deslocação de 30 € ou 50 € e estimativa indicativa à distância com fotos.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-[#FF6B35] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Orçamento por Escrito: {config.phone}
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
 💰 Como se calcula o preço — Quadro Elétrico
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Mão de obra: 70 €/hora das 09h às 18h; 100 €/hora à noite, ao fim de semana e em feriados. Deslocação: 30 € ou 50 € conforme o horário. Valores TTC; qualquer hora iniciada é devida. O material é orçamentado à parte. Com descrição e fotos suficientes, damos uma estimativa indicativa à distância; o valor final fecha-se no local.
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
 ✅ Valor confirmado antes de iniciar<br />
 ✅ Hora iniciada é devida<br />
 ✅ Fatura com NIF<br />
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
 ✅ O Que Entra no Orçamento
 </h2>
 <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
 {[
 "Deslocação faturada (30 € ou 50 €)",
 "Avaliação e diagnóstico completo",
 "Material necessário, orçamentado à parte",
 "Instalação profissional",
 "Teste de todos os circuitos",
 "Ficha eletrotécnica / Termos de responsabilidade (a partir de 350 € TTC)",
 "Fatura com NIF",
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
 Estimativa indicativa à distância com fotos. Atendimento 24h com a tarifa de urgência fora do horário.
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
