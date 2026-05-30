import React from 'react';
// Header com mega-menu de cidades agrupadas por distrito
import { useSite } from '@/contexts/SiteContext';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useRef, useEffect, memo, useMemo } from 'react';
interface CityItem {
 name: string;
 href: string;
}
interface District {
 name: string;
 cities: CityItem[];
}
function Header() {
 const { config } = useSite();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [citiesOpen, setCitiesOpen] = useState(false);
 const [mobileDistrictOpen, setMobileDistrictOpen] = useState<string | null>(null);
 const dropdownRef = useRef<HTMLDivElement>(null);
 // Memorizar distritos para evitar recriação a cada render
 const districts: District[] = useMemo(() => [
 {
 name: 'Distrito de Bragança',
 cities: [
 { name: 'Bragança', href: '/eletricista-braganca' },
 { name: 'Macedo de Cavaleiros', href: '/eletricista-macedo-de-cavaleiros' },
 { name: 'Mirandela', href: '/eletricista-mirandela' },
 { name: 'Miranda do Douro', href: '/eletricista-miranda-do-douro' },
 { name: 'Mogadouro', href: '/eletricista-mogadouro' },
 { name: 'Vinhais', href: '/eletricista-vinhais' },
 { name: 'Torre de Moncorvo', href: '/eletricista-torre-de-moncorvo' },
 { name: 'Freixo de Espada à Cinta', href: '/eletricista-freixo-de-espada-a-cinta' },
 { name: 'Alfândega da Fé', href: '/eletricista-alfandega-da-fe' },
 { name: 'Vila Flor', href: '/eletricista-vila-flor' },
 { name: 'Carrazeda de Ansiães', href: '/eletricista-carrazeda-de-ansiaes' },
 { name: 'Vimioso', href: '/eletricista-vimioso' },
 ]},
 {
 name: 'Distrito de Vila Real',
 cities: [
 { name: 'Vila Real', href: '/eletricista-vila-real' },
 { name: 'Chaves', href: '/eletricista-chaves' },
 { name: 'Valpaços', href: '/eletricista-valpacos' },
 { name: 'Murça', href: '/eletricista-murca' },
 { name: 'Alijó', href: '/eletricista-alijo' },
 { name: 'Sabrosa', href: '/eletricista-sabrosa' },
 { name: 'Vila Pouca de Aguiar', href: '/eletricista-vila-pouca-de-aguiar' },
 { name: 'Ribeira de Pena', href: '/eletricista-ribeira-de-pena' },
 { name: 'Mondim de Basto', href: '/eletricista-mondim-de-basto' },
 { name: 'Peso da Régua', href: '/eletricista-peso-da-regua' },
 { name: 'Santa Marta de Penaguião', href: '/eletricista-santa-marta-de-penaguiao' },
 { name: 'Mesão Frio', href: '/eletricista-mesao-frio' },
 ]},
 {
 name: 'Distrito de Viseu / Guarda',
 cities: [
 { name: 'Lamego', href: '/eletricista-lamego' },
 { name: 'Moimenta da Beira', href: '/eletricista-moimenta-da-beira' },
 { name: 'São João da Pesqueira', href: '/eletricista-sao-joao-da-pesqueira' },
 { name: 'Tabuaço', href: '/eletricista-tabuaco' },
 { name: 'Armamar', href: '/eletricista-armamar' },
 { name: 'Sernancelhe', href: '/eletricista-sernancelhe' },
 { name: 'Penedono', href: '/eletricista-penedono' },
 { name: 'Vila Nova de Foz Côa', href: '/eletricista-vila-nova-de-foz-coa' },
 ]},
 ], []);
 const totalCities = useMemo(() => districts.reduce((sum, d) => sum + d.cities.length, 0), [districts]);
 useEffect(() => {
 function handleClickOutside(event: MouseEvent) {
 if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
 setCitiesOpen(false);
 }
 }
 document.addEventListener('mousedown', handleClickOutside);
 return () => document.removeEventListener('mousedown', handleClickOutside);
 }, []);
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
 const navItems = [
 { id: 'home', label: 'HOME', action: () => scrollToSection('home') },
 { id: 'servicos', label: 'SERVIÇOS', action: () => (window.location.href = '/servicos') },
 { id: 'cities', label: 'CIDADES', action: () => setCitiesOpen(!citiesOpen), dropdown: true },
 { id: 'blog', label: 'BLOG', action: () => (window.location.href = '/blog') },
 { id: 'faq', label: 'FAQ', action: () => (window.location.href = '/faq') },
 { id: 'precos', label: 'PREÇOS', action: () => (window.location.href = '/transparence-prix') },
 { id: 'contactos', label: 'CONTACTOS', action: () => scrollToSection('contactos') },
 ];
 return (
 <header
 className="sticky top-0 z-50 bg-white border-b-4 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
 style={{ borderBottomColor: config.colors.primary }}
 >
 {/* Top bar */}
 <div className="text-white py-2" style={{ backgroundColor: config.colors.primary }}>
 <div className="container flex items-center justify-center gap-2 text-sm font-semibold">
 <Phone className="w-4 h-4" />
 <a href={`tel:+351${config.phone.replace(/\s/g, '')}`} className="hover:underline">
 LIGUE AGORA: {config.phone}
 </a>
 </div>
 </div>
 {/* Main nav */}
 <div className="container py-4">
 <div className="flex items-center justify-between">
 <a
 href="/"
 className="text-xl font-black tracking-tight hover:opacity-80 transition-opacity"
 style={{ color: config.colors.primary }}
 >
 {config.name}
 </a>
 <nav className="hidden lg:flex items-center gap-5" role="navigation" aria-label="Menu principal">
 {navItems.map((item) => (
 <div key={item.id} className="relative" ref={item.dropdown ? dropdownRef : undefined}>
 <button
 onClick={item.action}
 className="text-sm font-semibold hover:opacity-60 transition-opacity flex items-center gap-1 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
 aria-expanded={item.dropdown ? citiesOpen : undefined}
 aria-haspopup={item.dropdown ? 'true' : undefined}
 >
 {item.label}
 {item.dropdown && (
 <>
 <span className="text-xs opacity-60 ml-0.5">({totalCities})</span>
 <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${citiesOpen ? 'rotate-180' : ''}`} />
 </>
 )}
 </button>
 {/* Mega-menu desktop */}
 {item.dropdown && (
 <div
 className={`absolute top-full -left-32 mt-3 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50 transition-all duration-200 origin-top ${
 citiesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
 }`}
 style={{ minWidth: '680px' }}
 role="navigation"
 aria-label="Cidades por distrito"
 >
 <div className="grid grid-cols-3 gap-6">
 {districts.map((district) => (
 <div key={district.name}>
 <h3 className="font-bold text-gray-900 text-sm mb-2 pb-1 border-b-2" style={{ borderColor: config.colors.primary }}>
 {district.name}
 </h3>
 <ul className="space-y-0.5">
 {district.cities.map((city) => (
 <li key={city.href}>
 <a
 href={city.href}
 className="block px-2 py-1 text-sm text-gray-600 rounded hover:text-white transition-colors duration-150"
 onMouseEnter={(e) => {
 (e.target as HTMLElement).style.backgroundColor = config.colors.primary;
 (e.target as HTMLElement).style.color = '#fff';
 }}
 onMouseLeave={(e) => {
 (e.target as HTMLElement).style.backgroundColor = 'transparent';
 (e.target as HTMLElement).style.color = '#4b5563';
 }}
 >
 ⚡ {city.name}
 </a>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 <div className="mt-4 pt-3 border-t border-gray-100 text-center">
 <span className="text-xs text-gray-400">
 {totalCities} cidades cobertas em Trás-os-Montes
 </span>
 </div>
 </div>
 )}
 </div>
 ))}
 </nav>
 {/* Mobile: phone button + hamburger */}
 <div className="flex items-center gap-2 lg:hidden">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-white transition-colors"
 style={{ backgroundColor: config.colors.primary }}
 aria-label={`Ligar para ${config.phone}`}
 >
 <Phone className="w-5 h-5" />
 </a>
 <button
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
 aria-label="Abrir menu"
 >
 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </div>
 <Button
 onClick={() =>
 window.open(
 `https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`,
 '_blank'
 )
 }
 className="hidden lg:flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]"
 >
 Fale connosco no WhatsApp
 </Button>
 </div>
 </div>
 {/* Mobile menu */}
 {mobileMenuOpen && (
 <div className="lg:hidden border-t-2 bg-white max-h-[70vh] overflow-y-auto" style={{ borderTopColor: config.colors.primary }}>
 <nav className="container py-4 flex flex-col gap-1" role="navigation" aria-label="Menu mobile">
 <a href="/" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">HOME</a>
 <a href="/servicos" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">SERVIÇOS</a>
 {/* Mobile cities accordion */}
 <div>
 <button
 onClick={() => setMobileDistrictOpen(mobileDistrictOpen ? null : 'all')}
 className="w-full text-left text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 flex items-center justify-between"
 aria-expanded={!!mobileDistrictOpen}
 >
 <span>CIDADES <span className="text-xs font-normal opacity-60">({totalCities})</span></span>
 <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDistrictOpen ? 'rotate-180' : ''}`} />
 </button>
 {mobileDistrictOpen && (
 <div className="pl-2 mt-1 space-y-2">
 {districts.map((district) => (
 <div key={district.name}>
 <button
 onClick={() =>
 setMobileDistrictOpen(mobileDistrictOpen === district.name ? 'all' : district.name)
 }
 className="w-full text-left text-sm font-bold py-1.5 px-4 rounded flex items-center justify-between"
 style={{ color: config.colors.primary }}
 >
 {district.name}
 <ChevronDown
 className={`w-3 h-3 transition-transform duration-200 ${
 mobileDistrictOpen === district.name || mobileDistrictOpen === 'all' ? 'rotate-180' : ''
 }`}
 />
 </button>
 {(mobileDistrictOpen === district.name || mobileDistrictOpen === 'all') && (
 <div className="pl-4 space-y-0.5">
 {district.cities.map((city) => (
 <a
 key={city.href}
 href={city.href}
 className="block py-1.5 px-3 text-sm text-gray-600 rounded hover:bg-gray-50 transition-colors"
 >
 ⚡ {city.name}
 </a>
 ))}
 </div>
 )}
 </div>
 ))}
 </div>
 )}
 </div>
 <a href="/blog" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">BLOG</a>
 <a href="/faq" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">FAQ</a>
 <a href="/transparence-prix" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">PREÇOS</a>
 <Button
 onClick={() => {
 window.open(
 `https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`,
 '_blank'
 );
 setMobileMenuOpen(false);
 }}
 className="w-full bg-green-700 hover:bg-green-800 text-white font-bold mt-2"
 >
 Fale connosco no WhatsApp
 </Button>
 </nav>
 </div>
 )}
 </header>
 );
}
export default React.memo(Header);
