'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Impressum() {
  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#0a0f4a]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8 text-center text-[#000080]"
        >
          Impressum
        </motion.h1>

        {/* Unternehmensinformationen */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Unternehmensinformationen</h2>
          <address className="not-italic">
            <strong>German UDS Foundation</strong><br />
            Marlene-Dietrich-Allee 14<br />
            14482 Potsdam<br />
            Deutschland
          </address>
        </motion.section>

        {/* Kontaktinformationen */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Kontaktinformationen</h2>
          <p><strong>Telefon:</strong> +49 (0) 331 968 920 20</p>
          <p>
            <strong>E-Mail:</strong>{' '}
            <a
              href="mailto:office@foundation.german-uds.de"
              className="text-orange-600 underline hover:text-orange-700 transition"
            >
              office@foundation.german-uds.de
            </a>
          </p>
        </motion.section>

        {/* Rechtliche Angaben */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Rechtliche Angaben</h2>
          <p><strong>Vorstand:</strong></p>
          <ul className="list-disc ml-5 mb-2">
            <li>Prof. Dr. Mike Friedrichsen (Vorsitzender)</li>
            <li>Wulf Wersig</li>
            <li>Syster Friedrichsen</li>
          </ul>
          <p><strong>Registergericht:</strong></p>
          <p>
            Senatsverwaltung für Justiz und Verbraucherschutz<br />
            Anerkennung vom 21. September 2021 unter<br />
            Nr. 3416/1364/2
          </p>
        </motion.section>

        {/* Verantwortlichkeit für Inhalte */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Verantwortlichkeit für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
            Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
            10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen.
          </p>
        </motion.section>

        {/* EU-Streitbeilegung */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">EU-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit unter{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="text-orange-600 underline hover:text-orange-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </motion.section>
      </section>
    </main>
  );
}
