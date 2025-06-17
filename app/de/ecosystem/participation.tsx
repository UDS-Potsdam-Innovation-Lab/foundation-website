'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';

export default function Participation() {
  const financialOptions = [
    {
      title: 'Donate to Foundation',
      description: 'Support digital education by contributing directly.',
      image: '/images/donate.jpg'
    },
    {
      title: 'Fund Scholarships',
      description: 'Help students access education by funding scholarships.',
      image: '/images/scholarships.jpg'
    },
    {
      title: 'Acquire Shares in gGmbH',
      description: 'Be a part of our journey through strategic investment.',
      image: '/images/shares.jpg'
    },
    {
      title: 'Sponsor Programs',
      description: 'Support specific research or education programs.',
      image: '/images/sponsor.jpg'
    }
  ];

  return (
    <section className="py-20 card-blue-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Financial Support & Participation"
          subtitle="Join us in shaping the future of digital education"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {financialOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-glow transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 gradient-text">{option.title}</h3>
                <p className="text-sm text-body">{option.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <Button href="/contact" variant="primary">
            Contact Us to Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
