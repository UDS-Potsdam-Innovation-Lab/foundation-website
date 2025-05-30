'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/ui/SectionTitle';

export default function InternationalMarket() {
  const marketStats = [
    {
      title: 'Global Cooperation',
      description: '50+ international partnerships',
      position: 'top-1/4 left-1/4',
      delay: 0.2,
    },
    {
      title: 'Student Exchange',
      description: '1000+ exchange students annually',
      position: 'top-1/4 right-1/4',
      delay: 0.4,
    },
    {
      title: 'Research Projects',
      description: '30+ collaborative initiatives',
      position: 'bottom-1/3 left-1/3',
      delay: 0.6,
    },
    {
      title: 'Global Outreach',
      description: 'Present in 50+ countries',
      position: 'bottom-1/3 right-1/3',
      delay: 0.8,
    },
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="International Market"
          subtitle="Expanding our global presence in digital education"
        />

        <div className="relative h-[600px] mb-16">
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/international_market.png"
                alt="Global Market Presence"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: stat.delay,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className={`absolute ${stat.position} transform -translate-x-1/2 -translate-y-1/2`}
              >
                <div className="bg-white/90 dark:bg-[#002B5C]/90 p-4 rounded-xl shadow-lg backdrop-blur-sm">
                  <h3 className="text-lg font-bold gradient-text mb-1">{stat.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#002B5C] p-6 rounded-xl hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="ml-4 text-xl font-bold gradient-text">{stat.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}