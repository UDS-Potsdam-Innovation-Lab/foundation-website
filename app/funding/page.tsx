'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  Landmark,
  FolderKanban,
  Briefcase,
  FlaskConical,
  Server,
  FileText,
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Building2,
  Globe,
  BookOpen,
} from "lucide-react";

const SUPPORT_ICONS = [HeartHandshake, Landmark, FolderKanban, Briefcase, FlaskConical, Server];

const PURPOSE_ICONS = [Building2, Globe, GraduationCap, BookOpen];
const PURPOSES = [
{ title: 'Support German UDS', description: 'Promoting and financing the German University of Digital Science and its strategic initiatives and partnerships', image: '/support-german-uds.jpg', objectPosition: 'center top' },
  { title: 'Global Cooperation', description: 'Fostering international partnerships and collaboration to advance digital education worldwide', image: '/support-german-uds.jpg', objectPosition: 'left center' },
  { title: 'Campus of Virtual Education (COVE)', description: 'Pioneering virtual learning environments and innovative digital education platforms', image: '/support-german-uds.jpg', objectPosition: 'right center' },
  { title: 'open German UDS', description: 'Providing accessible, high-quality digital education through our online learning platform', image: '/support-german-uds.jpg', objectPosition: 'center bottom' },
];

export default function FundingPage() {
  return (
    <main className="pt-24 bg-gradient-to-b from-white to-blue-50 scroll-smooth min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,102,255,0.12),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(234,88,12,0.08),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, #0066FF 40px, #0066FF 41px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Funding
            </h1>
            <p className="text-base sm:text-xl text-gray-600">
              - Be part of our mission -
              <br />
              Apply for scholarships or project funding
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Purpose - mainly focused on German UDS (top of page) */}
      <section id="purpose" className="relative scroll-mt-24 py-16 sm:py-20 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Our Purpose</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover how we&apos;re transforming digital education and shaping the future</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {PURPOSES.map((purpose, index) => {
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
                  <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-md hover:shadow-xl hover:border-[#0066FF]/30 transition-all duration-300">
                    <div className="flex flex-col min-h-[200px] sm:min-h-[220px] md:h-[280px]">
                      <div className="relative h-24 sm:h-28 md:h-[55%] w-full overflow-hidden shrink-0">
                        <img src={purpose.image} alt={purpose.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: purpose.objectPosition }} />
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF]" />
                        </div>
                      </div>
                      <div className="flex-1 min-h-0 w-full p-4 sm:p-5 flex flex-col justify-start overflow-y-auto">
                        <h3 className="text-[#0066FF] text-sm sm:text-base font-semibold mb-1.5 sm:mb-2">{purpose.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-snug">{purpose.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scholarships - Apply for Funding */}
      <section id="scholarships" className="relative scroll-mt-24 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Support for Your Digital Education</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Scholarships</h3>
            <p className="mt-2 text-lg text-gray-600">
              We offer 10 scholarships for enrollment at the German University of Digital Science
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-3xl bg-white border border-gray-100 shadow-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0066FF] flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Apply for a Scholarship</h3>
                <p className="text-gray-600 mb-6">
                  Talented students from diverse backgrounds can apply for one of our 10 scholarships to pursue digital education at the German University of Digital Science. Scholarships cover tuition only; living expenses are not included. Awarded based on merit and need.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-xl transition-colors"
                >
                  Apply now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative scroll-mt-24 py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Projects</h2>
            <p className="mt-2 text-lg text-gray-600">
              Support or propose projects that advance digital education
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-orange-50 to-blue-50 border border-gray-100 shadow-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center shrink-0">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Funding & Proposals</h3>
                <p className="text-gray-600 mb-6">
                  Whether you want to fund a specific initiative—such as AI in education, virtual learning platforms, or digital pedagogy research—or have a project idea to propose, we welcome collaboration. Get in touch to explore opportunities.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
