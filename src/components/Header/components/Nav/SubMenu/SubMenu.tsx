import classNames from 'classnames';

import { FC, RefObject, useRef } from 'react';

import { ILink } from '@components/Header/types/types';

import { useOnClickOutside } from '@hooks/useOnClickOutside';

import styles from './subMenu.module.scss';

interface SubMenuProps {
  link: ILink;
  onCloseSubMenu: () => void;
  isSubMenu: boolean;
  navItemRef: RefObject<HTMLLIElement | null>;
}

export const SubMenu: FC<SubMenuProps> = ({
  link,
  onCloseSubMenu,
  isSubMenu,
  navItemRef,
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
        <li key={subLink.path}>
          <a href={subLink.path}>{subLink.label}</a>
        </li>
      ))}
    </ul>
  );
};
