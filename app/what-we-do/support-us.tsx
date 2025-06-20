'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Image from 'next/image';

export default function SupportUs() {
  const supportMethods = [
    {
      title: 'Donations',
      description: 'Support our initiatives with flexible giving options.',
      image: '/support/1.png',
    },
    {
      title: 'Endowments',
      description: 'Leave a legacy through sustainable funding.',
      image: '/support/2.png',
    },
    {
      title: 'Project Support',
      description: 'Back specific projects that align with your interests.',
      image: '/support/3.png',
    },
    {
      title: 'Corporate Partnerships',
      description: 'Collaborate with us to drive innovation.',
      image: '/support/4.png',
    },
    {
      title: 'Research Funding',
      description: 'Fuel groundbreaking research and education.',
      image: '/support/5.png',
    },
    {
      title: 'Infrastructure Support',
      description: 'Help build and maintain our digital infrastructure.',
      image: '/support/6.png',
    },
  ];

  return (
    <section className="py-20 bg-[#c3dbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Support Our Mission"
          subtitle="Join us in transforming digital education through your generous support"
        />

        <style jsx>{`
          h2 + p {
            color: #0a0f4a !important;
          }
        `}</style>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4 mb-12 place-items-center">
          {supportMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-[92%] h-[456px] rounded-tr-none rounded-tl-none rounded-bl-none rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
            >
              <div className="relative w-full h-[352px]">
                <Image
                  src={method.image}
                  alt={method.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-end flex-grow text-left">
                <h3 className="text-[#f7931e] font-bold text-base mb-2">{method.title}</h3>
                <p className="text-[#0a0f4a] text-sm whitespace-pre-line leading-relaxed">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full bg-[#e6f0fc] py-8">
          <div className="max-w-4xl mx-auto text-center text-[#0a0f4a]">
            <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
              <h3 className="text-lg font-bold text-white">Tax Benefits</h3>
            </div>
            <p className="text-sm mt-3">All donations are tax-deductible. Documentation will be provided for your records.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
