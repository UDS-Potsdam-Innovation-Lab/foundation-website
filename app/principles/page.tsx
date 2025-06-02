'use client';
import { motion } from 'framer-motion';

export default function Principles() {
  const principles = [
    {
      title: 'Shape the Digital Future',
      description: 'Leading innovation in digital education and research',
    },
    {
      title: 'Establish Digital Science',
      description: 'Creating new standards in digital academic excellence',
    },
    {
      title: 'Promote Young Talent',
      description: 'Nurturing the next generation of digital innovators',
    },
    {
      title: 'Support Future Skills',
      description: 'Developing essential competencies for the digital age',
    },
  ];

  return (
    <main className="pt-24">
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 gradient-text">Guiding Principles</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our foundation is built on core principles that guide our mission to transform
              digital education and research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-xl card-blue-gradient text-white hover:shadow-glow transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">{principle.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}