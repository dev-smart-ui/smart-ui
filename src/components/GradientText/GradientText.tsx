import classNames from 'classnames';

import { FC, ReactNode } from 'react';

import styles from './gradientText.module.scss';

interface GradientTextProps {
  children: ReactNode;
  color?: 'Primary';
}

export const GradientText: FC<GradientTextProps> = ({
  children,
  color = 'Primary',
}) => {
  return (
    <span className={classNames(styles.wrapper, styles[`is${color}Color`])}>
      {children}
    </span>
  );
};
