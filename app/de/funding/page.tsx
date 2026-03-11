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
  Building2,
  Globe,
  BookOpen,
} from "lucide-react";

const SUPPORT_ICONS = [HeartHandshake, Landmark, FolderKanban, Briefcase, FlaskConical, Server];

const PURPOSE_ICONS = [Building2, Globe, GraduationCap, BookOpen];
const PURPOSES = [
  { title: 'Unterstützung der German UDS', description: 'Förderung und Finanzierung der German University of Digital Science sowie deren strategischen Initiativen und Partnerschaften', image: '/support-german-uds.jpg', objectPosition: 'center top' },
  { title: 'Globale Zusammenarbeit', description: 'Förderung internationaler Partnerschaften und Kooperationen zur Weiterentwicklung der digitalen Bildung weltweit', image: '/support-german-uds.jpg', objectPosition: 'left center' },
  { title: 'Campus für Virtuelle Bildung (COVE)', description: 'Entwicklung virtueller Lernumgebungen und innovativer digitaler Bildungsplattformen', image: '/support-german-uds.jpg', objectPosition: 'right center' },
  { title: 'open German UDS', description: 'Bereitstellung leicht zugänglicher und hochwertiger digitaler Bildung über die Online-Lernplattform der German UDS', image: '/support-german-uds.jpg', objectPosition: 'center bottom' },
];

export default function FundingPage() {
  const supportMethods = [
    { title: "Spenden", description: "Unterstützen Sie unsere Initiativen mit flexiblen Spendenoptionen", image: "/support/1.png" },
    { title: "Stiften", description: "Hinterlassen Sie ein Vermächtnis durch nachhaltige Finanzierung", image: "/support/2.png" },
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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Spenden & Fördern</h1>
            <p className="text-base sm:text-xl text-gray-600">
              - Werden Sie Teil unserer Mission -
              <br />
              Bewerben Sie sich für Stipendien oder fördern Sie Projekte
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Purpose - Unsere Schwerpunkte (top of page) */}
      <section id="purpose" className="relative scroll-mt-24 py-16 sm:py-20 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Unsere Schwerpunkte</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Erfahren Sie, wie wir die digitale Bildung transformieren und die Zukunft gestalten</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {PURPOSES.map((purpose, index) => {
              const Icon = PURPOSE_ICONS[index];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} whileHover={{ y: -6 }} className="group relative">
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-full max-w-3xl mx-auto bg-blue-50/90 border border-blue-100 rounded-3xl px-6 py-5 sm:px-10 sm:py-7 shadow-sm">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                Fördermöglichkeiten
              </h2>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Stipendien</h3>
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
