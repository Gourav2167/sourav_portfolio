import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const { personalInfo, highlights } = portfolioData;

    return (
        <section id="home" className="min-h-screen flex items-center pt-32 px-6 overflow-hidden relative bg-[var(--bg-primary)]">
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-16 items-center w-full relative z-10">
                {/* Text Area */}
                <div className="lg:col-span-7">
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

                        <h2 className="text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tight text-white/50 lowercase">
                            Growth Strategy, Capital Markets, <span className="text-white">Valuations and M&A</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
                            {personalInfo.description}
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <a href="#projects" className="px-10 py-5 bg-brand-primary text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-brand-secondary transition-all shadow-2xl hover:shadow-brand-secondary/40 active:scale-95">
                                Explore Projects
                            </a>
                            <a href={personalInfo.cvPath} download className="px-10 py-5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-white/5 transition-all flex items-center gap-3">
                                Download CV <Download size={14} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Container */}
                <div className="lg:col-span-5 grid gap-6">
                    {highlights.map((item, idx) => {
                        const isGoldMedalist = item.title.includes("Gold Medalist");
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 + 0.4 }}
                                onClick={() => isGoldMedalist && navigate('/gallery')}
                                className={`premium-card p-8 group transition-all duration-500 ${isGoldMedalist ? 'cursor-pointer hover:border-brand-primary/50 hover:bg-brand-primary/5' : 'hover:scale-[1.02]'
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="text-brand-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                                            Focus Area 0{idx + 1}
                                        </div>
                                        <div className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:brand-text transition-colors">
                                            {item.title}
                                        </div>
                                        <div className="text-slate-400 text-sm font-medium">
                                            {item.subtitle}
                                        </div>
                                    </div>
                                    <ArrowRight className={`transition-colors duration-500 ${isGoldMedalist ? 'text-brand-primary group-hover:brand-text' : 'text-white/10 group-hover:text-brand-secondary'}`} size={24} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
