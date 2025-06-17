'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function CoreBeliefs() {
  // const beliefs = [
  //   {
  //     title: 'Rethinking Education with AI',
  //     description: 'Transforming traditional education models through innovative AI integration while maintaining human-centered learning approaches.',
  //     details: 'We believe in leveraging artificial intelligence to enhance learning experiences while ensuring education remains personal and engaging.',
  //     icon: '🤖'
  //   },
  //   {
  //     title: 'Supporting Academic Visionaries',
  //     description: 'Empowering forward-thinking educators and researchers who drive the evolution of digital education.',
  //     details: 'Our foundation actively supports pioneers in digital education who push the boundaries of traditional teaching methods.',
  //     icon: '👨‍🏫'
  //   },
  //   {
  //     title: 'Digital-First Education',
  //     description: 'Creating immersive, accessible learning experiences through cutting-edge digital platforms and methodologies.',
  //     details: 'We prioritize digital solutions that make education more accessible, interactive, and effective for learners worldwide.',
  //     icon: '💻'
  //   },
  //   {
  //     title: 'Global Connectivity in Science',
  //     description: 'Fostering worldwide collaboration and knowledge sharing through advanced digital infrastructure.',
  //     details: 'Building bridges between institutions and researchers globally to accelerate scientific progress and innovation.',
  //     icon: '🌍'
  //   },
  //   {
  //     title: 'Sustainable Digital Future',
  //     description: 'Promoting environmentally conscious digital education practices and sustainable technological solutions.',
  //     details: 'We believe in developing educational technology that considers its environmental impact and promotes sustainability.',
  //     icon: '🌱'
  //   },
  //   {
  //     title: 'Inclusive Learning Environment',
  //     description: 'Creating educational opportunities that embrace diversity and ensure accessibility for all learners.',
  //     details: 'Our commitment to inclusive education drives us to develop solutions that accommodate different learning styles and needs.',
  //     icon: '🤝'
  //   },
  //   {
  //     title: 'Research Excellence',
  //     description: 'Advancing digital science through rigorous research and innovative methodologies.',
  //     details: 'Supporting groundbreaking research initiatives that push the boundaries of digital education and technology.',
  //     icon: '🔬'
  //   },
  //   {
  //     title: 'Industry Collaboration',
  //     description: 'Building strong partnerships with industry leaders to enhance practical education.',
  //     details: 'Creating meaningful connections between academia and industry to provide real-world learning opportunities.',
  //     icon: '🤝'
  //   },
  //   {
  //     title: 'Lifelong Learning',
  //     description: 'Supporting continuous education and professional development in the digital age.',
  //     details: 'Providing resources and platforms for ongoing learning and skill development throughout one\'s career.',
  //     icon: '��'
  //   }
  // ];

  return (
    <main className="pt-24">
      <section className="py-20 card-blue-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Core Beliefs"
            subtitle="Shaping the future of education through innovation and technology"
          />

          {/*
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              ...
            ))}
          </div>
          */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {/* First row: Mike and Syster */}
            <div className="card-blue-gradient p-8 rounded-xl text-white hover:shadow-glow transform transition-all duration-300 flex flex-col items-center w-full md:max-w-2xl xl:max-w-3xl">
              <h3 className="text-2xl font-bold gradient-text mb-6">Prof. Dr. Mike Friedrichsen</h3>
              <div className="relative w-full mb-4 rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1092448503?badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Mike_Short Statement"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </div>
            <div className="card-blue-gradient p-8 rounded-xl text-white hover:shadow-glow transform transition-all duration-300 flex flex-col items-center w-full md:max-w-2xl xl:max-w-3xl">
              <h3 className="text-2xl font-bold gradient-text mb-6">Syster Friedrichsen</h3>
              <div className="relative w-full mb-4 rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1092448821?badge=0&autopause=0&player_id=0&app_id=58479/embed"
                  title="Syster_Intro"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </div>
            {/* Second row: Wulf centered */}
            <div className="card-blue-gradient p-8 rounded-xl text-white hover:shadow-glow transform transition-all duration-300 flex flex-col items-center w-full md:col-span-2 md:max-w-2xl xl:max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text mb-6">Wulf Wersig</h3>
              <div className="relative w-full mb-4 rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1092449114?badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Wulf_Statement 01"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}