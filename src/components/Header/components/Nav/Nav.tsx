import { NavItem } from '@components/Header/components/Nav/NavItem';

import styles from './nav.module.scss';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    submenu: [
      { label: 'example 1', path: '#' },
      { label: 'example 2', path: '##' },
    ],
  },
  { label: 'Our Work', path: '/our-work' },
  { label: 'About Us', path: '/about-us' },
];

export const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navList}>
        {NAV_LINKS.map((link) => (
          <NavItem key={link.path} link={link} />
        ))}
      </ul>
    </nav>
  );
};
