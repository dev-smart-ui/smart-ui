import { SOCIALS } from '@constants/socials';
import Link from 'next/link';

import { BorderGradientButton } from '@components/Button';

import styles from './socials.module.scss';

export const Socials = () => {
  return (
    <div className={styles.wrapper}>
      {SOCIALS.map((item) => (
        <BorderGradientButton
          fullWidth
          isIconSeparated
          key={item.link}
          as={Link}
          href={item.link}
          target="_blank"
          text={item.label}
          className={styles.socialBtn}
          borderColorType={item.borderColor}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
