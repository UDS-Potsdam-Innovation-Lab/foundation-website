'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function Interested() {
  const contactInfo = [
    {
      title: 'Bank Details',
      icon: '🏦',
      items: [
        { label: 'IBAN', value: 'DE92 1009 0900 1744 3596 00' },
        { label: 'BIC', value: 'GENODEF1P01' },
        { label: 'Bank', value: 'PSD Bank Berlin-Brandenburg eG' }
      ]
    },
    {
      title: 'Contact Information',
      icon: '📧',
      items: [
        { label: 'Email', value: 'office@foundation.german-uds.de', isEmail: true },
        { label: 'Phone', value: '+49 331 968 920 – 20' },
        { 
          label: 'Address',
          value: 'Marlene-Dietrich-Allee 14\n14482 Potsdam\nGermany',
          isMultiline: true
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#001B3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get in Touch"
          subtitle="Ready to make a difference? Here's how you can reach us"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-[#002B5C] p-8 rounded-xl hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3" role="img" aria-label={section.title}>
                  {section.icon}
                </span>
                <h3 className="text-2xl font-bold gradient-text">{section.title}</h3>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">
                      {item.label}:
                    </p>
                    {item.isEmail ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-accent hover:text-secondary transition-colors block"
                      >
                        {item.value}
                      </a>
                    ) : item.isMultiline ? (
                      item.value.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex} className="text-gray-600 dark:text-gray-300">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="btn-primary inline-flex items-center"
          >
            Contact Us
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}