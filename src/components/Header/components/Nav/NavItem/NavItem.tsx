import { IHeaderLink, ISubMenuLink } from '@app-types/interfaces';
import { ROUTES } from '@routes/index';
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

const servicesLinks = [
  ROUTES.FRONTEND_DEVELOPMENT,
  ROUTES.CMS,
  ROUTES.BACKEND_DEVELOPMENT,
  ROUTES.UI_UX_DESIGN,
  ROUTES.QA,
  ROUTES.CUSTOM_SERVICES,
  ROUTES.WEB3,
];

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
  const normalizedPathname = pathname.replace(`/${lng}`, '') || '/';
  const normalizedLinkPath = link?.path || '/';

  const isActive =
    link?.path &&
    (normalizedPathname === normalizedLinkPath ||
      (normalizedPathname.startsWith(normalizedLinkPath) &&
        normalizedLinkPath !== '/'));

  const isSubMenuBtnActive = servicesLinks.includes(normalizedPathname);

  return (
    <li
      onMouseEnter={() => !link?.path && isDesktop && OnOpenSubMenu()}
      onMouseLeave={() => !link?.path && isDesktop && onCloseSubMenu()}
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
            [styles.isSomeSubItemActive]: isSubMenuBtnActive,
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
          pathname={pathname}
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
