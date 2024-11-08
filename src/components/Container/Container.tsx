import { FC, ReactNode } from 'react';

import styles from './container.module.scss';

interface ContainerProps {
  children: ReactNode;
  size?: 'large';
}

export const Container: FC<ContainerProps> = ({ children, size = 'large' }) => {
  const containerClass = styles[`container-${size}`];

  return <div className={containerClass}>{children}</div>;
};
