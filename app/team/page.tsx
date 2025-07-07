'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: 'Prof. Dr. Mike Friedrichsen',
      title: 'Chairman',
      email: 'mike.friedrichsen@german-uds.de',
      image: '/mike_f.jpg',
      videoUrl: 'https://player.vimeo.com/video/1092448322?badge=0&autopause=0&player_id=0&app_id=58479',
      bio: 'Mike Friedrichsen was a professor of Business Informatics and Digital Media at Stuttgart Media University for 25 years and is a founding trustee of the German UDS Foundation. Starting in 2023, he became Co-Founder and Founding President of the German University of Digital Science, as well as CEO of the university\'s operating company, German UDS gGmbH'
    },
    {
      name: 'Syster Friedrichsen',
      title: 'Deputy Chairwoman',
      email: 'syster.friedrichsen@foundation.german-uds.de',
      image: '/syster_f.jpg',
      videoUrl: 'https://player.vimeo.com/video/1092448702?badge=0&autopause=0&player_id=0&app_id=58479',
      bio: 'Syster Friedrichsen is Managing Partner of ditcom GmbH and FB CloudHouse GmbH. Previously, she held various managing director positions in companies within the communications industry. She studied Communication Science and Geography at Johannes Gutenberg University Mainz and Freie Universität Berlin, earning a Magistra Artium degree'
    },
    {
      name: 'Wulf Wersig',
      title: 'Deputy Chairman',
      email: 'wulf.wersig@foundation.german-uds.de',
      image: '/wulf_w.jpg',
      videoUrl: 'https://player.vimeo.com/video/1092449059?badge=0&autopause=0&player_id=0&app_id=58479',
      bio: 'Wulf Wersig was Headmaster and Managing Director of the Regional Vocational Education and Training Center for Business in the state capital Kiel until 2016—an institution awarded the German School Prize in 2014. After studying Economics and Business Education in Kiel and Berlin, he witnessed the digital transformation from its early days and actively implemented it in his professional environment. From 2017 to 2023, he served as Managing Director of the operating company German UDS gGmbH'
    },
    {
      name: 'Prof. Dr. Christoph Meinel',
      title: 'Representative',
      email: 'christoph.meinel@german-uds.de',
      image: '/ch_m.jpg',
      videoUrl: 'https://player.vimeo.com/video/1094752169?badge=0&autopause=0&player_id=0&app_id=58479',
      bio: 'Christoph Meinel was Managing Director and CEO of the Hasso Plattner Institute for Digital Engineering (HPI) at the University of Potsdam from 2004 to 2023. He is Professor Emeritus (C4) of Computer Science at the University of Potsdam and held the Chair of Internet Technologies and Systems at HPI. In 2023, he became Co-Founder and Founding President of the German University of Digital Science, as well as CEO of the university\'s operating company, German UDS gGmbH'
    }
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
            <h1 className="text-4xl font-bold mb-6 text-[#000080]">Our Team</h1>
            <p className="text-xl text-[#0a0f4a] max-w-3xl mx-auto">
              Meet the visionaries leading the German University of Digital Science Foundation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {teamMembers.map((member, index) => (
              <div key={index} className="group perspective h-full">
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flipped[index] ? 'rotate-y-180' : ''}`}
                  style={{ minHeight: 480 }}
                >
                  {/* Front Side */}
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
                        Contact
                      </a>
                      {member.videoUrl && (
                        <button
                          className="inline-block w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-center transition-all duration-300 hover:scale-105"
                          onClick={() => handleFlip(index, true)}
                          aria-label={`Show video intro for ${member.name}`}
                        >
                          Quick Intro
                        </button>
                      )}
                    </div>
                  </motion.div>

                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 w-full h-full bg-[#e8f1fb] rounded-br-2xl border border-gray-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 p-10 flex flex-col items-center justify-center transition-opacity duration-300 ${flipped[index] ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} rotate-y-180`}
                  >
                    {member.videoUrl ? (
                      <>
                        <div className="relative w-full mb-4 rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: '56.25%' }}>
                          <iframe
                            src={member.videoUrl}
                            title={`Video intro for ${member.name}`}
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
                            aria-label={`Back to profile for ${member.name}`}
                          >
                            Back
                          </button>
                        </div>
                      </>
                    ) : (
                      <p className="text-[#0a0f4a]">No video available.</p>
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
