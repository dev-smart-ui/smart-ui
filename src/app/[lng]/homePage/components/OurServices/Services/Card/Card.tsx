import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';

import { Button } from '@components/Button';
import { Icons } from '@components/CustomIcons';

import styles from './card.module.scss';

interface ServiceItemProps {
  title: string;
  description: string;
  image: StaticImageData;
  area: string;
  buttonLabel: string;
}

export const Card: FC<ServiceItemProps> = ({
  title,
  description,
  image,
  area,
  buttonLabel,
}) => {
  return (
    <li className={classNames(styles.wrapper, styles[area])}>
      <div className={styles.image}>
        <Image src={image} alt="serviceImage" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button
          text={buttonLabel}
          className={styles.button}
          icon={<Icons.ArrowRight />}
        />
      </div>
    </li>
  );
};
