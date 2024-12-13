import { IOurServiceCard } from '@app-types/interfaces';

import { FC } from 'react';

import { Card } from './Card';
import styles from './services.module.scss';

interface ServicesProps {
  cards: IOurServiceCard[];
}

export const Services: FC<ServicesProps> = ({ cards }) => {
  return (
    <ul className={styles.wrapper}>
      {cards?.map((card) => <Card key={card.title} {...card} />)}
    </ul>
  );
};
