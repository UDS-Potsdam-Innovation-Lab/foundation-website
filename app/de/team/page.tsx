'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: 'Prof. Dr. Mike Friedrichsen',
      title: 'Vorstandsvorsitzender',
      email: 'mike.friedrichsen@german-uds.de',
      image: '/mike_f.jpg',
      videoUrl: 'https://player.vimeo.com/video/1092448322?badge=0&autopause=0&player_id=0&app_id=58479',
      bio: 'Mike Friedrichsen war 25 Jahre Professor für Wirtschaftsinformatik und Digitale Medien an der Hochschule der Medien Stuttgart und ist Gründungsstifter der German UDS Foundation. Seit 2023 ist er Mitbegründer und Gründungspräsident der German University of Digital Science sowie Geschäftsführer der Trägergesellschaft German UDS gGmbH.',
    },
    {
      name: 'Syster Friedrichsen',
      title: 'Vorständin',
      email: 'syster.friedrichsen@foundation.german-uds.de',
      image: '/syster_f.jpg',
      videoUrl: 'https://player.vimeo.com/video/1092448702?badge=0&autopause=0&player_id=0&app_id=58479',
      bio: 'Syster Friedrichsen ist geschäftsführende Gesellschafterin der ditcom GmbH und der FB CloudHouse GmbH. Nach ihrem Studium der Kommunikationswissenschaften und Geographie in Mainz und Berlin war Syster Friedrichsen als Projektleiterin tätig und hatte verschiedene Geschäftsführungspositionen in Unternehmen der Kommunikationsbranche inne.',
    },
    {
      name: 'Wulf Wersig',
      title: 'Vorstand',
      email: 'wulf.wersig@foundation.german-uds.de',
      image: '/wulf_w.jpg',
      videoUrl: 'https://player.vimeo.com/video/1092449059?badge=0&autopause=0&player_id=0&app_id=58479',
      bio: 'Wulf Wersig war bis 2016 Schulleiter und Geschäftsführer des Regionalen Berufsbildungszentrums Wirtschaft in der Landeshauptstadt Kiel – Trägerin des Deutschen Schulpreises. Nach seinem Studium der Volkswirtschaftslehre und Wirtschaftspädagogik in Kiel und Berlin setzte er die digitale Transformation aktiv in seinem beruflichen Umfeld um. Von 2017 bis 2023 war er Geschäftsführer der Trägergesellschaft German UDS gGmbH.',
    },
    {
      name: 'Prof. Dr. Christoph Meinel',
      title: 'Repräsentant',
      email: 'christoph.meinel@german-uds.de',
      image: '/ch_m.jpg',
      videoUrl: 'https://player.vimeo.com/video/1094752169?badge=0&autopause=0&player_id=0&app_id=58479',
      bio: 'Christoph Meinel war von 2004 bis 2023 Geschäftsführer und CEO des Hasso-Plattner-Instituts für Digital Engineering (HPI) an der Universität Potsdam. Er ist Professor emeritus (C4) der Informatik an der Universität Potsdam und leitete den Lehrstuhl für Internettechnologien und -systeme am HPI. 2023 wurde er Mitbegründer und Gründungspräsident der German University of Digital Science sowie Geschäftsführer der Trägergesellschaft German UDS gGmbH.',
    },
  ];

  const [flipped, setFlipped] = useState(Array(teamMembers.length).fill(false));

  const handleFlip = (idx: number, value: boolean) => {
    setFlipped((prev) => prev.map((f, i) => (i === idx ? value : f)));
  };

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
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Unser Team</h1>
            <p className="text-xl text-[#0a0f4a] max-w-3xl mx-auto">
              Lernen Sie die Visionäre kennen, die hinter der German UDS Foundation stehen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {teamMembers.map((member, index) => (
              <div key={index} className="group perspective h-full">
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flipped[index] ? 'rotate-y-180' : ''}`}
                  style={{ minHeight: 480 }}
                >
                  {/* Vorderseite */}
                  <motion.div
                    className={`absolute inset-0 w-full h-full bg-[#e8f1fb] rounded-br-2xl border border-gray-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 p-10 flex flex-col justify-between transition-opacity duration-300 ${flipped[index] ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10" style={{ minHeight: 220 }}>
                      <div className="w-36 h-36 md:w-40 md:h-40 relative flex-shrink-0 self-center md:self-start">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="rounded-full object-cover"
                          priority={index < 2}
                        />
                      </div>
                      <div className="flex-grow flex flex-col">
                        <h2 className="text-2xl font-bold mb-2 text-[#f7931e]">{member.name}</h2>
                        <p className="text-gray-600 font-semibold mb-4">{member.title}</p>
                        <p className="text-[#0a0f4a] mb-6 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 justify-center items-center mt-8">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-block w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-center transition-all duration-300 hover:scale-105"
                      >
                        Kontakt
                      </a>
                      {member.videoUrl && (
                        <button
                          className="inline-block w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-center transition-all duration-300 hover:scale-105"
                          onClick={() => handleFlip(index, true)}
                          aria-label={`Video-Intro für ${member.name} anzeigen`}
                        >
                          Kurzvorstellung
                        </button>
                      )}
                    </div>
                  </motion.div>

                  {/* Rückseite */}
                  <div
                    className={`absolute inset-0 w-full h-full bg-[#e8f1fb] rounded-br-2xl border border-gray-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 p-10 flex flex-col items-center justify-center transition-opacity duration-300 ${flipped[index] ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} rotate-y-180`}
                  >
                    {member.videoUrl ? (
                      <>
                        <div className="relative w-full mb-4 rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: '56.25%' }}>
                          <iframe
                            src={member.videoUrl}
                            title={`Video-Intro für ${member.name}`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                        <div className="flex justify-center mt-8">
                          <button
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-center transition-all duration-300 hover:scale-105"
                            onClick={() => handleFlip(index, false)}
                            aria-label={`Zurück zum Profil von ${member.name}`}
                          >
                            Zurück
                          </button>
                        </div>
                      </>
                    ) : (
                      <p className="text-[#0a0f4a]">Kein Video verfügbar.</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </main>
  );
}
