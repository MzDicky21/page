"use client"

import React, { useEffect, useState } from 'react';

export const SpaceRocketButton = ({
    children = "Launch",
    onClick,
}: {
    children?: React.ReactNode;
    onClick?: () => void;
}) => {
    const [isLaunching, setIsLaunching] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);


    const handleClick = () => {
        setIsLaunching(true);
        onClick?.();

        setTimeout(() => {
            setIsLaunching(false);
        }, 1500);
    };

    return (
        <div className="relative inline-block">
            {/* Rocket */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none
          ${isLaunching ? '-top-[200px] opacity-0' : isHovered ? '-top-12' : '-top-8 opacity-0'}`}
            >
                <div className="relative">
                    {/* Rocket Body */}
                    <div className="w-8 h-12 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full relative">
                        {/* Window */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full border-2 border-gray-400"></div>
                        {/* Fins */}
                        <div className="absolute -left-2 bottom-0 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-red-500"></div>
                        <div className="absolute -right-2 bottom-0 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-red-500"></div>
                    </div>

                    {/* Fire/Exhaust */}
                    <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 transition-opacity duration-200
            ${isLaunching ? 'opacity-100' : isHovered ? 'opacity-80' : 'opacity-60'}`}>
                        <div className="w-4 h-6 bg-gradient-to-b from-orange-500 via-yellow-400 to-transparent rounded-b-full animate-pulse"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-gradient-to-b from-yellow-200 via-orange-300 to-transparent rounded-b-full"></div>
                    </div>
                </div>
            </div>

            {/* Button */}
            <button
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                disabled={isLaunching}
                className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg overflow-hidden
          transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 
          disabled:opacity-70 disabled:cursor-not-allowed group"
            >
                {/* Animated Stars Background */}
                <div className="absolute inset-0 overflow-hidden">
                    {mounted &&
                        [...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    opacity: Math.random(),
                                    animationDelay: `${Math.random()}s`,
                                    animationDuration: `${1 + Math.random() * 2}s`,
                                }}
                            />
                        ))
                    }
                </div>

                {/* Nebula Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-blue-600/0 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Planet/Moon */}
                <div className="absolute top-1 right-2 w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-500 
          rounded-full opacity-40 group-hover:opacity-60 transition-opacity">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
                </div>

                {/* Button Text */}
                <span className="relative z-10">{children}</span>
            </button>
        </div>
    );
};