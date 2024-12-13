import classNames from 'classnames';
import Link from 'next/link';

import { FC, ReactNode } from 'react';

import styles from './logo.module.scss';

interface LogoProps {
  isLink?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Logo: FC<LogoProps> = ({ isLink = true, className, children }) => {
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
      {children}
    </Link>
  ) : (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};
