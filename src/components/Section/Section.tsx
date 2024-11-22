import { FC, ReactNode } from 'react';

import styles from './section.module.scss';

interface SectionProps {
  children?: ReactNode;
  className?: string;
}

export const Section: FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`${styles.wrapper} ${className ?? ''}`}>
      {children}
    </section>
  );
};
