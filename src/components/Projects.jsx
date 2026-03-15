import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
    Download, 
    X, 
    Globe, 
    Building2, 
    TrendingUp, 
    Construction, 
    LineChart, 
    Zap,
    MoveUpRight 
} from 'lucide-react';

const iconMap = {
    Globe,
    Building2,
    TrendingUp,
    Construction,
    LineChart,
    Zap
};

const WalletSet = ({ projects, onProjectSelect }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className="relative">
            <motion.div 
                className="wallet group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="wallet-back" />
                
                {projects.map((project, cardIdx) => {
                    const IconComponent = iconMap[project.icon] || Globe;
                    const slotIndex = 3 - cardIdx; 
                    
                    const cardVariants = {
                        initial: { y: 0, rotate: 0, opacity: 1 },
                        animate: { 
                            y: 0, 
                            rotate: 0,
                            opacity: 1,
                            transition: { type: "spring", stiffness: 300, damping: 25 } 
                        },
                        hover: { 
                            y: slotIndex === 3 ? -220 : slotIndex === 2 ? -130 : -50,
                            rotate: slotIndex === 3 ? -5 : slotIndex === 2 ? 3 : 0,
                            transition: { type: "spring", stiffness: 200, damping: 20 }
                        }
                    };

                    return (
                        <motion.div 
                            key={project.title} 
                            className={`wallet-card slot-${slotIndex} cursor-pointer`}
                            variants={cardVariants}
                            initial="initial"
                            animate={isHovered ? "hover" : "animate"}
                            onClick={(e) => {
                                e.stopPropagation();
                                onProjectSelect(project);
                            }}
                        >
                            <div className="flex justify-between items-start select-none">
                                <h4 className="wallet-card-title text-inherit leading-tight">
                                    {project.title.includes(':') ? project.title.split(':')[1].trim() : project.title}
                                </h4>
                                <div className="card-chip" />
                            </div>
                        </motion.div>
                    );
                })}

                <div className="pocket">
                    {/* Metallic Clasp */}
                    <div className="wallet-clasp">
                        <div className="clasp-detail" />
                    </div>
                    
                    {/* Embossed Branding */}
                    <div className="pocket-branding select-none">
                        S.S. VENTURES
                    </div>
                </div>
                
                <div className="hover-caption">
                    Tap cards to explore details
                </div>
            </motion.div>
        </div>
    );
};

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
        <div className="relative max-w-[1400px] mx-auto px-6 pt-32 lg:pt-52 pb-20">
            <div className="grid lg:grid-cols-[auto_1fr] items-center justify-items-center lg:justify-items-start gap-20 lg:gap-32">
                <div className="shrink-0">
                    <h2 className="section-title !mb-0 text-center lg:text-left">
                        <span>03 // EXECUTION</span>
                        Strategic <br />
                        <span className="brand-text">Ventures</span>
                    </h2>
                </div>

                {/* Categorized Wallets */}
                <div className="wallet-container !p-0 !mt-0 !mb-0 flex flex-row flex-wrap justify-center gap-20 lg:gap-24 w-full lg:w-auto">
                    {[
                        { 
                            id: 'equity', 
                            name: 'EQUITY RESEARCH', 
                            projects: portfolioData.projects.filter(p => 
                                p.title.toLowerCase().includes('equity research') || 
                                p.tags.some(t => t.toLowerCase() === 'equity research')
                            )
                        },
                        { 
                            id: 'other', 
                            name: 'OTHER PROJECTS', 
                            projects: portfolioData.projects.filter(p => 
                                !p.title.toLowerCase().includes('equity research') && 
                                !p.tags.some(t => t.toLowerCase() === 'equity research')
                            )
                        }
                    ].map((category) => (
                        <div key={category.id} className="flex flex-col items-center gap-8">
                            <h3 className="text-[10px] font-black tracking-[0.4em] text-brand-secondary uppercase bg-white/5 px-6 py-2 rounded-full border border-white/10">
                                {category.name}
                            </h3>
                            <WalletSet 
                                projects={category.projects}
                                onProjectSelect={setSelectedProject}
                            />
                        </div>
                    ))}
                </div>
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
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                        >
                            <div className="bg-[var(--bg-secondary)] border border-white/10 shadow-2xl rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto relative flex flex-col">
                                
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all z-10 hover:rotate-90"
                                >
                                    <X size={24} />
                                </button>

                                <div className="p-10 md:p-16 flex-1">
                                    <div className="flex flex-wrap gap-2 mb-8 pr-12">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary bg-brand-secondary/10 px-4 py-1.5 rounded-full border border-brand-secondary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white leading-[1.1]">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-brand-accent/60 text-sm font-black uppercase tracking-[0.5em] mb-12">
                                        {selectedProject.subtitle}
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-16">
                                         <div className="md:col-span-2">
                                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6 flex items-center gap-4">
                                                  <span className="w-8 h-[1px] bg-white/10" />
                                                  Project Overview
                                              </h4>
                                              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                                                  {selectedProject.description}
                                              </p>
                                         </div>

                                         <div className="md:col-span-1">
                                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8 flex items-center gap-4">
                                                  <span className="w-8 h-[1px] bg-white/10" />
                                                  Metrics
                                              </h4>
                                              <div className="flex flex-col gap-10">
                                                {selectedProject.metrics.map((metric, i) => (
                                                    <div key={i} className="flex flex-col group/metric">
                                                        <div className="text-white font-black text-4xl tracking-tighter group-hover/metric:text-[var(--brand-secondary)] transition-colors duration-300">
                                                            {metric.value}
                                                        </div>
                                                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">
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
                                    <div className="p-10 md:px-16 md:py-10 bg-black/20 border-t border-white/5 flex justify-end">
                                        <a
                                            href={selectedProject.downloadPath}
                                            download
                                            className="premium-btn flex items-center gap-3"
                                        >
                                            Download Asset
                                            <Download size={18} />
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
