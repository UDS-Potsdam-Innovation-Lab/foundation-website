'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Values',
      href: '/values',
      dropdownItems: [
        { name: 'Guiding Principles', href: '/values#guiding-principles' },
        { name: 'Core Beliefs', href: '/values#core-beliefs' },
      ],
    },
    {
      name: 'What We Do',
      href: '/what-we-do',
      dropdownItems: [
        { name: 'Purpose', href: '/what-we-do#purpose' },
        { name: 'Foundation Goals', href: '/what-we-do#foundation-wants' },
        { name: 'Support Us', href: '/what-we-do#support-us' },
        { name: 'Get Involved', href: '/what-we-do#interested' },
      ],
    },
    {
      name: 'Ecosystem',
      href: '/ecosystem',
      dropdownItems: [
        { name: 'UDS Overview', href: '/ecosystem#german-uds-overview' },
        { name: 'Shareholding', href: '/ecosystem#shareholding' },
        { name: 'Participation', href: '/ecosystem#participation' },
      ],
    },
    {
      name: 'Learn More',
      href: '/learn-more',
      dropdownItems: [
        { name: 'Info', href: '/learn-more#info' },
        { name: 'Resources', href: '/learn-more#links' },
      ],
    },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      return pathname === path && activeSection === anchor;
    }
    return pathname.startsWith(href);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      if (pathname === path) {
        e.preventDefault();
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 nav-footer-gradient ${
        scrolled ? 'nav-blur shadow-lg' : 'nav-blur'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0" aria-label="Home">
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
            <div className="ml-10 flex items-baseline space-x-4" role="menubar">
              {navItems.map((item) => (
                <div key={item.name} className="relative group" role="none">
                  {item.dropdownItems ? (
                    <>
                      <Link 
                        href={item.href}
                        className={`text-body hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          pathname.startsWith(item.href) ? 'text-accent border-b-2 border-accent' : ''
                        }`}
                        role="menuitem"
                      >
                        {item.name}
                      </Link>
                      <div 
                        className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in"
                        role="menu"
                      >
                        <div className="rounded-xl nav-footer-gradient shadow-lg ring-1 ring-black/5 backdrop-blur-sm overflow-hidden">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-3 text-sm text-body hover:bg-[#1e293b] transition-colors ${
                                isActive(subItem.href) ? 'text-accent bg-[#1e293b]' : ''
                              }`}
                              role="menuitem"
                              onClick={(e) => handleAnchorClick(e, subItem.href)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-body hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href) ? 'text-accent border-b-2 border-accent' : ''
                      }`}
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
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
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#001B3F]/95 backdrop-blur-sm"
            role="menu"
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="py-1">
                  {item.dropdownItems ? (
                    <>
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 text-base font-medium text-body border-l-4 ${
                          pathname.startsWith(item.href) ? 'border-accent' : 'border-transparent'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-3 py-2 text-base text-body hover:bg-gray-50 dark:hover:bg-[#002B5C] rounded-md transition-colors ${
                              isActive(subItem.href) ? 'text-accent bg-gray-50 dark:bg-[#002B5C]' : ''
                            }`}
                            onClick={(e) => {
                              handleAnchorClick(e, subItem.href);
                              setIsOpen(false);
                            }}
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base text-body hover:bg-gray-50 dark:hover:bg-[#002B5C] rounded-md transition-colors ${
                        isActive(item.href) ? 'text-accent bg-gray-50 dark:bg-[#002B5C]' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;