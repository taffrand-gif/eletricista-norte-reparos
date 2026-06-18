import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { useSEO, generateArticleSchema } from '@/hooks/useSEO';
const QuadroEletricoDispara: React.FC = () => {
 useSEO({
 title: 'Quadro Elétrico Dispara: 7 Causas e Soluções [Guia 2026]',
 description: 'Quadro elétrico dispara constantemente? Descubra as 7 causas principais e soluções práticas para resolver o problema definitivamente.',
 keywords: 'quadro elétrico dispara, disjuntor dispara, luz vai abaixo, curto circuito, sobrecarga elétrica, eletricista',
 schema: generateArticleSchema({
   title: 'Quadro Elétrico Dispara: 7 Causas e Soluções [Guia 2026]',
   description: 'Quadro elétrico dispara constantemente? Descubra as 7 causas principais e soluções práticas para resolver o problema definitivamente.',
   author: 'Norte Reparos',
   publishedTime: '2026-03-10',
   modifiedTime: '2026-06-17',
   image: 'https://eletricista-norte-reparos.pt/og-image.jpg',
   url: 'https://eletricista-norte-reparos.pt/blog/quadro-eletrico-dispara'
 })
 });
 return (
 <BlogLayout
 title="Quadro Elétrico Dispara: 7 Causas e Soluções [Guia 2026]"
 description="Guia completo para identificar porque o quadro elétrico dispara e resolver o problema de forma segura"
 >
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "url": "https://eletricista-norte-reparos.pt/blog/quadro-eletrico-dispara",
        "mainEntity": [
          {"@type": "Question", "name": "Porque é que o quadro elétrico dispara constantemente?", "acceptedAnswer": {"@type": "Answer", "text": "As 3 causas mais comuns: Sobrecarga (40%): demasiados aparelhos ligados ao mesmo circuito; Curto-circuito (25%): fio danificado ou ligação mal feita; Fuga de corrente (15%): isolamento danificado ou humidade."}},
          {"@type": "Question", "name": "Posso religar o disjuntor várias vezes?", "acceptedAnswer": {"@type": "Answer", "text": "Pode religar 1-2 vezes se disparou por sobrecarga pontual. Não religue repetidamente se dispara imediatamente ou há cheiro a queimado. Nunca force a alavanca se não sobe facilmente — o disjuntor pode estar danificado."}},
          {"@type": "Question", "name": "Como sei se é sobrecarga no quadro elétrico?", "acceptedAnswer": {"@type": "Answer", "text": "Sinais de sobrecarga: dispara quando liga aparelho potente (forno, aquecedor, máquina lavar), dispara sempre no mesmo circuito, tomadas ou fios ficam quentes, luzes diminuem intensidade ao ligar um aparelho."}},
          {"@type": "Question", "name": "Quanto custa resolver quadro elétrico que dispara?", "acceptedAnswer": {"@type": "Answer", "text": "Custos típicos em Trás-os-Montes: substituir disjuntor defeituoso 40-100€, reparar curto-circuito 80-200€, resolver fuga de corrente 60-150€. Diagnóstico profissional: 40-80€."}},
          {"@type": "Question", "name": "É perigoso o quadro elétrico disparar?", "acceptedAnswer": {"@type": "Answer", "text": "Sobrecarga ocasional não é perigosa se resolver rapidamente. Curto-circuito é perigoso — pode causar incêndio. Fuga de corrente é muito perigosa — risco de choque fatal. Nunca ignore problema recorrente."}}
        ]
      }) }} />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Quadro Elétrico Dispara: 7 Causas e Soluções [Guia 2026]",
          "author": { "@type": "Organization", "name": "Norte Reparos" },
          "publisher": {
            "@type": "Organization",
            "name": "Norte Reparos",
            "url": "https://eletricista-norte-reparos.pt",
            "logo": { "@type": "ImageObject", "url": "https://eletricista-norte-reparos.pt/logo.png" }
          },
          "datePublished": "2026-01-01",
          "dateModified": "2026-06-18",
          "url": "https://eletricista-norte-reparos.pt/blog/quadro-eletrico-dispara",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eletricista-norte-reparos.pt/blog/quadro-eletrico-dispara" }
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Como Diagnosticar Porque o Quadro Elétrico Dispara",
          "description": "Método de diagnóstico passo a passo para identificar a causa do disjuntor que dispara com frequência.",
          "totalTime": "PT30M",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Identificar Qual Disjuntor Dispara", "text": "Verifique se é o disjuntor geral (problema grave em toda a instalação), o diferencial (fuga de corrente) ou um disjuntor parcial (problema num circuito específico)." },
            { "@type": "HowToStep", "position": 2, "name": "Verificar Quando Dispara", "text": "Anote quando acontece: ao ligar aparelho específico (aparelho avariado), aleatoriamente (fuga de corrente), imediatamente ao religar (curto-circuito) ou após alguns minutos (sobrecarga)." },
            { "@type": "HowToStep", "position": 3, "name": "Teste de Isolamento", "text": "Desligue TODOS os aparelhos das tomadas e todos os interruptores. Ligue o disjuntor. Se não disparar o problema está num aparelho; se disparar o problema é na instalação fixa." },
            { "@type": "HowToStep", "position": 4, "name": "Identificar o Aparelho Culpado", "text": "Se passou o Passo 3, ligue aparelhos um a um e aguarde 2-3 minutos entre cada. Quando disparar, o aparelho ligado nesse momento é o culpado." },
            { "@type": "HowToStep", "position": 5, "name": "Verificar Sobrecarga", "text": "Some a potência de todos os aparelhos no circuito e compare com a capacidade do disjuntor (ex: 16A = 3680W). Se ultrapassar, redistribua os aparelhos por outros circuitos ou chame eletricista." }
          ]
        }) }}
      />
      <article className="max-w-4xl mx-auto">
 <div className="mb-8">
 <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
 <span className="px-3 py-1 bg-red-100 text-red-800 font-semibold rounded-full">
 Problema Urgente
 </span>
 <span>⏱️ resposta prioritária de leitura</span>
 <span>📅 10 Mar 2026</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Quadro Elétrico Dispara: 7 Causas e Soluções [Guia 2026]
 </h1>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center">
 <span className="text-2xl">⚡</span>
 </div>
 <div>
 <p className="font-semibold text-gray-900">Equipa </p>
 <p className="text-gray-600">Eletricistas Certificados</p>
 </div>
 </div>
 </div>
 <div className="prose prose-lg max-w-none mb-10">
 <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
 <p className="text-red-900 font-semibold text-lg">
 ⚠️ Quadro elétrico que dispara constantemente indica problema que precisa ser resolvido urgentemente por segurança!
 </p>
 </div>
 <p className="text-xl text-gray-700 mb-6 leading-relaxed">
 Quadro elétrico que dispara é problema comum mas muito frustrante. Neste guia completo,
 vamos identificar as 7 causas principais, ensinar como diagnosticar o problema e apresentar
 soluções práticas para resolver definitivamente.
 </p>
 </div>
 <div className="bg-gray-50 rounded-2xl p-6 mb-10">
 <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Índice</h2>
 <ul className="space-y-2">
 <li><a href="#o-que-e" className="text-cyan-600 hover:text-cyan-700 font-medium">1. O Que é o Quadro Elétrico?</a></li>
 <li><a href="#causas" className="text-cyan-600 hover:text-cyan-700 font-medium">2. 7 Causas Principais</a></li>
 <li><a href="#diagnostico" className="text-cyan-600 hover:text-cyan-700 font-medium">3. Como Diagnosticar</a></li>
 <li><a href="#solucoes" className="text-cyan-600 hover:text-cyan-700 font-medium">4. Soluções Práticas</a></li>
 <li><a href="#prevencao" className="text-cyan-600 hover:text-cyan-700 font-medium">5. Prevenção</a></li>
 <li><a href="#quando-chamar" className="text-cyan-600 hover:text-cyan-700 font-medium">6. Quando Chamar Eletricista</a></li>
 <li><a href="#faq" className="text-cyan-600 hover:text-cyan-700 font-medium">7. Perguntas Frequentes</a></li>
 </ul>
 </div>
 <div className="prose prose-lg max-w-none">
 <section id="o-que-e" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">🔌 O Que é o Quadro Elétrico?</h2>
 <p className="mb-6">
 O quadro elétrico é o centro de controlo de toda a instalação elétrica da sua casa.
 Contém disjuntores e dispositivos de proteção que desligam automaticamente a corrente
 quando detetam problemas, protegendo pessoas e equipamentos.
 </p>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 mb-8">
 <h3 className="font-bold text-gray-900 mb-4 text-xl">🎯 Componentes Principais</h3>
 <div className="space-y-4">
 <div className="bg-blue-50 p-4 rounded-lg">
 <h4 className="font-bold text-blue-900 mb-2">Disjuntor Geral:</h4>
 <p className="text-blue-800 text-sm">Protege toda a instalação. Desliga tudo em caso de problema grave.</p>
 </div>
 <div className="bg-green-50 p-4 rounded-lg">
 <h4 className="font-bold text-green-900 mb-2">Disjuntores Parciais:</h4>
 <p className="text-green-800 text-sm">Protegem circuitos específicos (tomadas, iluminação, cozinha). Desligam apenas o circuito com problema.</p>
 </div>
 <div className="bg-purple-50 p-4 rounded-lg">
 <h4 className="font-bold text-purple-900 mb-2">Disjuntor Diferencial:</h4>
 <p className="text-purple-800 text-sm">Protege contra choques elétricos. Deteta fugas de corrente e desliga imediatamente (salva vidas!).</p>
 </div>
 <div className="bg-orange-50 p-4 rounded-lg">
 <h4 className="font-bold text-orange-900 mb-2">Contador:</h4>
 <p className="text-orange-800 text-sm">Mede consumo elétrico. Propriedade da empresa distribuidora.</p>
 </div>
 </div>
 </div>
 <div className="bg-cyan-50 p-6 rounded-xl">
 <h3 className="font-bold text-cyan-900 mb-3 text-lg">💡 Como Funciona a Proteção</h3>
 <p className="text-cyan-800 mb-3">
 Quando o disjuntor deteta problema (sobrecarga, curto-circuito, fuga de corrente),
 desliga automaticamente para evitar:
 </p>
 <ul className="text-cyan-800 space-y-1">
 <li>• Incêndios causados por sobreaquecimento</li>
 <li>• Choques elétricos fatais</li>
 <li>• Danos em equipamentos caros</li>
 <li>• Deterioração da instalação elétrica</li>
 </ul>
 </div>
 </section>
 <section id="causas" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">🔍 7 Causas Principais</h2>
 <p className="mb-6">
 Identificar a causa é essencial para resolver o problema corretamente:
 </p>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border-2 border-red-200">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 1
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Sobrecarga Elétrica (Causa #1 - 40%)</h3>
 <p className="text-gray-700 mb-3">
 Demasiados aparelhos ligados ao mesmo tempo ultrapassam capacidade do circuito.
 </p>
 <div className="bg-red-50 p-4 rounded-lg">
 <p className="font-bold text-red-900 mb-2">Sinais Típicos:</p>
 <ul className="text-red-800 text-sm space-y-1">
 <li>• Dispara quando liga aparelho potente (forno, máquina lavar, aquecedor)</li>
 <li>• Dispara sempre no mesmo circuito</li>
 <li>• Acontece mais no inverno (aquecedores ligados)</li>
 <li>• Tomadas ou fios ficam quentes</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 2
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Curto-Circuito (Causa #2 - 25%)</h3>
 <p className="text-gray-700 mb-3">
 Contacto direto entre fase e neutro causa pico de corrente instantâneo.
 </p>
 <div className="bg-orange-50 p-4 rounded-lg">
 <p className="font-bold text-orange-900 mb-2">Sinais Típicos:</p>
 <ul className="text-orange-800 text-sm space-y-1">
 <li>• Dispara imediatamente ao ligar disjuntor</li>
 <li>• Pode haver faísca ou cheiro a queimado</li>
 <li>• Acontece após trabalhos elétricos ou furar parede</li>
 <li>• Tomada ou interruptor danificado visível</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-yellow-200">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 3
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Fuga de Corrente (Causa #3 - 15%)</h3>
 <p className="text-gray-700 mb-3">
 Corrente escapa para terra através de isolamento danificado ou humidade.
 </p>
 <div className="bg-yellow-50 p-4 rounded-lg">
 <p className="font-bold text-yellow-900 mb-2">Sinais Típicos:</p>
 <ul className="text-yellow-800 text-sm space-y-1">
 <li>• Disjuntor diferencial dispara (não os parciais)</li>
 <li>• Dispara em dias de chuva ou humidade</li>
 <li>• Dispara ao tocar em aparelho metálico</li>
 <li>• Formigueiro ao tocar equipamentos</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 4
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Aparelho Avariado (Causa #4 - 10%)</h3>
 <p className="text-gray-700 mb-3">
 Equipamento com problema interno causa disparo ao ser ligado.
 </p>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="font-bold text-blue-900 mb-2">Como Identificar:</p>
 <ul className="text-blue-800 text-sm space-y-1">
 <li>• Dispara sempre que liga aparelho específico</li>
 <li>• Aparelho faz ruído estranho ou cheira a queimado</li>
 <li>• Problema começou após aparelho molhar-se</li>
 <li>• Equipamento antigo ou danificado</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-green-200">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 5
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Disjuntor Defeituoso (Causa #5 - 5%)</h3>
 <p className="text-gray-700 mb-3">
 Disjuntor velho ou danificado dispara sem motivo aparente.
 </p>
 <div className="bg-green-50 p-4 rounded-lg">
 <p className="font-bold text-green-900 mb-2">Sinais:</p>
 <ul className="text-green-800 text-sm space-y-1">
 <li>• Dispara aleatoriamente sem padrão</li>
 <li>• Disjuntor está quente ao toque</li>
 <li>• Alavanca não fica bem fixa</li>
 <li>• Disjuntor tem mais de 15 anos</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 6
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Instalação Antiga (Causa #6 - 3%)</h3>
 <p className="text-gray-700 mb-3">
 Fios deteriorados, isolamento rachado ou ligações oxidadas.
 </p>
 <div className="bg-purple-50 p-4 rounded-lg">
 <p className="font-bold text-purple-900 mb-2">Características:</p>
 <ul className="text-purple-800 text-sm space-y-1">
 <li>• Casa com mais de 30 anos sem renovação elétrica</li>
 <li>• Fios de alumínio (antigos, perigosos)</li>
 <li>• Tomadas de 2 pinos (sem terra)</li>
 <li>• Quadro elétrico antigo sem diferencial</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-pink-200">
 <div className="flex items-start gap-4">
 <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
 7
 </div>
 <div className="flex-1">
 <h3 className="text-xl font-bold text-gray-900 mb-3">Humidade e Infiltrações (Causa #7 - 2%)</h3>
 <p className="text-gray-700 mb-3">
 Água em contacto com instalação elétrica causa fugas de corrente.
 </p>
 <div className="bg-pink-50 p-4 rounded-lg">
 <p className="font-bold text-pink-900 mb-2">Sinais:</p>
 <ul className="text-pink-800 text-sm space-y-1">
 <li>• Dispara após chuva forte</li>
 <li>• Manchas de humidade perto de tomadas</li>
 <li>• Infiltrações visíveis no teto ou paredes</li>
 <li>• Tomadas em casa de banho ou cozinha</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 <section id="diagnostico" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">🔎 Como Diagnosticar</h2>
 <p className="mb-6">
 Use este método sistemático para identificar a causa do disparo:
 </p>
 <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden mb-8">
 <div className="bg-cyan-50 p-6">
 <h3 className="font-bold text-cyan-900 mb-3 text-xl">📝 Método de Diagnóstico Passo a Passo</h3>
 </div>
 <div className="p-6 space-y-6">
 <div className="border-l-4 border-cyan-500 pl-4">
 <h4 className="font-bold text-gray-900 mb-2">Passo 1: Identificar Qual Disjuntor Dispara</h4>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Disjuntor geral = problema grave em toda a instalação</li>
 <li>• Disjuntor diferencial = fuga de corrente (perigo choque)</li>
 <li>• Disjuntor parcial = problema num circuito específico</li>
 </ul>
 </div>
 <div className="border-l-4 border-cyan-500 pl-4">
 <h4 className="font-bold text-gray-900 mb-2">Passo 2: Quando Dispara?</h4>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Ao ligar aparelho específico = aparelho avariado ou sobrecarga</li>
 <li>• Aleatoriamente = fuga de corrente, humidade ou disjuntor defeituoso</li>
 <li>• Imediatamente ao religar = curto-circuito</li>
 <li>• Após alguns minutos = sobrecarga ou sobreaquecimento</li>
 </ul>
 </div>
 <div className="border-l-4 border-cyan-500 pl-4">
 <h4 className="font-bold text-gray-900 mb-2">Passo 3: Teste de Isolamento</h4>
 <ol className="text-gray-700 text-sm space-y-1 list-decimal pl-4">
 <li>Desligue TODOS os aparelhos das tomadas</li>
 <li>Desligue todos os interruptores</li>
 <li>Ligue o disjuntor que disparou</li>
 <li>Se não disparar = problema está num aparelho ou circuito</li>
 <li>Se disparar = problema na instalação fixa</li>
 </ol>
 </div>
 <div className="border-l-4 border-cyan-500 pl-4">
 <h4 className="font-bold text-gray-900 mb-2">Passo 4: Identificar Aparelho Culpado</h4>
 <p className="text-gray-700 text-sm mb-2">Se não disparou no Passo 3:</p>
 <ol className="text-gray-700 text-sm space-y-1 list-decimal pl-4">
 <li>Ligue aparelhos um a um</li>
 <li>Aguarde 2-resposta prioritária entre cada</li>
 <li>Quando disparar = aparelho culpado identificado</li>
 <li>Desligue esse aparelho e teste outros</li>
 </ol>
 </div>
 <div className="border-l-4 border-cyan-500 pl-4">
 <h4 className="font-bold text-gray-900 mb-2">Passo 5: Verificar Sobrecarga</h4>
 <p className="text-gray-700 text-sm mb-2">Se dispara com vários aparelhos ligados:</p>
 <ul className="text-gray-700 text-sm space-y-1">
 <li>• Some potência de todos os aparelhos no circuito</li>
 <li>• Compare com capacidade do disjuntor (ex: 16A = 3680W)</li>
 <li>• Se ultrapassar = sobrecarga confirmada</li>
 </ul>
 </div>
 </div>
 </div>
 <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
 <h3 className="font-bold text-yellow-900 mb-3 text-lg">⚠️ Tabela de Diagnóstico Rápido</h3>
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b-2 border-yellow-200">
 <th className="text-left py-2">Sintoma</th>
 <th className="text-left py-2">Causa Provável</th>
 <th className="text-left py-2">Ação</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-yellow-100">
 <td className="py-2">Dispara ao ligar forno/aquecedor</td>
 <td className="py-2 font-semibold text-red-600">Sobrecarga</td>
 <td className="py-2 text-sm">Desligue outros aparelhos</td>
 </tr>
 <tr className="border-b border-yellow-100">
 <td className="py-2">Dispara imediatamente</td>
 <td className="py-2 font-semibold text-orange-600">Curto-circuito</td>
 <td className="py-2 text-sm">Chame eletricista urgente</td>
 </tr>
 <tr className="border-b border-yellow-100">
 <td className="py-2">Diferencial dispara em dia chuva</td>
 <td className="py-2 font-semibold text-blue-600">Fuga corrente/humidade</td>
 <td className="py-2 text-sm">Inspecione infiltrações</td>
 </tr>
 <tr className="border-b border-yellow-100">
 <td className="py-2">Dispara com aparelho específico</td>
 <td className="py-2 font-semibold text-green-600">Aparelho avariado</td>
 <td className="py-2 text-sm">Repare/substitua aparelho</td>
 </tr>
 <tr className="border-b border-yellow-100">
 <td className="py-2">Dispara aleatoriamente</td>
 <td className="py-2 font-semibold text-purple-600">Disjuntor defeituoso</td>
 <td className="py-2 text-sm">Substitua disjuntor</td>
 </tr>
 <tr>
 <td className="py-2">Formigueiro ao tocar aparelhos</td>
 <td className="py-2 font-semibold text-pink-600">Fuga terra</td>
 <td className="py-2 text-sm">Eletricista URGENTE</td>
 </tr>
 </tbody>
 </table>
 </div>
 </section>
 <section id="solucoes" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">✅ Soluções Práticas</h2>
 <p className="mb-6">
 Depois de identificar a causa, aplique a solução adequada:
 </p>
 <div className="space-y-8">
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 1
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-gray-900 mb-3">Resolver Sobrecarga</h3>
 <div className="bg-cyan-50 p-4 rounded-lg mb-4">
 <p className="font-bold text-cyan-900 mb-2">Eficácia: ⭐⭐⭐⭐⭐ (Solução imediata)</p>
 <p className="text-cyan-800 text-sm">Resolve 40% dos casos | Custo: 0€ | Tempo: Imediato</p>
 </div>
 </div>
 </div>
 <h4 className="font-bold text-gray-900 mb-3">Soluções Imediatas:</h4>
 <ul className="list-disc pl-6 mb-4 space-y-2">
 <li>Distribua aparelhos potentes por circuitos diferentes</li>
 <li>Não ligue forno + máquina lavar + aquecedor ao mesmo tempo</li>
 <li>Use tomadas de circuitos diferentes para aparelhos potentes</li>
 <li>Desligue aparelhos em standby (consomem corrente)</li>
 </ul>
 <h4 className="font-bold text-gray-900 mb-3">Solução Definitiva:</h4>
 <ul className="list-disc pl-6 mb-4 space-y-2">
 <li>Aumente potência contratada (se necessário)</li>
 <li>Instale circuito dedicado para aparelhos potentes</li>
 <li>Substitua disjuntor por um de maior amperagem (se fios suportarem)</li>
 <li>Renove instalação elétrica (casos graves)</li>
 </ul>
 <div className="bg-blue-50 p-4 rounded-lg">
 <p className="text-blue-900 text-sm">
 <strong>💡 Cálculo Rápido:</strong> Disjuntor 16A suporta 3680W (230V × 16A). Some potência de todos os aparelhos no circuito.
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 2
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-gray-900 mb-3">Resolver Curto-Circuito</h3>
 <div className="bg-cyan-50 p-4 rounded-lg mb-4">
 <p className="font-bold text-cyan-900 mb-2">Eficácia: ⭐⭐⭐⭐⭐ (Requer eletricista)</p>
 <p className="text-cyan-800 text-sm">Resolve 25% dos casos | Custo: 80-200€ | Tempo: 1-2 horas</p>
 </div>
 </div>
 </div>
 <div className="bg-red-50 p-4 rounded-lg mb-4">
 <p className="text-red-900 font-semibold mb-2">⚠️ PERIGO - Não Tente Reparar Sozinho!</p>
 <p className="text-red-800 text-sm">
 Curto-circuito é perigoso. Chame eletricista certificado imediatamente.
 </p>
 </div>
 <h4 className="font-bold text-gray-900 mb-3">O Que o Eletricista Fará:</h4>
 <ol className="list-decimal pl-6 mb-4 space-y-2">
 <li>Localizar ponto exato do curto-circuito</li>
 <li>Isolar circuito afetado</li>
 <li>Reparar fio danificado ou substituir troço</li>
 <li>Substituir tomada/interruptor queimado</li>
 <li>Testar instalação completa</li>
 <li>Emitir certificado de conformidade</li>
 </ol>
 <div className="bg-yellow-50 p-4 rounded-lg">
 <p className="text-yellow-900 text-sm">
 <strong>⚠️ Causas Comuns:</strong> Furo em parede atingiu fio, roedores, isolamento deteriorado, ligação mal feita.
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 3
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-gray-900 mb-3">Resolver Fuga de Corrente</h3>
 <div className="bg-cyan-50 p-4 rounded-lg mb-4">
 <p className="font-bold text-cyan-900 mb-2">Eficácia: ⭐⭐⭐⭐ (Requer inspeção)</p>
 <p className="text-cyan-800 text-sm">Resolve 15% dos casos | Custo: 60-150€ | Tempo: 1-3 horas</p>
 </div>
 </div>
 </div>
 <h4 className="font-bold text-gray-900 mb-3">Verificações DIY:</h4>
 <ul className="list-disc pl-6 mb-4 space-y-2">
 <li>Desligue todos os aparelhos e teste diferencial</li>
 <li>Ligue aparelhos um a um para identificar culpado</li>
 <li>Verifique tomadas em zonas húmidas (casa banho, cozinha)</li>
 <li>Procure infiltrações perto de instalação elétrica</li>
 </ul>
 <h4 className="font-bold text-gray-900 mb-3">Solução Profissional:</h4>
 <ul className="list-disc pl-6 mb-4 space-y-2">
 <li>Teste de isolamento com megóhmetro</li>
 <li>Identificação precisa do ponto de fuga</li>
 <li>Reparação de isolamento danificado</li>
 <li>Secagem de instalação húmida</li>
 <li>Substituição de cabos deteriorados</li>
 </ul>
 <div className="bg-red-50 p-4 rounded-lg">
 <p className="text-red-900 text-sm">
 <strong>🚨 Perigo de Vida:</strong> Fuga de corrente pode causar choque fatal. Não ignore diferencial que dispara!
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 4
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-gray-900 mb-3">Substituir Aparelho Avariado</h3>
 <div className="bg-cyan-50 p-4 rounded-lg mb-4">
 <p className="font-bold text-cyan-900 mb-2">Eficácia: ⭐⭐⭐⭐⭐ (Solução simples)</p>
 <p className="text-cyan-800 text-sm">Resolve 10% dos casos | Custo: Variável | Tempo: Imediato</p>
 </div>
 </div>
 </div>
 <h4 className="font-bold text-gray-900 mb-3">Como Confirmar:</h4>
 <ol className="list-decimal pl-6 mb-4 space-y-2">
 <li>Identifique aparelho que causa disparo (método Passo 4)</li>
 <li>Desligue esse aparelho permanentemente</li>
 <li>Se problema desaparecer = aparelho confirmado</li>
 <li>Leve aparelho a reparar ou substitua</li>
 </ol>
 <h4 className="font-bold text-gray-900 mb-3">Aparelhos Mais Problemáticos:</h4>
 <ul className="list-disc pl-6 mb-4 space-y-1">
 <li>Máquinas de lavar (resistência queimada)</li>
 <li>Aquecedores elétricos (isolamento danificado)</li>
 <li>Frigoríficos antigos (compressor com fuga)</li>
 <li>Ferros de engomar (cabo partido)</li>
 <li>Extensões elétricas baratas (má qualidade)</li>
 </ul>
 <div className="bg-green-50 p-4 rounded-lg">
 <p className="text-green-900 text-sm">
 <strong>✅ Prevenção:</strong> Substitua aparelhos com mais de 15 anos. Reparação muitas vezes não compensa.
 </p>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-cyan-200">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
 5
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-gray-900 mb-3">Substituir Disjuntor Defeituoso</h3>
 <div className="bg-cyan-50 p-4 rounded-lg mb-4">
 <p className="font-bold text-cyan-900 mb-2">Eficácia: ⭐⭐⭐⭐⭐ (Solução definitiva)</p>
 <p className="text-cyan-800 text-sm">Resolve 5% dos casos | Custo: 40-100€ | Tempo: 30-resposta prioritária</p>
 </div>
 </div>
 </div>
 <h4 className="font-bold text-gray-900 mb-3">Sinais de Disjuntor Defeituoso:</h4>
 <ul className="list-disc pl-6 mb-4 space-y-2">
 <li>Dispara sem motivo aparente (teste isolamento OK)</li>
 <li>Disjuntor quente ao toque</li>
 <li>Alavanca não fica bem fixa</li>
 <li>Marcas de queimado ou derretido</li>
 <li>Disjuntor com mais de 15-20 anos</li>
 </ul>
 <div className="bg-yellow-50 p-4 rounded-lg mb-4">
 <p className="text-yellow-900 font-semibold mb-2">⚠️ Substituição por Eletricista</p>
 <p className="text-yellow-800 text-sm">
 Substituir disjuntor requer corte de corrente geral e conhecimento técnico. Contrate eletricista certificado.
 </p>
 </div>
 <h4 className="font-bold text-gray-900 mb-3">O Que Será Feito:</h4>
 <ol className="list-decimal pl-6 mb-4 space-y-1">
 <li>Corte de corrente geral (segurança)</li>
 <li>Remoção de disjuntor antigo</li>
 <li>Instalação de disjuntor novo (mesma amperagem)</li>
 <li>Verificação de aperto de ligações</li>
 <li>Teste de funcionamento</li>
 </ol>
 </div>
 </div>
 </section>
 <section id="prevencao" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">🛡️ Prevenção</h2>
 <p className="mb-6">
 Prevenir disparos é mais fácil que resolver. Siga estas 8 regras de ouro:
 </p>
 <div className="space-y-6">
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">1. 📊 Distribua Carga Elétrica</h3>
 <p className="text-gray-700 mb-2">
 Não sobrecarregue um único circuito com vários aparelhos potentes.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Identifique quais tomadas pertencem ao mesmo circuito</li>
 <li>• Distribua aparelhos potentes por circuitos diferentes</li>
 <li>• Não ligue forno + máquina lavar + aquecedor simultaneamente</li>
 <li>• Use temporizador para escalonar uso de aparelhos</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">2. 🔌 Use Extensões com Proteção</h3>
 <p className="text-gray-700 mb-2">
 Extensões baratas são causa comum de problemas elétricos.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Compre extensões com proteção contra sobrecarga</li>
 <li>• Verifique capacidade máxima (normalmente 3680W)</li>
 <li>• Nunca ligue extensão em extensão (cascata perigosa)</li>
 <li>• Substitua extensões com fios quentes ou danificados</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">3. 💧 Proteja de Humidade</h3>
 <p className="text-gray-700 mb-2">
 Humidade é inimiga da instalação elétrica.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Use tomadas com proteção IP44 em casa banho e cozinha</li>
 <li>• Repare infiltrações imediatamente</li>
 <li>• Não instale tomadas perto de fontes de água</li>
 <li>• Mantenha quadro elétrico seco e ventilado</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">4. 🔧 Manutenção Anual</h3>
 <p className="text-gray-700 mb-2">
 Inspeção preventiva deteta problemas antes de agravar.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Contrate eletricista para inspeção anual</li>
 <li>• Verifique aperto de ligações no quadro</li>
 <li>• Teste funcionamento de disjuntor diferencial (botão teste)</li>
 <li>• Substitua componentes com mais de 20 anos</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">5. ⚡ Aumente Potência se Necessário</h3>
 <p className="text-gray-700 mb-2">
 Casa moderna consome mais eletricidade que há 20 anos.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Avalie se potência contratada é suficiente</li>
 <li>• Considere aumentar de 6.9kVA para 10.35kVA ou mais</li>
 <li>• Custo: 30-50€/ano extra vale a tranquilidade</li>
 <li>• Evita disparos constantes por sobrecarga</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">6. 🏠 Renove Instalação Antiga</h3>
 <p className="text-gray-700 mb-2">
 Instalação com mais de 30 anos é perigosa e ineficiente.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Substitua fios de alumínio por cobre</li>
 <li>• Instale disjuntor diferencial (obrigatório)</li>
 <li>• Adicione ligação à terra em todas as tomadas</li>
 <li>• Invista 2000-5000€ para segurança total</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">7. 🔍 Cuidado ao Furar Paredes</h3>
 <p className="text-gray-700 mb-2">
 Furar fio elétrico causa curto-circuito imediato.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Use detetor de metais/fios antes de furar</li>
 <li>• Evite furar perto de tomadas e interruptores</li>
 <li>• Fios normalmente passam vertical/horizontal de tomadas</li>
 <li>• Se atingir fio, desligue quadro e chame eletricista</li>
 </ul>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-500 transition-colors">
 <h3 className="font-bold text-gray-900 mb-3 text-lg">8. 📱 Monitorize Consumo</h3>
 <p className="text-gray-700 mb-2">
 Consumo anormal indica problema elétrico.
 </p>
 <ul className="text-gray-600 text-sm space-y-1">
 <li>• Instale medidor de consumo inteligente</li>
 <li>• Verifique conta de luz mensalmente</li>
 <li>• Aumento súbito pode indicar fuga de corrente</li>
 <li>• Use app da distribuidora para monitorizar</li>
 </ul>
 </div>
 </div>
 <div className="bg-green-50 p-6 rounded-xl mt-8">
 <h3 className="font-bold text-green-900 mb-3 text-lg">✅ Benefícios da Prevenção</h3>
 <div className="grid md:grid-cols-2 gap-4">
 <ul className="text-green-800 space-y-2">
 <li>• Evita disparos inconvenientes</li>
 <li>• Poupa 200-500€/ano em reparações</li>
 <li>• Protege equipamentos caros</li>
 <li>• Segurança total contra choques</li>
 </ul>
 <ul className="text-green-800 space-y-2">
 <li>• Reduz risco de incêndio</li>
 <li>• Prolonga vida útil da instalação</li>
 <li>• Valoriza o imóvel</li>
 <li>• Tranquilidade garantida</li>
 </ul>
 </div>
 </div>
 </section>
 <section id="quando-chamar" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">📞 Quando Chamar Eletricista</h2>
 <p className="mb-6">
 Algumas situações requerem intervenção profissional urgente:
 </p>
 <div className="grid md:grid-cols-2 gap-6 mb-8">
 <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
 <h3 className="font-bold text-red-900 mb-3 text-lg">🚨 Urgente - Chame Já</h3>
 <ul className="text-red-800 space-y-2">
 <li>• <strong>Cheiro a queimado:</strong> Risco de incêndio iminente</li>
 <li>• <strong>Faísca ou fumo:</strong> Curto-circuito grave</li>
 <li>• <strong>Choque elétrico:</strong> Fuga de corrente perigosa</li>
 <li>• <strong>Dispara imediatamente:</strong> Problema grave na instalação</li>
 <li>• <strong>Quadro quente:</strong> Sobreaquecimento perigoso</li>
 </ul>
 </div>
 <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
 <h3 className="font-bold text-orange-900 mb-3 text-lg">⚠️ Não Urgente - Agende</h3>
 <ul className="text-orange-800 space-y-2">
 <li>• <strong>Dispara frequentemente:</strong> Problema recorrente</li>
 <li>• <strong>Sobrecarga constante:</strong> Precisa aumentar capacidade</li>
 <li>• <strong>Instalação antiga:</strong> Mais de 30 anos</li>
 <li>• <strong>Inspeção preventiva:</strong> Recomendado anualmente</li>
 <li>• <strong>Renovação:</strong> Modernizar instalação</li>
 </ul>
 </div>
 </div>
 <div className="bg-white p-6 rounded-xl border-2 border-gray-200 mb-8">
 <h3 className="font-bold text-gray-900 mb-4 text-xl">💰 Custos de Intervenção</h3>
 
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b-2 border-gray-200">
 <th className="text-left py-2">Serviço</th>
 <th className="text-right py-2">Custo Médio</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-gray-100">
 <td className="py-2">Diagnóstico e inspeção</td>
 <td className="text-right py-2 font-semibold">40-80€</td>
 </tr>
 <tr className="border-b border-gray-100">
 <td className="py-2">Substituir disjuntor</td>
 <td className="text-right py-2 font-semibold">40-100€</td>
 </tr>
 <tr className="border-b border-gray-100">
 <td className="py-2">Reparar curto-circuito</td>
 <td className="text-right py-2 font-semibold">80-200€</td>
 </tr>
 <tr className="border-b border-gray-100">
 <td className="py-2">Resolver fuga de corrente</td>
 <td className="text-right py-2 font-semibold">60-150€</td>
 </tr>
 <tr className="border-b border-gray-100">
 <td className="py-2">Instalar circuito novo</td>
 <td className="text-right py-2 font-semibold">150-400€</td>
 </tr>
 <tr>
 <td className="py-2">Renovação completa (T2)</td>
 <td className="text-right py-2 font-semibold">2000-5000€</td>
 </tr>
 </tbody>
 </table>
 </div>
 <div className="bg-cyan-50 p-6 rounded-xl">
 <h3 className="font-bold text-cyan-900 mb-3 text-lg">✅ Vantagens de Chamar Profissional</h3>
 <div className="grid md:grid-cols-2 gap-4">
 <ul className="text-cyan-800 space-y-2">
 <li>• Diagnóstico preciso com equipamento especializado</li>
 <li>• Solução definitiva (não temporária)</li>
 <li>• Certificado de conformidade</li>
 <li>• Garantia do trabalho realizado</li>
 </ul>
 <ul className="text-cyan-800 space-y-2">
 <li>• Segurança total (sem risco choque)</li>
 <li>• Identifica problemas ocultos</li>
 <li>• Aconselhamento preventivo</li>
 <li>• Evita danos maiores e mais caros</li>
 </ul>
 </div>
 </div>
 </section>
 <section id="faq" className="mb-12">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Perguntas Frequentes</h2>
 <div className="space-y-6">
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Porque é que o quadro elétrico dispara constantemente?</h3>
 <p className="text-gray-700 mb-2">
 <strong>As 3 causas mais comuns (80% dos casos):</strong>
 </p>
 <ul className="text-gray-600 space-y-1 ml-4">
 <li>• <strong>Sobrecarga (40%):</strong> Demasiados aparelhos ligados ao mesmo tempo</li>
 <li>• <strong>Curto-circuito (25%):</strong> Fio danificado ou ligação mal feita</li>
 <li>• <strong>Fuga de corrente (15%):</strong> Isolamento danificado ou humidade</li>
 </ul>
 <p className="text-cyan-700 font-semibold mt-3">
 💡 Use método de diagnóstico passo a passo para identificar causa exata.
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Posso religar o disjuntor várias vezes?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Depende da situação:</strong>
 </p>
 <ul className="text-gray-600 space-y-2 ml-4">
 <li>
 <strong>✅ Pode religar 1-2 vezes:</strong> Se disparou por sobrecarga pontual (ligou muitos aparelhos). Desligue alguns e religue.
 </li>
 <li>
 <strong>⚠️ Não religue repetidamente:</strong> Se dispara imediatamente ou há cheiro a queimado. Chame eletricista.
 </li>
 <li>
 <strong>🚨 Nunca force:</strong> Se alavanca não sobe facilmente, não force. Disjuntor pode estar danificado.
 </li>
 </ul>
 <p className="text-red-700 font-semibold mt-3">
 ⚠️ Religar constantemente sem resolver causa pode causar incêndio!
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Qual a diferença entre disjuntor e diferencial?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Funções diferentes mas complementares:</strong>
 </p>
 <div className="bg-white p-4 rounded-lg mt-3 mb-3">
 <table className="w-full text-sm">
 <tr className="border-b">
 <td className="py-2 font-semibold">Disjuntor (Magnetotérmico)</td>
 <td className="py-2">Protege contra sobrecarga e curto-circuito</td>
 </tr>
 <tr className="border-b">
 <td className="py-2 font-semibold">Diferencial</td>
 <td className="py-2">Protege contra choques elétricos (fuga corrente)</td>
 </tr>
 <tr>
 <td className="py-2 font-semibold">Ambos Necessários</td>
 <td className="py-2">Proteção completa requer os dois tipos</td>
 </tr>
 </table>
 </div>
 <p className="text-cyan-700 font-semibold">
 💡 Diferencial é obrigatório por lei - salva vidas!
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Como sei se é sobrecarga?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Sinais claros de sobrecarga:</strong>
 </p>
 <ul className="text-gray-600 space-y-1 ml-4">
 <li>• Dispara quando liga aparelho potente (forno, aquecedor, máquina lavar)</li>
 <li>• Dispara sempre no mesmo circuito</li>
 <li>• Acontece mais quando vários aparelhos ligados</li>
 <li>• Tomadas ou fios ficam quentes</li>
 <li>• Luzes diminuem intensidade quando liga aparelho</li>
 </ul>
 <p className="text-green-700 font-semibold mt-3">
 ✅ Solução: Distribua aparelhos por circuitos diferentes ou aumente potência contratada.
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Quanto custa resolver quadro que dispara?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Custos por tipo de problema:</strong>
 </p>
 <div className="bg-white p-4 rounded-lg mt-3 mb-3">
 <table className="w-full text-sm">
 <tr className="border-b">
 <td className="py-2">Sobrecarga (redistribuir aparelhos)</td>
 <td className="text-right py-2 font-semibold text-green-600">0€ (DIY)</td>
 </tr>
 <tr className="border-b">
 <td className="py-2">Substituir disjuntor defeituoso</td>
 <td className="text-right py-2 font-semibold">40-100€</td>
 </tr>
 <tr className="border-b">
 <td className="py-2">Reparar curto-circuito</td>
 <td className="text-right py-2 font-semibold">80-200€</td>
 </tr>
 <tr className="border-b">
 <td className="py-2">Resolver fuga de corrente</td>
 <td className="text-right py-2 font-semibold">60-150€</td>
 </tr>
 <tr>
 <td className="py-2">Aumentar potência contratada</td>
 <td className="text-right py-2 font-semibold">30-50€/ano</td>
 </tr>
 </table>
 </div>
 <p className="text-cyan-700 font-semibold">
 💡 Diagnóstico profissional: 40-80€ (identifica causa exata)
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">É perigoso quadro elétrico disparar?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Depende da causa:</strong>
 </p>
 <ul className="text-gray-600 space-y-2 ml-4">
 <li>
 <strong>Sobrecarga ocasional:</strong> Não é perigoso se resolver rapidamente. Disjuntor está a proteger.
 </li>
 <li>
 <strong>⚠️ Curto-circuito:</strong> Perigoso! Pode causar incêndio. Chame eletricista urgente.
 </li>
 <li>
 <strong>🚨 Fuga de corrente:</strong> Muito perigoso! Risco de choque fatal. Não ignore diferencial que dispara.
 </li>
 <li>
 <strong>Disjuntor defeituoso:</strong> Perigoso porque não protege adequadamente. Substitua imediatamente.
 </li>
 </ul>
 <p className="text-red-700 font-semibold mt-3">
 ⚠️ Nunca ignore problema recorrente - resolva a causa!
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Posso aumentar amperagem do disjuntor?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Sim, mas com condições:</strong>
 </p>
 <ul className="text-gray-600 space-y-2 ml-4">
 <li>
 <strong>✅ Pode aumentar se:</strong> Fios suportam maior corrente (secção adequada)
 </li>
 <li>
 <strong>❌ Não pode se:</strong> Fios são finos (1.5mm² não suporta mais de 16A)
 </li>
 <li>
 <strong>⚠️ Perigo:</strong> Disjuntor maior que capacidade dos fios = risco incêndio
 </li>
 <li>
 <strong>Solução correta:</strong> Eletricista avalia secção dos fios antes de aumentar
 </li>
 </ul>
 <p className="text-yellow-700 font-semibold mt-3">
 ⚠️ Nunca aumente amperagem sem consultar eletricista certificado!
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="font-bold text-gray-900 mb-3">Diferencial dispara quando chove. É normal?</h3>
 <p className="text-gray-700 mb-2">
 <strong>Não é normal - indica problema grave:</strong>
 </p>
 <ul className="text-red-700 space-y-2 ml-4">
 <li>• Infiltração de água na instalação elétrica</li>
 <li>• Tomadas exteriores sem proteção adequada</li>
 <li>• Fios enterrados com isolamento danificado</li>
 <li>• Humidade em caixas de derivação</li>
 </ul>
 <p className="text-red-900 font-semibold mt-3">
 🚨 Chame eletricista urgente - risco de choque fatal!
 </p>
 <p className="text-gray-600 text-sm mt-2">
 Água + eletricidade = perigo extremo. Não ignore este sintoma.
 </p>
 </div>
 </div>
 </section>
 <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-8 rounded-2xl mb-12">
 <h2 className="text-3xl font-bold mb-4">📞 Quadro Elétrico Dispara? Ajuda Profissional</h2>
 <p className="text-xl mb-6">
 Se não consegue resolver sozinho, contacte eletricista certificado imediatamente.
 </p>
 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
 <h3 className="text-2xl font-bold mb-4"> - Eletricista em Bragança</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Diagnóstico Preciso</p>
 <p className="text-sm text-white/80">Identificamos causa exata do problema</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Solução Definitiva</p>
 <p className="text-sm text-white/80">Resolvemos problema permanentemente</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Intervenção Rápida</p>
 <p className="text-sm text-white/80">Resposta rápida garantida-resposta prioritária</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <span className="text-2xl">✅</span>
 <div>
 <p className="font-bold">Certificado + Garantia</p>
 <p className="text-sm text-white/80">Trabalho certificado com 6 meses garantia</p>
 </div>
 </div>
 </div>
 <div className="flex flex-col sm:flex-row gap-4">
 <a
 href="tel:+351932321892"
 className="flex-1 bg-white text-cyan-600 px-6 py-4 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors text-lg"
 >
 📞 932 321 892
 </a>
 <a
 href="https://wa.me/351932321892?text=Olá,%20o%20quadro%20elétrico%20dispara%20constantemente"
 className="flex-1 bg-green-500 text-white px-6 py-4 rounded-lg font-bold text-center hover:bg-green-600 transition-colors text-lg"
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 <p className="text-center text-white/90">
 <strong>Zonas atendidas:</strong> Bragança, Vila Real, Trás-os-Montes, Mirandela, Chaves, Lamego, Régua, Torre de Moncorvo, Mogadouro, Alfândega da Fé, Vila Flor, Valpaços
 </p>
 </div>
 <div className="bg-gray-50 p-6 rounded-xl">
 <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Artigos Relacionados</h3>
 <ul className="space-y-2">
 <li>
 <a href="/blog/como-trocar-tomada-eletrica-sozinho" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Como Trocar Tomada Elétrica Sozinho [Guia Seguro 2026]
 </a>
 </li>
 <li>
 <a href="/blog/falta-luz-casa-diagnostico-resolucao" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Falta de Luz em Casa: Diagnóstico e Resolução Rápida
 </a>
 </li>
 <li>
 <a href="/blog/curto-circuito-identificar-prevenir" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Curto-Circuito: Como Identificar e Prevenir
 </a>
 </li>
 <li>
 <a href="/blog/disjuntor-diferencial-dispara-causas" className="text-cyan-600 hover:text-cyan-700 font-medium">
 → Disjuntor Diferencial Dispara: 5 Causas Principais
 </a>
 </li>
 </ul>
 </div>
 </div>
 </article>
 </BlogLayout>
 );
};
export default QuadroEletricoDispara;
