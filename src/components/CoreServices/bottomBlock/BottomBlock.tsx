import { IQuestionSection } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Button } from '@components/Button';

import styles from './bottomBlock.module.scss';

interface BottomBlockProps {
  data: IQuestionSection;
}

export const BottomBlock: FC<BottomBlockProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data?.bgImage?.data && (
        <div className={styles.image}>
          <Image
            src={data?.bgImage?.data?.attributes?.url}
            width={1240}
            height={540}
            alt="imageBottom"
          />
        </div>
      )}
      <div className={styles.content}>
        {data?.image?.data?.attributes?.url && (
          <div className={styles.avatar}>
            <Image
              src={data?.image?.data?.attributes?.url}
              width={120}
              height={56}
              alt="avatar"
            />
          </div>
        )}
        <div className={styles.textContent}>
          <h3 className={styles.title}>{data?.title}</h3>
          <p className={styles.description}>{data?.text}</p>
        </div>
        <Button text={data?.button?.label} />
      </div>
    </div>
  );
};
