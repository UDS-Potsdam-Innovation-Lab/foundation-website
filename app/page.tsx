'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <main className="scroll-smooth">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 text-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('/abstract-bg.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
          {/* Glassmorphic box */}
          <div className="bg-[#d0e8ff]/20 backdrop-blur-md rounded-2xl w-full px-5 sm:px-8 md:px-10 py-4 sm:py-6 md:py-6 shadow-md border border-white/30">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,128,0.5)] leading-tight"
            >
              Empowering Digital Education
            </motion.h1>

            {/* Orange underline */}
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
              className="mt-3 text-sm sm:text-base md:text-lg text-white font-medium drop-shadow-[0_0_6px_rgba(0,0,128,0.4)]"
            >
              Join us in shaping a future where education is inclusive, global, and driven by innovation.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <a
              href="/about"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white text-sm sm:text-base font-semibold shadow-md"
            >
              Learn More
            </a>
            <a
              href="/get-involved"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white text-sm sm:text-base font-semibold shadow-md"
            >
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
