'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function SupportUs() {
  const supportMethods = [
    {
      title: 'Donations',
      description: 'Make a direct impact through one-time or recurring donations to support our digital education initiatives.',
      details: 'Every contribution helps us expand our reach and improve our programs.',
      icon: '🎁'
    },
    {
      title: 'Endowments',
      description: 'Create a lasting legacy by establishing an endowment fund for long-term support of digital education.',
      details: 'Endowments provide sustainable funding for future generations.',
      icon: '🏛️'
    },
    {
      title: 'Project-Specific Support',
      description: 'Fund specific initiatives that align with your interests in digital education and innovation.',
      details: 'Choose projects that match your vision for digital transformation.',
      icon: '🎯'
    },
    {
      title: 'Corporate Partnerships',
      description: 'Establish strategic partnerships to advance digital education through collaborative initiatives.',
      details: 'Join forces with us to create meaningful impact in the digital education landscape.',
      icon: '🤝'
    },
    {
      title: 'Research Funding',
      description: 'Support cutting-edge research in digital education and technological innovation.',
      details: 'Help us push the boundaries of what\'s possible in digital learning.',
      icon: '🔬'
    },
    {
      title: 'Infrastructure Support',
      description: 'Contribute to building and maintaining our digital education infrastructure.',
      details: 'Help us create robust platforms for delivering quality education.',
      icon: '🏗️'
    }
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Support Our Mission"
          subtitle="Join us in transforming digital education through your generous support"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {supportMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-blue-gradient p-6 rounded-xl text-white hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3" role="img" aria-label={method.title}>
                  {method.icon}
                </span>
                <h3 className="text-xl font-bold gradient-text">{method.title}</h3>
              </div>
              <p className="text-body mb-4">{method.description}</p>
              <p className="text-body text-sm">{method.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card-blue-gradient p-8 rounded-xl text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6">
              <span className="text-3xl" role="img" aria-label="Tax Benefits">✔️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Tax Benefits</h3>
            <p className="text-body mb-8">
              As a registered non-profit organization, all donations to the German UDS Foundation are tax-deductible. 
              We provide comprehensive documentation for tax purposes, ensuring your contribution is properly recognized.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-4 card-blue-gradient text-white rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">IBAN</h4>
                <p className="text-body">DE92 1009 0900 1744 3596 00</p>
              </div>
              <div className="p-4 card-blue-gradient text-white rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">BIC</h4>
                <p className="text-body">GENODEF1P01</p>
              </div>
              <div className="p-4 card-blue-gradient text-white rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Bank</h4>
                <p className="text-body">PSD Bank Berlin-Brandenburg eG</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}