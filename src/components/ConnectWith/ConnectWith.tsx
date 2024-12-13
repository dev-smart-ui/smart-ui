import { ISocial } from '@app-types/interfaces';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';

import styles from './connectWith.module.scss';

interface ConnectWithProps {
  className?: string;
  data?: ISocial[];
  socialsLabel?: string;
}

export const ConnectWith: FC<ConnectWithProps> = ({
  className,
  data,
  socialsLabel,
}) => {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <div className={styles.socialButtons}>
        {data?.map(
          ({
            ariaLabel,
            color,
            label,
            url,
            icon: {
              data: {
                attributes: { url: iconUrl },
              },
            },
          }) => (
            <BorderGradientButton
              key={label}
              as={url ? Link : undefined}
              href={url}
              target="_blank"
              aria-label={ariaLabel}
              color={color}
              imgUrl={iconUrl}
              iconAlt={label}
            />
          ),
        )}
      </div>
      <span className={styles.text}>{socialsLabel}</span>
    </div>
  );
};
