'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../../../[locales]/useTranslation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  dropdownItems?: { name: string; href: string }[];
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = segments[0] === 'de' ? 'de' : 'en';
  const pathWithoutLocale = segments[0] === 'de' ? segments.slice(1).join('/') : segments.join('/');

  const t = useTranslation(currentLocale);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 16);

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const basePath = currentLocale === 'en' ? '' : `/${currentLocale}`;

  const navItems: NavItem[] = [
    {
      name: currentLocale === 'en' ? 'Home' : t.navbar.home,
      href: currentLocale === 'en' ? '/' : `/${currentLocale}`,
    },
    {
      name: currentLocale === 'en' ? 'About Us' : 'Über uns',
      href: `${basePath}/team`,
      dropdownItems: [
        {
          name: currentLocale === 'en' ? 'About Us' : 'Über uns',
          href: `${basePath}/team#team-about`,
        },
        {
          name: currentLocale === 'en' ? 'Meet the Team' : 'Unser Team',
          href: `${basePath}/team#team-grid`,
        },
        {
          name: currentLocale === 'en' ? 'Voices of the Foundation' : 'Stimmen der Stiftung',
          href: `${basePath}/team#voices`,
        },
        {
          name: currentLocale === 'en' ? 'Statutes' : 'Stiftungssatzung',
          href: `${basePath}/team#statutes`,
        },
      ],
    },
    {
      name: currentLocale === 'de' ? 'Leitgedanken' : t.navbar.values,
      href: `${basePath}/values`,
      dropdownItems: [
        {
          name: currentLocale === 'en' ? 'Guiding Principles' : 'Werte',
          href: `${basePath}/values#core-beliefs`,
        },
        {
          name: currentLocale === 'en' ? 'Mission' : 'Mission',
          href: `${basePath}/values#guiding-principles`,
        },
      ],
    },
    {
      name: currentLocale === 'en' ? 'Get Involved' : 'Engagement',
      href: `${basePath}/support`,
      dropdownItems: [
        {
          name: currentLocale === 'en' ? 'Our Purpose' : 'Unsere Schwerpunkte',
          href: `${basePath}/support#purpose`,
        },
        {
          name: currentLocale === 'en' ? 'Ways to Support Us' : 'Unterstützen Sie uns',
          href: `${basePath}/support#support-us`,
        },
        {
          name: currentLocale === 'en' ? 'Tax Benefits' : 'Steuervorteile',
          href: `${basePath}/support#tax-benefits`,
        },
      ],
    },
    {
      name: currentLocale === 'en' ? 'Funding' : 'Förderprogramme',
      href: `${basePath}/funding`,
      dropdownItems: [
        {
          name: currentLocale === 'en' ? 'Scholarships' : 'Stipendien',
          href: `${basePath}/funding#scholarships`,
        },
        {
          name: currentLocale === 'en' ? 'Fellowships' : 'Fellowships',
          href: `${basePath}/funding#fellowships`,
        },
        {
          name: currentLocale === 'en' ? 'Grants' : 'Grants',
          href: `${basePath}/funding#grants`,
        },
        {
          name: currentLocale === 'en' ? 'Programs' : 'Programme',
          href: `${basePath}/funding#programs`,
        },
        {
          name: currentLocale === 'en' ? 'Community' : 'Community',
          href: `${basePath}/funding#community`,
        },
      ],
    },
    { name: t.navbar.ecosystem, href: `${basePath}/ecosystem` },
    { name: t.navbar.contact, href: `${basePath}/contact` },
  ];

  const isActive = (href: string) => {
    if (currentLocale === 'en') {
      if (href === '/') return pathname === '' || pathname === '/';
      if (href.includes('#')) {
        const [path] = href.split('#');
        return pathname === path;
      }
      return pathname.startsWith(href);
    } else {
      if (href === `/${currentLocale}`) return pathname === href;
      if (href.includes('#')) {
        const [path] = href.split('#');
        return pathname === path;
      }
      return pathname.startsWith(href);
    }
  };

  const isSectionActive = (href: string) => {
    if (!href.includes('#')) return isActive(href);
    const [, anchor] = href.split('#');
    return activeSection === anchor;
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      const isSamePage = pathname === path;
      if (isSamePage) {
        e.preventDefault();
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
          setOpenMobileDropdown(null);
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

  const navBarBg = scrolled ? 'glass-panel' : 'bg-white/80 backdrop-blur-md border-b border-white/20';
  const linkBase = 'relative text-[#001B3F] px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg';
  const linkHover = 'hover:text-orange-600 hover:bg-orange-50/80';
  const linkActive = 'text-orange-600';

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ${scrolled ? 'shadow-card' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`transition-all duration-300 ${navBarBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href={currentLocale === 'en' ? '/' : `/${currentLocale}`}
              className="flex-shrink-0 transition-opacity hover:opacity-90"
              aria-label="Home"
            >
              <Image
                src="/UDS_foundation_logo_pos_rgb.png"
                alt="German University of Digital Science Foundation"
                width={180}
                height={40}
                className="h-8 sm:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center gap-1" role="menubar">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    role="none"
                    onMouseEnter={() => item.dropdownItems && setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdownItems ? (
                      <>
                        <Link
                          href={item.href}
                          className={`${linkBase} ${linkHover} flex items-center gap-0.5 ${
                            isActive(item.href) ? linkActive : ''
                          }`}
                          role="menuitem"
                          onClick={(e) => handleAnchorClick(e, item.href)}
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </Link>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 top-full pt-1 min-w-[200px]"
                            >
                              <div className="rounded-xl bg-white/95 backdrop-blur-md shadow-card-hover border border-gray-100 py-2 overflow-hidden">
                                {item.dropdownItems.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className={`block px-4 py-2.5 text-sm transition-colors ${
                                      isSectionActive(sub.href)
                                        ? 'bg-orange-50 text-orange-600 font-medium'
                                        : 'text-[#001B3F] hover:bg-orange-50/80 hover:text-orange-600'
                                    }`}
                                    onClick={(e) => handleAnchorClick(e, sub.href)}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`${linkBase} ${linkHover} ${
                          isActive(item.href) ? linkActive : ''
                        }`}
                        role="menuitem"
                        onClick={(e) => handleAnchorClick(e, item.href)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Language Switcher */}
                <div className="ml-8 pl-6 border-l border-gray-200 flex items-center gap-2 text-sm font-medium">
                  <button
                    onClick={() => switchLocale('en')}
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      currentLocale === 'en'
                        ? 'bg-orange-100 text-orange-600 font-semibold'
                        : 'text-gray-500 hover:text-[#001B3F] hover:bg-gray-100'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => switchLocale('de')}
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      currentLocale === 'de'
                        ? 'bg-orange-100 text-orange-600 font-semibold'
                        : 'text-gray-500 hover:text-[#001B3F] hover:bg-gray-100'
                    }`}
                  >
                    DE
                  </button>
                </div>
              </div>
            </div>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                isOpen ? 'bg-orange-100 text-orange-600' : 'text-[#001B3F] hover:bg-gray-100'
              }`}
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-panel border-t border-white/30 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) =>
                item.dropdownItems ? (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name)
                      }
                      className="flex items-center justify-between w-full py-3 text-left text-[#001B3F] font-medium rounded-lg hover:bg-orange-50/80 transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openMobileDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openMobileDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {item.dropdownItems.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-2.5 text-sm text-[#0a0f4a] hover:text-orange-600"
                              onClick={(e) => {
                                handleAnchorClick(e, sub.href);
                                setIsOpen(false);
                                setOpenMobileDropdown(null);
                              }}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-[#001B3F] font-medium rounded-lg hover:bg-orange-50/80 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    switchLocale('en');
                  }}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    currentLocale === 'en'
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    switchLocale('de');
                  }}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    currentLocale === 'de'
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  DE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
