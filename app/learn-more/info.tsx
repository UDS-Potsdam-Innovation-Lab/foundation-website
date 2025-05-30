'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function Info() {
  const facts = [
    {
      title: 'State Recognition',
      description: 'Officially recognized by the Ministry of Science, Research and Culture of the State of Brandenburg',
      icon: '🎓',
      details: 'Full accreditation as a university of applied sciences'
    },
    {
      title: 'Comprehensive Programs',
      description: 'Six accredited Master\'s/MBA programs and extensive micro degree programs, with Bachelor\'s programs in development',
      icon: '📚',
      details: 'Flexible learning paths for various career stages'
    },
    {
      title: 'Interactive Learning',
      description: 'Virtual classrooms, interactive labs, real-time collaboration, and hands-on projects',
      icon: '💻',
      details: 'Cutting-edge digital learning environments'
    },
    {
      title: 'Global Accessibility',
      description: 'Completely digital, location-independent education delivered entirely in English',
      icon: '🌍',
      details: 'Learn from anywhere, anytime'
    },
    {
      title: 'Affordable Education',
      description: 'Fair tuition fees of € 7,500 per year for quality digital education',
      icon: '💰',
      details: 'Competitive pricing for world-class education'
    },
    {
      title: 'Innovation Hub',
      description: 'A driving force for Germany as a science and technology location with innovative strength',
      icon: '🚀',
      details: 'Leading digital transformation in education'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#001B3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Key Facts"
          subtitle="Discover what makes German UDS unique"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-[#002B5C] p-6 rounded-xl hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl" role="img" aria-label={fact.title}>
                    {fact.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 gradient-text">{fact.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{fact.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{fact.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}