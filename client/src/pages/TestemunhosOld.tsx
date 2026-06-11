import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
interface Testimonial {
 name: string;
 city: string;
 rating: number;
 date: string;
 text: string;
 service: string;
}
export default function Testemunhos() {
 const config = ACTIVE_CONFIG;
 const [currentIndex, setCurrentIndex] = useState(0);
 
 const testimonials = getTestimonials(config.type);
 useSEO({
 title: `Testemunhos de Clientes | ${config.businessName}`,
 description: `Veja o que os nossos clientes dizem sobre os serviços de ${config.name.toLowerCase()}. Centenas de clientes satisfeitos em todo o distrito de Bragança.`,
 canonical: `https://${config.domain}/testemunhos`});
 const nextTestimonial = () => {
 setCurrentIndex((prev) => (prev + 1) % testimonials.length);
 };
 const prevTestimonial = () => {
 setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
 };
 const goToTestimonial = (index: number) => {
 setCurrentIndex(index);
 };
 const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);
 return (
 <>
 <Header />
{/* Hero Section */}
 <section className="bg-gradient-to-r from-red-50 to-red-100 py-16">
 <div className="container">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Testemunhos de Clientes
 </h1>
 <p className="text-xl text-gray-700 mb-8">
 Veja o que os nossos clientes dizem sobre os nossos serviços
 </p>
 
 {/* Rating Summary */}
 <div className="bg-white rounded-lg p-6 inline-block shadow-md">
 <div className="flex items-center gap-4">
 <div className="text-5xl font-bold text-red-600">{averageRating}</div>
 <div className="text-left">
 <div className="flex gap-1 mb-1">
 {[...Array(5)].map((_, i) => (
 <span key={i} className="text-yellow-400 text-2xl">★</span>
 ))}
 </div>
 <p className="text-gray-600">Baseado em {testimonials.length} avaliações</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Carousel Section */}
 <section className="py-16 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 {/* Carousel */}
 <div className="relative">
 {/* Main Testimonial Card */}
 <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
 {/* Stars */}
 <div className="flex gap-1 mb-4 justify-center">
 {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
 <span key={i} className="text-yellow-400 text-3xl">★</span>
 ))}
 </div>
 {/* Quote */}
 <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
 "{testimonials[currentIndex].text}"
 </blockquote>
 {/* Author Info */}
 <div className="text-center">
 <p className="font-bold text-lg text-gray-900">{testimonials[currentIndex].name}</p>
 <p className="text-gray-600">{testimonials[currentIndex].city}</p>
 <p className="text-sm text-gray-500 mt-2">
 {testimonials[currentIndex].service} • {testimonials[currentIndex].date}
 </p>
 </div>
 </div>
 {/* Navigation Arrows */}
 <button
 onClick={prevTestimonial}
 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors"
 aria-label="Testemunho anterior"
 >
 <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
 </svg>
 </button>
 <button
 onClick={nextTestimonial}
 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors"
 aria-label="Próximo testemunho"
 >
 <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
 </svg>
 </button>
 </div>
 {/* Dots Navigation */}
 <div className="flex justify-center gap-2 mt-8">
 {testimonials.map((_, index) => (
 <button
 key={index}
 onClick={() => goToTestimonial(index)}
 className={`w-3 h-3 rounded-full transition-colors ${
 index === currentIndex ? 'bg-red-600' : 'bg-gray-300 hover:bg-gray-400'
 }`}
 aria-label={`Ir para testemunho ${index + 1}`}
 />
 ))}
 </div>
 </div>
 </div>
 </section>
 {/* All Testimonials Grid */}
 <section className="py-16 bg-gray-50">
 <div className="container">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
 Todos os Testemunhos
 </h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {testimonials.map((testimonial, index) => (
 <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
 {/* Stars */}
 <div className="flex gap-1 mb-3">
 {[...Array(testimonial.rating)].map((_, i) => (
 <span key={i} className="text-yellow-400 text-xl">★</span>
 ))}
 </div>
 {/* Text */}
 <p className="text-gray-700 mb-4 leading-relaxed">
 "{testimonial.text}"
 </p>
 {/* Author */}
 <div className="border-t border-gray-200 pt-4">
 <p className="font-semibold text-gray-900">{testimonial.name}</p>
 <p className="text-sm text-gray-600">{testimonial.city}</p>
 <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 {/* CTA Section */}
 <section className="py-16 bg-white">
 <div className="container">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="text-3xl font-bold text-gray-900 mb-4">
 Junte-se aos nossos clientes satisfeitos
 </h2>
 <p className="text-xl text-gray-700 mb-8">
 Contacte-nos agora e experimente o mesmo serviço de excelência
 </p>
 <a
 href="/#contactos"
 className="bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-10 py-4 rounded-lg transition-colors inline-block"
 >
 Contacte-nos Agora
 </a>
 </div>
 </div>
 </section>
 <Footer />
 </>
 );
}
function getTestimonials(serviceType: 'plomberie' | 'electricite'): Testimonial[] {
 if (serviceType === 'plomberie') {
 return [
 {
 name: "Pedro Santos",
 city: "Vila Real",
 rating: 5,
 date: "Janeiro 2026",
 service: "Instalação de tomadas",
 text: "Serviço excelente! Instalaram várias tomadas novas na cozinha. Trabalho limpo, rápido e profissional. Muito satisfeito com o resultado!"
 },
 {
 name: "João Pereira",
 city: "Mirandela",
 rating: 5,
 date: "Dezembro 2025",
 service: "Arranjo de curto-circuito",
 text: "Serviço impecável. O eletricista foi muito atencioso, explicou o problema e resolveu tudo na hora. Preço justo e trabalho de qualidade. Recomendo!"
 },
 {
 name: "Ana Costa",
 city: "Trás-os-Montes",
 rating: 5,
 date: "Novembro 2025",
 service: "certificação elétrica",
 text: "Muito satisfeita com o serviço. Fizeram a certificação elétrica de forma rápida e profissional. Explicaram tudo sobre o processo. Equipa de confiança!"
 },
 {
 name: "Carlos Rodrigues",
 city: "Mogadouro",
 rating: 5,
 date: "Outubro 2025",
 service: "Substituição de quadro elétrico",
 text: "Rapidez e eficiência. Liguei de manhã e à tarde já estava resolvido. O técnico foi muito simpático e o preço foi honesto. Vou guardar o contacto!"
 },
 {
 name: "Teresa Fernandes",
 city: "Miranda do Douro",
 rating: 5,
 date: "Setembro 2025",
 service: "Desentupimento urgente",
 text: "Salvaram o meu fim de semana! A sanita entupiu na sexta à noite e eles vieram no sábado de manhã. Problema resolvido Atendimento prioritário. Muito obrigada!"
 },
 {
 name: "Manuel Santos",
 city: "Vila Flor",
 rating: 5,
 date: "Agosto 2025",
 service: "Instalação de torneiras",
 text: "Profissionais de primeira. Instalaram torneiras novas em toda a casa. Trabalho limpo, rápido e bem feito. Preço combinado sem surpresas. Recomendo vivamente!"
 },
 {
 name: "Isabel Alves",
 city: "Torre de Moncorvo",
 rating: 5,
 date: "Julho 2025",
 service: "Arranjo de caldeira",
 text: "Excelente atendimento. A caldeira avariou e fiquei sem água quente. Vieram no próprio dia e resolveram tudo. Técnico muito competente e educado."
 },
 {
 name: "Paulo Martins",
 city: "Vinhais",
 rating: 5,
 date: "Junho 2025",
 service: "Curto-circuito urgente",
 text: "Serviço de urgência impecável. Tive uma fuga grave e a equipa chegou rapidamente. Resolveram o problema e ainda deram conselhos para prevenir futuras fugas. Top!"
 },
 {
 name: "Luísa Gomes",
 city: "Carrazeda de Ansiães",
 rating: 5,
 date: "Maio 2025",
 service: "Instalação de casa de banho",
 text: "Fizeram a instalação completa da casa de banho nova. Trabalho perfeito, dentro do prazo e do orçamento. Equipa muito profissional. Estou muito satisfeita!"
 },
 ];
 } else {
 return [
 {
 name: "António Sousa",
 city: "Bragança",
 rating: 5,
 date: "Janeiro 2026",
 service: "Arranjo de curto-circuito",
 text: "Serviço de urgência excelente! Tive um curto-circuito à noite e a equipa chegou Atendimento prioritário. Resolveram tudo com segurança e profissionalismo. Muito bom!"
 },
 {
 name: "Rosa Oliveira",
 city: "Mirandela",
 rating: 5,
 date: "Dezembro 2025",
 service: "Instalação de quadro elétrico",
 text: "Instalaram um quadro elétrico novo na minha casa. Trabalho impecável, tudo certificado e explicado ao pormenor. Eletricistas muito competentes!"
 },
 {
 name: "Francisco Lopes",
 city: "Trás-os-Montes",
 rating: 5,
 date: "Novembro 2025",
 service: "Certificação elétrica",
 text: "Precisava da certificação elétrica urgente. Fizeram tudo rapidamente, com toda a documentação em ordem. Serviço profissional e preço justo."
 },
 {
 name: "Cristina Ribeiro",
 city: "Mogadouro",
 rating: 5,
 date: "Outubro 2025",
 service: "Instalação de tomadas",
 text: "Instalaram várias tomadas novas em casa. Trabalho limpo, rápido e bem feito. O eletricista foi muito cuidadoso e deixou tudo arrumado. Recomendo!"
 },
 {
 name: "José Carvalho",
 city: "Miranda do Douro",
 rating: 5,
 date: "Setembro 2025",
 service: "Arranjo de disjuntor",
 text: "O disjuntor saltava constantemente. Vieram, identificaram o problema e resolveram na hora. Serviço rápido e eficaz. Muito satisfeito!"
 },
 {
 name: "Margarida Pinto",
 city: "Vila Flor",
 rating: 5,
 date: "Agosto 2025",
 service: "Instalação de iluminação LED",
 text: "Mudaram toda a iluminação da casa para LED. Ficou fantástico e já noto a diferença na conta da luz. Equipa muito profissional!"
 },
 {
 name: "Rui Ferreira",
 city: "Torre de Moncorvo",
 rating: 5,
 date: "Julho 2025",
 service: "Deteção de avaria elétrica",
 text: "Tinham um problema elétrico que ninguém conseguia encontrar. Eles detetaram e resolveram rapidamente. Muito competentes e honestos!"
 },
 {
 name: "Helena Nunes",
 city: "Vinhais",
 rating: 5,
 date: "Junho 2025",
 service: "Instalação elétrica completa",
 text: "Fizeram toda a instalação elétrica da casa nova. Trabalho perfeito, tudo conforme as normas. Equipa de confiança. Recomendo vivamente!"
 },
 {
 name: "Pedro Moreira",
 city: "Alfândega da Fé",
 rating: 5,
 date: "Maio 2025",
 service: "Arranjo urgente",
 text: "Fiquei sem luz à noite e eles vieram de imediato. Resolveram o problema em menos de uma hora. Serviço de urgência impecável. Muito obrigado!"
 },
 ];
 }
}
