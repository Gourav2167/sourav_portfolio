import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowLeft, Trophy, Users, Camera } from 'lucide-react';

const Gallery = () => {
    // These would be replaced with actual image paths provided by the user later
    const photos = [
        { id: 1, title: "The Gold Medal", description: "Official gold medal for academic excellence at Alliance University.", src: "/gallery/sourav_gold.jpeg", size: "lg" },
        { id: 2, title: "Convocation", description: "Sourav Singh receiving the honors for Finance Batch 2024.", src: "/gallery/sourav_with_gold.jpeg", size: "sm" }
    ];

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden bg-[var(--bg-primary)]">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

            <div className="max-w-[1300px] mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div>
                        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-secondary transition-colors mb-8 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Back to Portfolio</span>
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                            The <span className="brand-text">Gold Standard.</span>
                        </h1>
                        <p className="text-slate-400 text-lg font-medium max-w-xl">
                            A visual documentation of consistent academic excellence and the prestigious Alliance University achievement.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    {photos.map((photo, idx) => {
                        return (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className={`premium-card overflow-hidden group relative min-h-[500px] ${photo.size === 'lg' ? 'lg:col-span-7' : 'lg:col-span-5'}`}
                            >
                                <div className="absolute inset-0 bg-slate-900">
                                    <img
                                        src={photo.src}
                                        alt={photo.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-80 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-10 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="flex items-center gap-3 text-brand-secondary text-[10px] font-black uppercase tracking-widest mb-3">
                                            <Trophy size={14} />
                                            Authentic Excellence
                                        </div>
                                        <h3 className="text-3xl font-black text-white tracking-tight mb-2">
                                            {photo.title}
                                        </h3>
                                        <p className="text-slate-300 text-sm font-medium max-w-sm">
                                            {photo.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Achievement Footer */}
                <div className="mt-32 p-16 premium-card border-brand-primary/20 bg-brand-primary/5 text-center">
                    <div className="max-w-2xl mx-auto">
                        <Award size={48} className="text-brand-primary mx-auto mb-8" />
                        <h2 className="text-4xl font-black text-white tracking-tight mb-6 uppercase">
                            Gold Medalist - MBA 2024
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10">
                            Recognized for highest academic standing across the MBA program at Alliance University,
                            demonstrating consistent dedication to excellence in Finance and Business Strategy.
                        </p>
                        <div className="inline-flex items-center gap-6 px-10 py-5 bg-brand-primary rounded-full text-white font-black uppercase tracking-widest text-[10px]">
                            9.0 CGPA Distinction
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
