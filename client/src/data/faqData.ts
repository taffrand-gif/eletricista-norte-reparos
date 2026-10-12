// Données FAQ partagées entre le composant FAQ (homepage) et la page FAQ dédiée
// Le composant affiche les 8 premières, la page affiche toutes les 20
export interface FAQItem {
 question: string;
 answer: string;
}
export const electricFaqs: FAQItem[] = [
 {
 question: "Quanto custa um eletricista em Trás-os-Montes?",
 answer: "Mão de obra: 70 €/hora das 09h às 18h; 100 €/hora à noite, ao fim de semana e em feriados. Deslocação: 30 € ou 50 € conforme o horário. Valores TTC; qualquer hora iniciada é devida. Com descrição e fotos suficientes, damos uma estimativa indicativa à distância; o valor final depende do que se encontra no local."
 },
 {
 question: "Como funciona o orçamento por escrito?",
 answer: "Contacte-nos por telefone, WhatsApp ou formulário online. Apresentamos um orçamento detalhado com preços transparentes e só avançamos após sua aprovação. Sem surpresas."
 },
 {
 question: "Tem eletricista urgente 24h/7d?",
 answer: "Sim! Serviço de urgência 24h/7d, 7 dias por semana, incluindo fins de semana e feriados. Em caso de curto-circuito, falta de luz ou situação de perigo elétrico, ligue +351 932 321 892 para intervenção."
 },
 {
 question: "Atendem urgências à noite ou fim de semana?",
 answer: "Sim, trabalhamos 24h/7d. Não importa se é meia-noite, domingo ou feriado. O preço de urgência aplica-se fora do horário comercial."
 },
 {
 question: "Quais os serviços elétricos que oferecem?",
 answer: "Instalação elétrica completa, arranjo de avarias, quadros elétricos novos, iluminação interior/exterior, tomadas e interruptores, automação residencial, urgências elétricas."
 },
 {
 question: "Fazem diagnóstico elétrico ?",
 answer: "Identificamos o que precisa de ser corrigido na instalação. Ficha eletrotécnica e Termos de responsabilidade: a partir de 350 € TTC, sob orçamento conforme o caso."
 },
 {
 question: "Instalam painéis solares na região?",
 answer: "De momento não fazemos instalação de painéis solares."
 },
 {
 question: "Quais cidades servem no distrito de Bragança?",
 answer: "Servimos todo o distrito: Bragança, Mirandela, Trás-os-Montes, Chaves, Vila Real, Vinhais, Miranda do Douro, Mogadouro, Torre de Moncorvo, Alfândega da Fé, Freixo de Espada à Cinta, e todas as aldeias circundantes."
 },
 {
 question: "Qual é o raio de ação máximo?",
 answer: "Atendemos num raio de cerca de 130 km por estrada a partir de Macedo de Cavaleiros. A deslocação custa 30 € das 09h às 18h e 50 € à noite, ao fim de semana e em feriados (TTC; mínimo 30 € em qualquer deslocação)."
 },
 {
 question: "Quanto tempo demora uma instalação elétrica nova?",
 answer: "A duração depende do âmbito e do local. Indicamos uma estimativa depois de ver a descrição ou as fotos do trabalho."
 },
 {
 question: "Quando devo trocar o quadro elétrico antigo?",
 answer: "Se tem fusíveis de rosca (ainda funcionam), disjuntores antigos (mais de 25 anos), falta de diferencial, ou avarias frequentes. Um quadro novo aumenta a segurança, evita incêndios e é obrigatório para certificação."
 },
 {
 question: "Quais são os sinais de perigo elétrico?",
 answer: "Cheiro a queimado, disjuntores que saltam frequentemente, tomadas/interruptores quentes, luzes que piscam, faíscas nas tomadas, choques leves ao tocar em eletrodomésticos, fusíveis queimados repetidamente."
 },
 {
 question: "Quando devo chamar um eletricista?",
 answer: "Ao primeiro sinal de problema: falta de luz parcial/total, disjuntores que saltam, cheiro a queimado, tomadas quentes. Não tente arranjar sozinho - riscos de eletrocussão e incêndio são reais."
 },
 {
 question: "Usam equipamento profissional?",
 answer: "Sim, trabalhamos com equipamento de última geração: analisadores de redes Fluke, detetores de cabos, câmaras térmicas FLIR, ferramentas isoladas 1000V, testadores de continuidade, máquinas de furar profissionais."
 },
 {
 question: "Que formação têm os eletricistas?",
 answer: "Temos formação profissional (curso de eletricista de instalações) e formação contínua. Trabalhamos de acordo com as normas NP EN 60364 (instalações elétricas) e a legislação portuguesa."
 },
 {
 question: "Fazem serviços para empresas e indústrias?",
 answer: "Sim, atendemos particulares, empresas, comércios, restaurantes, armazéns e pequenas indústrias."
 },
 {
 question: "Como posso poupar energia elétrica?",
 answer: "Trocar para LED, instalar painéis solares, usar termoacumulador com horário bi-horário, desligar standby dos aparelhos, escolher eletrodomésticos classe A+++, isolar bem a casa, usar cortinas térmicas no inverno."
 }
];
