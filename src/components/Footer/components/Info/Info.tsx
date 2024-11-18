import Link from 'next/link';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

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
        {ITEMS.map(({ isLink, label, href, icon }) =>
          isLink ? (
            <li className={styles.item} key={label}>
              <Link key={label} href={href}>
                <span className={styles.icon}>{icon}</span>
                {t(label)}
              </Link>
            </li>
          ) : (
            <li className={styles.item} key={label}>
              <span key={label}>
                <span className={styles.icon}>{icon}</span>
                {t(label)}
              </span>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
