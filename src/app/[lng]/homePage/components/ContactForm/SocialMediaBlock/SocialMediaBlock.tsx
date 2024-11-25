import { SOCIALS } from '@constants/socials';
import Image from 'next/image';
import Link from 'next/link';

import { BorderGradientButton } from '@components/Button';
import { Logo } from '@components/Logo';

import img1 from '../img/img.png';
import styles from './socialMediaBlock.module.scss';

export const SocialMediaBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.centerInfo}>
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
        <span className={styles.text}>Connect with</span>
        <Logo isBig isLink={false} className={styles.logo} />
      </div>
      <div className={styles.image}>
        <Image src={img1} alt="formImage" />
      </div>
    </div>
  );
};
