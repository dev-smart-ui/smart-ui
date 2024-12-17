'use client';

import { PageEnum } from '@app-types/enums';

import { FC } from 'react';

import { Container } from '@components/Container';
import { ServicesList } from '@components/CoreServices/ServicesList';
import { BottomBlock } from '@components/CoreServices/bottomBlock';
import { useLocaleServicesData } from '@components/CoreServices/hooks/useLocaleCoreServicesData';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

interface CoreServicesProps {
  page?: string;
}

export const CoreServices: FC<CoreServicesProps> = ({
  page = PageEnum.Cms,
}) => {
  const { headerInfo, coreServicesData, bottomBlock } =
    useLocaleServicesData(page);
  return (
    <Section>
      <Container>
        <SectionHeader
          title={headerInfo.title}
          description={headerInfo.subTitle}
        />
        <ServicesList data={coreServicesData} />
        <BottomBlock data={bottomBlock} />
      </Container>
    </Section>
  );
};
