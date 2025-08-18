'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Page() {
  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      if (event.message?.includes('ChunkLoadError') || event?.filename?.includes('page-')) {
        console.warn('ChunkLoadError detected, reloading...');
        window.location.reload();
      }
    };
    window.addEventListener('error', handler);
    return () => {
      window.removeEventListener('error', handler);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Empowering Digital Education – German UDS</title>
        <meta name="description" content="Join us in shaping a future where education is inclusive, global, and driven by innovation." />
        <meta name="language" content="en" />
      </Head>

      <main className="scroll-smooth">
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 text-center overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-center bg-cover"
            style={{
              backgroundImage: `url('/abstract-bg.png')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
            <div className="bg-[#d0e8ff]/20 backdrop-blur-md rounded-2xl w-full px-8 py-5 shadow-md border border-white/30">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,128,0.5)] leading-tight"
              >
                Empowering Digital Education
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mx-auto mt-2 h-1 w-10 bg-orange-500 rounded-full origin-center"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-4 text-base text-white font-medium leading-relaxed drop-shadow-[0_0_6px_rgba(0,0,128,0.4)]"
              >
                Join us in shaping a future where education is inclusive, global, and driven by innovation.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-6 flex flex-wrap justify-center gap-3"
            >
              <a
                href="/about"
                className="px-5 py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-semibold shadow-md"
              >
                Learn More
              </a>
              <a
                href="/get-involved"
                className="px-5 py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-semibold shadow-md"
              >
                Get Involved
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
