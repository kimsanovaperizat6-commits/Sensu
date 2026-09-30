import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayCount, setDisplayCount] = useState<number>(100);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Milestone sequence requested by user
  const milestones = [100, 200, 500, 1000, 1500, 2000, 2500, 3000];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let stepIndex = 0;
    // Step smoothly through the milestones
    const stepInterval = setInterval(() => {
      if (stepIndex < milestones.length) {
        setDisplayCount(milestones[stepIndex]);
        stepIndex++;
      } else {
        clearInterval(stepInterval);
        setIsCompleted(true);
      }
    }, 180);

    return () => clearInterval(stepInterval);
  }, [hasAnimated]);

  // Format with space as thousand separator (e.g. 5 000)
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-b from-[#FAF7F6] via-[#FCF3F5] to-[#FAF7F6] relative overflow-hidden"
    >
      {/* Delicate Japanese Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F8DDE3]/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Elegant Minimal Accent */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#7B162C] mb-4">
          <Heart className="w-3.5 h-3.5 fill-[#7B162C]/20" />
          <span>Кардарлардын тандоосу жана ишеними</span>
          <Heart className="w-3.5 h-3.5 fill-[#7B162C]/20" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#4B0F1C] tracking-tight mb-8">
          «3 000+ кардар SENSUну тандады»
        </h2>

        {/* Main Prominent Animated Stat Card */}
        <div className="bg-white/90 backdrop-blur-xs rounded-3xl p-8 sm:p-12 border border-[#EEDCE2] shadow-xs max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            {/* Animated Large Counter */}
            <div className="flex items-baseline justify-center gap-1 mb-3">
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono text-[#7B162C] tracking-tight tabular-nums select-none transition-all duration-150">
                {formatNumber(displayCount)}
              </span>
              <span
                className={`text-4xl sm:text-5xl md:text-6xl font-bold font-mono text-[#7B162C] transition-opacity duration-300 ${
                  isCompleted ? 'opacity-100 scale-105' : 'opacity-80'
                }`}
              >
                +
              </span>
            </div>

            <p className="text-sm sm:text-base font-serif text-[#4A343B] font-medium max-w-md mx-auto leading-relaxed mb-6">
              Кыргызстан боюнча күн сайын өзүнө кам көргөн айымдардын ишенимдүү тандоосу
            </p>

            {/* Subtle Minimal Supporting Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-[#F4E3E7] text-xs">
              <div className="flex items-center justify-center gap-1.5 text-[#5C454D]">
                <Sparkles className="w-3.5 h-3.5 text-[#7B162C]" />
                <span>100% табигый курам</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[#5C454D]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7B162C]" />
                <span>Оригиналдуу сапат</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[#2C6E3B]">
                <span className="font-semibold">🇰🇬 7 облуска</span>
                <span>акысыз жеткирүү</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
