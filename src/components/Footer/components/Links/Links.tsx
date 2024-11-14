import { FC } from 'react';

import { ItemsList } from '../ItemsList/ItemsList';
import styles from './links.module.scss';

const LINKS = [
  {
    label: 'quickLinks.portfolio',
    href: '#',
  },
  {
    label: 'quickLinks.about',
    href: '#',
  },
  {
    label: 'quickLinks.contact',
    href: '#',
  },
  {
    label: 'quickLinks.privacyPolicy',
    href: '#',
  },
  {
    label: 'quickLinks.termsOfUse',
    href: '#',
  },
];

export const Links: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h6 className={styles.title}>Quick Links</h6>
      <ItemsList items={LINKS} />
    </div>
  );
};
