import { ROUTES } from '@routes/index';

import { FC } from 'react';

import { ItemsList } from '../ItemsList/ItemsList';
import styles from './links.module.scss';

const LINKS = [
  {
    label: 'quickLinks.portfolio',
    href: ROUTES.OUR_WORK,
  },
  {
    label: 'quickLinks.about',
    href: ROUTES.ABOUT_US,
  },
  {
    label: 'quickLinks.contact',
    href: ROUTES.CONTACT_US,
  },
  {
    label: 'quickLinks.forAgency',
    href: ROUTES.FOR_AGENCY,
  },
  {
    label: 'quickLinks.privacyPolicy',
    href: ROUTES.PRIVACY_POLICY,
  },
  {
    label: 'quickLinks.termsOfUse',
    href: ROUTES.TERMS,
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
