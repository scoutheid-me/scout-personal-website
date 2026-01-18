import React from 'react';
import { LucideIcon } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string;
      };
    }
  }
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: LucideIcon;
  color: string;
  link: string;
  achievements: string[];
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  category: string;
  image: string;
}