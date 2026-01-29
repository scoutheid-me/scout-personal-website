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
                    {/* Primary Personal Photo (Unicorn) */}
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 relative group">
                        <img
                            src="/about_unicorn.jpg"
                            alt="Scout Heid"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-neutral-400">
                            <MapPin size={20} className="text-orange-500" />
                            <span>San Jose, California</span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-400">
                            <Mail size={20} className="text-orange-500" />
                            <a href="mailto:scoutheid95@gmail.com" className="hover:text-white transition-colors">scoutheid95@gmail.com</a>
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
                                Beyond the lab, I am deeply immersed in the intersection of movement, strategy, and generative art. You’ll often find me on the dance floor—whether it’s the Stanford Viennese Ball or urban dance sessions in Palo Alto—exploring the technicality of Waltz and Swing.
                            </p>
                            <p>
                                When I’m not dancing, I’m navigating complex campaigns in Dungeons & Dragons or pushing the boundaries of AI artistry. I leverage tools like Midjourney for visual storytelling and explore the frontiers of sound through AI-composed music.
                            </p>
                            <div className="pt-2">
                                <a
                                    href="https://open.spotify.com/artist/5hOOHCrxQXxqx4pzzAVu04?si=vwNYOBbORxGG1G5W8Z__OQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954]/10 border border-[#1DB954]/20 rounded-full text-[#1DB954] text-sm font-bold hover:bg-[#1DB954]/20 transition-all group"
                                >
                                    <span>Listen to my AI Music on Spotify</span>
                                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8">
                        {/* Education Section - Unified under UC Berkeley */}
                        <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded-3xl space-y-8 relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                                <Award size={120} />
                            </div>

                            <div className="space-y-3">
                                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-2">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-white tracking-tight">University of California, Berkeley</h3>
                                <div className="w-24 h-1.5 bg-orange-500 rounded-full" />
                            </div>

                            <div className="grid gap-6 relative">
                                {/* Masters */}
                                <div className="space-y-1">
                                    <p className="text-xl text-white font-black tracking-wide">
                                        Master's of Engineering, Mechanical Engineering
                                    </p>
                                    <p className="text-sm font-mono text-neutral-400">Class of 2018</p>
                                </div>

                                {/* Bachelors */}
                                <div className="space-y-1 pt-4 border-t border-neutral-800/80">
                                    <p className="text-lg text-neutral-200 font-bold">Bachelors of Science, Mechanical Engineering</p>
                                </div>

                                {/* Minor */}
                                <div className="space-y-1 pt-4 border-t border-neutral-800/80">
                                    <p className="text-lg text-neutral-200 font-bold">Minor in Electrical Engineering and Computer Science (EECS)</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications Section - Distinct Sections */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3 px-1">
                                <Award size={24} className="text-orange-500" />
                                Professional Certifications
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { title: "LabVIEW Professional Certification", detail: "Expertise in complex automated test systems and hardware interfacing." },
                                    { title: "Leadership Excellence", detail: "Harvard University: Advanced management and strategic engineering lead course." }
                                ].map((cert, i) => (
                                    <div key={i} className="group/cert p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-orange-500/40 transition-all duration-500 shadow-xl hover:-translate-y-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-2 h-2 rounded-full bg-orange-500 group-hover/cert:scale-150 transition-transform" />
                                            <p className="text-white font-black text-sm uppercase tracking-tight">{cert.title}</p>
                                        </div>
                                        <p className="text-xs text-neutral-500 leading-relaxed font-medium">{cert.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
