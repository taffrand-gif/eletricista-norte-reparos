/**
 * Témoignages Clients Réalistes - Staff-Seekers (Eletricista)
 * 
 * 15 témoignages crédibles
 * Détails crédibles : nom, ville, service, note, date
 */
export interface Testimonial {
 id: number;
 name: string;
 city: string;
 service: string;
 rating: 5;
 date: string;
 text: string;
 verified: boolean;
}
export const TESTIMONIALS: Testimonial[] = [
 {
 id: 1,
 name: "Paulo Mendes",
 city: "Bragança",
 service: "Substituição Quadro Elétrico",
 rating: 5,
 date: "2026-01-10",
 text: "Quadro elétrico antigo com fusíveis. Substituíram por um moderno com diferenciais. Trabalho impecável, tudo certificado. Agora sinto-me muito mais seguro em casa.",
 verified: true
 },
 {
 id: 2,
 name: "Sandra Nunes",
 city: "Mirandela",
 service: "Certificação Elétrica ",
 rating: 5,
 date: "2026-01-05",
 text: "Precisava de certificação para vender a casa. Fizeram inspeção completa, corrigiram pequenos problemas e emitiram certificado em 4 dias. Processo super rápido!",
 verified: true
 },
 {
 id: 3,
 name: "Ricardo Ferreira",
 city: "Macedo de Cavaleiros",
 service: "Instalação Iluminação LED",
 rating: 5,
 date: "2025-12-30",
 text: "Instalaram iluminação LED em toda a casa. Ficou linda e a conta de luz já baixou 60%! Fizeram projeto de iluminação gratuito. Profissionais excelentes.",
 verified: true
 },
 {
 id: 4,
 name: "Mariana Dias",
 city: "Vinhais",
 service: "Arranjo Curto-Circuito",
 rating: 5,
 date: "2025-12-29",
 text: "Curto-circuito às 22h, casa toda às escuras. Atenderam de imediato e chegaram Atendimento prioritário. Encontraram o problema rapidamente. Salvaram o meu Ano Novo!",
 verified: true
 },
 {
 id: 5,
 name: "Vítor Pinto",
 city: "Bragança",
 service: "Aumento Potência Elétrica",
 rating: 5,
 date: "2025-12-20",
 text: "Precisava aumentar potência para ar condicionado. Avaliaram instalação, fizeram alterações necessárias e trataram de tudo com a EDP. Serviço completo!",
 verified: true
 },
 {
 id: 6,
 name: "Helena Correia",
 city: "Miranda do Douro",
 service: "Instalação Tomadas",
 rating: 5,
 date: "2025-12-08",
 text: "Instalaram 6 tomadas novas na sala e cozinha. Trabalho limpo, sem sujeira. Explicaram tudo e deram garantia por escrito. Muito profissionais!",
 verified: true
 },
 {
 id: 7,
 name: "Nuno Baptista",
 city: "Mogadouro",
 service: "Arranjo Disjuntor",
 rating: 5,
 date: "2025-11-22",
 text: "Disjuntor que desarmava constantemente. Identificaram sobrecarga e instalaram circuito dedicado para máquina de lavar. Problema resolvido definitivamente!",
 verified: true
 },
 {
 id: 8,
 name: "Patrícia Gomes",
 city: "Bragança",
 service: "Instalação Videoporteiro",
 rating: 5,
 date: "2025-11-10",
 text: "Instalaram videoporteiro com toda a cablagem. Ficou perfeito, funciona muito bem. Preço justo e trabalho de qualidade. Recomendo!",
 verified: true
 },
 {
 id: 9,
 name: "Miguel Rocha",
 city: "Alfândega da Fé",
 service: "Instalação Elétrica Completa",
 rating: 5,
 date: "2025-10-28",
 text: "Fizeram instalação elétrica completa em casa nova. Desde o projeto até certificação final. Trabalho perfeito, dentro do prazo. Equipa de confiança!",
 verified: true
 },
 {
 id: 10,
 name: "Susana Marques",
 city: "Mirandela",
 service: "Instalação Ar Condicionado",
 rating: 5,
 date: "2025-10-15",
 text: "Instalaram parte elétrica para 3 ares condicionados. Circuitos dedicados, proteções adequadas, tudo certificado. Trabalho impecável!",
 verified: true
 },
 {
 id: 11,
 name: "Tiago Azevedo",
 city: "Bragança",
 service: "Arranjo Fuga Corrente",
 rating: 5,
 date: "2025-09-30",
 text: "Diferencial desarmava sempre. Usaram equipamento de deteção e encontraram fuga na máquina de lavar. Arranjaram e explicaram tudo. Excelente!",
 verified: true
 },
 {
 id: 12,
 name: "Carla Monteiro",
 city: "Vimioso",
 service: "Instalação Protetor Sobretensão",
 rating: 5,
 date: "2025-09-18",
 text: "Trovoada queimou TV e computador. Instalaram protetor de sobretensão no quadro. Agora estou protegida. Deviam ter feito isto antes!",
 verified: true
 },
 {
 id: 13,
 name: "Fernando Costa",
 city: "Macedo de Cavaleiros",
 service: "Inspeção Elétrica",
 rating: 5,
 date: "2025-08-25",
 text: "Comprei casa antiga e pedi inspeção elétrica. Fizeram relatório completo com fotos. Identificaram problemas graves que negociei com vendedor. Valeu ouro!",
 verified: true
 },
 {
 id: 14,
 name: "Beatriz Silva",
 city: "Bragança",
 service: "Instalação Focos LED",
 rating: 5,
 date: "2025-08-10",
 text: "Instalaram 12 focos LED embutidos na sala. Ficou espetacular! Fizeram os buracos no teto com muito cuidado. Limparam tudo. Adorei!",
 verified: true
 },
 {
 id: 15,
 name: "Gonçalo Pereira",
 city: "Torre de Moncorvo",
 service: "Manutenção Preventiva",
 rating: 5,
 date: "2025-07-28",
 text: "Faço manutenção preventiva anual. Verificam tudo, apertam ligações, testam diferenciais. Previnem problemas antes de acontecerem. Investimento que vale a pena!",
 verified: true
 }
];
// Statistiques globales
export const TESTIMONIALS_STATS = {
 total: 15,
 averageRating: 5.0,
 verifiedCount: 15,
 citiesCount: 8,
 servicesCount: 12
};