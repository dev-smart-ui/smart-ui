import { IFooterLink } from '@app-types/interfaces';

import { FC } from 'react';

import { ItemsList } from '../ItemsList/ItemsList';
import styles from './links.module.scss';

interface LinksProps {
  data: IFooterLink[];
  title: string;
}

export const Links: FC<LinksProps> = ({ data, title }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <ItemsList items={data} />
    </div>
  );
};
