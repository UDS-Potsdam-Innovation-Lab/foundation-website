'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../components/ui/Button';

export default function Page() {
  const supportWays = [
    {
      title: 'Spenden',
      description:
        'Unterstützen Sie unsere Mission mit einer einmaligen oder regelmäßigen Spende zur Förderung digitaler Bildungsinitiativen.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    {
      title: 'Stiftungen',
      description:
        'Schaffen Sie eine nachhaltige Wirkung durch Stiftungen, die langfristige Bildungsprogramme fördern.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
      title: 'Beiträge',
      description:
        'Bringen Sie Ihr Fachwissen, Ihre Zeit oder Ihre Ressourcen ein, um unsere Mission der digitalen Bildung voranzubringen.',
      image: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg',
    },
    {
      title: 'Projektförderung',
      description:
        'Fördern Sie gezielt Projekte, die Ihren Interessen an digitaler Bildung und Innovation entsprechen.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Engagieren Sie sich</h1>
            <p className="text-lg text-[#0a0f4a]">
              Begleiten Sie uns auf unserer Mission, die digitale Bildung zu transformieren und nachhaltige Wirkung zu erzielen.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-14 gap-x-4 mb-12">
            {supportWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full h-[456px] rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={way.image}
                    alt={way.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{way.title}</h3>
                  <p className="text-[#0a0f4a] text-sm mb-2">{way.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tax Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#d7e7f8] bg-opacity-30 px-6 py-10 text-center"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-[#000080]">Steuervorteile</h2>
            <p className="text-[#0a0f4a] text-base leading-relaxed max-w-4xl mx-auto">
              Ihre Unterstützung ist steuerlich absetzbar. Als gemeinnützige Organisation stellen wir alle erforderlichen Unterlagen für Ihre Steuererklärung bereit.
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
            <Button href="/de/contact" variant="primary">
              Mehr erfahren
            </Button>
          </motion.div>
        </div>

      </section>
    </main>
  );
}
