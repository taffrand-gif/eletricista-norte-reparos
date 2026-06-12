// Services data for Eletricista Profissional (Electricidade)
export interface Service {
 id: string;
 slug: string;
 title: string;
 subtitle: string;
 description: string;
 icon: string;
 price: string;
 priceDetails: string;
 image: string;
 content: {
 intro: string;
 sections: {
 title: string;
 content: string;
 }[];
 cta: string;
 };
 seo: {
 metaTitle: string;
 metaDescription: string;
 keywords: string[];
 };
}
export const SERVICES: Service[] = [
 // Service 1: Instalação Elétrica
 {
 id: '1',
 slug: 'instalacao-eletrica',
 title: 'Instalação Elétrica Completa',
 subtitle: 'Instalações Elétricas Certificadas em Trás-os-Montes',
 description: 'Instalação completa de sistemas elétricos residenciais, comerciais e industriais. Quadros elétricos, tomadas, iluminação e certificação elétrica.',
 icon: '⚡',
 price: 'Desde 150€',
 priceDetails: 'Preço varia conforme complexidade',
 image: '/images-optimized/services/service-instalacao.jpg',
 content: {
 intro: 'A Eletricista Profissional realiza **instalações elétricas completas** em Trás-os-Montes, cumprindo rigorosamente as **Regras Técnicas das Instalações Elétricas de Baixa Tensão (RTIEBT)**. Trabalhamos com materiais certificados (Legrand, Schneider Electric, Siemens) e garantimos instalações seguras com **Trabalho garantido por escrito** incluído.',
 sections: [
 {
 title: 'Tipos de Instalações',
 content: `**Residenciais**: Casas novas, remodelações completas, ampliações, substituição de instalações antigas (sem terra → com terra), quadros elétricos monofásicos e trifásicos, iluminação interior e exterior, tomadas e interruptores, sistemas de aquecimento elétrico, portões automáticos, videoporteiros.
**Comerciais**: Lojas, escritórios, restaurantes, hotéis, iluminação comercial (LED, spots, calhas), sistemas de climatização, redes informáticas, sistemas de segurança (alarmes, CCTV), sinalização de emergência.
**Industriais**: Instalações trifásicas de alta potência, quadros elétricos industriais, motores e automatismos, iluminação industrial, sistemas de força, ligações de máquinas industriais.`
 },
 {
 title: 'Materiais e Certificações',
 content: `**Marcas Premium**: Legrand (tomadas, interruptores), Schneider Electric (quadros, disjuntores), Siemens (automação), Hager (proteções), ABB (industrial).
**Cabos Certificados**: H07V-U/R (instalações fixas), H05VV-F (flexível), XV (enterrado), todos com marcação CE e certificação elétrica.
**certificação elétrica Incluída**: Todas as instalações são certificadas pela (Associação Certificadora de Instalações Elétricas), obrigatório por lei. Certificado válido para venda/arrendamento de imóveis, seguros e inspeções.
**Garantia 5 Anos**: Todas as instalações têm garantia de 5 anos (material + mão de obra), conforme legislação portuguesa.`
 },
 {
 title: 'Processo Profissional',
 content: `**FASE 1**: Visita técnica gratuita → Levantamento necessidades → Projeto elétrico (se necessário) → Orçamento detalhado.
**FASE 2**: Compra materiais certificados → Parranjo obra → Proteção superfícies → Abertura roços (se necessário).
**FASE 3**: Instalação tubagens e caixas → Passagem cabos → Montagem quadro elétrico → Ligação tomadas/interruptores/iluminação → Ligação terra.
**FASE 4**: Testes elétricos (continuidade, isolamento, diferencial) → certificação elétrica → Entrega certificado + garantia → Limpeza completa.
**Prazo**: 2-10 dias conforme dimensão (casa T3: 3-5 dias).`
 },
 {
 title: 'Preços Indicativos',
 content: `**Instalação Completa Casa Nova**: T1 desde 2.500€, T2 desde 3.500€, T3 desde 4.500€, T4+ desde 6.000€ (inclui materiais + mão de obra + certificação).
**Remodelação Parcial**: Quarto 400€, Cozinha 600€, Casa de banho 500€, Sala 500€.
**Serviços Avulsos**: Quadro elétrico 370-650€ (12 módulos), Tomada nova 138-182€, Tomada substituição 66-90€, Interruptor 58-78€, Ponto de luz 60-85€, Ligação máquina lavar 110-145€, Portão automático 280-420€.
**Todos os preços incluem**: Materiais certificados, mão de obra, certificação elétrica, garantia 5 anos. Deslocação gratuita em Bragança e arredores.`
 }
 ],
 cta: 'Precisa de instalação elétrica? **Ligue já 932 321 892** para sem compromisso!'
 },
 seo: {
 metaTitle: 'Instalação Elétrica Bragança | Certificada | Eletricista Profissional',
 metaDescription: 'Instalação elétrica completa em Bragança. Quadros, tomadas, iluminação. certificação elétrica incluída. Garantia 5 anos. Desde 150€. Ligue 932 321 892!',
 keywords: ['instalação elétrica bragança', 'eletricista bragança', 'certificação elétrica', 'quadro elétrico']
 }
 },
 // Service 2: Arranjo de Avarias
 {
 id: '2',
 slug: 'arranjacao-avarias',
 title: 'Arranjo de Avarias Elétricas',
 subtitle: 'Diagnóstico Rápido e Arranjo Profissional',
 description: 'Arranjo de curto-circuitos, disjuntores que saltam, tomadas que não funcionam, quadros elétricos com problemas. Diagnóstico com equipamento profissional.',
 icon: '🔧',
 price: 'Desde 80€',
 priceDetails: 'Diagnóstico incluído',
 image: '/images-optimized/services/service-urgencia.jpg',
 content: {
 intro: 'Avarias elétricas podem ser perigosas e causar incêndios. A Eletricista Profissional dispõe de **equipamento de diagnóstico profissional** (multímetros, testadores de isolamento, detetores de cabos) para identificar rapidamente a origem do problema e repará-lo com segurança.',
 sections: [
 {
 title: 'Avarias Mais Comuns',
 content: `**Disjuntor que salta**: Sobrecarga (muitos aparelhos ligados), curto-circuito (cabo danificado), fuga de corrente (isolamento deficiente), disjuntor defeituoso.
**Tomadas sem corrente**: Cabo partido, ligação solta, tomada queimada, problema no quadro.
**Luzes que piscam**: Cabo solto, lâmpada defeituosa, problema transformador LED, mau contacto.
**Cheiro a queimado**: URGENTE! Cabo sobreaquecido, tomada derretida, curto-circuito. Desligue o quadro e ligue imediatamente.
**Choque elétrico**: Falta de ligação terra, aparelho defeituoso, isolamento danificado. Perigo de morte!`
 },
 {
 title: 'Equipamento de Diagnóstico',
 content: `**Multímetro Digital**: Mede tensão, corrente, resistência, continuidade. Identifica cabos partidos, ligações soltas.
**Testador de Isolamento (Megger)**: Mede resistência de isolamento dos cabos. Deteta isolamento degradado (risco de choque/incêndio).
**Detetor de Cabos**: Localiza cabos enterrados em paredes sem destruir. Evita furos acidentais.
**Alicate Amperímetro**: Mede corrente sem interromper circuito. Identifica sobrecargas.
**Testador Diferencial**: Verifica funcionamento do disjuntor diferencial (proteção contra choques).
Diagnóstico preciso resposta prioritária. Orçamento antes de arranjar.`
 },
 {
 title: 'Arranjos Típicas',
 content: `**Substituição disjuntor**: 75-95€ (inclui disjuntor). **Arranjo tomada queimada**: 58-78€. **Substituição cabo danificado**: 110-160€ (até 10m). **Arranjo curto-circuito**: 150-210€. **Substituição quadro elétrico**: 370-650€ (12 módulos). **Ligação terra**: 180-250€.
**Urgências 24h**: Acréscimo 50€ (noturno/fins de semana). Resposta rápida garantida-resposta prioritária conforme localização.
**Garantia**: 12 meses em todas as arranjos. Se o problema voltar, arranjamos gratuitamente.`
 }
 ],
 cta: 'Avaria elétrica? **Ligue já 932 321 892** - Diagnóstico rápido!'
 },
 seo: {
 metaTitle: 'Arranjo Avarias Elétricas Bragança | Urgências 24h | Eletricista Profissional',
 metaDescription: 'Arranjo avarias elétricas em Bragança. Disjuntores, tomadas, curto-circuitos. Diagnóstico profissional. Urgências 24h. Desde 80€. Ligue 932 321 892!',
 keywords: ['arranjo avaria elétrica', 'eletricista urgência bragança', 'disjuntor salta', 'curto-circuito']
 }
 },
 // Services 3-7 (condensed versions)
 {
 id: '3',
 slug: 'quadros-eletricos',
 title: 'Quadros Elétricos',
 subtitle: 'Instalação e Modernização de Quadros Elétricos',
 description: 'Quadros elétricos novos, substituição de quadros antigos, ampliação, disjuntores, diferencial. Conformes RTIEBT.',
 icon: '📊',
 price: 'Desde 370€',
 priceDetails: 'Inclui materiais certificados',
 image: '/images-optimized/services/service-quadro-eletrico.jpg',
 content: {
 intro: 'O quadro elétrico é o coração da instalação. Protege contra sobrecargas, curto-circuitos e choques elétricos. Quadros antigos (fusíveis, sem diferencial) são perigosos e ilegais.',
 sections: [
 {
 title: 'Tipos de Quadros',
 content: `**Monofásico** (230V, até 13.8kVA): Casas pequenas, apartamentos. **Trifásico** (400V, até 41.4kVA): Casas grandes, comércios, indústrias. Componentes: Disjuntor geral, disjuntores divisórios, diferencial 30mA (obrigatório), proteção sobretensões (recomendado). Marcas: Schneider, Legrand, Hager, ABB.`
 },
 {
 title: 'Quando Substituir',
 content: `Quadro com fusíveis (pré-1980), sem diferencial, disjuntores que saltam frequentemente, sinais de queimadura, ampliação da potência contratada, remodelação da casa. Substituição obrigatória para venda/arrendamento se não conforme.`
 },
 {
 title: 'Preços',
 content: `Monofásico básico 370€, Monofásico completo 12 módulos 370-650€, Trifásico 800-1200€, Ampliação (adicionar circuitos) 110-160€. Inclui materiais, instalação, certificação, garantia 5 anos.`
 }
 ],
 cta: 'Quadro elétrico antigo? **Ligue 932 321 892** para modernizar!'
 },
 seo: {
 metaTitle: 'Quadros Elétricos Bragança | Modernização | Eletricista Profissional',
 metaDescription: 'Quadros elétricos novos e modernização em Bragança. Monofásicos, trifásicos. certificação elétrica. Desde 370€. Ligue 932 321 892!',
 keywords: ['quadro elétrico bragança', 'modernização quadro', 'disjuntores', 'diferencial']
 }
 },
 {
 id: '4',
 slug: 'iluminacao-led',
 title: 'Iluminação LED',
 subtitle: 'Economize até 80% na Fatura de Eletricidade',
 description: 'Substituição de lâmpadas incandescentes/halógenas por LED. Iluminação interior, exterior, comercial. Poupança garantida.',
 icon: '💡',
 price: 'Desde 25€',
 priceDetails: 'Por ponto de luz',
 image: '/images-optimized/services/service-iluminacao.jpg',
 content: {
 intro: 'Lâmpadas LED consomem 80% menos energia que incandescentes e duram 25x mais. Investimento recuperado em 1-2 anos através da poupança na fatura.',
 sections: [
 {
 title: 'Vantagens LED',
 content: `Poupança 80% energia, Duração 25.000-50.000h (15-30 anos), Sem aquecimento (seguro), Luz instantânea (sem aquecimento), Sem mercúrio (ecológico), Variedade de cores (2700K-6500K). Ideal para: casas, escritórios, lojas, armazéns, exterior.`
 },
 {
 title: 'Serviços',
 content: `Substituição lâmpadas (mantém luminárias existentes), Instalação spots LED embutidos, Fitas LED decorativas, Iluminação exterior (jardim, fachada), Iluminação comercial (lojas, montras), Sistemas inteligentes (controlo smartphone, dimmers).`
 },
 {
 title: 'Preços e Poupança',
 content: `Substituição lâmpada 45-65€, Spot LED embutido 60-85€, Fita LED (por metro) 25-35€, Projetor LED exterior 120-180€. **Exemplo poupança**: Casa T3 (20 lâmpadas) gasta 600€/ano. Com LED: 120€/ano. Poupança: 480€/ano! Investimento recuperado em 18 meses.`
 }
 ],
 cta: 'Quer poupar na fatura? **Ligue 932 321 892** para orçamento LED!'
 },
 seo: {
 metaTitle: 'Iluminação LED Bragança | Poupança 80% | Eletricista Profissional',
 metaDescription: 'Iluminação LED em Bragança. Substituição lâmpadas, spots, fitas LED. Poupança 80% energia. Desde 25€. Ligue 932 321 892!',
 keywords: ['iluminação led bragança', 'poupar eletricidade', 'lâmpadas led', 'spots led']
 }
 },
 {
 id: '5',
 slug: 'urgencias-24h',
 title: 'Urgências Elétricas 24h',
 subtitle: 'Eletricista de Urgência em Toda a Região',
 description: 'Serviço urgência 24h/7 dias para avarias graves, curto-circuitos, quedas de corrente. Resposta rápida garantida-resposta prioritária.',
 icon: '🚨',
 price: 'Desde 100€',
 priceDetails: 'Acréscimo 50€ horário noturno',
 image: '/images-optimized/services/service-urgencia.jpg',
 content: {
 intro: 'Urgências elétricas requerem intervenção imediata para evitar incêndios, choques elétricos e danos em equipamentos. Eletricista Profissional Atendimento 24h/7d/dia, 365 dias/ano.',
 sections: [
 {
 title: 'Situações de Urgência',
 content: `**Cheiro a queimado**: Cabo sobreaquecido, tomada derretida. Risco de incêndio! **Sem corrente**: Disjuntor geral desligado, avaria rede pública, problema contador. **Choque elétrico**: Aparelho defeituoso, falta terra. Perigo de morte! **Curto-circuito**: Faíscas, disjuntor salta constantemente. **Inundação com eletricidade**: Água em contacto com instalação elétrica.`
 },
 {
 title: 'Tempos de Resposta',
 content: `Bragança e arredores: 15-resposta prioritária. Mirandela, Vila Real, Chaves: 35-resposta prioritária. Miranda do Douro, Mogadouro: 50-resposta prioritária. Atendimento < 3 toques, técnico a caminho < resposta prioritária, SMS com hora estimada.`
 },
 {
 title: 'Preços Urgência',
 content: `Horário normal (8h-20h dias úteis): Desde 70€. Majoração +50% (noites, fins de semana e feriados). Horário noturno (20h-8h): incluído na majoração. Deslocação gratuita. Orçamento telefónico antes de sair. Pagamento: dinheiro, MB Way, Multibanco.`
 }
 ],
 cta: 'Urgência elétrica? **Ligue já 932 321 892** - Atendimento 24h!'
 },
 seo: {
 metaTitle: 'Eletricista Urgência 24h Bragança | Avarias | Eletricista Profissional',
 metaDescription: 'Urgências elétricas 24h em Bragança. Curto-circuitos, avarias, sem corrente. Resposta prioritária para urgências. Ligue 932 321 892!',
 keywords: ['eletricista urgência bragança', 'urgência 24h', 'avaria elétrica urgente', 'sem corrente']
 }
 },
 {
 id: '6',
 slug: 'inspecao-eletrica',
 title: 'Inspeção Elétrica',
 subtitle: 'Diagnóstico Completo da Instalação Elétrica',
 description: 'Inspeção visual e testes elétricos. Identifica problemas de segurança, isolamento, ligação terra. Relatório técnico.',
 icon: '🔍',
 price: 'Desde 150€',
 priceDetails: 'Inclui relatório técnico',
 image: '/images-optimized/services/service-certificacao.jpg',
 content: {
 intro: 'Inspeção elétrica identifica problemas antes de se tornarem perigosos. Recomendada para casas com +20 anos, compra/venda de imóveis, após remodelações.',
 sections: [
 {
 title: 'O Que Inspecionamos',
 content: `Quadro elétrico (conformidade, proteções), Ligação terra (resistência, continuidade), Isolamento cabos (megger), Tomadas e interruptores (polaridade, terra), Iluminação (funcionamento, segurança), Ligações aparelhos (máquinas, esquentadores), Instalação exterior (jardim, portões). Testes: continuidade, isolamento, diferencial, polaridade, resistência terra.`
 },
 {
 title: 'Relatório Técnico',
 content: `Fotografias instalação, Resultados testes elétricos, Lista problemas identificados (críticos, importantes, recomendações), Orçamento para correções, Certificado conformidade (se aprovado). Válido para seguros, vendas, arrendamentos.`
 },
 {
 title: 'Preços',
 content: `Apartamento T1-T2: 150€, Casa T3-T4: 200€, Casa T4+: 280€, Comércio/Indústria: desde 350€. Inclui inspeção completa, testes, relatório técnico. 10% desconto para clientes com contrato manutenção.`
 }
 ],
 cta: 'Precisa de inspeção? **Ligue 932 321 892** para agendar!'
 },
 seo: {
 metaTitle: 'Inspeção Elétrica Bragança | Diagnóstico | Eletricista Profissional',
 metaDescription: 'Inspeção elétrica completa em Bragança. Testes, relatório técnico. Identifica problemas de segurança. Desde 150€. Ligue 932 321 892!',
 keywords: ['inspeção elétrica bragança', 'diagnóstico elétrico', 'teste isolamento', 'certificado elétrico']
 }
 },
 {
 id: '7',
 slug: 'certificacao-eletrica',
 title: 'Certificação Elétrica ',
 subtitle: 'Certificado Obrigatório para Venda e Arrendamento',
 description: 'certificação elétrica de instalações elétricas. Obrigatório por lei para venda, arrendamento e seguros. Processo rápido.',
 icon: '📜',
 price: 'Desde 200€',
 priceDetails: 'Inclui inspeção e certificado',
 image: '/images-optimized/services/service-certificacao.jpg',
 content: {
 intro: 'certificação elétrica é obrigatória por lei (DL 226/2005) para venda, arrendamento e seguros de imóveis. Eletricista Profissional é instalador Trabalho garantido por escrito.',
 sections: [
 {
 title: 'Quando é Obrigatória',
 content: `Venda de imóvel (obrigatório), Arrendamento (obrigatório), Seguro habitação (algumas seguradoras exigem), Instalação nova ou remodelação, Ampliação potência contratada, Ligação de equipamentos de alta potência. Validade: Indefinida (mas recomenda-se renovar a cada 10 anos).`
 },
 {
 title: 'Processo de Certificação',
 content: `Inspeção visual da instalação → Testes elétricos (isolamento, terra, diferencial) → Correção de não conformidades (se necessário) → Emissão Trabalho garantido por escrito → Registo na plataforma → Entrega certificado ao cliente. Prazo: 2-5 dias úteis (se instalação conforme). Válido para todo o território nacional.`
 },
 {
 title: 'Preços',
 content: `Apartamento T1-T2: 200€, Casa T3-T4: 280€, Casa T4+: 350€, Comércio: desde 400€. Inclui inspeção, testes, correções menores, certificado, registo . Se instalação não conforme: orçamento separado para correções.`
 }
 ],
 cta: 'Precisa de certificação? **Ligue 932 321 892** para agendar!'
 },
 seo: {
 metaTitle: 'certificação elétrica Bragança | Certificado Elétrico | Eletricista Profissional',
 metaDescription: 'certificação elétrica em Bragança. Obrigatória para venda e arrendamento. Processo rápido. Desde 200€. Ligue 932 321 892!',
 keywords: ['certificação elétrica bragança', 'certificado elétrico', ' obrigatório', 'venda imóvel']
 }
 }
];
// Export categories for filtering
export const SERVICE_CATEGORIES = [
 'Instalação',
 'Arranjo',
 'Quadros',
 'Iluminação',
 'Urgências',
 'Inspeção',
 'Certificação'
];
// Export helper functions
export const getServiceBySlug = (slug: string): Service | undefined => {
 return SERVICES.find(service => service.slug === slug);
};
export const getServicesByCategory = (category: string): Service[] => {
 if (category === 'Todos') return SERVICES;
 return SERVICES.filter(service => 
 service.title.toLowerCase().includes(category.toLowerCase()) ||
 service.description.toLowerCase().includes(category.toLowerCase())
 );
};
