'use client';

import { IContactForm } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { GradientBorder } from '@components/GradientBorder';
import { Section } from '@components/Section';

import { FormWrapper } from './FormWrapper';
import { SocialMediaBlock } from './SocialMediaBlock';
import styles from './contactFrom.module.scss';

interface ContactFormProps {
  data: IContactForm;
}

export const ContactForm: FC<ContactFormProps> = ({ data }) => {
  const formData = {
    title: data?.title,
    subTitle: data?.subTitle,
  };

  return (
    <Section id="contactForm">
      <Container>
        <div className={styles.content}>
          <GradientBorder direction="both" className={styles.gradientBorder}>
            <SocialMediaBlock data={data} />
          </GradientBorder>
          <FormWrapper data={formData} button={data?.button} />
        </div>
      </Container>
    </Section>
  );
};
