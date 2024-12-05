'use client';

import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';

import { Cards } from './Cards';
import { Info } from './Info';
import { useLocaleWorkTogetherData } from './hooks/useLocaleWorkTogetherData';
import bgImg from './img/bg.png';
import styles from './workTogether.module.scss';

export const WorkTogether: FC = () => {
  const { cards, info } = useLocaleWorkTogetherData();

  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={bgImg} alt="bg" />
      </div>
      <Container className={styles.content}>
        <Info info={info} />
        <Cards cards={cards} />
      </Container>
    </section>
  );
};
