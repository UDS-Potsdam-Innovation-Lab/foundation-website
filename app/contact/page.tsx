'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="pt-24">
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 gradient-text">Contact Us</h1>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Get in touch with us to learn more about our mission and how you can contribute
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="card-blue-gradient p-8 rounded-xl text-white">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Address</h2>
                <p className="text-body">
                  German UDS Foundation<br />
                  Marlene-Dietrich-Allee 14<br />
                  14482 Potsdam<br />
                  Germany
                </p>
              </div>

              <div className="card-blue-gradient p-8 rounded-xl text-white">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Details</h2>
                <div className="space-y-4">
                  <p className="text-body">
                    <strong>Email:</strong><br />
                    <a href="mailto:office@foundation.german-uds.de" className="text-accent hover:text-secondary">
                      office@foundation.german-uds.de
                    </a>
                  </p>
                  <p className="text-body">
                    <strong>Phone:</strong><br />
                    +49 331 968 920 – 20
                  </p>
                </div>
              </div>

              <div className="card-blue-gradient p-8 rounded-xl text-white">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Donation Details</h2>
                <div className="space-y-2">
                  <p className="text-body">
                    <strong>IBAN:</strong><br />
                    DE92 1009 0900 1744 3596 00
                  </p>
                  <p className="text-body">
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
              className="space-y-4"
            >
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=German%20UDS%20Foundation%2C%20Potsdam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="absolute w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="German UDS Foundation Location"
                ></iframe>
              </div>
              <p className="text-sm text-body text-center">
                Map data ©2025 Google
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
