"use client"

import { useState, useEffect } from 'react';

export function BinaryRain() {
  const [binaries, setBinaries] = useState<Array<{
    id: number;
    left: number;
    value: string;
    duration: number;
  }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaries(prev => {
        const newBinaries = [...prev];
        if (Math.random() > 0.7) {
          newBinaries.push({
            id: Date.now() + Math.random(),
            left: Math.random() * 100,
            value: Math.random() > 0.5 ? '1' : '0',
            duration: 3 + Math.random() * 2
          });
        }
        return newBinaries.filter(b => Date.now() - b.id < 5000).slice(-20);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {binaries.map(binary => (
        <div
          key={binary.id}
          className="absolute text-white opacity-30 font-mono text-xl animate-rise"
          style={{
            left: `${binary.left}%`,
            bottom: '-20px',
            animationDuration: `${binary.duration}s`
          }}
        >
          {binary.value}
        </div>
      ))}
    </div>
  );
}
