'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Page() {
  const keyStatements = [
    {
      title: 'Promote and Fund',
      description: 'Finance the German University of Digital Science through strategic initiatives',
      transform: '',
      objectPosition: 'top left',
    },
    {
      title: 'Shape Digital Society',
      description: 'Actively contribute to the development and evolution of digital civil society',
      transform: 'scaleX(-1)',
      objectPosition: 'center',
    },
    {
      title: 'Integrate Digital Science',
      description: 'Seamlessly incorporate Digital Science into research and public life',
      transform: 'rotate(180deg)',
      objectPosition: 'bottom left',
    },
    {
      title: 'Pioneer Education',
      description: 'Lead the way in developing and implementing innovative digital education models',
      transform: 'scaleY(-1)',
      objectPosition: 'top right',
    },
  ];

  const videoStatements = [
    {
      title: 'Digital Resilience',
      description: 'Building adaptability and strength through digital empowerment',
      videoId: '1092449114',
    },
    {
      title: 'Lifelong Learning',
      description: 'Education never stops — it evolves with you',
      videoId: '1092448821',
    },
    {
      title: 'Digital Future',
      description: 'Envisioning and shaping the technological world of tomorrow',
      videoId: '1092448406',
    },
    {
      title: 'Empowering the University',
      description: 'How the Foundation fuels UDS progress every day',
      videoId: '1094752301',
    },
  ];

  const [activeVideos, setActiveVideos] = useState(Array(videoStatements.length).fill(false));

  const handlePlay = (index: number) => {
    setActiveVideos((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      videoStatements.forEach((video) => {
        const img = new window.Image();
        img.src = `https://vumbnail.com/${video.videoId}.jpg`;
      });
    }
  }, []);

  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">

      {/* About Section */}
      <section className="scroll-mt-32 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 text-[#000080]">About Us</h1>
            <p className="text-lg text-[#0a0f4a] text-center max-w-4xl mx-auto leading-relaxed">
              The German UDS Foundation supports the German University of Digital Science by funding innovative education and research in the field of digital science. Our mission is to advance digital transformation, promote the integration of digital competencies across all sectors of society, and contribute to shaping an inclusive, future-oriented digital world. The foundation operates with official recognition, acknowledged by the Senatsverwaltung für Justiz und Verbraucherschutz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-64 sm:h-80 lg:h-full rounded-xl overflow-hidden shadow-xl lg:col-span-3"
            >
              <Image
                src="/why_foundation.png"
                alt="Why Foundation"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            {/* Right: Boxes */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {keyStatements.map((statement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-md hover:scale-[1.02] hover:shadow-xl hover:ring-2 hover:ring-orange-300 transition duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full h-24 overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{ transform: statement.transform }}
                    >
                      <Image
                        src="/about_us_abstract.png"
                        alt={statement.title}
                        fill
                        className="object-cover"
                        style={{ objectPosition: statement.objectPosition }}
                      />
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <h3 className="text-[#f7931e] font-semibold text-lg mb-1">{statement.title}</h3>
                    <p className="text-[#0a0f4a] text-sm leading-snug">{statement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voices Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#000080] mb-4">Voices of the Foundation</h2>
            <p className="text-lg text-[#0a0f4a] max-w-3xl mx-auto">
              Hear why our core members believe in the mission of the German UDS Foundation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {videoStatements.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="w-full flex flex-col rounded-br-2xl border border-gray-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 transition duration-300 overflow-hidden"
              >
                <div className="relative aspect-video">
                  {activeVideos[index] ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${video.videoId}?autoplay=1`}
                      className="absolute inset-0 w-full h-full rounded-t-br-2xl"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div
                      onClick={() => handlePlay(index)}
                      className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
                      style={{
                        backgroundImage: `url(https://vumbnail.com/${video.videoId}.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="bg-black bg-opacity-50 w-10 h-10 flex items-center justify-center rounded-full text-white text-2xl absolute bottom-2 right-2">
                        ▶
                      </div>
                    </div>
                  )}
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{video.title}</h3>
                  <p className="text-[#0a0f4a] text-sm">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
              <a href="/values" className="text-white text-sm font-medium">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
