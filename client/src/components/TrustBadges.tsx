import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
export default function TrustBadges() {
 const isPlumber = ACTIVE_CONFIG.type === 'plomberie';
 const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
 const badges = [
 {
 icon: '💰',
 title: 'Preço Fixo Garantido',
 description: 'Sem surpresas na fatura'},
 {
 icon: '🛡️',
 title: 'Garantia 2 Anos',
 description: 'Intervenção gratuita'},
 {
 icon: '📞',
 title: 'Orçamento Grátis',
 description: '2 minutos por telefone'},
 {
 icon: '✅',
 title: 'Sem Taxas Escondidas',
 description: 'Transparência total'},
 {
 icon: '🏆',
 title: 'Certificado',
 description: isPlumber ? 'Profissionais certificados' : 'certificação elétrica'},
 {
 icon: '⚡',
 title: 'Resposta Rápida',
 description: 'Menos de 1 hora'},
 {
 icon: '💯',
 title: '',
 description: 'Satisfeitos'},
 {
 icon: '🔒',
 title: 'Seguro',
 description: 'Totalmente segurado'},
 ];
 return (
 <section className="py-12 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-8">
 <h2 className="text-3xl font-bold text-gray-900 mb-3">
 Porquê Somos a Escolha #1 em Trás-os-Montes?
 </h2>
 <p className="text-lg font-semibold text-gray-700">
 Atendemos clientes em toda a região de Trás-os-Montes em nós. Agora é a sua vez.
 </p>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
 {badges.map((badge, index) => (
 <div
 key={index}
 className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:scale-105"
 >
 <div className="text-4xl mb-3">{badge.icon}</div>
 <h3 className="font-bold text-gray-900 mb-1 text-sm">
 {badge.title}
 </h3>
 <p className="text-xs text-gray-600">
 {badge.description}
 </p>
 </div>
 ))}
 </div>
 {/* Money-back guarantee banner */}
 <div
 className="mt-8 max-w-4xl mx-auto rounded-2xl p-6 text-center text-white"
 style={{ backgroundColor: accentColor }}
 >
 <div className="flex flex-col md:flex-row items-center justify-center gap-4">
 <div className="text-5xl">✓</div>
 <div className="text-left">
 <h3 className="text-xl font-bold mb-1">
 Garantia de Trabalho garantido por escrito
 </h3>
 <p className="text-sm opacity-90">
 Se não ficar satisfeito, voltamos gratuitamente até resolver. Sem custos adicionais.
 </p>
 </div>
 </div>
 </div>
 {/* Trust indicators */}
 <div className="mt-8 text-center space-y-2">
 <div className="flex items-center justify-center gap-2 text-gray-600">
 <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
 <span className="font-semibold"></span>
 <span className="text-sm">(500+ avaliações)</span>
 </div>
 <p className="text-sm text-gray-500">
 Empresa registada e segurada | NIF: {isPlumber ? '123456789' : '987654321'}
 </p>
 </div>
 </div>
 </section>
 );
}
