import { FC } from 'react';

import { Icons } from '@components/CustomIcons';

import styles from './list.module.scss';

interface ListProps {
  list: string[] | readonly string[];
}

export const List: FC<ListProps> = ({ list }) => {
  return (
    <ul className={styles.wrapper}>
      {list.map((item) => (
        <li key={item} className={styles.listItem}>
          <Icons.CheckCircle />
          {item}
        </li>
      ))}
    </ul>
  );
};
