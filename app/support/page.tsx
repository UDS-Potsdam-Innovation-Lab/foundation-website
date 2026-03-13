'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import {
  HeartHandshake,
  Landmark,
  FolderKanban,
  Briefcase,
  FlaskConical,
  Server,
  FileText,
  ArrowRight,
  Building2,
  Globe,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const SUPPORT_ICONS = [HeartHandshake, Landmark, FolderKanban, Briefcase, FlaskConical, Server];

const PURPOSE_ICONS = [Building2, Globe, GraduationCap, BookOpen];
const PURPOSES = [
  {
    title: "Support German UDS",
    description:
      "Promoting and financing the German University of Digital Science and its strategic initiatives and partnerships",
    image: "/support-german-uds.jpg",
    objectPosition: "center top",
  },
  {
    title: "Global Cooperation",
    description:
      "Fostering international partnerships and collaboration to advance digital education worldwide",
    image: "/support-german-uds.jpg",
    objectPosition: "left center",
  },
  {
    title: "Campus of Virtual Education (COVE)",
    description:
      "Pioneering virtual learning environments and innovative digital education platforms",
    image: "/support-german-uds.jpg",
    objectPosition: "right center",
  },
  {
    title: "open German UDS",
    description:
      "Providing accessible, high-quality digital education through our online learning platform",
    image: "/support-german-uds.jpg",
    objectPosition: "center bottom",
  },
];

export default function SupportPage() {
  const supportMethods = [
    {
      title: "Donations",
      description: "Support our initiatives with flexible giving options",
      image: "/support/1.png",
    },
    {
      title: "Endowments",
      description: "Leave a legacy through sustainable funding",
      image: "/support/2.png",
    },
    {
      title: "Project Support",
      description: "Back projects that align with your interests",
      image: "/support/3.png",
    },
    {
      title: "Corporate Partnerships",
      description: "Collaborate with us to drive innovation",
      image: "/support/4.png",
    },
    {
      title: "Research Funding",
      description: "Fuel groundbreaking research and education",
      image: "/support/5.png",
    },
    {
      title: "Infrastructure Support",
      description: "Help build and maintain our digital infrastructure",
      image: "/support/6.png",
    },
  ];

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
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, #0066FF 40px, #0066FF 41px)",
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
              Support Us
            </h1>
            <p className="text-base sm:text-xl text-gray-600">
              - Be part of our mission -
              <br />
              Help us transform digital education and shape the future of learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Purpose */}
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how your support strengthens the German UDS ecosystem and advances digital education
            </p>
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
                        <img
                          src={purpose.image}
                          alt={purpose.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: purpose.objectPosition }}
                        />
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF]" />
                        </div>
                      </div>
                      <div className="flex-1 min-h-0 w-full p-4 sm:p-5 flex flex-col justify-start overflow-y-auto">
                        <h3 className="text-[#0066FF] text-sm sm:text-base font-semibold mb-1.5 sm:mb-2">
                          {purpose.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-snug">
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

      {/* Support Us - Giving options */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ways to Support</h2>
            <p className="mt-2 text-lg text-gray-600">
              Fund the Foundation and help transform digital education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
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
                    <div className="relative w-full aspect-[4/3] min-h-[160px] sm:min-h-[200px] overflow-hidden">
                      <Image
                        src={method.image}
                        alt={method.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col justify-end flex-grow text-left">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                        </div>
                        <h3 className="text-[#0066FF] font-bold text-sm sm:text-base">{method.title}</h3>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tax Benefits */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="tax-benefits">
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
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500" />
              <div className="relative p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Tax Benefits</h3>
                    <p className="text-sm text-gray-600 mt-1 max-w-xl">
                      The German UDS Foundation is authorized to issue certificates in accordance with
                      Section 50 (1) of the Income Tax Ordinance.
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 group-hover:bg-orange-600 text-white font-semibold shadow-md group-hover:shadow-lg transition-all shrink-0">
                  Download PDF
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}

