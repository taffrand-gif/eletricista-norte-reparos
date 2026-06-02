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
export default function Alijo() {
 useEffect(() => {
 document.title = "Eletricista Alijó 24h | 932 321 892";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Eletricista em Alijó, coração do Douro Vinhateiro. Instalações para quintas, adegas e turismo rural. Quadros elétricos, iluminação. Sem compromisso.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-alijo');
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-alijo';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Electrician",
 "name": "Eletricista Profissional Alijó",
 "description": "Eletricista profissional em Alijó. Especialista em quintas vinhateiras do Douro.",
 "address": getCityAddress('alijo'),
 "geo": { "@type": "GeoCoordinates", "latitude": "41.2833", "longitude": "-7.4667" },
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
 const existingSchema = document.getElementById('schema-alijo');
 if (existingSchema) existingSchema.remove();
 };
 }, []);
 const cidadesProximas = getCidadesProximas('alijo');
 const faqs = [
 {
 question: "Quanto tempo demora a chegar a Alijó?",
 answer: "Chegamos a Alijó em aproximadamente 50-60 minutos  
 },
 {
 question: "Trabalham nas quintas vinhateiras do Douro em Alijó?",
 answer: "Sim, temos ampla experiência em instalações para quintas do Douro: adegas de vinificação, caves de estágio, sistemas de irrigação por gotejamento e alojamento turístico."
 },
 {
 question: "Qual o custo de deslocação a Alijó?",
 answer: "A deslocação é de 55€ (Zona 5). Chegamos em aproximadamente 60-70 minutos. Inclui todo o concelho."
 }];
 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
 <div className="container text-center text-white">
 <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ ALIJÓ - CORAÇÃO DO DOURO VINHATEIRO</span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Alijó</h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Especialistas em instalações elétricas para quintas vinhateiras do Douro, adegas de Vinho do Porto e espaços de enoturismo em todo o concelho de Alijó.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
 <Phone className="w-6 h-6" />932 321 892
 </a>
 <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá,%20preciso%20de%20um%20eletricista%20em%20Alijo`} className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Alijó</h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Zap, title: "Quintas Vinhateiras", desc: "Instalações completas para adegas, caves e produção vinícola do Douro" },
 { icon: Shield, title: "Enoturismo", desc: "Iluminação, som e climatização para salas de provas e restaurantes" },
 { icon: CheckCircle, title: "Irrigação Elétrica", desc: "Quadros para sistemas de rega por gotejamento nas vinhas do Douro" },
 { icon: Zap, title: "Alojamento Turístico", desc: "Instalações elétricas para casas de turismo rural e hotéis de charme" },
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
 <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Alijó</h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Alijó?</h2>
 <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos todas as quintas e aldeias do Douro.</p>
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />932 321 892
 </a>
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Alijó"
 cidades={cidadesProximas}
 serviceType="eletricista"
 />
 
 <RelatedCities currentCity="Alijó" currentCitySlug="eletricista-alijo" />
 </main>
 <Footer />
 </div>
 );
}