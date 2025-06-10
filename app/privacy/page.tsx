import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-400">Last Updated: 13 May 2025</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          German UDS Foundation ('we', 'us', or 'our') respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, process, and use personal information when you visit our website or interact with us. We comply with the requirements of the EU General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What Data We Collect</h2>
        <p>We collect both personal and technical information when you interact with our website.</p>
        <ul className="list-disc ml-6">
          <li>Personal data (such as name, email address, and phone number) that you voluntarily provide when contacting us</li>
          <li>IP address, browser type, operating system, referring URL, pages visited, and date/time of access</li>
          <li>Device information such as type, model, and mobile network</li>
          <li>Location data, if explicitly enabled by the user</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hosting</h2>
        <p>
          We are hosting the website on GitHub Pages. GitHub Inc. may process technical data such as IP addresses and browser metadata in accordance with their own privacy policies. For more information, visit: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" className="text-accent underline" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Cookies and Web Beacons</h2>
        <p>
          We use cookies and similar tracking technologies to ensure website functionality, collect analytics, and enhance your user experience. These include session cookies, persistent cookies, and third-party cookies. You can control cookies through your browser settings. Disabling cookies may affect parts of the website.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>To operate and maintain our website</li>
          <li>To respond to your questions and inquiries</li>
          <li>To send important notices, updates, and administrative messages</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Sharing of Your Information</h2>
        <p>
          We do not sell or rent your personal information. We may share your data with trusted service providers (e.g., web hosting, analytics) who process it under our instructions. Data may also be shared if required by law or necessary to protect legal interests.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p>As a data subject under the GDPR, you have the right to:</p>
        <ul className="list-disc ml-6">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request deletion of your data ('right to be forgotten')</li>
          <li>Restrict processing under certain conditions</li>
          <li>Object to processing based on legitimate interests</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Protection Officer</h2>
        <address className="not-italic">
          German UDS Foundation<br />
          Marlene-Dietrich-Allee 14,<br />
          14482 Potsdam, Germany<br />
          Email: <a href="mailto:office@foundation.german-uds.de" className="text-accent underline">office@foundation.german-uds.de</a>
        </address>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy to reflect changes in legal, technical, or business developments. The updated policy will be published on this page and becomes effective immediately upon posting.
        </p>
      </section>
    </main>
  );
} 