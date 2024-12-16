import { PageEnum } from '@app-types/enums';
import { FRONTEND_DEV_PAGE_QUERY } from '@graphqlQueries/frontendDevPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import Layout from '@components/Layout';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

import technologyImg from './img/technologyImg.png';

interface FrontendDevelopmentPageProps {
  params: {
    lng: string;
  };
}

export default async function FrontendDevelopmentPage({
  params: { lng },
}: FrontendDevelopmentPageProps) {
  const {
    frontendDevPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
  } = await fetchGraphQL(FRONTEND_DEV_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = frontendDevPage?.data?.attributes?.Hero || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const clientData = {
    sectionName:
      frontendDevPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };
  const contactFormData = contactForm?.data?.attributes || [];

  return (
    <Layout>
      <Hero page={PageEnum.FrontendDevelopment} data={heroData} />
      <TechnologyStack
        image={technologyImg}
        page={PageEnum.FrontendDevelopment}
      />
      <CoreServices page={PageEnum.FrontendDevelopment} />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
