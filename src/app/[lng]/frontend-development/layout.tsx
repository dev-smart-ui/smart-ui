import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface FrontendDevelopmentLayoutProps {
  children: ReactNode;
}

export default function FrontendDevelopmentLayout({
  children,
}: FrontendDevelopmentLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
