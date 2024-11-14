import { FC } from 'react';

import styles from './burger.module.scss';

interface IBurgerMenu {
  onClick: () => void;
}

export const BurgerMenu: FC<IBurgerMenu> = ({ onClick }) => {
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
