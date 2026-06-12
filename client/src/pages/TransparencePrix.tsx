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
 // Prix détaillés par service
 const forfaits = [
 {
 title: "Pequena Arranjo",
 price: "30€ - 45€",
 duration: "resposta prioritária",
 includes: [
 "Troca de tomadas ou interruptores",
 "Instalação de pontos de luz",
 "Pequenos ajustes elétricos",
 "Material básico incluído"
 ]
 },
 {
 title: "Intervenção Standard",
 price: "50€ - 80€",
 duration: "1h",
 includes: [
 "Diagnóstico completo com multímetro",
 "Resolução de avarias elétricas",
 "Arranjo de curto-circuitos",
 "Garantia 6 meses"
 ]
 },
 {
 title: "Quadro Elétrico Básico",
 price: "200€ - 300€",
 duration: "2-3h",
 includes: [
 "Quadro 4-6 circuitos",
 "Disjuntores de qualidade",
 "Instalação completa",
 "certificação elétrica incluída"
 ]
 },
 {
 title: "Quadro Elétrico Completo",
 price: "370€ - 650€",
 duration: "3-5h",
 includes: [
 "Quadro 8-12 circuitos",
 "Disjuntores diferencial + magnetotérmicos",
 "Instalação e ligação",
 "certificação elétrica + garantia 12 meses"
 ]
 },
 {
 title: "certificação elétrica",
 price: "150€ - 300€",
 duration: "1-2h",
 includes: [
 "Vistoria técnica completa",
 "Testes de segurança",
 "Emissão certificado oficial",
 "Tratamos toda a papelada"
 ]
 },
 {
 title: "Intervenção Urgente",
 price: "90€ - 120€",
 duration: "Imediato",
 includes: [
 "Chegada Atendimento prioritário",
 "Disponível Atendimento 24h/7d",
 "Fins de semana e feriados",
 "Resolução no local"
 ]
 }
 ];
 // Taux horaire et majorations (RÈGLE OFFICIELLE Philippe)
 const tauxHoraire = {
 base: "70€/hora",
 majoracao: "+50% (noites, fins de semana e feriados)",
 deplacement: "15€ - 65€ (conforme zona)"
 };
 // FAQ Prix
 const faqPrix = [
 {
 question: "Porque os vossos preços são 15-20% mais elevados que a concorrência?",
 answer: "Os nossos preços refletem a qualidade superior do serviço: eletricistas certificados com 10+ anos de experiência, materiais de marcas premium (Legrand, Schneider), garantia alargada de 12 meses, chegada garantida Atendimento prioritário, e certificação incluída. Não fazemos trabalhos 'baratos' que falham em 6 meses. Investimos em formação contínua e equipamento profissional. O barato sai caro em eletricidade - um trabalho mal feito pode causar incêndios."
 },
 {
 question: "O preço final pode ser diferente do orçamento?",
 answer: "Não. O preço que anunciamos ao telefone é o preço final. Se durante a intervenção descobrirmos problemas adicionais, paramos e explicamos o que encontrámos, quanto custará resolver, e só continuamos com a sua autorização. Zero surpresas na fatura. Garantido."
 },
 {
 question: "Posso pagar em prestações?",
 answer: "Para intervenções acima de 200€, aceitamos pagamento em 2x sem juros (50% no início, 50% no final). Para projetos acima de 500€, podemos negociar planos de pagamento personalizados. Aceitamos multibanco, MB WAY, transferência e dinheiro."
 },
 {
 question: "A deslocação está incluída no preço?",
 answer: "Não. A deslocação é cobrada à parte conforme a zona: Zona 1 (Macedo, Mirandela) = 15€, Zona 2 (Bragança, Vinhais) = 20€, Zona 3 (Vila Real, Chaves) = 30€. Este valor cobre apenas o gasóleo e desgaste da carrinha. É cobrado uma única vez por intervenção, mesmo que demore vários dias."
 },
 {
 question: "Oferecem desconto para clientes regulares?",
 answer: "Sim. Clientes que nos chamam 3+ vezes por ano recebem 10% de desconto em todas as intervenções seguintes. Condomínios e empresas têm condições especiais. Contacte-nos para saber mais."
 },
 {
 question: "O que acontece se não ficar satisfeito?",
 answer: "Garantia 100% satisfeito ou reembolsado. Se não ficar completamente satisfeito com o trabalho, voltamos gratuitamente para corrigir. Se mesmo assim não resolver, devolvemos o valor pago. Sem perguntas, sem letra pequena. Em 15 anos, isto aconteceu 2 vezes."
 },
 {
 question: "Porque devo escolher-vos em vez de um eletricista mais barato?",
 answer: "Porque valorizamos a sua segurança e paz de espírito. Um eletricista barato pode: usar materiais de baixa qualidade que falham rapidamente, não ter seguro (se causar danos, o problema é seu), não emitir certificação elétrica (ilegal e perigoso), desaparecer quando há problemas. Nós somos uma empresa estabelecida há 15 anos, com satisfeitos, seguro de responsabilidade civil, e garantia real. O barato sai caro."
 }
 ];
 return (
 <>
 <SEOHead
 title={`Transparência de Preços - O ÚNICO Eletricista de Trás-os-Montes que Publica os Seus Preços | ${config.name}`}
 description="Somos o ÚNICO eletricista em Trás-os-Montes com preços 100% transparentes publicados online. Veja todos os nossos preços, sem surpresas, sem letra pequena. Pequena arranjo desde 30€, quadros elétricos desde 150€. Garantia satisfeito ou reembolsado."
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
 🏆 TRANSPARÊNCIA TOTAL
 </div>
 <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
 O <span className="text-[var(--site-primary)]">ÚNICO</span> Eletricista de<br />
 Trás-os-Montes que<br />
 Publica os Seus Preços
 </h1>
 <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
 Enquanto a concorrência esconde os preços e dá "surpresas" na fatura,<br />
 nós publicamos TUDO online. Sem letra pequena. Sem truques.
 </p>
 <div className="flex flex-wrap justify-center gap-4 mb-12">
 <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
 <Check className="w-5 h-5 text-green-400" />
 <span className="font-semibold">Preços Fixos</span>
 </div>
 <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
 <Check className="w-5 h-5 text-green-400" />
 <span className="font-semibold">Zero Surpresas</span>
 </div>
 <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
 <Check className="w-5 h-5 text-green-400" />
 <span className="font-semibold">Garantia Escrita</span>
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
 Valores sem IVA (Art. 53º CIVA). O que vê é o que paga. Sempre.
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
 Para trabalhos que não se enquadram nos forfaits acima. Mínimo 1 hora.
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
 Majoração única +50% (noites, fins de semana e feriados). Mínimo 30 minutos.
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
 Noite (18h-08h) e feriados: +50% sobre tarifa base. Fração mínima 1h.
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
 Porque os Nossos Preços São<br />
 <span className="text-[var(--site-primary)]">15-20% Mais Elevados?</span>
 </h2>
 <p className="text-xl text-gray-600">
 Transparência total: eis onde vai o seu dinheiro
 </p>
 </div>
 <div className="grid md:grid-cols-2 gap-8">
 <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
 <Award className="w-12 h-12 text-blue-600 mb-4" />
 <h3 className="text-xl font-bold mb-3 text-gray-900">Eletricistas Certificados</h3>
 <p className="text-gray-700 leading-relaxed">
 Todos os nossos técnicos têm certificação elétrica e 10+ anos de experiência.
 Formação contínua obrigatória. Não contratamos "ajudantes" sem qualificação.
 </p>
 </div>
 <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-200">
 <Shield className="w-12 h-12 text-green-600 mb-4" />
 <h3 className="text-xl font-bold mb-3 text-gray-900">Materiais Premium</h3>
 <p className="text-gray-700 leading-relaxed">
 Usamos apenas marcas de topo: Legrand, Schneider Electric, ABB.
 Materiais baratos falham em 6 meses. Os nossos duram 10+ anos.
 </p>
 </div>
 <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-200">
 <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
 <h3 className="text-xl font-bold mb-3 text-gray-900">Garantia Alargada</h3>
 <p className="text-gray-700 leading-relaxed">
 12 meses em instalações, 6 meses em arranjos. A concorrência dá 3 meses (quando dá).
 Voltamos gratuitamente se houver problemas.
 </p>
 </div>
 <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-2 border-orange-200">
 <Users className="w-12 h-12 text-orange-600 mb-4" />
 <h3 className="text-xl font-bold mb-3 text-gray-900">Seguro & Legalidade</h3>
 <p className="text-gray-700 leading-relaxed">
 Seguro de responsabilidade civil de 500.000€. certificação elétrica incluída.
 Faturas legais. Muitos "baratos" trabalham ilegalmente.
 </p>
 </div>
 </div>
 <div className="mt-12 bg-gray-900 text-white p-8 rounded-xl text-center">
 <p className="text-2xl font-bold mb-4">
 O Barato Sai Caro em Eletricidade
 </p>
 <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
 Um trabalho elétrico mal feito pode causar incêndios, eletrocussões, e danos em equipamentos.
 Poupar 20€ hoje pode custar-lhe milhares amanhã. Nós garantimos segurança e qualidade.
 </p>
 </div>
 </div>
 </div>
 </section>
 {/* Garanties */}
 <section className="py-20 bg-gradient-to-br from-[var(--site-primary)] to-[var(--site-primary-dark)] text-white">
 <div className="container">
 <div className="max-w-4xl mx-auto text-center">
 <Shield className="w-16 h-16 mx-auto mb-6" />
 <h2 className="text-4xl md:text-5xl font-black mb-6">
 Garantia 100% Satisfeito<br />ou Reembolsado
 </h2>
 <p className="text-xl text-white/90 mb-12 leading-relaxed">
 Se não ficar completamente satisfeito com o nosso trabalho, voltamos gratuitamente para corrigir.
 Se mesmo assim não resolver, devolvemos o valor pago. Sem perguntas, sem letra pequena.
 </p>
 <div className="grid md:grid-cols-3 gap-6 mb-12">
 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
 <div className="text-3xl font-black mb-2">12 meses</div>
 <div className="text-white/80">Garantia Instalações</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
 <div className="text-3xl font-black mb-2">6 meses</div>
 <div className="text-white/80">Garantia Arranjos</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
 <div className="text-3xl font-black mb-2">500.000€</div>
 <div className="text-white/80">Seguro Responsabilidade</div>
 </div>
 </div>
 <p className="text-sm text-white/70 italic">
 Em 15 anos de atividade, apenas 2 clientes pediram reembolso.
 A nossa taxa de satisfação é de 99.6%.
 </p>
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
 Pronto para um Orçamento<br />
 <span className="text-[var(--site-primary)]">100% Transparente?</span>
 </h2>
 <p className="text-xl text-gray-300 mb-8 leading-relaxed">
 Ligue agora. Diga-nos onde está e o que precisa.
 Damos-lhe o preço exato ao telefone. Sem surpresas na fatura.
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
