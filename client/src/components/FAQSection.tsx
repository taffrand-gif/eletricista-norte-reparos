import React from 'react';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';

interface FAQItem {
 question: string;
 answer: string;
}

interface FAQSectionProps {
 faqs: FAQItem[];
 title?: string;
 className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
 faqs, 
 title = "Perguntas Frequentes (FAQ)",
 className = ""
}) => {
 // Generate JSON-LD Schema
 const jsonLd = {
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
 };

 return (
 <section className={`${className}`}>
 {/* JSON-LD Schema */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />

 {/* Visible FAQ Section */}
 <div className="max-w-4xl mx-auto">
 {title && (
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
 {title}
 </h2>
 )}

 <div className="space-y-6">
 {faqs.map((faq, index) => (
 <div 
 key={index}
 className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-amber-300 transition-colors"
 itemScope
 itemType="https://schema.org/Question"
 >
 <details className="group">
 <summary 
 className="flex items-center justify-between p-6 cursor-pointer list-none"
 itemProp="name"
 >
 <span className="text-lg font-semibold text-gray-900 group-open:text-amber-600">
 {faq.question}
 </span>
 <span className="ml-4 flex-shrink-0 text-amber-600 group-open:rotate-180 transition-transform">
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
 </svg>
 </span>
 </summary>
 
 <div 
 className="px-6 pb-6 pt-2 border-t border-gray-100"
 itemScope
 itemType="https://schema.org/Answer"
 itemProp="acceptedAnswer"
 >
 <div className="prose prose-lg max-w-none text-gray-700" itemProp="text">
 <p>{faq.answer}</p>
 </div>
 </div>
 </details>
 </div>
 ))}
 </div>

 {/* CTA */}
 <div className="mt-12 text-center">
 <p className="text-xl text-gray-700 mb-6">
 Não encontrou resposta para a sua pergunta?
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-amber-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-amber-700 transition-colors inline-flex items-center justify-center gap-2"
 >
 📞 Ligar Agora
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-white text-amber-700 font-bold px-8 py-4 rounded-xl border-2 border-amber-600 hover:bg-amber-50 transition-colors inline-flex items-center justify-center gap-2"
 >
 💬 Perguntar no WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 );
};

// For backward compatibility
export default FAQSection;