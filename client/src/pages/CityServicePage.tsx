import { useRoute } from 'wouter';
import { getCityServiceData } from '@/../../shared/cityServiceMatrix';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedServices from '@/components/RelatedServices';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useEffect } from 'react';
export default function CityServicePage() {
 const [, params] = useRoute('/:service-:city');
 if (!params) return null;
 const pageData = getCityServiceData(params.service, params.city);
 if (!pageData) {
 return <NotFoundContent />;
 }
 const { city, service } = pageData;
 const isPlumber = ACTIVE_CONFIG.type === 'plomberie';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
 useEffect(() => {
 document.title = `${service.name} em ${city.name} | ${ACTIVE_CONFIG.businessName}`;
 // Meta description
 let meta = document.querySelector('meta[name="description"]');
 if (!meta) {
 meta = document.createElement('meta');
 meta.setAttribute('name', 'description');
 document.head.appendChild(meta);
 }
 meta.setAttribute('content', `${service.name} em ${city.name}. Serviço profissional 24h. Sem compromisso. Ligue ${ACTIVE_CONFIG.phone}`);
 // Canonical URL
 const canonicalUrl = `https://${ACTIVE_CONFIG.domain}/${params.service}-${params.city}`;
 let canonical = document.querySelector('link[rel="canonical"]');
 if (!canonical) {
 canonical = document.createElement('link');
 canonical.setAttribute('rel', 'canonical');
 document.head.appendChild(canonical);
 }
 canonical.setAttribute('href', canonicalUrl);
 }, [city.name, service.name, params.service, params.city]);
 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": isPlumber ? "Plumber" : "Electrician",
 "name": `${service.name} em ${city.name}`,
 "provider": {
 "@type": isPlumber ? "Plumber" : "Electrician",
 "name": ACTIVE_CONFIG.businessName,
 "telephone": ACTIVE_CONFIG.phone
 },
 "areaServed": {
 "@type": "City",
 "name": city.name
 },
 "priceRange": "€€",
 "description": `${service.description} em ${city.name}`
 };
 const faqItems = generateFAQs(service, city, isPlumber);
 // Breadcrumbs
 const breadcrumbItems = [
 { label: 'Home', href: '/' },
 { label: city.name, href: `/${params.city}` },
 { label: service.name }
 ];
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqItems.map(item => ({
 "@type": "Question",
 "name": item.question,
 "acceptedAnswer": { "@type": "Answer", "text": item.answer }
 }))
 }) }} />
 <Header />
 <Breadcrumbs items={breadcrumbItems} />
 {/* Hero Section */}
 <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)` }}>
 <div className="max-w-4xl mx-auto text-center text-white">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 {service.name} em {city.name}
 </h1>
 <p className="text-xl mb-8">
 {service.description}. Serviço profissional 24h/7d em {city.name}.
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
 {/* Pricing Section */}
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 Preços em {city.name}
 </h2>
 <div className="bg-gray-50 rounded-xl p-8 mb-8">
 <div className="flex justify-between items-center mb-4">
 <span className="text-lg font-semibold text-gray-700">{service.name}</span>
 <span className="text-3xl font-bold" style={{ color: accentColor }}>
 Desde {service.basePrice}€
 </span>
 </div>
 <p className="text-gray-600 mb-6">
 Preço base para {service.name.toLowerCase()} em {city.name}. Orçamento final após diagnóstico no local.
 Oferecemos também serviços de{' '}
 <a href={`/instalacao-eletrica-${params.city}`} className="text-blue-600 hover:underline">instalação elétrica</a>,{' '}
 <a href={`/quadro-eletrico-${params.city}`} className="text-blue-600 hover:underline">quadro elétrico</a> e{' '}
 <a href={`/certificacao-eletrica-${params.city}`} className="text-blue-600 hover:underline">certificação elétrica</a>.
 </p>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Olá! Preciso de ${service.name} em ${city.name}. Podem fazer orçamento?`)}`}
 className="block w-full text-center text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: '#25D366' }}
 >
 💬 Pedir Orçamento Gratuito
 </a>
 </div>
 </div>
 </section>
 {/* City-Specific Content */}
 {getCitySpecificContent(city.slug, service.slug) && (
 <>
 {/* About City Section */}
 {getCityAboutSection(city.slug) && (
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-gray-900">
 Sobre {city.name}
 </h2>
 <div className="prose prose-lg max-w-none text-gray-700">
 {getCityAboutSection(city.slug)}
 {/* Internal links contextuels */}
 <p className="mt-6">
 Servimos também as cidades próximas: {' '}
 <a href="/eletricista-braganca" className="text-blue-600 hover:underline">Bragança</a>,{' '}
 <a href="/eletricista-mirandela" className="text-blue-600 hover:underline">Mirandela</a>,{' '}
 <a href="/eletricista-macedo-de-cavaleiros" className="text-blue-600 hover:underline">Trás-os-Montes</a>.
 </p>
 </div>
 </div>
 </section>
 )}
 {/* Neighborhoods Section */}
 {getCityNeighborhoods(city.slug) && (
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-gray-900">
 Bairros e Zonas Servidas em {city.name}
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
 {getCityNeighborhoods(city.slug)?.map((neighborhood, i) => (
 <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
 <p className="text-gray-700 font-medium">{neighborhood}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 )}
 {/* Why Choose Us Section */}
 {getWhyChooseUs(city.slug, service.slug) && (
 <section className="py-16 px-4 bg-white">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-gray-900">
 Porquê Escolher-nos em {city.name}
 </h2>
 <div className="space-y-4">
 {getWhyChooseUs(city.slug, service.slug)?.map((reason, i) => (
 <div key={i} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
 <span className="text-3xl">{reason.icon}</span>
 <div>
 <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
 <p className="text-gray-600">{reason.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 )}
 {/* Local Testimonials */}
 {getCityTestimonials(city.slug) && (
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-gray-900">
 O Que Dizem os Nossos Clientes em {city.name}
 </h2>
 <div className="grid md:grid-cols-2 gap-6">
 {getCityTestimonials(city.slug)?.map((testimonial, i) => (
 <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
 <div className="flex items-center gap-1 mb-3">
 {[...Array(5)].map((_, j) => (
 <span key={j} className="text-yellow-400">⭐</span>
 ))}
 </div>
 <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
 <p className="text-gray-900 font-semibold">{testimonial.name}</p>
 <p className="text-gray-500 text-sm">{testimonial.location}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 )}
 </>
 )}
 {/* FAQ Section */}
 <section className="py-16 px-4 bg-gray-50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
 Perguntas Frequentes
 </h2>
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
 {/* CTA Section */}
 <section className="py-16 px-4 text-white" style={{ background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)` }}>
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">
 Precisa de {service.name} em {city.name}?
 </h2>
 <p className="text-xl mb-8">
 Contacte-nos agora. Sem compromisso e sem compromisso.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
 style={{ color: accentColor }}
 >
 📞 {ACTIVE_CONFIG.phone}
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
 {/* Related Services */}
 <RelatedServices currentService={service.slug} city={city.name} />
 <Footer />
 </>
 );
}
function generateFAQs(service: any, city: any, isPlumber: boolean) {
 const baseFAQs = [
 {
 question: `Quanto custa ${service.name.toLowerCase()} em ${city.name}?`,
 answer: `O preço base para ${service.name.toLowerCase()} em ${city.name} é desde ${service.basePrice}€. O orçamento final depende da complexidade do trabalho e materiais necessários. Fazemos sem compromisso no local.`
 },
 {
 question: `Atendem em ${city.name} ao fim de semana?`,
 answer: `Sim, estamos disponíveis Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados em ${city.name}. Para urgências, o tempo de resposta é de 30-90 minutos.`
 },
 {
 question: `Quanto tempo demora a chegar a ${city.name}?`,
 answer: `O tempo de resposta para ${city.name} é normalmente entre 30 a 90 minutos, dependendo da localização exata e disponibilidade. Para urgências, priorizamos sempre a rapidez.`
 }
 ];
 // Add city-specific FAQs
 const citySpecificFAQs = getCitySpecificFAQs(city.slug, service.slug);
 if (citySpecificFAQs.length > 0) {
 return [...baseFAQs, ...citySpecificFAQs];
 }
 return baseFAQs;
}
function getCitySpecificFAQs(citySlug: string, serviceSlug: string) {
 const faqData: Record<string, Record<string, any[]>> = {
 'mirandela': {
 'avarias-urgentes': [
 {
 question: 'Atendem nas aldeias de Mirandela como Fradizela ou Torre de Dona Chama?',
 answer: 'Sim, atendemos em todas as freguesias de Mirandela, incluindo Fradizela, Torre de Dona Chama, Cobro, Mascarenhas e todas as aldeias circundantes. O tempo de resposta pode variar entre 40-90 minutos dependendo da localização.'
 },
 {
 question: 'Têm experiência com instalações elétricas antigas no centro histórico de Mirandela?',
 answer: 'Sim, temos vasta experiência em edifícios antigos do centro histórico de Mirandela. Muitas casas têm fiação dos anos 60-70 que requer cuidados especiais. Fazemos diagnóstico completo e modernização conforme normas atuais.'
 }
 ]
 },
 'macedo-de-cavaleiros': {
 'avarias-urgentes': [
 {
 question: 'Atendem em Trás-os-Montes durante a noite?',
 answer: 'Sim, o nosso serviço de urgências em Trás-os-Montes está Atendimento 24h/7d/7d. Sabemos que avarias elétricas não escolhem hora, por isso garantimos resposta rápida mesmo de madrugada ou ao fim de semana.'
 },
 {
 question: 'Trabalham com instalações trifásicas em Trás-os-Montes?',
 answer: 'Sim, temos equipamento e certificação para trabalhar com instalações trifásicas, comuns em explorações agrícolas e pequenas indústrias na região de Trás-os-Montes. Fazemos manutenção preventiva e arranjos urgentes.'
 }
 ]
 }
 };
 return faqData[citySlug]?.[serviceSlug] || [];
}
function getCitySpecificContent(citySlug: string, serviceSlug: string) {
 const supportedCities = ['mirandela', 'macedo-de-cavaleiros'];
 const supportedServices = ['avarias-urgentes'];
 return supportedCities.includes(citySlug) && supportedServices.includes(serviceSlug);
}
function getCityAboutSection(citySlug: string) {
 const aboutData: Record<string, JSX.Element> = {
 'mirandela': (
 <>
 <p className="mb-4">
 Mirandela é uma cidade histórica situada no coração de Trás-os-Montes, conhecida pela sua famosa ponte romana sobre o rio Tua e pela rica tradição gastronómica, especialmente a alheira de Mirandela. Com uma população de cerca de 11.000 habitantes no centro urbano e mais de 23.000 no concelho, Mirandela combina o charme histórico com infraestruturas modernas.
 </p>
 <p className="mb-4">
 O centro histórico de Mirandela apresenta desafios únicos em termos de instalações elétricas. Muitos edifícios datam dos séculos XVIII e XIX, com sistemas elétricos instalados nos anos 60 e 70 que necessitam de modernização urgente. As casas tradicionais transmontanas, com paredes grossas de pedra e estruturas de madeira, requerem técnicas especializadas para instalação elétrica que respeitem o património arquitetónico.
 </p>
 <p>
 A nossa equipa conhece profundamente as especificidades de Mirandela, desde o centro histórico até às freguesias rurais como Fradizela, Torre de Dona Chama, Cobro e Mascarenhas. Trabalhamos regularmente em quintas agrícolas, explorações vitivinícolas e estabelecimentos comerciais da região, garantindo sempre conformidade com as normas e respeito pelas características únicas de cada edifício.
 </p>
 </>
 ),
 'macedo-de-cavaleiros': (
 <>
 <p className="mb-4">
 Trás-os-Montes é uma cidade vibrante no nordeste transmontano, capital do concelho com o mesmo nome e porta de entrada para a região do Parque Natural de Montesinho. Com cerca de 6.000 habitantes na cidade e 15.000 no concelho, Trás-os-Montes é conhecida pela sua Albufeira do Azibo, considerada uma das melhores praias fluviais de Portugal, e pela forte tradição agrícola e pecuária.
 </p>
 <p className="mb-4">
 A economia local baseia-se fortemente na agricultura, pecuária e pequena indústria, o que significa que muitas instalações elétricas na região são trifásicas e de maior complexidade. Explorações agrícolas, adegas, lagares de azeite e unidades de transformação alimentar requerem sistemas elétricos robustos e fiáveis. A nossa equipa tem experiência especializada em instalações industriais e agrícolas, garantindo segurança e eficiência energética.
 </p>
 <p>
 Conhecemos bem as particularidades de Trás-os-Montes e das suas aldeias circundantes. Desde o centro urbano até às zonas mais rurais, garantimos resposta rápida a qualquer emergência elétrica. Trabalhamos regularmente com bombas de água para rega, sistemas de refrigeração para armazéns agrícolas, e instalações elétricas em edifícios de turismo rural, sempre com certificação elétrica e cumprimento rigoroso das normas de segurança.
 </p>
 </>
 )
 };
 return aboutData[citySlug] || null;
}
function getCityNeighborhoods(citySlug: string) {
 const neighborhoodsData: Record<string, string[]> = {
 'mirandela': [
 'Centro Histórico',
 'Zona da Ponte Romana',
 'Bairro do Convento',
 'Zona Industrial',
 'São Salvador',
 'Fradizela',
 'Torre de Dona Chama',
 'Cobro',
 'Mascarenhas',
 'Múrias',
 'Passos',
 'Vale de Gouvinhas',
 'Cedães',
 'Carvalhais',
 'Alvites'
 ],
 'macedo-de-cavaleiros': [
 'Centro Urbano',
 'Zona da Albufeira',
 'Bairro da Estação',
 'Zona Industrial',
 'Morais',
 'Talhas',
 'Podence',
 'Sezulfe',
 'Lagoa',
 'Amendoeira',
 'Cortiços',
 'Ferreira',
 'Grijó',
 'Lombo',
 'Vilarinho do Monte'
 ]
 };
 return neighborhoodsData[citySlug] || null;
}
function getWhyChooseUs(citySlug: string, serviceSlug: string) {
 const reasonsData: Record<string, Record<string, any[]>> = {
 'mirandela': {
 'avarias-urgentes': [
 {
 icon: '🏛️',
 title: 'Especialistas em Edifícios Históricos',
 description: 'Experiência comprovada em instalações elétricas no centro histórico de Mirandela, respeitando a arquitetura tradicional transmontana e cumprindo todas as normas de segurança.'
 },
 {
 icon: '🚜',
 title: 'Conhecimento das Zonas Rurais',
 description: 'Atendemos todas as freguesias de Mirandela, incluindo Fradizela, Torre de Dona Chama, Cobro e aldeias circundantes. Experiência em instalações agrícolas e quintas.'
 },
 {
 icon: '⚡',
 title: 'Resposta Rápida 24h',
 description: 'Equipa local baseada em Mirandela com tempo de resposta de 30-60 minutos no centro urbano e 60-90 minutos nas freguesias rurais. Disponíveis todos os dias do ano.'
 },
 {
 icon: '📋',
 title: 'certificação elétrica Garantida',
 description: 'Todos os trabalhos incluem certificação elétrica obrigatória. Regularizamos instalações antigas e emitimos certificados para venda ou arrendamento de imóveis.'
 }
 ]
 },
 'macedo-de-cavaleiros': {
 'avarias-urgentes': [
 {
 icon: '🏭',
 title: 'Especialistas em Instalações Trifásicas',
 description: 'Experiência em instalações industriais e agrícolas com sistemas trifásicos. Trabalhamos com adegas, lagares, explorações pecuárias e unidades de transformação alimentar.'
 },
 {
 icon: '💧',
 title: 'Sistemas de Bombagem e Rega',
 description: 'Instalação e arranjo de quadros elétricos para bombas de água, sistemas de rega automática e equipamentos agrícolas. Conhecemos as necessidades da agricultura local.'
 },
 {
 icon: '🌙',
 title: 'Urgências 24h em Macedo',
 description: 'Equipa local disponível Atendimento 24h/7d, 7 dias por semana. Sabemos que avarias elétricas em explorações agrícolas não podem esperar. Resposta em 30-90 minutos.'
 },
 {
 icon: '🔒',
 title: 'Segurança e Conformidade',
 description: 'Todas as instalações com certificação elétrica. Inspeções de segurança, modernização de quadros antigos e conformidade com normas atuais para seguros e licenciamentos.'
 }
 ]
 }
 };
 return reasonsData[citySlug]?.[serviceSlug] || null;
}
function getCityTestimonials(citySlug: string) {
 // LOT 5 RÈGLE 72 : témoignages inventés supprimés. Section vide par défaut.
 // Espace réservé pour témoignages réels de clients (à venir).
 return null;
}
function NotFoundContent() {
 return (
 <div className="min-h-screen flex items-center justify-center">
 <div className="text-center">
 <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
 <a href="/" className="text-blue-600 hover:underline">Voltar à página inicial</a>
 </div>
 </div>
 );
}
