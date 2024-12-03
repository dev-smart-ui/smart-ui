'use client';

import Image from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import styles from './goalsAndValues.module.scss';
import img from './img/img.png';

export const GoalsAndValues: FC = () => {
  const { t } = useTranslation('aboutUs');

  const cards = [
    {
      icon: img,
      title: t('goalsAndValues.card1.title'),
      description: t('goalsAndValues.card1.description'),
    },
    {
      icon: img,
      title: t('goalsAndValues.card2.title'),
      description: t('goalsAndValues.card2.description'),
    },
  ];

  return (
    <Section>
      <Container className={styles.content}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <div className={styles.titleWrapper}>
              <div className={styles.image}>
                <Image src={img} alt="icon" />
              </div>
              <h3 className={styles.title}>{card.title}</h3>
            </div>
            <p className={styles.description}>{card.description}</p>
          </div>
        ))}
      </Container>
    </Section>
  );
};
