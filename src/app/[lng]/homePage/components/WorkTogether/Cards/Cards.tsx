import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';

import styles from './cards.module.scss';

type TCard = {
  id: number;
  icon: StaticImageData;
  count: string;
  category: string;
  backgroundColor: string;
  group: string;
};

interface CardProps {
  cards: readonly TCard[];
}

export const Cards: FC<CardProps> = ({ cards }) => {
  const firstGroup = cards.filter((card) => card.group === 'first');
  const secondGroup = cards.filter((card) => card.group === 'second');

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstGroup}>
        {firstGroup.map((card) => (
          <div
            key={card.id}
            className={styles.card}
            style={{ backgroundColor: card.backgroundColor }}
          >
            <Image className={styles.icon} src={card.icon} alt="icon" />
            <div>
              <span className={styles.count}>{card.count}</span>
              <span className={styles.category}>{card.category}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.secondGroup}>
        {secondGroup.map((card) => (
          <div
            key={card.id}
            className={styles.card}
            style={{ backgroundColor: card.backgroundColor }}
          >
            <Image className={styles.icon} src={card.icon} alt="icon" />
            <div>
              <span className={styles.count}>{card.count}</span>
              <span className={styles.category}>{card.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
