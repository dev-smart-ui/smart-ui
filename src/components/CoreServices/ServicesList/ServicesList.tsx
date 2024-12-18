import { ICoreServiceCard } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import styles from './servicesList.module.scss';

interface ServicesListProps {
  data: ICoreServiceCard[];
}

export const ServicesList: FC<ServicesListProps> = ({ data }) => {
  return (
    <ul className={styles.wrapper}>
      {data.map((service) => (
        <li key={service?.id} className={styles.item}>
          <div className={styles.header}>
            <div className={styles.image}>
              <Image
                src={service?.img?.data?.attributes?.url}
                width={88}
                height={88}
                alt="serviceIcon"
              />
            </div>
            <h6 className={styles.title}>{service?.title}</h6>
          </div>
          <p className={styles.description}>{service?.text}</p>
        </li>
      ))}
    </ul>
  );
};
