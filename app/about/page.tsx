'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const keyStatements = [
    {
      title: 'Promote and Fund',
      description: 'Support and finance the German University of Digital Science through strategic initiatives',
    },
    {
      title: 'Shape Digital Society',
      description: 'Actively contribute to the development and evolution of digital civil society',
    },
    {
      title: 'Integrate Digital Science',
      description: 'Seamlessly incorporate Digital Science into research and public life',
    },
    {
      title: 'Pioneer Education',
      description: 'Lead the way in developing and implementing innovative digital education models',
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">About Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Promoting digital transformation and equal opportunity through lifelong digital skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-xl overflow-hidden"
            >
              <Image
                src="/why_foundation.png"
                alt="Why the Foundation Exists"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="space-y-8">
              {keyStatements.map((statement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 bg-white dark:bg-[#002B5C] p-6 rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 gradient-text">{statement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{statement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#001B3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12 gradient-text">Why the Foundation Exists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Funding German UDS',
                  description: 'Supporting the growth and development of digital education initiatives',
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
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-gray-50 dark:bg-[#002B5C] hover:shadow-glow transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 gradient-text">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}