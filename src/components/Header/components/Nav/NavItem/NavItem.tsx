import { IHeaderLink, ISubMenuLink } from '@app-types/interfaces';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FC, useRef } from 'react';

import { SubMenu } from '@components/Header/components/Nav/SubMenu';

import useMediaQuery from '@hooks/useMediaQuery';
import { useOpen } from '@hooks/useOpen';
import { useResetStatesOnResize } from '@hooks/useResetStateOnResize';

import styles from './navItem.module.scss';

interface NavItemProps {
  link: IHeaderLink;
  submenu?: ISubMenuLink[];
  onCloseMainMenu: () => void;
  lng: string;
}

export const NavItem: FC<NavItemProps> = ({
  link,
  onCloseMainMenu,
  submenu,
  lng,
}) => {
  const pathname = usePathname();
  const {
    isOpen: isSubMenu,
    onToggle: onToggleSubMenu,
    onClose: onCloseSubMenu,
    onOpen: OnOpenSubMenu,
  } = useOpen();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const navItemRef = useRef<HTMLLIElement | null>(null);
  useResetStatesOnResize([() => onCloseSubMenu, onCloseMainMenu]);
  const normalizedPathname =
    pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '') || '/';
  const normalizedLinkPath =
    link?.path?.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '') || '/';

  const isActive =
    link?.path &&
    (normalizedPathname === normalizedLinkPath ||
      (normalizedPathname.startsWith(normalizedLinkPath) &&
        normalizedLinkPath !== '/'));

  return (
    <li
      onMouseEnter={() => isDesktop && OnOpenSubMenu()}
      onMouseLeave={() => isDesktop && onCloseSubMenu()}
      ref={navItemRef}
      className={styles.wrapper}
      key={link?.label}
    >
      {link?.path ? (
        <Link
          onClick={onCloseMainMenu}
          className={classNames(styles.link, {
            [styles.active]: isActive,
          })}
          href={`/${lng}${link?.path}`}
        >
          {link?.label}
        </Link>
      ) : (
        <button
          className={classNames(styles.navMenuBtn, {
            [styles.active]: isSubMenu,
          })}
          onClick={onToggleSubMenu}
        >
          {link?.label}
          <span
            className={classNames(styles.arrow, {
              [styles.active]: isSubMenu,
            })}
          />
        </button>
      )}
      {submenu && (
        <SubMenu
          lng={lng}
          navItemRef={navItemRef}
          onCloseSubMenu={onCloseSubMenu}
          submenu={submenu}
          isSubMenu={isSubMenu}
          onCloseMainMenu={onCloseMainMenu}
        />
      )}
    </li>
  );
};
