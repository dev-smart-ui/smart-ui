import { IImage } from '@app-types/interfaces';
import classNames from 'classnames';
import { detect } from 'detect-browser';
import Image from 'next/image';

import { FC, createElement, useEffect, useState } from 'react';

import { Button } from '@components/Button';
import { GradientBorder } from '@components/GradientBorder';

import styles from './card.module.scss';

interface CardProps {
  title: string;
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  description: string;
  image: IImage;
  area?: string;
  buttonLabel?: string;
  buttonIcon?: IImage;
  className?: string;
}

export const Card: FC<CardProps> = ({
  title,
  titleTag = 'h3',
  description,
  image,
  area,
  buttonLabel,
  buttonIcon,
  className,
}) => {
  const [isSafari, setIsSafari] = useState(false);
  const browser = detect();

  useEffect(() => {
    if (browser?.name === 'safari') setIsSafari(true);
  }, [browser]);

  return (
    <li
      className={classNames(
        styles.wrapper,
        className,
        isSafari ? styles.isEllipseSafari : styles.isEllipseAllBrowsers,
        styles[area ?? ''],
      )}
    >
      <GradientBorder color="#1B653D" borderRadius="lg">
        <div className={styles.image}>
          <Image
            src={image?.data?.attributes?.url}
            width={540}
            height={256}
            alt="serviceImage"
          />
        </div>
      </GradientBorder>
      <div className={styles.info}>
        {createElement(titleTag, { className: styles.title }, title)}
        <p className={styles.description}>{description}</p>
        {buttonLabel && (
          <Button
            text={buttonLabel}
            className={styles.button}
            icon={buttonIcon?.data?.attributes?.url}
          />
        )}
      </div>
    </li>
  );
};
