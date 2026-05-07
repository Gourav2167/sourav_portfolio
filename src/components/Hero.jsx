import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
    ArrowRight, 
    Trophy,
    Download,
    Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const { personalInfo, highlights } = portfolioData;

    // Gold Medal highlight
    const goldMedalHighlight = highlights.find(h => h.title.includes("Gold Medalist"));

    return (
        <section className="min-h-screen pt-40 pb-20 overflow-hidden relative">


            <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-16 items-start relative z-10">

                {/* Left Column: Identity & Achievement */}
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mb-12">
                            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4">
                                <span className="text-white">SOURAV</span><br />
                                <span className="text-slate-500">SINGH.</span>
                            </h1>
                            <div className="h-1.5 sm:h-2 w-24 sm:w-40 bg-brand-primary rounded-full shadow-2xl shadow-brand-primary/20" />
                        </div>

                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tight text-white/50">
                            Growth Strategy, Capital Markets, <span className="text-white">Valuations and M&A</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
                            {personalInfo.description}
                        </p>

                        <div className="flex flex-wrap gap-6 mb-16">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={`mailto:${personalInfo.email}`}
                                className="px-10 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center gap-3"
                            >
                                <Mail size={18} />
                                Get in Touch
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                href={personalInfo.cvPath}
                                download
                                className="px-10 py-5 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full transition-all flex items-center gap-3"
                            >
                                <Download size={18} />
                                Download CV
                            </motion.a>
                        </div>

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

                {/* Right Column: Standalone Profile Picture */}
                <div className="lg:col-span-4 mt-8 sm:mt-12 lg:mt-0 flex justify-center items-start">
                    <ProfileBlob personalInfo={personalInfo} />
                </div>
            </div>
        </section>
    );
};



const ProfileBlob = ({ personalInfo }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] aspect-square flex items-center justify-center pointer-events-auto"
        >
            {/* 1. Underlying Depth Aura */}
            <div className="absolute inset-2 bg-white/5 blur-[120px] rounded-full" />
            
            {/* 2. Standalone Frame (Elite Glass) */}
            <motion.div 
                whileHover={{ y: -12, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="relative z-10 w-full h-full flex items-center justify-center group"
            >
                {/* Advanced Glass Border with Gradient */}
                <div className="absolute inset-0 border border-white/10 rounded-[4rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 backdrop-blur-[3px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]" />
                
                {/* The Portrait Container */}
                <div className="relative w-[90%] h-[90%] overflow-hidden rounded-[3.5rem] bg-slate-950/60 shadow-inner">
                    <motion.img
                        src={personalInfo.profilePhoto}
                        alt={personalInfo.name}
                        initial={{ filter: "grayscale(100%) brightness(0.8) contrast(1.1)", scale: 1.15 }}
                        whileHover={{ 
                            filter: "grayscale(0%) brightness(1.1) contrast(1.1)",
                            scale: 1.2
                        }}
                        transition={{ 
                            duration: 1.2, 
                            ease: [0.23, 1, 0.32, 1]
                        }}
                        className="w-full h-full object-contain transform-gpu will-change-transform drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    />
                    
                    {/* Atmospheric Glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>

                {/* Technical Corner Brackets (Signature Look) */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-primary/40 rounded-tl-[4rem] -ml-2 -mt-2 transition-all duration-700 group-hover:scale-110 group-hover:border-brand-primary" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-primary/40 rounded-br-[4rem] -mr-2 -mb-2 transition-all duration-700 group-hover:scale-110 group-hover:border-brand-primary" />
            </motion.div>
        </motion.div>
    );
};

export default Hero;
