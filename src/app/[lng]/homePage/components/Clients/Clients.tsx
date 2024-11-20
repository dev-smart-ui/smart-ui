'use client';

import Image from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/Button';
import { Container } from '@components/Container';

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

export const Clients: FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className={styles.wrapper}>
      <Container className={styles.content}>
        <Button text={t('buttons.ourAwesomeClients')} isGradient />
        <ul className={styles.logos}>
          {CLIENTS_LOGO.map(({ image, key }) => (
            <li key={key}>
              <Image src={image} alt={key} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
