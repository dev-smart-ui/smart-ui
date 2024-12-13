import { IHeroData } from '@app-types/interfaces';
import { scrollToElement } from '@utils/index';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton, Button } from '@components/Button';

import styles from './navigation.module.scss';

interface NavigationProps {
  isHomePage: boolean;
  data?: IHeroData;
}

export const Navigation: FC<NavigationProps> = ({ isHomePage, data }) => {
  return (
    <div className={styles.wrapper}>
      <Button
        onClick={() => scrollToElement('contactForm')}
        className={styles.btn}
        isBig
        text={data?.button?.label}
      />
      {isHomePage && (
        <div className={styles.socialButtons}>
          {data?.socials?.map(
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
      )}
    </div>
  );
};
