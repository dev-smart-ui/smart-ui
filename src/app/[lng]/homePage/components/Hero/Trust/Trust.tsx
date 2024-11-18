import { FC } from 'react';

import { Icons } from '@components/CustomIcons';

import styles from './trust.module.scss';

interface TrustProps {
  starsCount?: number;
  description?: string;
}

export const Trust: FC<TrustProps> = ({ starsCount = 5, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stars}>
        {Array.from({ length: starsCount }, (_, index) => (
          <span key={index} className={styles.star}>
            <Icons.Star />
          </span>
        ))}
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
