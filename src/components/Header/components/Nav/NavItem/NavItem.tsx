'use client';

import classNames from 'classnames';
import Link from 'next/link';

import { FC, useRef } from 'react';

import { SubMenu } from '@components/Header/components/Nav/SubMenu';
import { ILink } from '@components/Header/types/types';

import { useOpen } from '@hooks/useOpen';

import styles from './navItem.module.scss';

interface NavItemProps {
  link: ILink;
}

export const NavItem: FC<NavItemProps> = ({ link }) => {
  const {
    isOpen: isSubMenu,
    onToggle: onToggleSubMenu,
    onClose: onCloseSubMenu,
  } = useOpen();
  const navItemRef = useRef<HTMLLIElement | null>(null);

  return (
    <li ref={navItemRef} className={styles.wrapper} key={link.label}>
      {link.path ? (
        <Link className={styles.link} href={link.path}>
          {link.label}
        </Link>
      ) : (
        <button className={styles.navMenuBtn} onClick={onToggleSubMenu}>
          {link.label}
          <span
            className={classNames(styles.arrow, {
              [styles.active]: isSubMenu,
            })}
          />
        </button>
      )}
      {link.submenu && (
        <SubMenu
          navItemRef={navItemRef}
          isSubMenu={isSubMenu}
          link={link}
          onCloseSubMenu={onCloseSubMenu}
        />
      )}
    </li>
  );
};
