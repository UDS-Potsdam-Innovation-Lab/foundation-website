'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/ui/Button';

export default function Page() {
  const keyStatements = [
    {
      title: 'Promote and Fund',
      description: 'Finance the German University of Digital Science through strategic initiatives',
    },
    {
      title: 'Shape Digital Society',
      description: 'Actively contribute to the development and evolution of digital civil society',
    },
    {
      title: 'Integrate Digital Science',
      description: 'Seamlessly incorporate Digital Science into research and public life',
    },
    {
      title: 'Pioneer Education',
      description: 'Lead the way in developing and implementing innovative digital education models',
    },
  ];

  const videoStatements = [
    {
      title: 'Digital Resilience',
      description: 'Building adaptability and strength through digital empowerment.',
      videoId: '1092449114',
    },
    {
      title: 'Lifelong Learning',
      description: 'Education never stops — it evolves with you.',
      videoId: '1092448821',
    },
    {
      title: 'Digital Future',
      description: 'Envisioning and shaping the technological world of tomorrow.',
      videoId: '1092448406',
    },
    {
      title: 'Empowering the University',
      description: 'How the Foundation fuels UDS progress every day.',
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
      <section className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">About Us</h1>
            <p className="text-lg text-[#0a0f4a] text-center max-w-4xl mx-auto leading-relaxed">
  The German UDS Foundation supports the German University of Digital Science by funding innovative education and research in digital science. Our mission is to promote digital transformation, integrate digital skills into society, and shape an inclusive, future-ready digital world.
</p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full min-h-[650px] rounded-xl overflow-hidden"
            >
              <Image
                src="/why_foundation.png"
                alt="Team Member Photo"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            <div className="grid grid-cols-1 gap-1 justify-center items-center">
              {keyStatements.map((statement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="w-full h-[100px] rounded-br-2xl overflow-hidden border border-gray-300 bg-[#e0effa] transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col justify-center text-left p-4"
                >
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{statement.title}</h3>
                  <p className="text-[#0a0f4a] text-sm leading-relaxed">{statement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voices Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#000080] mb-4">Voices of the Foundation</h2>
            <p className="text-lg text-[#0a0f4a] max-w-3xl mx-auto">
              Hear why our core members believe in the mission of the German UDS Foundation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {videoStatements.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="w-full flex flex-col rounded-br-2xl border border-gray-300 transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500"
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
                      <div className="bg-black bg-opacity-50 w-10 h-10 flex items-center justify-center rounded-full text-white text-2xl absolute bottom-2 right-2">▶</div>
                    </div>
                  )}
                </div>
                <div className="bg-white p-4 rounded-br-2xl">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{video.title}</h3>
                  <p className="text-[#0a0f4a] text-sm">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More Section */}
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
