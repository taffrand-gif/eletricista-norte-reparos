import React from 'react';
// Footer com navegação funcional e informações de contacto
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, MapPin } from 'lucide-react';
// memo removed from 'react';
function Footer() {
 const { config } = useSite();
 const scrollToSection = (id: string) => {
 if (window.location.pathname !== '/') {
 window.location.href = `/#${id}`;
 return;
 }
 const element = document.getElementById(id);
 if (element) {
 element.scrollIntoView({ behavior: 'smooth' });
 }
 };
 return (
 <footer 
 className="text-white py-16"
 style={{ backgroundColor: config.colors.primaryDark }}
 >
 <div className="container">
 <div className="grid md:grid-cols-4 gap-8 mb-12">
 {/* Informação da empresa */}
 <div>
 <h3 className="text-2xl font-black mb-4">{config.name}</h3>
 <p className="text-gray-200 mb-4">
 {config.company.shortDescription}
 </p>
 <p className="text-gray-100 text-sm mb-4">
 Cobertura em toda a região de {config.company.coverage}.
 </p>
 <p className="text-white text-sm font-bold italic border-l-2 border-white pl-3">
 "Orgulho Transmontano. Aqui para servir o Norte."
 </p>
 </div>
 {/* Serviços */}
 <div>
 <h4 className="text-lg font-black mb-4">Serviços</h4>
 <ul className="space-y-2 text-sm">
 <li><a href="/instalacao-eletrica-completa" className="text-gray-200 hover:text-white transition-colors">Instalação Elétrica</a></li>
 <li><a href="/quadros-eletricos-modernizacao" className="text-gray-200 hover:text-white transition-colors">Quadros Elétricos</a></li>
 <li><a href="/certificacao-eletrica-tras-os-montes" className="text-gray-200 hover:text-white transition-colors">certificação elétrica</a></li>
 <li><a href="/arranjacao-avarias-eletricas" className="text-gray-200 hover:text-white transition-colors">Arranjo Avarias</a></li>
 <li><a href="/iluminacao-led-profissional" className="text-gray-200 hover:text-white transition-colors">Iluminação LED</a></li>
 <li><a href="/instalacao-paineis-solares-tras-os-montes" className="text-gray-200 hover:text-white transition-colors">Painéis Solares</a></li>
 </ul>
 </div>
 {/* Zonas */}
 <div>
 <h4 className="text-lg font-black mb-4">Zonas</h4>
 <ul className="space-y-2 text-sm">
 <li><a href="/eletricista-braganca" className="text-gray-200 hover:text-white transition-colors">Bragança</a></li>
 <li><a href="/eletricista-mirandela" className="text-gray-200 hover:text-white transition-colors">Mirandela</a></li>
 <li><a href="/eletricista-macedo-cavaleiros" className="text-gray-200 hover:text-white transition-colors">Macedo de Cavaleiros</a></li>
 <li><a href="/eletricista-mogadouro" className="text-gray-200 hover:text-white transition-colors">Mogadouro</a></li>
 <li><a href="/eletricista-miranda-douro" className="text-gray-200 hover:text-white transition-colors">Miranda do Douro</a></li>
 <li><a href="/zonas" className="text-gray-200 hover:text-white transition-colors font-semibold">Ver todas →</a></li>
 </ul>
 </div>
 {/* Blog */}
 <div>
 <h4 className="text-lg font-black mb-4">Blog</h4>
 <ul className="space-y-2 text-sm">
 <li><a href="/blog/como-escolher-eletricista-certificado" className="text-gray-200 hover:text-white transition-colors">Como Escolher Eletricista</a></li>
 <li><a href="/blog/quadro-eletrico-disjuntores-disparar" className="text-gray-200 hover:text-white transition-colors">Disjuntores Disparam</a></li>
 <li><a href="/blog/certificacao--obrigatoria" className="text-gray-200 hover:text-white transition-colors">certificação elétrica</a></li>
 <li><a href="/blog" className="text-gray-200 hover:text-white transition-colors font-semibold">Ver todos →</a></li>
 </ul>
 </div>
 {/* Contacto */}
 <div>
 <h4 className="text-lg font-black mb-4">Contacto</h4>
 <ul className="space-y-4">
 <li className="flex items-start gap-3">
 <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
 <div>
 <p className="font-bold">Telefone:</p>
 <a 
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="text-gray-200 hover:text-white transition-colors"
 >
 {config.phone}
 </a>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
 <div>
 <p className="font-bold">Horário:</p>
 <p className="text-gray-200">24 horas por dia, 7 dias por semana</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
 <div>
 <p className="font-bold">Zona de Cobertura:</p>
 <p className="text-gray-200">Trás-os-Montes — Bragança, Macedo de Cavaleiros, Mirandela e região</p>
 </div>
 </li>
 </ul>
 </div>
 </div>
 {/* Certificações e Garantias */}
 <div className="pt-8 border-t-2 border-white/20">
 <div className="text-center mb-6">
 <h4 className="text-lg font-bold mb-4">🏆 Certificações e Garantias</h4>
 <div className="flex flex-wrap justify-center gap-6 items-center">
 {/* Badge DGEG */}
 <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-white/30 hover:bg-white/20 transition-all">
 <div className="text-2xl mb-2">⚡</div>
 <div className="text-sm font-bold text-white">Certificação DGEG</div>
 <div className="text-xs text-gray-100">Instalações Legais</div>
 </div>
 {/* Badge */}
 <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-white/30 hover:bg-white/20 transition-all">
 <div className="text-2xl mb-2">📋</div>
 <div className="text-sm font-bold text-white"></div>
 <div className="text-xs text-gray-100">Certificação Oficial</div>
 </div>
 {/* Badge Isenção IVA */}
 <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-white/30 hover:bg-white/20 transition-all">
 <div className="text-2xl mb-2">📄</div>
 <div className="text-sm font-bold text-white">Isenção IVA</div>
 <div className="text-xs text-gray-100">Art.º 53.º CIVA</div>
 </div>
 {/* Badge Garantia */}
 <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-white/30 hover:bg-white/20 transition-all">
 <div className="text-2xl mb-2">🛡️</div>
 <div className="text-sm font-bold text-white">Garantia Escrita</div>
 <div className="text-xs text-gray-100">6 meses mão de obra</div>
 </div>
 {/* Badge Preços Transparentes */}
 <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-white/30 hover:bg-white/20 transition-all">
 <div className="text-2xl mb-2">💰</div>
 <div className="text-sm font-bold text-white">Preços Públicos</div>
 <div className="text-xs text-gray-100">100% Transparente</div>
 </div>
 {/* Badge Equipamento PRO */}
 <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-white/30 hover:bg-white/20 transition-all">
 <div className="text-2xl mb-2">🔧</div>
 <div className="text-sm font-bold text-white">Equipamento PRO</div>
 <div className="text-xs text-gray-100">€10.000+ investido</div>
 </div>
 </div>
 </div>
 </div>
 {/* Copyright */}
 <div className="pt-8 border-t-2 border-white/20 text-center text-gray-100 text-sm">
 © {new Date().getFullYear()} {config.name}. Todos os direitos reservados.
 <div className="mt-2 text-xs text-gray-200">
 Morada: Macedo de Cavaleiros, Trás-os-Montes, Portugal
 </div>
 <div className="mt-3 text-xs text-gray-300">
 <strong>Outros serviços:</strong> Precisa de canalizador profissional? Visite <a href="https://canalizador-norte-reparos.pt" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">canalizador-norte-reparos.pt</a>
 </div>
 <div className="mt-2 text-xs text-gray-300">
 <strong>Urgência imediata?</strong> <a href="https://eletricista-urgente.pt" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">eletricista-urgente.pt</a> • <a href="https://canalizador-urgente.pt" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">canalizador-urgente.pt</a>
 </div>
 <div className="mt-4 flex justify-center">
 <a target="_blank" href="https://www.zaask.pt/user/fbraganca204" rel="noopener noreferrer">
 <img src="https://www.zaask.pt/widget?user=1030479&widget=pro-since" alt="Perfil Zaask" loading="lazy" />
 </a>
 </div>
 </div>
 </div>
 </footer>
 );
}
export default React.memo(Footer);
