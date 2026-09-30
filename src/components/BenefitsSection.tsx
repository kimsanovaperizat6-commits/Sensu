import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { Check } from 'lucide-react';

interface BenefitsSectionProps {
  onOrderClick: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOrderClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="routine" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Lifestyle Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#EEDCE2] bg-[#FAF3F5]">
              {!imgError ? (
                <img
                  src={PRODUCT_DATA.images.moment}
                  alt="SENSU Collagen Tea — даярдалган чай жана оригиналдуу каробкасы"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : null}
            </div>
          </div>

          {/* Right: Points & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4B0F1C] tracking-tight mb-4">
              {PRODUCT_DATA.dailyRoutine.title}
            </h2>

            <p className="text-sm text-[#6B5159] leading-relaxed mb-6">
              {PRODUCT_DATA.dailyRoutine.subtitle}
            </p>

            {/* List of 5 benefits */}
            <div className="space-y-3 w-full mb-8">
              {PRODUCT_DATA.dailyRoutine.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#FAF7F6] border border-[#EEDCE2] flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FCE8ED] text-[#7B162C] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-[#382329] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Consistent Strategic CTA */}
            <button
              onClick={onOrderClick}
              className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider text-white bg-[#7B162C] hover:bg-[#5E0F20] transition-colors shadow-sm flex items-center gap-2"
            >
              <span>🛍 Заказать / Сатып алуу</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
