import Image from 'next/image';

import { Container } from '@components/Container';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image
              src="/assets/img/logo.png"
              width={160}
              height={32}
              alt="logo"
            />
          </div>

          <nav className={styles.navMenu}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/our-work">Our work</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
            </ul>
          </nav>

          <div className={styles.navButtons}>
            <button>Contact Us</button>
            <button>EN</button>
          </div>
        </div>
      </Container>
    </header>
  );
};
