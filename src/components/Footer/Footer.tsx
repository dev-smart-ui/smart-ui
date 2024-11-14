'use client';

import { FC } from 'react';

import { Container } from '@components/Container';

import { Copyright } from './components/Copyright';
import { Info } from './components/Info';
import { Links } from './components/Links';
import { Services } from './components/Services';
import { Socials } from './components/Socials';
import styles from './footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Container>
          <div className={styles.content}>
            <Info />
            <Links />
            <Services />
            <Socials />
          </div>
        </Container>
      </div>
      <Copyright />
    </footer>
  );
};
