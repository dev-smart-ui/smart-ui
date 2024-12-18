import { IFooterSocialItem } from '@app-types/interfaces';
import Link from 'next/link';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';

import styles from './socials.module.scss';

interface SocialsProps {
  data: IFooterSocialItem[];
}

export const Socials: FC<SocialsProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data?.map(({ url, label, color, icon, ariaLabel }) => (
        <BorderGradientButton
          fullWidth
          isIconSeparated
          key={url}
          as={Link}
          href={url}
          aria-label={ariaLabel}
          target="_blank"
          text={label}
          className={styles.socialBtn}
          color={color}
          imgUrl={icon?.data?.attributes?.url}
        />
      ))}
    </div>
  );
};
