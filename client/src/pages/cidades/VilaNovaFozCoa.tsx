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
export default function VilaNovaFozCoa() {
 useEffect(() => {
 document.title = "Eletricista Vila Nova Foz Côa 24h | 932 321 892";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Eletricista em Vila Nova de Foz Côa, Património UNESCO. Instalações para museus, quintas do Douro e turismo cultural. certificação elétrica. Sem compromisso.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-vila-nova-foz-coa');
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-fozcoa';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Electrician",
 "name": "Eletricista Profissional Vila Nova de Foz Côa",
 "description": "Eletricista profissional em Vila Nova de Foz Côa. Gravuras rupestres UNESCO, museus e quintas.",
 "address": getCityAddress('vila-nova-foz-coa'),
 "geo": { "@type": "GeoCoordinates", "latitude": "41.0833", "longitude": "-7.1333" },
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
 const existingSchema = document.getElementById('schema-fozcoa');
 if (existingSchema) existingSchema.remove();
 };
 }, []);
 const cidadesProximas = getCidadesProximas('vila-nova-foz-coa');
 const faqs = [
 {
 question: "Quanto tempo demora a chegar a Vila Nova de Foz Côa?",
 answer: "Chegamos a Vila Nova de Foz Côa em aproximadamente 45-55 minutos desde Macedo de Cavaleiros, percorrendo cerca de 55km."
 },
 {
 question: "Fazem instalações para o Museu do Côa e espaços culturais?",
 answer: "Sim, temos experiência em instalações para museus e centros interpretativos: iluminação técnica, sistemas de segurança, climatização e quadros de emergência."
 },
 {
 question: "Qual o custo de deslocação a Vila Nova de Foz Côa?",
 answer: "A deslocação é de 65€ (Zona 6). Chegamos em aproximadamente 50-60 minutos. Inclui todo o concelho."
 }];
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
 <div className="container text-center text-white">
 <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ VILA NOVA DE FOZ CÔA - GRAVURAS UNESCO</span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Vila Nova de Foz Côa</h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Servimos Vila Nova de Foz Côa, terra das gravuras rupestres Património Mundial UNESCO. Instalações para museus, quintas do Douro e turismo cultural.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
 <Phone className="w-6 h-6" />932 321 892
 </a>
 <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá,%20preciso%20de%20um%20eletricista%20em%20VilaNovaFozCoa`} className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Vila Nova de Foz Côa</h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Zap, title: "Espaços Culturais", desc: "Iluminação técnica para museus, galerias e centros interpretativos" },
 { icon: Shield, title: "Quintas do Douro", desc: "Instalações para adegas, caves e produção vinícola do vale do Côa" },
 { icon: CheckCircle, title: "Turismo Cultural", desc: "Sistemas elétricos para hotéis, pousadas e alojamento turístico" },
 { icon: Zap, title: "certificação elétrica", desc: "Certificação para imóveis, comércio e espaços públicos" },
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
 <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Vila Nova de Foz Côa</h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Vila Nova de Foz Côa?</h2>
 <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos museus, quintas e habitações em todo o concelho.</p>
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />932 321 892
 </a>
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Vila Nova de Foz Côa"
 cidades={cidadesProximas}
 serviceType="eletricista"
 />
 
 <RelatedCities currentCity="Vila Nova de Foz Côa" currentCitySlug="eletricista-vila-nova-foz-coa" />
 </main>
 <Footer />
 </div>
 );
}