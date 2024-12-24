import { IImage } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import styles from './card.module.scss';

interface CardProps {
  Title: string;
  Text: string;
  Img: IImage;
}

export const Card: FC<CardProps> = ({ Img, Title, Text }) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={Img?.data?.attributes?.url}
          width={24}
          height={24}
          alt="icon"
        />
      </div>
      <h3 className={styles.title}>{Title}</h3>
      <p className={styles.text}>{Text}</p>
    </li>
  );
};
