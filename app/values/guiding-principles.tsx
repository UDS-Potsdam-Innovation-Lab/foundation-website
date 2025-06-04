'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function GuidingPrinciples() {
  const principles = [
    {
      title: 'Shape the Digital Future',
      description: 'Leading innovation in digital education and research',
      icon: '🚀',
    },
    {
      title: 'Establish Digital Science',
      description: 'Creating new standards in digital academic excellence',
      icon: '🔬',
    },
    {
      title: 'Promote Young Talent',
      description: 'Nurturing the next generation of digital innovators',
      icon: '⭐',
    },
    {
      title: 'Support Education',
      description: 'Developing essential competencies for the digital age',
      icon: '📚',
    },
  ];

  return (
    <main className="pt-24">
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Guiding Principles"
            subtitle="Our core principles that shape the future of digital education"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.5
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="card-blue-gradient p-6 rounded-xl shadow-lg hover:shadow-glow transform transition-all duration-300"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{principle.title}</h3>
                <p className="text-body">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}