import styles from './navButtons.module.scss';

export const NavButtons = () => {
  return (
    <div className={styles.wrapper}>
      <button>Contact Us</button>
      <button>EN</button>
    </div>
  );
};
