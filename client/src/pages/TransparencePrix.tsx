import React from 'react';
import { useSite } from '@/contexts/SiteContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Euro, Clock, Shield, Check, TrendingUp, Award, Users, Zap, AlertCircle, Phone } from 'lucide-react';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger} from '@/components/ui/accordion';
export default function TransparencePrix() {
 const { config } = useSite();
 // Preços detalhados por serviço
 const forfaits = [
 {
 title: "Pequena Arranjo",
 price: "30€ + 70€/hora (dia); 50€ + 100€/hora (noite/fim de semana/feriado)",
 duration: "30 min",
 includes: [
 "Troca de tomadas ou interruptores",
 "Instalação de pontos de luz",
 "Pequenos ajustes elétricos",
 "Material básico incluído"
 ]
 },
 {
 title: "Intervenção Standard",
 price: "30€ + 70€/hora (dia); 50€ + 100€/hora (noite/fim de semana/feriado)",
 duration: "1h",
 includes: [
 "Diagnóstico completo com multímetro",
 "Resolução de avarias elétricas",
 "Arranjo de curto-circuitos",
 "Fatura com NIF"
 ]
 },
 {
 title: "Quadro Elétrico Básico",
 price: "30€ + 70€/hora (dia); 50€ + 100€/hora (noite/fim de semana/feriado)",
 duration: "2-3h",
 includes: [
 "Quadro 4-6 circuitos",
 "Disjuntores de qualidade",
 "Instalação completa",
 "Fatura com NIF"
 ]
 },
 {
 title: "Quadro Elétrico Completo",
 price: "30€ + 70€/hora (dia); 50€ + 100€/hora (noite/fim de semana/feriado)",
 duration: "3-5h",
 includes: [
 "Quadro 8-12 circuitos",
 "Disjuntores diferencial + magnetotérmicos",
 "Instalação e ligação",
 "Fatura com NIF"
 ]
 },
 {
 title: "Vistoria de Segurança Elétrica",
 price: "30€ + 70€/hora (dia); 50€ + 100€/hora (noite/fim de semana/feriado)",
 duration: "1-2h",
 includes: [
 "Vistoria técnica completa",
 "Testes de segurança",
 "Trabalho detalhado",
 "Diagnóstico elétrico completo"
 ]
 },
 {
 title: "Intervenção Urgente",
 price: "30 € + 70 €/hora (dia); 50 € + 100 €/hora (noite, fim de semana e feriado)",
 duration: "Conforme disponibilidade",
 includes: [
 "Disponibilidade confirmada por telefone",
 "Disponível Atendimento 24h/7d",
 "Fins de semana e feriados",
 "Resolução no local"
 ]
 }
 ];
 // Taux horaire et majorations (RÈGLE OFFICIELLE Philippe)
 const tauxHoraire = {
 base: "70€/hora",
 majoracao: "Noite, fim de semana e feriado: 100 €/hora + deslocação 50 €",
 weekend: "100 €/hora",
 urgent: "100 €/hora",
 deplacement: "30 € (dia) / 50 € (noite, fim de semana e feriado)"
 };
 // FAQ Prix
 const faqPrix = [
 {
 question: "Como é calculado o preço?",
 answer: "Mão de obra à hora e deslocação, segundo a grelha publicada nesta página (valores TTC): das 09h00 às 18h00, 70 €/hora e 30 € de deslocação; à noite, aos fins de semana e feriados, 100 €/hora e 50 € de deslocação. Cada hora iniciada é devida. O trabalho é executado conforme a legislação portuguesa e com fatura."
 },
 {
 question: "O preço final pode ser diferente da estimativa?",
 answer: "Pode. O valor final depende do tempo de trabalho efetivo e do material necessário. Se durante a intervenção surgirem problemas adicionais, paramos, explicamos o que encontrámos e só continuamos com a sua autorização."
 },
 {
 question: "A deslocação está incluída no preço?",
 answer: "Não. Das 09h00 às 18h00: mão de obra 70 €/hora e deslocação 30 €. Noite (18h–9h), fins de semana e feriados: 100 €/hora e deslocação 50 €. É cobrado uma única vez por intervenção, mesmo que demore vários dias."
 },
 {
 question: "Porque devo escolher-vos em vez de um eletricista mais barato?",
 answer: "Porque um trabalho elétrico mal feito pode causar danos graves. Trabalhamos conforme a legislação portuguesa, com fatura e com seguro de responsabilidade civil profissional até 50.000 €."
 }
 ];
 return (
 <>
 <SEOHead
 title={`Transparência de Preços - Um eletricista profissional de Trás-os-Montes que Publica os Seus Preços | ${config.name}`}
 description="Somos Um eletricista profissional em Trás-os-Montes com preços 100% transparentes publicados online. Veja todos os nossos preços, sem surpresas, sem letra pequena. serviços elétricos com mão de obra e deslocação segundo a grelha horária oficial. "
 />
 <Header />
 <main>
 {/* Hero Section */}
 <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
 <div className="absolute inset-0 opacity-10">
 <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--site-primary)] rounded-full blur-3xl"></div>
 <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
 </div>
 <div className="container relative z-10">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-block mb-6 px-6 py-2 bg-[var(--site-primary)] text-white font-bold rounded-full text-sm">
 TRANSPARÊNCIA DE PREÇOS
 </div>
 <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
 Eletricista em<br />
 Trás-os-Montes com<br />
 <span className="text-[var(--site-primary)]">Preços Publicados</span>
 </h1>
 <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
 Enquanto a concorrência esconde os preços e dá "surpresas" na fatura,<br />
 nós publicamos TUDO online. Sem letra pequena. Sem truques.
 </p>
 <div className="flex flex-wrap justify-center gap-4 mb-12">
 <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
 <Check className="w-5 h-5 text-green-400" />
 <span className="font-semibold">Preços Publicados</span>
 </div>
 <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
 <Check className="w-5 h-5 text-green-400" />
 <span className="font-semibold">Orçamento por Escrito</span>
 </div>
 <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
 <Check className="w-5 h-5 text-green-400" />
 <span className="font-semibold">Fatura com NIF</span>
 </div>
 </div>
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--site-primary)] text-white font-bold text-lg rounded-lg hover:bg-[var(--site-primary-dark)] transition-all shadow-2xl hover:scale-105"
 >
 <Phone className="w-6 h-6" />
 Ligue Agora: {config.phone}
 </a>
 </div>
 </div>
 </section>
 {/* Forfaits Grid */}
 <section className="py-20 bg-white">
 <div className="container">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-4">
 Todos os Nossos <span className="text-[var(--site-primary)]">Preços</span>
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Valores TTC (IVA incluído). Mão de obra à hora e deslocação, segundo a grelha oficial.
 </p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
 {forfaits.map((forfait, idx) => (
 <div
 key={idx}
 className="bg-white border-4 rounded-xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1"
 style={{ borderColor: config.colors.primary }}
 >
 <div className="flex items-start justify-between mb-4">
 <h3 className="text-xl font-bold text-gray-900">{forfait.title}</h3>
 <Clock className="w-5 h-5 text-gray-400" />
 </div>
 <div className="mb-4">
 <div className="text-3xl font-black text-[var(--site-primary)] mb-1">
 {forfait.price}
 </div>
 <div className="text-sm text-gray-500">{forfait.duration}</div>
 </div>
 <ul className="space-y-2">
 {forfait.includes.map((item, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
 <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
 <span>{item}</span>
 </li>
))}
 </ul>
 </div>
))}
 </div>
 </div>
 </section>
 {/* Taxa Horária */}
 <section className="py-20 bg-gray-50">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-4xl font-black mb-12 text-center">
 Taxa Horária & <span className="text-[var(--site-primary)]">Acréscimos</span>
 </h2>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="bg-white p-8 rounded-xl border-4" style={{ borderColor: config.colors.primary }}>
 <div className="flex items-center gap-3 mb-4">
 <Euro className="w-8 h-8 text-[var(--site-primary)]" />
 <div>
 <div className="text-sm text-gray-600">Taxa Horária Base</div>
 <div className="text-3xl font-black text-gray-900">{tauxHoraire.base}</div>
 </div>
 </div>
 <p className="text-sm text-gray-600">
 Para trabalhos que não se enquadram nos exemplos acima. Cada hora iniciada é devida.
 </p>
 </div>
 <div className="bg-white p-8 rounded-xl border-4 border-gray-200">
 <div className="flex items-center gap-3 mb-4">
 <Clock className="w-8 h-8 text-orange-600" />
 <div>
 <div className="text-sm text-gray-600">Fins de Semana</div>
 <div className="text-2xl font-black text-gray-900">{tauxHoraire.weekend}</div>
 </div>
 </div>
 <p className="text-sm text-gray-600">
 À noite (18h–9h), aos fins de semana e feriados: 100 €/hora e deslocação 50 €. Cada hora iniciada é devida.
 </p>
 </div>
 <div className="bg-white p-8 rounded-xl border-4 border-gray-200">
 <div className="flex items-center gap-3 mb-4">
 <Zap className="w-8 h-8 text-red-600" />
 <div>
 <div className="text-sm text-gray-600">Majoração Noturna</div>
 <div className="text-3xl font-black text-gray-900">{tauxHoraire.urgent}</div>
 </div>
 </div>
 <p className="text-sm text-gray-600">
 Noite, fim de semana e feriado: 100 €/hora + deslocação 50 €. Cada hora iniciada é devida.
 </p>
 </div>
 <div className="bg-white p-8 rounded-xl border-4 border-gray-200">
 <div className="flex items-center gap-3 mb-4">
 <AlertCircle className="w-8 h-8 text-blue-600" />
 <div>
 <div className="text-sm text-gray-600">Deslocação</div>
 <div className="text-3xl font-black text-gray-900">{tauxHoraire.deplacement}</div>
 </div>
 </div>
 <p className="text-sm text-gray-600">
 Cobrado uma vez por intervenção. Cobre gasóleo e desgaste.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* Pourquoi Plus Cher */}
 <section className="py-20 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-4">
 O Que Está<br />
 <span className="text-[var(--site-primary)]">Por Trás do Preço</span>
 </h2>
 <p className="text-xl text-gray-600">
 Mão de obra, deslocação e fatura, sem texto escondido
 </p>
 </div>
 <div className="grid md:grid-cols-2 gap-8">
 <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
 <Award className="w-12 h-12 text-blue-600 mb-4" />
 <h3 className="text-xl font-bold mb-3 text-gray-900">eletricistas com experiência</h3>
 <p className="text-gray-700 leading-relaxed">
 Trabalho executado por técnico qualificado, conforme a legislação portuguesa
 e as normas aplicáveis.
 </p>
 </div>
 <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-200">
 <Shield className="w-12 h-12 text-green-600 mb-4" />
 <h3 className="text-xl font-bold mb-3 text-gray-900">Materiais adequados</h3>
 <p className="text-gray-700 leading-relaxed">
 Materiais adequados a cada instalação, conforme as normas aplicáveis.
 </p>
 </div>
 <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-200">
 <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
 <h3 className="text-xl font-bold mb-3 text-gray-900">Estimativa clara</h3>
 <p className="text-gray-700 leading-relaxed">
 Estimativa indicativa à distância, com descrição e fotos suficientes.
 Orçamento por escrito antes das intervenções planeadas.
 </p>
 </div>
 <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-2 border-orange-200">
 <Users className="w-12 h-12 text-orange-600 mb-4" />
 <h3 className="text-xl font-bold mb-3 text-gray-900">Seguro & Legalidade</h3>
 <p className="text-gray-700 leading-relaxed">
 Seguro de responsabilidade civil profissional até 50.000 €.
 Fatura legal em todas as intervenções.
 </p>
 </div>
 </div>
 <div className="mt-12 bg-gray-900 text-white p-8 rounded-xl text-center">
 <p className="text-2xl font-bold mb-4">
 O Barato Sai Caro em Eletricidade
 </p>
 <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
 Um trabalho elétrico mal feito pode causar incêndios, eletrocussões, e danos em equipamentos.
 Poupar 20€ hoje pode custar-lhe milhares amanhã. Trabalhamos com segurança e conforme as normas.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Seguro e fatura */}
 <section className="py-20 bg-gradient-to-br from-[var(--site-primary)] to-[var(--site-primary-dark)] text-white">
 <div className="container">
 <div className="max-w-4xl mx-auto text-center">
 <Shield className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 Seguro e Fatura<br />
 </h2>
 <p className="text-xl text-white/90 mb-12 leading-relaxed">
 Fatura legal em todas as intervenções, com NIF. Seguro de responsabilidade civil profissional até 50.000 €.
 </p>
 <div className="grid md:grid-cols-3 gap-6 mb-12">
 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
 <div className="text-3xl font-black mb-2">70 €/hora</div>
 <div className="text-white/80">09h00–18h00 + 30 € de deslocação</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
 <div className="text-3xl font-black mb-2">100 €/hora</div>
 <div className="text-white/80">Noite, fim de semana, feriado + 50 € de deslocação</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
 <div className="text-3xl font-black mb-2">TTC</div>
 <div className="text-white/80">IVA incluído</div>
 </div>
 </div>
 </div>
 </div>
 </section>
 {/* FAQ Prix */}
 <section className="py-20 bg-white">
 <div className="container">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-black mb-4">
 Perguntas Frequentes sobre <span className="text-[var(--site-primary)]">Preços</span>
 </h2>
 <p className="text-xl text-gray-600">
 Transparência total. Sem dúvidas, sem surpresas.
 </p>
 </div>
 <Accordion type="single" collapsible className="space-y-4">
 {faqPrix.map((faq, index) => (
 <AccordionItem
 key={index}
 value={`item-${index}`}
 className="border-4 bg-white px-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]"
 style={{ borderColor: config.colors.primary }}
 >
 <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
))}
 </Accordion>
 </div>
 </div>
 </section>
 {/* CTA Final */}
 <section className="py-20 bg-gray-900 text-white">
 <div className="container">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 Pronto para pedir<br />
 <span className="text-[var(--site-primary)]">uma estimativa?</span>
 </h2>
 <p className="text-xl text-gray-300 mb-8 leading-relaxed">
 Ligue agora. Diga-nos onde está e o que precisa.
 Pode pedir uma estimativa indicativa à distância, com descrição e fotos do trabalho.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:+351${config.phone.replace(/\s/g, '')}`}
 className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--site-primary)] text-white font-bold text-lg rounded-lg hover:bg-[var(--site-primary-dark)] transition-all shadow-2xl"
 >
 <Phone className="w-6 h-6" />
 Ligar: {config.phone}
 </a>
 <a
 href={`https://wa.me/351${config.phone.replace(/\s/g, '')}?text=${encodeURIComponent('Olá, gostaria de um orçamento transparente para serviços elétricos.')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 transition-all shadow-2xl"
 >
 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
);
}
