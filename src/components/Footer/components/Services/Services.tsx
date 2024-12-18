import { IFooterServiceItem } from '@app-types/interfaces';

import { FC } from 'react';

import { ItemsList } from '../ItemsList/ItemsList';
import styles from './services.module.scss';

interface ServicesProps {
  data: IFooterServiceItem[];
  title: string;
}

export const Services: FC<ServicesProps> = ({ data, title }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <ItemsList items={data} />
    </div>
  );
};
