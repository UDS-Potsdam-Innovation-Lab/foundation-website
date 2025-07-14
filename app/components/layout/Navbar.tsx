'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '../../../[locales]/useTranslation';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = segments[0] === 'de' ? 'de' : 'en';
  const pathWithoutLocale = segments[0] === 'de' ? segments.slice(1).join('/') : segments.join('/');

  const t = useTranslation(currentLocale);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = currentScrollY + 100;

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
    { name: t.navbar.home, href: currentLocale === 'en' ? '/' : `/${currentLocale}` },
    { name: t.navbar.about, href: currentLocale === 'en' ? '/about' : `/${currentLocale}/about` },
    {
      name: t.navbar.values,
      href: currentLocale === 'en' ? '/values' : `/${currentLocale}/values`,
      dropdownItems: [
        { name: t.navbar.guidingPrinciples, href: currentLocale === 'en' ? '/values#guiding-principles' : `/${currentLocale}/values#guiding-principles` },
        { name: t.navbar.coreBeliefs, href: currentLocale === 'en' ? '/values#core-beliefs' : `/${currentLocale}/values#core-beliefs` },
      ],
    },
    {
      name: t.navbar.whatWeDo,
      href: currentLocale === 'en' ? '/what-we-do' : `/${currentLocale}/what-we-do`,
      dropdownItems: [
        { name: t.navbar.purpose, href: currentLocale === 'en' ? '/what-we-do#purpose' : `/${currentLocale}/what-we-do#purpose` },
        { name: t.navbar.foundationGoals, href: currentLocale === 'en' ? '/what-we-do#foundation-goals' : `/${currentLocale}/what-we-do#foundation-goals` },
        { name: t.navbar.supportUs, href: currentLocale === 'en' ? '/what-we-do#support-us' : `/${currentLocale}/what-we-do#support-us` },
        { name: t.navbar.getInvolved, href: currentLocale === 'en' ? '/what-we-do#get-involved' : `/${currentLocale}/what-we-do#get-involved` },
      ],
    },
    {
      name: t.navbar.ecosystem,
      href: currentLocale === 'en' ? '/ecosystem' : `/${currentLocale}/ecosystem`,
      dropdownItems: [
        { name: t.navbar.udsOverview, href: currentLocale === 'en' ? '/ecosystem#german-uds-overview' : `/${currentLocale}/ecosystem#german-uds-overview` },
        { name: t.navbar.shareholding, href: currentLocale === 'en' ? '/ecosystem#shareholding' : `/${currentLocale}/ecosystem#shareholding` },
        { name: t.navbar.participation, href: currentLocale === 'en' ? '/ecosystem#participation' : `/${currentLocale}/ecosystem#participation` },
      ],
    },
    { name: t.navbar.team, href: currentLocale === 'en' ? '/team' : `/${currentLocale}/team` },
    { name: t.navbar.contact, href: currentLocale === 'en' ? '/contact' : `/${currentLocale}/contact` },
  ];

  const isActive = (href: string) => {
    if (currentLocale === 'en') {
      if (href === '/') return pathname === '' || pathname === '/';
      if (href.includes('#')) {
        const [path, anchor] = href.split('#');
        return pathname === path && activeSection === anchor;
      }
      return pathname.startsWith(href);
    } else {
      if (href === `/${currentLocale}`) return pathname === href;
      if (href.includes('#')) {
        const [path, anchor] = href.split('#');
        return pathname === path && activeSection === anchor;
      }
      return pathname.startsWith(href);
    }
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

  const switchLocale = (targetLocale: string) => {
    const newPath =
      targetLocale === 'en'
        ? `/${pathWithoutLocale}`
        : `/${targetLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;
    window.location.href = newPath || '/';
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 bg-transparent ${showNavbar ? 'top-0' : '-top-20'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={currentLocale === 'en' ? '/' : `/${currentLocale}`} className="flex-shrink-0" aria-label="Home">
            <Image
              src="/UDS_foundation_logo_pos_rgb.png"
              alt="German University of Digital Science Foundation"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4" role="menubar">
              {navItems.map((item) => (
                <div key={item.name} className="relative group" role="none">
                  <Link
                    href={item.href}
                    className={`text-[#001B3F] hover:text-[#003366] px-3 pb-1 text-sm font-medium transition-colors ${
                      isActive(item.href) ? 'border-b-2 border-orange-500' : ''
                    }`}
                    role="menuitem"
                    onClick={(e) => handleAnchorClick(e, item.href)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}

              {/* Language Switcher */}
              <div className="ml-12 pl-4 border-l border-gray-300 flex items-center space-x-1 text-sm font-medium">
                <button
                  onClick={() => switchLocale('en')}
                  className={`transition-colors hover:text-[#003366] ${
                    currentLocale === 'en' ? 'text-[#001B3F] font-bold underline' : 'text-gray-500'
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => switchLocale('de')}
                  className={`transition-colors hover:text-[#003366] ${
                    currentLocale === 'de' ? 'text-[#001B3F] font-bold underline' : 'text-gray-500'
                  }`}
                >
                  DE
                </button>
              </div>
            </div>
          </div>

          {/* Hamburger Toggle (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#001B3F] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 py-4 space-y-3 shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-[#001B3F] text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4 pt-2 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsOpen(false);
                  switchLocale('en');
                }}
                className={`transition-colors hover:text-[#003366] ${
                  currentLocale === 'en' ? 'text-[#001B3F] font-bold underline' : 'text-gray-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  switchLocale('de');
                }}
                className={`transition-colors hover:text-[#003366] ${
                  currentLocale === 'de' ? 'text-[#001B3F] font-bold underline' : 'text-gray-500'
                }`}
              >
                DE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
