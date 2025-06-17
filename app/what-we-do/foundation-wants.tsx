'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/ui/SectionTitle';

export default function FoundationWants() {
  return (
    <section className="py-20 card-blue-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Shaping the Future: The Foundation's Vision for Digital Education and Research"
        />

        <div className="w-full max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/foundation_wants.png"
              alt="Foundation Goals Illustration"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              quality={100}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-body max-w-3xl mx-auto">
            We are committed to creating an inclusive digital education ecosystem that empowers individuals and institutions to thrive in the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
