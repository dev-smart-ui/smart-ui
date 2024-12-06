'use client';

import { IBottomBlock } from '@app-types/global';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { BottomBlock } from '@components/CoreServices/bottomBlock';
import { Section } from '@components/Section';

import styles from './questionBlock.module.scss';

export const QuestionBlock: FC = () => {
  const { t } = useTranslation(['forAgency', 'common']);

  const bottomBlock = {
    title: t('bottomBlock.title'),
    description: t('bottomBlock.description'),
    buttonLabel: t('buttons.getInTouch', { ns: 'common' }),
  } as IBottomBlock;

  return (
    <Section>
      <Container className={styles.content}>
        <BottomBlock data={bottomBlock} />
      </Container>
    </Section>
  );
};
