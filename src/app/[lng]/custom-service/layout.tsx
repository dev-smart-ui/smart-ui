import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface CustomServiceLayoutProps {
  children: ReactNode;
}

export default function CustomServiceLayout({
  children,
}: CustomServiceLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
