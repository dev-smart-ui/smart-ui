import { FC } from 'react';

import styles from './infoCards.module.scss';

type TCard = {
  count: string;
  label: string;
};

interface InfoCardsProps {
  t: (key: string, { ns }: { ns?: string }) => string;
  data?: TCard[];
  className?: string;
}

const infoCards = [
  { count: '250+', label: 'infoCards.card1.label' },
  { count: '117+', label: 'infoCards.card2.label' },
  { count: '10+', label: 'infoCards.card3.label' },
];

export const InfoCards: FC<InfoCardsProps> = ({
  t,
  data = infoCards,
  className,
}) => {
  return (
    <ul className={`${styles.wrapper} ${className ?? ''}`}>
      {data.map((card) => (
        <li key={card.label} className={styles.card}>
          <span className={styles.count}>{card.count}</span>
          <span className={styles.label}>
            {t(card.label, { ns: 'common' })}
          </span>
        </li>
      ))}
    </ul>
  );
};
