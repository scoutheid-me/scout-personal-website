import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CodingProjects: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl w-full text-center space-y-8"
            >
                <div className="w-20 h-20 bg-orange-500/10 rounded-3xl flex items-center justify-center text-orange-500 mx-auto mb-8 border border-orange-500/20">
                    <Code size={40} />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    More coding projects to come!
                </h1>

                <p className="text-xl text-neutral-400 leading-relaxed">
                    I did code this website too—it's been a fun way to bridge my mechanical engineering background with modern web technologies.
                </p>

                <div className="pt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
