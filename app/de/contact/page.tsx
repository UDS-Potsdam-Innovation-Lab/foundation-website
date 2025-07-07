'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="pt-24 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Kontakt</h1>
            <p className="text-xl text-[#0a0f4a] max-w-3xl mx-auto">
              Kontaktieren Sie uns, um mehr über unsere Mission zu erfahren und wie Sie sich einbringen können.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-[#dbeafe] rounded-br-2xl border border-gray-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 p-8 text-[#0a0f4a]">
                <h2 className="text-2xl font-bold mb-4 text-[#f7931e]">Adresse</h2>
                <p>
                  German UDS Foundation<br />
                  Marlene-Dietrich-Allee 14<br />
                  14482 Potsdam<br />
                  Deutschland
                </p>
              </div>

              <div className="bg-[#dbeafe] rounded-br-2xl border border-gray-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 p-8 text-[#0a0f4a]">
                <h2 className="text-2xl font-bold mb-4 text-[#f7931e]">Kontaktdaten</h2>
                <div className="space-y-4">
                  <p>
                    <strong>E-Mail:</strong><br />
                    <a href="mailto:office@foundation.german-uds.de" className="text-[#000080] hover:underline">
                      office@foundation.german-uds.de
                    </a>
                  </p>
                  <p>
                    <strong>Telefon:</strong><br />
                    +49 331 968 920 – 20
                  </p>
                </div>
              </div>

              <div className="bg-[#dbeafe] rounded-br-2xl border border-gray-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 p-8 text-[#0a0f4a]">
                <h2 className="text-2xl font-bold mb-4 text-[#f7931e]">Spendeninformationen</h2>
                <div className="space-y-2">
                  <p>
                    <strong>IBAN:</strong><br />
                    DE92 1009 0900 1744 3596 00
                  </p>
                  <p>
                    <strong>BIC:</strong><br />
                    GENODEF1P01
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-between"
            >
              <div className="relative w-full h-full min-h-[760px] rounded-br-2xl overflow-hidden border border-gray-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.56031081689!2d13.114972077129813!3d52.38893897202708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851fb407e3c71%3A0xba68ac8043e34259!2sGerman%20University%20Of%20Digital%20Science%20(UDS)!5e1!3m2!1sen!2sde!4v1751035903278!5m2!1sen!2sde"
                  className="absolute w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort der German UDS Foundation"
                ></iframe>
              </div>
              <p className="text-sm text-[#0a0f4a] text-center mt-2">
                Kartendaten ©2025 Google
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
