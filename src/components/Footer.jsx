import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="py-24 px-6 border-t border-white/5 bg-slate-950 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2" />

            <div className="max-w-[1300px] mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-end">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight">
                            Let's Build <br />
                            <span className="brand-text">Something Grand.</span>
                        </h2>
                        <div className="flex flex-wrap gap-8">
                            <ContactItem icon={<Mail size={20} />} label="Email" value={portfolioData.personalInfo.email} />
                            <ContactItem icon={<Phone size={20} />} label="Connect" value={portfolioData.personalInfo.phone} />
                            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                <ContactItem icon={<Linkedin size={20} />} label="Network" value="LinkedIn Profile" />
                            </a>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
                            Equity Research Analyst
                        </div>
                        <div className="text-slate-500 text-sm font-medium mb-8">
                            © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                        </div>
                        <div className="flex justify-end gap-6 text-white/40">
                            {['Instagram', 'Twitter', 'Github'].map(social => (
                                <a key={social} href="#" className="hover:text-brand-secondary transition-colors text-[10px] font-bold uppercase tracking-widest">{social}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const ContactItem = ({ icon, label, value }) => (
    <div className="group cursor-pointer">
        <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3 group-hover:text-brand-secondary transition-colors">
            {label}
        </div>
        <div className="flex items-center gap-3 text-white font-bold text-lg group-hover:brand-text transition-colors">
            <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-brand-secondary/30 transition-colors">
                {icon}
            </div>
            {value}
        </div>
    </div>
);

export default Footer;
