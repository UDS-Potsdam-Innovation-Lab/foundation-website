'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/ui/Button';

export default function Page() {
  const supportWays = [
    {
      title: 'Donations',
      description: 'Support our mission with a one-time or recurring donation to help fund digital education initiatives.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    {
      title: 'Endowments',
      description: 'Create a lasting impact through endowments that support long-term educational programs.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
      title: 'Contributions',
      description: 'Contribute your expertise, time, or resources to help advance our digital education mission.',
      image: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg',
    },
    {
      title: 'Project Funding',
      description: 'Fund specific projects that align with your interests in digital education and innovation.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Get Involved</h1>
            <p className="text-lg text-[#0a0f4a]">
              Join us in our mission to transform digital education and create lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-14 gap-x-4 mb-12 place-items-center">
            {supportWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[92%] h-[456px] rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
              >
                <div className="relative w-full h-[300px]">
                  <Image src={way.image} alt={way.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{way.title}</h3>
                  <p className="text-[#0a0f4a] text-sm mb-2">{way.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-screen bg-[#d7e7f8] bg-opacity-30 px-4 py-8 text-center"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-[#000080]">Tax Benefits</h2>
            <p className="text-[#0a0f4a] max-w-3xl mx-auto">
              Your support is tax-deductible. As a registered non-profit organization, we provide all necessary documentation for tax purposes.
            </p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <Button href="/contact" variant="primary">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
