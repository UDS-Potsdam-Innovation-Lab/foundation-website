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
            className="text-center mb-16 hover:hue-rotate-15 transition duration-700"
          >
            <h1 className="text-4xl font-bold mb-6 gradient-text">About Us</h1>
            <p className="text-body max-w-3xl mx-auto mt-6 text-orange-200">
              <strong>The German UDS Foundation GmbH</strong> supports the German University of Digital Science by
              funding innovative education and research in digital science. Our mission is to promote digital
              transformation, integrate digital skills into society, and shape an inclusive, future-ready digital world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full min-h-[650px] rounded-xl overflow-hidden"
            >
              <Image
                src="/why_foundation.png"
                alt="Team Member Photo"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            <div className="flex flex-col justify-center space-y-8">
              {keyStatements.map((statement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center text-left card-blue-gradient p-6 rounded-xl text-white hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-white w-16 h-16 flex items-center justify-center mr-4 hover:hue-rotate-15 transition duration-500">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 gradient-text">{statement.title}</h3>
                    <p className="text-body">{statement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 card-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12 gradient-text">Why the Foundation Exists</h2>
            <p className="text-body max-w-3xl mx-auto mb-12 text-orange-400">
              Promoting digital transformation and equal opportunity through lifelong digital skills
            </p>
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
                  className="p-6 rounded-xl card-blue-gradient text-white hover:shadow-glow transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 gradient-text">{item.title}</h3>
                  <p className="text-body">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
