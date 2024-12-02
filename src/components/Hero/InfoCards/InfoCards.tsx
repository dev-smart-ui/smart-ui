import { FC } from 'react';

import styles from './infoCards.module.scss';

interface InfoCardsProps {
  t: (key: string) => string;
}

export const InfoCards: FC<InfoCardsProps> = ({ t }) => {
  const infoCards = [
    { count: '250+', label: t('hero.infoCards.card1.label') },
    { count: '117+', label: t('hero.infoCards.card2.label') },
    { count: '10+', label: t('hero.infoCards.card3.label') },
  ];

  return (
    <ul className={styles.wrapper}>
      {infoCards.map((card) => (
        <li key={card.label} className={styles.card}>
          <span className={styles.count}>{card.count}</span>
          <span className={styles.label}>{card.label}</span>
        </li>
      ))}
    </ul>
  );
};
