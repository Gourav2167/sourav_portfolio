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
                <div className="lg:col-span-4 lg:mt-4 flex justify-center items-start">
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
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Organic Shapes for Morphing
    const blobPaths = [
        "M45,-76.4C58.1,-70.7,68.4,-57.8,75.3,-43.8C82.2,-29.8,85.7,-14.9,84.3,-0.8C82.9,13.3,76.6,26.5,68.9,39.1C61.2,51.7,52.1,63.6,40,71.2C27.9,78.8,13.9,82,0.4,81.3C-13.1,80.7,-26.2,76.1,-38.6,69.1C-51,62.1,-62.7,52.7,-71.4,40.8C-80.1,28.9,-85.7,14.4,-86.3,-0.3C-86.8,-15.1,-82.3,-30.1,-74.3,-43.3C-66.3,-56.4,-54.8,-67.7,-41.5,-73.2C-28.1,-78.7,-14.1,-78.4,0.6,-79.4C15.3,-80.4,30.5,-82.7,45,-76.4Z",
        "M41.5,-69.5C53.7,-63.9,63.5,-52.1,70.8,-39.2C78.1,-26.3,82.9,-12.2,82.5,1.7C82.1,15.6,76.5,29.3,67.6,40.8C58.7,52.4,46.5,61.8,32.8,68.1C19.1,74.5,3.9,77.7,-10.9,75.8C-25.7,73.9,-40.1,66.8,-52,57C-63.9,47.2,-73.3,34.7,-78.3,20.6C-83.3,6.5,-83.9,-9.2,-79.5,-23.1C-75.1,-37,-65.7,-49.2,-54.3,-55.8C-42.9,-62.4,-29.5,-63.4,-16.9,-67.6C-4.3,-71.8,7.5,-79.2,21.5,-79.8C35.5,-80.4,51.8,-74.3,41.5,-69.5Z"
    ];

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[450px] aspect-square group flex items-center justify-center"
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
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.1" />
                        </linearGradient>
                        
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Outer Glowing Blob Shape */}
                    <motion.path
                        animate={{ d: blobPaths }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        fill="url(#blobHaloGradient)"
                        filter="url(#glow)"
                        transform="translate(100 100)"
                        className="opacity-20 group-hover:opacity-60 transition-opacity duration-1000"
                    />

                    {/* Animated Stroke/Border Blob */}
                    <motion.path
                        animate={{ d: blobPaths }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="0.8"
                        strokeDasharray="4 2"
                        transform="translate(100 100)"
                        className="opacity-30 group-hover:opacity-100 transition-opacity duration-700"
                    />
                </svg>
            </div>

            {/* Main Subject Image (Foreground) */}
            <div className="relative w-[85%] h-[85%] z-10" style={{ transform: "translateZ(60px)" }}>
                <div className="w-full h-full rounded-[4rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 shadow-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm">
                    <img
                        src={personalInfo.profilePhoto}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                    />
                    {/* Film Grain Overlay */}
                    <div className="absolute inset-0 film-grain opacity-30" />
                    
                    {/* Subtle Inner Glow on Hover */}
                    <div className="absolute inset-0 ring-inset ring-1 ring-white/10 group-hover:ring-brand-primary/30 transition-all duration-700" />
                </div>

                {/* Floating Detail Reveal */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 -right-6 p-6 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-700 shadow-2xl overflow-hidden min-w-[200px]" 
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
            </div>
        </motion.div>
    );
};

export default Hero;
