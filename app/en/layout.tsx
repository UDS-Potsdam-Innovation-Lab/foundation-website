import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollProgress from '../components/ui/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'German University of Digital Science Foundation',
  description: 'Shaping the future of digital education and innovation',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale || 'en'} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.className} page-blue-gradient`}>
        <ScrollProgress />
        {/* @ts-ignore: Navbar accepts locale prop for i18n */}
        <Navbar locale={params.locale || 'en'} />
        {children}
        {/* @ts-ignore: Footer accepts locale prop for i18n */}
        <Footer locale={params.locale || 'en'} />
      </body>
    </html>
  );
}