import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface OurWorkLayoutProps {
  children: ReactNode;
}

export default function OurWorkLayout({ children }: OurWorkLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
