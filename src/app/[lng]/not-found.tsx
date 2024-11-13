'use client';

import { useLanguage } from '@context/languageContext';
import Link from 'next/link';

import { useTranslation } from '../i18n';
import styles from './page.module.scss';

export default function NotFound() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, 'common');

  return (
    <div className={styles.notFound}>
      <h1>404 - {t('pageNotFound')}</h1>
      <p>{t('pageNotFoundMessage')}</p>
      <Link href={`/${lng}`}>{t('goHome')}</Link>
    </div>
  );
}
