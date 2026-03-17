import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CartoonFlame from './CartoonFlame';

const Hero = () => {
    const navigate = useNavigate();
    const { personalInfo, highlights } = portfolioData;

    // Gold Medal highlight
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
                            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4">
                                <span className="text-white">SOURAV</span><br />
                                <span className="text-slate-500">SINGH.</span>
                            </h1>
                            <div className="h-1.5 sm:h-2 w-24 sm:w-40 bg-brand-primary rounded-full shadow-2xl shadow-brand-primary/20" />
                        </div>

                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tight text-white/50">
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
                <div className="lg:col-span-4 mt-8 sm:mt-12 lg:mt-20 flex justify-center items-start">
                    <ProfileBlob personalInfo={personalInfo} />
                </div>
            </div>
        </section>
    );
};

const ProfileBlob = ({ personalInfo }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ 
                duration: 1.2, 
                scale: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } 
            }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[500px] aspect-square flex items-center justify-center perspective-1000 group cursor-pointer"
        >
            {/* 1. Underlying Soft Aura */}
            <div className="absolute inset-4 bg-blue-600/10 blur-[130px] rounded-full" />
            
            {/* 2. Stylized Cartoon Flame */}
            <div className="absolute inset-0 z-0">
                <CartoonFlame />
            </div>

            {/* 3. The Portrait - Clean & Final */}
            <div 
                style={{ 
                    marginTop: "24%" // Lowered to nest perfectly within the cyan core's 'pocket'
                }}
                className="relative z-10 w-[85%] h-[85%] transform-gpu"
            >
                <div 
                    className="w-full h-full relative overflow-hidden"
                    style={{
                        borderRadius: "45% 55% 65% 35% / 55% 45% 55% 45%" // Tailored silhouette to match flame interior
                    }}
                >
                    <motion.img
                        src={personalInfo.profilePhoto}
                        alt={personalInfo.name}
                        initial={{ filter: "grayscale(100%) brightness(0.9)", scale: 1.25 }}
                        whileHover={{ 
                            filter: "grayscale(0%) brightness(1.1)",
                            scale: 1.3
                        }}
                        transition={{ 
                            duration: 0.8, 
                            ease: [0.23, 1, 0.32, 1],
                            filter: { duration: 0.5 }
                        }}
                        className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] will-change-[transform,filter]"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
