import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UDS Foundation',
  description: 'UDS Foundation Website',
};

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <ParticlesBackground />
      <Navbar locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} />
    </>
  );
} 