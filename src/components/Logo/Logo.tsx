import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import styles from './logo.module.scss';

const defaultLogo = '/assets/img/logo.png';
const bigLogo = '/assets/img/bigLogo.png';

interface LogoProps {
  isBig?: boolean;
  isLink?: boolean;
  className?: string;
}

export const Logo: FC<LogoProps> = ({
  isBig = false,
  isLink = true,
  className,
}) => {
  const logoImage = (
    <Image
      src={!isBig ? defaultLogo : bigLogo}
      width={160}
      height={32}
      alt="logo"
    />
  );

  return isLink ? (
    <Link
      href="/"
      className={classNames(
        styles.wrapper,
        {
          [styles.isLink]: isLink,
        },
        className,
      )}
    >
      {logoImage}
    </Link>
  ) : (
    <div className={classNames(styles.wrapper, className)}>{logoImage}</div>
  );
};
