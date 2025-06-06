'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'nav-blur bg-white/90 dark:bg-[#001B3F]/90 shadow-lg' : 'nav-blur bg-white/80 dark:bg-[#001B3F]/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/UDS_foundation_logo_neg-on-DarkBlue_rgb.png"
              alt="German University of Digital Science Foundation"
              width={180}
              height={40}
              className="h-10 w-auto dark:hidden"
              priority
            />
            <Image
              src="/UDS_foundation_logo_neg-on-DarkBlue_rgb.png"
              alt="German University of Digital Science Foundation"
              width={180}
              height={40}
              className="h-10 w-auto hidden dark:block"
              priority
            />
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors link-hover"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6">
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}></span>
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#001B3F]/95"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-accent block px-3 py-4 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;