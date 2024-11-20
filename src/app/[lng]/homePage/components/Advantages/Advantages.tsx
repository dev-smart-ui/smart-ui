'use client';

import { FC } from 'react';

import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { GradientText } from '@components/GradientText';

import { useAdvantages } from '../../hooks/useAdvantages';
import styles from './advantages.module.scss';

export const Advantages: FC = () => {
  const { cards, headerInfo, button } = useAdvantages();

  return (
    <section className={styles.wrapper}>
      <Container className={styles.content}>
        <Button text={button} isGradient />
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
    </section>
  );
};
