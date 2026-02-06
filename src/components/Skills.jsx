import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <h2 className="section-title">
                <span>02 // CAPABILITIES</span>
                Technical <span className="brand-text">Portfolio</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <SkillGroup title="Financial Modeling" items={portfolioData.skills.financialModeling} />
                <SkillGroup title="Investment Banking" items={portfolioData.skills.investmentBanking} />
                <SkillGroup title="Portfolio Management" items={portfolioData.skills.portfolioManagement} />
                <SkillGroup title="Technical Stack" items={portfolioData.skills.technical} />
            </div>
        </div>
    );
};

const SkillGroup = ({ title, items }) => (
    <div className="space-y-8 group">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 border-b border-white/5 pb-5 flex justify-between items-center group-hover:text-brand-secondary transition-colors">
            {title}
            <div className="w-1.5 h-1.5 bg-brand-secondary/30 rounded-full" />
        </h3>
        <div className="flex flex-wrap gap-3">
            {items.map((item, idx) => (
                <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-5 py-3 bg-white/5 border border-white/5 text-slate-300 text-xs font-bold rounded-xl hover:bg-white/10 hover:border-brand-secondary/40 hover:text-white transition-all cursor-default shadow-xl"
                >
                    {item}
                </motion.span>
            ))}
        </div>
    </div>
);

export default Skills;
