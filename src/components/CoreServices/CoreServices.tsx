'use client';

import { ICoreServices } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { ServicesList } from '@components/CoreServices/ServicesList';
import { BottomBlock } from '@components/CoreServices/bottomBlock';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

interface CoreServicesProps {
  data: ICoreServices;
}

export const CoreServices: FC<CoreServicesProps> = ({ data }) => {
  const bottomBlock = {
    title: data?.bottomTitle,
    text: data?.bottomSubTitle,
    image: data?.bottomImage,
    bgImage: data?.bottomBgImage,
    button: data?.bottomButton,
  };

  return (
    <Section>
      <Container>
        <SectionHeader title={data?.title} description={data?.description} />
        <ServicesList data={data?.cards || []} />
        <BottomBlock data={bottomBlock} />
      </Container>
    </Section>
  );
};
