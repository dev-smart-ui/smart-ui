import { FC } from 'react';

import { ItemsList } from '../ItemsList/ItemsList';
import styles from './links.module.scss';

const LINKS = [
  {
    label: 'quickLinks.portfolio',
    href: 'our-work',
  },
  {
    label: 'quickLinks.about',
    href: 'about-us',
  },
  {
    label: 'quickLinks.contact',
    href: 'contact-us',
  },
  {
    label: 'quickLinks.forAgency',
    href: 'for-agency',
  },
  {
    label: 'quickLinks.privacyPolicy',
    href: 'privacy-policy',
  },
  {
    label: 'quickLinks.termsOfUse',
    href: 'terms',
  },
];

export const Links: FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Quick Links</span>
      <ItemsList items={LINKS} />
    </div>
  );
};
