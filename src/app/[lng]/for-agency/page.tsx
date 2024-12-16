import { PageEnum } from '@app-types/enums';
import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
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
import technologyImg from './img/technologyImg.png';

export default async function ForAgencyPage() {
  const { singleProjects, contactForm, header, footer } = await fetchGraphQL(
    PROJECTS_QUERY,
    {
      locale: 'en',
      pagination: { limit: 5 },
    },
  );

  const singleProjectsData = singleProjects?.data || [];
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero />
      <Advantages />
      <QuestionBlock />
      <WhatWeDo />
      <TechnologyStack page={PageEnum.ForAgency} image={technologyImg} />
      <Approaches />
      <OurWork data={singleProjectsData} />
      <Accordion />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
