'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function CoreBeliefs() {
  const beliefs = [
    {
      title: 'Rethinking Education with AI',
      description: 'Transforming traditional education models through innovative AI integration while maintaining human-centered learning approaches.',
      details: 'We believe in leveraging artificial intelligence to enhance learning experiences while ensuring education remains personal and engaging.',
      icon: '🤖'
    },
    {
      title: 'Supporting Academic Visionaries',
      description: 'Empowering forward-thinking educators and researchers who drive the evolution of digital education.',
      details: 'Our foundation actively supports pioneers in digital education who push the boundaries of traditional teaching methods.',
      icon: '👨‍🏫'
    },
    {
      title: 'Digital-First Education',
      description: 'Creating immersive, accessible learning experiences through cutting-edge digital platforms and methodologies.',
      details: 'We prioritize digital solutions that make education more accessible, interactive, and effective for learners worldwide.',
      icon: '💻'
    },
    {
      title: 'Global Connectivity in Science',
      description: 'Fostering worldwide collaboration and knowledge sharing through advanced digital infrastructure.',
      details: 'Building bridges between institutions and researchers globally to accelerate scientific progress and innovation.',
      icon: '🌍'
    },
    {
      title: 'Sustainable Digital Future',
      description: 'Promoting environmentally conscious digital education practices and sustainable technological solutions.',
      details: 'We believe in developing educational technology that considers its environmental impact and promotes sustainability.',
      icon: '🌱'
    },
    {
      title: 'Inclusive Learning Environment',
      description: 'Creating educational opportunities that embrace diversity and ensure accessibility for all learners.',
      details: 'Our commitment to inclusive education drives us to develop solutions that accommodate different learning styles and needs.',
      icon: '🤝'
    },
    {
      title: 'Research Excellence',
      description: 'Advancing digital science through rigorous research and innovative methodologies.',
      details: 'Supporting groundbreaking research initiatives that push the boundaries of digital education and technology.',
      icon: '🔬'
    },
    {
      title: 'Industry Collaboration',
      description: 'Building strong partnerships with industry leaders to enhance practical education.',
      details: 'Creating meaningful connections between academia and industry to provide real-world learning opportunities.',
      icon: '🤝'
    },
    {
      title: 'Lifelong Learning',
      description: 'Supporting continuous education and professional development in the digital age.',
      details: 'Providing resources and platforms for ongoing learning and skill development throughout one\'s career.',
      icon: '📚'
    }
  ];

  return (
    <main className="pt-24">
      <section className="py-20 bg-gradient-to-br from-blue-50/50 to-orange-50/50 dark:from-[#001B3F] dark:to-[#002B5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Core Beliefs"
            subtitle="Shaping the future of education through innovation and technology"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-[#002B5C] p-6 rounded-xl hover:shadow-glow 
                         transform transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3" role="img" aria-label={belief.title}>
                    {belief.icon}
                  </span>
                  <h3 className="text-xl font-bold gradient-text">{belief.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{belief.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{belief.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}