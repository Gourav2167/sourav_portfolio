import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <div className="max-w-[1000px] mx-auto">
            <h2 className="section-title">
                <span>01 // BACKGROUND</span>
                Professional <span className="brand-text">Timeline</span>
            </h2>

            <div className="relative space-y-12">
                {/* Central Line */}
                <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-secondary/50 via-brand-primary/20 to-transparent hidden md:block" />

                {portfolioData.experience.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-12 group"
                    >
                        {/* Desktop Node */}
                        <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-slate-900 border-2 border-brand-secondary z-10 hidden md:flex items-center justify-center group-hover:scale-125 group-hover:bg-brand-secondary transition-all duration-500 shadow-lg shadow-brand-secondary/20" />

                        <div className="premium-card p-10 hover:border-brand-secondary/30">
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                                <div>
                                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:brand-text transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-3 text-brand-secondary font-bold text-sm">
                                        <Briefcase size={16} />
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">
                                        Period
                                    </div>
                                    <div className="text-white font-bold text-sm bg-white/5 px-4 py-1 rounded-full border border-white/5">
                                        {exp.date}
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-slate-400 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary/40 mt-2 shrink-0 group-hover/item:bg-brand-secondary transition-colors" />
                                        <span className="text-sm font-medium leading-relaxed group-hover/item:text-slate-200 transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
