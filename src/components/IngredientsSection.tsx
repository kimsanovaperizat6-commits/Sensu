import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';

export const IngredientsSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="ingredients" className="py-20 md:py-24 bg-[#FAF7F6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4B0F1C] tracking-tight">
            Табигый курам
          </h2>
          <p className="mt-2 text-sm text-[#70565F]">
            Кылдаттык менен тандалган табигый компоненттер
          </p>
        </div>

        {/* Flatlay visual banner */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-[#EEDCE2] bg-white max-w-4xl mx-auto">
          {!imgError ? (
            <img
              src={PRODUCT_DATA.images.ingredients}
              alt="SENSU Collagen Tea табигый курамы"
              className="w-full h-48 sm:h-64 object-cover"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
          ) : null}
        </div>

        {/* 4 Clean Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {PRODUCT_DATA.ingredients.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-[#EEDCE2] flex flex-col justify-between hover:border-[#DFB5C1] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[11px] font-medium text-[#7B162C]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-[#440E1B] mb-1.5">
                  {item.name}
                </h3>
                <p className="text-xs text-[#5E474F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#8A7179] italic max-w-xl mx-auto">
            {PRODUCT_DATA.ingredientNote}
          </p>
        </div>
      </div>
    </section>
  );
};
