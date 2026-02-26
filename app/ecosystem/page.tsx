'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  Building2,
  FileCheck,
  Lightbulb,
  ArrowRight,
  Wallet,
  Award,
  TrendingUp,
  HandCoins,
} from 'lucide-react';

const ENTITY_ICONS = [GraduationCap, Building2, FileCheck, Lightbulb];
const FINANCIAL_ICONS = [HandCoins, Award, TrendingUp, Wallet];

export default function Page() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const entities = [
    {
      title: 'German UDS',
      description: 'A university focused on digital-first education and research, known for its commitment to digital education and research excellence.',
      image: '/german-uds.jpg',
    },
    {
      title: 'German UDS Foundation',
      description: 'Drives funding and strategy for digital education for the future, offering funding support and strategic direction.',
      image: '/german-uds-foundation.jpg',
    },
    {
      title: 'German UDS gGmbH',
      description: 'Manages daily operations and educational programs, focusing on operations and program management.',
      image: '/german-uds-ggmbh.jpg',
    },
    {
      title: 'German UDS Innovation',
      description: 'Drives innovation and strategic initiatives, fostering research, development, and partnerships across the digital ecosystem.',
      image: '/german-uds-foundation.jpg',
    },
  ];

  const shares = [
    {
      holder: 'German UDS Foundation',
      percentage: 69,
      color: 'bg-[#0066FF]',
      description: 'The Foundation holds the majority stake, driving strategic direction and ensuring long-term commitment to digital education.',
    },
    {
      holder: 'German UDS Innovation GmbH',
      percentage: 20,
      color: 'bg-orange-500',
      description: 'The innovation arm brings entrepreneurial expertise and supports research commercialization.',
    },
    {
      holder: 'Professors, Companies and Organizations',
      percentage: 11,
      color: 'bg-slate-400',
      description: 'Academic and corporate partners contribute expertise and resources to strengthen the ecosystem.',
    },
  ];

  const financialOptions = [
    {
      title: 'Donate to Foundation',
      description: 'Support digital education by contributing directly',
      detail: 'Direct donations to the German UDS Foundation are tax-deductible and go toward funding digital education initiatives, research projects, and infrastructure. You can give a one-time gift or set up recurring contributions. All donations support our mission to make quality digital education accessible worldwide.',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[0%_0%]',
    },
    {
      title: 'Fund Scholarships',
      description: 'Help students access education by funding scholarships',
      detail: 'Scholarship funding enables talented students from diverse backgrounds to pursue digital education regardless of financial barriers. Your contribution can support full or partial scholarships, covering tuition and living expenses. Scholarships are awarded based on merit and need.',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[25%_25%]',
    },
    {
      title: 'Acquire Shares in gGmbH',
      description: 'Be a part of our journey through strategic investment',
      detail: 'The German UDS gGmbH offers the opportunity to acquire shares, allowing you to participate directly in the growth and success of our digital education platform. Shareholders contribute to governance and benefit from the organization\'s development. This is a strategic, long-term investment in the future of education.',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[50%_50%]',
    },
    {
      title: 'Sponsor Programs',
      description: 'Support specific research or education programs',
      detail: 'Program sponsorship lets you support specific initiatives that align with your interests—whether that\'s AI in education, virtual learning platforms, or research in digital pedagogy. Sponsors receive visibility, impact reports, and the opportunity to engage with program participants and outcomes.',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[75%_75%]',
    },
  ];

  return (
    <main className="scroll-smooth min-h-screen">
      {/* Hero - gradient, glowing orbs, animated mesh */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-blue-700 to-indigo-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,rgba(234,88,12,0.25),transparent_50%)]" />
        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-orange-400/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              German UDS Ecosystem
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Understanding the structure and synergy of our organization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Entities - vertical timeline with connectors */}
      <section className="scroll-mt-24 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our Ecosystem
              <span className="block w-12 h-1 rounded-full bg-orange-500 mx-auto mt-2" />
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {entities.map((entity, index) => {
              const Icon = ENTITY_ICONS[index];
              const isLast = index === entities.length - 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Timeline line */}
                  {!isLast && (
                    <div className="absolute left-[19px] sm:left-[23px] top-24 bottom-0 w-px bg-gradient-to-b from-[#0066FF]/40 via-orange-500/30 to-transparent" />
                  )}
                  {/* Dot - alternate blue and orange */}
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg ${index % 2 === 0 ? 'bg-[#0066FF]' : 'bg-orange-500'}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  {/* Card */}
                  <div className="flex-1 pb-12">
                    <div className={`group rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'hover:border-[#0066FF]/20' : 'hover:border-orange-500/30'}`}>
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-48 h-40 sm:h-auto sm:min-h-[180px] shrink-0">
                          <Image
                            src={entity.image}
                            alt={entity.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 192px"
                          />
                        </div>
                        <div className="p-6 flex flex-col justify-center">
                          <h3 className={`font-bold text-lg mb-2 ${index % 2 === 0 ? 'text-[#0066FF]' : 'text-orange-600'}`}>{entity.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{entity.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Shareholding - clean cards */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Shareholding Structure
              <span className="block w-12 h-1 rounded-full bg-orange-500 mx-auto mt-2" />
            </h2>
            <p className="text-gray-600 mt-4">Ownership distribution of German UDS</p>
          </motion.div>

          {/* Donut chart visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="12" />
                <motion.circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#0066FF"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="251 251"
                  initial={{ strokeDashoffset: 251 }}
                  whileInView={{ strokeDashoffset: 251 - (69 / 100) * 251 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="50 251"
                  initial={{ strokeDashoffset: 50 }}
                  whileInView={{ strokeDashoffset: -173 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="28 251"
                  initial={{ strokeDashoffset: 28 }}
                  whileInView={{ strokeDashoffset: -223 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500">100%</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#0066FF]" />
                <span className="text-gray-600">Foundation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-gray-600">Innovation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-400" />
                <span className="text-gray-600">Partners</span>
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shares.map((share, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl border border-gray-100 bg-gray-50/50 p-6 hover:bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${share.color}`} />
                <div className="pl-4">
                  <p className={`text-4xl font-bold mb-1 ${index === 0 ? 'text-[#0066FF]' : index === 1 ? 'text-orange-600' : 'text-slate-600'}`}>
                    {share.percentage}%
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-3">{share.holder}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{share.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial - bento grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Financial Support & Participation
              <span className="block w-16 h-1 rounded-full bg-orange-500 mx-auto mt-3" />
            </h2>
            <p className="text-gray-600 mt-4">Join us in shaping the future of digital education</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {financialOptions.map((option, index) => {
              const Icon = FINANCIAL_ICONS[index];
              const isHovered = hoveredCard === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setHoveredCard(hoveredCard === index ? null : index)}
                  className="group relative rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative h-40 w-full shrink-0 overflow-hidden">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className={`object-cover group-hover:scale-105 transition-transform duration-500 ${option.style || ''}`}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                        <Icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <h3 className="font-bold text-base text-[#0066FF]">{option.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{option.description}</p>
                  </div>

                  {/* Hover popover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-white p-6 flex flex-col overflow-y-auto z-10"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-orange-600" />
                          </div>
                          <h3 className="font-bold text-base text-orange-600">{option.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">{option.detail}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
