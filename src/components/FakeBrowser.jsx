import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, 
    RotateCw, 
    Lock, 
    ExternalLink, 
    ChevronLeft, 
    ChevronRight, 
    Loader2 
} from 'lucide-react';

const FakeBrowser = ({ isOpen, onClose, url }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [reloadKey, setReloadKey] = useState(0);
    const iframeRef = useRef(null);

    // Escape key listener to close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleReload = () => {
        setIsLoading(true);
        setReloadKey(prev => prev + 1);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const displayUrl = url.replace('https://', '');

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-0 sm:p-4 md:p-8 pointer-events-auto">
                {/* Backdrop Blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/85 backdrop-blur-2xl"
                />

                {/* Simulated Browser Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                    }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    className={`relative bg-[#08080a] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10 transition-all duration-300 ease-out
                        ${isFullscreen 
                            ? 'w-full h-full rounded-none border-none' 
                            : 'w-full h-full max-h-[100dvh] rounded-none sm:rounded-2xl sm:w-[95%] sm:h-[90%] sm:max-h-[90vh] md:w-[90%] md:h-[85%] lg:w-[85%] lg:h-[80%] max-w-7xl'
                        }`}
                >
                    {/* Header Bar */}
                    <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3.5 bg-[#0e0e11] border-b border-white/5 select-none gap-2 sm:gap-4 shrink-0">
                        
                        {/* macOS style Window Controls */}
                        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                            <button 
                                onClick={onClose} 
                                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] hover:bg-[#e04f46] transition-colors relative group"
                                title="Close"
                            >
                                <span className="absolute inset-0 flex items-center justify-center text-[7px] font-black text-black/60 opacity-0 group-hover:opacity-100 transition-opacity">×</span>
                            </button>
                            <button 
                                onClick={onClose}
                                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] hover:bg-[#e0a824] transition-colors relative group"
                                title="Minimize"
                            >
                                <span className="absolute inset-0 flex items-center justify-center text-[7px] font-black text-black/60 opacity-0 group-hover:opacity-100 transition-opacity">-</span>
                            </button>
                            <button 
                                onClick={toggleFullscreen}
                                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] hover:bg-[#1fa330] transition-colors relative group"
                                title={isFullscreen ? "Restore" : "Maximize"}
                            >
                                <span className="absolute inset-0 flex items-center justify-center text-[6px] font-black text-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {isFullscreen ? '⤓' : '⤢'}
                                </span>
                            </button>
                        </div>

                        {/* Navigation & Address Bar */}
                        <div className="flex items-center justify-center flex-1 min-w-0">
                            {/* Visual Back/Forward buttons */}
                            <div className="hidden md:flex items-center gap-1.5 text-slate-600 mr-3 shrink-0">
                                <ChevronLeft size={14} className="cursor-not-allowed opacity-45" />
                                <ChevronRight size={14} className="cursor-not-allowed opacity-45" />
                            </div>

                            {/* Address Bar */}
                            <div className="w-full bg-black/50 border border-white/5 hover:border-white/10 transition-colors px-3 py-1.5 rounded-lg flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono shadow-inner min-w-0">
                                <div className="flex items-center gap-1.5 truncate mr-2 min-w-0">
                                    <Lock size={10} className="text-emerald-500 shrink-0" />
                                    <span className="truncate text-slate-300 select-all">{displayUrl}</span>
                                </div>
                                <button 
                                    onClick={handleReload}
                                    className="p-0.5 text-slate-500 hover:text-white rounded hover:bg-white/5 transition-all cursor-pointer shrink-0"
                                    title="Reload Page"
                                >
                                    <RotateCw size={10} className={isLoading ? "animate-spin" : ""} />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons (External Link / Close) */}
                        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                            <a 
                                href={url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-1.5 rounded-md border border-white/5 shrink-0"
                                title="Open in New Tab"
                            >
                                <span className="hidden sm:inline font-bold">Open Live</span>
                                <ExternalLink size={11} />
                            </a>
                            <button 
                                onClick={onClose}
                                className="p-1 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors shrink-0"
                                title="Exit browser"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Browser Content Area (with optimized scrolling settings) */}
                    <div className="flex-1 w-full h-full relative bg-black overflow-y-auto overflow-x-hidden -webkit-overflow-scrolling-touch">
                        {/* Loading Spinner Screen */}
                        {isLoading && (
                            <div className="absolute inset-0 bg-[#08080a] flex flex-col items-center justify-center gap-4 z-20">
                                <div className="relative flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full border border-white/5 absolute animate-ping" />
                                    <div className="w-10 h-10 rounded-full border-t-2 border-r-2 border-white/40 border-l-transparent border-b-transparent animate-spin flex items-center justify-center">
                                        <Loader2 size={18} className="text-white animate-pulse" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">VolEdge Sandbox</div>
                                    <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-[0.1em]">establishing secure connection...</div>
                                </div>
                            </div>
                        )}

                        {/* actual website iframe with scrolling enabled and explicit styling */}
                        <iframe
                            key={reloadKey}
                            ref={iframeRef}
                            src={url}
                            className="w-full h-full border-none bg-black block"
                            style={{ minHeight: '100%', height: '100%', width: '100%' }}
                            onLoad={() => setIsLoading(false)}
                            title="VolEdge Sandbox App"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                            scrolling="yes"
                        />
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default FakeBrowser;
