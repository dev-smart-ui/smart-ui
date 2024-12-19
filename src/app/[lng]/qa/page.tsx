import { PageEnum } from '@app-types/enums';
import { QA_PAGE_QUERY } from '@graphqlQueries/qaPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import Layout from '@components/Layout';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

interface QaPageProps {
  params: {
    lng: string;
  };
}

export default async function QaPage({ params: { lng } }: QaPageProps) {
  const {
    qaPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(QA_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = qaPage?.data?.attributes?.Hero || {};
  const technologyStackData = qaPage?.data?.attributes.technologyStack || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const coreServicesData = qaPage?.data?.attributes?.coreServices || {};

  const clientData = {
    sectionName: qaPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero page={PageEnum.Qa} data={heroData} />
      <TechnologyStack data={technologyStackData} />
      <CoreServices data={coreServicesData} />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
