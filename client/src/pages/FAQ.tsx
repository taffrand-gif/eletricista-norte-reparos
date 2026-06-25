// Page FAQ dédiée -  (Eletricista)
// 20 questions en portugais PT-PT avec Schema.org FAQPage JSON-LD
// Design accordéon avec useState pour open/close
// Utilise données partilhées de faqData.ts
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { useSite } from '@/contexts/SiteContext';
import { ChevronDown, ChevronUp, Phone, MessageCircle, Zap, Shield } from 'lucide-react';
import { Link } from 'wouter';
import { electricFaqs, plumberFaqs } from '@/data/faqData';
export default function FAQPage() {
 const { config } = useSite();
 const [openIndex, setOpenIndex] = useState<number | null>(null);
 const toggleAccordion = (index: number) => {
 setOpenIndex(openIndex === index ? null : index);
 };
 // Utilise toutes les 20 questions des FAQs partilhées
 const isPlumber = config.id === 'norte-reparos';
 const faqs = isPlumber ? plumberFaqs : electricFaqs;
 // Schema.org FAQPage JSON-LD
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 };
 return (
 <>
 <SEOHead 
 title="Perguntas Frequentes |  | Eletricista Trás-os-Montes"
 description="Respostas às 20 perguntas mais comuns sobre serviços elétricos: preços, urgências 24h, iluminação, zonas servidas. Eletricista em Bragança."
 canonical="/faq"
 />
 
 {/* Schema.org JSON-LD */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />
 <Header />
 
 <main className="min-h-screen bg-gray-50">
 {/* Hero Section */}
 <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="flex justify-center mb-6">
 <Zap size={48} className="text-yellow-300" />
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Perguntas Frequentes sobre <span className="text-yellow-300">Serviços Elétricos</span>
 </h1>
 <p className="text-xl mb-8">
 Encontre respostas para as 20 dúvidas mais comuns sobre os nossos serviços de eletricista em Trás-os-Montes
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors"
 >
 <Phone size={20} />
 Ligar: {config.phone}
 </a>
 <a
 href={`https://wa.me/351932321892`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
 >
 <MessageCircle size={20} />
 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 {/* Safety Warning */}
 <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
 <div className="container mx-auto px-4">
 <div className="flex items-start">
 <Shield className="text-yellow-600 mt-1 mr-3 flex-shrink-0" size={24} />
 <div>
 <p className="font-bold text-yellow-800">⚠️ Segurança Elétrica Primeiro!</p>
 <p className="text-yellow-700">
 Nunca tente arranjar problemas elétricos sozinho. Risco de eletrocussão e incêndio. 
 Contacte sempre um eletricista com experiência para qualquer intervenção.
 </p>
 </div>
 </div>
 </div>
 </div>
 {/* FAQ Accordion */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <div className="mb-12 text-center">
 <h2 className="text-3xl font-bold text-gray-900 mb-4">
 20 Perguntas sobre Serviços Elétricos
 </h2>
 <p className="text-gray-600">
 Clique em cada pergunta para ver a resposta detalhada
 </p>
 </div>
 <div className="space-y-4">
 {faqs.map((faq, index) => (
 <div
 key={index}
 className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
 >
 <button
 onClick={() => toggleAccordion(index)}
 className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
 >
 <span className="text-lg font-semibold text-gray-900 pr-4">
 <span className="text-orange-600 mr-2">{index + 1}.</span>
 {faq.question}
 </span>
 <span className="flex-shrink-0">
 {openIndex === index ? (
 <ChevronUp className="text-orange-600" size={24} />
 ) : (
 <ChevronDown className="text-gray-400" size={24} />
 )}
 </span>
 </button>
 
 {openIndex === index && (
 <div className="px-6 pb-6">
 <div className="pt-4 border-t border-gray-100">
 <p className="text-gray-700 leading-relaxed">
 {faq.answer}
 </p>
 </div>
 </div>
 )}
 </div>
 ))}
 </div>
 {/* Internal Links Section */}
 <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">
 Mais Informações Úteis
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <h4 className="font-bold text-gray-800 mb-3">📍 Serviços por Cidade</h4>
 <ul className="space-y-2">
 <li><Link href="/eletricista-vila-real" className="text-orange-600 hover:underline">Eletricista Vila Real</Link></li>
 <li><Link href="/eletricista-braganca" className="text-orange-600 hover:underline">Eletricista Bragança</Link></li>
 <li><Link href="/eletricista-mirandela" className="text-orange-600 hover:underline">Eletricista Mirandela</Link></li>
 <li><Link href="/eletricista-macedo-cavaleiros" className="text-orange-600 hover:underline">Eletricista Trás-os-Montes</Link></li>
 <li><Link href="/eletricista-chaves" className="text-orange-600 hover:underline">Eletricista Chaves</Link></li>
 </ul>
 </div>
 <div>
 <h4 className="font-bold text-gray-800 mb-3">⚡ Nossos Serviços</h4>
 <ul className="space-y-2">
 <li><Link href="/servicos" className="text-orange-600 hover:underline">Todos os Serviços</Link></li>
 <li><Link href="/blog/custo-eletricista-tras-os-montes-precos" className="text-orange-600 hover:underline">Preços Eletricista</Link></li>
 <li><Link href="/blog" className="text-orange-600 hover:underline">Blog com Dicas</Link></li>
 </ul>
 </div>
 </div>
 </div>
 {/* CTA Section */}
 <div className="mt-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl shadow-xl p-8 text-center">
 <div className="flex justify-center mb-4">
 <Zap size={32} className="text-yellow-300" />
 </div>
 <h3 className="text-2xl font-bold mb-4">
 Ainda tem dúvidas? Fale connosco!
 </h3>
 <p className="mb-6 text-orange-100">
 Estamos disponíveis Atendimento 24h/7d para esclarecer todas as suas questões sobre eletricidade
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors"
 >
 <Phone size={20} />
 Ligar Agora: {config.phone}
 </a>
 <a
 href={`https://wa.me/351932321892`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
 >
 <MessageCircle size={20} />
 WhatsApp Urgente
 </a>
 </div>
 <p className="mt-6 text-sm text-orange-200">
 Resposta mediante contacto garantida durante o dia • Urgências Atendimento 24h/7d • eletricista com experiência
 </p>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 );
}
