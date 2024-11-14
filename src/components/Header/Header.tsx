'use client';

import { Container } from '@components/Container';
import { Nav } from '@components/Header/components/Nav';
import { NavButtons } from '@components/Header/components/NavButtons';
import { Logo } from '@components/Logo';

import { useOpen } from '@hooks/useOpen';

import styles from './header.module.scss';

export const Header = () => {
  const { isOpen, onToggle, onClose } = useOpen(false);

  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <Nav isOpen={isOpen} onCloseMainMenu={onClose} />
          <NavButtons onToggle={onToggle} />
        </div>
      </Container>
    </header>
  );
};
