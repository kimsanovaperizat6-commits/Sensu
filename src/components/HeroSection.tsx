import React from 'react';
import { SensuLogo } from './SensuLogo';
import { SensuFramedBox } from './SensuFramedBox';
import { PRODUCT_DATA } from '../data/productData';
import { Calendar, Sparkles, Truck, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOrderClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FDF8F9] via-[#FAF5F6] to-[#FAF7F6]">
      {/* Soft Japanese Ambient Background */}
      <div
        className="absolute top-12 -left-20 w-80 h-80 bg-[#F8E3E7]/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-20 w-80 h-80 bg-[#F4D9DF]/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* SENSU Official Logo */}
            <div className="mb-4">
              <SensuLogo size="lg" variant="burgundy" />
            </div>

            {/* Slogan */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#621123] tracking-tight leading-[1.2] mb-5 max-w-xl text-balance">
              {PRODUCT_DATA.slogan}
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-[#553E45] font-light leading-relaxed mb-8 max-w-xl">
              {PRODUCT_DATA.shortDescription}
            </p>

            {/* Strategic CTA Button */}
            <div className="mb-8">
              <button
                onClick={onOrderClick}
                className="px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-white bg-[#7B162C] hover:bg-[#5E0F20] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] inline-flex items-center gap-2"
              >
                <span>🛍 Заказать / Сатып алуу</span>
              </button>
            </div>

            {/* Compact Product Highlight below CTA */}
            <div className="w-full max-w-lg pt-6 border-t border-[#ECD7DC]">
              <div className="grid grid-cols-3 gap-3 text-center sm:text-left">
                {/* 40 pieces • 40 days */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                  <div className="p-2 rounded-full bg-[#FCECEF] text-[#7B162C] shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-[#2C1D21]">40 даана</div>
                    <div className="text-[11px] sm:text-xs text-[#7A6168]">40 күнгө</div>
                  </div>
                </div>

                {/* 1800 som */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                  <div className="p-2 rounded-full bg-[#FCECEF] text-[#7B162C] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#7B162C] font-mono tabular-nums">
                      1800 сом
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#7A6168]">Курс баасы</div>
                  </div>
                </div>

                {/* Free delivery */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                  <div className="p-2 rounded-full bg-[#FCECEF] text-[#7B162C] shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-[#2C1D21]">Жеткирүү</div>
                    <div className="text-[11px] sm:text-xs text-[#3E654C] font-medium">Акысыз (КР)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Product Packaging with Original Circular Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <SensuFramedBox size="lg" showSubtitle={true} />

            {/* Subtle authentic badges under the frame */}
            <div className="mt-5 flex items-center justify-center gap-3 text-xs text-[#6B5159]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7B162C]" />
                100% Табигый курам
              </span>
              <span>·</span>
              <span className="font-serif italic text-[#7B162C]">
                Жапон технологиясы
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

