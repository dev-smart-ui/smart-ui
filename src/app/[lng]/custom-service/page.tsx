import { PageEnum } from '@app-types/enums';
import { CUSTOM_SERVICES_PAGE_QUERY } from '@graphqlQueries/customServicesPage';
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

interface CustomServicesPageProps {
  params: {
    lng: string;
  };
}

export default async function CustomServicePage({
  params: { lng },
}: CustomServicesPageProps) {
  const {
    customServicesPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
  } = await fetchGraphQL(CUSTOM_SERVICES_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = customServicesPage?.data?.attributes?.Hero || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const contactFormData = contactForm?.data?.attributes || [];

  const clientData = {
    sectionName:
      customServicesPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  return (
    <Layout>
      <Hero page={PageEnum.CustomService} data={heroData} />
      <TechnologyStack image={technologyImg} page={PageEnum.CustomService} />
      <CoreServices page={PageEnum.CustomService} />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
