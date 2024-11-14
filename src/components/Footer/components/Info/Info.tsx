import Link from 'next/link';

import { Icons } from '@components/CustomIcons';
import { Logo } from '@components/Logo';

import styles from './info.module.scss';

const ITEMS = [
  {
    label: 'info@smart-ui.pro',
    href: 'mailto:info@smart-ui.pro',
    icon: <Icons.Email />,
    isLink: true,
  },
  {
    label: '+34634 839 752',
    href: 'tel:+34634839752',
    icon: <Icons.Phone />,
    isLink: true,
  },
  {
    label: '14, Lopatyns`kyi Ln   /   Kharkov City, Ukraine',
    href: '#',
    icon: <Icons.NavigationPoint />,
    isLink: false,
  },
];

export const Info = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <p className={styles.text}>
        We build readymade websites, mobile applications, and elaborate online
        business services.
      </p>
      <ul className={styles.items}>
        {ITEMS.map((link) =>
          link.isLink ? (
            <li className={styles.item}>
              <Link key={link.label} href={link.href}>
                {link.icon}
                {link.label}
              </Link>
            </li>
          ) : (
            <li className={styles.item}>
              <span key={link.label}>
                {link.icon}
                {link.label}
              </span>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
