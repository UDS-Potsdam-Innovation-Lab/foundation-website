'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function Purpose() {
  const purposes = [
    {
      title: 'Support German UDS',
      description: 'Promoting and financing the German University of Digital Science through strategic initiatives and partnerships.',
      link: 'https://german-uds.de',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Global Cooperation',
      description: 'Fostering international partnerships and collaboration to advance digital education worldwide.',
      link: '/global',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Campus of Virtual Education (COVE)',
      description: 'Pioneering virtual learning environments and innovative digital education platforms.',
      link: 'https://german-uds.de/campus-of-virtual-education-cove',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'German-UDS.Academy',
      description: 'Providing accessible, high-quality digital education through our online learning platform.',
      link: 'https://german-uds.academy',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <main className="pt-24">
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Purpose"
            subtitle="Discover how we're transforming digital education and shaping the future"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl card-blue-gradient text-white hover:shadow-glow transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${purpose.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 gradient-text">{purpose.title}</h3>
                      <p className="text-body mb-4">{purpose.description}</p>
                      <a
                        href={purpose.link}
                        target={purpose.link.startsWith('http') ? '_blank' : '_self'}
                        rel={purpose.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center text-accent hover:text-secondary transition-colors"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
