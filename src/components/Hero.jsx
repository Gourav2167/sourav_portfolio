import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
    const navigate = useNavigate();
    const { personalInfo, highlights } = portfolioData;

    // Filter to only show the Gold Medal highlights as requested
    const goldMedalHighlight = highlights.find(h => h.title.includes("Gold Medalist"));

    return (
        <section className="min-h-screen pt-40 pb-20 overflow-hidden relative">
            <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-16 items-start">

                {/* Left Column: Identity & Achievement */}
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mb-12">
                            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4">
                                <span className="text-white">SOURAV</span><br />
                                <span className="text-slate-500">SINGH.</span>
                            </h1>
                            <div className="h-2 w-40 bg-brand-primary rounded-full shadow-2xl shadow-brand-primary/20" />
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tight text-white/50">
                            Growth Strategy, Capital Markets, <span className="text-white">Valuations and M&A</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-16 max-w-xl leading-relaxed font-medium">
                            {personalInfo.description}
                        </p>

                        {/* Standalone Gold Medal Section */}
                        {goldMedalHighlight && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => navigate('/gallery')}
                                className="premium-card p-10 group cursor-pointer border-brand-primary/30 bg-brand-primary/5 max-w-xl hover:border-brand-primary/60 transition-all duration-700"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-8">
                                        <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                            <Trophy size={40} className="text-brand-primary" />
                                        </div>
                                        <div>
                                            <div className="text-brand-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-2">
                                                Elite Achievement
                                            </div>
                                            <div className="text-3xl font-black text-white tracking-tight group-hover:brand-text transition-colors">
                                                {goldMedalHighlight.title}
                                            </div>
                                            <div className="text-slate-400 font-bold">
                                                {goldMedalHighlight.subtitle}
                                            </div>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-brand-primary group-hover:translate-x-2 transition-transform duration-500" size={32} />
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Right Column: Profile Picture Layout */}
                <div className="lg:col-span-4 lg:mt-20 flex justify-center items-start">
                    <ProfileBlob personalInfo={personalInfo} />
                </div>
            </div>
        </section>
    );
};

const ProfileBlob = ({ personalInfo }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        // Stabilized - Removed tilt logic
    };

    const handleMouseLeave = () => {
        // Stabilized
    };

    // Dynamic Flame-like Shapes (Tapered bottom, energetic top)
    const blobPaths = [
        "M42.3,-71.4C53.7,-64.5,61.4,-51.6,68.4,-38.4C75.4,-25.2,81.6,-11.7,80.1,1.5C78.7,14.6,69.6,27.3,59.3,38.2C49,49.1,37.5,58.3,24.1,64.3C10.7,70.3,-4.5,73.1,-19,70.1C-33.5,67.1,-47.2,58.3,-58,46.5C-68.8,34.7,-76.6,19.9,-78.9,3.9C-81.2,-12.1,-78.1,-29.3,-68.8,-42.6C-59.5,-55.9,-44.1,-65.4,-29.3,-71.1C-14.5,-76.8,0.3,-78.7,15.6,-77.9C30.9,-77.1,30.9,-78.2,42.3,-71.4Z",
        "M35.6,-61.5C46.8,-55.4,56.8,-46.3,64.2,-34.8C71.6,-23.3,76.4,-9.4,76.2,4.6C76,18.6,71.1,32.7,62.4,44.5C53.7,56.3,41.2,65.8,26.5,71.1C11.8,76.4,-5.2,77.5,-21.5,74.1C-37.8,70.7,-53.4,62.8,-63,50.4C-72.6,38,-76.2,21.1,-77,4.3C-77.8,-12.5,-75.8,-29.3,-67.2,-42.5C-58.6,-55.7,-43.4,-65.3,-28.9,-70.5C-14.4,-75.7,-0.7,-76.5,10.6,-73.4C21.9,-70.3,24.4,-67.6,35.6,-61.5Z",
        "M45.7,-73.2C58.9,-66.8,69.5,-54.5,74.2,-40.7C78.9,-27,77.8,-11.8,74.1,2.1C70.4,16,64.1,28.6,55.1,39.3C46.1,50.1,35.5,59.1,22.7,65.4C9.9,71.7,-5.1,75.3,-19.6,74.3C-34.1,73.3,-48.1,67.7,-59.4,58.1C-70.7,48.5,-79.3,34.9,-83.4,20.4C-87.5,5.9,-87.1,-9.5,-81.4,-24.1C-75.7,-38.7,-64.7,-52.5,-51.1,-59.8C-37.5,-67.1,-21.3,-67.9,-5.8,-69.1C9.7,-70.3,21.5,-79.8,32.5,-79.6C43.5,-79.4,32.5,-79.6,45.7,-73.2Z"
    ];

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[500px] aspect-square group flex items-center justify-center p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {/* Layered Glows (Deep Background) */}
            <div className="absolute inset-0 bg-brand-primary/20 blur-[120px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-1000 group-hover:scale-110" />
            
            {/* SVG Morphing Background Halo */}
            <div className="absolute inset-0 transform-gpu translate-z-[-1px]">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] overflow-visible">
                    <defs>
                        <linearGradient id="blobHaloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.2" />
                        </linearGradient>
                        

                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Outer Deep Glow (Ultra-Smooth Liquid Morphing) */}
                    <motion.path
                        animate={{ 
                            d: blobPaths,
                            rotate: [0, 90, 180, 270, 360]
                        }}
                        transition={{
                            d: {
                                duration: 20, // Very slow, breathing tempo
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            },
                            rotate: {
                                duration: 60, // Extremely slow rotation for liquid feel
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                        fill="url(#blobHaloGradient)"
                        filter="url(#glow)"
                        transform="translate(100 100)"
                        className="opacity-40 group-hover:opacity-80 transition-opacity duration-1000"
                    />

                    {/* Secondary Inner Flame (for depth and vibrancy) */}
                    <motion.path
                        animate={{ 
                            d: blobPaths,
                            rotate: [0, -90, -180, -270, -360]
                        }}
                        transition={{
                            d: {
                                duration: 15, // Slightly offset timing
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: 1
                            },
                            rotate: {
                                duration: 45, // Slow counter-rotation
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                        fill="none"
                        stroke="#2dd4bf"
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                        transform="translate(100 100) scale(0.85)"
                        className="group-hover:stroke-white transition-colors duration-700 blur-[1px]"
                    />

                    {/* (Image moved to foreground for standalone display) */}
                </svg>
            </div>

            {/* Main Subject Image (Foreground Standalone) */}
            <div className="relative w-full h-full z-10 flex items-center justify-center">
                <div 
                    className="w-[90%] h-[90%] overflow-hidden transition-all duration-1000 scale-105 group-hover:scale-100 shadow-2xl"
                    style={{ 
                        borderRadius: "60% 40% 70% 30% / 40% 50% 60% 70%", // Organic Shape
                        border: "1px solid rgba(255,255,255,0.05)"
                    }}
                >
                    <img
                        src={personalInfo.profilePhoto}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
            </div>

            {/* Floating Detail Reveal (Glassmorphic) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 -right-6 p-6 bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-700 shadow-2xl overflow-hidden min-w-[200px] z-20" 
                style={{ transform: "translateZ(100px)" }}
            >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 blur-2xl rounded-full -mr-16 -mt-16" />
                    
                    <div className="relative">
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-1">
                            Current Role
                        </div>
                        <div className="text-white font-black text-lg tracking-tight mb-1">
                            {personalInfo.name}
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-slate-200 text-xs font-bold flex items-center gap-2">
                                <span className="w-1 h-1 bg-brand-primary rounded-full" />
                                Advisor @ FactSet
                            </div>
                            <div className="text-slate-400 text-[10px] font-medium pl-3">
                                High-performing Finance Prof.
                            </div>
                        </div>
                    </div>
                </motion.div>
        </motion.div>
    );
};

export default Hero;
