'use client';
import { motion } from 'framer-motion';

export default function Programs() {
  const programs = [
    {
      title: 'Unterstützung der German UDS Aktivitäten',
      description: 'Bereitstellung wesentlicher Ressourcen und Infrastrukturen zur Aufrechterhaltung und Erweiterung der German UDS-Initiativen.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    {
      title: 'Globale Zusammenarbeit in der Forschung',
      description: 'Förderung internationaler Partnerschaften zur Weiterentwicklung von Forschung und Innovation in der digitalen Bildung.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
      title: 'Campus of Virtual Education',
      description: 'Gestaltung der Zukunft des Lernens durch immersive virtuelle Bildungsumgebungen.',
      image: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg',
    },
    {
      title: 'German-UDS.Academy',
      description: 'Förderung digitaler Plattformen, die Bildung für alle zugänglich machen.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    },
  ];

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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Unsere Programme</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Entdecken Sie unsere innovativen Initiativen zur Gestaltung der digitalen Bildungszukunft
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="overflow-hidden rounded-xl card-blue-gradient text-body hover:shadow-glow transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">{program.title}</h2>
                  <p className="text-body">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
