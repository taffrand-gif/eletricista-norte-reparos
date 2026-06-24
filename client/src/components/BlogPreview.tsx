import React from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
const FEATURED_POSTS = [
 {
 slug: 'como-escolher-eletricista-certificado',
 title: 'Como Escolher um Eletricista Trabalho garantido por escrito',
 excerpt: 'Guia completo para contratar um eletricista profissional em Trás-os-Montes.',
 date: '2026-03-01',
 readTime: 'alguns minutos'
 },
 {
 slug: 'quadro-eletrico-disjuntores-disparar',
 title: 'Quadro Elétrico: Porque os Disjuntores Disparam?',
 excerpt: 'Descubra as causas mais comuns e como resolver problemas elétricos.',
 date: '2026-02-28',
 readTime: 'alguns minutos'
 },
 {
 slug: 'certificacao-obrigatoria',
 title: 'certificação elétrica: É Obrigatória?',
 excerpt: 'Tudo sobre a certificação elétrica obrigatória em Portugal.',
 date: '2026-02-25',
 readTime: 'alguns minutos'
 }
];
export default function BlogPreview() {
 return (
 <section className="py-16 bg-gray-50">
 <div className="container">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-black mb-4">
 Guias e Dicas de Eletricidade
 </h2>
 <p className="text-gray-600 max-w-2xl mx-auto">
 Aprenda com os nossos especialistas sobre instalações elétricas, segurança e manutenção
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-6 mb-8">
 {FEATURED_POSTS.map((post) => (
 <Link
 key={post.slug}
 to={`/blog/${post.slug}`}
 className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-lg transition-all group"
 >
 <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
 <span>{post.date}</span>
 <span>•</span>
 <span>{post.readTime}</span>
 </div>
 <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
 {post.title}
 </h3>
 <p className="text-gray-600 mb-4 line-clamp-2">
 {post.excerpt}
 </p>
 <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
 Ler mais
 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
 </div>
 </Link>
 ))}
 </div>
 <div className="text-center">
 <Link
 to="/blog"
 className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
 >
 Ver Todos os Artigos
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 </div>
 </section>
 );
}
