'use client';

import { IFooter } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';

import { Copyright } from './components/Copyright';
import { Info } from './components/Info';
import { Links } from './components/Links';
import { Services } from './components/Services';
import { Socials } from './components/Socials';
import styles from './footer.module.scss';

interface FooterProps {
  footerData: IFooter;
}

export const Footer: FC<FooterProps> = ({ footerData }) => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Container>
          <div className={styles.content}>
            <Info
              data={footerData?.info}
              infoDescription={footerData?.infoDescription}
              logo={footerData?.logo}
            />
            <Links data={footerData?.links} title={footerData?.linksTitle} />
            <Services
              data={footerData?.services}
              title={footerData?.servicesTitle}
            />
            <Socials data={footerData?.socials} />
          </div>
        </Container>
      </div>
      <Copyright />
    </footer>
  );
};
