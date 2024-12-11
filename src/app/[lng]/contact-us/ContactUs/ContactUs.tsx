'use client';

import { IHeaderInfo } from '@app-types/global';
import Image from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import bgImage from '../img/bg.png';
import { ContactBlock } from './ContactBlock';
import styles from './contactUs.module.scss';

export const ContactUs: FC = () => {
  const { t } = useTranslation('contactUs');

  const headerInfo: IHeaderInfo = {
    sectionName: t('contactUs.headerInfo.sectionName'),
    title: {
      part1: t('contactUs.headerInfo.title.main'),
      gradientPart: t('contactUs.headerInfo.title.highlighted'),
      color1: '#2865B0',
      color2: '#3B8FF3',
    },
    subTitle: t('contactUs.headerInfo.description'),
  };

  return (
    <Section className={styles.section}>
      <Container>
        <SectionHeader
          sectionName={headerInfo.sectionName}
          title={headerInfo.title}
          subTitle={headerInfo.subTitle}
        />
        <ContactBlock />
      </Container>
      {bgImage && (
        <div className={styles.topBgImage}>
          <Image src={bgImage} alt="backgraundImage" />
        </div>
      )}
    </Section>
  );
};
