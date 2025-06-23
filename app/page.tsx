'use client';

import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      {/* Hero + CTA Section Combined */}
      <section className="min-h-screen flex flex-col justify-center hero-section hero-gradient relative overflow-hidden">
        <ParticlesBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#000080]">
              Building A Digital Future With Social Responsibility
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white mb-20">
              Join us in shaping a globally inclusive and technologically advanced education system
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#000080]">
              Ready to Shape the Future?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/about"
                className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300 text-white text-sm font-medium"
              >
                Learn More
              </a>
              <a
                href="/get-involved"
                className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300 text-white text-sm font-medium"
              >
                Support Us
              </a>
              <a
                href="/get-involved"
                className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300 text-white text-sm font-medium"
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
