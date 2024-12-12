'use client';

import { IWorkTogetherSection } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';

import { Cards } from './Cards';
import { Info } from './Info';
import styles from './workTogether.module.scss';

interface WorkTogetherProps {
  data: IWorkTogetherSection;
}

export const WorkTogether: FC<WorkTogetherProps> = ({ data }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={data?.backgroundImage?.data?.attributes?.url}
          width={1920}
          height={432}
          alt="bg"
        />
      </div>
      <Container className={styles.content}>
        <Info
          title={data?.title}
          description={data?.description}
          buttonLabel={data?.button?.label}
        />
        <Cards data={data?.cards} />
      </Container>
    </section>
  );
};
