'use client';

import { IHeader } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Nav } from '@components/Header/components/Nav';
import { NavButtons } from '@components/Header/components/NavButtons';
import { Logo } from '@components/Logo';

import { useOpen } from '@hooks/useOpen';

import styles from './header.module.scss';

interface HeaderProps {
  headerData: IHeader;
}

export const Header: FC<HeaderProps> = ({ headerData }) => {
  const { isOpen, onToggle, onClose } = useOpen(false);

  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Logo>
            <Image
              src={headerData?.logo?.data?.attributes?.url}
              width={160}
              height={32}
              alt="logo"
            />
          </Logo>
          <Nav
            isOpen={isOpen}
            onCloseMainMenu={onClose}
            navLinks={headerData?.links}
            buttonLabel={headerData?.button?.label}
          />
          <NavButtons
            onToggle={onToggle}
            buttonLabel={headerData?.button?.label}
          />
        </div>
      </Container>
    </header>
  );
};
