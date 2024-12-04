import Image from 'next/image';

import { ConnectWith } from '@components/ConnectWith';
import { Logo } from '@components/Logo';

import img1 from '../img/img.png';
import styles from './socialMediaBlock.module.scss';

export const SocialMediaBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.centerInfo}>
        <ConnectWith />
        <Logo isBig isLink={false} className={styles.logo} />
      </div>
      <div className={styles.image}>
        <Image src={img1} alt="formImage" />
      </div>
    </div>
  );
};
