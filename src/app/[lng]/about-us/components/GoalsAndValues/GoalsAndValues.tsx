'use client';

import { IGoalsAndValues } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import styles from './goalsAndValues.module.scss';

interface GoalsAndValuesProps {
  data: IGoalsAndValues;
}

export const GoalsAndValues: FC<GoalsAndValuesProps> = ({ data }) => {
  return (
    <Section>
      <Container className={styles.content}>
        {data?.cards?.map(({ Img, Text, Title }) => (
          <div key={Title} className={styles.card}>
            <div className={styles.titleWrapper}>
              <div className={styles.image}>
                <Image
                  src={Img?.data?.attributes?.url}
                  width={88}
                  height={88}
                  alt="icon"
                />
              </div>
              <h3 className={styles.title}>{Title}</h3>
            </div>
            <p className={styles.description}>{Text}</p>
          </div>
        ))}
      </Container>
    </Section>
  );
};
