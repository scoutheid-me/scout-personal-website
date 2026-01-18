import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Experience } from './components/Experience';
import { CTA } from './components/CTA';

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
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen relative bg-[#050505] text-white selection:bg-orange-500/30"
        >
            <Background />
            
            <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 transition-all duration-300 bg-gradient-to-b from-[#050505] to-transparent">
                <nav className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                        SCOUT<span className="text-neutral-600">.MECH</span>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
                        <a href="#experience" className="hover:text-white transition-colors">Work</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                        <a 
                            href="/resume.pdf" 
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all"
                        >
                            Resume
                        </a>
                    </div>
                </nav>
            </header>

            <main className="relative z-10">
                <Hero />
                <ValueProposition />
                <Experience />
                <CTA />
            </main>

            {/* ElevenLabs Conversational AI Widget */}
            <elevenlabs-convai agent-id="agent_4501kf5dyp37fweskwmap11pjmsf"></elevenlabs-convai>

        </motion.div>
    </AnimatePresence>
  );
};

export default App;