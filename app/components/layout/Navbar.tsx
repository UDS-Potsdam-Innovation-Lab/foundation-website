'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '../../locales/useTranslation';

const Navbar = ({ locale = 'en' }: { locale?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslation(locale);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUpEnough = lastScrollY - currentScrollY > 100;

      if (currentScrollY < 50 || scrolledUpEnough) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }

      lastScrollY = currentScrollY;

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
    { name: t.navbar.home, href: locale === 'en' ? '/' : `/${locale}` },
    { name: 'About Us', href: locale === 'en' ? '/about' : `/${locale}/about` },
    {
      name: t.navbar.values,
      href: locale === 'en' ? '/values' : `/${locale}/values`,
      dropdownItems: [
        { name: 'Guiding Principles', href: locale === 'en' ? '/values#guiding-principles' : `/${locale}/values#guiding-principles` },
        { name: 'Core Beliefs', href: locale === 'en' ? '/values#core-beliefs' : `/${locale}/values#core-beliefs` },
      ],
    },
    {
      name: t.navbar.whatWeDo,
      href: locale === 'en' ? '/what-we-do' : `/${locale}/what-we-do`,
      dropdownItems: [
        { name: 'Purpose', href: locale === 'en' ? '/what-we-do#purpose' : `/${locale}/what-we-do#purpose` },
        { name: 'Foundation Goals', href: locale === 'en' ? '/what-we-do#foundation-wants' : `/${locale}/what-we-do#foundation-wants` },
        { name: 'Support Us', href: locale === 'en' ? '/what-we-do#support-us' : `/${locale}/what-we-do#support-us` },
        { name: 'Get Involved', href: locale === 'en' ? '/what-we-do#interested' : `/${locale}/what-we-do#interested` },
      ],
    },
    {
      name: t.navbar.ecosystem,
      href: locale === 'en' ? '/ecosystem' : `/${locale}/ecosystem`,
      dropdownItems: [
        { name: 'UDS Overview', href: locale === 'en' ? '/ecosystem#german-uds-overview' : `/${locale}/ecosystem#german-uds-overview` },
        { name: 'Shareholding', href: locale === 'en' ? '/ecosystem#shareholding' : `/${locale}/ecosystem#shareholding` },
        { name: 'Participation', href: locale === 'en' ? '/ecosystem#participation' : `/${locale}/ecosystem#participation` },
      ],
    },
    { name: t.navbar.team, href: locale === 'en' ? '/team' : `/${locale}/team` },
    { name: t.navbar.contact, href: locale === 'en' ? '/contact' : `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    if (locale === 'en') {
      if (href === '/') {
        return pathname === '' || pathname === '/';
      }
      if (href.includes('#')) {
        const [path, anchor] = href.split('#');
        return pathname === path && activeSection === anchor;
      }
      return pathname.startsWith(href);
    } else {
      if (href === `/${locale}`) {
        return pathname === href;
      }
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
    const segments = pathname.split('/').filter(Boolean);
    const currentLocale = segments[0];
    const isKnownLocale = currentLocale === 'en' || currentLocale === 'de';
    const pathWithoutLocale = isKnownLocale ? segments.slice(1).join('/') : segments.join('/');

    const newPath = targetLocale === 'en'
      ? `/${pathWithoutLocale}`
      : `/${targetLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;
    window.location.href = newPath || '/';
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 bg-transparent ${showNavbar ? 'top-0' : '-top-20'}`}
      style={{ transitionProperty: 'top' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={locale === 'en' ? '/' : `/${locale}`} className="flex-shrink-0" aria-label="Home">
            <Image
              src="/UDS_foundation_logo_pos_rgb.png"
              alt="German University of Digital Science Foundation"
              width={180}
              height={40}
              className="h-10 w-auto"
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
                        className={`text-[#001B3F] hover:text-[#003366] px-3 pb-1 rounded-md text-sm font-medium transition-colors ${
                          pathname.startsWith(item.href) ? 'border-b-2 border-orange-500' : ''
                        }`}
                        role="menuitem"
                      >
                        {item.name}
                      </Link>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-[#001B3F] hover:text-[#003366] px-3 pb-1 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href) ? 'border-b-2 border-orange-500' : ''
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

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#001B3F] hover:text-[#003366] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur-md flex flex-col md:hidden transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <Link href={locale === 'en' ? '/' : `/${locale}`} className="flex-shrink-0" aria-label="Home" onClick={() => setIsOpen(false)}>
              <Image
                src="/UDS_foundation_logo_pos_rgb.png"
                alt="German University of Digital Science Foundation"
                width={140}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#001B3F] hover:text-[#003366] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center space-y-6 mt-8">
            {navItems.map((item) => (
              <div key={item.name} className="w-full text-center">
                {item.dropdownItems ? (
                  <details className="w-full" open={false}>
                    <summary className="cursor-pointer py-3 px-6 text-lg font-semibold text-[#001B3F] hover:text-[#003366] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md">
                      {item.name}
                    </summary>
                    <div className="flex flex-col items-center space-y-2 mt-2">
                      {item.dropdownItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block py-2 px-8 text-base text-[#003366] hover:text-orange-500 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 px-6 text-lg font-semibold text-[#001B3F] hover:text-orange-500 transition-colors rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
