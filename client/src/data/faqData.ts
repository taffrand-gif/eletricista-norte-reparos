// Données FAQ partagées entre le composant FAQ (homepage) et la page FAQ dédiée
// Le composant affiche les 8 premières, la page affiche toutes les 20
export interface FAQItem {
 question: string;
 answer: string;
}
export const electricFaqs: FAQItem[] = [
 {
 question: "Quanto custa um eletricista em Trás-os-Montes?",
 answer: "Os preços variam conforme o serviço: diagnóstico 80-120€, instalação de tomada nova 138-182€, substituição tomada 66-90€, arranjo curto-circuito 150-210€, quadro elétrico 12 módulos 370-650€. Oferecemos preço fixo confirmado por telefone. Contacte-nos para orçamento sem compromisso."
 },
 {
 question: "Como funciona o sem compromisso?",
 answer: "Contacte-nos por telefone, WhatsApp ou formulário online. Deslocamo-nos gratuitamente para avaliar o problema, apresentamos um orçamento detalhado com preços transparentes e só avançamos após sua aprovação. Sem surpresas."
 },
 {
 question: "Tem eletricista urgente Atendimento 24h/7d?",
 answer: "Sim! Serviço de urgência Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados. Em caso de curto-circuito, falta de luz ou situação de perigo elétrico, ligue +351 932 321 892 para intervenção imediata."
 },
 {
 question: "Quanto tempo demora a chegar em caso de urgência?",
 answer: "Na zona de Trás-os-Montes e arredores (até 20km): 30-resposta prioritária. Para outras localidades do distrito: resposta prioritária a 1 hora. Temos veículos equipados com ferramentas e material para deslocações rápidas."
 },
 {
 question: "Atendem urgências à noite ou fim de semana?",
 answer: "Sim, trabalhamos Atendimento 24h/7d. Não importa se é meia-noite, domingo ou feriado - temos equipas de piquete sempre disponíveis para emergências elétricas. O preço de urgência aplica-se fora do horário comercial."
 },
 {
 question: "Quais os serviços elétricos que oferecem?",
 answer: "Instalação elétrica completa, arranjo de avarias, quadros elétricos novos, certificação elétrica, painéis solares, iluminação interior/exterior, tomadas e interruptores, automação residencial, instalação de ar condicionado, urgências elétricas."
 },
 {
 question: "Fazem certificação elétrica ?",
 answer: "Sim, somos eletricistas certificados para emitir certificados obrigatórios para venda/arrendamento de imóveis. Fazemos a vistoria completa, emissão do certificado e registo no sistema oficial."
 },
 {
 question: "Instalam painéis solares na região?",
 answer: "Sim, somos especialistas em instalação de painéis solares fotovoltaicos para autoconsumo. Fazemos estudo gratuito de viabilidade, projeto, instalação, legalização e manutenção. Ajudamos a reduzir a fatura da luz em até 70%."
 },
 {
 question: "Quais cidades servem no distrito de Bragança?",
 answer: "Servimos todo o distrito: Bragança, Mirandela, Trás-os-Montes, Chaves, Vila Real, Vinhais, Miranda do Douro, Mogadouro, Torre de Moncorvo, Alfândega da Fé, Freixo de Espada à Cinta, e todas as aldeias circundantes."
 },
 {
 question: "Qual é o raio de ação máximo?",
 answer: "Atendemos num raio de 100km a partir de Trás-os-Montes. Para localidades mais distantes, aplicamos uma taxa de deslocação adicional (consultar). Cobrimos praticamente todo o Nordeste Transmontano."
 },
 {
 question: "Quanto tempo demora uma instalação elétrica nova?",
 answer: "Uma instalação completa numa casa média (T3) leva 3-5 dias. Instalação de quadro elétrico: 1 dia. Arranjo de avaria simples: 1-2 horas. Projetos complexos (painéis solares, automação) podem levar 1-2 semanas."
 },
 {
 question: "Dão garantia no trabalho realizado?",
 answer: "Sim, damos garantia de 24 meses em todos os trabalhos realizados. A garantia cobre mão de obra e materiais fornecidos por nós. Em caso de problema relacionado, voltamos gratuitamente para resolver."
 },
 {
 question: "Quais métodos de pagamento aceitam?",
 answer: "Aceitamos dinheiro, multibanco, transferência bancária, MB WAY e cheque. Para serviços superiores a 500€, podemos acordar pagamento faseado. Emitimos fatura-recibo com IVA à taxa legal."
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
 question: "São eletricistas certificados?",
 answer: "Sim, temos certificação profissional (curso de eletricista de instalações) e formação contínua. Trabalhamos de acordo com as normas NP EN 60364 (instalações elétricas) e legislação portuguesa. Todos os técnicos têm habilitações legais."
 },
 {
 question: "Fazem serviços para empresas e indústrias?",
 answer: "Sim, atendemos particulares, empresas, comércios, restaurantes, armazéns e pequenas indústrias. Para empresas, oferecemos contratos de manutenção preventiva com inspeções periódicas e desconto em intervenções."
 },
 {
 question: "Como posso poupar energia elétrica?",
 answer: "Trocar para LED, instalar painéis solares, usar termoacumulador com horário bi-horário, desligar standby dos aparelhos, escolher eletrodomésticos classe A+++, isolar bem a casa, usar cortinas térmicas no inverno."
 }
];
export const plumberFaqs: FAQItem[] = [
 {
 question: "Quanto custa um canalizador em Trás-os-Montes?",
 answer: "Os preços variam conforme o serviço: desentupimento simples a partir de 50€, arranjo de fuga a partir de 60€, instalação de esquentador a partir de 150€. Oferecemos sem compromisso sem compromisso."
 },
 {
 question: "Como funciona o sem compromisso?",
 answer: "Contacte-nos por telefone, WhatsApp ou formulário online. Deslocamo-nos gratuitamente para avaliar o problema, apresentamos um orçamento detalhado com preços transparentes e só avançamos após sua aprovação."
 },
 {
 question: "Tem eletricista urgente Atendimento 24h/7d?",
 answer: "Sim! Serviço de urgência Atendimento 24h/7d, 7 dias por semana, incluindo fins de semana e feriados. Em caso de curto-circuito, falha de energia ou situação de perigo elétrico, ligue +351 932 321 892 para intervenção imediata."
 },
 {
 question: "Quanto tempo demora a chegar em caso de urgência?",
 answer: "Na zona de Trás-os-Montes e arredores: 30-resposta prioritária. Para outras localidades do distrito: resposta prioritária a 1 hora. Temos veículos equipados com ferramentas e material para deslocações rápidas."
 },
 {
 question: "Atendem urgências à noite ou fim de semana?",
 answer: "Sim, trabalhamos Atendimento 24h/7d. Não importa se é meia-noite, domingo ou feriado - temos equipas de piquete sempre disponíveis para emergências de canalização."
 },
 {
 question: "Quais os serviços de canalização que oferecem?",
 answer: "Arranjo de fugas, desentupimentos, instalação de esquentadores e caldeiras, substituição de canalização, instalação de sanitas e lavatórios, arranjo de autoclismos, deteção de fugas, urgências 24h."
 },
 {
 question: "Fazem certificação de gás?",
 answer: "Sim, somos canalizadores certificados para instalação e manutenção de sistemas de gás. Emitimos certificados obrigatórios para instalações de gás natural e GPL."
 },
 {
 question: "Quais cidades servem no distrito de Bragança?",
 answer: "Servimos todo o distrito: Bragança, Mirandela, Trás-os-Montes, Chaves, Vila Real, Vinhais, Miranda do Douro, Mogadouro, Torre de Moncorvo e todas as aldeias circundantes."
 }
];
