import { ItemsList } from '@components/Footer/components/ItemsList';

import styles from './links.module.scss';

const LINKS = [
  {
    label: 'Portfolio',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
  {
    label: 'Privacy Policy',
    href: '#',
  },
  {
    label: 'Terms of use',
    href: '#',
  },
];

export const Links = () => {
  return (
    <div className={styles.wrapper}>
      <h6 className={styles.title}>Quick Links</h6>
      <ItemsList items={LINKS} />
    </div>
  );
};
