import React from 'react';
import { Apple, ShoppingCart, Activity, ArrowRight } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: "Apple",
    role: "Product Design Lead",
    period: "2019 - Present",
    description: "Leading the enclosure design for next-gen Mac architecture. Responsible for thermal integration and structural integrity.",
    achievements: [
      "Reduced chassis weight by 18% using novel alloy composition.",
      "Managed 3 Asia-based CMs for NPI builds.",
      "Filed 4 patents on active cooling mechanisms."
    ],
    logo: Apple,
    color: "text-neutral-200",
    link: "https://www.apple.com"
  },
  {
    company: "Amazon",
    role: "Senior Hardware Engineer",
    period: "2016 - 2019",
    description: "Core member of the Prime Air drone delivery team. Focused on propulsion systems and landing gear durability.",
    achievements: [
      "Designed impact-resistant landing gear utilizing localized lattice structures.",
      "Improved motor efficiency by 7% through custom stator housing design.",
      "Led failure analysis (FA) for field test units."
    ],
    logo: ShoppingCart,
    color: "text-blue-400",
    link: "https://www.amazon.com"
  },
  {
    company: "Halo",
    role: "Mechanical Engineer",
    period: "2014 - 2016",
    description: "Developed wearable fitness trackers. Owned the entire mechanical BOM from concept to mass production.",
    achievements: [
      "Achieved IP68 water resistance rating with novel adhesive stack-up.",
      "Optimized antenna keep-out zones for reliable Bluetooth connectivity.",
      "Shipped 2M+ units with <0.1% mechanical field failure rate."
    ],
    logo: Activity,
    color: "text-amber-400",
    link: "https://www.haloneuro.com"
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 bg-neutral-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Proven <span className="text-orange-500">Track Record</span>
            </h2>
            <p className="text-neutral-400">Delivering excellence at world-class organizations.</p>
          </div>
          <a
            href="/Scout_Heid_Resume_2026.pdf" // Updated link
            download="Scout_Heid_Resume_2026.pdf"
            className="text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors flex items-center gap-2"
          >
            Download Full Resume <ArrowRight size={16} />
          </a>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <div className="relative flex flex-col md:flex-row gap-8">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700 group-hover:scale-105 transition-transform duration-300">
                    <exp.logo className={`w-8 h-8 ${exp.color}`} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <span className="text-sm font-mono text-neutral-500">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-orange-500 mb-4">{exp.role}</h4>
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-orange-500 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-neutral-800 flex justify-end">
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-white transition-colors">
                      Visit Company Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};