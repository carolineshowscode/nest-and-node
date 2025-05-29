import '../styles/globals.css';
import Header from '../components/Header';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import OptimizelyWrapper from '@/providers/OptimizelyWrapper';

export const metadata = {
  title: 'Nest & Node',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OptimizelyWrapper>
          <Header />
          {children}
          <Footer />
        </OptimizelyWrapper>
      </body>
    </html>
  );
}