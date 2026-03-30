'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, FileText, ArrowRight } from 'lucide-react';

const VOICE_VIDEOS = [
  { title: 'Digitale Zukunft', description: 'Die technologische Welt von morgen gestalten und mit Vision denken', videoId: '1092448406' },
  { title: 'Lebenslanges Lernen', description: 'Bildung endet nie – sie entwickelt sich mit dir weiter', videoId: '1092448821' },
  { title: 'Digitale Resilienz', description: 'Anpassungsfähigkeit und Stärke durch digitale Befähigung aufbauen', videoId: '1092449114' },
  { title: 'Stärkung der Universität', description: 'Wie die Stiftung täglich den Fortschritt der German UDS vorantreibt', videoId: '1094752301' },
];

/** Public file: Satzung German University of Digital Science Foundation June 2025.pdf */
const STATUTES_PDF_HREF =
  '/Satzung%20German%20University%20of%20Digital%20Science%20Foundation%20June%202025.pdf';

export default function Team() {
  const [activeVideos, setActiveVideos] = useState<boolean[]>(Array(VOICE_VIDEOS.length).fill(false));

  const handlePlay = (index: number) => {
    setActiveVideos((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };
  const teamMembers = [
    {
      name: 'Prof. Dr. Mike Friedrichsen',
      title: 'Vorstandsvorsitzender',
      email: 'mike.friedrichsen@german-uds.de',
      image: '/Mike-1.jpg',
      videoUrl: 'https://player.vimeo.com/video/1092448322?badge=0&autopause=0&app_id=58479',
      bio: 'Mike Friedrichsen war 25 Jahre Professor für Wirtschaftsinformatik und Digitale Medien an der Hochschule der Medien Stuttgart und ist Gründungsstifter der German UDS Foundation. Seit 2023 ist er Mitbegründer und Gründungspräsident der German University of Digital Science sowie Geschäftsführer der Trägergesellschaft German UDS gGmbH.',
    },
    {
      name: 'Syster Friedrichsen',
      title: 'Vorständin',
      email: 'syster.friedrichsen@foundation.german-uds.de',
      image: '/syster_f.jpg',
      videoUrl: 'https://player.vimeo.com/video/1092448702?badge=0&autopause=0&app_id=58479',
      bio: 'Syster Friedrichsen ist geschäftsführende Gesellschafterin der ditcom GmbH und der FB CloudHouse GmbH. Nach ihrem Studium der Kommunikationswissenschaften und Geographie in Mainz und Berlin war sie als Projektleiterin tätig und hatte verschiedene Geschäftsführungspositionen in Unternehmen der Kommunikationsbranche inne.',
    },
    {
      name: 'Wulf Wersig',
      title: 'Vorsitzender des Stiftungsrats',
      email: 'wulf.wersig@foundation.german-uds.de',
      image: '/wulf_w.jpg',
      videoUrl: 'https://player.vimeo.com/video/1092449059?badge=0&autopause=0&app_id=58479',
      bio: 'Wulf Wersig war bis 2016 Schulleiter und Geschäftsführer des Regionalen Berufsbildungszentrums Wirtschaft in Kiel – Träger des Deutschen Schulpreises. Nach seinem Studium der Volkswirtschaftslehre und Wirtschaftspädagogik in Kiel und Berlin setzte er die digitale Transformation aktiv in seinem beruflichen Umfeld um. Von 2017 bis 2023 war er Geschäftsführer der Trägergesellschaft German UDS gGmbH.',
    },
    {
      name: 'Marie Greune-Martin',
      title: 'Assistentin des Vorstands',
      email: 'marie.greunemartin@german-uds.de',
      image: '/Marie.png',
      bio: 'Marie Greune-Martin ist Assistentin der Geschäftsführung an der German University of Digital Sciences und arbeitet dort seit Juni 2025. Sie hat einen Masterabschluss in Psychologie, studierte in Erfurt und Jena und absolvierte eine Zusatzqualifikation in Praktischer Personalwirtschaft. Vor ihrer Tätigkeit bei der German UDS arbeitete sie im Bildungssektor und unterstützte Schulen sowie die Entwicklung von Schülerinnen und Schülern.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (carouselOpen) {
      document.getElementById('team-featured')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [carouselOpen]);

  useEffect(() => {
    if (!showVideo || !iframeRef.current) return;
    let isMounted = true;
    (async () => {
      const { default: Player } = await import('@vimeo/player');
      if (!iframeRef.current || !isMounted) return;
      const player = new Player(iframeRef.current);
      playerRef.current = player;
      player.setLoop(false).catch(() => {});
      player.on('ended', async () => {
        try {
          await player.pause();
          await player.unload();
        } catch {}
        if (isMounted) setShowVideo(false);
      });
    })();
    return () => {
      isMounted = false;
      if (playerRef.current?.destroy) playerRef.current.destroy();
      playerRef.current = null;
    };
  }, [showVideo, currentIndex]);

  const goTo = (index: number, newDirection: number) => {
    setShowVideo(false);
    setDirection(newDirection);
    setCurrentIndex(index);
  };

  const paginate = (delta: number) => {
    const next = (currentIndex + delta + teamMembers.length) % teamMembers.length;
    goTo(next, delta);
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 400 : -400, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 400 : -400, opacity: 0 }),
  };

  return (
    <main className="pt-24 bg-gradient-to-b from-white to-blue-100 scroll-smooth min-h-screen">
      <section className="pt-12 pb-64 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div
            id="team-about"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl bg-white/70 shadow-card border border-gray-100 px-5 py-8 sm:px-8 sm:py-10"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-[#dbeafe] blur-3xl opacity-60" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 bg-[#bfdbfe] blur-3xl opacity-50" />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 text-left"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Über uns
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Die German UDS Foundation unterstützt die German University of Digital Science durch die
                  Förderung innovativer Bildungs- und Forschungsprojekte im Bereich der digitalen
                  Wissenschaften. Die Stiftung ist offiziell anerkannt durch die Senatsverwaltung für
                  Justiz und Verbraucherschutz.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Unser Team header */}
          <motion.div
            id="team-grid"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-left mb-4"
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Unser Team
            </motion.h2>
          </motion.div>

          {/* Grid of all team members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.button
                key={index}
                type="button"
                className="group text-left cursor-pointer"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  goTo(index, index > currentIndex ? 1 : -1);
                  setCarouselOpen(true);
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="aspect-[3/4] relative bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-[#0066FF] text-sm font-medium">{member.title}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Featured carousel – shown only when a profile is clicked */}
          {carouselOpen && (
          <div id="team-featured" className="relative mt-12">
            <div className="max-w-4xl mx-auto relative min-h-[420px] md:h-[500px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="absolute inset-0 w-full"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 min-h-[400px] md:h-[480px] w-full flex flex-col relative">
                    <button
                      type="button"
                      onClick={() => setCarouselOpen(false)}
                      className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label="Profil schließen"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    {showVideo && teamMembers[currentIndex].videoUrl ? (
                      <div className="relative p-6 h-full flex flex-col">
                        <div className="relative w-full flex-1 min-h-0 rounded-xl overflow-hidden bg-black">
                          <iframe
                            ref={iframeRef}
                            src={teamMembers[currentIndex].videoUrl}
                            title={`Video-Intro für ${teamMembers[currentIndex].name}`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                          />
                        </div>
                        <div className="flex justify-center mt-6">
                          <button
                            type="button"
                            onClick={() => setShowVideo(false)}
                            className="px-6 py-2.5 bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl font-medium transition-colors"
                          >
                            Zurück zum Profil
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-0 h-full min-h-0 flex flex-col md:flex-row">
                        <div className="relative bg-gray-100 flex items-center justify-center p-4 md:p-8 shrink-0 order-2 md:order-1">
                          <div className="relative w-[140px] h-[180px] sm:w-[180px] sm:h-[220px] md:w-[280px] md:h-[360px] rounded-2xl overflow-hidden bg-gray-200 shadow-inner border border-gray-200/80">
                            <Image
                              src={teamMembers[currentIndex].image}
                              alt={teamMembers[currentIndex].name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority
                            />
                          </div>
                        </div>
                        <div className="p-4 sm:p-8 md:p-10 flex flex-col justify-between min-h-0 flex-1 order-1 md:order-2">
                          <div className="min-h-0 flex-1 overflow-y-auto">
                            <motion.h2
                              className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2"
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.15 }}
                            >
                              {teamMembers[currentIndex].name}
                            </motion.h2>
                            <motion.p
                              className="text-base md:text-lg text-[#0066FF] font-semibold mb-2 md:mb-4"
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {teamMembers[currentIndex].title}
                            </motion.p>
                            <motion.p
                              className="text-gray-600 leading-relaxed text-sm mb-4 md:mb-6 max-h-[120px] md:max-h-none overflow-y-auto md:overflow-visible"
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.25 }}
                            >
                              {teamMembers[currentIndex].bio}
                            </motion.p>
                          </div>
                          <div className="flex flex-wrap gap-2 md:gap-3 pt-3 flex-shrink-0 border-t border-gray-100 md:border-0 md:pt-0">
                            <a
                              href={`mailto:${teamMembers[currentIndex].email}`}
                              className="inline-flex items-center px-5 py-2.5 bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl font-medium transition-colors"
                            >
                              Kontakt
                            </a>
                            {teamMembers[currentIndex].videoUrl && (
                              <button
                                type="button"
                                onClick={() => setShowVideo(true)}
                                className="inline-flex items-center px-5 py-2.5 bg-white border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white rounded-xl font-medium transition-colors"
                              >
                                Kurzvorstellung
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => paginate(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-colors text-gray-700"
                aria-label="Vorheriges Mitglied"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-colors text-gray-700"
                aria-label="Nächstes Mitglied"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index, index > currentIndex ? 1 : -1)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-[#0066FF] w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                    aria-label={`Mitglied ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          )}

          {/* Voices of the Foundation - Stimmen der Stiftung */}
          <section id="voices" className="scroll-mt-24 py-10 sm:py-16 bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Stimmen der Stiftung
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
                  Hören Sie, warum unsere Vorstandsmitglieder an die Mission der German UDS Foundation
                  glauben
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                {VOICE_VIDEOS.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="group relative"
                  >
                    <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-md hover:shadow-xl hover:border-[#0066FF]/30 transition-all duration-300">
                      <div className="relative aspect-video overflow-hidden">
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
                            className="absolute inset-0 w-full h-full flex items-end justify-start cursor-pointer group/play p-4"
                            style={{
                              backgroundImage: `url(https://vumbnail.com/${video.videoId}.jpg)`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            aria-label={`Video abspielen: ${video.title}`}
                          >
                            <div className="absolute inset-0 bg-black/20 group-hover/play:bg-black/30 transition-colors" />
                            <span className="relative z-10 w-16 h-16 rounded-full bg-[#0066FF]/90 group-hover/play:bg-[#0066FF] flex items-center justify-center text-white shadow-lg transition-transform group-hover/play:scale-110">
                              <span className="text-2xl ml-1">▶</span>
                            </span>
                          </button>
                        )}
                      </div>
                      <div className="p-4 sm:p-5">
                        <h3 className="text-[#0066FF] font-bold text-sm sm:text-base mb-1.5 sm:mb-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stiftungssatzung - PDF download (Seitenende, ohne Überschrift) */}
          <section id="statutes" className="relative scroll-mt-24 py-8 overflow-hidden bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.a
                href={STATUTES_PDF_HREF}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group block relative overflow-hidden rounded-2xl border-2 border-[#0066FF]/20 bg-gradient-to-br from-blue-50 via-white to-orange-50 shadow-lg hover:shadow-xl hover:border-[#0066FF]/40 transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0066FF] to-orange-500" />
                <div className="relative p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0066FF] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Stiftungssatzung der German University of Digital Science Foundation
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] group-hover:bg-[#0052CC] text-white font-semibold shadow-md transition-all shrink-0">
                    PDF herunterladen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
