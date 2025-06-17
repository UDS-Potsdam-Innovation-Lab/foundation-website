'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Image from 'next/image';

export default function SupportUs() {
  const supportMethods = [
    {
      title: 'Donations',
      description: 'Support our initiatives with flexible giving options.',
    },
    {
      title: 'Endowments',
      description: 'Leave a legacy through sustainable funding.',
    },
    {
      title: 'Project Support',
      description: 'Back specific projects that align with your interests.',
    },
    {
      title: 'Corporate Partnerships',
      description: 'Collaborate with us to drive innovation.',
    },
    {
      title: 'Research Funding',
      description: 'Fuel groundbreaking research and education.',
    },
    {
      title: 'Infrastructure Support',
      description: 'Help build and maintain our digital infrastructure.',
    },
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Support Our Mission"
          subtitle="Help shape the future of digital education"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {supportMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl shadow-lg group hover:shadow-orange-400/50 hover:shadow-xl transition duration-300"
            >
              <Image
                src={`/support/${index + 1}.png`}
                alt={method.title}
                width={400}
                height={300}
                className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="text-lg font-bold mb-1 text-orange-400 group-hover:text-white transition-colors duration-300">{method.title}</h3>
                <p className="text-sm">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
            <h3 className="text-lg font-bold text-white">Tax Benefits</h3>
          </div>
          <p className="text-sm mt-3">All donations are tax-deductible. Documentation will be provided for your records.</p>
        </div>
      </div>
    </section>
  );
}
