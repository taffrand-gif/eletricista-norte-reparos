import { TESTIMONIALS, Testimonial } from "@/data/testimonialsData";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useState, useEffect } from "react";
export function TestimonialsSection() {
 const { gradient } = ACTIVE_CONFIG;
 const config = ACTIVE_CONFIG;
 const testimonials: Testimonial[] = TESTIMONIALS;
 const featured = testimonials.slice(0, 6); // Top 6 témoignages
 
 const [currentIndex, setCurrentIndex] = useState(0);
 // Auto-rotation carousel
 useEffect(() => {
 const timer = setInterval(() => {
 setCurrentIndex((prev) => (prev + 1) % Math.ceil(featured.length / 3));
 }, 5000); // Change every 5 seconds
 
 return () => clearInterval(timer);
 }, [featured.length]);
 const visibleTestimonials = featured.slice(currentIndex * 3, currentIndex * 3 + 3);
 // Schema.org Review markup
 const reviewSchema = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "name": config.businessName,
 "review": featured.map((t: Testimonial) => ({
 "@type": "Review",
 "author": {
 "@type": "Person",
 "name": t.name
 },
 "reviewRating": {
 "@type": "Rating",
 "ratingValue": "5"
 },
 "reviewBody": t.text
 }))
 };
 return (
 <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
 {/* Schema.org markup */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
 />
 
 <div className="container">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full mb-4" style={{backgroundColor: gradient.from}}>
 <span className="text-3xl">⭐⭐⭐⭐⭐</span>
 <span className="font-bold text-xl">5.0/5</span>
 </div>
 
 <p className="text-xl text-gray-600 max-w-2xl mx-auto">
 Atendemos clientes em toda a região de Trás-os-Montes confiam nos nossos serviços
 </p>
 </div>
 {/* Testimonials Grid */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
 {visibleTestimonials.map((testimonial: Testimonial, idx: number) => (
 <div
 key={idx}
 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600"
 >
 {/* Stars */}
 <div className="flex gap-1 mb-4">
 {[...Array(5)].map((_, i) => (
 <span key={i} className="text-yellow-400 text-2xl">⭐</span>
 ))}
 </div>
 {/* Text */}
 <p className="text-gray-700 mb-6 italic leading-relaxed">
 "{testimonial.text}"
 </p>
 {/* Author */}
 <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
 <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{backgroundColor: gradient.from}}>
 {testimonial.name.charAt(0)}
 </div>
 <div>
 <div className="font-bold text-gray-900">{testimonial.name}</div>
 <div className="text-sm text-gray-600">
 {testimonial.city} • {testimonial.service}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 {/* Carousel Indicators */}
 <div className="flex justify-center gap-2">
 {[...Array(Math.ceil(featured.length / 3))].map((_, idx) => (
 <button
 key={idx}
 onClick={() => setCurrentIndex(idx)}
 className={`w-3 h-3 rounded-full transition-all ${
 idx === currentIndex ? 'w-8' : 'bg-gray-300'
 }`}
 style={idx === currentIndex ? {backgroundColor: ACTIVE_CONFIG.gradient.from} : {}}
 aria-label={`Go to slide ${idx + 1}`}
 />
 ))}
 </div>
 {/* CTA */}
 <div className="text-center mt-12">
 <a
 href="/#testemunhos"
 className="inline-block hover: text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg" style={{backgroundColor: gradient.from}}
 >
 Ver Todos os Testemunhos →
 </a>
 </div>
 </div>
 </section>
 );
}
