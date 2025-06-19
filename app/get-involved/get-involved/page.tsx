'use client';
import { motion } from 'framer-motion';

export default function GetInvolved() {
  const supportWays = [
    {
      title: 'Donations',
      description: 'Support our mission with a one-time or recurring donation to help fund digital education initiatives.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    {
      title: 'Endowments',
      description: 'Create a lasting impact through endowments that support long-term educational programs.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
      title: 'Contributions',
      description: 'Contribute your expertise, time, or resources to help advance our digital education mission.',
      image: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg',
    },
    {
      title: 'Project Funding',
      description: 'Fund specific projects that align with your interests in digital education and innovation.',
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Get Involved</h1>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Join us in our mission to transform digital education and create lasting impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {supportWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="overflow-hidden rounded-xl card-blue-gradient text-white hover:shadow-glow transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={way.image}
                    alt={way.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">{way.title}</h2>
                  <p className="text-body mb-4">{way.description}</p>
                  <button className="btn-primary px-6 py-2 rounded-full text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center p-8 rounded-xl card-blue-gradient text-white"
          >
            <h2 className="text-2xl font-bold mb-4 gradient-text">Tax Benefits</h2>
            <p className="text-body">
              Your support is tax-deductible. As a registered non-profit organization, we provide all necessary documentation for tax purposes.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}