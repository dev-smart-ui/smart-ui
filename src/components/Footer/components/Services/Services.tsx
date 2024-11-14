import { ItemsList } from '@components/Footer/components/ItemsList';

import styles from './services.module.scss';

const LINKS = [
  {
    label: 'Custom Software Development',
    href: '#',
  },
  {
    label: 'Cloud Solutions',
    href: '#',
  },
  {
    label: 'System Integration',
    href: '#',
  },
  {
    label: 'SEO Optimization',
    href: '#',
  },
  {
    label: 'UI/UX Design',
    href: '#',
  },
  {
    label: 'App Design',
    href: '#',
  },
];

export const Services = () => {
  return (
    <div className={styles.wrapper}>
      <h6 className={styles.title}>Services</h6>
      <ItemsList items={LINKS} />
    </div>
  );
};
