'use client';

import { PageEnum } from '@app-types/enums';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Cards } from './Cards';

interface ApproachesProps {
  page?: string;
}

export const Approaches: FC<ApproachesProps> = ({
  page = PageEnum.ForAgency,
}) => {
  const { t } = useTranslation(page);

  return (
    <Section>
      <Container>
        <SectionHeader
          sectionName={t('ourApproaches.headerInfo.sectionName')}
          title={t('ourApproaches.headerInfo.title')}
          subTitle={t('ourApproaches.headerInfo.description')}
        />
        <Cards />
      </Container>
    </Section>
  );
};
