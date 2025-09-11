import { FC, ReactNode } from 'react';

import styles from './container.module.scss';

interface ContainerProps {
  children: ReactNode;
  size?: 'large' | 'xl';
  className?: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  size = 'large',
  className,
}) => {
  const containerClass = styles[`container-${size}`];

  return (
    <div className={`${containerClass} ${className ?? ''}`}>{children}</div>
  );
};
