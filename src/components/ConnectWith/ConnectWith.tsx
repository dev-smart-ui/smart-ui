import { SOCIALS } from '@constants/socials';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';

import styles from './connectWith.module.scss';

interface ConnectWithProps {
  className?: string;
}

export const ConnectWith: FC<ConnectWithProps> = ({ className }) => {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <div className={styles.socialButtons}>
        {SOCIALS.map(({ label, link, color, icon, ariaLabel }) => (
          <BorderGradientButton
            key={label}
            as={Link}
            href={link}
            target="_blank"
            aria-label={ariaLabel}
            color={color}
            icon={icon}
          />
        ))}
      </div>
      <span className={styles.text}>Connect with</span>
    </div>
  );
};
