'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Values() {
  const beliefs = [
    {
      title: "Rethinking Education",
      description: "Transforming traditional education models to meet the demands of the digital age",
      image: "/beliefs1.png",
    },
    {
      title: "Supporting Visionaries",
      description: "Empowering innovative thinkers who shape the future of digital education",
      image: "/beliefs2.png",
    },
    {
      title: "Digital Education",
      description: "Making quality education accessible through cutting-edge digital platforms",
      image: "/beliefs3.png",
    },
    {
      title: "Global Education",
      description: "Breaking down geographical barriers to create a worldwide learning community",
      image: "/beliefs4.png",
    },
    {
      title: "Harmony between AI and Humans",
      description: "Fostering a balanced integration of artificial intelligence in education",
      image: "/beliefs5.png",
    },
  ];

  const guidingPrinciples = [
    {
      title: "Shape the Digital Future",
      description: "Leading innovation in digital education and research",
      image: "/principle1.jpg",
    },
    {
      title: "Promote Young Talent",
      description: "Nurturing the next generation of digital innovators",
      image: "/principle3.jpg",
      objectPosition: "object-[30%]"
    },
    {
      title: "Establish Digital Science",
      description: "Creating new standards in digital academic excellence",
      image: "/principle2.jpg",
    },
    {
      title: "Support Education",
      description: "Developing essential competencies for the digital age",
      image: "/principle4.jpg",
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      {/* Guiding Principles Section */}
      <section id="core-beliefs" className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Guiding Principles</h1>
            <p className="text-xl text-[#0a0f4a] max-w-3xl mx-auto">
              Our guiding principles inspire how we shape, support, and strengthen the digital future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-4 mb-12 place-items-center">
            {guidingPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[92%] h-[456px] rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
              >
                <div className="relative w-full h-[352px]">
                  <Image src={principle.image} alt={principle.title} fill className={`object-cover ${principle.objectPosition || ''}`} />
                </div>
                <div className="p-4 flex flex-col justify-end flex-grow text-left">
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

      {/* Core Beliefs Section */}
      <section id="guiding-principles" className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#000080]">Core Beliefs</h2>
            <p className="text-lg text-[#0a0f4a] max-w-3xl mx-auto">
              Our foundation is built on fundamental beliefs that drive our mission to transform digital education and shape the future of learning
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[300px] h-[380px] rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
              >
                <div className="relative w-full h-[270px]">
                  <Image src={belief.image} alt={belief.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col justify-start text-left flex-grow">
                  <h3 className="text-[#f7931e] text-base font-bold mb-2">{belief.title}</h3>
                  <p className="text-[#0a0f4a] text-sm leading-snug">{belief.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
              <a href="/what-we-do" className="text-white text-sm font-medium">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
