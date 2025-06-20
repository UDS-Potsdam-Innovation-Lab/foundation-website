'use client';

import SectionTitle from '../components/ui/SectionTitle';

export default function Purpose() {
  const purposes = [
    {
      title: 'Support German UDS',
      description: 'Promoting and financing the German University of Digital Science through strategic initiatives and partnerships.',
      image: '/support-german-uds.jpg',
    },
    {
      title: 'Global Cooperation',
      description: 'Fostering international partnerships and collaboration to advance digital education worldwide.',
      image: '/support-german-uds.jpg',
    },
    {
      title: 'Campus of Virtual Education (COVE)',
      description: 'Pioneering virtual learning environments and innovative digital education platforms.',
      image: '/support-german-uds.jpg',
    },
    {
      title: 'German-UDS.Academy',
      description: 'Providing accessible, high-quality digital education through our online learning platform.',
      image: '/support-german-uds.jpg',
    },
  ];

  return (
    <main className="pt-8 bg-[#c3dbf9]">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#000080] text-center mb-2">Our Purpose</h2>
          <p className="text-[#000080] text-center max-w-2xl mx-auto mb-10">
            Discover how we're transforming digital education and shaping the future
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purposes.map((purpose, index) => (
              <div
                key={index}
                className="rounded-tr-none rounded-tl-none rounded-bl-none rounded-br-2xl overflow-hidden border border-gray-300 bg-white transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500"
              >
                <div className="flex flex-col h-[140px]">
                  <div className="relative h-[50%] w-full">
                    <img
                      src={purpose.image}
                      alt={purpose.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-start pl-6">
                      <h3 className="text-white text-base font-semibold text-left">
                        {purpose.title}
                      </h3>
                    </div>
                  </div>
                  <div className="h-[50%] w-full p-4 flex items-center justify-start">
                    <p className="text-[#0a0f4a] text-sm leading-snug">
                      {purpose.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
