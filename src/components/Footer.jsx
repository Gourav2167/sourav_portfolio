import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="pt-24 pb-32 px-6 border-t border-white/5 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[400px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none translate-y-1/2" />

            <div className="max-w-[1300px] mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-end">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.9]">
                            FORGING <br />
                            FUTURE.
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
                        <div className="flex justify-end gap-10 text-white/30">
                            {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                                <a key={social} href="#" className="hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.3em]">{social}</a>
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
        <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 group-hover:text-white transition-colors">
            {label}
        </div>
        <div className="flex items-center gap-4 text-white font-black text-xl transition-colors">
            <div className="p-3 bg-white/[0.03] rounded-xl border border-white/5 group-hover:border-white/20 transition-all duration-500">
                {icon}
            </div>
            {value}
        </div>
    </div>
);

export default Footer;
