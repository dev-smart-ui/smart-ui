import { FOR_AGENCY_PAGE_QUERY } from '@graphqlQueries/forAgency';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { ContactForm } from '@components/ContactForm';
import { BottomBlock } from '@components/CoreServices/bottomBlock';
import { JsonLd } from '@components/JsonLd';
import Layout from '@components/Layout';
import { OurWork } from '@components/OurWork';
import { Section } from '@components/Section';
import { Solution } from '@components/Solution';
import { TechnologyStack } from '@components/TechnologyStack';

import { Approaches } from './components/Approaches';
import { Hero } from './components/Hero';
import styles from './components/QuestionBlock/questionBlock.module.scss';
import { WhatWeDo } from './components/WhatWeDo';

export const metadata = {
  title: 'White-Label Development for Agencies | Smart-UI',
  description:
    'Reliable white-label web development for agencies. Frontend, backend, and full-cycle projects delivered on time.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/for-agency',
    languages: {
      en: 'https://www.smart-ui.pro/en/for-agency',
      uk: 'https://www.smart-ui.pro/uk-UA/for-agency',
    },
  },
  openGraph: {
    title: 'White-Label Development for Agencies | Smart-UI',
    description:
      'Reliable white-label web development for agencies. Frontend, backend, and full-cycle projects delivered on time.',
    url: 'https://www.smart-ui.pro/en/for-agency',
    type: 'website' as const,
  },
  twitter: {
    title: 'White-Label Development for Agencies | Smart-UI',
    description:
      'Reliable white-label web development for agencies. Frontend, backend, and full-cycle projects delivered on time.',
  },
};

interface ForAgencyPageProps {
  params: {
    lng: string;
  };
}

export default async function ForAgencyPage({
  params: { lng },
}: ForAgencyPageProps) {
  const { forAgency, singleProjects, contactForm, accordion, header, footer } =
    await fetchGraphQL(FOR_AGENCY_PAGE_QUERY, {
      locale: lng,
      pagination: { limit: 5 },
    });

  const heroData = forAgency?.data?.attributes?.hero || {};
  const advantagesData = forAgency?.data?.attributes?.advantages || {};
  const singleProjectsData = singleProjects?.data || [];
  const questionData = forAgency?.data?.attributes.question || {};
  const whatWeDoData = forAgency?.data?.attributes.whatWeCanDo || {};
  const technologyStackData = forAgency?.data?.attributes.technologyStack || {};
  const approachesData = forAgency?.data?.attributes.approaches || {};
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};
  const accordionData = accordion?.data?.attributes || [];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'For Agency', item: 'https://smart-ui.pro/for-agency' },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'White-Label Development for Agencies',
    provider: { '@type': 'Organization', name: 'Smart-UI', url: 'https://smart-ui.pro' },
    areaServed: ['EU', 'GB', 'US', 'AU'],
    description: 'Reliable white-label web development for agencies. Frontend, backend, and full-cycle projects delivered on time.',
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <Hero data={heroData} />
      <Solution data={advantagesData} />
      <Section className={styles.section}>
        <BottomBlock data={questionData} lng={lng} callToAction="contactForm" />
      </Section>
      <WhatWeDo data={whatWeDoData} lng={lng} callToAction="contactForm" />
      <TechnologyStack data={technologyStackData} />
      <Approaches data={approachesData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
