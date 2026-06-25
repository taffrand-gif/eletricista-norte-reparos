import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useEffect } from 'react';
const faqItems = [
 { question: "O que é a certificação elétrica?", answer: "A é a entidade que certifica as instalações elétricas em Portugal. O certificado de conformidade atesta que a instalação elétrica cumpre as normas de segurança e é obrigatório para novos contratos de eletricidade." },
 { question: "Quando preciso de certificação elétrica?", answer: "Precisa de certificação para: novo contrato de eletricidade, aumento de potência, mudança de titular, venda de imóvel, obras de remodelação elétrica, e seguros de habitação." },
 { question: "Quanto tempo demora o processo de certificação?", answer: "Após a inspeção e eventuais correções, o processo demora 3-5 dias úteis. Se a instalação estiver conforme, pode ser mais rápido. Tratamos de toda a burocracia." }
];
export default function CertificacaoEletrica() {
 useEffect(() => {
 document.title = "Certificação Elétrica em Trás-os-Montes | Eletricista Certificado";
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
 meta.setAttribute('content', 'Certificação elétrica em Trás-os-Montes. Inspeção, correção e emissão de certificado. Eletricista certificado. Ligue +351 932 321 892.');
 }, []);
 const serviceSchema = {
 "@context": "https://schema.org", "@type": "Service",
 "name": "Certificação Elétrica ", "provider": { "@type": "Electrician", "name": "", "telephone": ACTIVE_CONFIG.phone },
 "areaServed": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 41.4393, "longitude": -6.9603 }, "geoRadius": "100000" },
 "description": "Certificação elétrica profissional em Trás-os-Montes. Inspeção, correção e emissão de certificado de conformidade."
 };
 return (
 <>
 <Header />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org", "@type": "FAQPage",
 "mainEntity": faqItems.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } }))
 }) }} />
 <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-20 px-4">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificação Elétrica em Trás-os-Montes</h1>
 <p className="text-xl mb-8 max-w-2xl mx-auto">Inspeção, correção e emissão de certificado de conformidade elétrica. Processo rápido e sem complicações.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-orange-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 Ligar Agora</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Quando Precisa de Certificação?</h2>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { title: "Novo Contrato", desc: "Obrigatório para ativar novo contrato de eletricidade com qualquer fornecedor.", icon: "📄" },
 { title: "Venda de Imóvel", desc: "Certificado necessário para escritura e transferência de propriedade.", icon: "🏠" },
 { title: "Aumento de Potência", desc: "Necessário quando quer aumentar a potência contratada da sua instalação.", icon: "⚡" },
 { title: "Remodelação", desc: "Após obras que alterem a instalação elétrica é obrigatória nova certificação.", icon: "🔨" },
 { title: "Seguro Habitação", desc: "Muitas seguradoras exigem certificado elétrico válido para cobertura.", icon: "🛡️" },
 { title: "Mudança de Titular", desc: "Ao mudar o nome no contrato de eletricidade pode ser exigido certificado.", icon: "👤" }
 ].map((item, i) => (
 <div key={i} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow text-center">
 <span className="text-4xl mb-3 block">{item.icon}</span>
 <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
 <p className="text-gray-600 text-sm">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">O Nosso Processo</h2>
 <div className="grid md:grid-cols-4 gap-6">
 {[
 { step: "1", title: "Contacto", desc: "Ligue ou envie mensagem para agendar inspeção" },
 { step: "2", title: "Inspeção", desc: "Verificamos toda a instalação elétrica no local" },
 { step: "3", title: "Correção", desc: "Se necessário, corrigimos as não-conformidades" },
 { step: "4", title: "Certificado", desc: "Emissão do Orçamento por escrito oficial" }
 ].map((item, i) => (
 <div key={i} className="text-center p-4">
 <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">{item.step}</div>
 <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
 <p className="text-sm text-gray-600">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Preços Indicativos</h2>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { service: "Inspeção + certificado", price: "Desde €150" },
 { service: "Correção + certificado", price: "Desde €300" },
 { service: "Instalação nova + certificado", price: "Desde €500" }
 ].map((item, i) => (
 <div key={i} className="p-6 bg-orange-50 rounded-xl text-center">
 <h3 className="font-bold text-gray-900 mb-2">{item.service}</h3>
 <p className="text-2xl font-bold text-orange-600">{item.price}</p>
 </div>
 ))}
 </div>
 <p className="text-center text-gray-500 mt-6 text-sm">* Preços indicativos. Orçamento final após inspeção.</p>
 </div>
 </section>
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Perguntas Frequentes</h2>
 <div className="space-y-4">
 {faqItems.map((item, i) => (
 <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
 <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
 <p className="text-gray-600">{item.answer}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Precisa de Certificação Elétrica?</h2>
 <p className="text-xl mb-8">Tratamos de tudo. Inspeção, correção e Orçamento por escrito.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href={`tel:${ACTIVE_CONFIG.phone}`} className="bg-white text-orange-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors">📞 {ACTIVE_CONFIG.phone}</a>
 <a href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`} className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">💬 WhatsApp</a>
 </div>
 </div>
 </section>
 <section className="py-12 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Também servimos:</h3>
 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
 {[
 { name: "Trás-os-Montes", href: "/eletricista-macedo-cavaleiros" },
 { name: "Bragança", href: "/eletricista-braganca" },
 { name: "Chaves", href: "/eletricista-chaves" },
 { name: "Torre de Moncorvo", href: "/eletricista-torre-moncorvo" },
 { name: "Vinhais", href: "/eletricista-vinhais" }
 ].map((city, i) => (
 <a key={i} href={city.href} className="p-3 bg-gray-50 rounded-lg text-center text-orange-600 hover:bg-orange-50 font-medium transition-colors">{city.name}</a>
 ))}
 </div>
 </div>
 </section>
 <Footer />
 </>
 );
}
