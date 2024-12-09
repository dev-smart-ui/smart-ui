import Image from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './cards.module.scss';
import accumImg from './img/accum.png';
import brushImg from './img/brush.png';
import pazzleImg from './img/pazzle.png';

export const Cards: FC = () => {
  const { t } = useTranslation('forAgency');

  const cards = [
    {
      icon: brushImg,
      title: t('ourApproaches.cards.card1.title'),
      description: t('ourApproaches.cards.card1.description'),
    },
    {
      icon: pazzleImg,
      title: t('ourApproaches.cards.card2.title'),
      description: t('ourApproaches.cards.card2.description'),
    },
    {
      icon: accumImg,
      title: t('ourApproaches.cards.card3.title'),
      description: t('ourApproaches.cards.card3.description'),
    },
  ];

  return (
    <ul className={styles.wrapper}>
      {cards.map((card) => (
        <li key={card.title} className={styles.card}>
          <div className={styles.image}>
            <Image src={card.icon} alt="icon" width={25} height={25} />
          </div>
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
        </li>
      ))}
    </ul>
  );
};
