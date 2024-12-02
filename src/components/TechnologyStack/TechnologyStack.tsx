'use client';

import { PageEnum } from '@app-types/enums';
import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './technologyStack.module.scss';

interface TechnologyStackProps {
  page?: string;
  image: StaticImageData;
}

export const TechnologyStack: FC<TechnologyStackProps> = ({
  page = PageEnum.Cms,
  image,
}) => {
  const { t } = useTranslation(page);

  return (
    <Section>
      <Container>
        <SectionHeader
          sectionName={t('technologyStack.sectionName')}
          title={t('technologyStack.title')}
          subTitle={t('technologyStack.subTitle')}
        />
        <div className={styles.image}>
          <Image src={image} alt="servicesImage" />
        </div>
      </Container>
    </Section>
  );
};
