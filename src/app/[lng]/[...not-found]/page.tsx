'use client';

import Link from 'next/link';

import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';

import styles from './page.module.scss';

interface NotFoundProps {
  params: {
    lng: string;
  };
}

export default function NotFound({ params: { lng } }: NotFoundProps) {
  const { t } = useTranslation('common');

  return (
    <Container className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('404.title')}</h1>
        <p className={styles.description}>{t('404.description')}</p>
        <Link href={`/${lng}`} className={styles.link}>
          {t('404.buttonLabel')}
        </Link>
      </div>
      <div className={styles.bgText}>
        <span>404</span>
      </div>
    </Container>
  );
}
