'use client';

import Image from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';

import { Content } from './Content';
import { Navigation } from './Navigation';
import { Trust } from './Trust';
import styles from './hero.module.scss';
import bgImage from './img/heroBg.png';

export const Hero: FC = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <section className={styles.wrapper}>
      <Container className={styles.content}>
        <div className={styles.image}>
          <Image src={bgImage} alt="backgroundImage" />
        </div>
        <div className={styles.contentWrapper}>
          <Trust description={t('hero.trust')} />
          <Content t={t} />
          <Navigation t={t} />
        </div>
      </Container>
    </section>
  );
};
