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
            <h1 className="text-6xl md:text-8xl font-extrabold mb-2 text-highlight">
              INNOVATING
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-highlight">
              FOR A BETTER DIGITAL FUTURE
            </h2>
            <p className="text-xl md:text-2xl text-orange-500 mb-8">Join us in shaping a globally inclusive and technologically advanced education system
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/about" className="text-white border border-orange-500 text-lg md:text-xl px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                Learn More
              </a>
              <a href="/get-involved" className="text-white border border-orange-500 text-lg md:text-xl px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                Support Us
              </a>
              <a href="/contact" className="text-white border border-orange-500 text-lg md:text-xl px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 card-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
            <p className="text-xl text-blue-100">
              Digital science as an integral part of research and society
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Funding German UDS',
                description: 'Supporting the growth and development of digital education',
              },
              {
                title: 'Shaping Digital Society',
                description: 'Creating positive impact through technological advancement',
              },
              {
                title: 'Integrative Approach',
                description: 'Combining traditional values with digital innovation',
              },
              {
                title: 'Pioneering Digitalization',
                description: 'Leading the way in digital transformation',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl card-blue-gradient text-white hover:shadow-glow transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 gradient-text">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
