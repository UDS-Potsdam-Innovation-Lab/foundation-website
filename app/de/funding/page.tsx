'use client';

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
} from "lucide-react";

const SUPPORT_ICONS = [HeartHandshake, Landmark, FolderKanban, Briefcase, FlaskConical, Server];

export default function FundingPage() {
  const supportMethods = [
    { title: "Spenden", description: "Unterstützen Sie unsere Initiativen mit flexiblen Spendenoptionen", image: "/support/1.png" },
    { title: "Stiftungen", description: "Hinterlassen Sie ein Vermächtnis durch nachhaltige Finanzierung", image: "/support/2.png" },
    { title: "Projektförderung", description: "Unterstützen Sie Projekte, die Ihren Interessen entsprechen", image: "/support/3.png" },
    { title: "Unternehmenspartnerschaften", description: "Arbeiten Sie mit uns zusammen, um Innovationen voranzutreiben", image: "/support/4.png" },
    { title: "Forschungsförderung", description: "Finanzieren Sie bahnbrechende Forschung und Bildung", image: "/support/5.png" },
    { title: "Infrastrukturförderung", description: "Helfen Sie beim Aufbau und Erhalt unserer digitalen Infrastruktur", image: "/support/6.png" },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-white to-blue-50 scroll-smooth min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,102,255,0.12),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(234,88,12,0.08),transparent)]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, #0066FF 40px, #0066FF 41px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Förderung</h1>
            <p className="text-base sm:text-xl text-gray-600">Unterstützen Sie unsere Mission, bewerben Sie sich für Stipendien oder fördern Sie Projekte</p>
          </motion.div>
        </div>
      </section>

      <section id="support-us" className="relative scroll-mt-24 py-20 overflow-hidden">
        <motion.div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-40" animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Unterstützen Sie uns</h2>
            <p className="mt-2 text-lg text-gray-600">Fördern Sie die Stiftung und helfen Sie, die digitale Bildung zu transformieren</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {supportMethods.map((method, index) => {
              const Icon = SUPPORT_ICONS[index];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ delay: index * 0.08, duration: 0.5 }} whileHover={{ y: -6 }} className="group relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:border-orange-500/30 overflow-hidden transition-all duration-300 flex flex-col">
                    <div className="relative w-full aspect-[4/3] min-h-[160px] sm:min-h-[200px] overflow-hidden">
                      <Image src={method.image} alt={method.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col justify-end flex-grow text-left">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                        </div>
                        <h3 className="text-[#0066FF] font-bold text-sm sm:text-base">{method.title}</h3>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.a href="/tax-benefits.pdf" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4, scale: 1.01 }} className="group block relative overflow-hidden rounded-2xl border-2 border-orange-500/20 bg-gradient-to-br from-orange-50 via-white to-blue-50 shadow-lg hover:shadow-xl hover:border-orange-500/40 transition-all duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500" />
              <div className="relative p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Steuervorteile</h3>
                    <p className="text-sm text-gray-600 mt-1 max-w-xl">Die German UDS Foundation ist berechtigt, Bescheinigungen gemäß §50 Abs.1 EStDV auszustellen.</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 group-hover:bg-orange-600 text-white font-semibold shadow-md group-hover:shadow-lg transition-all shrink-0">
                  PDF herunterladen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <section id="scholarships" className="relative scroll-mt-24 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Stipendien</h2>
            <p className="mt-2 text-lg text-gray-600">Wir vergeben 10 Stipendien für die Einschreibung an der German University of Digital Science</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto rounded-3xl bg-white border border-gray-100 shadow-lg p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0066FF] flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bewerben Sie sich für ein Stipendium</h3>
                <p className="text-gray-600 mb-6">Talentierten Studierenden aus verschiedenen Hintergründen steht die Bewerbung um eines unserer 10 Stipendien offen, um digitale Bildung an der German University of Digital Science zu verfolgen. Stipendien decken nur Studiengebühren; Lebenshaltungskosten sind nicht enthalten. Die Vergabe erfolgt nach Leistung und Bedarf.</p>
                <Link href="/de/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-xl transition-colors">
                  Jetzt bewerben
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="relative scroll-mt-24 py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Projekte</h2>
            <p className="mt-2 text-lg text-gray-600">Unterstützen oder schlagen Sie Projekte vor, die die digitale Bildung voranbringen</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-orange-50 to-blue-50 border border-gray-100 shadow-lg p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center shrink-0">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Projektförderung & Vorschläge</h3>
                <p className="text-gray-600 mb-6">Ob Sie eine bestimmte Initiative fördern möchten – z. B. KI in der Bildung, virtuelle Lernplattformen oder Forschung in digitaler Pädagogik – oder eine Projektidee vorschlagen möchten: Wir freuen uns auf Zusammenarbeit. Nehmen Sie Kontakt auf, um Möglichkeiten zu erkunden.</p>
                <Link href="/de/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors">
                  Kontakt aufnehmen
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
