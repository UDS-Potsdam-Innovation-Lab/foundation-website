'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#0a0f4a]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-2 text-center text-[#000080]"
        >
          Privacy Policy
        </motion.h1>
        <p className="mb-8 text-sm text-gray-600 text-center">Last Updated: 10 July 2025</p>

        {/* Section blocks */}
        {[
          {
            title: 'Introduction',
            content: (
              <>
                German UDS Foundation ("we", "us", or "our") respects your privacy and is committed to protecting your
                personal data. This Privacy Policy explains how we collect, process, and use personal information when
                you visit our website or interact with us. We comply with the requirements of the EU General Data
                Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).
              </>
            ),
          },
          {
            title: 'What Data We Collect',
            content: (
              <>
                We collect both personal and technical information when you interact with our website.
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Personal data (such as name, email address, and phone number) that you voluntarily provide when
                    contacting us
                  </li>
                  <li>
                    IP address, browser type, operating system, referring URL, pages visited, and date/time of access
                  </li>
                  <li>Device information such as type, model, and mobile network</li>
                  <li>Location data, if explicitly enabled by the user</li>
                </ul>
              </>
            ),
          },
          {
            title: 'Hosting',
            content: (
              <>
                We are hosting the website on GitHub Pages. GitHub Inc. may process technical data such as IP addresses
                and browser metadata in accordance with their own privacy policies. For more information, visit:{' '}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  className="text-orange-600 underline hover:text-orange-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Privacy Statement
                </a>
                .
              </>
            ),
          },
          {
            title: 'Cookies and Web Beacons',
            content: (
              <>
                We use cookies and similar tracking technologies to ensure website functionality, collect analytics, and
                enhance your user experience. These include session cookies, persistent cookies, and third-party
                cookies. You can control cookies through your browser settings. Disabling cookies may affect parts of
                the website.
              </>
            ),
          },
          {
            title: 'How We Use Your Information',
            content: (
              <ul className="list-disc ml-6">
                <li>To operate and maintain our website</li>
                <li>To respond to your questions and inquiries</li>
                <li>To send important notices, updates, and administrative messages</li>
              </ul>
            ),
          },
          {
            title: 'Sharing of Your Information',
            content: (
              <>
                We do not sell or rent your personal information. We may share your data with trusted service providers
                (e.g., web hosting, analytics) who process it under our instructions. Data may also be shared if
                required by law or necessary to protect legal interests.
              </>
            ),
          },
          {
            title: 'Your Rights',
            content: (
              <>
                As a data subject under the GDPR, you have the right to:
                <ul className="list-disc ml-6 mt-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request deletion of your data ("right to be forgotten")</li>
                  <li>Restrict processing under certain conditions</li>
                  <li>Object to processing based on legitimate interests</li>
                </ul>
              </>
            ),
          },
          {
            title: 'Data Protection Officer',
            content: (
              <address className="not-italic">
                German UDS Foundation<br />
                Marlene-Dietrich-Allee 14<br />
                14482 Potsdam, Germany<br />
                Email:{' '}
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
            title: 'Changes to This Privacy Policy',
            content: (
              <>
                We reserve the right to update this Privacy Policy to reflect changes in legal, technical, or business
                developments. The updated policy will be published on this page and becomes effective immediately upon
                posting.
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
