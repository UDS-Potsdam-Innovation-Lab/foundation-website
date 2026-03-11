'use client';

import { ArrowRight, Target, Users, Lightbulb, GraduationCap, Globe, Sparkles, Quote, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Pre-computed blob positions/sizes for stable animation (seeded from 42)
const FLOATING_BLOBS = [
  { w: 120, h: 120, left: 12, top: 8, x: [0, 35, 0], y: [0, -20, 0], d: 14 },
  { w: 200, h: 200, left: 78, top: 15, x: [0, -30, 0], y: [0, 25, 0], d: 18 },
  { w: 90, h: 90, left: 5, top: 45, x: [0, 20, 0], y: [0, 15, 0], d: 12 },
  { w: 180, h: 180, left: 65, top: 60, x: [0, -25, 0], y: [0, -30, 0], d: 16 },
  { w: 140, h: 140, left: 25, top: 75, x: [0, 40, 0], y: [0, 10, 0], d: 15 },
  { w: 160, h: 160, left: 85, top: 35, x: [0, -15, 0], y: [0, 20, 0], d: 17 },
  { w: 100, h: 100, left: 45, top: 5, x: [0, 25, 0], y: [0, -25, 0], d: 13 },
  { w: 220, h: 220, left: 55, top: 80, x: [0, -40, 0], y: [0, 15, 0], d: 19 },
  { w: 80, h: 80, left: 92, top: 55, x: [0, 10, 0], y: [0, -15, 0], d: 11 },
  { w: 150, h: 150, left: 15, top: 30, x: [0, -20, 0], y: [0, 30, 0], d: 16 },
  { w: 110, h: 110, left: 70, top: 85, x: [0, 30, 0], y: [0, -10, 0], d: 14 },
  { w: 190, h: 190, left: 35, top: 50, x: [0, -35, 0], y: [0, -20, 0], d: 18 },
  { w: 130, h: 130, left: 88, top: 22, x: [0, 15, 0], y: [0, 25, 0], d: 15 },
  { w: 170, h: 170, left: 8, top: 65, x: [0, -25, 0], y: [0, -15, 0], d: 17 },
  { w: 95, h: 95, left: 50, top: 40, x: [0, 20, 0], y: [0, 20, 0], d: 12 },
  { w: 210, h: 210, left: 30, top: 18, x: [0, -40, 0], y: [0, 10, 0], d: 20 },
  { w: 105, h: 105, left: 75, top: 70, x: [0, 18, 0], y: [0, -22, 0], d: 13 },
  { w: 145, h: 145, left: 42, top: 88, x: [0, -18, 0], y: [0, 18, 0], d: 15 },
  { w: 175, h: 175, left: 18, top: 42, x: [0, 28, 0], y: [0, -28, 0], d: 16 },
  { w: 125, h: 125, left: 62, top: 12, x: [0, -22, 0], y: [0, 22, 0], d: 14 },
];

export default function Values() {
  const beliefs = [
    {
      title: "Rethinking Education",
      description: "Transforming traditional education models to meet the demands of the digital age",
      image: "/beliefs1.png",
      icon: GraduationCap,
    },
    {
      title: "Supporting Visionaries",
      description: "Empowering innovative thinkers who shape the future of digital education",
      image: "/beliefs2.png",
      icon: Sparkles,
    },
    {
      title: "Digital Education",
      description: "Making quality education accessible through cutting-edge digital platforms",
      image: "/beliefs3.png",
      icon: Lightbulb,
    },
    {
      title: "Global Education",
      description: "Breaking down geographical barriers to create a worldwide learning community",
      image: "/beliefs4.png",
      icon: Globe,
    },
    {
      title: "Harmony between AI and Humans",
      description: "Fostering a balanced integration of artificial intelligence in education",
      image: "/beliefs5.png",
      icon: Users,
    },
  ];

  const guidingPrinciples = [
    {
      title: (
        <>
          Shape
          <br />
          the Digital Future
        </>
      ),
      description: "Leading innovation in digital education and research",
      image: "/principle1.jpg",
      icon: Target,
    },
    {
      title: (
        <>
          Promote
          <br />
          Young Talent
        </>
      ),
      description: "Nurturing the next generation of digital innovators",
      image: "/principle3.jpg",
      objectPosition: "object-[30%]",
      icon: Users,
    },
    {
      title: (
        <>
          Establish
          <br />
          Digital Science
        </>
      ),
      description: "Creating new standards in digital academic excellence",
      image: "/principle2.jpg",
      icon: GraduationCap,
    },
    {
      title: (
        <>
          Support
          <br />
          Digital Education
        </>
      ),
      description: "Developing essential competencies for the digital age",
      image: "/principle4.jpg",
      icon: Lightbulb,
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-white to-blue-100 scroll-smooth min-h-screen">
      {/* Hero intro */}
      <section className="relative overflow-hidden">
        {/* Animated floating blobs (from Figma) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {FLOATING_BLOBS.map((blob, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#0066FF]/10"
              style={{
                width: blob.w,
                height: blob.h,
                left: `${blob.left}%`,
                top: `${blob.top}%`,
              }}
              animate={{
                x: blob.x,
                y: blob.y,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: blob.d,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0066FF08_0%,transparent_50%,#ea580c08_100%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Guiding Principles & Mission
            </h1>
            <p className="text-xl text-gray-600">
              The principles and beliefs that guide everything we do
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section id="core-beliefs" className="relative scroll-mt-32 py-20 overflow-hidden">
        {/* Soft animated background accents */}
        <motion.div
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-60"
          animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-60"
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Guiding Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our guiding principles inspire how we shape, support, and strengthen the digital future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {guidingPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 20% 0%, rgba(37,99,235,0.16), transparent 60%)",
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="relative w-full aspect-[4/3] min-h-[220px]">
                      <Image
                        src={principle.image}
                        alt={principle.title}
                        fill
                        className={`object-cover ${principle.objectPosition || ""}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-5 flex flex-col justify-end flex-grow text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                          <Icon className="w-5 h-5 text-[#0066FF]" />
                        </div>
                        <div className="relative block w-full">
                          <h3 className="text-[#0066FF] font-bold text-base relative z-10">
                            {principle.title}
                          </h3>
                          <motion.span
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0066FF] to-blue-400 rounded-full"
                            initial={false}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inspirational quote block */}
      <section className="relative py-20 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-blue-600 to-[#0047AB] pointer-events-none" />
        {/* Animated sweeping lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-white/20"
              style={{ top: `${(i + 1) * 18}%`, left: 0, right: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                delay: i * 0.6,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
          ))}
        </div>
        {/* Soft glowing orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Quote className="w-14 h-14 text-white/90 mx-auto mb-6" />
            </motion.div>
            <blockquote className="text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-8 drop-shadow-sm">
              &ldquo;Collaborative work and learning processes become the foundation of continuous digital transformation and part of a new equity of opportunity in the digital world.&rdquo;
              <br />
              &ldquo;Transforming digital education and shaping the future of lifelong learning advances educational equity and expands opportunity.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-white/40" />
              <p className="text-white/95 text-sm font-semibold tracking-wide">Statement from the German UDS Foundation</p>
              <div className="h-px w-12 bg-white/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="guiding-principles" className="relative scroll-mt-32 py-20 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl opacity-60"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our foundation is built on fundamental beliefs that drive our mission to transform digital
              education and shape the future of learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative w-full h-full flex"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Soft glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.18), transparent 70%)",
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col w-full h-[420px]">
                    <div className="relative w-full h-[220px] shrink-0">
                      <Image
                        src={belief.image}
                        alt={belief.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-5 flex flex-col justify-start text-left flex-1 min-h-[200px] min-w-0">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[#0066FF] text-base font-bold mb-1 relative z-10">
                            {belief.title}
                          </h3>
                          <div className="h-[2px] w-full bg-gradient-to-r from-[#0066FF] to-blue-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-snug overflow-y-auto flex-1 min-h-0">{belief.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/what-we-do"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Statutes - PDF download */}
      <section id="statutes" className="relative scroll-mt-24 py-16 overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.a
            href="/statutes-foundation.pdf"
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
                  <h3 className="text-xl font-bold text-gray-900">Statutes of the German University of Digital Science Foundation</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] group-hover:bg-[#0052CC] text-white font-semibold shadow-md transition-all shrink-0">
                Download PDF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.a>
        </div>
      </section>
    </main>
  );
}
