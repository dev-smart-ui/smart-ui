import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FC, useRef, useState } from 'react';

import { SubMenu } from '@components/Header/components/Nav/SubMenu';
import { ILink, ISubMenuItem } from '@components/Header/types/types';

import { useOpen } from '@hooks/useOpen';
import { useResetStatesOnResize } from '@hooks/useResetStateOnResize';

import styles from './navItem.module.scss';

interface NavItemProps {
  link: ILink;
  submenu?: ISubMenuItem[];
  onCloseMainMenu: () => void;
}

export const NavItem: FC<NavItemProps> = ({
  link,
  onCloseMainMenu,
  submenu,
}) => {
  const pathname = usePathname();
  const {
    isOpen: isSubMenu,
    onToggle: onToggleSubMenu,
    onClose: onCloseSubMenu,
  } = useOpen();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navItemRef = useRef<HTMLLIElement | null>(null);
  useResetStatesOnResize([() => setIsSubmenuOpen(false), onCloseMainMenu]);
  const normalizedPathname =
    pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '') || '/';
  const normalizedLinkPath =
    link.path?.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '') || '/';

  const isActive =
    link.path &&
    (normalizedPathname === normalizedLinkPath ||
      (normalizedPathname.startsWith(normalizedLinkPath) &&
        normalizedLinkPath !== '/'));

  return (
    <li
      onMouseEnter={() => setIsSubmenuOpen(true)}
      onMouseLeave={() => setIsSubmenuOpen(false)}
      ref={navItemRef}
      className={styles.wrapper}
      key={link.label}
    >
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
      {submenu && (
        <SubMenu
          navItemRef={navItemRef}
          onCloseSubMenu={onCloseSubMenu}
          submenu={submenu}
          isSubmenuOpen={isSubmenuOpen}
          isSubMenu={isSubMenu}
          onCloseMainMenu={onCloseMainMenu}
        />
      )}
    </li>
  );
};
