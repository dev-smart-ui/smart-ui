import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import styles from './layout.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
};
