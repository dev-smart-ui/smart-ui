'use client';

import { FC } from 'react';

import { Container } from '@components/Container';
import { ServicesList } from '@components/CoreServices/ServicesList';
import { BottomBlock } from '@components/CoreServices/bottomBlock';
import { useLocaleServicesData } from '@components/CoreServices/hooks/useLocaleCoreServicesData';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

export const CoreServices: FC = () => {
  const { headerInfo, coreServicesData, bottomBlock } = useLocaleServicesData();
  return (
    <Section>
      <Container>
        <SectionHeader
          title={headerInfo.title}
          subTitle={headerInfo.subTitle}
        />
        <ServicesList data={coreServicesData} />
        <BottomBlock data={bottomBlock} />
      </Container>
    </Section>
  );
};
