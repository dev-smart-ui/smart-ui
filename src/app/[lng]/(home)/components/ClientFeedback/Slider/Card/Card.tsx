import { IImage } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import styles from './card.module.scss';

interface CardProps {
  avatar: IImage;
  author: string;
  work: string;
  company: string;
  feedback: string;
  image: IImage;
}

export const Card: FC<CardProps> = ({
  image,
  author,
  work,
  company,
  feedback,
  avatar,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.author}>
        <div className={styles.image}>
          <Image
            width={45}
            height={45}
            src={avatar?.data?.attributes?.url}
            alt="avatar"
          />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>{author}</span>
          <span className={styles.workInfo}>
            {work} <span className={styles.highlighted}>{company}</span>
          </span>
        </div>
      </div>
      <p className={styles.feedback}>{feedback}</p>
      <Image
        className={styles.logo}
        width={80}
        height={30}
        src={image?.data?.attributes?.url}
        alt="companyLogo"
      />
    </div>
  );
};
