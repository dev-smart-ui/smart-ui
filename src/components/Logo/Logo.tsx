import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/" className={styles.wrapper}>
      <Image src="/assets/img/logo.png" width={160} height={32} alt="logo" />
    </Link>
  );
};
