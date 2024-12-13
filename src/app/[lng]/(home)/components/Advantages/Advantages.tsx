'use client';

import { IAdvantagesCards } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './advantages.module.scss';

interface AdvantagesProps {
  data?: IAdvantagesCards;
}

export const Advantages: FC<AdvantagesProps> = ({ data }) => {
  return (
    <Section className={styles.advantagesSection}>
      <Container className={styles.content}>
        <SectionHeader
          sectionName={data?.sectionName}
          title={data?.title}
          subTitle={data?.subTitle}
        />
        <ul className={styles.cards}>
          {data?.cards?.map(({ title, img, text }) => (
            <li key={title} className={styles.card}>
              <Image
                className={styles.image}
                src={img?.data?.attributes?.url}
                alt="cardImg"
                width={40}
                height={40}
              />
              <span className={styles.cardTitle}>{title}</span>
              <p className={styles.cardDescription}>{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
