import { StaticImageData } from 'next/image';

import { FC } from 'react';

import { Card } from './Card';
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
        <Card key={service.title} {...service} buttonLabel={buttonLabel} />
      ))}
    </ul>
  );
};
