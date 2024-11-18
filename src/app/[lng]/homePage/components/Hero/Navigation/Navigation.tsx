import { SOCIALS } from '@constants/socials';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton, Button } from '@components/Button';

import styles from './navigation.module.scss';

interface NavigationProps {
  t: (key: string, options: { ns: string }) => string;
}

export const Navigation: FC<NavigationProps> = ({ t }) => {
  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.btn}
        isBig
        text={t('buttons.getStart', { ns: 'common' })}
      />
      <div className={styles.socialButtons}>
        {SOCIALS.map((social) => (
          <BorderGradientButton
            key={social.label}
            as={Link}
            href={social.link}
            borderColorType={social.borderColor}
            icon={social.icon}
          />
        ))}
      </div>
    </div>
  );
};
