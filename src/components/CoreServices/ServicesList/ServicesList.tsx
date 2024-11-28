import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';

import styles from './servicesList.module.scss';

type TServiceItem = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
};

interface ServicesListProps {
  data: TServiceItem[];
}

export const ServicesList: FC<ServicesListProps> = ({ data }) => {
  return (
    <ul className={styles.wrapper}>
      {data.map((service) => (
        <li key={service.id} className={styles.item}>
          <div className={styles.header}>
            <div className={styles.image}>
              <Image src={service.image} alt="serviceIcon" />
            </div>
            <h6 className={styles.title}>{service.title}</h6>
          </div>
          <p className={styles.description}>{service.description}</p>
        </li>
      ))}
    </ul>
  );
};
