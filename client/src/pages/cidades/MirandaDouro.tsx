// SEO optimized page for "Eletricista Miranda do Douro"
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { businessInfo, getCityAddress } from '@/../../shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import { Phone, Zap, Shield, CheckCircle } from 'lucide-react';
export default function MirandaDouro() {
 useEffect(() => {
 document.title = "Eletricista Miranda do Douro ⚡ 24h | 932 321 892";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Sem eletricidade em Miranda do Douro? Estamos aí hoje. Arranjo urgente, orçamento sem compromisso. Ligue: 932 321 892');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-miranda-douro');
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-miranda';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Electrician",
 "name": "Eletricista Profissional Miranda do Douro",
 "description": "Eletricista profissional em Miranda do Douro. Serviço 24h, urgências elétricas.",
 "address": getCityAddress('miranda-douro'),
 "geo": { "@type": "GeoCoordinates", "latitude": "41.4833", "longitude": "-6.2667" },
 "telephone": businessInfo.phone,
 "openingHours": "Mo-Su 00:00-23:59",
 "priceRange": "€€"
 });
 document.head.appendChild(schemaScript);
 // FAQ Schema
 const faqSchema = document.createElement('script');
 faqSchema.type = 'application/ld+json';
 faqSchema.setAttribute('data-faq-schema', 'true');
 faqSchema.text = JSON.stringify({
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
 });
 document.head.appendChild(faqSchema);
 return () => {
 const existingSchema = document.getElementById('schema-miranda');
 if (existingSchema) existingSchema.remove();
 };
 }, []);
 const cidadesProximas = getCidadesProximas('miranda-douro');
 const faqs = [
 { question: "Quanto tempo demora a chegar a Miranda do Douro?", answer: "Chegamos a Miranda do Douro em aproximadamente 45-60 minutos. Cobrimos todo o concelho incluindo Sendim e Duas Igrejas." },
 {
 question: "Qual o custo de deslocação a Miranda do Douro?",
 answer: "Confirmamos a deslocação por telefone. Cobrimos todo o conselho.",
 },
 { question: "Falam mirandês?", answer: "Entendemos mirandês! Muitos dos nossos clientes na Terra de Miranda preferem falar na sua língua." }
 ];
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
 <div className="container text-center text-white">
 <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ MIRANDA DO DOURO - TERRA DE MIRANDA</span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Miranda do Douro</h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos toda a Terra de Miranda. De Sendim a Duas Igrejas, de Palaçoulo a Picote. Urgências 24h.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg"><Phone className="w-6 h-6" />{businessInfo.phoneFormatted}</a>
 <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Miranda%20do%20Douro`} className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Miranda do Douro</h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Zap, title: "Urgências Elétricas 24h", desc: "Apagões, curto-circuitos, disjuntores a disparar" },
 { icon: Shield, title: "Casas de Aldeia", desc: "Reabilitação elétrica de casas tradicionais mirandesas" },
 { icon: CheckCircle, title: "Turismo Rural", desc: "Instalações para alojamento local e casas de férias" },
 { icon: Zap, title: "certificação elétrica", desc: "Obrigatória para arrendamento turístico" },
 ].map((service, index) => (
 <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
 <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><service.icon className="w-6 h-6 text-white" /></div>
 <div><h3 className="text-lg font-bold mb-1">{service.title}</h3><p className="text-gray-600">{service.desc}</p></div>
 </div>
 ))}
 </div>
 </div>
 </section>
 <section className="py-16 bg-orange-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-8">Freguesias que Servimos</h2>
 <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
 {["Miranda do Douro", "Sendim", "Duas Igrejas", "Palaçoulo", "Picote", "Constantim", "Cicouro", "Genísio", "Ifanes", "Malhadas", "Paradela", "Póvoa", "São Martinho de Angueira", "Silva", "Especiosa", "Vila Chã de Braciosa"].map((zona) => (
 <span key={zona} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">{zona}</span>
 ))}
 </div>
 </div>
 </section>
 <section className="py-16"><div className="container max-w-4xl"><h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Miranda do Douro</h2><FAQSection faqs={faqs} /></div></section>
 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Miranda do Douro?</h2>
 <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos toda a Terra de Miranda.</p>
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg"><Phone className="w-6 h-6" />{businessInfo.phoneFormatted}</a>
 </div>
 </section>
 {/* Related Cities - Maillage interno SEO */}
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Miranda do Douro"
 cidades={cidadesProximas}
 serviceType="eletricista"
 />
 
 <RelatedCities 
 currentCity="Miranda do Douro" 
 currentCitySlug="eletricista-mirandadouro" 
 />
 </main>
 <Footer />
 </div>
 );
}
