import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'German University of Digital Science Foundation',
  description: 'Shaping the future of digital education and innovation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} page-blue-gradient`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}