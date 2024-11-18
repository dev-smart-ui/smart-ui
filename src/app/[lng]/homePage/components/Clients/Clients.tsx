'use client';

import Image from 'next/image';

import { useTranslation } from 'react-i18next';

import { Button } from '@components/Button';

import styles from './clients.module.scss';
import duelmastersImg from './img/duelmasters.png';
import ecrImg from './img/ecr.png';
import houndDogImg from './img/houndDog.png';
import montessoriImg from './img/montessori.png';
import sanLorenzoImg from './img/sanLorenzo.png';
import tigerImg from './img/tiger.png';

const CLIENTS_LOGO = [
  { key: 'montessori', image: montessoriImg },
  { key: 'houndDOg', image: houndDogImg },
  { key: 'sanLorenzo', image: sanLorenzoImg },
  { key: 'duelmasters', image: duelmastersImg },
  { key: 'ecr', image: ecrImg },
  { key: 'tiger', image: tigerImg },
];

export const Clients = () => {
  const { t } = useTranslation('common');

  return (
    <section className={styles.wrapper}>
      <Button text={t('buttons.ourAwesomeClients')} isGradient />
      <ul className={styles.logos}>
        {CLIENTS_LOGO.map((logo) => (
          <li key={logo.key}>
            <Image src={logo.image} alt={logo.key} />
          </li>
        ))}
      </ul>
    </section>
  );
};
