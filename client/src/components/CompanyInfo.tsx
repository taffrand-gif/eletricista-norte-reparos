// Design: Layout de Serviço Profissional
// - Layout assimétrico com texto e imagem
// - Bordas grossas e títulos em negrito
// - Propostas de valor claras com marcas de verificação
import { useSite } from '@/contexts/SiteContext';
import { Check } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
const EMERGENCY_SERVICE_IMAGE = 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/Zd5MIfeKcoQdjH54bmsaCu-img-5_1770593728000_na1fn_ZW1lcmdlbmN5LXNlcnZpY2UtMjRo.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L1pkNU1JZmVLY29RZGpINTRibXNhQ3UtaW1nLTVfMTc3MDU5MzcyODAwMF9uYTFmbl9aVzFsY21kbGJtTjVMWE5sY25acFkyVXRNalJvLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TajhBowNnHjmfC2EyR~ZbpeBmVYls4qExj4TKXSoTkZr8GlZmLRxhMAtmuoTpnD7tAfzLV5f~vlhG2I-eJJAS2VsPgaXssgJOhI5pyvQ6l85qFUZNjuqPviU0Rjn0Luz0VxQjs9iYNO7oLIe7bxKKUpytgqf2DvLvQlmi5zQLtzpboDHhHf2RwBYh2OvSAzBulJtrS0g7LKPLmbxekTZtzLpLofrs-2jDFmgJuX5SvzCapHPw8RuQFCUAGpEMqTibxECx90GPEjDDjeHF-ZNm5CSH~f35jr7GP-raYVDCFyi7qeDegTYsIYz98BrR4xnDp~QN4877L9Ze05CX0gZ5A__';
export default function CompanyInfo() {
 const { config } = useSite();
 const reasons = [
 {
 title: 'Confiança Local',
 description: 'Os nossos técnicos são da terra. Identificados, educados e discretos. Tratamos a sua casa como se fosse nossa.'},
 {
 title: 'Preço Justo e Afixado',
 description: 'Tabela de deslocação fixa por concelho. Sem taxímetro a correr. Sabe o preço antes de começarmos.'},
 {
 title: 'Vamos a Todas as Aldeias',
 description: 'Se há estrada, nós vamos. Seja no centro da cidade ou na aldeia mais isolada da serra.'},
 {
 title: 'Disponibilidade 24/7',
 description: 'Estamos cá para si nos feriados, fins-de-semana e no meio da noite. O problema não escolhe hora.'},
 ];
 return (
 <section id="servicos" className="py-20 bg-white">
 <div className="container">
 {/* Main description */}
 <div className="max-w-4xl mx-auto mb-20">
 <p className="text-lg leading-relaxed text-gray-700 mb-6">
 {config.company.longDescription}
 </p>
 <p className="text-lg leading-relaxed text-gray-700">
 Temos ao seu dispor uma equipa experiente de {(config.serviceType || "").toLowerCase()}s credenciados e de equipamentos adequados a todo o tipo de situações de maior ou menor gravidade, que possam ocorrer tanto em espaços domésticos (apartamentos, moradias e condomínios), como em espaços empresariais (restaurantes, comércios, escolas, ginásios, hotéis, hospitais, etc.).
 </p>
 </div>
 {/* Reasons section with image */}
 <div className="mb-20">
 <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
 Razões para selecionar a {config.name}
 </h2>
 <div className="grid md:grid-cols-2 gap-12 items-center">
 {/* Reasons list */}
 <div className="space-y-6">
 {reasons.map((reason, index) => (
 <div 
 key={index}
 className="flex gap-4 p-4 border-l-4"
 style={{ borderColor: config.colors.primary }}
 >
 <div 
 className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white"
 style={{ backgroundColor: config.colors.primary }}
 >
 <Check className="w-5 h-5" />
 </div>
 <div>
 <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
 <p className="text-gray-600">{reason.description}</p>
 </div>
 </div>
 ))}
 </div>
 {/* Image */}
 <div
 className="border-4 overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]"
 style={{ borderColor: config.colors.primary }}
 >
 <OptimizedImage
 src={EMERGENCY_SERVICE_IMAGE}
 alt="Eletricista profissional em serviço de urgência 24h em Trás-os-Montes"
 loading="lazy"
 className="w-full h-auto"
 width={800}
 height={600}
 objectFit="cover"
 />
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
