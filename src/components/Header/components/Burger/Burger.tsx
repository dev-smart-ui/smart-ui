import styles from './burger.module.scss';

export const BurgerMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className={styles.wrapper}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
};
