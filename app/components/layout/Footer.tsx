import Link from 'next/link';
import { useTranslation } from '../../locales/useTranslation';

// This is the ONLY Footer component to be used. Do not use app/components/Footer.tsx.
const Footer = ({ locale = 'en' }: { locale?: string }) => {
  const t = useTranslation(locale);
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: locale === 'en' ? '/' : `/${locale}` },
        { name: 'About', href: locale === 'en' ? '/about' : `/${locale}/about` },
        { name: 'Values', href: locale === 'en' ? '/values' : `/${locale}/values` },
        { name: 'What We Do', href: locale === 'en' ? '/what-we-do' : `/${locale}/what-we-do` },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Ecosystem', href: locale === 'en' ? '/ecosystem' : `/${locale}/ecosystem` },
        { name: 'Learn More', href: locale === 'en' ? '/learn-more' : `/${locale}/learn-more` },
        { name: 'Team', href: locale === 'en' ? '/team' : `/${locale}/team` },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Email', href: 'mailto:office@foundation.german-uds.de' },
        { name: 'Phone', href: 'tel:+493319689220' },
        { name: 'Location', href: locale === 'en' ? '/contact' : `/${locale}/contact` },
      ],
    },
  ];

  return (
    <footer className="bg-transparent text-white">
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
            <Link href={locale === 'en' ? '/privacy' : `/${locale}/privacy`} className="text-sm text-white hover:text-orange-300">
              {t.footer.privacy}
            </Link>
            <span className="text-white">|</span>
            <Link href={locale === 'en' ? '/imprint' : `/${locale}/imprint`} className="text-sm text-white hover:text-orange-300">
              {t.footer.imprint}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
