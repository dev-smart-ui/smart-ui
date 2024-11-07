import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>main</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
