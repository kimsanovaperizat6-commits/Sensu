import React from 'react';
import { PRODUCT_DATA } from '../data/productData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#FAF7F6] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4B0F1C] tracking-tight mb-8">
          {PRODUCT_DATA.about.title}
        </h2>

        <div className="space-y-5 text-base sm:text-lg text-[#4A343B] font-light leading-relaxed">
          <p>{PRODUCT_DATA.about.paragraph1}</p>
          <p>{PRODUCT_DATA.about.paragraph2}</p>
          <p className="font-serif italic text-lg sm:text-xl text-[#7B162C] font-normal pt-2">
            «{PRODUCT_DATA.about.paragraph3}»
          </p>
        </div>
      </div>
    </section>
  );
};
