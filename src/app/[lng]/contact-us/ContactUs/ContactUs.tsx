'use client';

import { IContactForm, IContactUsPage } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { ContactBlock } from './ContactBlock';
import styles from './contactUs.module.scss';

interface ContactUsProps {
  data: {
    mainData: IContactUsPage;
    contactFormData: IContactForm;
  };
}

export const ContactUs: FC<ContactUsProps> = ({ data }) => {
  return (
    <Section className={styles.section}>
      <Container>
        <SectionHeader
          sectionName={data?.mainData.sectionName}
          title={data?.mainData.title}
          subTitle={data?.mainData.subTitle}
        />
        <ContactBlock data={data} />
      </Container>
      {data?.mainData?.topImage && (
        <div className={styles.topBgImage}>
          <Image
            src={data?.mainData?.topImage?.data?.attributes?.url}
            width={1920}
            height={600}
            alt="backgraundImage"
          />
        </div>
      )}
    </Section>
  );
};
