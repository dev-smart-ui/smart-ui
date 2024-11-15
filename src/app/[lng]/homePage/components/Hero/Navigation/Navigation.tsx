import { SOCIALS } from '@constants/socials';
import Link from 'next/link';

import { BorderGradientButton, Button } from '@components/Button';

import styles from './navigation.module.scss';

export const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <Button className={styles.btn} isBig text="Get Start" />
      <div className={styles.socialButtons}>
        {SOCIALS.map((social) => (
          <BorderGradientButton
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
