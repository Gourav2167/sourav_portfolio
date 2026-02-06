import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <h2 className="section-title">
                <span>Academic</span>
                Education <span className="brand-text">Credentials</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {portfolioData.education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="premium-card p-10 group"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                            <div className="space-y-6 flex-grow">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-[10px] font-black uppercase tracking-widest">
                                    <GraduationCap size={14} />
                                    {edu.date}
                                </div>
                                <h3 className="text-3xl font-black text-white leading-tight tracking-tight group-hover:brand-text transition-colors">
                                    {edu.degree}
                                </h3>
                                <p className="text-slate-400 font-bold text-lg">
                                    {edu.institution}
                                </p>
                            </div>

                            <div className="text-center md:text-right bg-white/5 p-6 rounded-3xl border border-white/5 group-hover:border-brand-secondary/30 transition-all">
                                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">
                                    Performance
                                </div>
                                <div className="text-5xl font-black text-white tracking-tighter">
                                    {edu.gpa}
                                </div>
                                <div className="text-brand-secondary text-[10px] font-black uppercase tracking-widest mt-1">
                                    GPA Index
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
