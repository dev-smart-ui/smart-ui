import { FC, ReactNode } from 'react';

import styles from './section.module.scss';

interface SectionProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

export const Section: FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={`${styles.wrapper} ${className ?? ''}`}>
      {children}
    </section>
  );
};
