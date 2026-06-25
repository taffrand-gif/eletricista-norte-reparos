import React, { useState, useEffect, useRef, memo } from 'react';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLocationContent, usePersonalizedWhatsAppMessage } from '@/hooks/useLocationContent';

function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const trackedRef = useRef<{ shown: boolean }>({ shown: false });
  const { trackExitPopupShown, trackExitPopupConversion } = useAnalytics();
  const { city, arrivalTime } = useLocationContent();
  const whatsappMessage = usePersonalizedWhatsAppMessage('Vi o vosso site e preciso de um orçamento urgente. Podem ajudar?');

  // Track if user has scrolled (mobile gate)
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // Session-storage flag: max 1 fois par session
    const sessionKey = `exitPopup_shown_${ACTIVE_CONFIG.domain || 'site'}`;
    if (typeof window !== 'undefined' && window.sessionStorage.getItem(sessionKey) === '1') {
      trackedRef.current.shown = true;
      return;
    }

    // Detect if mobile device (reactive)
    const isMobile = () => window.innerWidth < 768;

    // Mark scrolled if user scrolls >50%
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPct = docHeight > 0 ? window.scrollY / docHeight : 0;
      if (scrolledPct > 0.5) {
        hasScrolledRef.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mobile: 180s + only after scroll > 50%
    // Desktop: 30s (no scroll gate)
    const delay = isMobile() ? 180000 : 30000;

    const timer = setTimeout(() => {
      if (trackedRef.current.shown) return;
      if (isMobile() && !hasScrolledRef.current) {
        // Mobile user hasn't scrolled enough — reschedule +30s
        setTimeout(() => {
          if (trackedRef.current.shown) return;
          if (hasScrolledRef.current) {
            trackedRef.current.shown = true;
            try { window.sessionStorage.setItem(sessionKey, '1'); } catch {}
            setShowPopup(true);
            trackExitPopupShown();
          }
        }, 30000);
        return;
      }
      trackedRef.current.shown = true;
      try { window.sessionStorage.setItem(sessionKey, '1'); } catch {}
      setShowPopup(true);
      trackExitPopupShown();
    }, delay);

    // Desktop exit-intent: mouse leaves viewport from top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !trackedRef.current.shown) {
        trackedRef.current.shown = true;
        clearTimeout(timer);
        try { window.sessionStorage.setItem(sessionKey, '1'); } catch {}
        trackExitPopupShown();
        setShowPopup(true);
      }
    };
    if (!isMobile()) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [trackExitPopupShown]);

  if (!showPopup) return null;

  const isPlumber = ACTIVE_CONFIG.type === 'plomberie';
  const accentColor = isPlumber ? '#0e7490' : '#FF6B35';
  const serviceName = isPlumber ? 'Canalizador' : 'Eletricista';
  const isMobileBrowser = typeof window !== 'undefined' && window.innerWidth < 768;

  const closePopup = () => setShowPopup(false);

  return (
    <>
      {/* Overlay: only on desktop (mobile = bottom sheet, no overlay) */}
      {!isMobileBrowser && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in"
          onClick={closePopup}
          aria-hidden="true"
        />
      )}
      {/* Popup container */}
      <div
        className={
          isMobileBrowser
            ? 'fixed bottom-0 left-0 right-0 z-50 w-full animate-slide-up'
            : 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-scale-in'
        }
        role="dialog"
        aria-modal={!isMobileBrowser ? 'true' : 'false'}
        aria-labelledby="exit-popup-title"
      >
        <div
          className={
            isMobileBrowser
              ? 'bg-white rounded-t-2xl shadow-2xl p-6 relative max-h-[70vh] overflow-y-auto'
              : 'bg-white rounded-2xl shadow-2xl p-8 relative'
          }
        >
          {/* Close button */}
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl leading-none w-8 h-8 flex items-center justify-center"
            aria-label="Fechar"
          >
            ×
          </button>

          {/* Content */}
          <div className="text-center">
            <div className="text-4xl mb-3" aria-hidden="true">🚨</div>
            <h2 id="exit-popup-title" className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {serviceName} disponível agora
            </h2>
            <p className="text-base md:text-lg font-bold mb-3" style={{ color: accentColor }}>
              Atendimento 24h em {city}
            </p>
            <p className="text-gray-600 mb-5 text-sm md:text-base">
              Não perca tempo. Temos um {serviceName.toLowerCase()} disponível que pode estar na sua porta em <strong>{arrivalTime}</strong>.
            </p>

            {/* Benefits: mobile = 2 bullets, desktop = 4 bullets */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-5 text-left border-2 border-green-200">
              <p className="text-xs font-bold text-green-700 mb-3 text-center uppercase tracking-wide">
                Porquê contactar
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm font-semibold">
                  <span className="text-green-600 text-lg flex-shrink-0" aria-hidden="true">✓</span>
                  <span>Disponível 24h/7 dias</span>
                </li>
                <li className="flex items-center gap-2 text-sm font-semibold">
                  <span className="text-green-600 text-lg flex-shrink-0" aria-hidden="true">✓</span>
                  <span>Orçamento por escrito antes de começar</span>
                </li>
                {!isMobileBrowser && (
                  <>
                    <li className="flex items-center gap-2 text-sm font-semibold">
                      <span className="text-green-600 text-lg flex-shrink-0" aria-hidden="true">✓</span>
                      <span>Sem compromisso</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm font-semibold">
                      <span className="text-green-600 text-lg flex-shrink-0" aria-hidden="true">✓</span>
                      <span>Serviço com garantia de 12 meses por escrito</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* CTA Buttons: stacked on mobile, full-width always */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                className="flex items-center justify-center gap-2 w-full text-white font-black px-6 py-4 rounded-xl text-base md:text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg min-h-[48px]"
                style={{ backgroundColor: '#25D366' }}
                onClick={() => {
                  trackExitPopupConversion('WhatsApp');
                  closePopup();
                }}
              >
                <span aria-hidden="true">💬</span>
                <span>WhatsApp Agora</span>
              </a>
              <a
                href={`tel:${ACTIVE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 w-full font-bold px-6 py-4 rounded-xl text-base border-2 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                style={{ borderColor: accentColor, color: accentColor }}
                onClick={() => {
                  trackExitPopupConversion('Phone');
                  closePopup();
                }}
              >
                <span aria-hidden="true">📞</span>
                <span>Ligar: {ACTIVE_CONFIG.phone}</span>
              </a>
            </div>

            {/* Trust footer */}
            <p className="mt-4 text-xs text-gray-500">
              Atendemos clientes em toda a região de Trás-os-Montes
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.35s ease-out;
        }
      `}</style>
    </>
  );
}

export default React.memo(ExitIntentPopup);