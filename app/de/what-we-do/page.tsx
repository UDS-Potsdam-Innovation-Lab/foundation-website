"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatWeDoPage() {
  const purposes = [
    {
      title: "Unterstützung der German UDS",
      description:
        "Förderung und Finanzierung der German University of Digital Science durch strategische Initiativen und Partnerschaften",
      image: "/support-german-uds.jpg",
      objectPosition: "center top",
    },
    {
      title: "Globale Zusammenarbeit",
      description:
        "Förderung internationaler Partnerschaften und Kooperationen zur Weiterentwicklung der digitalen Bildung weltweit",
      image: "/support-german-uds.jpg",
      objectPosition: "left center",
    },
    {
      title: "Campus für Virtuelle Bildung (COVE)",
      description:
        "Entwicklung virtueller Lernumgebungen und innovativer digitaler Bildungsplattformen",
      image: "/support-german-uds.jpg",
      objectPosition: "right center",
    },
    {
      title: "German-UDS.Academy",
      description:
        "Bereitstellung zugänglicher und hochwertiger digitaler Bildung über unsere Online-Lernplattform",
      image: "/support-german-uds.jpg",
      objectPosition: "center bottom",
    },
  ];

  const supportMethods = [
    {
      title: "Spenden",
      description: "Unterstützen Sie unsere Initiativen mit flexiblen Spendenoptionen",
      image: "/support/1.png",
    },
    {
      title: "Stiftungen",
      description: "Hinterlassen Sie ein Vermächtnis durch nachhaltige Finanzierung",
      image: "/support/2.png",
    },
    {
      title: "Projektförderung",
      description: "Unterstützen Sie Projekte, die Ihren Interessen entsprechen",
      image: "/support/3.png",
    },
    {
      title: "Unternehmenspartnerschaften",
      description: "Arbeiten Sie mit uns zusammen, um Innovationen voranzutreiben",
      image: "/support/4.png",
    },
    {
      title: "Forschungsförderung",
      description: "Finanzieren Sie bahnbrechende Forschung und Bildung",
      image: "/support/5.png",
    },
    {
      title: "Infrastrukturförderung",
      description: "Helfen Sie beim Aufbau und Erhalt unserer digitalen Infrastruktur",
      image: "/support/6.png",
    },
  ];

  const contactInfo = [
    {
      title: "Bankverbindung",
      items: [
        { label: "IBAN", value: "DE92 1009 0900 1744 3596 00" },
        { label: "BIC", value: "GENODEF1P01" },
        { label: "Bank", value: "PSD Bank Berlin-Brandenburg eG" },
      ],
    },
    {
      title: "Kontaktinformation",
      items: [
        { label: "E-Mail", value: "office@foundation.german-uds.de", isEmail: true },
        { label: "Telefon", value: "+49 331 968 920 – 20" },
        {
          label: "Adresse",
          value: "Marlene-Dietrich-Allee 14\n14482 Potsdam\nDeutschland",
          isMultiline: true,
        },
      ],
    },
  ];

  return (
    <main className="pt-8 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section id="purpose" className="scroll-mt-24 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#000080] mb-2">Unser Auftrag</h2>
            <p className="text-[#000080] max-w-2xl mx-auto">
              Erfahren Sie, wie wir die digitale Bildung transformieren und die Zukunft gestalten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purposes.map((purpose, index) => (
              <div
                key={index}
                className="rounded-br-2xl overflow-hidden border border-gray-300 bg-[#e9f2fb] transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500"
              >
                <div className="flex flex-col h-[220px] md:h-[280px]">
                  <div className="relative h-[60%] w-full">
                    <img
                      src={purpose.image}
                      alt={purpose.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: purpose.objectPosition }}
                    />
                  </div>
                  <div className="h-[40%] w-full p-4 flex flex-col justify-start">
                    <h3 className="text-[#f7931e] text-base font-semibold mb-2">
                      {purpose.title}
                    </h3>
                    <p className="text-[#0a0f4a] text-sm leading-snug">
                      {purpose.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="foundation-goals" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#000080]">Die Zukunft gestalten</h2>
            <p className="mt-2 text-lg text-[#000080]">
              Die Vision der Stiftung für digitale Bildung und Forschung
            </p>
          </motion.div>

          <div className="mt-10 mx-auto w-full max-w-4xl h-[400px] relative overflow-hidden hover:shadow-2xl hover:ring-2 hover:ring-orange-500">
            <Image
              src="/shaping-the-future.png"
              alt="Zukunft gestalten Bild"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              quality={100}
            />
          </div>
        </div>
      </section>

      <section id="support-us" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#000080]">Unterstützen Sie unsere Mission</h2>
            <p className="mt-2 text-lg text-[#000080]">
              Bei der Transformation der digitalen Bildung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4 mb-12 place-items-center">
            {supportMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[92%] h-[360px] rounded-br-2xl overflow-hidden border border-gray-300 bg-[#e9f2fb] transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
              >
                <div className="relative w-full h-[240px]">
                  <Image src={method.image} alt={method.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col justify-end flex-grow text-left">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{method.title}</h3>
                  <p className="text-[#0a0f4a] text-sm whitespace-pre-line leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-screen bg-[#8fb5e2] py-8 px-4">
          <div className="max-w-4xl mx-auto text-center text-[#0a0f4a]">
            <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
              <h3 className="text-lg font-bold text-white">Steuervorteile</h3>
            </div>
            <p className="text-sm mt-3">
              Alle Spenden sind steuerlich absetzbar. Eine Spendenquittung wird ausgestellt
            </p>
          </div>
        </div>
      </section>

      <section id="get-involved" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#0a0f4a]">Kontaktieren Sie uns</h2>
            <p className="mt-2 text-lg text-[#0a0f4a]">
              Bereit, einen Unterschied zu machen? So können Sie uns mit Ihrer großzügigen Unterstützung helfen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-4 mb-12 place-items-center mt-10">
            {contactInfo.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[92%] h-full rounded-br-2xl overflow-hidden bg-[#aac8e8] transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col text-left"
              >
                <div className="bg-[#aac8e8] px-6 py-6">
                  <h3 className="text-[#f7931e] font-bold text-lg uppercase tracking-wide">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-4 px-6 py-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-1">
                      <p className="text-sm text-[#0a0f4a] font-semibold">{item.label}:</p>
                      {item.isEmail ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-[#0a0f4a] text-sm hover:underline block"
                        >
                          {item.value}
                        </a>
                      ) : item.isMultiline ? (
                        item.value.split("\n").map((line, lineIndex) => (
                          <p key={lineIndex} className="text-[#0a0f4a] text-sm">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-[#0a0f4a] text-sm">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full bg-[#5a8ac3] py-8 px-4">
          <div className="max-w-4xl mx-auto text-center text-[#0a0f4a]">
            <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
              <h3 className="text-lg font-bold text-white">Kontaktieren Sie uns</h3>
            </div>
            <p className="text-sm mt-3">
              Haben Sie Fragen oder möchten Sie sich engagieren? Wir freuen uns auf Ihre Nachricht und melden uns schnellstmöglich
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
