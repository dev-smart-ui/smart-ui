import { IFooterInfoItem, IImage } from '@app-types/interfaces';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { Logo } from '@components/Logo';

import styles from './info.module.scss';

interface InfoProps {
  data: IFooterInfoItem[];
  infoDescription: string;
  logo: IImage;
}

export const Info: FC<InfoProps> = ({ data, infoDescription, logo }) => {
  return (
    <div className={styles.wrapper}>
      <Logo>
        <Image
          src={logo?.data?.attributes?.url}
          width={160}
          height={32}
          alt="logo"
        />
      </Logo>
      <p className={styles.text}>{infoDescription ?? ''}</p>
      <ul className={styles.items}>
        {data?.map(({ label, url, icon }) =>
          url ? (
            <li className={styles.item} key={label}>
              <Link key={label} href={url}>
                <span className={styles.icon}>
                  <Image
                    src={icon?.data?.attributes?.url}
                    width={21}
                    height={21}
                    alt="icon"
                  />
                </span>
                {label}
              </Link>
            </li>
          ) : (
            <li className={styles.item} key={label}>
              <span key={label}>
                <span className={styles.icon}>
                  <Image
                    src={icon?.data?.attributes?.url}
                    width={21}
                    height={21}
                    alt="icon"
                  />
                </span>
                {label}
              </span>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
