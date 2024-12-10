'use client';

import { IHeaderInfo } from '@app-types/global';
import { IExpert } from '@app-types/interfaces';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Team } from './components/Team';

interface OurExpertsProps {
  data: IExpert[];
}

export const OurExperts: FC<OurExpertsProps> = ({ data }) => {
  const { t } = useTranslation('aboutUs');

  const headerInfo: IHeaderInfo = {
    sectionName: t('ourExperts.headerInfo.sectionName'),
    title: {
      main: t('ourExperts.headerInfo.title.main'),
      highlighted: t('ourExperts.headerInfo.title.highlighted'),
      secondary: t('ourExperts.headerInfo.title.secondary'),
    },
    subTitle: t('ourExperts.headerInfo.description'),
  };

  return (
    <Section>
      <Container>
        <SectionHeader
          sectionName={headerInfo.sectionName}
          title={headerInfo.title}
          subTitle={headerInfo.subTitle}
        />
        <Team data={data} />
      </Container>
    </Section>
  );
};
