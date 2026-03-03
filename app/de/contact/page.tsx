'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="pt-24 bg-gradient-to-b from-white to-blue-100 scroll-smooth min-h-screen">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Kontakt</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kontaktieren Sie uns, um mehr über unsere Mission zu erfahren und wie Sie sich einbringen können.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.div
                className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#0066FF] shadow-lg hover:shadow-2xl p-6 sm:p-8 text-gray-700 transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#0066FF]">Adresse</h2>
                <p className="text-sm sm:text-base">
                  German UDS Foundation<br />
                  Marlene-Dietrich-Allee 14<br />
                  14482 Potsdam<br />
                  Deutschland
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#0066FF] shadow-lg hover:shadow-2xl p-6 sm:p-8 text-gray-700 transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#0066FF]">Kontaktdaten</h2>
                <div className="space-y-4 text-sm sm:text-base">
                  <p>
                    <strong>E-Mail:</strong><br />
                    <a href="mailto:office@foundation.german-uds.de" className="text-[#0066FF] hover:underline">
                      office@foundation.german-uds.de
                    </a>
                  </p>
                  <p>
                    <strong>Telefon:</strong><br />
                    +49 331 968 920 – 20
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#0066FF] shadow-lg hover:shadow-2xl p-6 sm:p-8 text-gray-700 transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#0066FF]">Spendeninformationen</h2>
                <div className="space-y-2 text-sm sm:text-base">
                  <p>
                    <strong>German UDS Foundation:</strong>
                  </p>
                  <p>
                    <strong>IBAN:</strong><br />
                    DE45 1605 0000 1001 0024 97
                  </p>
                  <p>
                    <strong>BIC:</strong><br />
                    WELADED1PMB
                  </p>
                  <p>
                    <strong>Bank:</strong><br />
                    Mittelbrandenburgische Sparkasse
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between"
            >
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full rounded-3xl overflow-hidden border-2 border-gray-100 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.56031081689!2d13.114972077129813!3d52.38893897202708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851fb407e3c71%3A0xba68ac8043e34259!2sGerman%20University%20Of%20Digital%20Science%20(UDS)!5e1!3m2!1sen!2sde!4v1751035903278!5m2!1sen!2sde"
                  className="absolute w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort der German UDS Foundation"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">
                Kartendaten ©2025 Google
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
