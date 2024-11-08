import Link from 'next/link';

import styles from './page.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Go to home page</Link>
    </div>
  );
}
