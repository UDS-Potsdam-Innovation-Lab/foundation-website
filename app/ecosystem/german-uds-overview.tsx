'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Image from 'next/image';

export default function GermanUDSOverview() {
  const entities = [
    {
      title: 'German UDS',
      icon: '🎓',
      description: 'A university focused on digital-first education and research.',
      details: ['Digital education', 'Research excellence'],
      image: '/images/german-uds.jpg',
    },
    {
      title: 'German UDS Foundation',
      icon: '🏛️',
      description: 'Drives funding and strategy for digital education.',
      details: ['Funding support', 'Strategic direction'],
      image: '/images/german-uds-foundation.jpg',
    },
    {
      title: 'German UDS gGmbH',
      icon: '🧾',
      description: 'Manages daily operations and educational programs.',
      details: ['Operations', 'Program management'],
      image: '/images/german-uds-ggmbh.jpg',
    },
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
                className="card-blue-gradient rounded-xl p-6 text-white border border-gray-100 dark:border-gray-800 hover:shadow-glow transition-all duration-300"
              >
                <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                  <Image
                    src={entity.image}
                    alt={entity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-3xl mb-2" role="img" aria-label={entity.title}>
                  {entity.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 gradient-text">{entity.title}</h3>
                <p className="text-sm mb-4">
                  {entity.description}
                </p>
                <ul className="space-y-1 text-sm">
                  {entity.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center"
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
