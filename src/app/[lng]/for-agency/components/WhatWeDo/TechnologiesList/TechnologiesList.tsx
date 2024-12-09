import Image from 'next/image';

import { FC } from 'react';

import { Icons } from '@components/CustomIcons';

import { useLocaleTechnologiesList } from './hooks/useLocaleTechnologiesList';
import styles from './technologiesList.module.scss';

export const TechnologiesList: FC = () => {
  const { technologies } = useLocaleTechnologiesList();

  return (
    <ul className={styles.wrapper}>
      {technologies.map((item) => (
        <li key={item.title} className={styles.item}>
          <div className={styles.card}>
            <div className={styles.titleWrapper}>
              <Image
                className={styles.image}
                src={item.icon}
                alt="technologyImage"
                width={48}
                height={48}
              />
              <span className={styles.title}>{item.title}</span>
            </div>

            <ul className={styles.technologiesList}>
              {item.list.map((technology) => (
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
