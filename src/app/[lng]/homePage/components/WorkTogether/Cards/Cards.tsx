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
        {firstGroup.map(({ id, backgroundColor, icon, count, category }) => (
          <div key={id} className={styles.card} style={{ backgroundColor }}>
            <Image className={styles.icon} src={icon} alt="icon" />
            <div>
              <span className={styles.count}>{count}</span>
              <span className={styles.category}>{category}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.secondGroup}>
        {secondGroup.map(({ id, backgroundColor, icon, count, category }) => (
          <div key={id} className={styles.card} style={{ backgroundColor }}>
            <Image className={styles.icon} src={icon} alt="icon" />
            <div>
              <span className={styles.count}>{count}</span>
              <span className={styles.category}>{category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
