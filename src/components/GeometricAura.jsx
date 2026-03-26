import React from 'react';
import { motion } from 'framer-motion';

const GeometricAura = () => {
    // Unique prismatic shapes (Quadrilaterals/Triangles)
    const shapes = [
        {
            d: "M50 5 L90 30 L90 70 L50 95 L10 70 L10 30 Z", // Hexagonal Core
            color: "#ffffff",
            opacity: 0.15,
            duration: 15,
            direction: 1
        },
        {
            d: "M50 10 L80 40 L70 80 L30 80 L20 40 Z", // Inner Pentagonal Shard
            color: "#a3a3a3",
            opacity: 0.2,
            duration: 12,
            direction: -1
        },
        {
            d: "M50 0 L100 50 L50 100 L0 50 Z", // Large Diamond Overlay
            color: "#525252",
            opacity: 0.1,
            duration: 20,
            direction: 1
        }
    ];

    const pulseTransition = {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
    };

    return (
        <div className="absolute inset-[-40%] z-0 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-[140%] h-[140%] drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <defs>
                    <filter id="prismGlass" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                        <feSpecularLighting surfaceScale="5" specularConstant="0.8" specularExponent="20" lightingColor="#ffffff">
                            <fePointLight x="50" y="50" z="100" />
                        </feSpecularLighting>
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                    
                    <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#808080" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                <g filter="url(#prismGlass)">
                    {shapes.map((shape, i) => (
                        <motion.path
                            key={i}
                            d={shape.d}
                            fill="none"
                            stroke={shape.color}
                            strokeWidth="0.5"
                            className="opacity-40"
                            animate={{
                                rotate: [0, 360 * shape.direction],
                                scale: [1, 1.05, 1],
                                opacity: [shape.opacity, shape.opacity * 1.5, shape.opacity],
                                d: [
                                    shape.d,
                                    shape.d.replace(/(\d+)/g, (m) => parseInt(m) + (Math.random() > 0.5 ? 2 : -2)),
                                    shape.d
                                ]
                            }}
                            transition={{
                                rotate: { duration: shape.duration, repeat: Infinity, ease: "linear" },
                                scale: pulseTransition,
                                opacity: pulseTransition,
                                d: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                            }}
                            style={{ originX: "50px", originY: "50px" }}
                        />
                    ))}

                    {/* Prismatic Shards (Small Triangles) */}
                    {[...Array(6)].map((_, i) => (
                        <motion.polygon
                            key={`shard-${i}`}
                            points="50,45 52,50 48,50"
                            fill="#ffffff"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0, 1.5, 0],
                                x: Math.cos((i * 60) * Math.PI / 180) * 45,
                                y: Math.sin((i * 60) * Math.PI / 180) * 45,
                                rotate: i * 60
                            }}
                            transition={{
                                duration: 8,
                                delay: i * 1.2,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                            className="blur-[1px]"
                        />
                    ))}

                    {/* Glowing Core Area */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="35"
                        fill="url(#crystalGrad)"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={pulseTransition}
                        className="blur-2xl"
                    />
                </g>
            </svg>
        </div>
    );
};

export default GeometricAura;
