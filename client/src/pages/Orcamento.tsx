import { ACTIVE_CONFIG } from "@shared/serviceConfig";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";
export default function Orcamento() {
 const { businessName, phone } = ACTIVE_CONFIG;
 
 useSEO({
 title: `Pedir Orçamento Gratuito | ${businessName}`,
 description: `Peça um sem compromisso e sem compromisso. Resposta mediante contacto e preços competitivos. Contacte-nos: ${phone}`,
 keywords: "sem compromisso, pedir orçamento, orçamento sem compromisso, preços competitivos"});
 return (
 <div className="min-h-screen bg-gray-50">
 {/* Hero Section */}
 <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
 <div className="container">
 <div className="max-w-3xl mx-auto text-center">
 <h1 className="text-4xl sm:text-5xl font-bold mb-4">
 Pedir Orçamento Gratuito
 </h1>
 <p className="text-xl sm:text-2xl mb-6">
 Resposta mediante contacto e sem compromisso
 </p>
 <p className="text-lg opacity-90">
 Preencha o formulário abaixo e receberá um orçamento personalizado em poucas horas.
 </p>
 </div>
 </div>
 </section>
 {/* Formulário */}
 <section className="py-12">
 <div className="container">
 <QuoteForm />
 </div>
 </section>
 {/* Avantages */}
 <section className="py-12 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Porquê Escolher-nos?</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="text-center">
 <div className="text-5xl mb-4">⚡</div>
 <h3 className="text-xl font-bold mb-2">Resposta mediante contacto</h3>
 <p className="text-gray-600">
 Orçamento enviado em poucas horas
 </p>
 </div>
 <div className="text-center">
 <div className="text-5xl mb-4">💰</div>
 <h3 className="text-xl font-bold mb-2">Sem Compromisso</h3>
 <p className="text-gray-600">
 Sem compromisso e transparente
 </p>
 </div>
 <div className="text-center">
 <div className="text-5xl mb-4">👨‍🔧</div>
 <h3 className="text-xl font-bold mb-2">Profissionais</h3>
 <p className="text-gray-600">
 Equipa qualificada e certificada
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* CTA Contact */}
 <section className="py-12 bg-gray-100">
 <div className="container">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Prefere Falar Connosco?</h2>
 <p className="text-xl text-gray-600 mb-8">
 Estamos disponíveis Atendimento 24h/7d, 7 dias por semana
 </p>
 <a
 href={`tel:${phone}`}
 className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
 >
 📞 Ligar Agora: {phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')}
 </a>
 </div>
 </div>
 </section>
 </div>
 );
}
