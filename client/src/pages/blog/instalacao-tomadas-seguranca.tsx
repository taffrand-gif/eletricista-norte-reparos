import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Phone, MessageCircle, Shield, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

export default function InstalacaoTomadasSeguranca() {
 return (
 <>
 <Helmet>
 <title>Instalação de Tomadas: Guia de Segurança 2026 | Staff Seekers</title>
 <meta name="description" content="Guia completo sobre instalação segura de tomadas elétricas. Normas, tipos, preços e quando chamar eletricista em Trás-os-Montes." />
 <meta name="keywords" content="instalação tomadas, tomadas elétricas, eletricista Bragança, segurança elétrica, normas tomadas Portugal" />
 <link rel="canonical" href="https://eletricista-norte-reparos.pt/blog/instalacao-tomadas-seguranca" />
 <script type="application/ld+json">
 {JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "Posso instalar tomadas sozinho?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Não é recomendado. A instalação de tomadas envolve trabalho com eletricidade e deve ser feita por eletricista certificado. Instalações incorretas causam choques elétricos, curto-circuitos e incêndios. Multas por instalações não certificadas chegam a 3.740€."
 }
 },
 {
 "@type": "Question",
 "name": "Quanto custa instalar uma tomada?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Instalação de tomada simples: 35-60€. Tomada dupla: 50-80€. Tomada USB: 60-90€. Tomada exterior: 70-100€. Preços incluem material e mão-de-obra em Bragança e Trás-os-Montes."
 }
 },
 {
 "@type": "Question",
 "name": "Quantas tomadas preciso por divisão?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Normas RTIEBT recomendam: Sala 5-8 tomadas, Cozinha 6-10 tomadas, Quartos 4-6 tomadas, WC 2-3 tomadas. Distância máxima entre tomadas: 3,5 metros em salas, 1,5 metros em cozinhas."
 }
 }
 ]
 })}
 </script>
 </Helmet>

 <article className="max-w-4xl mx-auto px-4 py-12">
 <header className="mb-8">
 <Link href="/blog">
 <a className="text-blue-600 hover:text-blue-800 mb-4 inline-block">&larr; Voltar ao Blog</a>
 </Link>
 <h1 className="text-4xl font-bold text-gray-900 mb-4">
 Instalação de Tomadas: Guia de Segurança 2026
 </h1>
 <div className="flex items-center text-gray-600 text-sm">
 <time dateTime="2026-03-03">3 de Março, 2026</time>
 <span className="mx-2">•</span>
 <span>10 min de leitura</span>
 </div>
 </header>

 <div className="prose prose-lg max-w-none mb-8">
 <p className="text-xl text-gray-700 leading-relaxed">
 A instalação de tomadas elétricas parece simples, mas envolve riscos graves se mal executada.
 Descubra tudo sobre tipos de tomadas, normas de segurança, quantidades recomendadas e preços em 2026.
 </p>
 </div>

 {/* CTA */}
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 mb-12 text-white">
 <div className="flex flex-col md:flex-row items-center justify-between">
 <div className="mb-4 md:mb-0">
 <h3 className="text-xl font-bold mb-2">Precisa de Instalar Tomadas?</h3>
 <p className="text-blue-100">Eletricistas certificados em Bragança e Trás-os-Montes</p>
 </div>
 <div className="flex gap-3">
 <a href="tel:+351932321892" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2">
 <Phone className="w-5 h-5" />
 932 321 892
 </a>
 <a href="https://wa.me/351932321892" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2">
 <MessageCircle className="w-5 h-5" />
 WhatsApp
 </a>
 </div>
 </div>
 </div>

 <div className="prose prose-lg max-w-none">
 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tipos de Tomadas em Portugal</h2>

 <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Tomada Schuko (Tipo F)</h3>
 <p>
 A tomada padrão em Portugal. Tem dois pinos redondos e dois contactos laterais para ligação à terra.
 Suporta até 16A (3680W). Usada para a maioria dos aparelhos domésticos.
 </p>

 <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Tomada USB</h3>
 <p>
 Tomada moderna com portas USB integradas (USB-A ou USB-C). Permite carregar telemóveis e tablets sem adaptador.
 Cada porta fornece 2.4A (12W). Ideal para quartos e salas.
 </p>

 <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Tomada Exterior (IP44/IP65)</h3>
 <p>
 Tomada resistente à água e pó. IP44 para áreas cobertas (alpendres), IP65 para exterior total (jardins).
 Obrigatória para uso exterior segundo normas RTIEBT.
 </p>

 <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Tomada Industrial (CEE)</h3>
 <p>
 Tomada trifásica para equipamentos industriais. Suporta 16A, 32A ou 63A. Usada para máquinas pesadas,
 compressores e equipamentos profissionais.
 </p>

 <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
 <div className="flex items-start gap-3">
 <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
 <div>
 <h4 className="font-bold text-gray-900 mb-2">Atenção: Ligação à Terra Obrigatória</h4>
 <p className="text-gray-700 mb-0">
 Todas as tomadas devem ter ligação à terra funcional. Tomadas sem terra causam choques elétricos e
 danificam equipamentos eletrónicos. Teste regularmente com testador de tomadas (10-15€).
 </p>
 </div>
 </div>
 </div>

 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Quantas Tomadas Precisa?</h2>

 <p>
 As normas RTIEBT estabelecem quantidades mínimas por divisão para evitar uso excessivo de extensões
 (que causam sobrecargas e incêndios).
 </p>

 <div className="overflow-x-auto my-8">
 <table className="min-w-full bg-white border border-gray-300">
 <thead className="bg-gray-100">
 <tr>
 <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Divisão</th>
 <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Mínimo</th>
 <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Recomendado</th>
 <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Observações</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 <tr>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">Sala</td>
 <td className="px-6 py-4 text-sm text-gray-700">5</td>
 <td className="px-6 py-4 text-sm text-gray-700">6-8</td>
 <td className="px-6 py-4 text-sm text-gray-600">TV, som, carregadores, lâmpadas</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">Cozinha</td>
 <td className="px-6 py-4 text-sm text-gray-700">6</td>
 <td className="px-6 py-4 text-sm text-gray-700">8-10</td>
 <td className="px-6 py-4 text-sm text-gray-600">Eletrodomésticos múltiplos</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">Quarto</td>
 <td className="px-6 py-4 text-sm text-gray-700">4</td>
 <td className="px-6 py-4 text-sm text-gray-700">5-6</td>
 <td className="px-6 py-4 text-sm text-gray-600">Cabeceira (2), secretária, geral</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">WC</td>
 <td className="px-6 py-4 text-sm text-gray-700">1</td>
 <td className="px-6 py-4 text-sm text-gray-700">2-3</td>
 <td className="px-6 py-4 text-sm text-gray-600">Secador, máquina barbear, carregador</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">Escritório</td>
 <td className="px-6 py-4 text-sm text-gray-700">4</td>
 <td className="px-6 py-4 text-sm text-gray-700">6-8</td>
 <td className="px-6 py-4 text-sm text-gray-600">Computador, monitor, impressora, etc</td>
 </tr>
 </tbody>
 </table>
 </div>

 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Normas de Segurança RTIEBT</h2>

 <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Altura de Instalação</h3>
 <ul>
 <li><strong>Tomadas gerais:</strong> 30cm do chão (mínimo 20cm)</li>
 <li><strong>Tomadas bancada cozinha:</strong> 110-120cm do chão</li>
 <li><strong>Tomadas WC:</strong> Mínimo 60cm de banheira/duche</li>
 <li><strong>Tomadas exterior:</strong> Mínimo 40cm do chão</li>
 </ul>

 <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Distâncias Mínimas</h3>
 <ul>
 <li><strong>Entre tomadas sala:</strong> Máximo 3,5 metros</li>
 <li><strong>Entre tomadas cozinha:</strong> Máximo 1,5 metros</li>
 <li><strong>De fontes de água:</strong> Mínimo 60cm</li>
 <li><strong>De fontes de calor:</strong> Mínimo 30cm</li>
 </ul>

 <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Circuitos Dedicados</h3>
 <p>
 Aparelhos de alta potência precisam de circuito dedicado (tomada exclusiva no quadro):
 </p>
 <ul>
 <li>Fogão elétrico (32A)</li>
 <li>Forno elétrico (20A)</li>
 <li>Máquina lavar roupa (16A)</li>
 <li>Máquina lavar loiça (16A)</li>
 <li>Ar condicionado (16-20A)</li>
 <li>Esquentador elétrico (25A)</li>
 </ul>

 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Preços Instalação Tomadas 2026</h2>

 <div className="overflow-x-auto my-8">
 <table className="min-w-full bg-white border border-gray-300">
 <thead className="bg-gray-100">
 <tr>
 <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Serviço</th>
 <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Material</th>
 <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Mão-de-Obra</th>
 <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Total</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-200">
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Tomada simples</td>
 <td className="px-6 py-4 text-sm text-gray-700">8-15€</td>
 <td className="px-6 py-4 text-sm text-gray-700">25-45€</td>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">35-60€</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Tomada dupla</td>
 <td className="px-6 py-4 text-sm text-gray-700">12-20€</td>
 <td className="px-6 py-4 text-sm text-gray-700">35-60€</td>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">50-80€</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Tomada USB</td>
 <td className="px-6 py-4 text-sm text-gray-700">20-35€</td>
 <td className="px-6 py-4 text-sm text-gray-700">35-55€</td>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">60-90€</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Tomada exterior IP65</td>
 <td className="px-6 py-4 text-sm text-gray-700">25-40€</td>
 <td className="px-6 py-4 text-sm text-gray-700">45-60€</td>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">70-100€</td>
 </tr>
 <tr>
 <td className="px-6 py-4 text-sm text-gray-900">Circuito novo (até 10m)</td>
 <td className="px-6 py-4 text-sm text-gray-700">30-50€</td>
 <td className="px-6 py-4 text-sm text-gray-700">80-120€</td>
 <td className="px-6 py-4 text-sm font-semibold text-gray-900">110-170€</td>
 </tr>
 </tbody>
 </table>
 </div>

 <p className="text-sm text-gray-600 italic">
 * Preços válidos para Bragança e Trás-os-Montes em 2026. Incluem IVA.
 </p>

 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sinais de Tomadas Perigosas</h2>

 <div className="grid md:grid-cols-2 gap-6 my-8">
 <div className="bg-red-50 border border-red-200 rounded-lg p-6">
 <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5" />
 PERIGO IMEDIATO
 </h4>
 <ul className="space-y-2 text-gray-700">
 <li>✗ Faíscas ao ligar aparelhos</li>
 <li>✗ Cheiro a queimado</li>
 <li>✗ Tomada quente ao toque</li>
 <li>✗ Marcas de queimadura</li>
 <li>✗ Choques elétricos</li>
 <li>✗ Tomada solta da parede</li>
 </ul>
 <p className="mt-4 text-sm font-bold text-red-900">
 → Desligue imediatamente e contacte eletricista
 </p>
 </div>

 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
 <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5" />
 Substituição Recomendada
 </h4>
 <ul className="space-y-2 text-gray-700">
 <li>⚠ Tomadas com mais de 20 anos</li>
 <li>⚠ Pinos soltos ou partidos</li>
 <li>⚠ Sem ligação à terra</li>
 <li>⚠ Plástico amarelado/rachado</li>
 <li>⚠ Não segura bem as fichas</li>
 <li>⚠ Uso excessivo de extensões</li>
 </ul>
 <p className="mt-4 text-sm font-bold text-yellow-900">
 → Agende substituição preventiva
 </p>
 </div>
 </div>

 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Perguntas Frequentes</h2>

 <div className="space-y-6 my-8">
 <div className="bg-gray-50 rounded-lg p-6">
 <h4 className="font-bold text-gray-900 mb-2">Posso usar extensões permanentemente?</h4>
 <p className="text-gray-700 mb-0">
 <strong>Não.</strong> Extensões são para uso temporário. Uso permanente causa sobrecargas, aquecimento e incêndios.
 Se precisa de mais tomadas, instale tomadas fixas com eletricista certificado.
 </p>
 </div>

 <div className="bg-gray-50 rounded-lg p-6">
 <h4 className="font-bold text-gray-900 mb-2">Tomadas antigas sem terra são perigosas?</h4>
 <p className="text-gray-700 mb-0">
 <strong>Sim.</strong> Tomadas sem terra não protegem contra choques elétricos e danificam equipamentos eletrónicos sensíveis
 (computadores, TVs). Substitua por tomadas Schuko com terra funcional.
 </p>
 </div>

 <div className="bg-gray-50 rounded-lg p-6">
 <h4 className="font-bold text-gray-900 mb-2">Quanto tempo demora instalar uma tomada?</h4>
 <p className="text-gray-700 mb-0">
 Tomada em circuito existente: 30-45 minutos. Tomada com circuito novo: 1-2 horas.
 Instalação de 5-10 tomadas numa renovação: 4-6 horas.
 </p>
 </div>

 <div className="bg-gray-50 rounded-lg p-6">
 <h4 className="font-bold text-gray-900 mb-2">Preciso de certificação elétrica?</h4>
 <p className="text-gray-700 mb-0">
 <strong>Sim</strong> para instalações novas ou alterações significativas (mais de 3 tomadas).
 Certificação é obrigatória por lei e necessária para seguros e venda/arrendamento de imóveis.
 </p>
 </div>
 </div>

 <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusão</h2>

 <p>
 A instalação correta de tomadas é essencial para segurança e conforto. Respeite as normas RTIEBT,
 instale quantidades adequadas por divisão e contrate sempre eletricista certificado.
 </p>

 <p>
 O investimento de 35-60€ por tomada previne choques elétricos, incêndios e danos em equipamentos.
 Não arrisque com instalações amadoras ou uso excessivo de extensões.
 </p>
 </div>

 {/* Final CTA */}
 <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 mt-12 text-white text-center">
 <h3 className="text-2xl font-bold mb-4">Precisa de Instalar ou Substituir Tomadas?</h3>
 <p className="text-blue-100 mb-6 text-lg">
 Eletricistas certificados em Bragança, Mirandela, Macedo de Cavaleiros e toda a região de Trás-os-Montes
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="tel:+351932321892" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
 <Phone className="w-6 h-6" />
 Ligar: 932 321 892
 </a>
 <a href="https://wa.me/351932321892?text=Olá!%20Preciso%20de%20orçamento%20para%20instalação%20de%20tomadas." className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
 <MessageCircle className="w-6 h-6" />
 WhatsApp
 </a>
 </div>
 <p className="text-blue-100 text-sm mt-4">
 ✓ Orçamento Gratuito ✓ certificação elétrica Incluída ✓ Garantia 2 Anos
 </p>
 </div>

 {/* Related Articles */}
 <div className="mt-12 pt-8 border-t border-gray-200">
 <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
 <div className="grid md:grid-cols-3 gap-6">
 <Link href="/blog/quadro-eletrico-dispara-causas">
 <a className="block p-4 border border-gray-200 rounded-lg hover:border-blue-600 transition">
 <h4 className="font-bold text-gray-900 mb-2">Quadro Elétrico Dispara: 8 Causas</h4>
 <p className="text-sm text-gray-600">Descubra porque o quadro dispara</p>
 </a>
 </Link>
 <Link href="/blog/certificacao--guia-completo">
 <a className="block p-4 border border-gray-200 rounded-lg hover:border-blue-600 transition">
 <h4 className="font-bold text-gray-900 mb-2">certificação elétrica: Guia Completo</h4>
 <p className="text-sm text-gray-600">Tudo sobre certificação elétrica</p>
 </a>
 </Link>
 <Link href="/blog/sinais-casa-precisa-eletricista-urgente">
 <a className="block p-4 border border-gray-200 rounded-lg hover:border-blue-600 transition">
 <h4 className="font-bold text-gray-900 mb-2">10 Sinais Casa Precisa Eletricista</h4>
 <p className="text-sm text-gray-600">Identifique problemas elétricos</p>
 </a>
 </Link>
 </div>
 </div>
 </article>
 </>
 );
}
