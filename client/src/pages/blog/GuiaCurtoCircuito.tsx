import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';

// Página-espelho INTENÇÃO-INFORMATIVA (não urgência).
// Objetivo SEO/GEO: aparecer como 2.º resultado orgânico no mesmo SERP que o pilar
// https://eletricista-urgente.pt/curto-circuito, capturando intent-info / prevenção.
// Cross-link 1 sentido (ENR -> EU) apenas; sem reciprocidade (anti-cannibalisation, R0).
export default function GuiaCurtoCircuito() {
  return (
    <>
      <Helmet>
        <title>Curto-Circuito: Causas, Prevenção e Sinais no Quadro | Guia Norte Reparos</title>
        <meta
          name="description"
          content="O que é um curto-circuito, o que o provoca e como prevenir. Sinais no quadro elétrico, falhas de isolamento, sobrecarga. Saiba quando chamar eletricista e o que fazer antes de telefonar."
        />
        <link rel="canonical" href="https://eletricista-norte-reparos.pt/blog/guia-curto-circuito" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O que é um curto-circuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Curto-circuito é uma ligação acidental de baixa resistência entre dois condutores que deveriam estar isolados (fase e neutro, ou fase e terra). A corrente sobe de imediato para valores muito acima do normal, o disjuntor magnetotérmico dispara em milissegundos para cortar o circuito e proteger a instalação."
                }
              },
              {
                "@type": "Question",
                "name": "O que provoca um curto-circuito em casa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As causas mais comuns em habitações são: isolamento danificado dos fios (idade, calor, roedores), ligações mal apertadas nas tomadas ou no quadro, humidade a infiltrar-se em caixas de derivação, furos em paredes que atravessam cabos, aparelhos com cablagem interna em mau estado, e extensões sobrecarregadas ou em cadeia."
                }
              },
              {
                "@type": "Question",
                "name": "Como prevenir um curto-circuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A prevenção passa por: instalação elétrica com terra e disjuntor diferencial, certificado conforme as RTIEBT; revisão periódica da instalação (a cada 10 anos ou após 20 anos de utilização); não ligar extensões em cadeia; substituir fichas e tomadas partidas; manter as caixas de derivação estanques; chamar um eletricista certificado para qualquer alteração à instalação fixa."
                }
              },
              {
                "@type": "Question",
                "name": "Quais são os sinais no quadro de um curto-circuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O sinal principal é o disjuntor magnetotérmico (parcial) disparar de imediato ao ser religado — sem ter ligado nenhum aparelho novo. Sinais acompanhantes: faísca visível ou audível, cheiro a queimado, tomada ou interruptor quente ao toque, zona da parede com marca escura em redor de uma tomada. Se houver faísca ou cheiro a queimado, desligue o disjuntor geral e não toque."
                }
              },
              {
                "@type": "Question",
                "name": "Quando chamar um eletricista por causa de um curto-circuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Chame sempre que o disjuntor disparar mais do que uma vez na mesma situação, se notar cheiro a queimado, se uma tomada ou zona da parede estiver quente, se vir faísca, ou se o disjuntor diferencial (não o magnetotérmico) for o que dispara repetidamente. Não force o disjuntor a armar repetidamente — cada tentativa aumenta o risco de arco elétrico e incêndio."
                }
              },
              {
                "@type": "Question",
                "name": "O que fazer antes de telefonar ao eletricista?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Se for seguro, desligue o disjuntor parcial correspondente (ou o geral) para isolar o problema. Anote: qual o disjuntor que dispara, se dispara de imediato ao armar ou só depois de ligar algum aparelho, se há cheiro ou calor. Esta informação ajuda o diagnóstico e evita deslocações desnecessárias. Não tente encontrar o curto-circuito por conta própria se não tiver formação — risco de eletrocussão."
                }
              },
              {
                "@type": "Question",
                "name": "Um curto-circuito é sempre urgente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. Um curto-circuito que disparou uma vez e foi isolado (disjuntor parcial desligado) pode esperar algumas horas ou um dia para ser diagnosticado em horário normal. É urgente quando há faísca visível, cheiro a queimado, tomada quente, ou quando afeta circuitos essenciais (iluminação geral, frigorífico, aquecimento). Nestes casos, contacte piquete 24h."
                }
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Curto-Circuito: Causas, Prevenção e Sinais no Quadro",
            "description": "Guia informativo sobre curto-circuito: o que é, o que provoca, como prevenir e quando chamar eletricista. Espelho do pilar eletricista-urgente.pt/curto-circuito com intenção puramente informativa.",
            "author": { "@type": "Organization", "name": "Norte Reparos" },
            "publisher": {
              "@type": "Organization",
              "name": "Norte Reparos",
              "url": "https://eletricista-norte-reparos.pt"
            },
            "datePublished": "2026-07-17",
            "dateModified": "2026-07-17",
            "url": "https://eletricista-norte-reparos.pt/blog/guia-curto-circuito",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://eletricista-norte-reparos.pt/blog/guia-curto-circuito"
            }
          })}
        </script>
      </Helmet>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
            ← Voltar ao Blog
          </Link>
        </div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Curto-Circuito: Causas, Prevenção e Sinais no Quadro Elétrico
          </h1>
          <p className="text-lg text-gray-600">
            Guia informativo · Prevenção, diagnóstico seguro e quando chamar eletricista · ~6 min de leitura
          </p>
        </header>
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
            <p className="text-lg font-semibold text-gray-900 mb-2">Em resumo:</p>
            <p className="text-gray-800">
              Um <strong>curto-circuito</strong> acontece quando dois condutores que deveriam estar isolados se tocam ou ficam ligados por um caminho de baixa resistência. O disjuntor magnetotérmico dispara em milissegundos para limitar os danos. A maioria dos casos em habitação vem de <strong>isolamento deteriorado</strong>, <strong>humidade</strong>, <strong>ligações mal feitas</strong> ou <strong>furos em paredes</strong> que atravessam cabos. A prevenção é simples: instalação certificada, manutenção periódica e disjuntor diferencial a funcionar.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. O que é, exatamente, um curto-circuito</h2>
          <p>
            Em condições normais, a corrente elétrica circula pela fase, alimenta o aparelho, e regressa pelo neutro. A resistência dos condutores e dos aparelhos limita a intensidade a valores previsíveis (por exemplo, 10A num circuito de iluminação). Num curto-circuito, surge um <strong>caminho de baixa resistência</strong> que contorna essa limitação — fase a tocar no neutro, fase a tocar na terra, ou os dois condutores a tocarem numa superfície condutora exposta.
          </p>
          <p>
            A corrente sobe para centenas ou milhares de ampères em milissegundos. Se nada cortar o circuito, os fios aquecem, o isolamento derrete, e há risco de incêndio. O disjuntor magnetotérmico está desenhado para detetar este pico e abrir o circuito em poucos milissegundos — é a primeira linha de defesa.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Causas mais frequentes em habitação</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Isolamento deteriorado pela idade</strong> — instalações com 20, 30 ou mais anos, sem revisão, têm fios com isolamento ressequido que parte à mais pequena torção.</li>
            <li><strong>Humidade em caixas de derivação</strong> — comum em casas antigas, caves, garagens e zonas rurais de Trás-os-Montes onde a humidade se infiltra pelas paredes de granito.</li>
            <li><strong>Ligação mal apertada</strong> — um fio pouco apertado num borne de tomada gera calor, que degrada o isolamento, que provoca o curto-circuito. Efeito bola de neve.</li>
            <li><strong>Furos em paredes</strong> — ao pendurar uma prateleira ou instalar um varão, é fácil atravessar um cabo embebido. Use sempre um detetor de metais/tensão antes de furar.</li>
            <li><strong>Aparelhos com cablagem danificada</strong> — extensões pisadas, fichas partidas, cabos expostos junto à entrada do aparelho.</li>
            <li><strong>Sobrecargas crónicas</strong> — um circuito a trabalhar permanentemente acima da capacidade nominal envelhece os fios por sobreaquecimento, mesmo que o disjuntor nunca tenha disparado.</li>
            <li><strong>Roedores</strong> — em zonas rurais e armazéns, ratazanas roem o isolamento dos cabos. Causa clássica de curto-circuito intermitente.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Sinais no quadro elétrico</h2>
          <p>
            O quadro elétrico da habitação fala. Os sinais a que vale a pena estar atento são:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Disjuntor parcial dispara de imediato ao armar</strong>, sem ter ligado nenhum aparelho novo. Sinal clássico de curto-circuito franco.</li>
            <li><strong>Disjuntor dispara só quando ligo um aparelho específico</strong>. Pode ser aparelho avariado OU tomada com mau contacto.</li>
            <li><strong>Disjuntor diferencial dispara</strong> (não o magnetotérmico). Indica fuga de corrente, não curto-circuito clássico, mas mecanismo semelhante — chamar eletricista.</li>
            <li><strong>Faísca visível ou audível</strong> ao ligar uma ficha ou armar o disjuntor.</li>
            <li><strong>Cheiro a queimado</strong> (plástico, borracha) sem origem visível.</li>
            <li><strong>Tomada, interruptor ou zona da parede quente ao toque</strong>.</li>
            <li><strong>Marca escura</strong> em redor de uma tomada ou interruptor.</li>
          </ul>
          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
            <p className="text-gray-800 font-semibold mb-2">Se houver faísca, cheiro a queimado ou zona quente:</p>
            <p className="text-gray-800">
              Desligue o disjuntor geral no quadro. Não toque na tomada nem no interruptor. Ventile o espaço se houver cheiro intenso. Ligue para um eletricista — não force o disjuntor parcial a armar repetidamente, isso alimenta o arco elétrico e agrava o problema.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Como prevenir</h2>
          <p>
            A maioria dos curto-circuitos em habitação é evitável com cinco cuidados:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li>
              <strong>Instalação certificada conforme as RTIEBT</strong> — disjuntor magnetotérmico em cada circuito, disjuntor diferencial (30 mA, tipo AC ou A), condutor de terra efetivo em todas as tomadas. Se a sua casa não tem diferencial a funcionar, está em risco.
            </li>
            <li>
              <strong>Revisão periódica por eletricista certificado</strong> — a cada 10 anos em instalações recentes, com maior frequência em casas com mais de 20 anos. A revisão mede o isolamento dos fios, testa o diferencial, aperta os bornes que possam ter folga.
            </li>
            <li>
              <strong>Não fazer “obras” elétricas por conta própria</strong> — uma tomada trocada sem cuidado pode deixar um fio mal isolado dentro da caixa. Resultado: curto-circuito seis meses depois.
            </li>
            <li>
              <strong>Não usar extensões em cadeia</strong> — uma extensão por tomada, dimensionada para a carga. Extensões em série ("margarida") são uma causa frequente de curto-circuito em cozinhas e escritórios em casa.
            </li>
            <li>
              <strong>Detetor de tensão antes de furar</strong> — antes de qualquer furo em parede, utilize um detetor de tensão/cabos. Custa 25€ a 60€ e evita anos de problemas.
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Quando chamar eletricista</h2>
          <p>
            Resumo prático do que <strong>exige</strong> eletricista:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>O disjuntor parcial dispara repetidamente na mesma situação.</li>
            <li>O disjuntor diferencial dispara (independentemente do que tenha ligado).</li>
            <li>Há cheiro a queimado, faísca, tomada quente, marca escura numa tomada.</li>
            <li>A instalação tem mais de 20 anos e nunca foi revisada.</li>
            <li>Quer substituir fichas, interruptores ou tomadas sem experiência.</li>
            <li>Detetou roeduras em cabos (armazéns, garagens, anexos).</li>
          </ul>
          <p>
            Não exige eletricista imediato, mas exige agendamento a curto prazo:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Lâmpada fundida (mesmo que ilumine mal toda a divisão).</li>
            <li>Tomada solta da parede mas sem cheiro, calor nem faísca.</li>
            <li>Substituição programada de quadro, certificação periódica.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Diferença entre curto-circuito e sobrecarga</h2>
          <p>
            Curto-circuito e sobrecarga são os dois grandes motivos de disparo do disjuntor magnetotérmico, mas têm naturezas diferentes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Sobrecarga</strong>: o circuito está a pedir mais corrente do que suporta. Exemplo: 3.500 W num circuito dimensionado para 3.000 W. Dispara passados alguns minutos, não de imediato.</li>
            <li><strong>Curto-circuito</strong>: corrente sobe para valores extremos por um caminho de baixa resistência. Dispara em milissegundos ao armar.</li>
          </ul>
          <p>
            Em ambos os casos o disjuntor está a fazer o seu trabalho. O que importa é perceber a causa — uma sobrecarga crónica deteriora a instalação ao longo do tempo; um curto-circuito pontual pode ter sido um incidente isolado.
          </p>

          <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Perguntas frequentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Curto-circuito é o mesmo que “falha de energia”?</h3>
              <p className="text-gray-700">Não. Curto-circuito é uma falha interna num circuito, geralmente detetada pelo disjuntor. Falha de energia é perda de alimentação — pode ser da rede (EDP), do disjuntor geral, ou de um problema a montante. Têm causas e soluções diferentes.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Posso religar o disjuntor depois de um curto-circuito?</h3>
              <p className="text-gray-700">Pode tentar uma vez, se não houver cheiro, calor, faísca ou marca escura. Se voltar a disparar de imediato, deixe desligado e chame eletricista — é um curto-circuito ativo.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Um disjuntor que dispara protege a casa de incêndio?</h3>
              <p className="text-gray-700">Sim, se for o magnetotérmico correto para a secção dos fios. É por isso que instalações mais antigas com disjuntores subdimensionados são particularmente perigosas — o disjuntor dispara tarde demais.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Quanto custa prevenir/reparar curto-circuitos?</h3>
              <p className="text-gray-700">Em Trás-os-Montes, a mão de obra de eletricista é de 70€/h em horário normal (2ª-6ª, 9h-18h), com deslocação entre 15€ e 65€ consoante a zona (Z1 a Z6) — orçamento por escrito antes da intervenção. Reparações mais comuns (substituir tomada danificada, isolar cabo com falha) são tipicamente concluídas numa visita. Instalações com diagnóstico mais amplo variam caso a caso, sempre com orçamento prévio detalhado.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Posso prevenir com DPS (dispositivo de proteção contra sobretensões)?</h3>
              <p className="text-gray-700">O DPS protege contra picos de tensão vindos da rede (trovoadas, manobras da EDP), não contra curto-circuitos internos. São complementares, não substitutos. Em zonas rurais com trovoadas frequentes, ter DPS no quadro é uma camada adicional útil.</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-red-100 border-l-4 border-red-600 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Está a ter um curto-circuito agora?</h2>
            <p className="text-gray-800 mb-4">
              Se há faísca, cheiro a queimado ou zona quente — desligue o disjuntor geral e ligue de imediato. Em horário normal falamos consigo, confirmamos a zona e damos orçamento por escrito antes da deslocação.
            </p>
            <p className="text-2xl font-bold text-red-700 mb-4">
              <a href="tel:+351932321892" className="hover:underline">📞 +351 932 321 892</a>
              <span className="mx-3 text-gray-500">·</span>
              <a href="https://wa.me/351932321892" className="hover:underline">WhatsApp</a>
            </p>
            <p className="text-sm text-gray-600">
              Bragança · Mirandela · Macedo de Cavaleiros · Vinhais · Mogadouro · Miranda do Douro · Torre de Moncorvo · Chaves · Vila Real e arredores
            </p>
          </div>

          <div className="mt-8 p-6 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Página pilar urgência (2.º resultado orgânico)</h2>
            <p className="text-gray-700 mb-3">
              Esta página cobre a parte <strong>informativa e de prevenção</strong>. Se procura reparação urgente de curto-circuito, a página abaixo cobre diagnóstico, intervenção e tarifário 24h:
            </p>
            <p className="text-gray-800">
              <a
                href="https://eletricista-urgente.pt/curto-circuito"
                className="text-red-700 font-semibold hover:underline"
                rel="noopener"
              >
                ⚡ Eletricista-Urgente.pt · Curto-Circuito (intervenção 24h, orçamento por escrito)
              </a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}