'use client';

import Image from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { TextGradientBackground } from '@components/TextGradientBackgraund';

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
  const { t } = useTranslation('home');

  return (
    <Section>
      <Container className={styles.content}>
        <TextGradientBackground>
          {t('clients.ourAwesomeClients')}
        </TextGradientBackground>
        <ul className={styles.logos}>
          {CLIENTS_LOGO.map(({ image, key }) => (
            <li key={key}>
              <Image src={image} alt={key} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
