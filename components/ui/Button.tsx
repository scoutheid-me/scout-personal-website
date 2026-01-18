import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon, className = '', ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-sm transition-all duration-300 rounded-full group overflow-hidden";
  
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_35px_rgba(249,115,22,0.5)]",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {/* Button Shine Effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]" />
      
      <span className="relative flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        )}
      </span>
    </button>
  );
};