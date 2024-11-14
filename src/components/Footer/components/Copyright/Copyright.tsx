import { FC } from 'react';

import styles from './copyright.module.scss';

export const Copyright: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <span className={styles.wrapper}>
      © {currentYear} Smart-Ui. All rights reserved.
    </span>
  );
};
