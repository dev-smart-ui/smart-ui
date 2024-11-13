import { useLanguage } from '@context/LanguageContext';
import { ROUTES } from '@routes/index';
import classNames from 'classnames';

import { FC, useEffect } from 'react';

import { BorderGradientButton } from '@components/Button';
import { NavItem } from '@components/Header/components/Nav/NavItem';

import useMediaQuery from '@hooks/useMediaQuery';
import { useMount } from '@hooks/useMount';

import { useTranslation } from '../../../../app/i18n/client';
import styles from './nav.module.scss';

interface INavProps {
  isOpen: boolean;
  onCloseMainMenu: () => void;
}

export const Nav: FC<INavProps> = ({ isOpen, onCloseMainMenu }) => {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'home');
  const isDesktop = useMediaQuery('(min-width: 768px)');

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

  const NAV_LINKS = [
    { label: 'Home', path: ROUTES.HOME },
    {
      label: 'Services',
      submenu: [
        { label: 'example 1', path: '#' },
        { label: 'example 2', path: '' },
      ],
    },
    { label: 'Our Work', path: ROUTES.OUR_WORK },
    { label: 'About Us', path: ROUTES.ABOUT_US },
  ];

  if (!isDesktop && !mounted && !isOpen) return null;

  return (
    <nav
      className={classNames(styles.wrapper, {
        [styles.isOpen]: mounted && isOpen,
      })}
    >
      <ul className={styles.navList}>
        {NAV_LINKS.map((link) => (
          <NavItem
            key={link.label}
            onCloseMainMenu={onCloseMainMenu}
            link={{
              ...link,
              label: t(link.label),
              submenu: link.submenu?.map((subLink) => ({
                ...subLink,
                label: t(subLink.label),
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
