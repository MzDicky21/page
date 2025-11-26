import React from 'react';

// ============================================
// COMPONENT ORBIT BUTTON
// ============================================

interface OrbitButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'blue' | 'purple' | 'green' | 'red';
}

export function OrbitButton({
    children,
    onClick,
    className = '',
    variant = 'blue'
}: OrbitButtonProps) {

    const variants = {
        blue: 'from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700',
        purple: 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
        green: 'from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
        red: 'from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700'
    };

    return (
        <>
            <style>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-reverse {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(-360deg) translateX(50px) rotate(360deg);
          }
        }
        
        .planet-orbit-1 {
          animation: orbit 4s linear infinite;
        }
        
        .planet-orbit-2 {
          animation: orbit 4s linear infinite;
          animation-delay: 1s;
        }
        
        .planet-orbit-3 {
          animation: orbit-reverse 4s linear infinite;
          animation-delay: 2s;
        }
        
        .planet-orbit-4 {
          animation: orbit-reverse 4s linear infinite;
          animation-delay: 3s;
        }
      `}</style>

            <button
                onClick={onClick}
                className={`relative px-8 py-3 bg-gradient-to-r ${variants[variant]} text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group ${className}`}
            >
                <span className="relative z-10">{children}</span>

                {/* Orbit Container */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {/* Planet 1 - Blue-Cyan */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg planet-orbit-1"></span>

                    {/* Planet 2 - Orange-Red */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg planet-orbit-2"></span>

                    {/* Planet 3 - Green-Emerald */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg planet-orbit-3"></span>

                    {/* Planet 4 - Yellow-Amber */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg planet-orbit-4"></span>
                </div>
            </button>
        </>
    );
}