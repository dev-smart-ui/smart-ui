import { IProjectLifecycleCard } from '@app-types/interfaces';

import { FC } from 'react';

import { Card } from './Card';
import styles from './lifecycleCards.module.scss';

interface LifecycleCardsProps {
  data: IProjectLifecycleCard[];
}

export const LifecycleCards: FC<LifecycleCardsProps> = ({ data }) => {
  return (
    <ul className={styles.wrapper}>
      {data?.map((card) => <Card key={card.id} {...card} />)}
    </ul>
  );
};
