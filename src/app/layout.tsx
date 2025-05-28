import '../styles/globals.css';
import Header from '../components/Header';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nest & Node',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}