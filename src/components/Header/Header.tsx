'use client';

import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Nav } from '@components/Header/components/Nav';
import { NavButtons } from '@components/Header/components/NavButtons';
import { useLocaleHeaderData } from '@components/Header/hooks/useLocaleHeaderData';
import { Logo } from '@components/Logo';

import { useOpen } from '@hooks/useOpen';

import styles from './header.module.scss';

const defaultLogo = '/assets/img/logo.png';

export const Header: FC = () => {
  const { navLinks, buttonLabel } = useLocaleHeaderData();
  const { isOpen, onToggle, onClose } = useOpen(false);

  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Logo>
            <Image src={defaultLogo} width={160} height={32} alt="logo" />
          </Logo>
          <Nav
            isOpen={isOpen}
            onCloseMainMenu={onClose}
            navLinks={navLinks}
            buttonLabel={buttonLabel}
          />
          <NavButtons onToggle={onToggle} buttonLabel={buttonLabel} />
        </div>
      </Container>
    </header>
  );
};
