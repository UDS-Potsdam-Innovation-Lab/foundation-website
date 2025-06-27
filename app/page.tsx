'use client';

import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main className="scroll-smooth">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Brighter blue gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#e0f2ff] via-[#b3d9ff] to-[#6ca8e6]" />

        {/* More visible background image with stronger opacity and overlay blending */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url('/abstract-bg.png')`,
          }}
        />

        {/* Light dark overlay to slightly balance brightness */}
        <div className="absolute inset-0 z-0 bg-black/5" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-[#000080] drop-shadow-md leading-tight"
          >
            Empowering Digital Education Through Vision and Support
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-[#0a0f4a] font-medium drop-shadow-sm"
          >
            Join us in shaping a future where education is inclusive, global, and driven by innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {[
              { href: '/about', label: 'Learn More' },
              { href: '/get-involved', label: 'Support Us' },
              { href: '/get-involved', label: 'Get Involved' },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="px-5 py-2 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white font-semibold shadow-md"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
