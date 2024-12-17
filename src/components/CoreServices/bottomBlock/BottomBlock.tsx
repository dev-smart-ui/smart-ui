import { IQuestionSection } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Button } from '@components/Button';
import avatarGroup from '@components/CoreServices/img/avatarGroup.png';
import imgBottom from '@components/CoreServices/img/imageBottom.jpg';

import styles from './bottomBlock.module.scss';

interface BottomBlockProps {
  data: IQuestionSection;
}

export const BottomBlock: FC<BottomBlockProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={imgBottom} alt="imageBottom" />
      </div>
      <div className={styles.content}>
        {data?.image && (
          <div className={styles.avatar}>
            <Image src={avatarGroup} alt="avatar" />
          </div>
        )}
        <div className={styles.textContent}>
          <h3 className={styles.title}>{data?.title}</h3>
          <p className={styles.description}>{data?.text}</p>
        </div>
        <Button text={data.button?.label} />
      </div>
    </div>
  );
};
