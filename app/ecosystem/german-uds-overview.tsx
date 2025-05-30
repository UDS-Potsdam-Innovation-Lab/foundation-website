'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function GermanUDSOverview() {
  const entities = [
    {
      title: 'German UDS',
      icon: '🎓',
      description: 'The university itself, dedicated to providing cutting-edge digital education and research opportunities. We focus on innovative teaching methods and practical application of digital technologies.',
      details: [
        'Digital-first education',
        'Research excellence',
        'Industry partnerships',
        'Student success'
      ]
    },
    {
      title: 'German UDS Foundation',
      icon: '🏛️',
      description: 'The foundation promotes and finances the German University of Digital Science, shaping the future of digital education through strategic initiatives and support.',
      details: [
        'Financial support',
        'Strategic direction',
        'Resource allocation',
        'Vision setting'
      ]
    },
    {
      title: 'German UDS gGmbH',
      icon: '🧾',
      description: 'The non-profit organization responsible for operational management and implementation of educational programs and initiatives.',
      details: [
        'Program management',
        'Daily operations',
        'Quality assurance',
        'Implementation'
      ]
    }
  ];

  return (
    <main className="pt-24">
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="German UDS Ecosystem"
            subtitle="Understanding the structure and synergy of our organization"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {entities.map((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-[#002B5C] rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4" role="img" aria-label={entity.title}>
                  {entity.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 gradient-text">{entity.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {entity.description}
                </p>
                <ul className="space-y-2">
                  {entity.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}