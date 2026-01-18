import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/Button';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to build the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
            next generation of hardware?
          </span>
        </h2>
        
        <p className="text-xl text-neutral-400 mb-12">
          I'm currently looking for new opportunities at innovative companies. 
          Let's discuss how my experience at Apple and Amazon can bring value to your team.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button icon onClick={() => window.location.href = 'mailto:scout@example.com'}>
            Get in Touch
          </Button>
          <a 
            href="#" 
            className="px-8 py-4 rounded-full border border-neutral-800 text-neutral-300 hover:bg-white/5 hover:text-white transition-all font-semibold text-sm"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-20 flex justify-center gap-8">
            <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="mailto:scout@example.com" icon={Mail} label="Email" />
            <SocialLink href="#" icon={Github} label="Github" />
        </div>
        
        <p className="mt-12 text-sm text-neutral-600">
            © {new Date().getFullYear()} Scout. Engineered with React & Tailwind.
        </p>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <a 
        href={href}
        className="text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex flex-col items-center gap-2 group"
        aria-label={label}
    >
        <div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-orange-500/50 group-hover:scale-110 transition-all">
            <Icon size={20} />
        </div>
    </a>
);