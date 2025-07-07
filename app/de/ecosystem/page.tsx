'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../components/ui/Button';

export default function Page() {
  const entities = [
    {
      title: 'German UDS',
      icon: '🎓',
      description: 'Eine Universität mit Fokus auf digitale Bildung und Forschung.',
      details: ['Digitale Bildung', 'Forschungsstärke'],
      image: '/german-uds.jpg',
    },
    {
      title: 'German UDS Stiftung',
      icon: '🏛️',
      description: 'Treibt Finanzierung und Strategie für digitale Bildung voran.',
      details: ['Finanzielle Unterstützung', 'Strategische Ausrichtung'],
      image: '/german-uds-foundation.jpg',
    },
    {
      title: 'German UDS gGmbH',
      icon: '🧾',
      description: 'Verantwortlich für den operativen Betrieb und Bildungsprogramme.',
      details: ['Betrieb', 'Programmdurchführung'],
      image: '/german-uds-ggmbh.jpg',
    },
  ];

  const shares = [
    { holder: 'German UDS Stiftung', percentage: 70 },
    { holder: 'German UDS Innovation GmbH', percentage: 15 },
    { holder: 'AI Research Institute', percentage: 5 },
    { holder: 'Professoren, Unternehmen und Organisationen', percentage: 10 },
  ];

  const financialOptions = [
    {
      title: 'An die Stiftung spenden',
      description: 'Unterstützen Sie digitale Bildung durch direkte Beiträge.',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[0%_0%]',
    },
    {
      title: 'Stipendien finanzieren',
      description: 'Ermöglichen Sie Studierenden den Zugang zu Bildung durch Stipendien.',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[25%_25%]',
    },
    {
      title: 'Anteile an der gGmbH erwerben',
      description: 'Werden Sie Teil unserer Reise durch strategische Beteiligung.',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[50%_50%]',
    },
    {
      title: 'Programme sponsern',
      description: 'Unterstützen Sie gezielt Forschungs- oder Bildungsprogramme.',
      image: '/financial-support-and-participation.jpg',
      style: 'object-[75%_75%]',
    },
  ];

  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      {/* Ökosystem Abschnitt */}
      <section className="scroll-mt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">German UDS Ökosystem</h1>
            <p className="text-lg text-[#0a0f4a]">Verständnis für Struktur und Synergien unserer Organisation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4 mb-12 place-items-center">
            {entities.map((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[92%] h-[456px] rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
              >
                <div className="relative w-full h-[300px]">
                  <Image src={entity.image} alt={entity.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{entity.title}</h3>
                  <p className="text-[#0a0f4a] text-sm mb-2">{entity.description}</p>
                  <ul className="text-[#0a0f4a] text-sm space-y-1">
                    {entity.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anteilseignerstruktur */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Anteilseignerstruktur</h1>
            <p className="text-lg text-[#0a0f4a]">Eigentumsverteilung bei German UDS</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {shares.map((share, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full h-[140px] rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col items-center justify-center text-center px-4 py-6"
              >
                <div className="text-3xl font-bold text-orange-500 mb-1">{share.percentage}%</div>
                <h3 className="text-[#000080] text-xs font-semibold leading-snug">{share.holder}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finanzielle Unterstützung */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Finanzielle Unterstützung & Beteiligung</h1>
            <p className="text-lg text-[#0a0f4a]">Gestalten Sie mit uns die Zukunft der digitalen Bildung</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-6">
            {financialOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-md rounded-br-2xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-orange-400 hover:shadow-lg hover:ring-2 hover:ring-orange-500"
              >
                <div className={`relative h-40 w-full`}>
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className={`object-cover w-full h-full ${option.style || ''}`}
                  />
                </div>
                <div className="bg-white px-4 py-5">
                  <h3 className="text-sm font-bold text-[#f7931e] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-[#0a0f4a] leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/de/contact" variant="primary">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
