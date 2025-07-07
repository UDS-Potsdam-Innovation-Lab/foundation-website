import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Datenschutzerklärung</h1>
      <p className="mb-4 text-sm text-gray-400">Letzte Aktualisierung: 13. Mai 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Einleitung</h2>
        <p>
          Die German UDS Stiftung („wir“, „uns“ oder „unser“) respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz Ihrer personenbezogenen Daten. Diese Datenschutzerklärung erläutert, wie wir personenbezogene Daten erheben, verarbeiten und verwenden, wenn Sie unsere Website besuchen oder mit uns interagieren. Wir erfüllen die Anforderungen der EU-Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Welche Daten wir erheben</h2>
        <p>Wir erheben sowohl personenbezogene als auch technische Informationen, wenn Sie mit unserer Website interagieren.</p>
        <ul className="list-disc ml-6">
          <li>Personenbezogene Daten (z. B. Name, E-Mail-Adresse, Telefonnummer), die Sie uns freiwillig übermitteln</li>
          <li>IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, besuchte Seiten, Datum/Uhrzeit des Zugriffs</li>
          <li>Geräteinformationen wie Typ, Modell und Mobilfunknetz</li>
          <li>Standortdaten, sofern vom Nutzer ausdrücklich aktiviert</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hosting</h2>
        <p>
          Unsere Website wird auf GitHub Pages gehostet. GitHub Inc. kann technische Daten wie IP-Adressen und Browser-Metadaten gemäß ihrer eigenen Datenschutzrichtlinie verarbeiten. Weitere Informationen finden Sie hier: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" className="text-accent underline" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Cookies und Web Beacons</h2>
        <p>
          Wir verwenden Cookies und ähnliche Tracking-Technologien, um die Funktionalität der Website sicherzustellen, Analysen zu erheben und Ihre Nutzererfahrung zu verbessern. Dazu gehören Sitzungs-Cookies, persistente Cookies und Drittanbieter-Cookies. Sie können Cookies über Ihre Browsereinstellungen steuern. Die Deaktivierung von Cookies kann die Nutzung bestimmter Funktionen der Website beeinträchtigen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Wie wir Ihre Daten verwenden</h2>
        <ul className="list-disc ml-6">
          <li>Zum Betrieb und zur Wartung unserer Website</li>
          <li>Zur Beantwortung Ihrer Fragen und Anfragen</li>
          <li>Zur Versendung wichtiger Mitteilungen, Updates und administrativer Informationen</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Weitergabe Ihrer Daten</h2>
        <p>
          Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht. Wir geben Ihre Daten ggf. an vertrauenswürdige Dienstleister (z. B. Hosting, Analyse) weiter, die diese in unserem Auftrag verarbeiten. Eine Weitergabe kann auch erfolgen, wenn dies gesetzlich erforderlich ist oder rechtliche Interessen schützt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Ihre Rechte</h2>
        <p>Als betroffene Person im Sinne der DSGVO haben Sie das Recht:</p>
        <ul className="list-disc ml-6">
          <li>Auskunft über Ihre personenbezogenen Daten zu erhalten</li>
          <li>Unrichtige oder unvollständige Daten berichtigen zu lassen</li>
          <li>Die Löschung Ihrer Daten zu verlangen („Recht auf Vergessenwerden“)</li>
          <li>Die Verarbeitung unter bestimmten Bedingungen einzuschränken</li>
          <li>Der Verarbeitung aus berechtigtem Interesse zu widersprechen</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Datenschutzbeauftragter</h2>
        <address className="not-italic">
          German UDS Stiftung<br />
          Marlene-Dietrich-Allee 14,<br />
          14482 Potsdam, Deutschland<br />
          E-Mail: <a href="mailto:office@foundation.german-uds.de" className="text-accent underline">office@foundation.german-uds.de</a>
        </address>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns das Recht vor, diese Datenschutzerklärung zu aktualisieren, um rechtlichen, technischen oder geschäftlichen Entwicklungen Rechnung zu tragen. Die aktualisierte Erklärung wird auf dieser Seite veröffentlicht und tritt mit Veröffentlichung in Kraft.
        </p>
      </section>
    </main>
  );
}
