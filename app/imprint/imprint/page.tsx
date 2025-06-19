import React from 'react';

export default function Imprint() {
  return (
    <main className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Imprint</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Company Information</h2>
        <address className="not-italic">
          <strong>German UDS Foundation</strong><br />
          Marlene-Dietrich-Allee 14<br />
          14482 Potsdam<br />
          Germany
        </address>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p><strong>Phone:</strong> +49 (0) 331 968 920 20</p>
        <p><strong>Email:</strong> <a href="mailto:office@foundation.german-uds.de" className="text-accent underline">office@foundation.german-uds.de</a></p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Legal Details</h2>
        <p><strong>Management:</strong> Prof. Dr. Mike Friedrichsen &amp; Prof. Dr. Christoph Meinel</p>
        <p><strong>Registration Court:</strong> Amtsgericht Potsdam</p>
        <p><strong>Registration Number:</strong> HRB 35458</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Responsibility for Content</h2>
        <p>
          The content of this website has been prepared with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the information provided. As a service provider, we are responsible for our own content on these pages in accordance with general laws (§ 7 Abs.1 TMG). However, according to §§ 8 to 10 TMG, we are not obligated to monitor third-party information transmitted or stored or to investigate circumstances that indicate unlawful activity.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EU Dispute Resolution</h2>
        <p>
          The European Commission provides a platform for online dispute resolution (OS) at <a href="https://ec.europa.eu/consumers/odr/" className="text-accent underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>. We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>
      </section>
    </main>
  );
} 