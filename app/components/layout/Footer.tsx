import Link from 'next/link';
// This is the ONLY Footer component to be used. Do not use app/components/Footer.tsx.
const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Values', href: '/values' },
        { name: 'What We Do', href: '/what-we-do' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Ecosystem', href: '/ecosystem' },
        { name: 'Learn More', href: '/learn-more' },
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Email', href: 'mailto:office@foundation.german-uds.de' },
        { name: 'Phone', href: 'tel:+493319689220' },
        { name: 'Location', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="nav-footer-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/UDS_foundation_logo_neg-on-DarkBlue_rgb.png"
              alt="German University of Digital Science Foundation"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-white">
              Shaping the future of digital education and innovation.
            </p>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? (
                      <a href={link.href} className="text-sm text-body hover:text-accent">
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-body hover:text-accent">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-body">
            © {new Date().getFullYear()} German University of Digital Science Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;