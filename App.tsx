import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-[#050505] text-white selection:bg-orange-500/30">
      <Background />
      <ScrollToTop />

      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 transition-all duration-300 bg-gradient-to-b from-[#050505] to-transparent">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tighter flex items-center gap-2 group">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse group-hover:scale-125 transition-transform" />
            SCOUT<span className="text-neutral-600">.MECH</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href="/Scout_Heid_Resume_2026.pdf"
              download="Scout_Heid_Resume_2026.pdf"
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="agent_4501kf5dyp37fweskwmap11pjmsf"></elevenlabs-convai>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Intro animation simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-neutral-950 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-orange-500 font-mono text-sm tracking-widest animate-pulse">INITIALIZING...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;