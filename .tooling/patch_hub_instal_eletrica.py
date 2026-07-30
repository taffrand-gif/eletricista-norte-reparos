#!/usr/bin/env python3
"""Patch the prerendered instalacao-eletrica.html to:
1. Insert 4 new H2 sections (intent-split) after the Vantagens block.
2. Replace the 3-item FAQ with 6 items in the visible FAQ section.
3. Inject FAQPage JSON-LD schema.org block before DGEG-CERT-BLOCK.
4. Preserve DGEG-CERT-BLOCK + V2 hasCredential JSON-LD untouched.

Idempotent (checks for sentinel markers before patching)."""
import re, sys, json, os

PATH = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "client", "public", "instalacao-eletrica.html"
)
PATH = os.path.normpath(PATH)

SENTINEL_H2 = "<!-- ENR-HUB-INSTAL-4H2 -->"
SENTINEL_FAQ = "<!-- ENR-HUB-INSTAL-6FAQ -->"
SENTINEL_SCHEMA = "<!-- ENR-HUB-INSTAL-FAQ-SCHEMA -->"


# ---------------------------------------------------------------------------
# 1. New H2 sections (intent-split synonymous to "instalação elétrica")
# ---------------------------------------------------------------------------
NEW_H2 = SENTINEL_H2 + (
    '<div class="space-y-6 text-lg text-gray-700 mt-12">'
    '<h2 class="text-3xl font-bold text-gray-900 mb-6">Instalação Elétrica Residencial</h2>'
    '<p>A <strong>instalação elétrica residencial</strong> cobre moradias, apartamentos e casas antigas em Trás-os-Montes. A nossa equipa trabalha desde o quadro de colunas até às tomadas finais, com projeto elétrico adequado à potência contratada (até 41,4 kVA, o limite legal do nosso registo DGEG) e escolha de materiais normalizados (cabos com isolamento duplo, disjuntores diferenciais 30 mA, magnetotérmicos calibrados). Para casas T3 obra nova, o trabalho decorre geralmente entre 5 e 10 dias úteis, dependendo da área e do número de pontos elétricos.</p>'
    '<p>Cada intervenção termina com a emissão de <strong>Ficha Eletrotécnica</strong> e <strong>Termo de Responsabilidade</strong> pelo nosso Técnico Responsável de Instalações Elétricas (TRIESP n.º 90062), documentos que a seguradora, o banco e o comercializador de energia exigem. A instalação fica legalizada e conforme a Lei n.º 14/2015 — sem papéis em falta.</p>'
    '<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Instalação Elétrica Comercial e Industrial</h2>'
    '<p>Para <strong>instalações elétricas comerciais e industriais</strong> (lojas, restaurantes, escritórios, pequenos armazéns até 41,4 kVA), o foco muda: trifásico quando a potência o exige, quadros de distribuição sectoriais, iluminação técnica (spots LED reguláveis, sinalética de emergência), tomadas específicas para equipamentos profissionais e proteção diferenciada por circuito. A nossa equipa dimensiona o projeto consoante o caudal de utilização real, não apenas pela área — é o que evita disparos de disjuntor em hora de ponta.</p>'
    '<p>Trabalhamos com as marcas de referência do setor (Schneider, Hager, ABB, Siemens, Legrand, Philips) e respeitamos as normas de instalações elétricas de serviço particular em vigor. Cada obra entrega <strong>Ficha Eletrotécnica + Termo de Responsabilidade</strong> assinados pelo nosso Técnico Responsável DGEG — documentos válidos para a seguradora multi-risco, para o licenciamento camarário e para a vistoria do comercializador.</p>'
    '<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Remodelação Elétrica — Substituir Instalação Antiga</h2>'
    '<p>A <strong>remodelação elétrica</strong> consiste em substituir total ou parcialmente uma instalação envelhecida ou não conforme. É o caso mais frequente em Trás-os-Montes: casas antigas com cabos de tecido, quadros sem diferencial, tomadas em série sem terra. Quando a instalação não passa na inspeção — ou quando o proprietário decide legalizar antes de vender ou arrendar — entramos com obra faseada para minimizar a interrupção.</p>'
    '<p>A remodelação começa sempre por um <strong>diagnóstico elétrico</strong> no local, seguido de orçamento escrito detalhado (materiais + mão de obra 70€/h + deslocação por zona). Após a intervenção, emitimos a Ficha Eletrotécnica e o Termo de Responsabilidade — a partir de 350€ para o serviço de certificação prestado pelo nosso TRIESP n.º 90062, conforme a tabela de preços de certificação DGEG. O serviço completo de remodelação (T3 típica) anda entre 800€ e 2.000€, conforme dimensões e materiais.</p>'
    '<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Quadro Elétrico — Dimensionamento e Substituição</h2>'
    '<p>O <strong>quadro elétrico</strong> é o coração da instalação: concentra disjuntores diferenciais (proteção de pessoas), magnetotérmicos (proteção de cabos), barramento de terra e, cada vez mais, espaço para um carregador de veículo elétrico em casa. Um quadro bem dimensionado é a diferença entre uma instalação que dispara a cada pico e uma que simplesmente funciona durante décadas.</p>'
    '<p>A nossa equipa instala quadros novos (Schneider, Hager, ABB) e substitui quadros antigos sem diferencial ou com proteções desadequadas. Cada substituição termina com testes de continuidade, resistência de isolamento e disparo dos diferenciais — registados na Ficha Eletrotécnica emitida pelo nosso Técnico Responsável DGEG (TRIESP n.º 90062). Para além do quadro, verificamos a potência contratada e, se necessário, tratamos do aumento de potência até 41,4 kVA com o respetivo termo de responsabilidade.</p>'
    '</div>'
)


# ---------------------------------------------------------------------------
# 2. FAQPage JSON-LD schema.org block
# ---------------------------------------------------------------------------
FAQ_SCHEMA_DICT = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "O que é uma instalação elétrica certificada em Portugal?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "É uma instalação executada e validada por um Técnico Responsável de Instalações Elétricas de Serviço Particular (TRIESP) inscrito na DGEG, com seguro de responsabilidade civil válido. A nossa equipa inclui o TRIESP n.º 90062, no domínio Execução em Baixa Tensão (instalações até 41,4 kVA), conforme a Lei n.º 14/2015. No final de cada intervenção emitimos a Ficha Eletrotécnica e o Termo de Responsabilidade — os documentos oficiais que certificam a conformidade da instalação."
            }
        },
        {
            "@type": "Question",
            "name": "Quanto custa uma instalação elétrica completa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "O preço depende do tipo de obra. Uma casa T3 obra nova anda tipicamente entre 1.500€ e 3.000€; uma remodelação completa entre 800€ e 2.000€; uma instalação comercial pequena (50 m²) entre 2.500€ e 5.000€. O serviço certificado de emissão de Ficha Eletrotécnica e Termo de Responsabilidade tem preço de partida de 350€, mediante orçamento escrito antes de qualquer intervenção. Mão de obra avulsa: 70€/h + deslocação por zona. Não cobramos nada antes de apresentar o orçamento."
            }
        },
        {
            "@type": "Question",
            "name": "Quem pode fazer uma instalação elétrica em Portugal?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Por lei (Lei n.º 14/2015), instalações elétricas em Baixa Tensão até 41,4 kVA só podem ser executadas por um Técnico Responsável de Instalações Elétricas de Serviço Particular (TRIESP) inscrito na DGEG, com seguro de responsabilidade civil válido (mínimo 50.000€). A Norte Reparos cumpre este requisito: a nossa equipa integra o TRIESP n.º 90062, no domínio Execução em Baixa Tensão. No final emitimos a Ficha Eletrotécnica e o Termo de Responsabilidade."
            }
        },
        {
            "@type": "Question",
            "name": "Como contratar uma instalação elétrica certificada em Trás-os-Montes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Passo 1: ligue 932 321 892 ou envie WhatsApp e descreva o que precisa (obra nova, remodelação, aumento de potência, legalização). Passo 2: a nossa equipa desloca-se à sua moradia ou comércio, avalia a instalação existente e entrega orçamento escrito detalhado — sem compromisso. Passo 3: marcamos a intervenção; a nossa equipa executa o trabalho, entrega a Ficha Eletrotécnica e o Termo de Responsabilidade assinados pelo nosso Técnico Responsável DGEG (TRIESP n.º 90062), válidos para apresentar à seguradora, ao banco e ao comercializador de energia."
            }
        },
        {
            "@type": "Question",
            "name": "Quanto tempo demora uma instalação elétrica?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depende do tipo de obra. Casa T3 obra nova: geralmente 5 a 10 dias úteis. Remodelação completa: 3 a 7 dias úteis consoante a complexidade. Instalação comercial pequena: 3 a 5 dias úteis. Substituição de quadro elétrico: 1 a 2 dias úteis. Instalação de carregador de veículo elétrico (wallbox): meio dia a um dia. Estes prazos são indicativos — a duração real é confirmada no orçamento escrito após o diagnóstico no local."
            }
        },
        {
            "@type": "Question",
            "name": "Preciso de licença para uma instalação elétrica nova?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, para obras novas ou remodelações completas que mexam na potência ou nos circuitos. Tratamos de toda a burocracia, incluindo o projeto elétrico, o licenciamento junto da câmara municipal e a comunicação ao comercializador de energia. Para instalações até 41,4 kVA em Baixa Tensão, a nossa equipa — com o TRIESP n.º 90062 — trata de todo o processo legal, incluindo a emissão da Ficha Eletrotécnica e do Termo de Responsabilidade no final."
            }
        }
    ]
}
FAQ_SCHEMA_JSON = json.dumps(FAQ_SCHEMA_DICT, separators=(",", ":"), ensure_ascii=False)
FAQ_SCHEMA_BLOCK = SENTINEL_SCHEMA + '<script type="application/ld+json">' + FAQ_SCHEMA_JSON + '</script>\n'


# ---------------------------------------------------------------------------
# 3. FAQ visible 6-item block (replaces the 3-item prerendered one)
# ---------------------------------------------------------------------------
def faq_items_html(items):
    out = []
    for q, a in items:
        out.append(
            '<div data-loc="client/src/components/FAQSection.tsx:45" '
            'class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-amber-300 transition-colors" '
            'itemScope itemType="https://schema.org/Question">'
            '<details class="group">'
            '<summary data-loc="client/src/components/FAQSection.tsx:52" '
            'class="flex items-center justify-between p-6 cursor-pointer list-none" itemProp="name">'
            '<span data-loc="client/src/components/FAQSection.tsx:56" '
            'class="text-lg font-semibold text-gray-900 group-open:text-amber-600">' + q + '</span>'
            '<span data-loc="client/src/components/FAQSection.tsx:59" '
            'class="ml-4 flex-shrink-0 text-amber-600 group-open:rotate-180 transition-transform">'
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">'
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>'
            '</svg></span></summary>'
            '<div data-loc="client/src/components/FAQSection.tsx:67" '
            'class="px-6 pb-6 pt-2 border-t border-gray-100" '
            'itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">'
            '<div data-loc="client/src/components/FAQSection.tsx:73" '
            'class="prose prose-lg max-w-none text-gray-700" itemProp="text">'
            '<p>' + a + '</p>'
            '</div></div></details></div>'
        )
    return "".join(out)


FAQ_ITEMS = [
    ("O que é uma instalação elétrica certificada em Portugal?",
     "É uma instalação executada e validada por um Técnico Responsável de Instalações Elétricas de Serviço Particular (TRIESP) inscrito na DGEG, com seguro de responsabilidade civil válido. A nossa equipa inclui o TRIESP n.º 90062, no domínio Execução em Baixa Tensão (instalações até 41,4 kVA), conforme a Lei n.º 14/2015. No final de cada intervenção emitimos a Ficha Eletrotécnica e o Termo de Responsabilidade — os documentos oficiais que certificam a conformidade da instalação."),
    ("Quanto custa uma instalação elétrica completa?",
     "O preço depende do tipo de obra. Uma casa T3 obra nova anda tipicamente entre 1.500€ e 3.000€; uma remodelação completa entre 800€ e 2.000€; uma instalação comercial pequena (50 m²) entre 2.500€ e 5.000€. O serviço certificado de emissão de Ficha Eletrotécnica e Termo de Responsabilidade tem preço de partida de 350€, mediante orçamento escrito antes de qualquer intervenção. Mão de obra avulsa: 70€/h + deslocação por zona. Não cobramos nada antes de apresentar o orçamento."),
    ("Quem pode fazer uma instalação elétrica em Portugal?",
     "Por lei (Lei n.º 14/2015), instalações elétricas em Baixa Tensão até 41,4 kVA só podem ser executadas por um Técnico Responsável de Instalações Elétricas de Serviço Particular (TRIESP) inscrito na DGEG, com seguro de responsabilidade civil válido (mínimo 50.000€). A Norte Reparos cumpre este requisito: a nossa equipa integra o TRIESP n.º 90062, no domínio Execução em Baixa Tensão. No final emitimos a Ficha Eletrotécnica e o Termo de Responsabilidade."),
    ("Como contratar uma instalação elétrica certificada em Trás-os-Montes?",
     "Passo 1: ligue 932 321 892 ou envie WhatsApp e descreva o que precisa (obra nova, remodelação, aumento de potência, legalização). Passo 2: a nossa equipa desloca-se à sua moradia ou comércio, avalia a instalação existente e entrega orçamento escrito detalhado — sem compromisso. Passo 3: marcamos a intervenção; a nossa equipa executa o trabalho, entrega a Ficha Eletrotécnica e o Termo de Responsabilidade assinados pelo nosso Técnico Responsável DGEG (TRIESP n.º 90062), válidos para apresentar à seguradora, ao banco e ao comercializador de energia."),
    ("Quanto tempo demora uma instalação elétrica?",
     "Depende do tipo de obra. Casa T3 obra nova: geralmente 5 a 10 dias úteis. Remodelação completa: 3 a 7 dias úteis consoante a complexidade. Instalação comercial pequena: 3 a 5 dias úteis. Substituição de quadro elétrico: 1 a 2 dias úteis. Instalação de carregador de veículo elétrico (wallbox): meio dia a um dia. Estes prazos são indicativos — a duração real é confirmada no orçamento escrito após o diagnóstico no local."),
    ("Preciso de licença para uma instalação elétrica nova?",
     "Sim, para obras novas ou remodelações completas que mexam na potência ou nos circuitos. Tratamos de toda a burocracia, incluindo o projeto elétrico, o licenciamento junto da câmara municipal e a comunicação ao comercializador de energia. Para instalações até 41,4 kVA em Baixa Tensão, a nossa equipa — com o TRIESP n.º 90062 — trata de todo o processo legal, incluindo a emissão da Ficha Eletrotécnica e do Termo de Responsabilidade no final."),
]
NEW_FAQ_BLOCK = SENTINEL_FAQ + faq_items_html(FAQ_ITEMS)


# ---------------------------------------------------------------------------
# Patcher
# ---------------------------------------------------------------------------
def patch():
    with open(PATH, "r", encoding="utf-8") as f:
        html = f.read()

    changes = []

    # --- 1. Insert 4 H2 sections after Vantagens end
    if SENTINEL_H2 not in html:
        # Anchor: end of "Garantia: Trabalho profissional com garantia extensa" + </li></ul></div></div>
        anchor = '<strong data-loc="client/src/pages/InstalacaoEletrica.tsx:194">Garantia:</strong> Trabalho profissional com garantia extensa</span></li></ul></div></div>'
        if anchor not in html:
            raise SystemExit("Anchor #1 not found")
        html = html.replace(anchor, anchor + NEW_H2, 1)
        changes.append("h2_4_sections")
    else:
        changes.append("h2_4_sections:SKIP")

    # --- 2. Replace FAQ items (3 -> 6) in the visible FAQ section
    if SENTINEL_FAQ not in html:
        # Find the FAQ section. The 3 items are between "space-y-6" inside FAQSection and the closing of the same section.
        # Anchor on the "Preciso de licença para instalação elétrica?" item end.
        # Use a more general approach: find the entire space-y-6 block in the FAQSection section.
        # Locate the FAQSection's <div class="space-y-6"> that contains "Oferecem garantia na instalação elétrica?"
        m = re.search(
            r'(<div data-loc="client/src/components/FAQSection\.tsx:44" class="space-y-6">)(.*?)(</div></section></section>)',
            html,
            re.DOTALL,
        )
        if not m:
            raise SystemExit("Anchor #2 (FAQ items block) not found")
        before, old_items, after = m.group(1), m.group(2), m.group(3)
        # Confirm the old block has 3 items (look for the "Oferecem garantia" marker)
        if "Oferecem garantia" not in old_items:
            raise SystemExit("Anchor #2 mismatch: did not find 'Oferecem garantia' in old FAQ block")
        new_block = before + NEW_FAQ_BLOCK + after
        html = html[:m.start()] + new_block + html[m.end():]
        changes.append("faq_3_to_6_items")
    else:
        changes.append("faq_3_to_6_items:SKIP")

    # --- 3. Inject FAQPage JSON-LD before DGEG-CERT-BLOCK
    if SENTINEL_SCHEMA not in html:
        anchor = "<!-- DGEG-CERT-BLOCK -->"
        if anchor not in html:
            raise SystemExit("Anchor #3 (DGEG-CERT-BLOCK) not found")
        html = html.replace(anchor, FAQ_SCHEMA_BLOCK + anchor, 1)
        changes.append("faq_schema_jsonld")
    else:
        changes.append("faq_schema_jsonld:SKIP")

    with open(PATH, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"PATCH OK -> {PATH}")
    print("Changes:", changes)
    return changes


if __name__ == "__main__":
    patch()