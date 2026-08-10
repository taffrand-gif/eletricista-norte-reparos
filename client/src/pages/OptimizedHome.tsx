// Página principal otimizada para SEO e conversões
import Header from '@/components/Header';
import InnovativeHero from '@/components/InnovativeHero';
import PremiumBar from '@/components/PremiumBar';
import TrustBanner from '@/components/TrustBanner';
import Diagnostico from '@/components/Diagnostico';
import OrcamentoGratuitoBadge from '@/components/OrcamentoGratuitoBadge';
import OptimizedServices from '@/components/OptimizedServices';
import StatsCounters from '@/components/StatsCounters';
import CalculadorPreco from '@/components/CalculadorPreco';
import PriceTable from '@/components/PriceTable';
import ZonaIntervencao from '@/components/ZonaIntervencao';
import Equipa from '@/components/Equipa';
import Garantias from '@/components/Garantias';
import Trabalhos from '@/components/Trabalhos';
import LatestBlog from '@/components/LatestBlog';
import FAQ from '@/components/FAQ';
import FAQLocal from '@/components/FAQLocal';
import Testimonials from '@/components/Testimonials';
import GoogleReviews from '@/components/GoogleReviews';
import Blog from '@/components/Blog';
import Contactos from '@/components/Contactos';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useSite } from '@/contexts/SiteContext';
export default function OptimizedHome() {
 const { config } = useSite();
 const isPlumber = config.id === 'norte-reparos';
 const accentColor = isPlumber ? 'text-blue-600' : 'text-amber-600';
 const serviceLabel = isPlumber ? 'Canalização' : 'Serviços Elétricos';
 return (
 <>
 <SEOHead />
 
 <Header />
 <main>
 <PremiumBar />
 <InnovativeHero />
 {!isPlumber && (
 <section className="dgeg-cert" style={{background: '#f4f9fb', border: '1px solid #0a4d68', borderRadius: '8px', padding: '1.5rem', margin: '2rem auto', maxWidth: '920px'}}>
 <h2 style={{marginTop: 0, color: '#0a4d68', fontSize: '1.15rem'}}>⚡ Técnico Responsável inscrito na DGEG</h2>
 <p style={{margin: 0, color: '#222'}}>
 <strong>Técnico Responsável de Instalações Elétricas inscrito na DGEG — TRIESP n.º 90062</strong> (domínio <em>Execução em Baixa Tensão</em>, instalações até 41,4 kVA). Emitimos <strong>Ficha Eletrotécnica</strong> e <strong>Termo de Responsabilidade</strong> no final de cada intervenção. Seguro de responsabilidade civil válido (Lei n.º 14/2015).
 </p>
 <p style={{margin: '0.75rem 0 0 0'}}>
 Ver guias detalhados: <a href="/quem-pode-emitir-ficha-eletrotecnica" style={{color: '#0a4d68', fontWeight: 700}}>Quem pode emitir?</a> · <a href="/ficha-eletrotecnica" style={{color: '#0a4d68', fontWeight: 700}}>Ficha Eletrotécnica</a> · <a href="/lei-14-2015" style={{color: '#0a4d68', fontWeight: 700}}>Lei 14/2015</a>
 </p>
 </section>
 )}
 <TrustBanner />
 <Diagnostico />
 <OrcamentoGratuitoBadge />
 <OptimizedServices />
 <StatsCounters />
 
 <CalculadorPreco />
 
 {/* Secção tabela de preços */}
 <PriceTable />
 
 {/* Secção Zona de Intervenção */}
 <ZonaIntervencao />
 
 {/* Secção Equipa */}
 <Equipa />
 
 <Garantias />
 
 {/* Secção Trabalhos */}
 <Trabalhos />
 
 {/* Últimos Artigos do Blog */}
 <LatestBlog />
 
 {/* Secção FAQ */}
 <section className="py-20 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h2 className="text-4xl font-bold text-gray-900 mb-4">
 Perguntas Frequentes sobre <span className={accentColor}>{serviceLabel}</span>
 </h2>
 <p className="text-xl text-gray-600">
 Tire as suas dúvidas sobre os nossos serviços
 </p>
 </div>
 
 <div className="max-w-4xl mx-auto">
 <FAQ />
 </div>
 </div>
 </section>
 
 {/* FAQ Local SEO */}
 <FAQLocal />
 
 {/* Secção testemunhos */}
 <Testimonials />
 
 {/* Avaliações Google */}
 <GoogleReviews />
 
 {/* Secção Blog */}
 <Blog />
 
 {/* Secção contactos */}
 <Contactos />
 </main>
 <Footer />
 
 <ScrollToTop />
 </>
 );
}
