import React from 'react';

/**
 * FloatingLeaves
 * A delicate, subtle floating leaf animation inspired by the SENSU packaging and logo.
 * 
 * Features:
 * - Uses the exact botanical leaf shape from the SENSU logo and floral packaging
 * - Very slow, natural drifting and soft rotational movement as if carried by a light breeze
 * - Staggered negative delays for an organic, continuous, seamless flow
 * - Very low opacity (0.16 - 0.32) and plenty of negative space (only 7 delicate leaves)
 * - pointer-events-none so it never interferes with any clicks, text selection, or buttons
 */

interface LeafConfig {
  id: string;
  type: 1 | 2 | 3;
  left?: string;
  top?: string;
  size: number;
  opacity: number;
  duration: string;
  delay: string;
  animationName: string;
  initialRotate: number;
}

const LEAVES: LeafConfig[] = [
  {
    id: 'sensu-leaf-1',
    type: 1,
    left: '12%',
    top: '-5%',
    size: 22,
    opacity: 0.28,
    duration: '26s',
    delay: '-4s',
    animationName: 'sensuDriftDown1',
    initialRotate: 15,
  },
  {
    id: 'sensu-leaf-2',
    type: 2,
    left: '84%',
    top: '-8%',
    size: 19,
    opacity: 0.24,
    duration: '29s',
    delay: '-14s',
    animationName: 'sensuDriftDown2',
    initialRotate: -25,
  },
  {
    id: 'sensu-leaf-3',
    type: 1,
    left: '-5%',
    top: '25%',
    size: 24,
    opacity: 0.26,
    duration: '28s',
    delay: '-9s',
    animationName: 'sensuBreezeAcross',
    initialRotate: 30,
  },
  {
    id: 'sensu-leaf-4',
    type: 3,
    left: '42%',
    top: '-6%',
    size: 16,
    opacity: 0.22,
    duration: '32s',
    delay: '-19s',
    animationName: 'sensuDriftDown1',
    initialRotate: -10,
  },
  {
    id: 'sensu-leaf-5',
    type: 2,
    left: '68%',
    top: '-5%',
    size: 20,
    opacity: 0.25,
    duration: '27s',
    delay: '-7s',
    animationName: 'sensuDriftDown3',
    initialRotate: 45,
  },
  {
    id: 'sensu-leaf-6',
    type: 1,
    left: '95%',
    top: '48%',
    size: 18,
    opacity: 0.2,
    duration: '31s',
    delay: '-16s',
    animationName: 'sensuBreezeBack',
    initialRotate: -35,
  },
  {
    id: 'sensu-leaf-7',
    type: 3,
    left: '28%',
    top: '-8%',
    size: 21,
    opacity: 0.26,
    duration: '25s',
    delay: '-11s',
    animationName: 'sensuDriftDown2',
    initialRotate: 20,
  },
];

export const FloatingLeaves: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-15 select-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes sensuDriftDown1 {
          0% {
            transform: translate3d(0, -60px, 0) rotate(0deg) scale(0.9);
            opacity: 0;
          }
          10% {
            opacity: var(--leaf-target-opacity);
          }
          35% {
            transform: translate3d(45px, 35vh, 0) rotate(35deg) scale(1);
          }
          65% {
            transform: translate3d(10px, 70vh, 0) rotate(18deg) scale(0.95);
            opacity: var(--leaf-target-opacity);
          }
          90% {
            opacity: calc(var(--leaf-target-opacity) * 0.7);
          }
          100% {
            transform: translate3d(55px, 108vh, 0) rotate(55deg) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes sensuDriftDown2 {
          0% {
            transform: translate3d(0, -60px, 0) rotate(15deg) scale(0.92);
            opacity: 0;
          }
          12% {
            opacity: var(--leaf-target-opacity);
          }
          40% {
            transform: translate3d(-50px, 38vh, 0) rotate(-20deg) scale(1);
          }
          70% {
            transform: translate3d(-15px, 72vh, 0) rotate(-5deg) scale(0.95);
            opacity: var(--leaf-target-opacity);
          }
          92% {
            opacity: calc(var(--leaf-target-opacity) * 0.6);
          }
          100% {
            transform: translate3d(-60px, 108vh, 0) rotate(-35deg) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes sensuDriftDown3 {
          0% {
            transform: translate3d(0, -60px, 0) rotate(-10deg) scale(0.95);
            opacity: 0;
          }
          15% {
            opacity: var(--leaf-target-opacity);
          }
          50% {
            transform: translate3d(30px, 50vh, 0) rotate(25deg) scale(1.02);
          }
          85% {
            opacity: var(--leaf-target-opacity);
          }
          100% {
            transform: translate3d(15px, 108vh, 0) rotate(10deg) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes sensuBreezeAcross {
          0% {
            transform: translate3d(-60px, 0, 0) rotate(-10deg) scale(0.9);
            opacity: 0;
          }
          15% {
            opacity: var(--leaf-target-opacity);
          }
          45% {
            transform: translate3d(45vw, 15vh, 0) rotate(35deg) scale(1);
          }
          80% {
            transform: translate3d(85vw, 25vh, 0) rotate(60deg) scale(0.95);
            opacity: var(--leaf-target-opacity);
          }
          100% {
            transform: translate3d(108vw, 35vh, 0) rotate(80deg) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes sensuBreezeBack {
          0% {
            transform: translate3d(60px, 0, 0) rotate(20deg) scale(0.9);
            opacity: 0;
          }
          15% {
            opacity: var(--leaf-target-opacity);
          }
          50% {
            transform: translate3d(-45vw, 12vh, 0) rotate(-25deg) scale(1);
          }
          85% {
            opacity: var(--leaf-target-opacity);
          }
          100% {
            transform: translate3d(-108vw, 22vh, 0) rotate(-60deg) scale(0.9);
            opacity: 0;
          }
        }
      `}</style>

      {LEAVES.map((leaf) => (
        <div
          key={leaf.id}
          style={
            {
              position: 'absolute',
              left: leaf.left,
              top: leaf.top,
              width: `${leaf.size}px`,
              height: `${leaf.size * 1.3}px`,
              animationName: leaf.animationName,
              animationDuration: leaf.duration,
              animationDelay: leaf.delay,
              animationTimingFunction: 'cubic-bezier(0.37, 0, 0.63, 1)',
              animationIterationCount: 'infinite',
              '--leaf-target-opacity': leaf.opacity,
              willChange: 'transform, opacity',
            } as React.CSSProperties
          }
        >
          {leaf.type === 1 && (
            /* SENSU Signature Botanical Main Leaf (from logo & packaging) */
            <svg
              viewBox="0 0 100 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-2xs"
            >
              <defs>
                <linearGradient id={`grad1-${leaf.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DF7B8E" />
                  <stop offset="100%" stopColor="#8C1E34" />
                </linearGradient>
              </defs>
              {/* Outer delicate leaf */}
              <path
                d="M50 92 C50 92 86 52 72 12 C56 0 18 24 22 62 C24 77 34 88 50 92 Z"
                fill={`url(#grad1-${leaf.id})`}
                stroke="#FCDDE3"
                strokeWidth="1.2"
              />
              {/* Soft interior vein line */}
              <path
                d="M34 76 C40 54 50 34 62 18"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeOpacity="0.65"
                strokeLinecap="round"
              />
            </svg>
          )}

          {leaf.type === 2 && (
            /* SENSU Secondary Leaf / Sakura Petal (from logo & packaging) */
            <svg
              viewBox="0 0 110 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-2xs"
            >
              <defs>
                <linearGradient id={`grad2-${leaf.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F09EAE" />
                  <stop offset="100%" stopColor="#A82842" />
                </linearGradient>
              </defs>
              {/* Petal leaf contour */}
              <path
                d="M48 88 C48 88 96 96 108 68 C118 44 86 38 62 56 C52 64 48 80 48 88 Z"
                fill={`url(#grad2-${leaf.id})`}
                stroke="#FEE6EB"
                strokeWidth="1"
              />
              <path
                d="M56 82 C72 74 88 67 98 58"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeOpacity="0.6"
                strokeLinecap="round"
              />
            </svg>
          )}

          {leaf.type === 3 && (
            /* SENSU Delicate Herbal Shoot */
            <svg
              viewBox="0 0 80 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-2xs"
            >
              <defs>
                <linearGradient id={`grad3-${leaf.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ECA5B4" />
                  <stop offset="100%" stopColor="#9C223A" />
                </linearGradient>
              </defs>
              <path
                d="M40 85 C40 85 70 50 60 15 C45 5 15 25 20 60 C22 72 30 80 40 85 Z"
                fill={`url(#grad3-${leaf.id})`}
                stroke="#FFF0F3"
                strokeWidth="1"
              />
              <path
                d="M30 68 C35 50 42 32 52 18"
                stroke="#FFFFFF"
                strokeWidth="0.9"
                strokeOpacity="0.55"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
