import { ROUTES } from '@routes/index';
import classNames from 'classnames';

import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { BorderGradientButton } from '@components/Button';
import { NavItem } from '@components/Header/components/Nav/NavItem';

import useMediaQuery from '@hooks/useMediaQuery';
import { useMount } from '@hooks/useMount';

import styles from './nav.module.scss';

interface NavProps {
  isOpen: boolean;
  onCloseMainMenu: () => void;
}

export const Nav: FC<NavProps> = ({ isOpen, onCloseMainMenu }) => {
  const { t, i18n } = useTranslation('header');
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const lng = i18n.language;

  const { mounted } = useMount(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: `/${lng}${ROUTES.HOME}` },
    {
      label: 'Services',
      submenu: [
        { label: 'example 1', path: '#' },
        { label: 'example 2', path: '' },
      ],
    },
    { label: 'Our Work', path: `/${lng}${ROUTES.OUR_WORK}` },
    { label: 'About Us', path: `/${lng}${ROUTES.ABOUT_US}` },
  ];

  if (!isDesktop && !mounted && !isOpen) return null;

  return (
    <nav
      className={classNames(styles.wrapper, {
        [styles.isOpen]: mounted && isOpen,
      })}
    >
      <ul className={styles.navList}>
        {navLinks.map(({ label, submenu, ...rest }) => (
          <NavItem
            key={label}
            onCloseMainMenu={onCloseMainMenu}
            link={{
              ...rest,
              label: t(label),
              submenu: submenu?.map((subLink) => ({
                ...subLink,
                label: t(label),
              })),
            }}
          />
        ))}
      </ul>
      <BorderGradientButton
        text="Contact Us"
        className={styles.contactUsBtnMobile}
      />
    </nav>
  );
};
