'use client';

import Link from 'next/link';

import styles from './page.module.scss';

export default function NotFound({ lng }: { lng: string }) {
  return (
    <div className={styles.notFound}>
      <h1>404 - pageNotFound</h1>
      <p>pageNotFoundMessage</p>
      <Link href={`/${lng}`}>goHome</Link>
    </div>
  );
}
