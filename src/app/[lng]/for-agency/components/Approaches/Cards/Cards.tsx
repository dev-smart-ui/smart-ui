import { IApproachCard } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import styles from './cards.module.scss';

interface CardsProps {
  data: IApproachCard[];
}

export const Cards: FC<CardsProps> = ({ data }) => {
  return (
    <ul className={styles.wrapper}>
      {data?.map(({ text, title, img, id }) => (
        <li key={id} className={styles.card}>
          <div className={styles.image}>
            <Image
              src={img?.data?.attributes?.url}
              alt="icon"
              width={25}
              height={25}
            />
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{text}</p>
        </li>
      ))}
    </ul>
  );
};
