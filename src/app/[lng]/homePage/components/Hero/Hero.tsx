import Image from 'next/image';

import { FC } from 'react';

import { Content } from './Content';
import { Navigation } from './Navigation';
import { Trust } from './Trust';
import styles from './hero.module.scss';
import bgImage from './img/heroBg.png';

export const Hero: FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={bgImage} alt="backgroundImage" />
      </div>
      <div className={styles.body}>
        <Trust />
        <Content />
        <Navigation />
      </div>
    </section>
  );
};
