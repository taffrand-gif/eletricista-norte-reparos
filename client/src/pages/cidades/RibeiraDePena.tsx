import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CidadesProximas from '@/components/CidadesProximas';
import Footer from '@/components/Footer';
import RelatedCities from '@/components/RelatedCities';
import FAQSection from '@/components/FAQSection';
import { businessInfo, getCityAddress } from '@/../../shared/napConfig';
import { getCidadesProximas } from '@/data/cidadesProximas';
import { useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Zap, CheckCircle } from 'lucide-react';

export default function RibeiraDePena() {
 useEffect(() => {
 document.title = "Eletricista Ribeira de Pena 24h | 932 321 892";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Eletricista em Ribeira de Pena. Instalações para turismo rural, casas junto à barragem e habitações de montanha. Veículo 4x4. Orçamento gratuito.');

 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-ribeira-de-pena');

 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-ribeirapena';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Electrician",
 "name": "Eletricista Profissional Ribeira de Pena",
 "description": "Eletricista profissional em Ribeira de Pena. Especialista em turismo rural e habitações de montanha.",
 "address": getCityAddress('ribeira-pena'),
 "geo": { "@type": "GeoCoordinates", "latitude": "41.5167", "longitude": "-7.8000" },
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
 const existingSchema = document.getElementById('schema-ribeirapena');
 if (existingSchema) existingSchema.remove();
 };
 }, []);

 const cidadesProximas = getCidadesProximas('ribeira-pena');

 const faqs = [
 {
 question: "Quanto tempo demora a chegar a Ribeira de Pena?",
 answer: "Chegamos a Ribeira de Pena em aproximadamente 1h20 desde Macedo de Cavaleiros, percorrendo cerca de 95km. Temos veículo 4x4 para acessos de montanha."
 },
 {
 question: "Fazem instalações para casas junto à barragem?",
 answer: "Sim, instalamos sistemas elétricos para casas de férias e turismo rural junto à barragem, incluindo proteção contra humidade e sistemas de emergência."
 },
 {
 question: "Qual o custo de deslocação a Ribeira de Pena?",
 answer: "A deslocação é de 65€ (Zona 6), sob marcação prévia. Estamos a cerca de 85km de Macedo de Cavaleiros. Inclui todo o concelho."
 }];

 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
 <div className="container text-center text-white">
 <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ RIBEIRA DE PENA - BARRAGEM E NATUREZA</span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Ribeira de Pena</h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos todo o concelho de Ribeira de Pena, incluindo as zonas junto à barragem. Instalações para turismo rural, casas de montanha e explorações agrícolas.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
 <Phone className="w-6 h-6" />932 321 892
 </a>
 <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá,%20preciso%20de%20um%20eletricista%20em%20RibeiraDePena`} className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
 </div>
 </div>
 </section>

 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Ribeira de Pena</h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Zap, title: "Turismo Rural", desc: "Instalações para casas de campo, alojamento local e hotéis rurais" },
 { icon: Shield, title: "Casas de Montanha", desc: "Aquecimento elétrico, proteção contra raios e instalações robustas" },
 { icon: CheckCircle, title: "Painéis Solares", desc: "Sistemas fotovoltaicos para autoconsumo em zonas remotas" },
 { icon: Zap, title: "Urgências 24h", desc: "Assistência elétrica urgente com veículo 4x4 para acessos difíceis" },
 ].map((service, index) => (
 <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
 <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
 <service.icon className="w-6 h-6 text-white" />
 </div>
 <div>
 <h3 className="text-lg font-bold mb-1">{service.title}</h3>
 <p className="text-gray-600">{service.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16">
 <div className="container max-w-4xl">
 <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Ribeira de Pena</h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>

 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Ribeira de Pena?</h2>
 <p className="text-xl mb-8 opacity-90">Ligue agora. Chegamos a qualquer ponto do concelho.</p>
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />932 321 892
 </a>
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Ribeira de Pena"
 cidades={cidadesProximas}
 serviceType="eletricista"
 />

 

 <RelatedCities currentCity="Ribeira de Pena" currentCitySlug="eletricista-ribeira-de-pena" />
 </main>
 <Footer />
 </div>
 );
}