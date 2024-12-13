import { FC, ReactNode } from 'react';

import styles from './gradientText.module.scss';

type TColor = string | undefined;

interface GradientTextProps {
  children: ReactNode;
  colors?: TColor[];
}

export const GradientText: FC<GradientTextProps> = ({
  children,
  colors = ['#31B76F', '#FF8C42'],
}) => {
  return (
    <span
      className={styles.wrapper}
      style={{
        background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
        WebkitBackgroundClip: 'text',
      }}
    >
      {children}
    </span>
  );
};
