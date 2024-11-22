'use client';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { useAdvantages } from '../../hooks/useAdvantages';
import styles from './advantages.module.scss';

export const Advantages: FC = () => {
  const { cards, headerInfo } = useAdvantages();

  return (
    <Section>
      <Container className={styles.content}>
        <SectionHeader
          sectionName={headerInfo.ourAdvantages}
          title={headerInfo.title}
          subTitle={headerInfo.subTitle}
        />
        <ul className={styles.cards}>
          {cards.map(({ title, icon, description }) => (
            <li key={title} className={styles.card}>
              {icon}
              <h5 className={styles.cardTitle}>{title}</h5>
              <p className={styles.cardDescription}>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
