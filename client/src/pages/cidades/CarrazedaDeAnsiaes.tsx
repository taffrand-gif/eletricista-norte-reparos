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
export default function CarrazedaDeAnsiaes() {
 useEffect(() => {
 document.title = "Eletricista Carrazeda Ansiães 24h | 932 321 892";
 
 let metaDescription = document.querySelector('meta[name="description"]');
 if (!metaDescription) {
 metaDescription = document.createElement('meta');
 metaDescription.setAttribute('name', 'description');
 document.head.appendChild(metaDescription);
 }
 metaDescription.setAttribute('content', 'Eletricista em Carrazeda de Ansiães. Instalações elétricas para quintas do Douro, produção de Vinho do Porto. Quadros elétricos, iluminação. Sem compromisso.');
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', 'https://eletricista-norte-reparos.pt/eletricista-carrazeda-de-ansiaes');
 const schemaScript = document.createElement('script');
 schemaScript.type = 'application/ld+json';
 schemaScript.id = 'schema-carrazeda';
 schemaScript.text = JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Electrician",
 "name": "Eletricista Profissional Carrazeda de Ansiães",
 "description": "Eletricista profissional em Carrazeda de Ansiães. Especialista em quintas do Douro e Vinho do Porto.",
 "address": getCityAddress('carrazeda-de-ansiaes'),
 "geo": { "@type": "GeoCoordinates", "latitude": "41.2333", "longitude": "-7.3000" },
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
 const existingSchema = document.getElementById('schema-carrazeda');
 if (existingSchema) existingSchema.remove();
 };
 }, []);
 const cidadesProximas = getCidadesProximas('carrazeda-ansiaes');
 const faqs = [
 {
 question: "Quanto tempo demora a chegar a Carrazeda de Ansiães?",
    answer: "Chegamos a Carrazeda de Ansiaes em aproximadamente 30-40 minutos a partir de Trás-os-Montes. Cobrimos todo o conselho.",
  },
 {
 question: "Trabalham nas quintas do Douro em Carrazeda?",
    answer: "Confirmamos a deslocação por telefone. Cobrimos todo o conselho.",
  },
 {
 question: "Qual o custo de deslocação a Carrazeda de Ansiães?",
    answer: "Confirmamos a deslocação por telefone. Cobrimos todo o conselho.",
  },
];

 return (
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-grow">
 <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images-optimized/hero/hero-electrician-portugal.jpg')` }}>
 <div className="container text-center text-white">
 <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">⚡ CARRAZEDA DE ANSIÃES - QUINTAS DO DOURO</span>
 <h1 className="text-4xl md:text-6xl font-black mb-6">Eletricista em Carrazeda de Ansiães</h1>
 <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Especialistas em instalações elétricas para quintas do Douro e produção de Vinho do Porto. Servimos todo o concelho de Carrazeda de Ansiães.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">
 <Phone className="w-6 h-6" />932 321 892
 </a>
 <a href={`https://wa.me/${businessInfo.whatsapp}?text=Olá,%20preciso%20de%20um%20eletricista%20em%20CarrazedaDeAnsiaes`} className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 <section className="py-16 bg-gray-50">
 <div className="container">
 <h2 className="text-3xl font-black text-center mb-12">Serviços Elétricos em Carrazeda de Ansiães</h2>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {[
 { icon: Zap, title: "Quintas Vinícolas", desc: "Instalações completas para adegas, caves e produção de Vinho do Porto" },
 { icon: Shield, title: "Turismo Rural", desc: "Sistemas elétricos para alojamento local e casas de campo" },
 { icon: CheckCircle, title: "Sistemas de Irrigação", desc: "Quadros elétricos para bombas e sistemas de rega nas vinhas" },
 { icon: Zap, title: "Iluminação Exterior", desc: "Iluminação de quintas, caminhos e espaços de eventos" },
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
 <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes - Carrazeda de Ansiães</h2>
 <FAQSection faqs={faqs} />
 </div>
 </section>
 <section className="py-16 bg-orange-500 text-white">
 <div className="container text-center">
 <h2 className="text-3xl font-black mb-4">Precisa de Eletricista em Carrazeda de Ansiães?</h2>
 <p className="text-xl mb-8 opacity-90">Ligue agora. Servimos todas as quintas e aldeias do concelho.</p>
 <a href={`tel:${businessInfo.phone}`} className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
 <Phone className="w-6 h-6" />932 321 892
 </a>
 </div>
 </section>
 {/* Cidades Próximas - Internal Linking */}
 <CidadesProximas
 currentCity="Carrazeda de Ansiães"
 cidades={cidadesProximas}
 serviceType="eletricista"
 />
 
 <RelatedCities currentCity="Carrazeda de Ansiães" currentCitySlug="eletricista-carrazeda-de-ansiaes" />
 </main>
 <Footer />
 </div>
 );
}