'use client';

import { IQuestionSection } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { BottomBlock } from '@components/CoreServices/bottomBlock';
import { Section } from '@components/Section';

import styles from './questionBlock.module.scss';

interface IQuestionBlockProps {
  data: IQuestionSection;
}

export const QuestionBlock: FC<IQuestionBlockProps> = ({ data }) => {
  return (
    <Section className={styles.section}>
      <Container className={styles.content}>
        <BottomBlock data={data} />
      </Container>
    </Section>
  );
};
