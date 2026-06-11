import React from 'react';
import { useSite } from '@/contexts/SiteContext';
interface WhyWePublishPricesProps {
 className?: string;
}
function WhyWePublishPrices({ className = '' }: WhyWePublishPricesProps) {
 const { config } = useSite();
 const accentColor = config.id === 'norte-reparos' ? '#0e7490' : '#FF6B35';
 const reasons = [
 {
 icon: '🤝',
 title: 'Confiance Totale',
 description: 'Pas de mauvaises surprises. Vous savez exactement ce que vous allez payer avant même de nous appeler.'
 },
 {
 icon: '⏱️',
 title: 'Gain de Temps',
 description: 'Plus besoin de demander 5 devis. Comparez directement nos prix avec la concurrence.'
 },
 {
 icon: '💰',
 title: 'Meilleur Rapport Qualité-Prix',
 description: 'Nos prix sont justes et compétitifs. Nous n\'avons rien à cacher.'
 },
 {
 icon: '📞',
 title: 'Appel Sans Stress',
 description: 'Quand vous appelez, c\'est pour confirmer la disponibilité, pas pour négocier le prix.'
 },
 {
 icon: '✅',
 title: 'Engagement Qualité',
 description: 'Publier nos prix nous engage à maintenir un service irréprochable.'
 },
 {
 icon: '🎯',
 title: 'Transparence Totale',
 description: 'Nous croyons que l\'honnêteté est la base d\'une relation client durable.'
 }
 ];
 return (
 <section className={`py-16 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}>
 <div className="container mx-auto px-4 max-w-6xl">
 {/* Header */}
 <div className="text-center mb-12">
 <div className="inline-block bg-white rounded-full px-6 py-2 shadow-md mb-4">
 <span className="text-sm font-bold" style={{ color: accentColor }}>
 NOTRE PHILOSOPHIE
 </span>
 </div>
 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
 Pourquoi Nous Publions Nos Prix ?
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
 Parce que vous méritez de savoir <strong>exactement</strong> combien vous allez payer{' '}
 <strong>avant</strong> de nous appeler. C'est aussi simple que ça.
 </p>
 </div>
 {/* Main Content */}
 <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {reasons.map((reason, idx) => (
 <div key={idx} className="text-center">
 <div className="text-6xl mb-4">{reason.icon}</div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 {reason.title}
 </h3>
 <p className="text-gray-600 leading-relaxed">
 {reason.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 {/* Comparison Box */}
 <div className="grid md:grid-cols-2 gap-6 mb-12">
 {/* Autres Entreprises */}
 <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3">😰</div>
 <h3 className="text-2xl font-bold text-gray-900">Autres Entreprises</h3>
 </div>
 <ul className="space-y-3">
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-0.5">✗</span>
 <span className="text-gray-700">"Il faut qu'on vienne voir pour faire un devis"</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-0.5">✗</span>
 <span className="text-gray-700">"Ça dépend... entre 100€ et 500€"</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-0.5">✗</span>
 <span className="text-gray-700">Prix final différent du devis initial</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-500 text-xl mt-0.5">✗</span>
 <span className="text-gray-700">Frais cachés découverts à la fin</span>
 </li>
 </ul>
 </div>
 {/* Notre Approche */}
 <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
 <div className="text-center mb-6">
 <div className="text-5xl mb-3">😊</div>
 <h3 className="text-2xl font-bold text-gray-900">Notre Approche</h3>
 </div>
 <ul className="space-y-3">
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-0.5">✓</span>
 <span className="text-gray-700">Prix clairs publiés sur notre site</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-0.5">✓</span>
 <span className="text-gray-700">Fourchette précise selon votre besoin</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-0.5">✓</span>
 <span className="text-gray-700">Prix validé au téléphone avant déplacement</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-500 text-xl mt-0.5">✓</span>
 <span className="text-gray-700">Aucune surprise, jamais</span>
 </li>
 </ul>
 </div>
 </div>
 {/* Testimonial Style Quote */}
 <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8" style={{ borderColor: accentColor }}>
 <div className="flex flex-col md:flex-row items-center gap-6">
 <div className="text-8xl" style={{ color: accentColor }}>❝</div>
 <div className="flex-1">
 <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 italic">
 "Dans notre métier, trop d'entreprises jouent sur le flou pour gonfler les prix.
 Nous avons choisi la transparence totale. Si nous perdons des clients à cause de nos prix affichés,
 tant pis. Nous préférons travailler avec des clients qui apprécient notre honnêteté."
 </p>
 <p className="text-lg font-bold text-gray-900">
 — L'équipe {config.id === 'norte-reparos' ? 'Norte Reparos' : ''}
 </p>
 </div>
 </div>
 </div>
 {/* Final CTA */}
 <div className="mt-12 text-center">
 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
 Vous Savez Maintenant Combien Ça Coûte
 </h3>
 <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
 Il ne vous reste plus qu'à vérifier notre disponibilité. Appelez-nous ou envoyez un WhatsApp.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={`tel:${config.id === 'norte-reparos' ? '928484451' : '932321892'}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: accentColor }}
 >
 📞 Appeler Maintenant
 </a>
 <a
 href={`https://wa.me/351${config.id === 'norte-reparos' ? '928484451' : '932321892'}?text=${encodeURIComponent('Olá! Vi os vossos preços no site. Gostaria de confirmar disponibilidade.')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all"
 style={{ backgroundColor: '#128C7E' }}
 >
 💬 WhatsApp
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
export default React.memo(WhyWePublishPrices);
