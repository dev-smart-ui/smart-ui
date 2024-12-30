import { IFooter, IHeader } from '@app-types/interfaces';

import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

interface LayoutProps {
  children: ReactNode;
  headerData: IHeader;
  footerData: IFooter;
}

export default function Layout({
  children,
  headerData,
  footerData,
}: LayoutProps) {
  return (
    <>
      <Header headerData={headerData} />
      <main>{children}</main>
      <Footer footerData={footerData} />
      <ToastContainer position="top-center" />
    </>
  );
}
