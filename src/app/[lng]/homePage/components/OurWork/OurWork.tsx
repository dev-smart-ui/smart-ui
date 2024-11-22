'use client';

import { IProjectData } from '@app-types/interfaces';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { GradientText } from '@components/GradientText';
import { Section } from '@components/Section';
import { TextGradientBackground } from '@components/TextGradientBackgraund';

import { Projects } from './Projects';
import styles from './ourWork.module.scss';

interface OurWorkProps {
  data?: IProjectData[];
}

export const OurWork: FC<OurWorkProps> = ({ data }) => {
  const { t } = useTranslation('home');

  return (
    <Section>
      <Container className={styles.content}>
        <TextGradientBackground>
          {t('ourWork.headerInfo.ourWork')}
        </TextGradientBackground>
        <h2 className={styles.title}>
          {t('ourWork.headerInfo.title.main')}{' '}
          <GradientText color="Secondary">
            {t('ourWork.headerInfo.title.highlighted')}
          </GradientText>
        </h2>
        <Projects data={data} />
      </Container>
    </Section>
  );
};
