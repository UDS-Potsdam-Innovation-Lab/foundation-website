'use client';
import { motion } from 'framer-motion';
import GuidingPrinciples from './guiding-principles';
import CoreBeliefs from './core-beliefs';

export default function Values() {
  return (
    <main className="pt-24">
      <section id="guiding-principles" className="scroll-mt-32">
        <GuidingPrinciples />
      </section>
      
      <section id="core-beliefs" className="scroll-mt-32">
        <CoreBeliefs />
      </section>
    </main>
  );
}