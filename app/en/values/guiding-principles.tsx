'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const guidingPrinciples = [
    {
      title: 'Shape the Digital Future',
      description: 'Leading innovation in digital education and research',
      image: '/principle1.jpg',
    },
    {
      title: 'Establish Digital Science',
      description: 'Creating new standards in digital academic excellence',
      image: '/principle2.jpg',
    },
    {
      title: 'Promote Young Talent',
      description: 'Nurturing the next generation of digital innovators',
      image: '/principle3.jpg',
    },
    {
      title: 'Support Education',
      description: 'Developing essential competencies for the digital age',
      image: '/principle4.jpg',
    },
  ];

  return (
    <main className="pt-24">

      <section className="py-20 hero-gradient">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-4 gradient-text text-center"
    >
      Guiding Principles
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg text-white max-w-3xl mx-auto mb-12 text-center"
    >
      Our guiding principles inspire how we shape, support, and strengthen the digital future.
    </motion.p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {guidingPrinciples.map((principle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          className="relative flex flex-col h-full rounded-xl overflow-hidden shadow-lg hover:shadow-glow transform transition-all duration-300"
        >
          <Image
            src={principle.image}
            alt={principle.title}
            width={500}
            height={300}
            className="object-cover w-full h-48 rounded-t-xl"
          />
          <div className="p-6 bg-gradient-to-br from-blue-800 to-blue-600 text-white flex-grow flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-2 gradient-text">{principle.title}</h3>
            <p className="text-body text-sm">{principle.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}
