'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

export default function Participation() {
  const financialOptions = [
    {
      number: '01',
      title: 'Donate to Foundation',
      description: 'Support our mission with direct donations that help fund digital education initiatives.',
      details: 'Tax-deductible contributions for both individuals and organizations'
    },
    {
      number: '02',
      title: 'Fund Scholarships',
      description: 'Enable talented students to access quality digital education through scholarship programs.',
      details: 'Create named scholarships or contribute to existing funds'
    },
    {
      number: '03',
      title: 'Acquire Shares in gGmbH',
      description: 'Become a stakeholder in our non-profit organization and help shape our future.',
      details: 'Strategic investment opportunities for long-term impact'
    },
    {
      number: '04',
      title: 'Sponsor Programs',
      description: 'Support specific educational programs, research initiatives, or infrastructure development.',
      details: 'Targeted funding for concrete projects and initiatives'
    }
  ];

  return (
    <section className="py-20 card-blue-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Financial Support & Participation"
          subtitle="Join us in shaping the future of digital education through various investment options"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/shares.png"
              alt="Investment and Participation Opportunities"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="space-y-6">
            {financialOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group bg-gray-50 dark:bg-[#002B5C] rounded-xl p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    {option.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 gradient-text">{option.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{option.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{option.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center mt-8"
            >
              <Button href="/contact" variant="primary">
                Contact Us to Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}