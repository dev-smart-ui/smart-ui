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
  const secondaryCta = data?.projectInfo?.[0];

  return (
    <div className={styles.wrapper}>
      {data?.siteUrl ? (
        <Link href={data?.siteUrl} target="_blank" className={styles.link}>
          {data?.button?.label}
        </Link>
      ) : (
        <Button
          onClick={() => scrollToElement('contactForm')}
          className={styles.btn}
          isBig
          text={data?.button?.label}
        />
      )}
      {isHomePage && secondaryCta?.text && secondaryCta?.itemId && (
        <Link href={secondaryCta.itemId} className={styles.secondaryBtn}>
          {secondaryCta.text}
        </Link>
      )}
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
