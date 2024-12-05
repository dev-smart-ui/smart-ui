import { FC } from 'react';

import { ItemsList } from '../ItemsList/ItemsList';
import styles from './services.module.scss';

const LINKS = [
  {
    label: 'services.frontendDevelopment',
    href: 'frontend-development',
  },
  {
    label: 'services.cms',
    href: 'cms',
  },
  {
    label: 'services.backendDevelopment',
    href: 'backend-development',
  },
  {
    label: 'services.uIUxDesign',
    href: 'ui-ux-design',
  },
  {
    label: 'services.qa',
    href: 'qa',
  },
  {
    label: 'services.customServices',
    href: 'custom-service',
  },
  {
    label: 'services.web3',
    href: 'web3',
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
