import { FC } from 'react';

import styles from './technologies.module.scss';

interface TechnologiesProps {
  data: Array<{ text: string; id: string }>;
  title: string;
}

export const Technologies: FC<TechnologiesProps> = ({ data, title }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {data?.map(({ id, text }) => (
          <li key={id} className={styles.liItem}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
