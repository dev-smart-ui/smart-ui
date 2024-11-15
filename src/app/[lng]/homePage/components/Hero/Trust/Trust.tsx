import { FC } from 'react';

import { Icons } from '@components/CustomIcons';

import styles from './trust.module.scss';

interface ITrustProps {
  starsCount: number;
  description?: string;
}

export const Trust: FC<ITrustProps> = ({
  starsCount = 5,
  description = '1000+ Trust Customer',
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stars}>
        {Array.from({ length: starsCount }, (_, index) => (
          <span key={index} className={styles.star}>
            <Icons.Star />
          </span>
        ))}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
