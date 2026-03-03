'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Heart,
  MessageSquare,
  ChevronRight,
  Globe2,
  GraduationCap,
} from 'lucide-react';

export default function Page() {
  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      if (event.message?.includes('ChunkLoadError') || event?.filename?.includes('page-')) {
        window.location.reload();
      }
    };
    window.addEventListener('error', handler);
    return () => {
      window.removeEventListener('error', handler);
    };
  }, []);

  const quickLinks = [
    {
      icon: Users,
      title: 'Our Team',
      desc: 'Meet the people behind the Foundation.',
      href: '/team',
      accent: 'orange',
      large: true,
    },
    {
      icon: Target,
      title: 'Our Values',
      desc: 'Guiding principles and core beliefs.',
      href: '/values',
      accent: 'blue',
      large: false,
    },
    {
      icon: Lightbulb,
      title: 'Funding',
      desc: 'Support us, scholarships, and projects.',
      href: '/funding',
      accent: 'blue',
      large: false,
    },
    {
      icon: Heart,
      title: 'Get Involved',
      desc: 'Discover how you can support the mission.',
      href: '/get-involved',
      accent: 'orange',
      large: true,
    },
    {
      icon: MessageSquare,
      title: 'Contact',
      desc: 'Reach out to the Foundation team.',
      href: '/contact',
      accent: 'blue',
      large: false,
    },
    {
      icon: Globe2,
      title: 'Global Ecosystem',
      desc: 'Understand the German UDS ecosystem.',
      href: '/ecosystem',
      accent: 'blue',
      large: false,
    },
  ];

  const accentStyles: Record<string, { bg: string; hover: string; border: string; icon: string; barGradient: string }> = {
    orange: { bg: 'from-orange-50 to-amber-50', hover: 'group-hover:from-orange-100 group-hover:to-amber-100', border: 'group-hover:border-orange-300', icon: 'text-orange-600', barGradient: 'from-orange-400 to-orange-600' },
    blue: { bg: 'from-blue-50 to-sky-50', hover: 'group-hover:from-blue-100 group-hover:to-sky-100', border: 'group-hover:border-blue-300', icon: 'text-blue-600', barGradient: 'from-blue-400 to-blue-600' },
  };

  return (
    <>
      <Head>
        <title>Empowering Digital Education – German UDS</title>
        <meta
          name="description"
          content="Join us in shaping a future where education is inclusive, global, and driven by innovation."
        />
        <meta name="language" content="en" />
      </Head>

      <main className="scroll-smooth">
        {/* Hero: full-screen dark theme with background image, text on the left */}
        <section className="relative overflow-hidden min-h-screen flex items-center bg-[#1a1f2e]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/abstract-bg.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e]/60 via-[#1a1f2e]/45 to-[#1a1f2e]/30" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e]/25 via-transparent to-[#1a1f2e]/35" aria-hidden />
          </div>

          <div className="relative w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="pl-1 border-l-4 border-[#0066FF] border-opacity-90">
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-[1.15] tracking-tight pt-0.5"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                  >
                    Empowering Digital Education
                  </motion.h1>
                </div>

                <motion.p
                  className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Join us in shaping a future where education is inclusive, global, and driven by innovation.
                </motion.p>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                >
                  <motion.a
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-500/40 group font-medium"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.a
            href="#discover-section"
            className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('discover-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <ChevronRight className="w-5 h-5 rotate-90" />
            </motion.div>
          </motion.a>
        </section>

        {/* Quick links – Discover More */}
        <section
          id="discover-section"
          className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-blue-50/20 pointer-events-none" />
          <div className="absolute top-20 -right-40 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 -left-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              className="text-left mb-8 sm:mb-10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Discover More
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                Explore our programs, meet our team, and learn how you can be part of our mission
              </p>
            </motion.div>

            {/* Scholarships – below intro text */}
            <motion.a
              href="/funding#scholarships"
              className="group block mb-10 sm:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-blue-50 to-sky-50 p-5 sm:p-6 md:p-8 group-hover:from-blue-100 group-hover:to-sky-100 group-hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-400">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-white/80 shadow-sm flex items-center justify-center shrink-0 ring-1 ring-black/5 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      Scholarships
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                      The Foundation awards 10 scholarships to support talented students pursuing digital education at German University of Digital Science. Funding covers tuition only (living expenses are not included). Learn about eligibility, application deadlines, and how to apply.
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm group-hover:gap-3 transition-all">
                      Apply or learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {quickLinks.map((item, index) => {
                const Icon = item.icon;
                const style = accentStyles[item.accent];
                const isLarge = item.large;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`group relative cursor-pointer block ${isLarge ? 'lg:col-span-2' : ''}`}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: index * 0.06, duration: 0.5, ease: 'easeOut' }}
                    whileHover={{ y: -6, scale: 1.01 }}
                  >
                    <div
                      className={`relative h-full p-6 rounded-2xl border-2 border-gray-100 bg-gradient-to-br ${style.bg} ${style.hover} ${style.border} shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden`}
                    >
                      {/* Accent bar on hover */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${style.barGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl`} />
                      <div className="relative flex flex-col h-full">
                        <div className={`w-12 h-12 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mb-4 ring-1 ring-black/5 group-hover:scale-110 transition-transform duration-300 ${style.icon}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                          {item.desc}
                        </p>
                        <div className={`flex items-center gap-2 font-semibold text-sm ${style.icon}`}>
                          <span>Explore</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
