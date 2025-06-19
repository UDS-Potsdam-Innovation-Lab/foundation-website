'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function Links() {
  const resources = [
    {
      title: 'German UDS Brochure',
      description: 'Download our comprehensive overview of German UDS',
      link: 'https://german-uds.de/cta',
    },
    {
      title: 'Scientific Reports',
      description: 'Access our latest research and scientific publications',
      link: 'https://german-uds.de/scientific-reports',
    },
    {
      title: 'Digital Education Podcast',
      description: 'Listen to our weekly discussions with industry experts',
      link: 'https://german-uds.de/podcasts',
    },
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Resources"
          subtitle="Explore our publications and media content"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white dark:bg-[#002B5C] rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-center transition-all duration-300 hover:scale-105"
                >
                  View Resource
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center bg-white dark:bg-[#002B5C] p-6 rounded-xl"
        >
          <p className="text-gray-600 dark:text-gray-300">
            For more information, contact us at:{' '}
            <a 
              href="mailto:office@foundation.german-uds.de"
              className="text-accent hover:text-secondary transition-colors"
            >
              office@foundation.german-uds.de
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}