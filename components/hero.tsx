"use client"

import { useState, useEffect } from 'react';
import { user } from "@/lib/data"
import { Stars } from './starts';
import { Planets } from './planets';
import { BinaryRain } from './binaryRain';
import { OrbitButton } from './maz/orbit-button';
import { AnimatePresence, motion } from "framer-motion"

export function Hero() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes rise {
          from { transform: translateY(0); opacity: 0.3; }
          to { transform: translateY(-100vh); opacity: 0; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }
        
        @keyframes orbit-reverse {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(50px) rotate(360deg); }
        }
        
        .animate-rise { animation: rise linear forwards; }
        .animate-twinkle { animation: twinkle ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        
        .planet-orbit-1 { animation: orbit 4s linear infinite; }
        .planet-orbit-2 { animation: orbit 4s linear infinite; animation-delay: 1s; }
        .planet-orbit-3 { animation: orbit-reverse 4s linear infinite; animation-delay: 2s; }
        .planet-orbit-4 { animation: orbit-reverse 4s linear infinite; animation-delay: 3s; }
      `}</style>

      <Stars />
      <Planets />
      <BinaryRain />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`flex items-center ${expanded ? 'gap-12' : 'flex-col text-center gap-0'}`}>
          
          {/* Avatar dengan animasi turun ke kiri */}
          <motion.div
            animate={expanded ? {
              x: 0,
              y: 0,
              scale: 1,
            } : {
              x: 0,
              y: 0,
              scale: 0.67,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              mass: 1.2,
              delay: expanded ? 0 : 0
            }}
            className="flex-shrink-0"
          >
            <motion.img
              src={user.avatar}
              className="rounded-full shadow-2xl border-4 border-blue-500/30"
              style={{ width: '192px', height: '192px' }}
              alt="Avatar"
              whileHover={{ 
                scale: 1.05, 
                rotate: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            />
          </motion.div>

          {/* Content Section */}
          <div className={`${expanded ? 'text-left flex-1' : 'text-center mt-8'}`}>
            {/* Nama dan Role - Selalu terlihat */}
            <motion.h2 
              className="font-bold"
              animate={{
                fontSize: expanded ? '3rem' : '2.25rem',
                marginBottom: expanded ? '0.5rem' : '1rem'
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {user.name}
            </motion.h2>
            
            <motion.p 
              className="text-blue-400 font-semibold"
              animate={{
                fontSize: expanded ? '1.5rem' : '1.25rem',
                marginBottom: expanded ? '1rem' : '0'
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {user.role}
            </motion.p>

            {/* Description & Details - Muncul dari dalam */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    y: -30,
                    filter: "blur(10px)"
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.3
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8,
                    y: -20,
                    filter: "blur(10px)",
                    transition: { duration: 0.4 }
                  }}
                  className="mt-6"
                >
                  {/* Description */}
                  <motion.p 
                    className="text-gray-300 text-lg mb-4 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.5, duration: 0.6 }
                    }}
                  >
                    {user.description}
                  </motion.p>
                  
                  {/* Company & Address */}
                  <motion.div 
                    className="space-y-2 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      transition: { delay: 0.6, duration: 0.5 }
                    }}
                  >
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1,
                        transition: { delay: 0.7, duration: 0.5 }
                      }}
                    >
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-gray-400">{user.company}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1,
                        transition: { delay: 0.8, duration: 0.5 }
                      }}
                    >
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-400">{user.address}</span>
                    </motion.div>
                  </motion.div>

                  {/* Button */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      transition: { delay: 0.9, duration: 0.5 }
                    }}
                  >
                    <OrbitButton>
                      View Projects
                    </OrbitButton>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}