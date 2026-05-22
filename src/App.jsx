import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import FakeBrowser from './components/FakeBrowser';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll for internal links on Home page
    const handleScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="portfolio-app min-h-screen bg-[var(--bg-primary)]">
        <div className="background-glow" />
        <Navbar onOpenVolEdge={() => setIsBrowserOpen(true)} />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
        <FakeBrowser 
          isOpen={isBrowserOpen} 
          onClose={() => setIsBrowserOpen(false)} 
          url="https://stock-web-gold-five.vercel.app/" 
        />
      </div>
    </Router>
  );
}

export default App;
