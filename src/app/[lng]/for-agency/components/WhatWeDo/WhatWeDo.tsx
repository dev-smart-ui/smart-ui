'use client';

import { PageEnum } from '@app-types/enums';
import { IBottomBlock, IHeaderInfo } from '@app-types/global';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { BottomBlock } from '@components/CoreServices/bottomBlock';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { TechnologiesList } from './TechnologiesList';

interface WhatWeDoProps {
  page?: string;
}

export const WhatWeDo: FC<WhatWeDoProps> = ({ page = PageEnum.ForAgency }) => {
  const { t } = useTranslation([page, 'common']);

  const headerInfo: IHeaderInfo = {
    sectionName: t('whatWeDo.headerInfo.sectionName'),
    title: {
      part1: t('whatWeDo.headerInfo.title.main'),
      gradientPart: t('whatWeDo.headerInfo.title.highlighted'),
      color1: '#2865B0',
      color2: '#3B8FF3',
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
