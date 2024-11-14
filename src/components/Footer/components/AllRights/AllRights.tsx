import styles from './allRights.module.scss';

export const AllRights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <span className={styles.wrapper}>
      © {currentYear} Smart-Ui. All rights reserved.
    </span>
  );
};
