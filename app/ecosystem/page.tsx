'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/ui/Button';

export default function Page() {
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

  const shares = [
    { holder: 'German UDS Foundation', percentage: 70 },
    { holder: 'Innovation GmbH', percentage: 20 },
    { holder: 'Natural Persons', percentage: 10 },
  ];

  const financialOptions = [
    {
      title: 'Donate to Foundation',
      description: 'Support digital education by contributing directly.',
      image: '/images/donate.jpg',
    },
    {
      title: 'Fund Scholarships',
      description: 'Help students access education by funding scholarships.',
      image: '/images/scholarships.jpg',
    },
    {
      title: 'Acquire Shares in gGmbH',
      description: 'Be a part of our journey through strategic investment.',
      image: '/images/shares.jpg',
    },
    {
      title: 'Sponsor Programs',
      description: 'Support specific research or education programs.',
      image: '/images/sponsor.jpg',
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">German UDS Ecosystem</h1>
            <p className="text-lg text-[#0a0f4a]">Understanding the structure and synergy of our organization</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4 mb-12 place-items-center">
            {entities.map((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[92%] h-[456px] rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
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

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Shareholding Structure</h1>
            <p className="text-lg text-[#0a0f4a]">Understanding the ownership distribution of German UDS</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 items-stretch mt-6"
          >
            <div className="w-full md:w-[45%]">
              <div className="relative w-full overflow-hidden rounded-xl h-full">
                <Image
                  src="/shareholding_structures.png"
                  alt="Shareholding Structure"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="w-full md:w-[55%] grid grid-rows-3 gap-3">
              {shares.map((share, index) => (
                <div
                  key={index}
                  className="min-h-[100px] flex bg-white text-[#0a0f4a] border border-gray-300 px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex-col justify-center"
                >
                  <div>
                    <div className="text-base font-extrabold text-orange-400 mb-1">
                      {share.percentage}%
                    </div>
                    <h3 className="font-semibold text-sm mb-1 leading-tight">
                      {share.holder}
                    </h3>
                    <hr className="w-full border-gray-300 mb-1" />
                    <p className="text-sm leading-tight">
                      Represents {share.percentage}% of total shareholding in the organization.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Financial Support & Participation</h1>
            <p className="text-lg text-[#0a0f4a]">Join us in shaping the future of digital education</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-14 gap-x-4 mb-12 place-items-center">
            {financialOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[92%] h-[456px] rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
              >
                <div className="relative w-full h-[352px]">
                  <Image src={option.image} alt={option.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-start flex-grow text-left">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{option.title}</h3>
                  <p className="text-[#0a0f4a] text-sm leading-relaxed">
                    {option.description}
                  </p>
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
    </main>
  );
}
