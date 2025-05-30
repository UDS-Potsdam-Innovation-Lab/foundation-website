'use client';
import GermanUDSOverview from './german-uds-overview';
import Shareholding from './shareholding';
import Participation from './participation';

export default function Ecosystem() {
  return (
    <main className="pt-24">
      <section id="german-uds-overview" className="scroll-mt-32">
        <GermanUDSOverview />
      </section>
      
      <section id="shareholding" className="scroll-mt-32">
        <Shareholding />
      </section>
      
      <section id="participation" className="scroll-mt-32">
        <Participation />
      </section>
    </main>
  );
}