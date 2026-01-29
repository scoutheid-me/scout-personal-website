import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto w-full z-10 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-md">
              <span className="text-orange-400 font-medium text-sm tracking-wide uppercase">Available for Hire</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                Physical World.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed">
              I'm Scout, a Staff Mechanical Engineer. I bridge the gap between conceptual design and mass production, turning ambitious designs into scalable realities for top-tier tech companies. Oh, vibe coded this website too—because I am handy like that.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button icon onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
              View Work
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </motion.div>

          {/* Metrics/Social Proof Mini */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-neutral-800"
          >
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-neutral-500">Parts Shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">$200M+</p>
              <p className="text-sm text-neutral-500">Product Rev</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">3</p>
              <p className="text-sm text-neutral-500">Global Launches</p>
            </div>
          </motion.div>
        </div>

        {/* Abstract Visual / Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto">
            {/* Decorative rings */}
            <div className="absolute inset-0 border border-neutral-800 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-dashed border-neutral-800 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Main Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden bg-neutral-800 border-2 border-orange-500/20 shadow-2xl shadow-orange-500/10">
              <img
                src="https://picsum.photos/800/800?grayscale"
                alt="Scout - Mechanical Engineer"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/60 to-transparent" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-20 bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-neutral-300">DFM OPTIMIZED</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div >
    </section >
  );
};