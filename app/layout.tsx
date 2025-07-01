import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTopButton from './components/ui/BackToTopButton';
import ErrorBoundary from './components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UDS Foundation',
  description: 'UDS Foundation Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTopButton />
        </ErrorBoundary>
      </body>
    </html>
  );
} 