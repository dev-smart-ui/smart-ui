import { PageEnum } from '@app-types/enums';
import { FOR_AGENCY_PAGE_QUERY } from '@graphqlQueries/forAgency';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { ContactForm } from '@components/ContactForm';
import Layout from '@components/Layout';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

import { Advantages } from './components/Advantages';
import { Approaches } from './components/Approaches';
import { Hero } from './components/Hero';
import { QuestionBlock } from './components/QuestionBlock';
import { WhatWeDo } from './components/WhatWeDo';

interface ForAgencyPageProps {
  params: {
    lng: string;
  };
}

export default async function ForAgencyPage({
  params: { lng },
}: ForAgencyPageProps) {
  const { forAgency, singleProjects, contactForm, header, footer } =
    await fetchGraphQL(FOR_AGENCY_PAGE_QUERY, {
      locale: lng,
      pagination: { limit: 5 },
    });

  const heroData = forAgency?.data?.attributes?.hero || {};
  const advantagesData = forAgency?.data?.attributes?.advantages || {};
  const singleProjectsData = singleProjects?.data || [];
  const questionData = forAgency?.data?.attributes.question || {};
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero data={heroData} />
      <Advantages data={advantagesData} />
      <QuestionBlock data={questionData} />
      <WhatWeDo />
      <TechnologyStack page={PageEnum.ForAgency} />
      <Approaches />
      <OurWork data={singleProjectsData} />
      <Accordion />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
