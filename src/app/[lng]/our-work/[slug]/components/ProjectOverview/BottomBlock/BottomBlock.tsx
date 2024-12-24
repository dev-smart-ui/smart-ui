import { IStrategicRoadmapItem } from '@app-types/interfaces';

import { FC } from 'react';

import styles from './bottomBlock.module.scss';

interface BottomBlockProps {
  data: IStrategicRoadmapItem[];
}

export const BottomBlock: FC<BottomBlockProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data?.map(({ title, id, list }) => (
        <div key={id} className={styles.item}>
          <h3 className={styles.title}>{title}</h3>

          <ul className={styles.list}>
            {list?.map((listItem) => (
              <li key={listItem} className={styles.listItem}>
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
