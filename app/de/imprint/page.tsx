import React from 'react';

export default function Imprint() {
  return (
    <main className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
        <address className="not-italic">
          <strong>German UDS Stiftung</strong><br />
          Marlene-Dietrich-Allee 14<br />
          14482 Potsdam<br />
          Deutschland
        </address>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
        <p><strong>Telefon:</strong> +49 (0) 331 968 920 20</p>
        <p><strong>E-Mail:</strong> <a href="mailto:office@foundation.german-uds.de" className="text-accent underline">office@foundation.german-uds.de</a></p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Vertreten durch</h2>
        <p><strong>Geschäftsführung:</strong> Prof. Dr. Mike Friedrichsen &amp; Prof. Dr. Christoph Meinel</p>
        <p><strong>Registergericht:</strong> Amtsgericht Potsdam</p>
        <p><strong>Handelsregisternummer:</strong> HRB 35458</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Haftung für Inhalte</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
          TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
          sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>. Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </main>
  );
}
