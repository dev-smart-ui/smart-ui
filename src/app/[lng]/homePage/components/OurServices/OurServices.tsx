'use client';

import { FC } from 'react';

import { Container } from '@components/Container';
import { GradientText } from '@components/GradientText';
import { TextGradientBackground } from '@components/TextGradientBackgraund';

import { useOurServices } from '../../hooks/useOurServices';
import { Services } from './Services';
import styles from './ourServices.module.scss';

export const OurServices: FC = () => {
  const { services, headerInfo, buttons } = useOurServices();

  return (
    <section className={styles.wrapper}>
      <Container className={styles.content}>
        <TextGradientBackground>
          {headerInfo.ourServices}
        </TextGradientBackground>
        <h2 className={styles.title}>
          {headerInfo.title.main}{' '}
          <GradientText color="Secondary">
            {headerInfo.title.highlighted}
          </GradientText>
        </h2>
        <Services services={services} buttonLabel={buttons.learnMore} />
      </Container>
    </section>
  );
};
