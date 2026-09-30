import React from 'react';

interface SensuLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'burgundy' | 'white';
}

export const SensuLogo: React.FC<SensuLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'burgundy',
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24 md:h-28',
  };

  const isBurgundy = variant === 'burgundy';
  const mainColorStart = isBurgundy ? '#7B162C' : '#FFFFFF';
  const mainColorEnd = isBurgundy ? '#4A0D1A' : '#FCECEF';
  const leafColor1 = isBurgundy ? '#D96E82' : '#F7BAC5';
  const leafColor2 = isBurgundy ? '#C8536A' : '#F09EAE';
  const sublineColor = isBurgundy ? '#6B1427' : '#FFFFFF';

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 180"
        className={`${sizeClasses[size]} w-auto max-w-full drop-shadow-xs`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SENSU Collagen Tea Logo"
      >
        <defs>
          <linearGradient id={`sensuGrad-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={mainColorStart} />
            <stop offset="60%" stopColor={isBurgundy ? '#5E1021' : '#FFFFFF'} />
            <stop offset="100%" stopColor={mainColorEnd} />
          </linearGradient>

          <linearGradient id={`leafGrad1-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={leafColor1} />
            <stop offset="100%" stopColor={leafColor2} />
          </linearGradient>

          <linearGradient id={`leafGrad2-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E58697" />
            <stop offset="100%" stopColor="#B84257" />
          </linearGradient>

          <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#400814" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Brand Name SENSU in High-End Serif */}
        <g filter="url(#softGlow)">
          <text
            x="36"
            y="118"
            fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            fontSize="128"
            fontWeight="700"
            letterSpacing="6"
            fill={`url(#sensuGrad-${variant})`}
            stroke={isBurgundy ? '#8E2036' : 'none'}
            strokeWidth={isBurgundy ? '0.75' : '0'}
          >
            SENSU
          </text>
        </g>

        {/* Elegant Botanical Pink Leaves on the Right of 'U' */}
        <g transform="translate(425, 42)">
          {/* Main Leaf */}
          <path
            d="M50 82 C50 82 82 45 68 8 C54 -2 18 20 22 55 C23 68 34 78 50 82 Z"
            fill={`url(#leafGrad1-${variant})`}
            stroke={isBurgundy ? '#FAD1D8' : '#FFFFFF'}
            strokeWidth="1.2"
          />
          {/* Leaf Vein */}
          <path
            d="M32 68 C38 48 48 30 58 16"
            stroke="#FFF"
            strokeWidth="1"
            strokeOpacity="0.6"
            strokeLinecap="round"
          />
          {/* Secondary Leaf */}
          <path
            d="M48 84 C48 84 94 92 108 65 C118 42 86 36 62 54 C52 62 48 76 48 84 Z"
            fill={`url(#leafGrad2-${variant})`}
            stroke={isBurgundy ? '#FAD1D8' : '#FFFFFF'}
            strokeWidth="1"
          />
          <path
            d="M56 78 C70 70 85 64 96 55"
            stroke="#FFF"
            strokeWidth="0.8"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
        </g>

        {/* Thin Divider Line Left */}
        <line
          x1="30"
          y1="148"
          x2="88"
          y2="148"
          stroke={sublineColor}
          strokeWidth="1"
          strokeOpacity="0.75"
        />

        {/* COLLAGEN TEA Subtitle */}
        <text
          x="270"
          y="153"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="22"
          fontWeight="500"
          letterSpacing="12"
          fill={sublineColor}
        >
          COLLAGEN TEA
        </text>

        {/* Thin Divider Line Right */}
        <line
          x1="452"
          y1="148"
          x2="510"
          y2="148"
          stroke={sublineColor}
          strokeWidth="1"
          strokeOpacity="0.75"
        />
      </svg>
    </div>
  );
};
