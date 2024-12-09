import Image from 'next/image';

import { FC } from 'react';

import { Button } from '@components/Button';
import avatarGroup from '@components/CoreServices/img/avatarGroup.png';
import imgBottom from '@components/CoreServices/img/imageBottom.jpg';

import styles from './bottomBlock.module.scss';

interface BottomBlockProps {
  data: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  isAvatars?: boolean;
}

export const BottomBlock: FC<BottomBlockProps> = ({
  data,
  isAvatars = true,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={imgBottom} alt="imageBottom" />
      </div>
      <div className={styles.content}>
        {isAvatars && (
          <div className={styles.avatar}>
            <Image src={avatarGroup} alt="avatar" />
          </div>
        )}
        <div className={styles.textContent}>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.description}>{data.description}</p>
        </div>
        <Button text={data.buttonLabel} />
      </div>
    </div>
  );
};
