'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/ui/Button';

export default function Page() {
  const entities = [
    {
      title: 'German UDS',
      icon: '🎓',
      description: 'A university focused on digital-first education and research',
      details: ['Digital education', 'Research excellence'],
      image: '/german-uds.jpg',
    },
    {
      title: 'German UDS Foundation',
      icon: '🏛️',
      description: 'Drives funding and strategy for digital education',
      details: ['Funding support', 'Strategic direction'],
      image: '/german-uds-foundation.jpg',
    },
    {
      title: 'German UDS gGmbH',
      icon: '🧾',
      description: 'Manages daily operations and educational programs',
      details: ['Operations', 'Program management'],
      image: '/german-uds-ggmbh.jpg',
    },
  ];

  const shares = [
    { holder: 'German UDS Foundation', percentage: 70 },
    { holder: 'German UDS Innovation GmbH', percentage: 15 },
    { holder: 'AI Research Institute', percentage: 5 },
    { holder: 'Professors, Companies and Organizations', percentage: 10 },
  ];

  const financialOptions = [
    {
      title: 'Donate to Foundation',
      description: 'Support digital education by contributing directly',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[0%_0%]',
    },
    {
      title: 'Fund Scholarships',
      description: 'Help students access education by funding scholarships',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[25%_25%]',
    },
    {
      title: 'Acquire Shares in gGmbH',
      description: 'Be a part of our journey through strategic investment',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[50%_50%]',
    },
    {
      title: 'Sponsor Programs',
      description: 'Support specific research or education programs',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[75%_75%]',
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">

      {/* Ecosystem Section */}
      <section className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">German UDS Ecosystem</h1>
            <p className="text-lg text-[#0a0f4a]">
              Understanding the structure and synergy of our organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-6">
            {entities.map((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full h-[456px] rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
              >
                <div className="relative w-full h-[300px]">
                  <Image src={entity.image} alt={entity.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{entity.title}</h3>
                  <p className="text-[#0a0f4a] text-sm mb-2">{entity.description}</p>
                  <ul className="text-[#0a0f4a] text-sm space-y-1">
                    {entity.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shareholding Structure Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Shareholding Structure</h1>
            <p className="text-lg text-[#0a0f4a]">Ownership distribution of German UDS</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shares.map((share, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full h-[140px] rounded-br-2xl border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col items-center justify-center text-center px-4 py-6"
              >
                <div className="text-3xl font-bold text-orange-500 mb-1">{share.percentage}%</div>
                <h3 className="text-[#000080] text-xs font-semibold leading-snug">{share.holder}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Support Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Financial Support & Participation</h1>
            <p className="text-lg text-[#0a0f4a]">
              Join us in shaping the future of digital education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-6">
            {financialOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-md rounded-br-2xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-orange-400 hover:shadow-lg hover:ring-2 hover:ring-orange-500"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className={`object-cover w-full h-full ${option.style || ''}`}
                  />
                </div>
                <div className="bg-white px-4 py-5">
                  <h3 className="text-sm font-bold text-[#f7931e] mb-2">{option.title}</h3>
                  <p className="text-sm text-[#0a0f4a] leading-relaxed">{option.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/contact" variant="primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
