'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

export default function Page() {
  const entities = [
    {
      title: 'German UDS',
      icon: '🎓',
      description: 'A university focused on digital-first education and research.',
      details: ['Digital education', 'Research excellence'],
      image: '/german-uds.jpg',
    },
    {
      title: 'German UDS Foundation',
      icon: '🏛️',
      description: 'Drives funding and strategy for digital education.',
      details: ['Funding support', 'Strategic direction'],
      image: '/german-uds-foundation.jpg',
    },
    {
      title: 'German UDS gGmbH',
      icon: '🧾',
      description: 'Manages daily operations and educational programs.',
      details: ['Operations', 'Program management'],
      image: '/german-uds-ggmbh.jpg',
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
      image: '/images/financial-support-and-participation.jpg',
      style: 'object-[0%_0%]'
    },
    {
      title: 'Fund Scholarships',
      description: 'Help students access education by funding scholarships.',
      image: '/images/financial-support-and-participation.jpg',
      style: 'object-[25%_50%]'
    },
    {
      title: 'Acquire Shares in gGmbH',
      description: 'Be a part of our journey through strategic investment.',
      image: '/images/financial-support-and-participation.jpg',
      style: 'object-[50%_100%]'
    },
    {
      title: 'Sponsor Programs',
      description: 'Support specific research or education programs.',
      image: '/images/financial-support-and-participation.jpg',
      style: 'object-[75%_25%]'
    },
  ];

  const resources = [
    {
      title: 'German UDS Brochure',
      description: 'Download our comprehensive overview of German UDS',
      link: 'https://german-uds.de/cta',
    },
    {
      title: 'Scientific Reports',
      description: 'Access our latest research and scientific publications',
      link: 'https://german-uds.de/scientific-reports',
    },
    {
      title: 'Digital Education Podcast',
      description: 'Listen to our weekly discussions with industry experts',
      link: 'https://german-uds.de/podcasts',
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-6">
            {financialOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-md rounded-br-2xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-orange-400 hover:shadow-lg hover:ring-2 hover:ring-orange-500"
              >
                <div className={`relative h-40 w-full`}>
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className={`object-cover ${option.style}`}
                  />
                </div>
                <div className="bg-white px-4 py-5">
                  <h3 className="text-sm font-bold text-[#f7931e] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-[#0a0f4a] leading-relaxed">
                    {option.description}
                  </p>
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
