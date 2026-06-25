import React from 'react';
import { Link } from 'wouter';
import { useSite } from '@/contexts/SiteContext';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
interface BlogLayoutProps {
 children: React.ReactNode;
 title?: string;
 description?: string;
}
const BlogLayout: React.FC<BlogLayoutProps> = ({ children, title, description }) => {
 const { config } = useSite();
 return (
 <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
 {/* Header du blog */}
 <header className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-12">
 <div className="container mx-auto px-4">
 <div className="flex flex-col md:flex-row justify-between items-center">
 <div>
 <h1 className="text-4xl md:text-5xl font-bold mb-4">
 {title || 'Blog do Eletricista'}
 </h1>
 <p className="text-xl text-amber-100 max-w-3xl">
 {description || 'Dicas, guias e informações sobre eletricidade para residências e empresas em Trás-os-Montes'}
 </p>
 </div>
 <div className="mt-6 md:mt-0">
 <Link href="/">
 <a className="inline-flex items-center gap-2 bg-white text-amber-700 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors">
 ← Voltar ao site
 </a>
 </Link>
 </div>
 </div>
 </div>
 </header>
 {/* Navigation catégories */}
 <nav className="bg-white border-b border-gray-200 py-4">
 <div className="container mx-auto px-4">
 <div className="flex flex-wrap gap-4">
 <a href="/blog" className="px-4 py-2 bg-amber-100 text-amber-800 font-semibold rounded-lg">
 Todos os Artigos
 </a>
 <a href="/blog" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
 Dicas Práticas
 </a>
 <a href="/blog" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
 Segurança Elétrica
 </a>
 <a href="/blog" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
 Manutenção
 </a>
 <a href="/blog" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
 Legislação
 </a>
 </div>
 </div>
 </nav>
 {/* Contenu principal */}
 <main className="container mx-auto px-4 py-12">
 {children}
 </main>
 {/* CTA footer */}
 <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">Precisa de um eletricista?</h2>
 <p className="text-xl mb-8 max-w-2xl mx-auto">
 Contacte-nos para uma intervenção rápida e profissional em toda a região de Trás-os-Montes.
 </p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center">
 <a
 href={`tel:${ACTIVE_CONFIG.phone}`}
 className="bg-white text-amber-700 font-bold text-lg px-8 py-4 rounded-xl hover:bg-amber-50 transition-colors"
 >
 📞 Ligar Agora
 </a>
 <a
 href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-amber-700 transition-colors"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </section>
 {/* Footer */}
 <footer className="bg-gray-900 text-white py-8">
 <div className="container mx-auto px-4 text-center">
 <p className="text-gray-400">
 © {new Date().getFullYear()} {config.name} - Eletricista Profissional em Trás-os-Montes
 </p>
 <p className="text-gray-500 text-sm mt-2">
 Todos os artigos são informativos. Para intervenções elétricas, consulte sempre um profissional com experiência.
 </p>
 </div>
 </footer>
 </div>
 );
};
export default BlogLayout;