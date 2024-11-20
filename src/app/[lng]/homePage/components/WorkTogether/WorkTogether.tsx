import Image from 'next/image';

import { FC } from 'react';

import bgImg from './img/bg.png';
import styles from './workTogether.module.scss';

export const WorkTogether: FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={bgImg} alt="bg" />
      </div>
    </section>
  );
};
