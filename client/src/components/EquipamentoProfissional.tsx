import React from 'react';
import { useSite } from '@/contexts/SiteContext';

interface EquipamentoProfissionalProps {
  className?: string;
}

// Équipement confirmé ENR/EU uniquement (20-BUSINESS-FACTS.json → equipment.electrical_only) : marques seules, sans prix ni spécifications.
const equipment = [
  { name: 'Fluke', description: 'Equipamento de medição adequado à intervenção', icon: '⚡' },
  { name: 'FLIR E96', description: 'Câmara termográfica, quando a avaliação o justifica', icon: '🌡️' },
];

function EquipamentoProfissional({ className = '' }: EquipamentoProfissionalProps) {
  const { config } = useSite();
  const accentColor = '#FF6B35';
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-orange-50 to-red-50 px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-bold" style={{ color: accentColor }}>
              🔧 EQUIPAMENTO PROFISSIONAL
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Equipamento profissional adequado à intervenção
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mão de obra a 70 €/h (09h–18h) ou 100 €/h (noite, fins de semana e feriados), mais deslocação de 30 € ou 50 €. Cada hora iniciada é devida.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {equipment.map((item) => (
            <div key={item.name} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:+351${config.phone.replace(/\s/g, '')}`}
            className="inline-block px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all text-center"
            style={{ backgroundColor: accentColor }}
          >
            📞 {config.phone}
          </a>
          <a
            href="/transparencia-precos"
            className="inline-block px-8 py-4 rounded-xl font-bold text-gray-900 text-lg shadow-lg hover:shadow-xl transition-all bg-white border-2 text-center"
            style={{ borderColor: accentColor }}
          >
            Ver Preços Transparentes
          </a>
        </div>
      </div>
    </section>
  );
}

export default React.memo(EquipamentoProfissional);
