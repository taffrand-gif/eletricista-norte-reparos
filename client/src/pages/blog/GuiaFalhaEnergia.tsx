import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';

// Página-espelho INTENÇÃO-INFORMATIVA (não urgência).
// Objetivo SEO/GEO: aparecer como 2.º resultado orgânico no mesmo SERP que o pilar
// https://eletricista-urgente.pt/falha-energia, capturando intent-info / prevenção.
// Cross-link 1 sentido (ENR -> EU) apenas; sem reciprocidade (anti-cannibalisation, R0).
export default function GuiaFalhaEnergia() {
  return (
    <>
      <Helmet>
        <title>Falha de Energia em Casa: Prevenção, Quadro e Segurança | Guia Norte Reparos</title>
        <meta
          name="description"
          content="O que fazer quando falta a energia em casa. Causas comuns, como verificar o quadro elétrico, falhas da rede EDP e medidas de prevenção. Guia informativo Norte Reparos."
        />
        <link rel="canonical" href="https://eletricista-norte-reparos.pt/blog/guia-falha-energia" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Porque é que a casa ficou sem energia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pode ser: falha geral da rede (EDP), disjuntor geral ou diferencial do quadro que dispararam, sobrecarga num circuito parcial, ou um problema interno da instalação (curto-circuito, fuga de corrente, ligação solta). A forma mais rápida de perceber é olhar para o quadro e para a rua — se os vizinhos também estão sem luz, é falha da rede."
                }
              },
              {
                "@type": "Question",
                "name": "Como saber se é falha geral da EDP ou só na minha casa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Verifique a rua, o quadro e o contador: olhe pela janela para ver se a iluminação pública ou casas vizinhas estão desligadas; consulte os canais oficiais da EDP para saber se existe uma avaria reportada; veja se o contador digital apresenta indicação de falha (mensagem ou ecrã apagado). Se os vizinhos também estão sem luz, é falha geral — não é problema da sua instalação."
                }
              },
              {
                "@type": "Question",
                "name": "Como prevenir falhas de energia em casa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A prevenção mais eficaz é manter a instalação em bom estado: revisão periódica por eletricista certificado, disjuntor diferencial a funcionar, DPS (proteção contra sobretensões) para picos da rede, e evitar sobrecargas crónicas. Em zonas rurais com falhas frequentes da rede, ter um sistema simples de iluminação de emergência (lanterna, velas) é prudente."
                }
              },
              {
                "@type": "Question",
                "name": "O que fazer se só uma parte da casa ficou sem energia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Se só uma parte da casa está sem energia, o problema está num circuito parcial. Vá ao quadro, identifique qual disjuntor disparou (está na posição desligado, diferente dos outros), desligue todos os aparelhos desse circuito, e rearme o disjuntor. Se voltar a disparar, há curto-circuito ou fuga de corrente nesse circuito — não force, desligue e chame eletricista."
                }
              },
              {
                "@type": "Question",
                "name": "Porque é que o disjuntor diferencial dispara e não o magnetotérmico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O disjuntor magnetotérmico protege contra curto-circuito e sobrecarga (picos de corrente). O disjuntor diferencial protege contra fuga de corrente à terra (que pode eletrocutar pessoas). Se só o diferencial dispara, há uma fuga em algum circuito — aparelho com isolamento danificado, humidade, ligação à terra avariada. Chame eletricista para identificar e corrigir."
                }
              },
              {
                "@type": "Question",
                "name": "É seguro andar sem eletricidade em casa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, em geral é seguro, desde que se tomem precauções: desligar aparelhos sensíveis (computadores, televisão) da tomada para os proteger de picos quando a energia regressar; não abrir frigorífico/congelador mais do que o necessário; não usar velas em locais com pouca ventilação ou perto de cortinas; verificar se o disjuntor geral não disparou (se disparou, há problema interno e a casa pode ficar sob tensão quando a energia voltar)."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto tempo pode uma casa ficar sem energia em segurança?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Em condições normais, uma habitação pode ficar várias horas sem energia sem risco estrutural. O principal cuidado é com a cadeia do frio (frigorífico/congelador): um frigorífico ou congelador fechado conserva melhor a temperatura; o tempo depende do equipamento e de quantas vezes é aberto. Em zonas rurais com falhas frequentes, vale a pena ter alimentos que não exijam frio."
                }
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Falha de Energia em Casa: Prevenção, Quadro e Segurança",
            "description": "Guia informativo sobre falha de energia em casa: como distinguir falha geral da EDP de problema interno, como verificar o quadro, e medidas de prevenção. Espelho do pilar eletricista-urgente.pt/falha-energia.",
            "author": { "@type": "Organization", "name": "Norte Reparos" },
            "publisher": {
              "@type": "Organization",
              "name": "Norte Reparos",
              "url": "https://eletricista-norte-reparos.pt"
            },
            "datePublished": "2026-07-17",
            "dateModified": "2026-07-17",
            "url": "https://eletricista-norte-reparos.pt/blog/guia-falha-energia",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://eletricista-norte-reparos.pt/blog/guia-falha-energia"
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
            Falha de Energia em Casa: Causas, Quadro Elétrico e Segurança
          </h1>
          <p className="text-lg text-gray-600">
            Guia informativo · Como identificar a origem, prevenir e agir em segurança · leitura
          </p>
        </header>
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
            <p className="text-lg font-semibold text-gray-900 mb-2">Em resumo:</p>
            <p className="text-gray-800">
              Falta de energia em casa pode ter três origens: <strong>falha da rede EDP</strong> (vizinhos também sem luz), <strong>disjuntor do quadro que disparou</strong> (só a sua casa, ou parte dela) ou <strong>avaria interna na instalação</strong> (curto-circuito, fuga, ligação avariada). O primeiro passo é sempre olhar para o quadro elétrico e para a rua. Se os vizinhos também estão sem luz, é falha geral — não vale a pena chamar eletricista antes de a rede ser reposta.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Os três tipos de falha</h2>
          <p>
            Antes de mais nada, vale a pena separar os cenários:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Falha geral da rede (EDP Distribuição)</strong> — uma zona mais alargada está sem eletricidade. Os vizinhos também estão sem luz. A iluminação pública está apagada. É da responsabilidade da EDP, não da sua instalação.</li>
            <li><strong>Disparo do disjuntor no seu quadro</strong> — só a sua casa (ou parte) está sem energia, mas a rua tem luz. O problema é no seu quadro ou na sua instalação. Pode ser sobrecarga, curto-circuito ou fuga de corrente.</li>
            <li><strong>Avaria interna</strong> — há disjuntor armado mas alguma parte da casa não funciona (uma tomada, uma divisão, um circuito específico). Pode ser ligação solta, fio partido dentro da parede, tomada avariada.</li>
          </ul>
          <p>
            A diferenciação entre os três é o primeiro passo para decidir se vale a pena chamar eletricista ou se basta esperar que a EDP repõe.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Como verificar o quadro elétrico</h2>
          <p>
            O quadro elétrico da sua casa está normalmente na entrada, na cozinha ou num corredor. Ao abrir a porta, vê um conjunto de disjuntores com uma alavanca. Os disjuntores que estão todos na posição "ligado" (normalmente para cima) estão ativos. Um disjuntor disparado está numa posição intermédia ou para baixo.
          </p>
          <p>
            O que procurar:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Disjuntor geral</strong> (geralmente o maior, no topo) — se estiver disparado, toda a casa está sem energia.</li>
            <li><strong>Disjuntor diferencial</strong> (identificado pela sigla "ID" ou com um botão de teste) — protege contra fuga de corrente. Se disparou, há fuga à terra em algum circuito.</li>
            <li><strong>Disjuntores parciais</strong> (um por circuito: iluminação, tomadas, cozinha, etc.) — se um disparou, só a zona que ele protege está sem energia.</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
            <p className="text-gray-800 font-semibold mb-2">Como rearmar em segurança:</p>
            <ol className="list-decimal pl-6 space-y-1 text-gray-800">
              <li>Identifique qual disjuntor disparou (posição diferente dos outros).</li>
              <li>Desligue todos os aparelhos e luzes do circuito afetado.</li>
              <li>Coloque o disjuntor na posição desligado (para baixo) e depois em ligado (para cima).</li>
              <li>Se aguentar mais do que uns segundos, religue os aparelhos um a um. Quando voltar a disparar, o último aparelho ligado é o suspeito.</li>
              <li>Se voltar a disparar imediatamente, deixe desligado — há curto-circuito ou fuga ativa.</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Falha da rede EDP — o que fazer</h2>
          <p>
            Se confirmou que a falha é geral (vizinhos sem luz, iluminação pública apagada), o que está nas suas mãos:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Verificar os canais oficiais da EDP</strong> para confirmar se há falha reportada na sua zona.</li>
            <li><strong>Desligar aparelhos sensíveis</strong> da tomada para os proteger quando a energia voltar (computadores, televisão, carregadores). Picos de tensão no regresso da rede podem queimar fontes.</li>
            <li><strong>Não abrir o frigorífico/congelador</strong> mais do que o necessário. Manter as portas fechadas ajuda a conservar a temperatura; o tempo depende do equipamento e da utilização.</li>
            <li><strong>Não usar velas em locais com corrente de ar</strong> ou perto de cortinas. Ter uma lanterna em local acessível é mais seguro.</li>
            <li><strong>Não tentar soluções improvisadas</strong> (grupos geradores sem ligação própria, gambiarras). Risco real de eletrocussão ou de danificar a instalação.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Prevenção — como evitar falhas</h2>
          <p>
            Nem todas as falhas são evitáveis (uma trovoada que derruba uma linha não se controla), mas a maioria das falhas internas em habitação é evitável com:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li>
              <strong>Instalação certificada e bem conservada</strong> — terra efetiva em todas as tomadas, disjuntor diferencial a funcionar, disjuntores magnetotérmicos dimensionados para a secção dos fios. Em zonas rurais antigas de Trás-os-Montes, muitas casas ainda têm instalações antigas que beneficiariam de uma avaliação.
            </li>
            <li>
              <strong>DPS (Dispositivo de Proteção contra Sobretensões)</strong> — protege os equipamentos eletrónicos da casa contra picos de tensão vindos da rede (trovoadas, manobras da EDP). O custo depende do quadro, do equipamento escolhido e da instalação necessária; deve ser orçamentado antes do trabalho.
            </li>
            <li>
              <strong>Revisão periódica da instalação</strong> — com periodicidade ajustada ao estado e à idade da instalação. Mede o isolamento dos fios, testa o diferencial, aperta os bornes, identifica pontos quentes antes de falharem.
            </li>
            <li>
              <strong>Não sobrecarregar circuitos</strong> —especialmente em cozinhas, aquecedores e extensões. A sobrecarga crónica envelhece a cablagem e pode levar a curto-circuitos meses depois.
            </li>
            <li>
              <strong>UPS ou proteção individual para aparelhos sensíveis</strong> —computador, televisão, NAS. Protege contra picos e microcortes.
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Falha interna em parte da casa</h2>
          <p>
            Quando só uma zona da casa está sem energia e o resto funciona, há um circuito parcial avariado. As causas mais frequentes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Tomada avariada</strong> — uma tomada que faz falso contacto ou que apresenta cheiro a queimado. Suspeita frequente em casas antigas.</li>
            <li><strong>Cabo danificado dentro da parede</strong> — por furo anterior, roedura, ou envelhecimento. Pode apresentar-se como falha total desse circuito.</li>
            <li><strong>Ligação solta numa caixa de derivação</strong> — uma caixa escondida no teto ou atrás de um armário pode ter um fio que saiu do borne. Costuma aparecer após vibração (obras, ventos fortes) ou simplesmente com a idade.</li>
            <li><strong>Aparelho com fuga de corrente</strong> — máquina de lavar, esquentador, forno. Se o disjuntor diferencial dispara quando liga um aparelho específico, esse aparelho tem o isolamento interno danificado.</li>
          </ul>
          <p>
            Em qualquer destes casos, o caminho seguro é: identificar o disjuntor parcial, deixá-lo desligado, e chamar eletricista certificado. Não tente abrir caixas de derivação nem mexer em ligações dentro de paredes sem formação — risco de eletrocussão e de agravar a avaria.
          </p>

          <section className="my-10 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Factos verificáveis Norte Reparos</h2>
            <p className="text-gray-800 mb-3"><strong>Mão de obra:</strong> 70 €/h para eletricidade, segundo a grelha interna R12.</p>
            <p className="text-gray-800 mb-3"><strong>Deslocação:</strong> Z1 = 15 €, Z2 = 25 €, Z3 = 35 €, Z4 = 45 €, Z5 = 55 € e Z6 = 65 €. Em noite, fim de semana ou feriado, aplica-se +50% à mão de obra.</p>
            <p className="text-gray-800 mb-2"><strong>Exemplos de distância TomTom desde Macedo de Cavaleiros:</strong></p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Macedo de Cavaleiros: 0,0 km · Z1 · 15 €</li>
              <li>Mirandela: 27,4 km · Z2 · 25 €</li>
              <li>Bragança: 42,4 km · Z3 · 35 €</li>
              <li>Chaves: 74,7 km · Z5 · 55 €</li>
              <li>Vila Real: 85,7 km · Z5 · 55 €</li>
              <li>Miranda do Douro: 92,2 km · Z6 · 65 €</li>
            </ul>
            <p className="text-gray-800 mb-3"><strong>Equipamento real:</strong> Fluke T6-1000, Megger MFT1741+, FLIR E96 e câmara de inspeção de 30 m.</p>
            <p className="text-sm text-gray-600">Fontes internas: grelha de zonas verrouillée em 14/07/2026; <code>preco-deslocacao.py</code>; dados TomTom reais em <code>_audit/zonas-distances-concelhos.json</code> (data/concelhos.json).</p>
          </section>

          <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Perguntas frequentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Quanto tempo pode a casa ficar sem energia em segurança?</h3>
              <p className="text-gray-700">Em condições normais, várias horas. O principal cuidado é com a cadeia do frio (tempo variável conforme o equipamento e a utilização) e com a segurança (não improvisar soluções elétricas).</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Posso religar o disjuntor geral se ele disparou?</h3>
              <p className="text-gray-700">Pode tentar uma vez, se não houver cheiro a queimado, faísca ou zona quente. Se voltar a disparar de imediato, há problema interno — deixe desligado e chame eletricista. Se aguentar, religue os circuitos parciais um a um para isolar.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Avaria na rede EDP — quem paga o eletricista?</h3>
              <p className="text-gray-700">Se a avaria é da rede EDP, a reparação é da responsabilidade da EDP Distribuição. Não precisa de eletricista — basta reportar a avaria e esperar a reposição.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Vale a pena comprar um gerador?</h3>
              <p className="text-gray-700">Para uma habitação em Trás-os-Montes, depende. Se as falhas da rede são raras e curtas (minutos, poucas horas), um no-break pequeno (UPS) para o essencial é suficiente. Se há falhas frequentes e prolongadas (dias, em zonas mais isoladas após tempestades), um gerador com instalação dedicada por eletricista certificado pode fazer sentido — mas é investimento significativo e exige manutenção própria.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">Quanto custa prevenir falha de energia?</h3>
              <p className="text-gray-700">A tarifa interna de eletricista é 70 €/h. A deslocação segue a grelha Z1 = 15 €, Z2 = 25 €, Z3 = 35 €, Z4 = 45 €, Z5 = 55 € e Z6 = 65 €; em noite, fim de semana ou feriado aplica-se +50% à mão de obra. O custo de um DPS ou de uma revisão preventiva depende do diagnóstico; damos orçamento por escrito antes da intervenção.</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-red-100 border-l-4 border-red-600 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Falha de energia que não é da EDP?</h2>
            <p className="text-gray-800 mb-4">
              Se confirmou que é só a sua casa (vizinhos têm luz) e o disjuntor não rearma ou dispara repetidamente — desligue o disjuntor geral e contacte-nos. Em horário normal falamos consigo, confirmamos a zona e damos orçamento por escrito antes da deslocação.
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
              Esta página cobre a parte <strong>informativa e de prevenção</strong>. Se a falha já está a acontecer e quer intervenção rápida, a página abaixo cobre diagnóstico, intervenção e tarifário 24h:
            </p>
            <p className="text-gray-800">
              <a
                href="https://eletricista-urgente.pt/falha-energia"
                className="text-red-700 font-semibold hover:underline"
                rel="noopener"
              >
                ⚡ Eletricista-Urgente.pt · Falha de Energia (intervenção 24h, orçamento por escrito)
              </a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}