import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { SensuFramedBox } from './SensuFramedBox';
import { ShieldCheck, Truck } from 'lucide-react';

interface Course40SectionProps {
  onOrderClick: () => void;
}

export const Course40Section: React.FC<Course40SectionProps> = ({ onOrderClick }) => {
  return (
    <section id="course" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4B0F1C] tracking-tight">
            {PRODUCT_DATA.course40.title}
          </h2>
          <p className="mt-2 text-base text-[#6E555D]">
            {PRODUCT_DATA.course40.subtitle}
          </p>
        </div>

        <div className="bg-[#FAF7F6] rounded-3xl p-8 sm:p-10 border border-[#EEDCE2] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Product Image with Original Frame */}
          <div className="md:col-span-5 flex justify-center">
            <SensuFramedBox size="md" showSubtitle={false} />
          </div>

          {/* Details & Clean 40-Day Visual */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-3xl font-bold font-mono text-[#7B162C] mb-2 tabular-nums">
              {PRODUCT_DATA.price} {PRODUCT_DATA.currency}
            </div>

            <p className="text-xs text-[#70565F] mb-6">
              40 даана пакетик — 40 күн бою күнүмдүк жеке кам көрүү
            </p>

            {/* 40-Day Progress Minimal Dots */}
            <div className="w-full max-w-sm p-4 bg-white rounded-2xl border border-[#EEDCE2] mb-6">
              <div className="flex items-center justify-between text-xs text-[#6B5159] mb-3">
                <span className="font-semibold text-[#4B0F1C]">40 күндүк ритуал</span>
                <span className="font-mono text-[#7B162C]">40 / 40 күн</span>
              </div>
              <div className="grid grid-cols-10 gap-1.5">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 rounded-xs bg-[#7B162C]/25"
                    title={`Күн ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-[#523B42] mb-6">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#7B162C]" />
                <span>{PRODUCT_DATA.course40.originalBadge}</span>
              </div>
              <span className="hidden sm:inline text-[#C0A3AB]">·</span>
              <div className="flex items-center gap-1.5 text-[#2C6E3B]">
                <Truck className="w-4 h-4" />
                <span>{PRODUCT_DATA.course40.deliveryBadge}</span>
              </div>
            </div>

            {/* Consistent CTA */}
            <button
              onClick={onOrderClick}
              className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider text-white bg-[#7B162C] hover:bg-[#5E0F20] transition-colors shadow-sm"
            >
              🛍 Заказать / Сатып алуу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
