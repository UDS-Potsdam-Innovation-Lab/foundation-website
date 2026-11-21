'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  Building2,
  ArrowRight,
} from 'lucide-react';

const ENTITY_ICONS = [GraduationCap, Building2];

export default function Page() {
  const entities = [
    {
      title: 'German UDS',
      description: 'Eine Universität mit Fokus auf digitale Bildung und Forschung, bekannt für ihre Stärke in digitaler Lehre und wissenschaftlicher Exzellenz.',
      image: '/german-uds.jpg',
    },
    {
      title: 'German UDS Stiftung',
      description: 'Treibt Finanzierung und Strategie für digitale Bildung voran, bietet gezielte finanzielle Unterstützung und strategische Ausrichtung für die Zukunft.',
      image: '/german-uds-foundation.jpg',
    },
  ];

  return (
    <main className="scroll-smooth min-h-screen">
      {/* Hero - gradient, glowing orbs, animated mesh */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-blue-700 to-indigo-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,rgba(234,88,12,0.25),transparent_50%)]" />
        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-orange-400/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              German UDS Ökosystem
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Verständnis für Struktur und Synergien unserer Organisation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Entities - vertical timeline with connectors */}
      <section className="scroll-mt-24 py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Unser Ökosystem
              <span className="block w-12 h-1 rounded-full bg-orange-500 mx-auto mt-2" />
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {entities.map((entity, index) => {
              const Icon = ENTITY_ICONS[index];
              const isLast = index === entities.length - 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Timeline line */}
                  {!isLast && (
                    <div className="absolute left-[17px] sm:left-[23px] top-20 sm:top-24 bottom-0 w-px bg-gradient-to-b from-[#0066FF]/40 via-orange-500/30 to-transparent" />
                  )}
                  {/* Dot - alternate blue and orange */}
                  <div className={`relative z-10 flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg ${index % 2 === 0 ? 'bg-[#0066FF]' : 'bg-orange-500'}`}>
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  {/* Card */}
                  <div className="flex-1 pb-8 sm:pb-12 min-w-0">
                    <div className={`group rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'hover:border-[#0066FF]/20' : 'hover:border-orange-500/30'}`}>
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-48 h-32 sm:h-auto sm:min-h-[180px] shrink-0">
                          <Image
                            src={entity.image}
                            alt={entity.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 192px"
                          />
                        </div>
                        <div className="p-4 sm:p-6 flex flex-col justify-center">
                          <h3 className={`font-bold text-base sm:text-lg mb-1.5 sm:mb-2 ${index % 2 === 0 ? 'text-[#0066FF]' : 'text-orange-600'}`}>{entity.title}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{entity.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
