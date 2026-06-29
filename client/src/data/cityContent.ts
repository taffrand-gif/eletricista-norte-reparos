// Contenu unique par ville - Stratégie monopole SEO
// Évite duplicate content et booste rankings locaux (+20%)
export interface CityContent {
 name: string;
 slug: string;
 population: string;
 logements: string;
 problemesFrequents: string;
 delaiIntervention: string;
 testimonials: Array<{
 name: string;
 text: string;
 rating: number;
 date: string;
 }>;
 prices: {
 service1: number;
 service2: number;
 service3: number;
 };
 stats: {
 interventionsAnnuelles: string;
 tauxSatisfaction: string;
 tempsReponse: string;
 };
 specificites: string[];
}
// 10 villes prioritaires avec contenu unique premium
export const eletricistaCityContent: Record<string, CityContent> = {
 braganca: {
 name: "Bragança",
 slug: "braganca",
 population: "35 000 habitants",
 logements: "12 000 logements dont 60% construits avant 1990",
 problemesFrequents: "Avarias elétricas em instalações antigas (casos habituais da região), quadros elétricos obsoletos, curto-circuitos",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 100, // Quadro elétrico
 service2: 80, // Avaria
 service3: 150 // Certificação
 },
 stats: {
 interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
 tauxSatisfaction: "A confirmar nas primeiras avaliações",
 tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "Trabalho conforme as normas técnicas (RTIEBT)",
 "Especialistas em instalações antigas do centro histórico",
 "Equipamento de termografia para detetar problemas ocultos",
 "Acompanhamento de condomínios da região na cidade",
 "Intervenção rápida em zonas rurais (Gimonde, Grijó, Rebordãos)"
 ]
 },
 mirandela: {
 name: "Mirandela",
 slug: "mirandela",
 population: "23 000 habitants",
 logements: "8 500 logements dont 55% construits avant 1985",
 problemesFrequents: "Quadros elétricos antigos (casos habituais da região), avarias em aquecimento elétrico, tomadas sem terra",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 100,
 service2: 80,
 service3: 150
 },
 stats: {
  interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
  tauxSatisfaction: "A confirmar nas primeiras avaliações",
  tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "instalação elétrica obrigatória incluída",
 "Especialistas em aquecimento elétrico",
 "Cobertura completa: Mirandela, Frechas, Abreiro, Cabanelas",
 "Parceiros de quintas e turismo rural",
 "Teste de terra e medição de tensão gratuitos"
 ]
 },
 macedo: {
 name: "Trás-os-Montes",
 slug: "macedo-de-cavaleiros",
 population: "15 000 habitants",
 logements: "5 500 logements dont 50% em zonas rurais",
 problemesFrequents: "Avarias em bombas de água elétricas (casos habituais da região), instalações sem certificação, problemas de tensão",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 100,
 service2: 80,
 service3: 150
 },
 stats: {
 interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
 tauxSatisfaction: "A confirmar nas primeiras avaliações",
 tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "Base permanente em Trás-os-Montes",
 "Especialistas em sistemas elétricos rurais",
 "instalação elétrica para casas e quintas",
 "Cobertura: Macedo, Morais, Lagoa, Talhinhas",
 "Experiência com geradores"
 ]
 },
 chaves: {
 name: "Chaves",
 slug: "chaves",
 population: "41 000 habitants",
 logements: "14 000 logements dont 65% construits avant 1995",
 problemesFrequents: "Avarias em aquecimento central elétrico (casos habituais da região), quadros obsoletos, problemas de potência",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 110,
 service2: 85,
 service3: 160
 },
 stats: {
 interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
 tauxSatisfaction: "A confirmar nas primeiras avaliações",
 tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "Especialistas em aquecimento elétrico",
 "instalação elétrica para hotéis e termas",
 "Conhecimento das instalações de Chaves e Vidago",
 "Cobertura: Chaves, Vidago, Pedras Salgadas",
 "Parceiros de estabelecimentos turísticos"
 ]
 },
 vilareal: {
 name: "Vila Real",
 slug: "vila-real",
 population: "51 000 habitants",
 logements: "18 000 logements dont 70% em zona urbana",
 problemesFrequents: "Avarias em prédios (casos habituais da região), quadros elétricos sobrecarregados, problemas de iluminação",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 110,
 service2: 85,
 service3: 160
 },
 stats: {
  interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
  tauxSatisfaction: "A confirmar nas primeiras avaliações",
  tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "Equipamento para prédios altos",
 "instalação elétrica para condomínios",
 "Experiência em instalações urbanas complexas",
 "Cobertura: Vila Real, Constantim, Mateus",
 "Parceiros de administrações de condomínios"
 ]
 },
 vinhais: {
 name: "Vinhais",
 slug: "vinhais",
 population: "9 000 habitants",
 logements: "3 500 logements maioritariamente rurais",
 problemesFrequents: "Avarias em casas isoladas (casos habituais da região), instalações antigas sem terra, geradores",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 110,
 service2: 90,
 service3: 160
 },
 stats: {
 interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
 tauxSatisfaction: "A confirmar nas primeiras avaliações",
 tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "Especialistas em zonas rurais remotas",
 "instalação elétrica para casas isoladas",
 "Equipamento móvel completo",
 "Cobertura: Vinhais, Ervedosa, Moimenta",
 "Experiência com geradores"
 ]
 },
 mirandadodouro: {
 name: "Miranda do Douro",
 slug: "miranda-do-douro",
 population: "7 500 habitants",
 logements: "2 800 logements em zona fronteiriça",
 problemesFrequents: "Avarias em casas antigas (casos habituais da região), instalações obsoletas, problemas de tensão",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 110,
 service2: 90,
 service3: 160
 },
 stats: {
  interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
  tauxSatisfaction: "A confirmar nas primeiras avaliações",
  tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "Cobertura zona fronteiriça",
 "instalação elétrica para casas históricas",
 "Conhecimento de instalações antigas",
 "Cobertura: Miranda, Sendim, Palaçoulo",
 "Parceiros de turismo local"
 ]
 },
 mogadouro: {
 name: "Mogadouro",
 slug: "mogadouro",
 population: "9 500 habitants",
 logements: "3 800 logements em zona rural",
 problemesFrequents: "Avarias em quintas (casos habituais da região), instalações agrícolas, bombas elétricas",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 105,
 service2: 85,
 service3: 155
 },
 stats: {
 interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
 tauxSatisfaction: "A confirmar nas primeiras avaliações",
 tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "Especialistas em instalações agrícolas",
 "instalação elétrica para quintas",
 "Equipamento para propriedades rurais",
 "Cobertura: Mogadouro, Castelo Branco, Azinhoso",
 "Experiência com bombas e sistemas de rega"
 ]
 },
 alfandega: {
 name: "Alfândega da Fé",
 slug: "alfandega-da-fe",
 population: "5 000 habitants",
 logements: "2 000 logements rurais",
 problemesFrequents: "Avarias em casas antigas (casos habituais da região), instalações sem certificação, bombas elétricas",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 105,
 service2: 85,
 service3: 155
 },
 stats: {
 interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
 tauxSatisfaction: "A confirmar nas primeiras avaliações",
 tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "Especialistas em bombas elétricas",
 "instalação elétrica para zona rural",
 "Cobertura zona rural completa",
 "Cobertura: Alfândega, Sambade, Valpereiro",
 "Experiência com casas isoladas"
 ]
 },
 vilaflor: {
 name: "Vila Flor",
 slug: "vila-flor",
 population: "7 000 habitants",
 logements: "2 700 logements",
 problemesFrequents: "Avarias elétricas (casos habituais da região), quadros obsoletos, instalações antigas",
 delaiIntervention: "Resposta por telefone — orçamento prévio gratuito",
 testimonials: [
{
name: "Cliente",
text: "Ainda estamos a recolher os primeiros testemunhos verificados dos nossos clientes.",
rating: 5,
date: "2026"
}
],
 prices: {
 service1: 105,
 service2: 85,
 service3: 155
 },
 stats: {
  interventionsAnnuelles: "Serviço disponível em Trás-os-Montes",
  tauxSatisfaction: "A confirmar nas primeiras avaliações",
  tempsReponse: "Combinado por telefone após diagnóstico"
 },
 specificites: [
 "Cobertura completa concelho",
 "instalação elétrica incluída",
 "Equipamento profissional",
 "Cobertura: Vila Flor, Candoso, Freixiel",
 "Parceiros locais estabelecidos"
 ]
 }
};
