import Link from 'next/link';

import { FC } from 'react';

import { Icons } from '@components/CustomIcons';
import { Logo } from '@components/Logo';

import { useTranslation } from '@hooks/useTranslation';

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
    label: 'info.infoLocation',
    href: '#',
    icon: <Icons.InfoLocation />,
    isLink: false,
  },
];

export const Info: FC = () => {
  const { t } = useTranslation('footer');

  return (
    <div className={styles.wrapper}>
      <Logo />
      <p className={styles.text}>{t('info.infoDescription')}</p>
      <ul className={styles.items}>
        {ITEMS.map((link) =>
          link.isLink ? (
            <li className={styles.item} key={link.label}>
              <Link key={link.label} href={link.href}>
                <span className={styles.icon}>{link.icon}</span>
                {t(link.label)}
              </Link>
            </li>
          ) : (
            <li className={styles.item} key={link.label}>
              <span key={link.label}>
                <span className={styles.icon}>{link.icon}</span>
                {t(link.label)}
              </span>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
