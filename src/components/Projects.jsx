import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Download, X } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
             document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);


    return (
        <div className="relative max-w-[1300px] mx-auto">
            <h2 className="section-title">
                <span>03 // EXECUTION</span>
                Strategic <span className="brand-text">Ventures</span>
            </h2>

            {/* Smaller, concise project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                {portfolioData.projects.map((project, idx) => {
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="premium-card p-8 flex flex-col justify-center group cursor-pointer"
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-2 tracking-tight text-white group-hover:brand-text transition-colors duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-brand-accent/60 text-[10px] font-black uppercase tracking-[0.4em]">
                                    {project.subtitle}
                                </p>
                                
                                <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-brand-secondary transition-colors duration-300">
                                    View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Preview Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[9999]">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                        >
                            <div className="bg-[var(--bg-secondary)] border border-white/10 shadow-2xl rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto relative flex flex-col">
                                
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"
                                >
                                    <X size={24} />
                                </button>

                                <div className="p-10 md:p-16 flex-1">
                                    <div className="flex flex-wrap gap-2 mb-8 pr-12">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-sm border border-brand-secondary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white leading-tight">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-brand-accent/60 text-xs font-black uppercase tracking-[0.4em] mb-12">
                                        {selectedProject.subtitle}
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-12">
                                         <div className="md:col-span-2">
                                              <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 border-b border-white/10 pb-2">Overview</h4>
                                              <p className="text-slate-300 text-base leading-relaxed font-medium">
                                                  {selectedProject.description}
                                              </p>
                                         </div>

                                         <div className="md:col-span-1 border-l border-white/10 pl-0 md:pl-10">
                                              <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 border-b border-white/10 pb-2">Key Metrics</h4>
                                              <div className="flex flex-col gap-8">
                                                {selectedProject.metrics.map((metric, i) => (
                                                    <div key={i} className="flex flex-col">
                                                        <div className="text-white font-black text-3xl tracking-tighter">
                                                            {metric.value}
                                                        </div>
                                                        <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                                                            {metric.label}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                         </div>
                                    </div>
                                </div>
                                
                                {/* Footer Actions */}
                                {selectedProject.downloadPath && (
                                    <div className="p-8 md:px-16 md:py-8 bg-black/20 border-t border-white/5 flex justify-end">
                                        <a
                                            href={selectedProject.downloadPath}
                                            download
                                            className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-brand-secondary hover:text-white transition-all shadow-xl active:scale-95 group"
                                        >
                                            Download Asset
                                            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
