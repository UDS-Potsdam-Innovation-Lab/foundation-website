'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Page() {
  const keyStatements = [
    {
      title: 'Fördern und Finanzieren',
      description: 'Finanzierung der German University of Digital Science durch strategische Initiativen',
      transform: '',
      objectPosition: 'top left',
    },
    {
      title: 'Digitale Gesellschaft gestalten',
      description: 'Aktive Mitgestaltung und Weiterentwicklung der digitalen Zivilgesellschaft',
      transform: 'scaleX(-1)',
      objectPosition: 'center',
    },
    {
      title: 'Digitale Wissenschaft integrieren',
      description: 'Nahtlose Integration der Digitalen Wissenschaft in Forschung und öffentliches Leben',
      transform: 'rotate(180deg)',
      objectPosition: 'bottom left',
    },
    {
      title: 'Bildung neu denken',
      description: 'Führend in der Entwicklung und Umsetzung innovativer digitaler Bildungsmodelle',
      transform: 'scaleY(-1)',
      objectPosition: 'top right',
    },
  ];

  const videoStatements = [
    {
      title: 'Digitale Resilienz',
      description: 'Anpassungsfähigkeit und Stärke durch digitale Befähigung aufbauen',
      videoId: '1092449114',
    },
    {
      title: 'Lebenslanges Lernen',
      description: 'Bildung endet nie – sie entwickelt sich mit dir weiter',
      videoId: '1092448821',
    },
    {
      title: 'Digitale Zukunft',
      description: 'Die technologische Welt von morgen gestalten und mit Vision denken',
      videoId: '1092448406',
    },
    {
      title: 'Stärkung der Universität',
      description: 'Wie die Stiftung täglich den Fortschritt der German UDS vorantreibt',
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
      {/* Über uns Abschnitt */}
      <section className="scroll-mt-32 h-[calc(100vh-6rem)] relative z-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-[#000080]">Über uns</h1>
            <p className="text-lg text-[#0a0f4a] text-center max-w-4xl mx-auto leading-relaxed">
              Die German UDS Foundation unterstützt die German University of Digital Science durch die Förderung
              innovativer Bildung und Forschung im Bereich der Digitalwissenschaften. Unsere Mission ist es, die digitale
              Transformation voranzutreiben, digitale Kompetenzen in die Gesellschaft zu integrieren und eine inklusive,
              zukunftsfähige digitale Welt zu gestalten
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-[75vh]">
            {/* Linkes Bild */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full rounded-xl overflow-hidden shadow-xl lg:col-span-3"
            >
              <Image
                src="/why_foundation.png"
                alt="Warum Stiftung"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            {/* Rechte Seite: 4 Boxen */}
            <div className="lg:col-span-2 h-full flex flex-col gap-4">
              {keyStatements.map((statement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:ring-2 hover:ring-orange-300 overflow-hidden flex flex-col"
                >
                  {/* Bild oben */}
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

                  {/* Text */}
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

      {/* Stimmen Abschnitt */}
      <section className="py-20 mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#000080] mb-4">Stimmen der Stiftung</h2>
            <p className="text-lg text-[#0a0f4a] max-w-3xl mx-auto">
              Erfahre, warum unsere Kernmitglieder an die Mission der German UDS Foundation glauben
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
                      <div className="bg-black bg-opacity-50 w-10 h-10 flex items-center justify-center rounded-full text-white text-2xl absolute bottom-2 right-2">
                        ▶
                      </div>
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

      {/* Mehr erfahren Abschnitt */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
              <a href="/de/values" className="text-white text-sm font-medium">
                Mehr erfahren
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
