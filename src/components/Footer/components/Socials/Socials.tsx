import { SOCIALS } from '@constants/socials';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';

import styles from './socials.module.scss';

export const Socials: FC = () => {
  return (
    <div className={styles.wrapper}>
      {SOCIALS.map(({ link, label, borderColor, icon }) => (
        <BorderGradientButton
          fullWidth
          isIconSeparated
          key={link}
          as={Link}
          href={link}
          target="_blank"
          text={label}
          className={styles.socialBtn}
          borderColorType={borderColor}
          icon={icon}
        />
      ))}
    </div>
  );
};
