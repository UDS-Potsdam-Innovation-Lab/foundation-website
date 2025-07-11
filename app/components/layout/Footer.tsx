'use client';

import Link from 'next/link';
import { useTranslation } from '../../../[locales]/useTranslation';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = segments[0] === 'de' ? 'de' : 'en';

  const t = useTranslation(currentLocale);

  const footerLinks = [
    {
      title: currentLocale === 'de' ? 'Schnellzugriff' : 'Quick Links',
      links: [
        { name: t.navbar.home, href: currentLocale === 'en' ? '/' : `/${currentLocale}` },
        { name: currentLocale === 'de' ? t.navbar.about : 'About Us', href: currentLocale === 'en' ? '/about' : `/${currentLocale}/about` },
        { name: t.navbar.values, href: currentLocale === 'en' ? '/values' : `/${currentLocale}/values` },
        { name: t.navbar.whatWeDo, href: currentLocale === 'en' ? '/what-we-do' : `/${currentLocale}/what-we-do` },
      ],
    },
    {
      title: currentLocale === 'de' ? 'Ressourcen' : 'Resources',
      links: [
        {
          name: currentLocale === 'de' ? 'German UDS Website' : 'German UDS Website',
          href: 'https://german-uds.de',
        },
        {
          name: currentLocale === 'de' ? 'Steuervorteile Übersicht' : 'Tax Benefits Overview',
          href: '/tax-benefits.pdf',
        },
        {
          name: currentLocale === 'de' ? 'Broschüre' : 'Brochure',
          href: '/GUDS_Brochure_Final.pdf',
        },
      ],
    },
    {
      title: (
        <a
          href="https://foundation.german-uds.de/contact/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300"
        >
          {t.footer.contact}
        </a>
      ),
      links: [
        { name: 'Email', href: 'mailto:office@foundation.german-uds.de' },
        { name: 'Phone', href: 'tel:+493319689220' },
        { name: t.footer.contact, href: currentLocale === 'en' ? '/contact' : `/${currentLocale}/contact` },
      ],
    },
  ];

  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/UDS_foundation_logo_neg-on-DarkBlue_rgb.png"
              alt="German University of Digital Science Foundation"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-white">
              {t.footer.description}
            </p>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? (
                      <a href={link.href} className="text-sm text-white hover:text-orange-300">
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-white hover:text-orange-300">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center text-white">
            © {new Date().getFullYear()} German University of Digital Science Foundation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href={currentLocale === 'en' ? '/privacy' : `/${currentLocale}/privacy`} className="text-sm text-white hover:text-orange-300">
              {t.footer.privacy}
            </Link>
            <span className="text-white">|</span>
            <Link href={currentLocale === 'en' ? '/imprint' : `/${currentLocale}/imprint`} className="text-sm text-white hover:text-orange-300">
              {t.footer.imprint}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
