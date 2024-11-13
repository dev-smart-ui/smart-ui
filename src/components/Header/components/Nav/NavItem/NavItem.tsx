import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FC, useRef } from 'react';

import { SubMenu } from '@components/Header/components/Nav/SubMenu';
import { ILink } from '@components/Header/types/types';

import { useOpen } from '@hooks/useOpen';

import styles from './navItem.module.scss';

interface NavItemProps {
  link: ILink;
  onCloseMainMenu: () => void;
}

export const NavItem: FC<NavItemProps> = ({ link, onCloseMainMenu }) => {
  const pathname = usePathname();
  const {
    isOpen: isSubMenu,
    onToggle: onToggleSubMenu,
    onClose: onCloseSubMenu,
  } = useOpen();
  const navItemRef = useRef<HTMLLIElement | null>(null);
  const normalizedPathname = pathname.replace(/^\/[a-z]{2}/, '') || '/';
  const normalizedLinkPath = link.path?.replace(/^\/[a-z]{2}/, '') || '/';

  const isActive =
    link.path &&
    (normalizedPathname === normalizedLinkPath ||
      (normalizedPathname.startsWith(normalizedLinkPath) &&
        normalizedLinkPath !== '/'));

  return (
    <li ref={navItemRef} className={styles.wrapper} key={link.label}>
      {link.path ? (
        <Link
          onClick={onCloseMainMenu}
          className={classNames(styles.link, {
            [styles.active]: isActive,
          })}
          href={link.path}
        >
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
          onCloseMainMenu={onCloseMainMenu}
        />
      )}
    </li>
  );
};
