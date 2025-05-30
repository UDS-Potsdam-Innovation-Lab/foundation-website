'use client';
import { motion } from 'framer-motion';
import Info from './info';
import Links from './links';

export default function LearnMore() {
  return (
    <main className="pt-24">
      <section id="info" className="scroll-mt-32">
        <Info />
      </section>
      
      <section id="links" className="scroll-mt-32">
        <Links />
      </section>
    </main>
  );
}