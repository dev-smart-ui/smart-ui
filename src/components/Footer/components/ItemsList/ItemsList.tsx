import { useLanguage } from '@context/LanguageContext';
import Link from 'next/link';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './itemsList.module.scss';

type TItem = {
  label: string;
  href: string;
};

interface ItemsListProps {
  items: TItem[];
}

export const ItemsList: FC<ItemsListProps> = ({ items }) => {
  const lng = useLanguage();
  const { t } = useTranslation('footer');

  return (
    <ul className={styles.wrapper}>
      {items.map(({ href, label }) => (
        <li key={label} className={styles.item}>
          <Link href={`/${lng}/${href}`}>{t(label)}</Link>
        </li>
      ))}
    </ul>
  );
};
