import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { FC, RefObject, useRef } from 'react';

import { ISubMenu } from '@components/Header/types/types';
import { Overlay } from '@components/Overlay';

import { useOnClickOutside } from '@hooks/useOnClickOutside';

import styles from './subMenu.module.scss';

interface SubMenuProps {
  submenu?: ISubMenu;
  onCloseMainMenu?: () => void;
  isSubMenu: boolean;
  onCloseSubMenu: () => void;
  navItemRef: RefObject<HTMLLIElement | null>;
  isSubmenuOpen: boolean;
}

export const SubMenu: FC<SubMenuProps> = ({
  submenu,
  onCloseMainMenu,
  isSubMenu,
  onCloseSubMenu,
  navItemRef,
  isSubmenuOpen,
}) => {
  const subMenuRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(subMenuRef, onCloseSubMenu, navItemRef);

  const columns = submenu
    ? [submenu.firstColumn, submenu.secondColumn, submenu.lastColumn]
    : [];

  return (
    <>
      <div
        ref={subMenuRef}
        className={classNames(styles.wrapper, {
          [styles.active]: isSubMenu,
        })}
      >
        <div className={styles.content}>
          {columns.map((column, index) => (
            <div key={index} className={styles.column}>
              {column.map(({ path, label, desc, icon }) => (
                <div key={label} className={styles.item}>
                  <Link
                    href={path}
                    onClick={onCloseMainMenu}
                    className={styles.link}
                  >
                    <div className={styles.icon}>
                      <Image src={icon} alt="serviceicon" />
                    </div>
                    <div className={styles.info}>
                      <span className={styles.title}>{label}</span>
                      <span className={styles.description}>{desc}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Overlay isActive={isSubmenuOpen} />
    </>
  );
};
