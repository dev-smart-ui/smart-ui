'use client';

import { Button } from '@components/Button';
import { Icons } from '@components/CustomIcons';
import { GradientText } from '@components/GradientText';

import { useTranslation } from '@hooks/useTranslation';

import styles from './advantages.module.scss';

const CARDS = [
  {
    title: 'Wide Range of Services',
    description:
      'Offering a comprehensive suite of services to meet all your technology needs',
    icon: <Icons.Stack />,
  },
  {
    title: 'Full-Cycle Development',
    description:
      'Managing every stage of development, from concept to launch, for a seamless experience',
    icon: <Icons.Lifecycle />,
  },
  {
    title: 'Rapid Development',
    description: 'Delivering solutions quickly without compromising on quality',
    icon: <Icons.Clock />,
  },
  {
    title: 'High-Quality Work',
    description:
      'Ensuring excellence in every project with attention to detail and precision',
    icon: <Icons.StarBorder />,
  },
  {
    title: 'High Page Speed',
    description:
      'Optimizing website performance for fast loading times and smooth user experience',
    icon: <Icons.Rocket />,
  },
  {
    title: 'SEO Optimization',
    description:
      'Implementing strategies to improve visibility and ranking on search engines',
    icon: <Icons.Sun1 />,
  },
];

export const Advantages = () => {
  const { t } = useTranslation('common');

  return (
    <section className={styles.wrapper}>
      <Button text={t('buttons.ourAdvantages')} isGradient />
      <h2 className={styles.title}>
        Why Choose Us for{' '}
        <GradientText color="Secondary">Your Technology Needs</GradientText>
      </h2>
      <p className={styles.subTitle}>
        Here’s what sets us apart and makes us the trusted choice for businesses
        like yours:
      </p>

      <ul className={styles.cards}>
        {CARDS.map((card) => (
          <li key={card.title} className={styles.card}>
            {card.icon}
            <h5 className={styles.cardTitle}>{card.title}</h5>
            <p className={styles.cardDescription}>{card.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
