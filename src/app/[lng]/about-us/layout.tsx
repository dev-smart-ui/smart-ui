import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface AboutUsLayoutProps {
  children: ReactNode;
}

export default function AboutUsLayout({ children }: AboutUsLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
