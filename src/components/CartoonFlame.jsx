import React from 'react';
import { motion } from 'framer-motion';

const CartoonFlame = () => {
    // Sharp, pointy cartoon flame paths
    // Layer 1: Outer (Darker Blue) - Single Pointy Peak
    const outerPaths = [
        "M50 95C25 95 10 85 15 60C20 35 40 15 55 5C70 15 85 45 80 70C75 90 65 95 50 95Z",
        "M50 96C24 96 11 86 16 61C21 36 41 16 54 6C69 16 84 46 79 71C74 91 64 96 50 96Z"
    ];

    const midPaths = [
        "M50 90C30 90 18 80 22 65C26 45 42 25 55 15C65 25 78 50 75 70C72 85 62 90 50 90Z",
        "M50 91C29 91 17 81 21 66C25 46 41 26 54 16C64 26 77 51 74 71C71 86 61 91 50 91Z"
    ];

    const innerPaths = [
        "M50 85C35 85 25 78 28 68C31 53 43 38 52 30C58 38 70 55 68 70C66 80 58 85 50 85Z",
        "M50 86C34 86 24 79 27 69C30 54 42 39 51 31C57 39 69 56 67 71C65 81 57 86 50 86Z"
    ];

    const slowTransition = {
        duration: 8, // Very slow for premium feel
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
    };

    return (
        <div className="absolute inset-[-40%] z-0 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-[140%] h-[140%] drop-shadow-[0_0_40px_rgba(0,102,255,0.5)]">
                <defs>
                    {/* Heat Haze Filter (Turbulence) */}
                    <filter id="heatHaze">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="5">
                            <animate attributeName="baseFrequency" dur="10s" values="0.04;0.05;0.04" repeatCount="indefinite" />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="3" />
                    </filter>
                    
                    {/* Radial Glow Gradient */}
                    <radialGradient id="flameGlow" cx="50%" cy="80%" r="50%">
                        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <g filter="url(#heatHaze)">
                    {/* Outer Glow / Base Layer */}
                    <motion.path
                        initial={{ d: outerPaths[0] }}
                        animate={{ d: [outerPaths[0], outerPaths[1]] }}
                        transition={slowTransition}
                        fill="#002266"
                        className="opacity-60"
                    />
                    
                    {/* Mid Layer */}
                    <motion.path
                        initial={{ d: midPaths[0] }}
                        animate={{ d: [midPaths[0], midPaths[1]] }}
                        transition={{ ...slowTransition, duration: 9 }}
                        fill="#0066ff"
                        className="opacity-80"
                    />

                    {/* Inner Core */}
                    <motion.path
                        initial={{ d: innerPaths[0] }}
                        animate={{ 
                            d: [innerPaths[0], innerPaths[1]],
                            opacity: [0.85, 1, 0.85] 
                        }}
                        transition={{ ...slowTransition, duration: 7 }}
                        fill="#00ffff"
                        className="opacity-95"
                    />

                    {/* Gradient Core Polish */}
                    <ellipse cx="50" cy="80" rx="30" ry="20" fill="url(#flameGlow)" className="opacity-40 blur-xl" />
                </g>

                {/* Brightest Tip - Subtle Scale */}
                <motion.circle
                    cx="55"
                    cy="15"
                    r="2.5"
                    fill="white"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="blur-[2px]"
                />
            </svg>
        </div>
    );
};

export default CartoonFlame;
