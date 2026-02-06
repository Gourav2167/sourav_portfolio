import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
                <div className="lg:col-span-4 lg:mt-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                        {/* Profile Frame */}
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 p-4 bg-slate-900/40 backdrop-blur-3xl shadow-2xl">
                            <div className="h-full w-full rounded-[2.5rem] overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000">
                                <img
                                    src={personalInfo.profilePhoto}
                                    alt={personalInfo.name}
                                    className="h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                />
                            </div>

                            {/* Signature Detail */}
                            <div className="absolute bottom-10 left-10 right-10 p-6 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                                <div className="text-xs font-black uppercase tracking-widest text-brand-secondary mb-1">
                                    Finance Professional
                                </div>
                                <div className="text-white font-bold text-sm">
                                    {personalInfo.name}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
