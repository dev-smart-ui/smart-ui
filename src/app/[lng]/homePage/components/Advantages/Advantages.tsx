'use client';

import { FC } from 'react';

import { Container } from '@components/Container';
import { GradientText } from '@components/GradientText';
import { Section } from '@components/Section';
import { TextGradientBackground } from '@components/TextGradientBackgraund';

import { useAdvantages } from '../../hooks/useAdvantages';
import styles from './advantages.module.scss';

export const Advantages: FC = () => {
  const { cards, headerInfo } = useAdvantages();

  return (
    <Section>
      <Container className={styles.content}>
        <TextGradientBackground>
          {headerInfo.ourAdvantages}
        </TextGradientBackground>
        <h2 className={styles.title}>
          {headerInfo.title.main}{' '}
          <GradientText color="Secondary">
            {headerInfo.title.highlighted}
          </GradientText>
        </h2>
        <p className={styles.subTitle}>{headerInfo.subTitle}</p>
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
