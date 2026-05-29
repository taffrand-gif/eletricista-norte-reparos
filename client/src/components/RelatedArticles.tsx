// Composant RelatedArticles - Affiche les articles connexes pour le maillage interno SEO
import { Link } from 'wouter';

interface RelatedArticlesProps {
 currentArticleSlug: string;
}

export default function RelatedArticles({ currentArticleSlug }: RelatedArticlesProps) {
 // Liste des articles avec leurs slugs et descriptions
 const allArticles = [
 { 
 slug: 'instalacao-eletrica-casa-nova', 
 title: 'Instalação Elétrica para Casa Nova', 
 excerpt: 'Guia completo para projetar e instalar a rede elétrica numa casa nova em Trás-os-Montes.',
 category: 'Instalação'
 },
 { 
 slug: 'certificacao-eletrica-obrigatoria', 
 title: 'Certificação Elétrica Obrigatória', 
 excerpt: 'Tudo sobre a certificação energética obrigatória para imóveis na região norte.',
 category: 'Legal'
 },
 { 
 slug: 'arranjacao-avarias-eletricas-comuns', 
 title: 'Arranjo de Avarías Elétricas Comuns', 
 excerpt: 'Soluções para os problemas elétricos mais frequentes em habitações antigas.',
 category: 'Arranjo'
 },
 { 
 slug: 'iluminacao-led-vantagens', 
 title: 'Iluminação LED - Vantagens e Economia', 
 excerpt: 'Como a iluminação LED pode reduzir até 80% do consumo elétrico da sua casa.',
 category: 'Economia'
 },
 { 
 slug: 'quadro-eletrico-modernizacao', 
 title: 'Modernização do Quadro Elétrico', 
 excerpt: 'Porque deve atualizar o quadro elétrico da sua casa e como o fazer com segurança.',
 category: 'Segurança'
 },
 { 
 slug: 'tomadas-e-interruptores-inteligentes', 
 title: 'Tomadas e Interruptores Inteligentes', 
 excerpt: 'Automatize a sua casa com dispositivos inteligentes controlados por smartphone.',
 category: 'Tecnologia'
 },
 { 
 slug: 'energia-solar-casas-tras-os-montes', 
 title: 'Energia Solar para Casas em Trás-os-Montes', 
 excerpt: 'Viabilidade e vantagens da instalação de painéis solares na região norte.',
 category: 'Energia'
 },
 { 
 slug: 'protecao-contra-sobrecargas', 
 title: 'Proteção Contra Sobrecargas e Curto-Circuitos', 
 excerpt: 'Sistemas de proteção essenciais para garantir a segurança elétrica da sua casa.',
 category: 'Segurança'
 },
 { 
 slug: 'custo-eletricista-precos-regiao', 
 title: 'Custo de Eletricista - Preços na Região', 
 excerpt: 'Tabela de preços atualizada para serviços elétricos em Trás-os-Montes.',
 category: 'Preços'
 },
 ];

 // Filtrer pour exclure l'article actuel
 const relatedArticles = allArticles
 .filter(article => article.slug !== currentArticleSlug)
 .slice(0, 3); // Prendre 3 articles maximum

 if (relatedArticles.length === 0) return null;

 return (
 <section className="py-12 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-8">
 <h2 className="text-3xl font-bold text-gray-900 mb-2">
 Artigos relacionados:
 </h2>
 <p className="text-gray-600">
 Continue a aprender sobre eletricidade e segurança doméstica
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {relatedArticles.map((article) => (
 <Link 
 key={article.slug}
 href={`/blog/${article.slug}`}
 className="group"
 >
 <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-500 h-full">
 <div className="p-6">
 <div className="mb-4">
 <span className="inline-block px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
 {article.category}
 </span>
 </div>
 <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-700 transition-colors line-clamp-2">
 {article.title}
 </h3>
 <p className="text-gray-600 mb-4 line-clamp-3">
 {article.excerpt}
 </p>
 <div className="flex items-center text-orange-600 font-medium">
 <span>Ler artigo</span>
 <svg 
 className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
 fill="none" 
 stroke="currentColor" 
 viewBox="0 0 24 24"
 >
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
 </svg>
 </div>
 </div>
 </div>
 </Link>
 ))}
 </div>

 <div className="text-center mt-8">
 <Link href="/blog">
 <button className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
 Ver todos os artigos do blog
 </button>
 </Link>
 <p className="text-gray-600 text-sm mt-4">
 <strong>SEO Tip:</strong> Links internos entre artigos aumentam o tempo de permanência e melhoram a autoridade do domínio.
 </p>
 </div>
 </div>
 </section>
 );
}