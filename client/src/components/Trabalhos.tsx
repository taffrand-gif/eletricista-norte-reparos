import React from 'react';
// Secção Trabalhos Realizados - portfolio adaptado ao site ativo
import { useSite } from '@/contexts/SiteContext';
import { CheckCircle } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { useAnalytics } from '@/hooks/useAnalytics';
// memo removed from 'react';
function Trabalhos() {
 const { config } = useSite();
 const { trackPhoneClick } = useAnalytics();
 const isPlumber = config.id === 'norte-reparos';
 const plumbProjects = [
 {
 title: 'Remodelação Completa de Casa de Banho',
 location: 'Bragança',
 description: 'Substituição completa de canalizações, instalação de novos sanitários e acabamentos modernos numa moradia familiar.',
 image: '/images-optimized/services/service-sala-banho.jpg'},
 {
 title: 'Instalação de Esquentador a Gás',
 location: 'Trás-os-Montes',
 description: 'Substituição de esquentador antigo por modelo eficiente com certificação e ligação de gás completa.',
 image: '/images-optimized/services/service-aquecimento.jpg'},
 {
 title: 'Desentupimento de Rede de Esgotos',
 location: 'Mirandela',
 description: 'Limpeza profunda de rede de esgotos com equipamento especializado num condomínio residencial.',
 image: '/images-optimized/services/service-desentupimentos.jpg'},
 {
 title: 'Arranjo de Fuga em Condomínio',
 location: 'Miranda do Douro',
 description: 'Deteção e arranjo de fuga de água em canalização enterrada sem danificar estruturas existentes.',
 image: '/images-optimized/services/service-urgencia.jpg'},
 {
 title: 'Instalação de Sistema de Aquecimento',
 location: 'Vinhais',
 description: 'Instalação de caldeira de condensação e radiadores em moradia, com sistema de água quente centralizado.',
 image: '/images-optimized/services/service-aquecimento.jpg'},
 {
 title: 'Renovação de Instalações Comerciais',
 location: 'Bragança',
 description: 'Renovação completa das instalações sanitárias de restaurante, incluindo canalização nova e equipamentos.',
 image: '/images-optimized/services/service-instalacao.jpg'},
 ];
 const electricProjects = [
 {
 title: 'Substituição de Quadro Elétrico',
 location: 'Bragança',
 description: 'Substituição de quadro elétrico antigo com fusíveis por quadro moderno com disjuntores diferenciais e certificação.',
 image: '/images-optimized/services/service-quadro-eletrico.jpg'},
 {
 title: 'Instalação Elétrica Completa',
 location: 'Trás-os-Montes',
 description: 'Instalação elétrica completa numa moradia nova, desde o quadro principal até às tomadas e iluminação.',
 image: '/images-optimized/services/service-instalacao.jpg'},
 {
 title: 'certificação elétrica para Venda',
 location: 'Mirandela',
 description: 'Inspeção completa, correção de anomalias e emissão de certificado elétrico para venda de imóvel.',
 image: '/images-optimized/services/service-certificacao.jpg'},
 {
 title: 'Iluminação LED Residencial',
 location: 'Miranda do Douro',
 description: 'Projeto e instalação de iluminação LED em toda a casa, com redução significativa no consumo energético.',
 image: '/images-optimized/services/service-iluminacao.jpg'},
 {
 title: 'Arranjo de Curto-Circuito',
 location: 'Vinhais',
 description: 'Diagnóstico e arranjo de curto-circuito que causava disparo frequente do disjuntor principal.',
 image: '/images-optimized/services/service-urgencia.jpg'},
 {
 title: 'Instalação Elétrica Comercial',
 location: 'Bragança',
 description: 'Instalação elétrica completa para novo espaço comercial, com quadro trifásico e iluminação profissional.',
 image: '/images-optimized/services/service-quadro-eletrico.jpg'},
 ];
 const projects = isPlumber ? plumbProjects : electricProjects;
 return (
 <section id="trabalhos" className="py-20 bg-white">
 <div className="container">
 {/* Cabeçalho */}
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-4">
 Trabalhos Realizados
 </h2>
 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
 Veja alguns dos nossos projetos concluídos com sucesso em Trás-os-Montes. Cada trabalho é realizado com o máximo rigor e profissionalismo.
 </p>
 </div>
 {/* Grelha de projetos */}
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {projects.map((project, index) => (
 <div
 key={index}
 className="bg-white border-4 overflow-hidden shadow-[6px_6px_0_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
 style={{ borderColor: config.colors.primary }}
 >
 {/* Imagem */}
 <div className="aspect-[4/3] overflow-hidden">
 <OptimizedImage
 src={project.image}
 alt={`${project.title} em ${project.location} - Trabalho realizado por ${isPlumber ? 'canalizador' : 'eletricista'} profissional com experiência`}
 className="w-full h-full hover:scale-105 transition-transform duration-300"
 width={400}
 height={300}
 objectFit="cover"
 />
 </div>
 {/* Conteúdo */}
 <div className="p-6">
 <div className="flex items-start gap-2 mb-3">
 <CheckCircle 
 className="w-6 h-6 flex-shrink-0 mt-1" 
 style={{ color: config.colors.primary }}
 />
 <h3 className="font-black text-xl leading-tight">
 {project.title}
 </h3>
 </div>
 
 <p className="text-sm font-bold mb-2" style={{ color: config.colors.primary }}>
 {project.location}
 </p>
 
 <p className="text-gray-700 leading-relaxed">
 {project.description}
 </p>
 </div>
 </div>
 ))}
 </div>
 {/* CTA */}
 <div className="mt-16 text-center">
 <div className="inline-block p-8 border-4 bg-gray-50" style={{ borderColor: config.colors.primary }}>
 <p className="text-xl font-black mb-4">
 Quer um trabalho com esta qualidade?
 </p>
 <p className="text-gray-600 mb-6">
 Contacte-nos para um sem compromisso e sem compromisso.
 </p>
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 onClick={() => trackPhoneClick(config.phone)}
 className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
 style={{ backgroundColor: config.colors.primary }}
 aria-label={`Ligar agora para ${config.phone}`}
 >
 LIGUE AGORA: {config.phone}
 </a>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(Trabalhos);
