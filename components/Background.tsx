import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial Gradient Beam - Follows a subtle animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] left-[20%] w-[60vw] h-[60vw] bg-orange-500/10 rounded-full blur-[120px]" 
      />

      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[100px]" 
      />

      {/* Floating Particles */}
      <Particles />
      
      {/* Overlay Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10" />
    </div>
  );
};

const Particles: React.FC = () => {
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white/10 rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Background;