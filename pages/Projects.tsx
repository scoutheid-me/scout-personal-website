import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { FolderGit2, Calendar } from 'lucide-react';

const projects = [
    {
        title: "Jenga Playing CNC Robot",
        description: "Engineered a custom CNC robotic system featuring dual-Arduino control architecture and a Python-based serial protocol. DRI for all electronics, power distribution, and high-precision sensor integration.",
        date: "2017",
        tags: ["Robotics", "Python", "Mechatronics", "Arduino", "CNC Design"]
    },
    {
        title: "Self-Stabilizing RC Plane",
        description: "Engineered a remote-controlled aircraft platform featuring an Arduino/Xbee wireless communication stack and myRIO integration. Developed a novel flywheel-based pitch correction system to dynamically prevent mid-flight stalling.",
        date: "2016",
        tags: ["Embedded Systems", "Aerodynamics", "Mechatronics", "Arduino", "Signal Processing"]
    },
    {
        title: "VelociRoACH: Biomimetic Modular Transmission",
        description: "Research Lead under Professor Ronald Fearing at the Biomimetic Millisystems Lab. Redesigned the VelociRoACH robot with an interchangeable modular transmission and pioneered a precision molding/casting process for polyurethane gears.",
        date: "2014 - 2016",
        tags: ["Biomimetics", "Mechanical Research", "Precision Manufacturing", "Product Design", "Robotics"]
    }
];

const websiteProject = {
    title: "Vision to Reality: Vibe Coding this Portfolio",
    description: "The iterative process of architecting and deploying this professional portfolio. This project represents a shift from purely physical engineering to a hybrid digital workflow, leveraging advanced AI agentic systems and modern web technologies.",
    timeline: [
        {
            stage: "Ideation & AI Studio",
            detail: "Translated design concepts into the first functional iteration, establishing the aesthetic identity and core structure."
        },
        {
            stage: "Refinement & Antigravity",
            detail: "Deep implementation via advanced AI agentic workflows. Engineered complex logic, Git connectivity, and interactive components."
        },
        {
            stage: "Intelligence & ElevenLabs",
            detail: "Integrated custom Conversational AI agent for voice-enabled technical interaction."
        }
    ],
    tags: ["React/TypeScript", "Vibe Coding", "Agentic Workflows", "Git", "ElevenLabs"]
};

export const Projects: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <header className="space-y-4 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Engineering Portfolio
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl">
                        A chronological showcase of technical challenges, from biomimetic research to modern digital architecture.
                    </p>
                </header>

                {/* Main Grid for Previous Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <SpotlightCard key={index} className="p-6 space-y-4 h-full">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                                    <FolderGit2 size={24} />
                                </div>
                                <div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-900 px-2 py-1 rounded-full border border-neutral-800">
                                    <Calendar size={12} />
                                    {project.date}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-neutral-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </SpotlightCard>
                    ))}

                    {/* Full Width Website Project Card */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-full mt-6">
                        <SpotlightCard className="p-8 md:p-12 relative group overflow-visible">
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                <div className="lg:w-1/3 space-y-6">
                                    <div className="inline-flex items-center gap-2 text-orange-500 font-mono text-sm tracking-widest uppercase">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                        Current Project
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                        {websiteProject.title}
                                    </h2>
                                    <p className="text-neutral-400 leading-relaxed">
                                        {websiteProject.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {websiteProject.tags.map(tag => (
                                            <span key={tag} className="text-xs px-3 py-1.5 bg-neutral-800 border border-neutral-700 rounded-full text-neutral-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:w-2/3 w-full">
                                    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
                                        {websiteProject.timeline.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ x: 10, scale: 1.02 }}
                                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group/item is-active"
                                            >
                                                {/* Dot */}
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-orange-500 shadow shrink-0 md:order-1 md:group-odd/item:-translate-x-1/2 md:group-even/item:translate-x-1/2 z-10 transition-colors group-hover/item:border-orange-500 group-hover/item:bg-orange-500/10">
                                                    <span className="text-xs font-bold">{idx + 1}</span>
                                                </div>
                                                {/* Content */}
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm group-hover/item:border-orange-500/30 transition-all shadow-xl">
                                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                                        <div className="font-bold text-white text-sm">{item.stage}</div>
                                                    </div>
                                                    <div className="text-neutral-500 text-xs">{item.detail}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements for "Lift" effect */}
                            <div className="absolute -inset-px rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/20 transition-all duration-500 pointer-events-none" />
                        </SpotlightCard>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
