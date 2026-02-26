'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/ui/Button';

export default function Page() {
  const supportWays = [
    {
      title: 'Donations',
      description:
        'Support our mission with a one-time or recurring donation to advance digital education initiatives.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    {
      title: 'Endowments',
      description:
        'Create a lasting impact through endowments that support long-term educational programs.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
      title: 'Contributions',
      description:
        'Contribute your expertise, time, or resources to advance our mission of digital education.',
      image: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg',
    },
    {
      title: 'Project Funding',
      description:
        'Directly support projects that align with your interests in digital education and innovation.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-white to-blue-100 scroll-smooth min-h-screen">
      <section className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Financial Support &amp; Participation
            </h1>
            <p className="text-lg text-gray-600">
              Explore how you can support the Foundation financially and participate in shaping the future of digital education.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {supportWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="w-full bg-white rounded-3xl border-2 border-gray-100 hover:border-[#0066FF] shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[16/10] min-h-[220px]">
                  <Image
                    src={way.image}
                    alt={way.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <h3 className="text-[#0066FF] font-bold text-base mb-2">{way.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{way.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tax Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-blue-50 px-6 py-10 text-center"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Tax Benefits</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-4xl mx-auto">
              Your support is tax-deductible. As a non-profit organization, we provide all necessary documentation for your tax return.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-12"
          >
          </motion.div>
        </div>

      </section>
    </main>
  );
}
