'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Globe,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Landmark,
  FolderKanban,
  Briefcase,
  FlaskConical,
  Server,
  FileText,
  ArrowRight,
  Play,
} from "lucide-react";

const PURPOSE_ICONS = [Building2, Globe, GraduationCap, BookOpen];
const SUPPORT_ICONS = [HeartHandshake, Landmark, FolderKanban, Briefcase, FlaskConical, Server];

const VOICE_VIDEOS = [
  { title: "Digitale Resilienz", description: "Anpassungsfähigkeit und Stärke durch digitale Befähigung aufbauen", videoId: "1092449114" },
  { title: "Lebenslanges Lernen", description: "Bildung endet nie – sie entwickelt sich mit dir weiter", videoId: "1092448821" },
  { title: "Digitale Zukunft", description: "Die technologische Welt von morgen gestalten und mit Vision denken", videoId: "1092448406" },
  { title: "Stärkung der Universität", description: "Wie die Stiftung täglich den Fortschritt der German UDS vorantreibt", videoId: "1094752301" },
];

export default function WhatWeDoPage() {
  const [activeVideos, setActiveVideos] = useState<boolean[]>(Array(VOICE_VIDEOS.length).fill(false));

  const handlePlay = (index: number) => {
    setActiveVideos((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };
  const purposes = [
    {
      title: "Unterstützung der German UDS",
      description:
        "Förderung und Finanzierung der German University of Digital Science durch strategische Initiativen und Partnerschaften",
      image: "/support-german-uds.jpg",
      objectPosition: "center top",
    },
    {
      title: "Globale Zusammenarbeit",
      description:
        "Förderung internationaler Partnerschaften und Kooperationen zur Weiterentwicklung der digitalen Bildung weltweit",
      image: "/support-german-uds.jpg",
      objectPosition: "left center",
    },
    {
      title: "Campus für Virtuelle Bildung (COVE)",
      description:
        "Entwicklung virtueller Lernumgebungen und innovativer digitaler Bildungsplattformen",
      image: "/support-german-uds.jpg",
      objectPosition: "right center",
    },
    {
      title: "Open German UDS",
      description:
        "Bereitstellung zugänglicher und hochwertiger digitaler Bildung über die Online-Lernplattform der German UDS",
      image: "/support-german-uds.jpg",
      objectPosition: "center bottom",
    },
  ];

  const supportMethods = [
    {
      title: "Spenden",
      description: "Unterstützen Sie unsere Initiativen mit flexiblen Spendenoptionen",
      image: "/support/1.png",
    },
    {
      title: "Stiftungen",
      description: "Hinterlassen Sie ein Vermächtnis durch nachhaltige Finanzierung",
      image: "/support/2.png",
    },
    {
      title: "Projektförderung",
      description: "Unterstützen Sie Projekte, die Ihren Interessen entsprechen",
      image: "/support/3.png",
    },
    {
      title: "Unternehmenspartnerschaften",
      description: "Arbeiten Sie mit uns zusammen, um Innovationen voranzutreiben",
      image: "/support/4.png",
    },
    {
      title: "Forschungsförderung",
      description: "Finanzieren Sie bahnbrechende Forschung und Bildung",
      image: "/support/5.png",
    },
    {
      title: "Infrastrukturförderung",
      description: "Helfen Sie beim Aufbau und Erhalt unserer digitalen Infrastruktur",
      image: "/support/6.png",
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-white to-blue-50 scroll-smooth min-h-screen">
      {/* Hero intro - geometric mesh, no blobs */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,102,255,0.12),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(234,88,12,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(0,102,255,0.06),transparent)]" />
          {/* Diagonal lines */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, #0066FF 40px, #0066FF 41px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Was wir tun
            </h1>
            <p className="text-xl text-gray-600">
              Transformation der digitalen Bildung durch strategische Initiativen und Partnerschaften
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Purpose */}
      <section id="purpose" className="relative scroll-mt-24 py-16 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-50"
          animate={{ y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Unsere Schwerpunkte</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Erfahren Sie, wie wir die digitale Bildung transformieren und die Zukunft gestalten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purposes.map((purpose, index) => {
              const Icon = PURPOSE_ICONS[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-md hover:shadow-xl hover:border-[#0066FF]/30 transition-all duration-300">
                    <div className="flex flex-col h-[220px] md:h-[280px]">
                      <div className="relative h-[55%] w-full overflow-hidden">
                        <img
                          src={purpose.image}
                          alt={purpose.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: purpose.objectPosition }}
                        />
                        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                          <Icon className="w-5 h-5 text-[#0066FF]" />
                        </div>
                      </div>
                      <div className="h-[45%] w-full p-5 flex flex-col justify-start">
                        <h3 className="text-[#0066FF] text-base font-semibold mb-2">
                          {purpose.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-snug">
                          {purpose.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statement band - orange gradient (different from Values blue quote) */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 pointer-events-none" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl sm:text-3xl font-medium text-white leading-relaxed drop-shadow-sm">
              Jeder Beitrag hilft uns, eine zugänglichere und innovativere Zukunft für die digitale Bildung zu gestalten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Voices of the Foundation */}
      <section id="voices" className="relative scroll-mt-24 py-20 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-40"
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Stimmen der Stiftung</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hören Sie, warum unsere Vorstandsmitglieder an die Mission der German UDS Foundation glauben
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VOICE_VIDEOS.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
                        className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group/play"
                        style={{
                          backgroundImage: `url(https://vumbnail.com/${video.videoId}.jpg)`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        aria-label={`Video abspielen: ${video.title}`}
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover/play:bg-black/30 transition-colors" />
                        <span className="relative w-16 h-16 rounded-full bg-[#0066FF]/90 group-hover/play:bg-[#0066FF] flex items-center justify-center text-white shadow-lg transition-transform group-hover/play:scale-110">
                          <Play className="w-7 h-7 ml-1 fill-current" />
                        </span>
                      </button>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#0066FF] font-bold text-base mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Our Mission */}
      <section id="support-us" className="relative scroll-mt-24 py-20 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-40"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Unterstützen Sie unsere Mission</h2>
            <p className="mt-2 text-lg text-gray-600">
              in der Transformation der digitalen Bildung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {supportMethods.map((method, index) => {
              const Icon = SUPPORT_ICONS[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:border-orange-500/30 overflow-hidden transition-all duration-300 flex flex-col">
                    <div className="relative w-full aspect-[4/3] min-h-[200px] overflow-hidden">
                      <Image
                        src={method.image}
                        alt={method.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                    <div className="p-5 flex flex-col justify-end flex-grow text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <h3 className="text-[#0066FF] font-bold text-base">{method.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tax Benefits */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.a
            href="/tax-benefits.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group block relative overflow-hidden rounded-2xl border-2 border-orange-500/20 bg-gradient-to-br from-orange-50 via-white to-blue-50 shadow-lg hover:shadow-xl hover:border-orange-500/40 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-400/20 transition-colors" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0066FF]/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:bg-[#0066FF]/15 transition-colors" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500" />
            <div className="relative p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Steuervorteile</h3>
                  <p className="text-sm text-gray-600 mt-1 max-w-xl">
                    Die German UDS Foundation ist berechtigt, Bescheinigungen gemäß §50 Abs.1 EStDV auszustellen.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 group-hover:bg-orange-600 text-white font-semibold shadow-md group-hover:shadow-lg transition-all shrink-0">
                PDF herunterladen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.a>
        </div>
      </section>
    </main>
  );
}
