import { SOCIALS } from '@constants/socials';
import { scrollToElement } from '@utils/scrollToElement';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton, Button } from '@components/Button';

import styles from './navigation.module.scss';

interface NavigationProps {
  t: (key: string, options: { ns: string }) => string;
  isHomePage: boolean;
}

export const Navigation: FC<NavigationProps> = ({ t, isHomePage }) => {
  const buttonLabel = isHomePage ? 'buttons.getStart' : 'buttons.requestQuote';

  return (
    <div className={styles.wrapper}>
      <Button
        onClick={() => scrollToElement('contactForm')}
        className={styles.btn}
        isBig
        text={t(buttonLabel, { ns: 'common' })}
      />
      {isHomePage && (
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
      )}
    </div>
  );
};
