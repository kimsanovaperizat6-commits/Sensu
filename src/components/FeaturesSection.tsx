import React from 'react';
import { PRODUCT_DATA } from '../data/productData';

// 1. Botanical herbs / natural plants (Табигый өсүмдүк компоненттери)
const BotanicalHerbsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Main herb stem curving up */}
    <path d="M4 21C7.5 19 9.5 15.5 11.5 10C12.5 7 14.5 4 19 3" />
    {/* Top leaf tip */}
    <path d="M19 3C19 6.5 16.5 8 13.5 8.5" />
    {/* Right botanical leaf */}
    <path d="M11 12C14 11 17 12.5 18 15.5C15 16.5 12.5 15 11 12Z" />
    {/* Left botanical leaf */}
    <path d="M8.5 16.5C5.5 15.5 3 17 2.5 19.5C5 20 7.5 19 8.5 16.5Z" />
  </svg>
);

// 2. Collagen molecule / collagen peptide (Коллаген)
const CollagenMoleculeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Interconnected peptide nodes */}
    <circle cx="6" cy="7" r="2.2" />
    <circle cx="18" cy="7" r="2.2" />
    <circle cx="12" cy="12" r="2.2" />
    <circle cx="6" cy="17" r="2.2" />
    <circle cx="18" cy="17" r="2.2" />
    {/* Molecular peptide bonds */}
    <path d="M7.8 8.6L10.2 10.4" />
    <path d="M16.2 8.6L13.8 10.4" />
    <path d="M10.2 13.6L7.8 15.4" />
    <path d="M13.8 13.6L16.2 15.4" />
    <path d="M8.2 7H15.8" strokeDasharray="1.5 2" />
    <path d="M8.2 17H15.8" strokeDasharray="1.5 2" />
  </svg>
);

// 3. Vitamin capsule & tablet (Витаминдер)
const VitaminCapsuleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Vitamin capsule tilted at 45 degrees */}
    <path d="M8.8 19.2L16.8 11.2C18.4 9.6 18.4 7 16.8 5.4C15.2 3.8 12.6 3.8 11 5.4L3 13.4C1.4 15 1.4 17.6 3 19.2C4.6 20.8 7.2 20.8 8.8 19.2Z" />
    <path d="M7 9.4L12.6 15" />
    {/* Round scored vitamin tablet */}
    <circle cx="18.5" cy="17.5" r="3.5" />
    <line x1="16.5" y1="17.5" x2="20.5" y2="17.5" />
  </svg>
);

// 4. Antioxidant molecule / protective molecule (Антиоксиданттар)
const AntioxidantMoleculeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Central active core atom */}
    <circle cx="12" cy="12" r="2.8" />
    {/* Outer protective bonded atoms */}
    <circle cx="12" cy="4" r="1.8" />
    <circle cx="19" cy="8" r="1.8" />
    <circle cx="19" cy="16" r="1.8" />
    <circle cx="12" cy="20" r="1.8" />
    <circle cx="5" cy="16" r="1.8" />
    <circle cx="5" cy="8" r="1.8" />
    {/* Defensive radial molecular bonds */}
    <path d="M12 5.8V9.2" />
    <path d="M17.4 9.1L14.4 10.8" />
    <path d="M17.4 14.9L14.4 13.2" />
    <path d="M12 18.2V14.8" />
    <path d="M6.6 14.9L9.6 13.2" />
    <path d="M6.6 9.1L9.6 10.8" />
  </svg>
);

// 5. Preservative-free clean bottle with leaf (Консервантсыз курам)
const PreservativeFreeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Bottle cap & rim */}
    <rect x="9.5" y="2" width="5" height="2.5" rx="0.75" />
    <path d="M10.5 4.5V6H13.5V4.5" />
    {/* Clean apothecary / wellness bottle */}
    <path d="M7.5 9C7.5 7.3 8.7 6 10.3 6H13.7C15.3 6 16.5 7.3 16.5 9V18C16.5 19.7 15.2 21 13.5 21H10.5C8.8 21 7.5 19.7 7.5 18V9Z" />
    {/* Clean natural leaf badge on the bottle */}
    <path d="M12 10.5C14.5 10.5 15.5 12.3 15.5 14.2C13.5 14.2 12 12.6 12 10.5Z" />
    <path d="M12 10.5V17" />
    <path d="M12 14.2C10.5 14.2 9.5 13 9.5 11.5C10.8 11.5 11.8 12.7 12 14.2Z" />
  </svg>
);

export const FeaturesSection: React.FC = () => {
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'f1':
        return <BotanicalHerbsIcon className="w-6 h-6 text-[#7B162C]" />;
      case 'f2':
        return <CollagenMoleculeIcon className="w-6 h-6 text-[#7B162C]" />;
      case 'f3':
        return <VitaminCapsuleIcon className="w-6 h-6 text-[#7B162C]" />;
      case 'f4':
        return <AntioxidantMoleculeIcon className="w-6 h-6 text-[#7B162C]" />;
      case 'f5':
        return <PreservativeFreeIcon className="w-6 h-6 text-[#7B162C]" />;
      default:
        return <BotanicalHerbsIcon className="w-6 h-6 text-[#7B162C]" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4B0F1C] tracking-tight">
            SENSUнун өзгөчөлүктөрү
          </h2>
        </div>

        {/* Five Clean Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PRODUCT_DATA.features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#FAF7F6] rounded-2xl p-6 border border-[#EEDCE2] flex flex-col items-center text-center transition-all duration-200 hover:border-[#DFB5C1] group"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-[#ECD9DF] flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                {getFeatureIcon(feature.id)}
              </div>

              <h3 className="text-base font-serif font-semibold text-[#48101E] mb-2 leading-snug">
                {feature.title}
              </h3>

              <p className="text-xs text-[#6B5159] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
