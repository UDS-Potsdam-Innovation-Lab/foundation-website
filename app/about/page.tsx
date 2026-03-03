'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, Globe, GraduationCap, BookOpen } from 'lucide-react';

const PURPOSE_ICONS = [Building2, Globe, GraduationCap, BookOpen];

export default function Page() {
  const purposes = [
    { title: 'Support German UDS', description: 'Promoting and financing the German University of Digital Science through strategic initiatives and partnerships', image: '/support-german-uds.jpg', objectPosition: 'center top' },
    { title: 'Global Cooperation', description: 'Fostering international partnerships and collaboration to advance digital education worldwide', image: '/support-german-uds.jpg', objectPosition: 'left center' },
    { title: 'Campus of Virtual Education (COVE)', description: 'Pioneering virtual learning environments and innovative digital education platforms', image: '/support-german-uds.jpg', objectPosition: 'right center' },
    { title: 'open German UDS', description: 'Providing accessible, high-quality digital education through our online learning platform', image: '/support-german-uds.jpg', objectPosition: 'center bottom' },
  ];
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
    <main className="pt-24 bg-gradient-to-b from-white to-blue-100 scroll-smooth min-h-screen">

      {/* About Section */}
      <section className="scroll-mt-32 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">About Us</h1>
            <span className="section-title-accent mx-auto mb-6 block" aria-hidden />
            <p className="text-lg text-[#0a0f4a] text-center max-w-4xl mx-auto leading-relaxed">
              The German UDS Foundation supports the German University of Digital Science by funding innovative education and research in the field of digital science. Our mission is to advance digital transformation, promote the integration of digital competencies across all sectors of society, and contribute to shaping an inclusive, future-oriented digital world. The foundation operates with official recognition, acknowledged by the Senatsverwaltung für Justiz und Verbraucherschutz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-64 sm:h-80 lg:h-full rounded-2xl overflow-hidden shadow-card lg:col-span-3"
            >
              <Image
                src="/why_foundation.png"
                alt="Why Foundation"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 60vw"
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
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex-1 bg-white rounded-3xl border-2 border-gray-100 hover:border-[#0066FF] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full h-28 overflow-hidden rounded-t-2xl">
                    <div
                      className="absolute inset-0"
                      style={{ transform: statement.transform }}
                    >
                      <Image
                        src="/about_us_abstract.png"
                        alt=""
                        fill
                        className="object-cover"
                        style={{ objectPosition: statement.objectPosition }}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <h3 className="text-[#0066FF] font-semibold text-lg mb-1.5">{statement.title}</h3>
                    <p className="text-[#0a0f4a] text-sm leading-snug">{statement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section id="purpose" className="scroll-mt-24 py-10 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">Our Purpose</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">Discover how we&apos;re transforming digital education and shaping the future</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {purposes.map((purpose, index) => {
              const Icon = PURPOSE_ICONS[index];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} whileHover={{ y: -6 }} className="group relative">
                  <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-md hover:shadow-xl hover:border-[#0066FF]/30 transition-all duration-300">
                    <div className="flex flex-col min-h-[200px] sm:min-h-[220px] md:h-[280px]">
                      <div className="relative h-24 sm:h-28 md:h-[55%] w-full overflow-hidden shrink-0">
                        <img src={purpose.image} alt={purpose.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: purpose.objectPosition }} />
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF]" />
                        </div>
                      </div>
                      <div className="flex-1 min-h-0 w-full p-4 sm:p-5 flex flex-col justify-start overflow-y-auto">
                        <h3 className="text-[#0066FF] text-sm sm:text-base font-semibold mb-1.5 sm:mb-2">{purpose.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-snug">{purpose.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Voices Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Voices of the Foundation</h2>
            <span className="section-title-accent mx-auto mb-4 block" aria-hidden />
            <p className="text-lg text-[#0a0f4a] max-w-3xl mx-auto">
              Hear why our members of the executive board believe in the mission of the German UDS Foundation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {videoStatements.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-full flex flex-col bg-white rounded-3xl border-2 border-gray-100 hover:border-[#0066FF] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-video rounded-t-2xl overflow-hidden">
                  {activeVideos[index] ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${video.videoId}?autoplay=1`}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      title={video.title}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => handlePlay(index)}
                      className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
                      style={{
                        backgroundImage: `url(https://vumbnail.com/${video.videoId}.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      aria-label={`Play video: ${video.title}`}
                    >
                      <span className="w-14 h-14 rounded-full bg-orange-500/90 group-hover:bg-orange-500 flex items-center justify-center text-white text-2xl shadow-lg transition-transform group-hover:scale-110">
                        ▶
                      </span>
                    </button>
                  )}
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-[#0066FF] font-bold text-base mb-2">{video.title}</h3>
                  <p className="text-[#0a0f4a] text-sm leading-snug">{video.description}</p>
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
            <a
              href="/values"
              className="inline-block px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
