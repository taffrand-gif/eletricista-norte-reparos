// Secção Blog & Dicas - conteúdo adaptado ao site ativo
import { useSite } from '@/contexts/SiteContext';
import { Calendar, ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
export default function Blog() {
 const { config } = useSite();
 const isPlumber = config.id === 'norte-reparos';
 const plumbArticles = [
 {
 title: 'Como Detetar uma Fuga de Água em Casa',
 excerpt: 'Descubra os principais sinais de alerta que indicam uma fuga de água escondida e saiba quando chamar um canalizador profissional.',
 date: '10 Jan 2026',
 readTime: '5 min',
 image: '/images-optimized/services/service-sala-banho.jpg',
 link: '/blog'},
 {
 title: 'Manutenção do Esquentador: Guia Completo',
 excerpt: 'Guia prático para manter o seu esquentador em perfeito funcionamento e evitar avarias dispendiosas durante o inverno.',
 date: '5 Jan 2026',
 readTime: '7 min',
 image: '/images-optimized/services/service-aquecimento.jpg',
 link: '/blog'},
 {
 title: 'Desentupimentos: Quando Chamar um Profissional',
 excerpt: 'Saiba distinguir entre um entupimento simples que pode resolver em casa e uma situação que requer intervenção profissional.',
 date: '28 Dez 2025',
 readTime: '6 min',
 image: '/images-optimized/services/service-desentupimentos.jpg',
 link: '/blog'},
 ];
 const electricArticles = [
 {
 title: 'Como Instalar um Candeeiro de Teto em Segurança',
 excerpt: 'Guia completo sobre a instalação segura de candeeiros de teto, com dicas de um eletricista certificado em Trás-os-Montes.',
 date: '15 Jan 2026',
 readTime: '5 min',
 image: '/images-optimized/blog/installing-ceiling-light.jpg',
 link: '/blog/como-instalar-candeeiro-teto-seguranca'},
 {
 title: 'Certificação Elétrica : Tudo o que Precisa Saber',
 excerpt: 'Descubra quando é obrigatória a certificação elétrica, quanto custa e como parranjar a sua instalação para a inspeção.',
 date: '10 Jan 2026',
 readTime: '7 min',
 image: '/images-optimized/blog/electrical-panel-certification.jpg',
 link: '/blog/certificacao--tudo-saber'},
 {
 title: 'Sinais de Problemas Elétricos em Casa',
 excerpt: 'Conheça os sinais de alerta que indicam problemas na instalação elétrica e saiba quando chamar um eletricista urgente.',
 date: '5 Jan 2026',
 readTime: '6 min',
 image: '/images-optimized/blog/featured-electrician.jpg',
 link: '/blog/sinais-problemas-eletricos-casa'},
 ];
 const articles = isPlumber ? plumbArticles : electricArticles;
 return (
 <section id="blog" className="py-20 bg-white">
 <div className="container">
 {/* Cabeçalho */}
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-4">
 Blog & Dicas
 </h2>
 <p className="text-lg text-gray-700 max-w-3xl mx-auto">
 Conselhos profissionais, guias práticos e dicas para manter tudo em perfeito funcionamento na sua casa em Trás-os-Montes.
 </p>
 </div>
 {/* Grelha de artigos */}
 <div className="grid md:grid-cols-3 gap-8 mb-12">
 {articles.map((article, index) => (
 <article
 key={index}
 className="bg-white border-4 overflow-hidden shadow-[6px_6px_0_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
 style={{ borderColor: config.colors.primary }}
 >
 <a href={article.link} className="block">
 {/* Imagem */}
 <div className="aspect-[16/9] overflow-hidden">
 <OptimizedImage
 src={article.image}
 alt={`Illustration de l'article: ${article.title}`}
 className="w-full h-full hover:scale-105 transition-transform duration-300"
 width={400}
 height={225}
 objectFit="cover"
 />
 </div>
 {/* Conteúdo */}
 <div className="p-6">
 {/* Meta */}
 <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
 <div className="flex items-center gap-1">
 <Calendar className="w-4 h-4" />
 <span>{article.date}</span>
 </div>
 <span>•</span>
 <span>{article.readTime} leitura</span>
 </div>
 {/* Título */}
 <h3 className="font-black text-xl mb-3 leading-tight">
 {article.title}
 </h3>
 {/* Excerto */}
 <p className="text-gray-700 mb-4 leading-relaxed">
 {article.excerpt}
 </p>
 {/* CTA */}
 <span
 className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all"
 style={{ color: config.colors.primary }}
 >
 Ler Artigo
 <ArrowRight className="w-4 h-4" />
 </span>
 </div>
 </a>
 </article>
 ))}
 </div>
 {/* CTA inferior */}
 <div className="text-center">
 <a
 href="/blog"
 className="inline-flex items-center gap-2 px-8 py-4 font-bold border-4 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
 style={{ borderColor: config.colors.primary, color: config.colors.primary }}
 >
 Ver Todos os Artigos
 <ArrowRight className="w-5 h-5" />
 </a>
 </div>
 </div>
 </section>
 );
}
