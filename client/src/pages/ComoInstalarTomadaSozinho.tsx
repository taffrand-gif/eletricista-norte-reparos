// Page SEO optimisée: "Como Instalar Tomada Sozinho" - Intention DIY/informational
// Recherche fréquente: "como instalar tomada sozinho", "instalar tomada seguro", "posso instalar tomada"
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, AlertTriangle, CheckCircle, XCircle, Zap, ShieldAlert } from 'lucide-react';
export default function ComoInstalarTomadaSozinho() {
 const { config } = useSite();
 const faqs = [
 {
 question: "Posso instalar tomada sozinho em Portugal?",
 answer: "NÃO. É ILEGAL instalar tomadas sem certificação de eletricista. Decreto-Lei 226/2005 exige certificação elétrica para trabalhos elétricos. Risco de choque elétrico fatal, incêndio, invalidar seguro casa. Multa até 3740€."
 },
 {
 question: "Quanto custa eletricista para instalar tomada?",
 answer: "Instalar tomada simples: 40-80€ (inclui deslocação, instalação, material, certificação). Instalar tomada com cablagem nova: 80-150€. Preço inclui segurança, legalidade e garantia. Orçamento grátis: 932 321 892"
 },
 {
 question: "É perigoso instalar tomada sem ser eletricista?",
 answer: "SIM, MUITO PERIGOSO. Riscos: choque elétrico fatal (230V), incêndio por ligação errada, curto-circuito, danos aparelhos, seguro não cobre acidentes DIY. Eletricidade mata. Não arrisque."
 },
 {
 question: "Posso trocar tomada partida sozinho?",
 answer: "NÃO. Mesmo trocar tomada partida requer eletricista certificado em Portugal. Parece simples mas envolve: desligar disjuntor correto, verificar ausência tensão, ligação correta fios (fase, neutro, terra). Erro = risco fatal."
 }
 ];
 const riscos = [
 {
 risco: "Choque Elétrico Fatal",
 descricao: "230V podem matar. Corrente atravessa coração e causa paragem cardíaca. Mesmo com disjuntor desligado, pode haver tensão residual.",
 gravidade: "FATAL",
 icon: Zap
 },
 {
 risco: "Incêndio Doméstico",
 descricao: "Ligação errada causa curto-circuito, aquecimento excessivo, faísca. Fios mal ligados são causa #1 de incêndios elétricos.",
 gravidade: "GRAVE",
 icon: AlertTriangle
 },
 {
 risco: "Seguro Não Cobre",
 descricao: "Seguro casa não cobre danos causados por trabalhos elétricos ilegais (sem certificação). Perde cobertura total.",
 gravidade: "GRAVE",
 icon: ShieldAlert
 },
 {
 risco: "Multa até 3740€",
 descricao: "Trabalhos elétricos sem certificação são crime. Inspeção ou acidente = multa pesada + responsabilidade criminal.",
 gravidade: "GRAVE",
 icon: XCircle
 },
 {
 risco: "Danos em Aparelhos",
 descricao: "Ligação errada (fase/neutro trocados) danifica aparelhos eletrónicos: TV, computador, frigorífico. Prejuízo milhares €.",
 gravidade: "MÉDIA",
 icon: XCircle
 }
 ];
 const porqueNao = [
 {
 razao: "É ILEGAL em Portugal",
 explicacao: "Decreto-Lei 226/2005: apenas eletricistas certificados podem fazer instalações elétricas. Trabalho DIY = crime.",
 icon: XCircle
 },
 {
 razao: "Risco de Morte",
 explicacao: "230V matam. Não é como 12V de carro. Corrente elétrica atravessa corpo e para coração. Dezenas morrem por ano.",
 icon: Zap
 },
 {
 razao: "Seguro Não Cobre",
 explicacao: "Acidente ou incêndio causado por instalação ilegal = seguro recusa pagar. Fica com prejuízo total.",
 icon: ShieldAlert
 },
 {
 razao: "Parece Simples, Não É",
 explicacao: "3 fios parecem simples. Mas: qual é fase? Neutro? Terra? Ligação errada = morte ou incêndio. Eletricista sabe.",
 icon: AlertTriangle
 },
 {
 razao: "Certificação Obrigatória",
 explicacao: "Toda instalação elétrica precisa Trabalho garantido por escrito. Sem certificado = ilegal, não pode vender casa, seguro inválido.",
 icon: CheckCircle
 }
 ];
 const oqueFazEletricista = [
 "Verifica quadro elétrico e disjuntores",
 "Desliga circuito correto com segurança",
 "Testa ausência de tensão com equipamento certificado",
 "Identifica corretamente fase, neutro e terra",
 "Liga fios na ordem correta (segurança)",
 "Verifica ligação à terra (proteção choque)",
 "Testa tomada com equipamento profissional",
 "Emite Trabalho garantido por escrito (obrigatório)",
 "Garante conformidade com normas portuguesas",
 "Dá garantia do trabalho (2 anos)"
 ];
 return (
 <>
 <Helmet>
 <title>Como Instalar Tomada Sozinho? (Guia Segurança) | 932 321 892</title>
 <meta name="description" content="Posso instalar tomada sozinho? ATENÇÃO: é ilegal e perigoso sem certificação. Risco choque elétrico e incêndio. Eletricista certificado: 932 321 892" />
 </Helmet>
 <Header />
 <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
 {/* Hero Alerta */}
 <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold mb-6 animate-pulse">
 <ShieldAlert className="w-5 h-5" />
 PERIGO + ILEGAL
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Como Instalar Tomada Sozinho? <span className="text-yellow-300">NÃO FAÇA!</span>
 </h1>
 <p className="text-xl mb-8">
 É ILEGAL e PERIGOSO instalar tomadas sem certificação de eletricista.
 Risco de morte, incêndio e multa até 3740€. Seguro não cobre.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 Eletricista Certificado: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=Preciso instalar tomada. Quanto custa?`}
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
 {/* Riscos */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4 text-red-700">
 ⚠️ Riscos de Instalar Tomada Sozinho
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Não vale a pena arriscar. Eletricista custa 40-80€. Vida não tem preço.
 </p>
 <div className="max-w-5xl mx-auto space-y-4">
 {riscos.map((item, index) => (
 <div key={index} className={`p-6 rounded-xl shadow-lg border-l-4 ${
 item.gravidade === 'FATAL' ? 'bg-red-50 border-red-600' :
 item.gravidade === 'GRAVE' ? 'bg-orange-50 border-orange-600' :
 'bg-yellow-50 border-yellow-600'
 }`}>
 <div className="flex items-start gap-4">
 <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
 item.gravidade === 'FATAL' ? 'bg-red-600' :
 item.gravidade === 'GRAVE' ? 'bg-orange-600' :
 'bg-yellow-600'
 }`}>
 <item.icon className="w-6 h-6 text-white" />
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-3 mb-2">
 <h3 className="text-xl font-bold text-gray-900">{item.risco}</h3>
 <span className={`px-3 py-1 rounded-full text-xs font-bold ${
 item.gravidade === 'FATAL' ? 'bg-red-600 text-white' :
 item.gravidade === 'GRAVE' ? 'bg-orange-600 text-white' :
 'bg-yellow-600 text-white'
 }`}>
 {item.gravidade}
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
 {/* Porque NÃO Fazer */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 🚫 5 Razões para NÃO Instalar Tomada Sozinho
 </h2>
 <div className="max-w-4xl mx-auto space-y-6">
 {porqueNao.map((item, index) => (
 <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
 <div className="flex items-start gap-4">
 <item.icon className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
 <div>
 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.razao}</h3>
 <p className="text-gray-700">{item.explicacao}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 {/* O Que Faz Eletricista */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">
 ✅ O Que Faz Eletricista Certificado (40-80€)
 </h2>
 <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
 Não é só "ligar 3 fios". É segurança, legalidade e garantia.
 </p>
 <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
 {oqueFazEletricista.map((item, index) => (
 <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
 <span className="text-gray-700">{item}</span>
 </div>
 ))}
 </div>
 <div className="mt-8 text-center">
 <p className="text-gray-600 mb-4">
 ✅ Preço: 40-80€ (instalação simples)<br />
 ✅ Inclui: deslocação, material, certificação elétrica<br />
 ✅ Garantia: 2 anos<br />
 ✅ Legal e seguro
 </p>
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
 >
 <Phone className="w-6 h-6" />
 Orçamento Grátis: {config.phone}
 </a>
 </div>
 </div>
 </section>
 {/* Legalidade */}
 <section className="py-16 bg-red-50">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border-2 border-red-300">
 <div className="flex items-start gap-4">
 <ShieldAlert className="w-12 h-12 text-red-600 flex-shrink-0" />
 <div>
 <h2 className="text-2xl font-bold mb-4 text-red-700">
 ⚖️ Legalidade em Portugal
 </h2>
 <div className="space-y-3 text-gray-700">
 <p>
 <strong>Decreto-Lei 226/2005:</strong> Apenas eletricistas com certificação elétrica podem fazer instalações elétricas em Portugal.
 </p>
 <p>
 <strong>Multa:</strong> Trabalhos elétricos ilegais = multa até 3740€ (pessoa singular) ou 44.890€ (empresa).
 </p>
 <p>
 <strong>Seguro:</strong> Seguro casa NÃO cobre danos causados por instalações ilegais. Acidente = prejuízo total.
 </p>
 <p>
 <strong>Venda casa:</strong> Sem certificação elétrica, não pode vender casa legalmente.
 </p>
 <p className="font-bold text-red-700">
 Não arrisque. Chame eletricista certificado: {config.phone}
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ */}
 <section className="py-16 bg-white">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perguntas Frequentes - Instalar Tomada
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white">
 <div className="container mx-auto px-4 text-center">
 <Zap className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Precisa Instalar Tomada? Chame Eletricista Certificado
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
40-80€ por tomada. Inclui certificação elétrica, garantia escrita. Legal, seguro e rápido (1-2h).
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
