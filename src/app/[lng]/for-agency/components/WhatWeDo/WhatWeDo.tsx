'use client';

import { IBottomBlock, IHeaderInfo } from '@app-types/global';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { BottomBlock } from '@components/CoreServices/bottomBlock';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { TechnologiesList } from './TechnologiesList';

export const WhatWeDo: FC = () => {
  const { t } = useTranslation(['forAgency', 'common']);

  const headerInfo: IHeaderInfo = {
    sectionName: t('whatWeDo.headerInfo.sectionName'),
    title: {
      main: t('whatWeDo.headerInfo.title.main'),
      highlighted: t('whatWeDo.headerInfo.title.highlighted'),
    },
    subTitle: t('whatWeDo.headerInfo.description'),
  };

  const bottomBlock = {
    title: t('bottomBlock.title'),
    description: t('bottomBlock.description'),
    buttonLabel: t('buttons.scheduleAConsultation', { ns: 'common' }),
  } as IBottomBlock;

  return (
    <Section>
      <Container>
        <SectionHeader
          sectionName={headerInfo.sectionName}
          title={headerInfo.title}
          subTitle={headerInfo.subTitle}
        />
        <TechnologiesList />
        <BottomBlock data={bottomBlock} isAvatars={false} />
      </Container>
    </Section>
  );
};
