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
                        className={`text-[#001B3F] hover:text-[#003366] px-3 pb-1 text-sm font-medium transition-colors ${
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
                      className={`text-[#001B3F] hover:text-[#003366] px-3 pb-1 text-sm font-medium transition-colors ${
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
