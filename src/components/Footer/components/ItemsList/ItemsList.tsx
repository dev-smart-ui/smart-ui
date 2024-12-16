import { IFooterLink } from '@app-types/interfaces';
import { useLanguage } from '@context/LanguageContext';
import Link from 'next/link';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './itemsList.module.scss';

interface ItemsListProps {
  items: IFooterLink[];
}

export const ItemsList: FC<ItemsListProps> = ({ items }) => {
  const lng = useLanguage();
  const { t } = useTranslation('footer');

  return (
    <ul className={styles.wrapper}>
      {items?.map(({ url, text }) => (
        <li key={text} className={styles.item}>
          <Link href={`/${lng}${url}`}>{t(text)}</Link>
        </li>
      ))}
    </ul>
  );
};
