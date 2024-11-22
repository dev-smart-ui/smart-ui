'use client';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { useOurServices } from '../../hooks/useOurServices';
import { Services } from './Services';
import styles from './ourServices.module.scss';

export const OurServices: FC = () => {
  const { services, headerInfo, buttons } = useOurServices();

  return (
    <Section>
      <Container className={styles.content}>
        <SectionHeader
          sectionName={headerInfo.ourServices}
          title={headerInfo.title}
        />
        <Services services={services} buttonLabel={buttons.learnMore} />
      </Container>
    </Section>
  );
};
