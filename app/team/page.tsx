'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: 'Prof. Dr. Mike Friedrichsen',
      title: 'Chairman',
      email: 'mike.friedrichsen@german-uds.de',
      image: '/mike_f.jpg',
      bio: 'Mike Friedrichsen was a professor of Business Informatics and Digital Media at Stuttgart Media University for 25 years and is a founding trustee of the German UDS Foundation. Starting in 2023, he became Co-Founder and Founding President of the German University of Digital Science, as well as CEO of the university\'s operating company, German UDS gGmbH.'
    },
    {
      name: 'Syster Friedrichsen',
      title: 'Deputy Chairwoman',
      email: 'syster.friedrichsen@foundation.german-uds.de',
      image: '/syster_f.jpg',
      bio: 'Syster Friedrichsen is Managing Partner of ditcom GmbH. Previously, she held various managing director positions in companies within the communications industry. She studied Communication Science and Geography at Johannes Gutenberg University Mainz and Freie Universität Berlin, earning a Magistra Artium degree.'
    },
    {
      name: 'Wulf Wersig',
      title: 'Deputy Chairman',
      email: 'wulf.wersig@foundation.german-uds.de',
      image: '/wulf_w.jpg',
      bio: 'Wulf Wersig was Headmaster and Managing Director of the Regional Vocational Education and Training Center for Business in the state capital Kiel until 2016—an institution awarded the German School Prize in 2014. After studying Economics and Business Education in Kiel and Berlin, he witnessed the digital transformation from its early days and actively implemented it in his professional environment. From 2017 to 2023, he served as Managing Director of the operating company German UDS gGmbH.'
    },
    {
      name: 'Prof. Dr. Christoph Meinel',
      title: 'Representative',
      email: 'christoph.meinel@german-uds.de',
      image: '/ch_m.jpg',
      bio: 'Christoph Meinel was Managing Director and CEO of the Hasso Plattner Institute for Digital Engineering (HPI) at the University of Potsdam from 2004 to 2023. He is Professor Emeritus (C4) of Computer Science at the University of Potsdam and held the Chair of Internet Technologies and Systems at HPI. In 2023, he became Co-Founder and Founding President of the German University of Digital Science, as well as CEO of the university\'s operating company, German UDS gGmbH.'
    }
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Our Team</h1>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Meet the visionaries leading the German University of Digital Science Foundation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white dark:bg-[#002B5C] rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 relative flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                      priority={index < 2}
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-2 gradient-text">{member.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold mb-4">{member.title}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-block w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-center transition-all duration-300 hover:scale-105"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}