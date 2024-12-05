import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface ContactUsLayoutProps {
  children: ReactNode;
}

export default function ContactUsLayout({ children }: ContactUsLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
