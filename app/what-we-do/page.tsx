"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatWeDoPage() {
  const purposes = [
    {
      title: "Support German UDS",
      description:
        "Promoting and financing the German University of Digital Science through strategic initiatives and partnerships.",
      image: "/support-german-uds.jpg",
    },
    {
      title: "Global Cooperation",
      description:
        "Fostering international partnerships and collaboration to advance digital education worldwide.",
      image: "/support-german-uds.jpg",
    },
    {
      title: "Campus of Virtual Education (COVE)",
      description:
        "Pioneering virtual learning environments and innovative digital education platforms.",
      image: "/support-german-uds.jpg",
    },
    {
      title: "German-UDS.Academy",
      description:
        "Providing accessible, high-quality digital education through our online learning platform.",
      image: "/support-german-uds.jpg",
    },
  ];

  const supportMethods = [
    {
      title: "Donations",
      description: "Support our initiatives with flexible giving options.",
      image: "/support/1.png",
    },
    {
      title: "Endowments",
      description: "Leave a legacy through sustainable funding.",
      image: "/support/2.png",
    },
    {
      title: "Project Support",
      description: "Back specific projects that align with your interests.",
      image: "/support/3.png",
    },
    {
      title: "Corporate Partnerships",
      description: "Collaborate with us to drive innovation.",
      image: "/support/4.png",
    },
    {
      title: "Research Funding",
      description: "Fuel groundbreaking research and education.",
      image: "/support/5.png",
    },
    {
      title: "Infrastructure Support",
      description: "Help build and maintain our digital infrastructure.",
      image: "/support/6.png",
    },
  ];

  const contactInfo = [
    {
      title: "Bank Details",
      items: [
        { label: "IBAN", value: "DE92 1009 0900 1744 3596 00" },
        { label: "BIC", value: "GENODEF1P01" },
        { label: "Bank", value: "PSD Bank Berlin-Brandenburg eG" },
      ],
    },
    {
      title: "Contact Information",
      items: [
        { label: "Email", value: "office@foundation.german-uds.de", isEmail: true },
        { label: "Phone", value: "+49 331 968 920 – 20" },
        {
          label: "Address",
          value: "Marlene-Dietrich-Allee 14\n14482 Potsdam\nGermany",
          isMultiline: true,
        },
      ],
    },
  ];

  return (
    <main className="pt-8 bg-gradient-to-b from-[#dbeafe] via-[#a3c9f1] to-[#5a8ac3] scroll-smooth">
      <section id="purpose" className="scroll-mt-24 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#000080] mb-2">Our Purpose</h2>
            <p className="text-[#000080] max-w-2xl mx-auto">
              Discover how we're transforming digital education and shaping the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purposes.map((purpose, index) => (
              <div
                key={index}
                className="rounded-br-2xl overflow-hidden border border-gray-300 bg-[#e9f2fb] transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500"
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

      <section id="foundation-goals" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#000080]">Shaping the Future</h2>
            <p className="mt-2 text-lg text-[#000080]">The Foundation's Vision for Digital Education and Research</p>
          </motion.div>

          <div className="mt-10 mx-auto w-full max-w-4xl h-[400px] relative overflow-hidden hover:shadow-2xl hover:ring-2 hover:ring-orange-500">
            <Image
              src="/shaping-the-future.png"
              alt="Shaping the Future Image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              quality={100}
            />
          </div>
        </div>
      </section>

      <section id="support-us" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#000080]">Support Our Mission</h2>
            <p className="mt-2 text-lg text-[#000080]">Join us in transforming digital education through your generous support</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-4 mb-12 place-items-center">
            {supportMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[92%] h-[456px] rounded-br-2xl overflow-hidden border border-gray-300 bg-[#e9f2fb] transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col"
              >
                <div className="relative w-full h-[352px]">
                  <Image src={method.image} alt={method.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col justify-end flex-grow text-left">
                  <h3 className="text-[#f7931e] font-bold text-base mb-2">{method.title}</h3>
                  <p className="text-[#0a0f4a] text-sm whitespace-pre-line leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-screen bg-[#8fb5e2] py-8 px-4">
          <div className="max-w-4xl mx-auto text-center text-[#0a0f4a]">
            <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
              <h3 className="text-lg font-bold text-white">Tax Benefits</h3>
            </div>
            <p className="text-sm mt-3">
              All donations are tax-deductible. Documentation will be provided for your records.
            </p>
          </div>
        </div>
      </section>

      <section id="get-involved" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#0a0f4a]">Get in Touch</h2>
            <p className="mt-2 text-lg text-[#0a0f4a]">Ready to make a difference? Here's how you can reach us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-4 mb-12 place-items-center mt-10">
            {contactInfo.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[92%] h-full rounded-br-2xl overflow-hidden bg-[#aac8e8] transition duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-500 flex flex-col text-left"
              >
                <div className="bg-[#aac8e8] px-6 py-6">
                  <h3 className="text-[#f7931e] font-bold text-lg uppercase tracking-wide">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-4 px-6 py-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-1">
                      <p className="text-sm text-[#0a0f4a] font-semibold">{item.label}:</p>
                      {item.isEmail ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-[#0a0f4a] text-sm hover:underline block"
                        >
                          {item.value}
                        </a>
                      ) : item.isMultiline ? (
                        item.value.split("\n").map((line, lineIndex) => (
                          <p key={lineIndex} className="text-[#0a0f4a] text-sm">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-[#0a0f4a] text-sm">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full bg-[#5a8ac3] py-8 px-4">
          <div className="max-w-4xl mx-auto text-center text-[#0a0f4a]">
            <div className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300">
              <h3 className="text-lg font-bold text-white">Contact Us</h3>
            </div>
            <p className="text-sm mt-3">
              Have questions or want to get involved? We’re happy to hear from you and will respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
