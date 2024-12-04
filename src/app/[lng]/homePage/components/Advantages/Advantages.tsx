'use client';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './advantages.module.scss';
import { useLocaleAdvantagesData } from './hooks/useLocaleAdvantagesData';

export const Advantages: FC = () => {
  const { cards, headerInfo } = useLocaleAdvantagesData();

  return (
    <Section className={styles.advantagesSection}>
      <Container className={styles.content}>
        <SectionHeader
          sectionName={headerInfo.sectionName}
          title={headerInfo.title}
          subTitle={headerInfo.subTitle}
        />
        <ul className={styles.cards}>
          {cards.map(({ title, icon, description }) => (
            <li key={title} className={styles.card}>
              {icon}
              <span className={styles.cardTitle}>{title}</span>
              <p className={styles.cardDescription}>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
