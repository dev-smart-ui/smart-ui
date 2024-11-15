import styles from './content.module.scss';

export const Content = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        Develop Your: <span>Innovative Software</span> with Tailored IT
        Solutions for Lasting Impact
      </h1>
      <p className={styles.description}>
        Your Partner for Streamlined IT Solutions
      </p>
    </div>
  );
};
