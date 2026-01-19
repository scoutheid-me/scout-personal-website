import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Award } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-[1fr_2fr] gap-12"
            >
                <div className="space-y-6">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 relative group">
                        {/* Placeholder for real image */}
                        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600">
                            <User size={64} />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-neutral-400">
                            <MapPin size={20} className="text-orange-500" />
                            <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-400">
                            <Mail size={20} className="text-orange-500" />
                            <a href="mailto:scout@example.com" className="hover:text-white transition-colors">scout@example.com</a>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
                        <div className="prose prose-invert text-neutral-400 leading-relaxed space-y-4">
                            <p>
                                I am a Staff Mechanical Engineer with over 8 years of experience in product design, thermal management, and rapid prototyping. I thrive in cross-functional teams where I can bridge the gap between industrial design and manufacturing.
                            </p>
                            <p>
                                My approach to engineering is rooted in first principles thinking. Whether it's designing a consumer electronic device or a complex robotic system, I focus on simplicity, reliability, and manufacturability.
                            </p>
                            <p>
                                When I'm not in CAD or the machine shop, you can find me hiking the trails of the Bay Area or experimenting with new coffee brewing methods.
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl space-y-2">
                            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                                <Award size={20} />
                            </div>
                            <h3 className="font-semibold text-white">Education</h3>
                            <p className="text-sm text-neutral-400">B.S. Mechanical Engineering</p>
                            <p className="text-xs text-neutral-500">University of California, Berkeley</p>
                        </div>
                        <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl space-y-2">
                            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                                <Award size={20} />
                            </div>
                            <h3 className="font-semibold text-white">Certifications</h3>
                            <p className="text-sm text-neutral-400">Certified SolidWorks Professional (CSWP)</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
