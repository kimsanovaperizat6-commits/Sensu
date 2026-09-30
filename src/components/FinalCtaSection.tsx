import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { SensuLogo } from './SensuLogo';
import { SensuFramedBox } from './SensuFramedBox';

interface FinalCtaSectionProps {
  onOrderClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#560D1D] to-[#360611] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="mb-6 flex justify-center">
          <SensuLogo size="md" variant="white" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
          {PRODUCT_DATA.finalCta.headline}
        </h2>

        <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed mb-8 max-w-lg mx-auto">
          {PRODUCT_DATA.finalCta.text}
        </p>

        <div className="mb-8">
          <button
            onClick={onOrderClick}
            className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#4A0E1D] bg-white hover:bg-[#FDECEF] transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
          >
            <span>🛍 Заказать / Сатып алуу</span>
          </button>
        </div>

        {/* Original framed box presentation */}
        <div className="flex justify-center">
          <SensuFramedBox size="sm" showSubtitle={false} />
        </div>
      </div>
    </section>
  );
};

