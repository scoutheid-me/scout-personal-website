import React from 'react';
import { Apple, ShoppingCart, Activity, ArrowRight, Cpu } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: "Halo Industries",
    role: "Staff Mechanical Engineer",
    period: "2023 - Present",
    description: "DRI for 75% of all motion systems in a new generation of tools, utilizing various pneumatic, valves, solenoids, and sensors.",
    achievements: [
      "DRI for a dynamic 8 motor calibration light bridge that aligns high powered lasers to micron precision.",
      "Built a high precision alignment and laser testing fixture for a multi-beam laser from concept to testing in 8 weeks.",
      "Designed in a safety interlock system and tested with various high precision measurement tools, including Keyence."
    ],
    logo: Activity,
    color: "text-amber-400",
    link: "https://www.halo-industries.com/"
  },
  {
    company: "Amazon Lab126",
    role: "Product Design Engineer",
    period: "2019 - 2023",
    description: "Lead product design engineer for dynamic motion sub-assemblies on Advanced Products. DRI for 15+ parts and 5+ sub-assemblies across robotics platforms.",
    achievements: [
      "Led design and DRI ownership for multiple functional and noise reduction parts in the Astro pan sub-system, interfacing with China DFM, IQC, and OQC.",
      "Designed custom robotics gearmotors for high and low torque actuators featuring custom torque and force sensing solutions.",
      "Managed and mentored Summer 2022 interns across PD, EE, and Controls; ideated and ran the intern presentation program.",
      "Drove in-depth testing and investigation for materials, adhesives, and foams utilizing SIM, FEA, and TA analysis."
    ],
    logo: ShoppingCart,
    color: "text-blue-400",
    link: "https://www.amazon.com"
  },
  {
    company: "Apple",
    role: "iPhone Power PD Intern",
    period: "Jan 2017 – Aug 2017",
    description: "Lead PD engineer for architecture and development of JDM program with 3rd party vendor. Oversaw entire assembly, product line, and processes through the complete design and production cycle.",
    achievements: [
      "Led JDM program development, reviewing DFMs, mold flow analysis, and enforcing strict safety and design guidelines across vendor partnership.",
      "Pioneered ultrasonic welding design optimization research using DOE methodology across cosmetic and weld quality metrics.",
      "Drove cross-functional collaboration with China team to implement design improvements and manage corrective action testing.",
      "Executed tolerance analysis and design verification to validate manufacturing and assembly requirements."
    ],
    logo: Apple,
    color: "text-neutral-200",
    link: "https://www.apple.com"
  },
  {
    company: "Curtis Instruments",
    role: "Device & System Architecture",
    period: "May 2016 – Aug 2016",
    description: "Architected and implemented a modular software framework for simultaneous control and data acquisition of 10+ hardware devices via a dynamic LabVIEW interface.",
    achievements: [
      "Engineered a custom variation of the Actor Framework using asynchronous calls and user events to optimize multi-device throughput and system stability.",
      "Developed hardware wrappers and communication drivers to streamline command integrity across legacy and modern devices (GPIB, CANopen, VISA).",
      "Executed end-to-end validation on high-power automotive controllers using Dynamometers and specialized lab instrumentation to ensure sub-millisecond response times."
    ],
    logo: Cpu,
    color: "text-purple-400",
    link: "https://www.curtisinstruments.com/"
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
            href="/Scout_Heid_Resume_2026.pdf"
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