import { FC } from 'react';

import { GradientText } from '@components/GradientText';

import styles from './content.module.scss';

export const Content: FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        Develop Your: <GradientText>Innovative Software</GradientText> with
        Tailored IT Solutions for Lasting Impact
      </h1>
      <p className={styles.description}>
        Your Partner for Streamlined IT Solutions
      </p>
    </div>
  );
};
