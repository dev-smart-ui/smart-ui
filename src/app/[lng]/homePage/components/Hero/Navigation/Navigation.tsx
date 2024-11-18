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
        {SOCIALS.map(({ label, link, borderColor, icon }) => (
          <BorderGradientButton
            key={label}
            as={Link}
            href={link}
            borderColorType={borderColor}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};
