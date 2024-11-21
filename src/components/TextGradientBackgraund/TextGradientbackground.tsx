import { FC, ReactNode } from 'react';

import styles from './textGradientbackground.module.scss';

interface TextGradientBackgroundProps {
  children: ReactNode;
  className?: string;
}

export const TextGradientBackground: FC<TextGradientBackgroundProps> = ({
  children,
  className,
}) => {
  return (
    <span className={`${styles.wrapper} ${className ?? ''}`}>{children}</span>
  );
};
