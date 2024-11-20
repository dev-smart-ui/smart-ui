import { StaticImageData } from 'next/image';

import { FC } from 'react';

import { ServiceItem } from './ServiceItem';
import styles from './services.module.scss';

type TService = {
  title: string;
  description: string;
  image: StaticImageData;
  area: string;
};

interface ServicesProps {
  services: TService[];
  buttonLabel: string;
}

export const Services: FC<ServicesProps> = ({ services, buttonLabel }) => {
  return (
    <ul className={styles.wrapper}>
      {services.map((service) => (
        <ServiceItem
          key={service.title}
          {...service}
          buttonLabel={buttonLabel}
        />
      ))}
    </ul>
  );
};
