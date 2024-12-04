import { useLanguage } from '@context/LanguageContext';

import { FC } from 'react';

import { ItemsList } from '../ItemsList/ItemsList';
import styles from './links.module.scss';

export const Links: FC = () => {
  const lng = useLanguage();

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
      href: `/${lng}/contact-us`,
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

  return (
    <div className={styles.wrapper}>
      <h6 className={styles.title}>Quick Links</h6>
      <ItemsList items={LINKS} />
    </div>
  );
};
