'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/ui/SectionTitle';

export default function FoundationWants() {
  return (
    <section className="py-20 bg-[#c3dbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Shaping the Future: The Foundation's Vision for Digital Education and Research"
        />

        <div className="mt-10 mx-auto w-full max-w-4xl h-[400px] relative overflow-hidden hover:shadow-2xl hover:ring-2 hover:ring-orange-500">
          <Image
            src="/shaping-the-future.png"
            alt="Shaping the Future Image"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
