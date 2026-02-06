import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Database, Download } from 'lucide-react';

const Projects = () => {
    return (
        <div className="relative max-w-[1300px] mx-auto">
            <h2 className="section-title">
                <span>03 // EXECUTION</span>
                Strategic <span className="brand-text">Ventures</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                {portfolioData.projects.map((project, idx) => {
                    const isLarge = idx % 3 === 0;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`premium-card p-10 flex flex-col justify-between group h-full relative overflow-hidden ${isLarge ? 'md:col-span-2' : 'md:col-span-1'
                                }`}
                        >
                            {/* Download Button Overlay */}
                            {project.downloadPath && (
                                <a
                                    href={project.downloadPath}
                                    download
                                    className="absolute top-8 right-8 z-10 p-3 bg-white/5 hover:bg-brand-primary/20 rounded-full border border-white/10 hover:border-brand-primary/50 transition-all duration-300 group/download"
                                    title="Download Report"
                                >
                                    <Download size={18} className="text-slate-400 group-hover/download:text-brand-primary transition-colors" />
                                </a>
                            )}

                            <div className="relative">
                                <div className="flex flex-wrap gap-2 mb-8 pr-12">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-sm border border-brand-secondary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className={`font-black mb-4 tracking-tight text-white group-hover:brand-text transition-all duration-500 ${isLarge ? 'text-5xl' : 'text-3xl'
                                    }`}>
                                    {project.title}
                                </h3>
                                <p className="text-brand-accent/60 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                                    {project.subtitle}
                                </p>

                                <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium max-w-md">
                                    {project.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5 mt-auto">
                                {project.metrics.map((metric, i) => (
                                    <div key={i} className="flex flex-col">
                                        <div className="text-white font-black text-2xl tracking-tighter">
                                            {metric.value}
                                        </div>
                                        <div className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
