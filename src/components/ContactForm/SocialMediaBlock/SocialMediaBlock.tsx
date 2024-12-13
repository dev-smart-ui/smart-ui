import { IContactForm } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { ConnectWith } from '@components/ConnectWith';
import { Logo } from '@components/Logo';

import styles from './socialMediaBlock.module.scss';

interface SocialMediaBlockProps {
  data: IContactForm;
}

export const SocialMediaBlock: FC<SocialMediaBlockProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.centerInfo}>
        <ConnectWith data={data?.socials} socialsLabel={data?.socialsLabel} />
        <Logo isLink={false} className={styles.logo}>
          <Image
            src={data?.logo?.data?.attributes?.url}
            width={160}
            height={32}
            alt="logo"
          />
        </Logo>
      </div>
      <div className={styles.image}>
        <Image
          src={data?.backgroundImage?.data?.attributes?.url}
          width={1000}
          height={540}
          alt="socialBlockImage"
        />
      </div>
    </div>
  );
};
