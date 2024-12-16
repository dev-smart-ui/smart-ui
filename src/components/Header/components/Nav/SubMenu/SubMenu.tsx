import { ISubMenuLink } from '@app-types/interfaces';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { FC, RefObject, useRef } from 'react';

import { Overlay } from '@components/Overlay';

import { useOnClickOutside } from '@hooks/useOnClickOutside';

import styles from './subMenu.module.scss';

interface SubMenuProps {
  submenu?: ISubMenuLink[];
  onCloseMainMenu?: () => void;
  isSubMenu: boolean;
  onCloseSubMenu: () => void;
  navItemRef: RefObject<HTMLLIElement | null>;
  lng: string;
}

export const SubMenu: FC<SubMenuProps> = ({
  submenu,
  onCloseMainMenu,
  isSubMenu,
  onCloseSubMenu,
  navItemRef,
  lng,
}) => {
  const subMenuRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(subMenuRef, onCloseSubMenu, navItemRef);

  const onCloseMenus = () => {
    onCloseMainMenu && onCloseMainMenu();
    onCloseSubMenu();
  };

  return (
    <>
      <div
        ref={subMenuRef}
        className={classNames(styles.wrapper, {
          [styles.active]: isSubMenu,
        })}
      >
        <div className={styles.content}>
          {submenu?.map(({ label, path, icon, desc, gridArea }) => (
            <Link
              key={label}
              style={{ gridArea }}
              href={`/${lng}${path}`}
              onClick={onCloseMenus}
              className={styles.link}
            >
              <div className={styles.icon}>
                <Image
                  src={icon?.data?.attributes?.url}
                  width={28}
                  height={28}
                  alt="serviceicon"
                />
              </div>
              <div className={styles.info}>
                <span className={styles.title}>{label}</span>
                <span className={styles.description}>{desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Overlay isActive={isSubMenu} />
    </>
  );
};
