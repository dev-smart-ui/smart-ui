'use client';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Services } from './Services';
import { useLocaleOurServicesData } from './hooks/useLocaleOurServicesData';
import styles from './ourServices.module.scss';

export const OurServices: FC = () => {
  const { services, headerInfo, buttons } = useLocaleOurServicesData();

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
