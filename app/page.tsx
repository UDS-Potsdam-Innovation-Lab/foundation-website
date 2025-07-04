'use client';

import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main className="scroll-smooth">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Background image only */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('/abstract-bg.png')`,
          }}
        />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-3xl transform -translate-x-6">
          {/* Glassmorphic box with blue hue */}
          <div className="bg-[#d0e8ff]/20 backdrop-blur-md rounded-2xl px-6 py-8 shadow-md border border-white/30">
            <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,128,0.5)] leading-tight"
>
  Empowering Digital Education Through Vision and Support
</motion.h1>


            {/* Small orange line under header */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-3 h-1 w-10 bg-orange-500 rounded-full origin-center"
            />

            <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="mt-6 text-base md:text-lg text-white font-medium drop-shadow-[0_0_6px_rgba(0,0,128,0.4)]"
>
  Join us in shaping a future where education is inclusive, global, and driven by innovation.
</motion.p>
          </div>

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
