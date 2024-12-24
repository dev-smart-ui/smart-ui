import { FOR_AGENCY_PAGE_QUERY } from '@graphqlQueries/forAgency';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { ContactForm } from '@components/ContactForm';
import Layout from '@components/Layout';
import { OurWork } from '@components/OurWork';
import { Solution } from '@components/Solution';
import { TechnologyStack } from '@components/TechnologyStack';

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

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero data={heroData} />
      <Solution data={advantagesData} />
      <QuestionBlock data={questionData} lng={lng} callToAction="contactForm" />
      <WhatWeDo data={whatWeDoData} lng={lng} callToAction="contactForm" />
      <TechnologyStack data={technologyStackData} />
      <Approaches data={approachesData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
