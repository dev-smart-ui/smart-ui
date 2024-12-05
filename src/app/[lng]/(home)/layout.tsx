import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface MainLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
