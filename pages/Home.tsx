import React from 'react';
import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { Experience } from '../components/Experience';
import { CTA } from '../components/CTA';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <ValueProposition />
            <Experience />
            <CTA />
        </>
    );
};
