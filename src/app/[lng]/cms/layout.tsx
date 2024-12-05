import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface CmsLayoutProps {
  children: ReactNode;
}

export default function CmsLayout({ children }: CmsLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
