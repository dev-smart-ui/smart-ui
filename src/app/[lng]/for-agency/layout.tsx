import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface ForAgencyLayoutProps {
  children: ReactNode;
}

export default function ForAgencyLayout({ children }: ForAgencyLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
