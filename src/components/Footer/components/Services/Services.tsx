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
      <h6 className={styles.title}>Services</h6>
      <ItemsList items={LINKS} />
    </div>
  );
};
