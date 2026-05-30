import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
const articles = [
 {
 title: 'Como Instalar um Candeeiro de Teto com Segurança',
 desc: 'Guia passo a passo para instalar candeeiros sem riscos. Dicas de um eletricista profissional.',
 href: '/blog/como-instalar-candeeiro-teto-seguranca'},
 {
 title: '10 Dicas para Poupar Energia Elétrica em Casa',
 desc: 'Reduza a sua fatura de eletricidade com estas dicas simples e eficazes.',
 href: '/blog/poupar-energia-eletrica-dicas'},
 {
 title: 'Quando Trocar a Instalação Elétrica?',
 desc: 'Sinais de alerta que indicam que a sua instalação elétrica precisa de ser renovada.',
 href: '/blog/quando-trocar-instalacao-eletrica'},
 {
 title: 'Quadro Elétrico Antigo: Quando Trocar os Fusíveis?',
 desc: 'Saiba quando é hora de substituir o quadro elétrico antigo por um moderno com diferenciais.',
 href: '/blog/quadro-eletrico-antigo-fusiveis-trocar'},
];
export default function LatestBlog() {
 return (
 <section className="py-20 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
 Últimos <span className="text-[#c2410c]">Artigos</span>
 </h2>
 <p className="text-lg text-gray-600">
 Dicas e guias práticos da nossa equipa de eletricistas.
 </p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
 {articles.map((a, i) => (
 <a
 key={i}
 href={a.href}
 className="group bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-[#FF6B35] hover:shadow-lg transition-all flex flex-col"
 >
 <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6B35]/10 text-[#c2410c] mb-4">
 <BookOpen className="w-5 h-5" />
 </div>
 <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#c2410c] transition-colors">
 {a.title}
 </h3>
 <p className="text-sm text-gray-600 flex-1 mb-4">{a.desc}</p>
 <span className="inline-flex items-center text-sm font-semibold text-[#c2410c] gap-1">
 Ler mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </span>
 </a>
 ))}
 </div>
 <div className="text-center mt-10">
 <a
 href="/blog"
 className="inline-flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold py-3 px-8 rounded-lg transition-colors"
 >
 Ver Todos os Artigos <ArrowRight className="w-4 h-4" />
 </a>
 </div>
 </div>
 </section>
 );
}
