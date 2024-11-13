import classNames from 'classnames';
import Link from 'next/link';

import { FC, RefObject, useRef } from 'react';

import { ILink } from '@components/Header/types/types';

import { useOnClickOutside } from '@hooks/useOnClickOutside';

import styles from './subMenu.module.scss';

interface SubMenuProps {
  link: ILink;
  onCloseSubMenu: () => void;
  isSubMenu: boolean;
  navItemRef: RefObject<HTMLLIElement | null>;
  onCloseMainMenu: () => void;
}

export const SubMenu: FC<SubMenuProps> = ({
  link,
  onCloseSubMenu,
  isSubMenu,
  navItemRef,
  onCloseMainMenu,
}) => {
  const subMenuRef = useRef<HTMLUListElement | null>(null);
  useOnClickOutside(subMenuRef, onCloseSubMenu, navItemRef);

  return (
    <ul
      ref={subMenuRef}
      className={classNames(styles.wrapper, {
        [styles.active]: isSubMenu,
      })}
    >
      {link.submenu?.map((subLink) => (
        <li key={subLink.path} className={styles.item}>
          <Link
            href={subLink.path}
            onClick={onCloseMainMenu}
            className={styles.link}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onCloseMainMenu();
              }
            }}
          >
            {subLink.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
