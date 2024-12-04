import { FC } from 'react';

import { ItemsList } from '../ItemsList/ItemsList';
import styles from './services.module.scss';

const LINKS = [
  {
    label: 'services.customSoftwareDevelopment',
    href: '#',
  },
  {
    label: 'services.cloudSolutions',
    href: '#',
  },
  {
    label: 'services.systemIntegration',
    href: '#',
  },
  {
    label: 'services.seoOptimization',
    href: '#',
  },
  {
    label: 'services.uiUxDesign',
    href: '#',
  },
  {
    label: 'services.appDesign',
    href: '#',
  },
];

export const Services: FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Services</span>
      <ItemsList items={LINKS} />
    </div>
  );
};
