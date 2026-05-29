// Page SEO optimisée: "Tomada Faísca" - Intention urgence/panique
// Recherche fréquente: "tomada faísca", "tomada faz faísca", "tomada faísca perigo"

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { useSite } from '@/contexts/SiteContext';
import { Phone, AlertTriangle, Zap, Shield, Clock } from 'lucide-react';

export default function TomadaFaisca() {
 const { config } = useSite();


 const faqs = [
 {
 question: "É perigoso usar tomada que faz faísca?",
 answer: "SIM, é MUITO PERIGOSO. Tomada que faz faísca pode causar incêndio, choque elétrico ou danificar aparelhos. Desligue o disjuntor dessa tomada IMEDIATAMENTE e não use até ser arranjada por eletricista certificado."
 },
 {
 question: "Porque é que a tomada faz faísca?",
 answer: "Principais causas: fios soltos ou mal ligados, tomada velha/desgastada, sobrecarga elétrica, humidade, curto-circuito interno. Todas estas situações são perigosas e requerem intervenção urgente."
 },
 {
 question: "Posso arranjar tomada que faz faísca sozinho?",
 answer: "NÃO. Trabalhar com eletricidade é perigoso e ilegal sem certificação. Tomada com faísca indica problema grave que pode causar incêndio. Chame eletricista certificado urgente."
 },
 {
 question: "Quanto custa arranjar tomada que faz faísca?",
 answer: "Depende da causa: substituir tomada simples 25-40€, arranjar fios soltos 30-50€, substituir cablagem 80-150€. Inclui deslocação, mão-de-obra e material. Orçamento gratuito: 932 321 892"
 }
 ];

 return (
 <>
 <Helmet>
 <title>Tomada Faz Faísca? ⚡ PERIGO! Eletricista Urgente | 932 321 892</title>
 <meta name="description" content="Tomada faz faísca? PERIGO DE INCÊNDIO! Não use mais. Eletricista urgente 24h em Trás-os-Montes. Ligue: 932 321 892" />
 </Helmet>
 <Header />

 <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
 {/* Hero Urgente */}
 <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold mb-6 animate-pulse">
 <AlertTriangle className="w-5 h-5" />
 PERIGO DE INCÊNDIO
 </div>

 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Tomada Faz Faísca? <span className="text-yellow-300">NÃO USE!</span>
 </h1>

 <p className="text-xl mb-8">
 Tomada que faz faísca é PERIGO GRAVE de incêndio e choque elétrico.
 Desligue o disjuntor AGORA e ligue para eletricista urgente.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg flex items-center justify-center gap-2"
 >
 <Phone className="w-6 h-6" />
 URGENTE: {config.phone}
 </a>
 <a
 href={`https://wa.me/${config.whatsapp}?text=URGENTE: Tomada faz faísca`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
 >
 💬 WhatsApp Urgente
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* O Que Fazer AGORA */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
 ⚠️ O Que Fazer AGORA (Passos Urgentes)
 </h2>
 <div className="max-w-3xl mx-auto space-y-6">
 <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
 <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
 <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
 DESLIGUE O DISJUNTOR
 </h3>
 <p className="text-gray-700 ml-10">
 Vá ao quadro elétrico e desligue o disjuntor dessa tomada IMEDIATAMENTE.
 Se não sabe qual é, desligue o disjuntor geral.
 </p>
 </div>

 <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
 <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
 <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
 NÃO USE A TOMADA
 </h3>
 <p className="text-gray-700 ml-10">
 Não tente usar a tomada novamente. Não toque na tomada. Não tente arranjar sozinho.
 Risco de choque elétrico ou incêndio.
 </p>
 </div>

 <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
 <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
 <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
 LIGUE ELETRICISTA URGENTE
 </h3>
 <p className="text-gray-700 ml-10">
 Ligue agora: <a href={`tel:${config.phone.replace(/\s/g, "")}`} className="font-bold text-green-600 underline">{config.phone}</a>
 <br />Atendemos 24h. Chegamos em 30-45 minutos.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Perigos */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perigos de Tomada que Faz Faísca
 </h2>
 <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
 <div className="bg-white p-6 rounded-xl shadow-lg text-center">
 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Zap className="w-8 h-8 text-red-600" />
 </div>
 <h3 className="text-xl font-bold mb-2">Incêndio</h3>
 <p className="text-gray-600">
 Faísca pode incendiar materiais próximos. Risco GRAVE de incêndio doméstico.
 </p>
 </div>

 <div className="bg-white p-6 rounded-xl shadow-lg text-center">
 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <AlertTriangle className="w-8 h-8 text-orange-600" />
 </div>
 <h3 className="text-xl font-bold mb-2">Choque Elétrico</h3>
 <p className="text-gray-600">
 Fios expostos ou soltos podem causar choque elétrico fatal.
 </p>
 </div>

 <div className="bg-white p-6 rounded-xl shadow-lg text-center">
 <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Shield className="w-8 h-8 text-yellow-600" />
 </div>
 <h3 className="text-xl font-bold mb-2">Danos Aparelhos</h3>
 <p className="text-gray-600">
 Picos de tensão podem danificar TV, computador, frigorífico, etc.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Causas */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 Causas Comuns de Tomada que Faz Faísca
 </h2>
 <div className="max-w-3xl mx-auto space-y-4">
 {[
 { causa: "Fios Soltos ou Mal Ligados", desc: "Conexão fraca causa arco elétrico (faísca). Muito perigoso." },
 { causa: "Tomada Velha/Desgastada", desc: "Contactos internos gastos não seguram bem a ficha. Substituir urgente." },
 { causa: "Sobrecarga Elétrica", desc: "Demasiados aparelhos na mesma tomada. Aquece e faz faísca." },
 { causa: "Humidade", desc: "Água ou humidade na tomada causa curto-circuito. Risco de choque." },
 { causa: "Curto-Circuito Interno", desc: "Fios tocam-se dentro da tomada. Perigo de incêndio imediato." }
 ].map((item, index) => (
 <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
 <h3 className="text-lg font-bold mb-2">{item.causa}</h3>
 <p className="text-gray-600">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">
 Perguntas Frequentes - Tomada Faísca
 </h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>

 {/* CTA Final */}
 <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
 <div className="container mx-auto px-4 text-center">
 <Clock className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-3xl font-bold mb-4">
 Tomada Faz Faísca? Ligue AGORA
 </h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Atendimento 24h. Chegamos em 30-45 minutos. Orçamento gratuito.
 </p>
 <a
 href={`tel:${config.phone.replace(/\s/g, "")}`}
 className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-xl transition-colors inline-flex items-center gap-2 shadow-lg"
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
