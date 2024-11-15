import Link from 'next/link';

import { FC } from 'react';

import { useTranslation } from '@hooks/useTranslation';

import styles from './itemsList.module.scss';

type TItem = {
  label: string;
  href: string;
};

interface ItemsListProps {
  items: TItem[];
}

export const ItemsList: FC<ItemsListProps> = ({ items }) => {
  const { t } = useTranslation('footer');

  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <Link href={item.href}>{t(item.label)}</Link>
        </li>
      ))}
    </ul>
  );
};
