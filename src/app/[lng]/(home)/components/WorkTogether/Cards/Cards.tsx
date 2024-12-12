import { IWorkTogetherCard } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import styles from './cards.module.scss';

interface CardProps {
  data: IWorkTogetherCard[];
}

export const Cards: FC<CardProps> = ({ data }) => {
  const firstGroup = data.filter((card) => card.group === 'first');
  const secondGroup = data.filter((card) => card.group === 'second');

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstGroup}>
        {firstGroup.map(({ id, backgroundColor, image, count, category }) => (
          <div key={id} className={styles.card} style={{ backgroundColor }}>
            <Image
              className={styles.icon}
              src={image?.data?.attributes?.url}
              width={56}
              height={56}
              alt="icon"
            />
            <div>
              <span className={styles.count}>{count}</span>
              <span className={styles.category}>{category}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.secondGroup}>
        {secondGroup.map(({ id, backgroundColor, image, count, category }) => (
          <div key={id} className={styles.card} style={{ backgroundColor }}>
            <Image
              className={styles.icon}
              src={image?.data?.attributes?.url}
              width={56}
              height={56}
              alt="icon"
            />
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
