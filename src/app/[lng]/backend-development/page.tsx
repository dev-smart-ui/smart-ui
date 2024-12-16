import { PageEnum } from '@app-types/enums';
import { BACKEND_DEV_PAGE_QUERY } from '@graphqlQueries/backendDevPage';
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

interface BackendDevelopmentPageProps {
  params: {
    lng: string;
  };
}

export default async function BackendDevelopmentPage({
  params: { lng },
}: BackendDevelopmentPageProps) {
  const {
    backendDevPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
  } = await fetchGraphQL(BACKEND_DEV_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = backendDevPage?.data?.attributes?.Hero || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};

  const clientData = {
    sectionName:
      backendDevPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  return (
    <Layout headerData={headerData}>
      <Hero page={PageEnum.BackendDevelopment} data={heroData} />
      <TechnologyStack
        image={technologyImg}
        page={PageEnum.BackendDevelopment}
      />
      <CoreServices page={PageEnum.BackendDevelopment} />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
