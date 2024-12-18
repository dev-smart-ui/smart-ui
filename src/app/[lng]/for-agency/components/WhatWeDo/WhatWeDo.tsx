'use client';

import { IWhatWeCanDo } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { BottomBlock } from '@components/CoreServices/bottomBlock';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { TechnologiesList } from './TechnologiesList';

interface WhatWeDoProps {
  data: IWhatWeCanDo;
}

export const WhatWeDo: FC<WhatWeDoProps> = ({ data }) => {
  const bottomBlock = {
    title: data?.bottomTitle,
    text: data?.bottomText,
    button: data?.bottomButton,
    bgImage: data?.bottomBgImage,
  };

  return (
    <Section>
      <Container>
        <SectionHeader
          sectionName={data?.sectionName}
          title={data?.title}
          description={data?.description}
        />
        <TechnologiesList data={data?.cards} />
        <BottomBlock data={bottomBlock} />
      </Container>
    </Section>
  );
};
