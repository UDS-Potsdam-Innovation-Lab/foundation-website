'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/ui/SectionTitle';

export default function Shareholding() {
  const shares = [
    {
      holder: 'German UDS Foundation',
      percentage: 70,
      color: 'from-blue-500 to-blue-600',
    },
    {
      holder: 'Innovation GmbH',
      percentage: 20,
      color: 'from-orange-500 to-orange-600',
    },
    {
      holder: 'Natural Persons',
      percentage: 10,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#001B3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Shareholding Structure"
          subtitle="Understanding the ownership distribution of German UDS"
        />

        <div className="w-full max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] w-full"
          >
            <Image
              src="/shareholding_structures.png"
              alt="Shareholding Structure"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              quality={100}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {shares.map((share, index) => (
            <div
              key={index}
              className="card-blue-gradient p-6 rounded-xl text-white hover:shadow-glow transition-all duration-300"
            >
              <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${share.color} flex items-center justify-center text-white text-xl font-bold`}>
                {share.percentage}%
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">{share.holder}</h3>
              <p className="text-body">
                Representing {share.percentage}% of total shareholding
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}