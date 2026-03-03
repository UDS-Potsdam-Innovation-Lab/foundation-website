'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  Building2,
  FileCheck,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

const ENTITY_ICONS = [GraduationCap, Building2, FileCheck, Lightbulb];

export default function Page() {
  const entities = [
    {
      title: 'German UDS',
      description: 'Eine Universität mit Fokus auf digitale Bildung und Forschung, bekannt für ihre Stärke in digitaler Lehre und wissenschaftlicher Exzellenz.',
      image: '/german-uds.jpg',
    },
    {
      title: 'German UDS Stiftung',
      description: 'Treibt Finanzierung und Strategie für digitale Bildung voran, bietet gezielte finanzielle Unterstützung und strategische Ausrichtung für die Zukunft.',
      image: '/german-uds-foundation.jpg',
    },
    {
      title: 'German UDS gGmbH',
      description: 'Verantwortlich für den operativen Betrieb und Bildungsprogramme mit Fokus auf effiziente Durchführung und organisatorisches Management.',
      image: '/german-uds-ggmbh.jpg',
    },
    {
      title: 'German UDS Innovation GmbH',
      description: 'Treibt Innovation und strategische Initiativen voran, fördert Forschung, Entwicklung und Partnerschaften im digitalen Ökosystem.',
      image: '/german-uds-foundation.jpg',
    },
  ];

  const shares = [
    {
      holder: 'German UDS Foundation',
      percentage: 69,
      color: 'bg-[#0066FF]',
      description: 'Die Stiftung hält die Mehrheitsbeteiligung und treibt die strategische Ausrichtung sowie das langfristige Engagement für digitale Bildung voran.',
    },
    {
      holder: 'German UDS Innovation GmbH',
      percentage: 20,
      color: 'bg-orange-500',
      description: 'Der Innovationsbereich bringt unternehmerische Expertise ein und unterstützt die Kommerzialisierung von Forschung.',
    },
    {
      holder: 'Professoren, Unternehmen und Organisationen',
      percentage: 11,
      color: 'bg-slate-400',
      description: 'Akademische und unternehmerische Partner tragen mit Expertise und Ressourcen zur Stärkung des Ökosystems bei.',
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
              German UDS Ökosystem
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Verständnis für Struktur und Synergien unserer Organisation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Entities - vertical timeline with connectors */}
      <section className="scroll-mt-24 py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Unser Ökosystem
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
                    <div className="absolute left-[17px] sm:left-[23px] top-20 sm:top-24 bottom-0 w-px bg-gradient-to-b from-[#0066FF]/40 via-orange-500/30 to-transparent" />
                  )}
                  {/* Dot - alternate blue and orange */}
                  <div className={`relative z-10 flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg ${index % 2 === 0 ? 'bg-[#0066FF]' : 'bg-orange-500'}`}>
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  {/* Card */}
                  <div className="flex-1 pb-8 sm:pb-12 min-w-0">
                    <div className={`group rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'hover:border-[#0066FF]/20' : 'hover:border-orange-500/30'}`}>
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-48 h-32 sm:h-auto sm:min-h-[180px] shrink-0">
                          <Image
                            src={entity.image}
                            alt={entity.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 192px"
                          />
                        </div>
                        <div className="p-4 sm:p-6 flex flex-col justify-center">
                          <h3 className={`font-bold text-base sm:text-lg mb-1.5 sm:mb-2 ${index % 2 === 0 ? 'text-[#0066FF]' : 'text-orange-600'}`}>{entity.title}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{entity.description}</p>
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
              Anteilseignerstruktur
              <span className="block w-12 h-1 rounded-full bg-orange-500 mx-auto mt-2" />
            </h2>
            <p className="text-gray-600 mt-4">Eigentumsverteilung bei German UDS</p>
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
                <span className="text-gray-600">Stiftung</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-gray-600">Innovation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-400" />
                <span className="text-gray-600">Partner</span>
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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

      {/* Financial Support & Participation - redesigned box */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Finanzielle Unterstützung & Beteiligung</h2>
            <span className="block w-16 h-1 rounded-full bg-orange-500 mx-auto mt-3" />
            <p className="text-gray-600 mt-4">Gestalten Sie mit uns die Zukunft der digitalen Bildung</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link href="/de/funding" className="group block relative overflow-hidden rounded-2xl border-2 border-[#0066FF]/20 bg-gradient-to-br from-blue-50 via-white to-orange-50 shadow-lg hover:shadow-xl hover:border-[#0066FF]/40 transition-all duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0066FF] to-orange-500" />
              <div className="relative p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fördern oder Förderung beantragen</h3>
                  <p className="text-gray-600 max-w-xl">Unterstützen Sie die Stiftung durch Spenden, Stipendien oder Projektförderung. Oder bewerben Sie sich um eines unserer 10 Stipendien für ein Studium an der German University of Digital Science. Stipendien decken nur Studiengebühren; Lebenshaltungskosten sind nicht enthalten.</p>
                </div>
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 group-hover:bg-orange-600 text-white font-semibold shadow-md transition-all shrink-0">
                  Fördermöglichkeiten erkunden
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
