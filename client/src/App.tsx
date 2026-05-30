import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteProvider } from "./contexts/SiteContext";
import { LocationProvider } from "./contexts/LocationContext";
import FloatingCTA from "./components/FloatingCTA";

import MobileStickyBar from "./components/MobileStickyBar";
import StructuredData from "./components/StructuredData";
import OptimizedHome from "./pages/OptimizedHome";
import SkipLink from '@/components/SkipLink';
import UrgencyIndicator from '@/components/UrgencyIndicator';
// Lazy load conversion widgets (below-fold)
const ExitIntentPopup = lazy(() => import('@/components/ExitIntentPopup'));
const QuoteCalculator = lazy(() => import('@/components/QuoteCalculator'));
const LocationDetector = lazy(() => import('@/components/LocationDetector'));
// Lazy load all pages except homepage for better LCP
const Servicos = lazy(() => import("@/pages/Servicos"));
const QuadrosEletricos = lazy(() => import("@/pages/QuadrosEletricos"));
const CertificacaoEletrica = lazy(() => import("@/pages/CertificacaoEletrica"));
const InstalacaoEletrica = lazy(() => import("@/pages/InstalacaoEletrica"));
const PaineisSolares = lazy(() => import("@/pages/PaineisSolares"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const FAQPage = lazy(() => import("@/pages/FAQ"));
const VilaReal = lazy(() => import("@/pages/cidades/VilaReal"));
const Braganca = lazy(() => import("@/pages/cidades/Braganca"));
const Chaves = lazy(() => import("@/pages/cidades/Chaves"));
const Mirandela = lazy(() => import("@/pages/cidades/Mirandela"));
const MacedoCavaleiros = lazy(() => import("@/pages/cidades/MacedoCavaleiros"));
const Vinhais = lazy(() => import("@/pages/cidades/Vinhais"));
const MirandaDouro = lazy(() => import("@/pages/cidades/MirandaDouro"));
const Mogadouro = lazy(() => import("@/pages/cidades/Mogadouro"));
const TorreMoncorvo = lazy(() => import("@/pages/cidades/TorreMoncorvo"));
const FreixoEspadaCinta = lazy(() => import("@/pages/cidades/FreixoEspadaCinta"));
const Valpacos = lazy(() => import("@/pages/cidades/Valpacos"));
const AlfandegaDaFe = lazy(() => import("@/pages/cidades/AlfandegaDaFe"));
const VilaFlor = lazy(() => import("@/pages/cidades/VilaFlor"));
const CarrazedaDeAnsiaes = lazy(() => import("@/pages/cidades/CarrazedaDeAnsiaes"));
const Vimioso = lazy(() => import("@/pages/cidades/Vimioso"));
const Montalegre = lazy(() => import("@/pages/cidades/Montalegre"));
const Boticas = lazy(() => import("@/pages/cidades/Boticas"));
const Murca = lazy(() => import("@/pages/cidades/Murca"));
const Alijo = lazy(() => import("@/pages/cidades/Alijo"));
const Sabrosa = lazy(() => import("@/pages/cidades/Sabrosa"));
const VilaPoucaDeAguiar = lazy(() => import("@/pages/cidades/VilaRealCity"));
const RibeiraDePena = lazy(() => import("@/pages/cidades/RibeiraDePena"));
const MondimDeBasto = lazy(() => import("@/pages/cidades/MondimDeBasto"));
const PesoDaRegua = lazy(() => import("@/pages/cidades/PesoDaRegua"));
const Lamego = lazy(() => import("@/pages/cidades/Lamego"));
const VilaNovaFozCoa = lazy(() => import("@/pages/cidades/VilaNovaFozCoa"));
const Sernancelhe = lazy(() => import("@/pages/cidades/Sernancelhe"));
const Penedono = lazy(() => import("@/pages/cidades/Penedono"));
const SaoJoaoDaPesqueira = lazy(() => import("@/pages/cidades/SaoJoaoDaPesqueira"));
const Tabuaco = lazy(() => import("@/pages/cidades/Tabuaco"));
const Armamar = lazy(() => import("@/pages/cidades/Armamar"));
const SantaMartaDePenaguiao = lazy(() => import("@/pages/cidades/SantaMartaDePenaguiao"));
const MesaoFrio = lazy(() => import("@/pages/cidades/MesaoFrio"));
const BlogIndex = lazy(() => import("@/pages/blog/BlogIndex"));
const ComoInstalarCandeeiroTeto = lazy(() => import("@/pages/blog/ComoInstalarCandeeiroTeto"));
const PouparEnergiaEletricaDicas = lazy(() => import("@/pages/blog/PouparEnergiaEletricaDicas"));
const QuandoTrocarInstalacaoEletrica = lazy(() => import("@/pages/blog/QuandoTrocarInstalacaoEletrica"));
const SinaisProblemasEletricos = lazy(() => import("@/pages/blog/SinaisProblemasEletricos"));
const QuadroEletricoAntigo = lazy(() => import("@/pages/blog/QuadroEletricoAntigo"));
const CertificacaoEletricaCertiel = lazy(() => import("@/pages/blog/CertificacaoEletricaCertiel"));
const ComoEscolherEletricistaCertificado = lazy(() => import("@/pages/blog/ComoEscolherEletricistaCertificado"));
const CustoEletricistaTrasOsMontesPrecos = lazy(() => import("@/pages/blog/CustoEletricistaTrasOsMontesPrecos"));
const PaineisSolaresTrasOsMontesGuia = lazy(() => import("@/pages/blog/PaineisSolaresTrasOsMontesGuia"));
const AutomacaoResidencialGuia = lazy(() => import("@/pages/blog/AutomacaoResidencialGuia"));
const ProtecaoSobrecargas = lazy(() => import("@/pages/blog/ProtecaoSobrecargas"));
const IluminacaoExteriorJardim = lazy(() => import("@/pages/blog/IluminacaoExteriorJardim"));
const InstalacaoEletricaCasaAntiga = lazy(() => import("@/pages/blog/InstalacaoEletricaCasaAntiga"));
const CarregadorVeiculoEletrico = lazy(() => import("@/pages/blog/CarregadorVeiculoEletrico"));
const PoupancaEnergiaInverno = lazy(() => import("@/pages/blog/PoupancaEnergiaInverno"));
const Zonas = lazy(() => import("@/pages/Zonas"));
const CityServicePage = lazy(() => import("@/pages/CityServicePage"));
const FreguesiasPage = lazy(() => import("@/pages/FreguesiasPage"));
const ServiceHub = lazy(() => import("@/pages/ServiceHub"));
const TransparencePrix = lazy(() => import("@/pages/TransparencePrix"));
const Tarifas = lazy(() => import("@/pages/Tarifas"));
const TomadaFaisca = lazy(() => import("@/pages/TomadaFaisca"));
// Commercial Intent Pages (SEO Premium) - Eletricista
const ComoInstalarTomadaSozinho = lazy(() => import("@/pages/ComoInstalarTomadaSozinho"));
const QuantoCustaArranjarQuadroEletrico = lazy(() => import("@/pages/QuantoCustaArranjarQuadroEletrico"));
const QuantoTempoQuadro = lazy(() => import("@/pages/QuantoTempoDemoraT rocarQuadroEletrico"));
const QuantoTempoDemoraInstalarTomada = lazy(() => import("@/pages/QuantoTempoDemoraInstalarTomada"));
const QuantoTempoSemLuzCasa = lazy(() => import("@/pages/QuantoTempoSemLuzCasa"));
// Simple loading fallback component
const LoadingFallback = () => (
 <div className="flex items-center justify-center min-h-[400px]">
 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B35]"></div>
 </div>
);
function Router() {
 return (
 <Suspense fallback={<LoadingFallback />}>
 <Switch>
 <Route path={"/"} component={OptimizedHome} />
 <Route path={"/servicos"} component={Servicos} />
 <Route path={"/quadros-eletricos"} component={QuadrosEletricos} />
 <Route path={"/certificacao-eletrica"} component={CertificacaoEletrica} />
 <Route path={"/instalacao-eletrica"} component={InstalacaoEletrica} />
 <Route path={"/paineis-solares"} component={PaineisSolares} />
 <Route path={"/eletricista-vila-real"} component={VilaReal} />
 <Route path={"/eletricista-braganca"} component={Braganca} />
 <Route path={"/eletricista-chaves"} component={Chaves} />
 <Route path={"/eletricista-mirandela"} component={Mirandela} />
 <Route path={"/eletricista-macedo-cavaleiros"} component={MacedoCavaleiros} />
 <Route path={"/eletricista-vinhais"} component={Vinhais} />
 <Route path={"/eletricista-miranda-douro"} component={MirandaDouro} />
 <Route path={"/eletricista-mogadouro"} component={Mogadouro} />
 <Route path={"/eletricista-torre-moncorvo"} component={TorreMoncorvo} />
 <Route path={"/eletricista-freixo-espada-cinta"} component={FreixoEspadaCinta} />
 <Route path={"/eletricista-valpacos"} component={Valpacos} />
 <Route path={"/eletricista-alfandega-da-fe"} component={AlfandegaDaFe} />
 <Route path={"/eletricista-vila-flor"} component={VilaFlor} />
 <Route path={"/eletricista-carrazeda-de-ansiaes"} component={CarrazedaDeAnsiaes} />
 <Route path={"/eletricista-vimioso"} component={Vimioso} />
 <Route path={"/eletricista-montalegre"} component={Montalegre} />
 <Route path={"/eletricista-boticas"} component={Boticas} />
 <Route path={"/eletricista-murca"} component={Murca} />
 <Route path={"/eletricista-alijo"} component={Alijo} />
 <Route path={"/eletricista-sabrosa"} component={Sabrosa} />
 <Route path={"/eletricista-vila-pouca-de-aguiar"} component={VilaPoucaDeAguiar} />
 <Route path={"/eletricista-ribeira-de-pena"} component={RibeiraDePena} />
 <Route path={"/eletricista-mondim-de-basto"} component={MondimDeBasto} />
 <Route path={"/eletricista-peso-da-regua"} component={PesoDaRegua} />
 <Route path={"/eletricista-lamego"} component={Lamego} />
 <Route path={"/eletricista-vila-nova-foz-coa"} component={VilaNovaFozCoa} />
 <Route path={"/eletricista-sernancelhe"} component={Sernancelhe} />
 <Route path={"/eletricista-penedono"} component={Penedono} />
 <Route path={"/eletricista-sao-joao-da-pesqueira"} component={SaoJoaoDaPesqueira} />
 <Route path={"/eletricista-tabuaco"} component={Tabuaco} />
 <Route path={"/eletricista-armamar"} component={Armamar} />
 <Route path={"/eletricista-santa-marta-de-penaguiao"} component={SantaMartaDePenaguiao} />
 <Route path={"/eletricista-mesao-frio"} component={MesaoFrio} />
 <Route path={"/blog"} component={BlogIndex} />
 <Route path={"/blog/como-instalar-candeeiro-teto-seguranca"} component={ComoInstalarCandeeiroTeto} />
 <Route path={"/blog/poupar-energia-eletrica-dicas"} component={PouparEnergiaEletricaDicas} />
 <Route path={"/blog/quando-trocar-instalacao-eletrica"} component={QuandoTrocarInstalacaoEletrica} />
 <Route path={"/blog/sinais-problemas-eletricos-casa"} component={SinaisProblemasEletricos} />
 <Route path={"/blog/quadro-eletrico-antigo-fusiveis-trocar"} component={QuadroEletricoAntigo} />
 <Route path={"/blog/certificacao-eletrica--guia"} component={CertificacaoEletricaCertiel} />
 <Route path={"/blog/como-escolher-eletricista-certificado"} component={ComoEscolherEletricistaCertificado} />
 <Route path={"/blog/custo-eletricista-tras-os-montes-precos"} component={CustoEletricistaTrasOsMontesPrecos} />
 <Route path={"/blog/paineis-solares-tras-os-montes-guia"} component={PaineisSolaresTrasOsMontesGuia} />
 <Route path={"/blog/automacao-residencial-casa-inteligente"} component={AutomacaoResidencialGuia} />
 <Route path={"/blog/protecao-sobrecargas-eletricas-casa"} component={ProtecaoSobrecargas} />
 <Route path={"/blog/iluminacao-exterior-jardim-guia"} component={IluminacaoExteriorJardim} />
 <Route path={"/blog/instalacao-eletrica-casa-antiga-renovacao"} component={InstalacaoEletricaCasaAntiga} />
 <Route path={"/blog/carregador-veiculo-eletrico-casa"} component={CarregadorVeiculoEletrico} />
 <Route path={"/blog/poupanca-energia-inverno-tras-os-montes"} component={PoupancaEnergiaInverno} />
 <Route path={"/faq"} component={FAQPage} />
 <Route path={"/zonas"} component={Zonas} />
 <Route path={"/transparence-prix"} component={TransparencePrix} />
 <Route path={"/tarifas"} component={Tarifas} />
 <Route path={"/tomada-faisca"} component={TomadaFaisca} />
 {/* Commercial Intent Pages - SEO Premium - Eletricista */}
 <Route path={"/como-instalar-tomada-sozinho"} component={ComoInstalarTomadaSozinho} />
 <Route path={"/quanto-custa-arranjar-quadro-eletrico"} component={QuantoCustaArranjarQuadroEletrico} />
 <Route path={"/quanto-tempo-demora-trocar-quadro-eletrico"} component={QuantoTempoQuadro} />
 <Route path={"/quanto-tempo-demora-instalar-tomada"} component={QuantoTempoDemoraInstalarTomada} />
 <Route path={"/quanto-tempo-sem-luz-casa"} component={QuantoTempoSemLuzCasa} />
 <Route path={"/404"} component={NotFound} />
 {/* Service hub pages */}
 <Route path={"/quadros-eletricos"} component={ServiceHub} />
 <Route path={"/tomadas-interruptores"} component={ServiceHub} />
 <Route path={"/certificacao-"} component={ServiceHub} />
 <Route path={"/iluminacao"} component={ServiceHub} />
 <Route path={"/avarias-urgentes"} component={ServiceHub} />
 {/* Dynamic freguesia pages (498 pages) */}
 <Route path={"/:service-:freguesia-:parentCity"} component={FreguesiasPage} />
 {/* Dynamic city-service pages (100+ pages) */}
 <Route path={"/:service-:city"} component={CityServicePage} />
 {/* Final fallback route */}
 <Route component={NotFound} />
 </Switch>
 </Suspense>
 );
}
// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
// to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook
function App() {
 return (
 <ErrorBoundary>
 <HelmetProvider>
 <ThemeProvider defaultTheme="light">
 <SiteProvider>
 <LocationProvider>
 <TooltipProvider>
 <SkipLink />
 <Toaster />
 <StructuredData />
 <UrgencyIndicator />
 <Suspense fallback={null}>
 <ExitIntentPopup />
 <QuoteCalculator />
 <LocationDetector />
 </Suspense>
 <Router />
 <FloatingCTA />

 <MobileStickyBar />
 </TooltipProvider>
 </LocationProvider>
 </SiteProvider>
 </ThemeProvider>
 </HelmetProvider>
 </ErrorBoundary>
 );
}
export default App;
// force rebuild 1772742742
