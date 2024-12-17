import { IAdvantagesCardForAgency } from '@app-types/interfaces';

import { FC } from 'react';

import styles from './infoCards.module.scss';

interface InfoCardsProps {
  data?: IAdvantagesCardForAgency[];
  className?: string;
}

export const InfoCards: FC<InfoCardsProps> = ({ data, className }) => {
  return (
    <ul className={`${styles.wrapper} ${className ?? ''}`}>
      {data?.map((card) => (
        <li key={card?.Text} className={styles.card}>
          <span className={styles.count}>{card?.Title}</span>
          <span className={styles.label}>{card?.Text}</span>
        </li>
      ))}
    </ul>
  );
};
