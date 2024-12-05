import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface UiUxDesignLayoutProps {
  children: ReactNode;
}

export default function UiUxDesignLayout({ children }: UiUxDesignLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
