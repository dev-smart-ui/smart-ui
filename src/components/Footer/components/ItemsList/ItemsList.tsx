import Link from 'next/link';

import { FC } from 'react';

import styles from './itemsList.module.scss';

type TItem = {
  label: string;
  href: string;
};

interface IItemsListProps {
  items: TItem[];
}

export const ItemsList: FC<IItemsListProps> = ({ items }) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
