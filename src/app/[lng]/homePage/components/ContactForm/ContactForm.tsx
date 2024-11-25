'use client';

import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { GradientBorder } from '@components/GradientBorder';
import { Section } from '@components/Section';

import { FormWrapper } from './FormWrapper';
import { SocialMediaBlock } from './SocialMediaBlock';
import styles from './contactFrom.module.scss';

export const ContactForm = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <Section>
      <Container>
        <div className={styles.content}>
          <GradientBorder direction="both" className={styles.gradientBorder}>
            <SocialMediaBlock />
          </GradientBorder>
          <FormWrapper t={t} />
        </div>
      </Container>
    </Section>
  );
};
