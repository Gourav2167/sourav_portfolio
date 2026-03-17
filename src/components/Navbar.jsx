import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Phone, Mail } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // Already on home, just scroll
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // On a different page, navigate to home with hash
            navigate(`/${targetId}`);
        }
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const handleSaveContact = () => {
        const { personalInfo } = portfolioData;
        const nameParts = personalInfo.name.split(' ');
        const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
        const firstName = nameParts[0];

        const vcard = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `N;CHARSET=UTF-8:${lastName};${firstName};;;`,
            `FN;CHARSET=UTF-8:${personalInfo.name}`,
            `TEL;TYPE=CELL:${personalInfo.phone}`,
            `EMAIL;TYPE=INTERNET,HOME:${personalInfo.email}`,
            `ORG;CHARSET=UTF-8:FactSet`,
            `TITLE;CHARSET=UTF-8:Advisor`,
            'URL:https://souravsingh.com',
            'REV:' + new Date().toISOString(),
            'END:VCARD'
        ].join('\r\n');
        
        const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${personalInfo.name.replace(/\s+/g, '_')}.vcf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    // Magnetic Button Logic
    const magX = useMotionValue(0);
    const magY = useMotionValue(0);
    const springX = useSpring(magX, { stiffness: 150, damping: 15 });
    const springY = useSpring(magY, { stiffness: 150, damping: 15 });

    const handleMagneticMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        magX.set(x * 0.3);
        magY.set(y * 0.3);
    };

    const handleMagneticLeave = () => {
        magX.set(0);
        magY.set(0);
    };

    return (
        <div className="fixed top-8 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none">
            <nav className={`transition-all duration-700 glass-pill flex items-center gap-10 pointer-events-auto ${scrolled ? 'scale-95 bg-slate-950/80 shadow-2xl py-3' : 'scale-100 bg-slate-900/40 py-4'
                }`}>
                <div
                    onClick={handleLogoClick}
                    className="flex items-center gap-4 cursor-pointer group"
                >
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <img
                            src="/logo-s.png"
                            alt="Logo"
                            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        />
                    </div>
                    <div className="text-xl font-black tracking-tighter text-white flex items-center gap-1.5">
                        SOURAV <span className="text-brand-secondary">SINGH</span>
                    </div>
                </div>

                <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase">
                    {['experience', 'education', 'skills', 'projects'].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={(e) => handleNavClick(e, `#${item}`)}
                            className="text-slate-400 hover:text-white transition-colors relative group py-2"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4 pointer-events-auto">
                    {/* Mobile Only Phone Icon */}
                    <button
                        onClick={handleSaveContact}
                        className="md:hidden p-3 bg-white/10 hover:bg-brand-primary/20 text-white rounded-full transition-colors active:scale-90"
                        title="Save Contact"
                    >
                        <Phone size={20} />
                    </button>

                    <motion.a
                        onMouseMove={handleMagneticMove}
                        onMouseLeave={handleMagneticLeave}
                        style={{ x: springX, y: springY }}
                        href={`mailto:${portfolioData.personalInfo.email}?subject=${encodeURIComponent("Connecting with Sourav Singh")}&body=${encodeURIComponent("Hi Sourav nice to connect with you\n\n[Your Message]")}`}
                        className="hidden sm:flex items-center gap-2 bg-white text-black text-[10px] font-black px-6 py-3 rounded-full hover:bg-brand-secondary hover:text-white transition-all shadow-xl active:scale-95 uppercase tracking-widest whitespace-nowrap"
                    >
                        <Mail size={12} className="mb-0.5" />
                        Let's Talk
                    </motion.a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
