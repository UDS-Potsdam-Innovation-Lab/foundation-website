'use client';
import { motion } from 'framer-motion';
import GuidingPrinciples from './guiding-principles';
import CoreBeliefs from './core-beliefs';

export default function Values() {
  return (
    <main className="pt-24">
      <section id="guiding-principles" className="scroll-mt-32 hero-gradient">
<CoreBeliefs />
</section>
<section id="core-beliefs" className="scroll-mt-32 mb-0">
        <GuidingPrinciples />
      </section>
          <section className="py-8 text-center hero-gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            Discover how we turn our beliefs into action
          </h2>
          <a
            href="/what-we-do"
            className="inline-block mt-2 px-6 py-2 border border-orange-500 rounded-full text-orange-500 text-sm font-medium hover:bg-orange-500 hover:text-white transition"
          >
            Learn More
          </a>
        </motion.div>
      </section>
    </main>
  );
}
