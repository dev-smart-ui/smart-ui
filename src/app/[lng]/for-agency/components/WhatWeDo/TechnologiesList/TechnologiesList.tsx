import { IWhatWeCanDoCard } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Icons } from '@components/CustomIcons';

import styles from './technologiesList.module.scss';

interface TechnologiesListProps {
  data: IWhatWeCanDoCard[];
}

export const TechnologiesList: FC<TechnologiesListProps> = ({ data }) => {
  return (
    <ul className={styles.wrapper}>
      {data?.map((item) => (
        <li key={item.title} className={styles.item}>
          <div className={styles.card}>
            <div className={styles.titleWrapper}>
              <Image
                className={styles.image}
                src={item.icon?.data?.attributes?.url}
                alt="technologyImage"
                width={48}
                height={48}
              />
              <span className={styles.title}>{item.title}</span>
            </div>

            <ul className={styles.technologiesList}>
              {item?.stackList.map((technology) => (
                <li key={technology} className={styles.technologyItem}>
                  <Icons.CheckCircle />
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};
