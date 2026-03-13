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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Fördermöglichkeiten</h1>
            <p className="text-base sm:text-xl text-gray-600">
              - Werden Sie Teil unserer Mission -
              <br />
              Bewerben Sie sich für Stipendien oder Projektförderung
            </p>
          </motion.div>
        </div>
      </section>

      <section id="scholarships" className="relative scroll-mt-24 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Fellowships */}
      <section id="fellowships" className="relative scroll-mt-24 py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Fellowships</h2>
            <p className="mt-2 text-lg text-gray-600">
              Programme für Forschungsaufenthalte oder Talente, die die digitale Bildung mitgestalten möchten
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto rounded-3xl bg-white border border-gray-100 shadow-lg p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fellowships</h3>
                <p className="text-gray-600 mb-6">
                  Fellowships fördern herausragende Talente in Forschung, Innovation oder Bildungsführung, die gemeinsam mit der German UDS die Zukunft der digitalen Bildung gestalten möchten. Sie können Forschungsaufenthalte, Innovationsprojekte oder praxisorientierte Entwicklungsprogramme ermöglichen.
                </p>
                <Link href="/de/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grants */}
      <section id="grants" className="relative scroll-mt-24 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Grants</h2>
            <p className="mt-2 text-lg text-gray-600">
              Projekt- und Forschungsförderung für Vorhaben in der digitalen Bildung
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 shadow-lg p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0066FF] flex items-center justify-center shrink-0">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Projekt- & Forschungs-Grants</h3>
                <p className="text-gray-600 mb-6">
                  Grants können Pilotprojekte, Forschungskooperationen oder innovative Lehrformate fördern, die zur Mission der Stiftung und der German UDS beitragen.
                </p>
                <Link href="/de/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-xl transition-colors">
                  Kontakt aufnehmen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative scroll-mt-24 py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Programme</h2>
            <p className="mt-2 text-lg text-gray-600">
              Übergeordnete Förderprogramme der Stiftung mit längerfristigem Rahmen
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-orange-50 to-blue-50 border border-gray-100 shadow-lg p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center shrink-0">
                <FolderKanban className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategische Förderprogramme</h3>
                <p className="text-gray-600 mb-6">
                  Mehrjährige Programme bündeln Stipendien, Grants und Partnerschaften unter gemeinsamen Themen wie KI in der Bildung, lebenslanges Lernen oder internationale Zusammenarbeit.
                </p>
                <Link href="/de/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="relative scroll-mt-24 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Community</h2>
            <p className="mt-2 text-lg text-gray-600">
              Netzwerk der Geförderten und Alumni der Stiftung
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto rounded-3xl bg-white border border-gray-100 shadow-lg p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0066FF] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community & Alumni-Netzwerk</h3>
                <p className="text-gray-600 mb-6">
                  Förderung ist der Beginn einer langfristigen Beziehung. Unsere Community vernetzt Stipendiat:innen, Fellows, Projektpartner:innen und Alumni über Jahrgänge und Länder hinweg.
                </p>
                <Link href="/de/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-xl transition-colors">
                  Teil der Community werden
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
