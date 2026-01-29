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
        title: "Robotic Arm Prototype",
        description: "Developed a 6-axis robotic arm prototype for automated assembly lines using 3D printed components and stepper motors.",
        date: "2022",
        tags: ["Mechatronics", "Python", "Prototyping"]
    },
    {
        title: "Self-Stabilizing RC Plane",
        description: "Engineered a remote-controlled aircraft platform featuring an Arduino/Xbee wireless communication stack and myRIO integration. Developed a novel flywheel-based pitch correction system to dynamically prevent mid-flight stalling.",
        date: "2016",
        tags: ["Embedded Systems", "Aerodynamics", "Mechatronics", "Arduino", "Signal Processing"]
    }
];

export const Projects: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <header className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Selected Projects
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl">
                        A showcase of my engineering challenges and solutions. From CAD designs to functional prototypes.
                    </p>
                </header>

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
                </div>
            </motion.div>
        </div>
    );
};
