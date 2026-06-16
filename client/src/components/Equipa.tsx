import React from 'react';
import { Award, Clock, Shield, Wrench } from 'lucide-react';
export default function Equipa() {
 const badges = [
 {
 icon: <Award className="w-10 h-10" />,
 stat: '350+',
 label: 'Instalações Arranjadas',
 desc: 'Casas de pedra de Bragança, quadros dos anos 70 de Macedo. Já vi tudo, já resolvi tudo.'},
 {
 icon: <Shield className="w-10 h-10" />,
 stat: 'FLIR',
 label: 'Câmara Térmica',
 desc: 'Deteto sobrecargas antes de queimar. O que outros não veem, eu vejo.'},
 {
 icon: <Clock className="w-10 h-10" />,
 stat: 'A confirmar',
 label: 'Chegada a Bragança',
 desc: 'Preço dito ao telefone antes de sair. Se disser 80€, são 80€. Nunca mais.'},
 {
 icon: <Wrench className="w-10 h-10" />,
 stat: '',
 label: 'Certificado em 48h',
 desc: 'Trato de toda a papelada para venda ou arrendamento. Sem complicações.'},
 ];
 return (
 <section id="equipa" className="py-20 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
 Porquê Escolher a Nossa Equipa?
 </h2>
 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
 Gente da terra, que conhece cada rua de Trás-os-Montes e trata a sua casa com respeito.
 </p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
 {badges.map((b, i) => (
 <div
 key={i}
 className="text-center p-8 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:border-[var(--site-primary)] hover:shadow-lg transition-all"
 >
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--site-primary)]/10 text-[var(--site-primary)] mb-4">
 {b.icon}
 </div>
 <div className="text-4xl font-black text-[var(--site-primary)] mb-1">{b.stat}</div>
 <div className="text-lg font-bold text-gray-900 mb-2">{b.label}</div>
 <p className="text-sm text-gray-600">{b.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
