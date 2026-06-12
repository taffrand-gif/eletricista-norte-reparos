import React from 'react';
import { useEffect } from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogCard from '@/components/blog/BlogCard';
import { useSEO } from '@/hooks/useSEO';
const BlogIndex: React.FC = () => {
 useEffect(() => {
 const meta = document.createElement('meta');
 meta.name = 'robots';
 meta.content = 'noindex';
 document.head.appendChild(meta);
 }, []);
 useSEO({
 title: 'Blog do Eletricista - Dicas e Guias para Eletricidade em Trás-os-Montes',
 description: 'Artigos informativos sobre eletricidade, segurança elétrica, manutenção e legislação para residências e empresas na região de Trás-os-Montes.',
 keywords: 'blog eletricista, dicas eletricidade, segurança elétrica, manutenção elétrica, Trás-os-Montes'
 });
 // Articles data - à remplacer par API/database plus tard
 const articles = [
 {
 slug: 'automacao-residencial-casa-inteligente',
 title: 'Automação Residencial em Trás-os-Montes: Guia Completo para Casa Inteligente',
 excerpt: 'Transforme a sua casa numa casa inteligente. Guia completo sobre domótica, iluminação inteligente, segurança e climatização automatizada.',
 category: 'Automação',
 readTime: '12',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/automacao-residencial.jpg'
 },
 {
 slug: 'protecao-sobrecargas-eletricas-casa',
 title: 'Como Proteger a Sua Casa de Sobrecargas Elétricas',
 excerpt: 'Aprenda a proteger a sua casa de sobrecargas elétricas. Disjuntores, DPS, réguas com proteção e dicas práticas para evitar danos.',
 category: 'Segurança Elétrica',
 readTime: '10',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/protecao-sobrecargas.jpg'
 },
 {
 slug: 'iluminacao-exterior-jardim-guia',
 title: 'Iluminação Exterior e de Jardim: Guia Completo 2026',
 excerpt: 'Guia completo de iluminação exterior: LED, IP65, segurança, ambiance e economia de energia. Transforme o exterior da sua casa.',
 category: 'Iluminação',
 readTime: '11',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/iluminacao-exterior.jpg'
 },
 {
 slug: 'instalacao-eletrica-casa-antiga-renovacao',
 title: 'Renovação Elétrica em Casas Antigas de Trás-os-Montes',
 excerpt: 'Guia completo para renovar a instalação elétrica em casas antigas de pedra e granito. Normas, custos e soluções práticas.',
 category: 'Renovação',
 readTime: '13',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/casa-antiga.jpg'
 },
 {
 slug: 'carregador-veiculo-eletrico-casa',
 title: 'Instalar Carregador de Veículo Elétrico em Casa: Guia 2026',
 excerpt: 'Guia completo para instalar wallbox em casa. Tipos de carregadores, potência, custos, incentivos e instalação profissional.',
 category: 'Veículos Elétricos',
 readTime: '14',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/carregador-ev.jpg'
 },
 {
 slug: 'poupanca-energia-inverno-tras-os-montes',
 title: 'Poupar Energia no Inverno em Trás-os-Montes: 10 Dicas Práticas',
 excerpt: '10 dicas práticas para poupar energia no inverno transmontano. Aquecimento, iluminação, isolamento e soluções elétricas eficientes.',
 category: 'Eficiência Energética',
 readTime: '12',
 date: '19 Fev 2026',
 imageUrl: '/images-optimized/blog/inverno.jpg'
 },
 {
 slug: 'como-instalar-candeeiro-teto-seguranca',
 title: 'Como Instalar um Candeeiro de Teto com Segurança: Guia para Iniciantes',
 excerpt: 'Aprenda a instalar um candeeiro de teto de forma segura e correta, seguindo as normas de segurança elétrica. Guia passo a passo para projetos DIY.',
 category: 'Dicas Práticas',
 readTime: '8',
 date: '13 Fev 2026',
 imageUrl: '/images-optimized/blog/instalar-candeeiro.jpg'
 },
 {
 slug: 'poupar-energia-eletrica-dicas',
 title: 'Como Poupar Energia Elétrica em Casa — 10 Dicas Práticas',
 excerpt: 'Descubra 10 dicas práticas para poupar energia elétrica em casa e reduzir a fatura da luz. Guia completo de eficiência energética para Trás-os-Montes.',
 category: 'Eficiência Energética',
 readTime: '10',
 date: '14 Fev 2026',
 imageUrl: '/images-optimized/blog/poupar-energia.jpg'
 },
 {
 slug: 'quando-trocar-instalacao-eletrica',
 title: 'Quando Trocar a Instalação Elétrica? Sinais de Alerta',
 excerpt: 'Descubra os sinais de alerta que indicam que a sua instalação elétrica precisa de ser renovada. Guia completo sobre segurança elétrica em casas antigas.',
 category: 'Segurança Elétrica',
 readTime: '9',
 date: '14 Fev 2026',
 imageUrl: '/images-optimized/blog/instalacao-eletrica.jpg'
 },
 {
 slug: 'sinais-problemas-eletricos-casa',
 title: '7 Sinais de Problemas Elétricos em Casa - Quando Chamar Eletricista',
 excerpt: 'Aprenda a identificar os 7 sinais de alerta de problemas elétricos em casa. Saiba quando é urgente chamar um eletricista profissional.',
 category: 'Segurança Elétrica',
 readTime: '9',
 date: '15 Fev 2026',
 imageUrl: '/images-optimized/blog/sinais-problemas.jpg'
 },
 {
 slug: 'quadro-eletrico-antigo-fusiveis-trocar',
 title: 'Quadro Elétrico Antigo com Fusíveis: Quando e Como Trocar',
 excerpt: 'Guia completo sobre quadros elétricos antigos com fusíveis cerâmicos. Saiba quando trocar, custos e benefícios da modernização.',
 category: 'Modernização',
 readTime: '10',
 date: '16 Fev 2026',
 imageUrl: '/images-optimized/blog/quadro-antigo.jpg'
 },
 {
 slug: 'certificacao-eletrica-guia',
 title: 'Certificação Elétrica : Guia Completo 2026',
 excerpt: 'Tudo sobre a certificação elétrica em Portugal: quando é obrigatória, como obter, custos e validade.',
 category: 'Legislação',
 readTime: '11',
 date: '17 Fev 2026',
 imageUrl: '/images-optimized/blog/.jpg'
 },
 {
 slug: 'como-escolher-eletricista-certificado',
 title: 'Como Escolher um Eletricista Certificado: 7 Critérios Essenciais',
 excerpt: 'Guia completo para escolher um eletricista certificado de confiança. 7 critérios essenciais para não errar na escolha.',
 category: 'Dicas',
 readTime: '8',
 date: '18 Fev 2026',
 imageUrl: '/images-optimized/blog/escolher-eletricista.jpg'
 },
 {
 slug: 'custo-eletricista-tras-os-montes-precos',
 title: 'Quanto Custa um Eletricista em Trás-os-Montes? Tabela de Preços 2026',
 excerpt: 'Tabela completa de preços de eletricista em Trás-os-Montes. Valores por serviço, urgências e fatores que influenciam o custo.',
 category: 'Preços',
 readTime: '9',
 date: '18 Fev 2026',
 imageUrl: '/images-optimized/blog/precos.jpg'
 },
 {
 slug: 'paineis-solares-tras-os-montes-guia',
 title: 'Painéis Solares em Trás-os-Montes: Guia Completo 2026',
 excerpt: 'Guia completo sobre painéis solares em Trás-os-Montes: custos, incentivos, instalação e retorno do investimento.',
 category: 'Energia Solar',
 readTime: '15',
 date: '18 Fev 2026',
 imageUrl: '/images-optimized/blog/paineis-solares.jpg'
 }
 ];
 return (
 <BlogLayout
 title="Blog do Eletricista Profissional"
 description="Dicas, guias e informações úteis sobre eletricidade para residências e empresas em Trás-os-Montes"
 >
 {/* Hero section */}
 <div className="text-center mb-12">
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Conhecimento que <span className="text-amber-600">Ilumina</span>
 </h1>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Artigos escritos por eletricistas certificados para ajudar proprietários e empresas a entenderem melhor a eletricidade e tomarem decisões informadas.
 </p>
 </div>
 {/* Featured article */}
 <div className="mb-16">
 <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
 <div className="flex flex-col lg:flex-row gap-8 items-center">
 <div className="lg:w-1/3">
 <div className="rounded-xl overflow-hidden">
 <img
 src="/images-optimized/blog/featured.jpg"
 alt="Eletricista profissional a trabalhar"
 className="w-full h-64 object-cover"
 loading="lazy"
 width={400}
 height={300}
 />
 </div>
 </div>
 <div className="lg:w-2/3">
 <span className="inline-block px-4 py-1 bg-amber-600 text-white font-semibold rounded-full mb-4">
 Artigo em Destaque
 </span>
 <h2 className="text-3xl font-bold text-gray-900 mb-4">
 10 Sinais de que Precisa de um Eletricista Urgente
 </h2>
 <p className="text-gray-700 mb-6 text-lg">
 Descubra os sinais de alerta que indicam problemas elétricos sérios na sua casa ou empresa. 
 Ignorar estes sinais pode levar a situações perigosas ou danos caros.
 </p>
 <a
 href="/blog/sinais-problemas-eletricos-casa"
 className="inline-flex items-center gap-2 bg-amber-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
 >
 Ler Artigo Completo
 <span className="text-xl">→</span>
 </a>
 </div>
 </div>
 </div>
 </div>
 {/* Articles grid */}
 <div>
 <h2 className="text-3xl font-bold text-gray-900 mb-8">Últimos Artigos</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {articles.map((article) => (
 <BlogCard key={article.slug} {...article} />
 ))}
 </div>
 </div>
 {/* Newsletter */}
 <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
 <div className="text-center max-w-2xl mx-auto">
 <h3 className="text-2xl font-bold text-gray-900 mb-4">
 Receba Dicas de Eletricidade no seu Email
 </h3>
 <p className="text-gray-700 mb-6">
 Inscreva-se na nossa newsletter e receba mensalmente dicas de segurança elétrica, 
 informações sobre manutenção e promoções exclusivas.
 </p>
 <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
 <input
 type="email"
 placeholder="Seu email"
 className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
 required
 />
 <button
 type="submit"
 className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap"
 >
 Inscrever-se
 </button>
 </form>
 <p className="text-sm text-gray-500 mt-4">
 Respeitamos a sua privacidade. Pode cancelar a qualquer momento.
 </p>
 </div>
 </div>
 </BlogLayout>
 );
};
export default BlogIndex;