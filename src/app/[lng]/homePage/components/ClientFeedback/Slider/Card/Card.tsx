import Image, { StaticImageData } from 'next/image';

import { FC, ReactNode } from 'react';

import styles from './card.module.scss';

interface CardProps {
  image: StaticImageData;
  author: string;
  work: string;
  company: string;
  feedback: string;
  icon: ReactNode;
}

export const Card: FC<CardProps> = ({
  image,
  author,
  work,
  company,
  feedback,
  icon,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.author}>
        <div className={styles.image}>
          <Image src={image} alt="avatar" />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>{author}</span>
          <span className={styles.workInfo}>
            {work} <span className={styles.highlighted}>{company}</span>
          </span>
        </div>
      </div>
      <p className={styles.feedback}>{feedback}</p>
      {icon}
    </div>
  );
};
