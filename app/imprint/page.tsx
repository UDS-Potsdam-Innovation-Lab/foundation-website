'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Imprint() {
  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#0a0f4a]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8 text-center text-[#000080]"
        >
          Imprint
        </motion.h1>

        {/* Company Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Company Information</h2>
          <address className="not-italic">
            <strong>German UDS Foundation</strong><br />
            Marlene-Dietrich-Allee 14<br />
            14482 Potsdam<br />
            Germany
          </address>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p><strong>Phone:</strong> +49 (0) 331 968 920 20</p>
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:office@foundation.german-uds.de"
              className="text-orange-600 underline hover:text-orange-700 transition"
            >
              office@foundation.german-uds.de
            </a>
          </p>
        </motion.section>

        {/* Legal Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Legal Details</h2>
          <p><strong>Board of Directors:</strong></p>
          <ul className="list-disc ml-5 mb-2">
            <li>Prof. Dr. Mike Friedrichsen (Chairman)</li>
            <li>Wulf Wersig</li>
            <li>Syster Friedrichsen</li>
          </ul>
          <p><strong>Registration Court:</strong></p>
          <p>
            Senatsverwaltung für Justiz und Verbraucherschutz<br />
            Anerkennung vom 21. September 2021 unter<br />
            Nr. 3416/1364/2
          </p>
        </motion.section>

        {/* Responsibility for Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Responsibility for Content</h2>
          <p>
            The content of this website has been prepared with the utmost care. However, we cannot guarantee the
            accuracy, completeness, or timeliness of the information provided. As a service provider, we are
            responsible for our own content on these pages in accordance with general laws (§ 7 Abs.1 TMG). However,
            according to §§ 8 to 10 TMG, we are not obligated to monitor third-party information transmitted or stored
            or to investigate circumstances that indicate unlawful activity.
          </p>
        </motion.section>

        {/* EU Dispute Resolution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2">EU Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (OS) at{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="text-orange-600 underline hover:text-orange-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer
            arbitration board.
          </p>
        </motion.section>
      </section>
    </main>
  );
}
