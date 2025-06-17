'use client';
import Purpose from './purpose';
import FoundationWants from './foundation-wants';
import SupportUs from './support-us';
import Interested from './interested';

export default function WhatWeDo() {
  return (
    <main className="pt-24">
      <section id="purpose" className="scroll-mt-32">
        <Purpose />
      </section>
      
      <section id="foundation-wants" className="scroll-mt-32">
        <FoundationWants />
      </section>
      
      <section id="support-us" className="scroll-mt-32">
        <SupportUs />
      </section>
      
      <section id="interested" className="scroll-mt-32">
        <Interested />
      </section>
    </main>
  );
}