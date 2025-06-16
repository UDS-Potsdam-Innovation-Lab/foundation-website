'use client';
import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center hero-section hero-gradient relative overflow-hidden">
        <ParticlesBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-highlight">
              Building A Digital Future With Social Responsibility
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="/about"
                className="px-6 py-2 border border-orange-500 rounded-full text-white text-sm font-medium hover:bg-orange-500 hover:text-white transition"
              >
                Learn More
              </a>
              <a
                href="/get-involved"
                className="px-6 py-2 border border-orange-500 rounded-full text-white text-sm font-medium hover:bg-orange-500 hover:text-white transition"
              >
                Support Us
              </a>
            </div>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-semibold mt-4">
              Join us in shaping a globally inclusive and technologically advanced education system
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 card-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Shape the Future?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join us in our mission to transform digital education
            </p>
            <a
              href="/get-involved"
              className="btn-primary px-8 py-3 rounded-full text-sm font-medium inline-block"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
