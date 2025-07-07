'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Values() {
  const beliefs = [
    {
      title: "Bildung neu denken",
      description: "Traditionelle Bildungsmodelle transformieren, um den Anforderungen des digitalen Zeitalters gerecht zu werden",
      image: "/beliefs1.png",
    },
    {
      title: "Visionäre unterstützen",
      description: "Innovative Denker befähigen, die die Zukunft der digitalen Bildung gestalten",
      image: "/beliefs2.png",
    },
    {
      title: "Digitale Bildung",
      description: "Zugang zu hochwertiger Bildung über fortschrittliche digitale Plattformen ermöglichen",
      image: "/beliefs3.png",
    },
    {
      title: "Globale Bildung",
      description: "Geografische Barrieren überwinden, um eine weltweite Lerngemeinschaft zu schaffen",
      image: "/beliefs4.png",
    },
    {
      title: "Harmonie zwischen KI und Mensch",
      description: "Ein ausgewogenes Zusammenspiel von künstlicher Intelligenz und Bildung fördern",
      image: "/beliefs5.png",
    },
  ];

  const guidingPrinciples = [
    {
      title: "Die digitale Zukunft gestalten",
      description: "Innovation in digitaler Bildung und Forschung vorantreiben",
      image: "/principle1.jpg",
    },
    {
      title: "Junge Talente fördern",
      description: "Die nächste Generation digitaler Innovatoren unterstützen",
      image: "/principle3.jpg",
      objectPosition: "object-[30%]"
    },
    {
      title: "Digitale Wissenschaft etablieren",
      description: "Neue Standards in digitaler akademischer Exzellenz setzen",
      image: "/principle2.jpg",
    },
    {
      title: "Bildung unterstützen",
      description: "Wichtige Kompetenzen für das digitale Zeitalter entwickeln",
      image: "/principle4.jpg",
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      {/* Leitprinzipien */}
      <section id="core-beliefs" className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Leitprinzipien</h1>
            <p className="text-xl text-[#0a0f4a] max-w-3xl mx-auto">
              Unsere Leitprinzipien inspirieren uns, die digitale Zukunft zu gestalten, zu fördern und zu stärken
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 overflow-x-hidden">
            {guidingPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[300px] h-[420px] flex flex-col rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500"
              >
                <div className="relative w-full h-[260px]">
                  <Image
                    src={principle.image}
                    alt={principle.title}
                    fill
                    className={`object-cover ${principle.objectPosition || ''}`}
                  />
                </div>
                <div className="p-4 flex flex-col justify-end flex-grow text-left overflow-hidden">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{principle.title}</h3>
                  <p className="text-[#0a0f4a] text-sm whitespace-pre-line leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grundüberzeugungen */}
      <section id="guiding-principles" className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4 text-center text-[#000080]"
          >
            Grundüberzeugungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#0a0f4a] max-w-3xl mx-auto mb-12 text-center"
          >
            Unsere Stiftung basiert auf grundlegenden Überzeugungen, die unsere Mission leiten, digitale Bildung zu transformieren und die Zukunft des Lernens zu gestalten
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[300px] h-[420px] flex flex-col rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500"
              >
                <div className="relative w-full h-[260px]">
                  <Image src={belief.image} alt={belief.title} fill className="object-cover" />
                </div>
                <div className="p-4 h-[160px] flex flex-col justify-start text-left">
                  <h3 className="text-[#f7931e] text-base font-bold mb-2">{belief.title}</h3>
                  <p className="text-[#0a0f4a] text-sm leading-snug">{belief.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
              <a href="/de/what-we-do" className="text-white text-sm font-medium">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
