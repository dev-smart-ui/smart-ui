'use client';

import { useLanguage } from '@context/LanguageContext';
import { ROUTES } from '@routes/index';

import { NavItem } from '@components/Header/components/Nav/NavItem';

import { useTranslation } from '../../../../app/i18n/client';
import styles from './nav.module.scss';

export const Nav = () => {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'home');

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

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navList}>
        {NAV_LINKS.map((link) => (
          <NavItem
            key={link.label}
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
    </nav>
  );
};
