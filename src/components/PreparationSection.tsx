import React from 'react';
import { PRODUCT_DATA } from '../data/productData';

export const PreparationSection: React.FC = () => {
  return (
    <section id="prepare" className="py-20 md:py-24 bg-[#FAF7F6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4B0F1C] tracking-tight">
            Кантип даярдалат?
          </h2>
          <p className="mt-2 text-sm text-[#70565F]">
            3 жөнөкөй кадам
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRODUCT_DATA.howToPrepare.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#EEDCE2] text-center flex flex-col items-center"
            >
              <span className="text-2xl font-serif font-bold text-[#7B162C]/40 mb-2">
                {item.step}
              </span>
              <h3 className="text-lg font-serif font-bold text-[#4B0F1C] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#5C454D] leading-relaxed">
                {item.action}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

