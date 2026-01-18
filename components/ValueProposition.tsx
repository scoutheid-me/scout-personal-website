import React from 'react';
import { Layers, Zap, Users, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export const ValueProposition: React.FC = () => {
  const values = [
    {
      title: "0-to-1 Prototyping",
      desc: "Rapidly iterating from napkin sketches to functional high-fidelity prototypes. I use advanced CAD and onsite machining to validate physics before tooling commitments.",
      icon: Zap
    },
    {
      title: "Scale Manufacturing",
      desc: "Deep expertise in injection molding, CNC, and die-casting. I design for manufacturability (DfM) from day one to ensure yield rates >98% at scale.",
      icon: Layers
    },
    {
      title: "Technical Leadership",
      desc: "Leading cross-functional teams of EEs, PDs, and OPMs. I translate complex engineering constraints into clear business decisions for stakeholders.",
      icon: Users
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why tech giants <span className="text-orange-500">trust me</span> with their hardware.
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            My approach combines rapid innovation with rigorous validation. I don't just build parts; I build scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <SpotlightCard key={idx} className="h-full">
              <div className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  <val.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  {val.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed flex-grow">
                  {val.desc}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                  Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};