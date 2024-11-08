import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@components/Container';
import { Nav } from '@components/Header/components/Nav';
import { NavButtons } from '@components/Header/components/NavButtons';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/img/logo.png"
              width={160}
              height={32}
              alt="logo"
            />
          </Link>
          <Nav />
          <NavButtons />
        </div>
      </Container>
    </header>
  );
};
