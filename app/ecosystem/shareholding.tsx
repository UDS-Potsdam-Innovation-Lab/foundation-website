'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/ui/SectionTitle';

export default function Shareholding() {
  const shares = [
    {
      holder: 'German UDS Foundation',
      percentage: 70,
    },
    {
      holder: 'Innovation GmbH',
      percentage: 20,
    },
    {
      holder: 'Natural Persons',
      percentage: 10,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#001B3F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Shareholding Structure"
          subtitle="Understanding the ownership distribution of German UDS"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 items-stretch mt-6"
        >
          <div className="w-full md:w-[45%]">
            <div className="relative w-full overflow-hidden rounded-xl">
              <Image
                src="/shareholding_structures.png"
                alt="Shareholding Structure"
                width={400}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-[55%] grid grid-rows-3 gap-3">
            {shares.map((share, index) => (
              <div
                key={index}
                className="min-h-[100px] flex bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg px-4 py-3 rounded-xl transition-all duration-300 hover:from-orange-500 hover:to-orange-600 hover:shadow-xl group flex-col justify-center"
              >
                <div>
                  <div className="text-base font-extrabold text-orange-400 group-hover:text-white transition-colors duration-300 mb-1">
                    {share.percentage}%
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1 leading-tight">
                    {share.holder}
                  </h3>
                  <hr className="w-full border-white/40 mb-1" />
                  <p className="text-white/90 text-xs leading-tight">
                    Represents {share.percentage}% of total shareholding in the organization.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
