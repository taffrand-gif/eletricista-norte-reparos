import { useRoute } from 'wouter';
import { SERVICES_STAFF_SEEKERS } from '@/../../shared/cityServiceMatrix';
import { CITIES, ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
export default function ServiceHub() {
 const [, params] = useRoute('/:service');
 if (!params) return null;
 const service = SERVICES_STAFF_SEEKERS.find(s => s.slug === params.service);
 if (!service) return null;
 const accentColor = '#FF6B35';
 const mainCities = CITIES.filter(c => !c.parentCity);
 useEffect(() => {
 document.title = `${service.name} em Trás-os-Montes | ${ACTIVE_CONFIG.businessName}`;
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute('name', 'description');
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', `${service.name} em toda a região de Trás-os-Montes. Serviço profissional 24h em ${mainCities.length}+ cidades. Sem compromisso.`);
 }, [service.name]);
 return (
 <>
 <Header />
 {/* Hero */}
 <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)` }}>
 <div className="max-w-6xl mx-auto text-center text-white">
 <div className="text-5xl mb-4">{service.icon}</div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 {service.name} em Trás-os-Montes
 </h1>
 <p className="text-xl mb-8 max-w-3xl mx-auto">
 {service.description}. Cobertura em {CITIES.length}+ localidades da região.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 style={{ color: accentColor }}
 >
 📞 Ligar Agora
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}`}
 className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </section>
 {/* Main Cities Grid */}
 <section className="py-16 px-4 bg-white">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 {service.name} nas Principais Cidades
 </h2>
 <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
 {mainCities.map(city => (
 <a
 key={city.slug}
 href={`/${service.slug}-${city.slug}`}
 className="bg-white border-2 border-gray-200 hover:border-current p-6 rounded-xl hover:shadow-lg transition-all"
 style={{ '--hover-color': accentColor } as React.CSSProperties}
 >
 <h3 className="font-bold text-lg mb-2 text-gray-900">{city.name}</h3>
 <p className="text-gray-600 text-sm mb-3">{service.name}</p>
 <div className="flex items-center justify-between">
 <span className="text-sm font-semibold" style={{ color: accentColor }}>
 Desde {service.basePrice}€
 </span>
 <span className="text-gray-400">→</span>
 </div>
 </a>
 ))}
 </div>
 </div>
 </section>
 {/* Pricing */}
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-8 text-gray-900">Preços Indicativos</h2>
 <div className="bg-white rounded-xl p-8 shadow-lg">
 <div className="flex justify-between items-center mb-6">
 <span className="text-xl font-semibold text-gray-700">{service.name}</span>
 <span className="text-4xl font-bold" style={{ color: accentColor }}>
 Desde {service.basePrice}€
 </span>
 </div>
 <p className="text-gray-600 mb-6">
 Preço base para {service.name.toLowerCase()}. Orçamento final após diagnóstico no local.
 </p>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Olá! Preciso de ${service.name}. Podem fazer orçamento?`)}`}
 className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
 >
 💬 Pedir Orçamento Gratuito
 </a>
 </div>
 </div>
 </section>
 {/* CTA */}
 <section className="py-16 px-4 text-white" style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)` }}>
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">
 Precisa de {service.name}?
 </h2>
 <p className="text-xl mb-8">
 Atendemos toda a região de Trás-os-Montes. Contacte-nos agora.
 </p>
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="inline-block bg-white hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 style={{ color: accentColor }}
 >
 📞 {ACTIVE_CONFIG.phone}
 </a>
 </div>
 </section>
 <Footer />
 </>
 );
}
