'use client';
import { motion } from 'framer-motion';

export default function CoreBeliefs() {
  const beliefs = [
    {
      title: 'Rethinking Education',
      description: 'Transforming traditional education models to meet the demands of the digital age.',
    },
    {
      title: 'Supporting Visionaries',
      description: 'Empowering innovative thinkers who shape the future of digital education.',
    },
    {
      title: 'Digital Education',
      description: 'Making quality education accessible through cutting-edge digital platforms.',
    },
    {
      title: 'Global Education',
      description: 'Breaking down geographical barriers to create a worldwide learning community.',
    },
    {
      title: 'Harmony between AI and Humans',
      description: 'Fostering a balanced integration of artificial intelligence in education.',
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Core Beliefs</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our foundation is built on fundamental beliefs that drive our mission to transform
              digital education and shape the future of learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-xl bg-white dark:bg-[#002B5C] hover:shadow-glow transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">{belief.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{belief.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}