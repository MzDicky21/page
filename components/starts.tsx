"use client";

import { useEffect, useState } from "react";

export function Stars() {
    const [stars, setStars] = useState<{
        id: number;
        top: string;
        left: string;
        opacity: number;
        delay: string;
    }[]>([]);


    useEffect(() => {
        setStars(
            Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                delay: `${Math.random()}s`,
            }))
        );
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute bg-white w-1 h-1 rounded-full animate-pulse"
                    style={{
                        top: star.top,
                        left: star.left,
                        opacity: star.opacity,
                        animationDelay: star.delay,
                    }}
                />
            ))}
        </div>
    );
}
