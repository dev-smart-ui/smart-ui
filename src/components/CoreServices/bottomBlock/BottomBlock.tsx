'use client';

import { IQuestionSection } from '@app-types/interfaces';
import { ROUTES } from '@routes/index';
import { scrollToElement } from '@utils/index';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { Button } from '@components/Button';

import styles from './bottomBlock.module.scss';

interface BottomBlockProps {
  data: IQuestionSection;
  callToAction?: string;
  lng?: string;
  className?: string;
}

export const BottomBlock: FC<BottomBlockProps> = ({
  data,
  lng,
  callToAction = '',
  className,
}) => {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
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
        {callToAction ? (
          <Button
            text={data?.button?.label}
            onClick={() => scrollToElement(callToAction)}
          />
        ) : (
          <Link href={`/${lng}${ROUTES.CONTACT_US}`} className={styles.link}>
            {data?.button?.label}
          </Link>
        )}
      </div>
    </div>
  );
};
