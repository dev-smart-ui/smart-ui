'use client';

import { Button } from '@components/Button';
import { GradientText } from '@components/GradientText';

import { useAdvantages } from '../../hooks/useAdvantages';
import styles from './advantages.module.scss';

export const Advantages = () => {
  const { cards, headerInfo, button } = useAdvantages();

  return (
    <section className={styles.wrapper}>
      <Button text={button} isGradient />
      <h2 className={styles.title}>
        {headerInfo.title.main}{' '}
        <GradientText color="Secondary">
          {headerInfo.title.highlighted}
        </GradientText>
      </h2>
      <p className={styles.subTitle}>{headerInfo.subTitle}</p>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card}>
            {card.icon}
            <h5 className={styles.cardTitle}>{card.title}</h5>
            <p className={styles.cardDescription}>{card.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
