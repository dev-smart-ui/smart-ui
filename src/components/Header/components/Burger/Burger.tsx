import { FC } from 'react';

import styles from './burger.module.scss';

interface BurgerMenuProps {
  onClick: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ onClick }) => {
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
