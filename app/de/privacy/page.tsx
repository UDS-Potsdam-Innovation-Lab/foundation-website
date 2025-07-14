'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Datenschutz() {
  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#0a0f4a]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-2 text-center text-[#000080]"
        >
          Datenschutzerklärung
        </motion.h1>
        <p className="mb-8 text-sm text-gray-600 text-center">Letzte Aktualisierung: 13. Mai 2025</p>

        {/* Section blocks */}
        {[
          {
            title: 'Einleitung',
            content: (
              <>
                Die German UDS Foundation („wir“, „uns“ oder „unser“) respektiert Ihre Privatsphäre und verpflichtet sich, Ihre personenbezogenen Daten zu schützen. Diese Datenschutzerklärung erklärt, wie wir personenbezogene Informationen erfassen, verarbeiten und verwenden, wenn Sie unsere Website besuchen oder mit uns interagieren. Wir erfüllen die Anforderungen der EU-Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
              </>
            ),
          },
          {
            title: 'Welche Daten wir erfassen',
            content: (
              <>
                Wir erfassen sowohl personenbezogene als auch technische Informationen, wenn Sie mit unserer Website interagieren.
                <ul className="list-disc ml-6 mt-2">
                  <li>Personenbezogene Daten (z. B. Name, E-Mail-Adresse, Telefonnummer), die Sie uns freiwillig übermitteln</li>
                  <li>IP-Adresse, Browsertyp, Betriebssystem, verweisende URL, besuchte Seiten, Datum/Uhrzeit des Zugriffs</li>
                  <li>Geräteinformationen wie Typ, Modell und Mobilfunknetz</li>
                  <li>Standortdaten, wenn diese vom Nutzer ausdrücklich aktiviert wurden</li>
                </ul>
              </>
            ),
          },
          {
            title: 'Hosting',
            content: (
              <>
                Unsere Website wird auf GitHub Pages gehostet. GitHub Inc. kann technische Daten wie IP-Adressen und Browser-Metadaten gemäß ihrer eigenen Datenschutzrichtlinien verarbeiten. Weitere Informationen finden Sie unter:{' '}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  className="text-orange-600 underline hover:text-orange-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Datenschutzerklärung
                </a>
                .
              </>
            ),
          },
          {
            title: 'Cookies und Web-Beacons',
            content: (
              <>
                Wir verwenden Cookies und ähnliche Tracking-Technologien, um die Funktionalität der Website zu gewährleisten, Analysen durchzuführen und Ihre Nutzererfahrung zu verbessern. Dazu gehören Sitzungs-Cookies, persistente Cookies und Drittanbieter-Cookies. Sie können Cookies über Ihre Browsereinstellungen verwalten. Das Deaktivieren von Cookies kann die Funktionalität der Website beeinträchtigen.
              </>
            ),
          },
          {
            title: 'Wie wir Ihre Daten verwenden',
            content: (
              <ul className="list-disc ml-6">
                <li>Betrieb und Wartung unserer Website</li>
                <li>Beantwortung Ihrer Anfragen</li>
                <li>Versand wichtiger Mitteilungen, Updates und administrativer Nachrichten</li>
              </ul>
            ),
          },
          {
            title: 'Weitergabe Ihrer Daten',
            content: (
              <>
                Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht. Wir können Ihre Daten an vertrauenswürdige Dienstleister (z. B. Hosting, Analyse) weitergeben, die sie in unserem Auftrag verarbeiten. Eine Weitergabe erfolgt auch, wenn sie gesetzlich vorgeschrieben ist oder zur Wahrung rechtlicher Interessen erforderlich ist.
              </>
            ),
          },
          {
            title: 'Ihre Rechte',
            content: (
              <>
                Als betroffene Person gemäß DSGVO haben Sie das Recht:
                <ul className="list-disc ml-6 mt-2">
                  <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Berichtigung unzutreffender oder unvollständiger Daten zu verlangen</li>
                  <li>Löschung Ihrer Daten zu verlangen („Recht auf Vergessenwerden“)</li>
                  <li>Die Verarbeitung unter bestimmten Bedingungen einzuschränken</li>
                  <li>Der Verarbeitung auf Basis berechtigter Interessen zu widersprechen</li>
                </ul>
              </>
            ),
          },
          {
            title: 'Datenschutzbeauftragter',
            content: (
              <address className="not-italic">
                German UDS Foundation<br />
                Marlene-Dietrich-Allee 14<br />
                14482 Potsdam, Deutschland<br />
                E-Mail:{' '}
                <a
                  href="mailto:office@foundation.german-uds.de"
                  className="text-orange-600 underline hover:text-orange-700"
                >
                  office@foundation.german-uds.de
                </a>
              </address>
            ),
          },
          {
            title: 'Änderungen dieser Datenschutzerklärung',
            content: (
              <>
                Wir behalten uns das Recht vor, diese Datenschutzerklärung zu aktualisieren, um rechtliche, technische oder geschäftliche Änderungen zu berücksichtigen. Die aktualisierte Richtlinie wird auf dieser Seite veröffentlicht und tritt mit ihrer Veröffentlichung in Kraft.
              </>
            ),
          },
        ].map(({ title, content }, idx) => (
          <motion.section
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <div className="text-base leading-relaxed">{content}</div>
          </motion.section>
        ))}
      </section>
    </main>
  );
}
