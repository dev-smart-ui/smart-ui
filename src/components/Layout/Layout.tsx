import { IHeader } from '@app-types/interfaces';

import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface LayoutProps {
  children: ReactNode;
  headerData: IHeader;
}

export default function Layout({ children, headerData }: LayoutProps) {
  return (
    <>
      <Header headerData={headerData} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
