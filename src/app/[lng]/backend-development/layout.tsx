import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface BackendDevelopmentLayoutProps {
  children: ReactNode;
}

export default function BackendDevelopmentLayout({
  children,
}: BackendDevelopmentLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
