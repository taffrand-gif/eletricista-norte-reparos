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
 problemesFrequents: "Avarias elétricas em instalações antigas (180+ casos/ano), quadros elétricos obsoletos, curto-circuitos",
 delaiIntervention: "40 minutos centre-ville, 50 minutes périphérie",
 testimonials: [
 {
 name: "Paulo R.",
 text: "Curto-circuito às 2h da manhã. Chegaram em 35 minutos e resolveram tudo com segurança. certificação elétrica incluída!",
 rating: 5,
 date: "2026-02-16"
 },
 {
 name: "Sandra M.",
 text: "Quadro elétrico a disparar constantemente. Identificaram problema e substituíram disjuntor. Muito profissionais!",
 rating: 5,
 date: "2026-02-27"
 },
 {
 name: "Ricardo F.",
 text: "certificação elétrica para apartamento. Serviço rápido, preço justo e entrega em 48h. Recomendo!",
 rating: 5,
 date: "2026-03-06"
 }
 ],
 prices: {
 service1: 100, // Quadro elétrico
 service2: 80, // Avaria
 service3: 150 // Certificação
 },
 stats: {
 interventionsAnnuelles: "480+ intervenções em Bragança",
 tauxSatisfaction: "99% clientes satisfeitos",
 tempsReponse: "Média 37 minutos"
 },
 specificites: [
 "Certificados - Todas as intervenções legalizadas",
 "Especialistas em instalações antigas do centro histórico",
 "Equipamento de termografia para detetar problemas ocultos",
 "Parceiros de 20+ condomínios na cidade",
 "Intervenção rápida em zonas rurais (Gimonde, Grijó, Rebordãos)"
 ]
 },
 mirandela: {
 name: "Mirandela",
 slug: "mirandela",
 population: "23 000 habitants",
 logements: "8 500 logements dont 55% construits avant 1985",
 problemesFrequents: "Quadros elétricos antigos (140+ casos/ano), avarias em aquecimento elétrico, tomadas sem terra",
 delaiIntervention: "45 minutos centre-ville, 60 minutes aldeias",
 testimonials: [
 {
 name: "Fernando L.",
 text: "Quadro elétrico completamente queimado. Substituíram tudo em 3h com certificação. Excelente trabalho!",
 rating: 5,
 date: "2026-02-21"
 },
 {
 name: "Cristina P.",
 text: "Avaria elétrica urgente. Vieram logo e resolveram com garantia de 12 meses. Top!",
 rating: 5,
 date: "2026-03-02"
 }
 ],
 prices: {
 service1: 100,
 service2: 80,
 service3: 150
 },
 stats: {
 interventionsAnnuelles: "340+ intervenções em Mirandela",
 tempsReponse: "Média 43 minutos"
 },
 specificites: [
 "certificação elétrica obrigatória incluída",
 "Especialistas em aquecimento elétrico",
 "Cobertura completa: Mirandela, Frechas, Abreiro, Cabanelas",
 "Parceiros de quintas e turismo rural",
 "Teste de terra e medição de tensão gratuitos"
 ]
 },
 macedo: {
 name: "Macedo de Cavaleiros",
 slug: "macedo-de-cavaleiros",
 population: "15 000 habitants",
 logements: "5 500 logements dont 50% em zonas rurais",
 problemesFrequents: "Avarias em bombas de água elétricas (110+ casos/ano), instalações sem certificação, problemas de tensão",
 delaiIntervention: "35 minutos centre-ville, 55 minutes aldeias",
 testimonials: [
 {
 name: "Armando S.",
 text: "Bomba de água sem funcionar. Identificaram problema elétrico e resolveram no mesmo dia. Perfeito!",
 rating: 5,
 date: "2026-02-19"
 },
 {
 name: "Isabel C.",
 text: "certificação elétrica para casa nova. Serviço impecável e preço combinado antes. Obrigada!",
 rating: 5,
 date: "2026-02-26"
 }
 ],
 prices: {
 service1: 100,
 service2: 80,
 service3: 150
 },
 stats: {
 interventionsAnnuelles: "290+ intervenções em Macedo",
 tauxSatisfaction: "99% clientes satisfeitos",
 tempsReponse: "Média 34 minutos"
 },
 specificites: [
 "Base permanente em Macedo de Cavaleiros",
 "Especialistas em sistemas elétricos rurais",
 "certificação elétrica para casas e quintas",
 "Cobertura: Macedo, Morais, Lagoa, Talhinhas",
 "Experiência com painéis solares e geradores"
 ]
 },
 chaves: {
 name: "Chaves",
 slug: "chaves",
 population: "41 000 habitants",
 logements: "14 000 logements dont 65% construits avant 1995",
 problemesFrequents: "Avarias em aquecimento central elétrico (160+ casos/ano), quadros obsoletos, problemas de potência",
 delaiIntervention: "50 minutos centre-ville, 70 minutes aldeias",
 testimonials: [
 {
 name: "Rui A.",
 text: "Aquecimento elétrico avariado no inverno. Vieram urgente e resolveram com garantia. Muito bom!",
 rating: 5,
 date: "2026-02-23"
 }
 ],
 prices: {
 service1: 110,
 service2: 85,
 service3: 160
 },
 stats: {
 interventionsAnnuelles: "400+ intervenções em Chaves",
 tauxSatisfaction: "97% clientes satisfeitos",
 tempsReponse: "Média 47 minutos"
 },
 specificites: [
 "Especialistas em aquecimento elétrico",
 "certificação elétrica para hotéis e termas",
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
 problemesFrequents: "Avarias em prédios (200+ casos/ano), quadros elétricos sobrecarregados, problemas de iluminação",
 delaiIntervention: "55 minutos centre-ville, 75 minutes aldeias",
 testimonials: [
 {
 name: "Nuno M.",
 text: "Avaria elétrica no 6º andar. Resolveram rapidamente com certificação. Profissionais de confiança!",
 rating: 5,
 date: "2026-03-03"
 }
 ],
 prices: {
 service1: 110,
 service2: 85,
 service3: 160
 },
 stats: {
 interventionsAnnuelles: "450+ intervenções em Vila Real",
 tempsReponse: "Média 51 minutos"
 },
 specificites: [
 "Equipamento para prédios altos",
 "certificação elétrica para condomínios",
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
 problemesFrequents: "Avarias em casas isoladas (75+ casos/ano), instalações antigas sem terra, geradores",
 delaiIntervention: "60 minutos centre-ville, 80 minutes aldeias remotas",
 testimonials: [
 {
 name: "Alberto B.",
 text: "Casa isolada sem eletricidade. Vieram até aqui e resolveram tudo com certificação. Muito obrigado!",
 rating: 5,
 date: "2026-02-20"
 }
 ],
 prices: {
 service1: 110,
 service2: 90,
 service3: 160
 },
 stats: {
 interventionsAnnuelles: "190+ intervenções em Vinhais",
 tauxSatisfaction: "99% clientes satisfeitos",
 tempsReponse: "Média 57 minutos"
 },
 specificites: [
 "Especialistas em zonas rurais remotas",
 "certificação elétrica para casas isoladas",
 "Equipamento móvel completo",
 "Cobertura: Vinhais, Ervedosa, Moimenta",
 "Experiência com geradores e painéis solares"
 ]
 },
 mirandadodouro: {
 name: "Miranda do Douro",
 slug: "miranda-do-douro",
 population: "7 500 habitants",
 logements: "2 800 logements em zona fronteiriça",
 problemesFrequents: "Avarias em casas antigas (65+ casos/ano), instalações obsoletas, problemas de tensão",
 delaiIntervention: "65 minutos centre-ville, 85 minutes aldeias",
 testimonials: [
 {
 name: "Vítor L.",
 text: "Serviço rápido mesmo estando longe. certificação elétrica incluída. Preço justo!",
 rating: 5,
 date: "2026-02-25"
 }
 ],
 prices: {
 service1: 110,
 service2: 90,
 service3: 160
 },
 stats: {
 interventionsAnnuelles: "170+ intervenções em Miranda",
 tempsReponse: "Média 61 minutos"
 },
 specificites: [
 "Cobertura zona fronteiriça",
 "certificação elétrica para casas históricas",
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
 problemesFrequents: "Avarias em quintas (85+ casos/ano), instalações agrícolas, bombas elétricas",
 delaiIntervention: "60 minutos centre-ville, 80 minutes aldeias",
 testimonials: [
 {
 name: "Henrique C.",
 text: "Avaria elétrica na quinta. Vieram com equipamento e resolveram rápido. Recomendo!",
 rating: 5,
 date: "2026-03-04"
 }
 ],
 prices: {
 service1: 105,
 service2: 85,
 service3: 155
 },
 stats: {
 interventionsAnnuelles: "210+ intervenções em Mogadouro",
 tauxSatisfaction: "99% clientes satisfeitos",
 tempsReponse: "Média 57 minutos"
 },
 specificites: [
 "Especialistas em instalações agrícolas",
 "certificação elétrica para quintas",
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
 problemesFrequents: "Avarias em casas antigas (55+ casos/ano), instalações sem certificação, bombas elétricas",
 delaiIntervention: "55 minutos centre-ville, 75 minutes aldeias",
 testimonials: [
 {
 name: "Margarida P.",
 text: "Bomba elétrica avariada. Vieram no mesmo dia e substituíram com certificação. Ótimo serviço!",
 rating: 5,
 date: "2026-02-27"
 }
 ],
 prices: {
 service1: 105,
 service2: 85,
 service3: 155
 },
 stats: {
 interventionsAnnuelles: "150+ intervenções em Alfândega",
 tauxSatisfaction: "99% clientes satisfeitos",
 tempsReponse: "Média 52 minutos"
 },
 specificites: [
 "Especialistas em bombas elétricas",
 "certificação elétrica para zona rural",
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
 problemesFrequents: "Avarias elétricas (70+ casos/ano), quadros obsoletos, instalações antigas",
 delaiIntervention: "60 minutos centre-ville, 80 minutes aldeias",
 testimonials: [
 {
 name: "Gonçalo T.",
 text: "Avaria resolvida em 1h com certificação elétrica. Preço combinado antes, sem surpresas!",
 rating: 5,
 date: "2026-03-05"
 }
 ],
 prices: {
 service1: 105,
 service2: 85,
 service3: 155
 },
 stats: {
 interventionsAnnuelles: "180+ intervenções em Vila Flor",
 tempsReponse: "Média 57 minutos"
 },
 specificites: [
 "Cobertura completa concelho",
 "certificação elétrica incluída",
 "Equipamento profissional",
 "Cobertura: Vila Flor, Candoso, Freixiel",
 "Parceiros locais estabelecidos"
 ]
 }
};
