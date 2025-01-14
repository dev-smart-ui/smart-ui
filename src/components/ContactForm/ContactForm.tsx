'use client';

import { IContactForm } from '@app-types/interfaces';

import { FC, useState } from 'react';

import { FormSuccess } from '@components/ContactForm/FormSuccess/FormSuccess';
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
  const [isFormSent, setIsFormSent] = useState(false);

  const formData = {
    title: data?.title,
    subTitle: data?.subTitle,
  };

  return (
    <Section id="contactForm">
      <Container>
        <div
          className={`${styles.content} ${isFormSent ? styles.isFormSent : ''}`}
        >
          <GradientBorder direction="both" className={styles.gradientBorder}>
            <SocialMediaBlock data={data} />
          </GradientBorder>
          {isFormSent ? (
            <FormSuccess data={data} setIsFormSent={setIsFormSent} />
          ) : (
            <FormWrapper
              data={formData}
              button={data?.button}
              setIsFormSent={setIsFormSent}
            />
          )}
        </div>
      </Container>
    </Section>
  );
};
