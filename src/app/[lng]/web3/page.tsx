import { PageEnum } from '@app-types/enums';
import { WEB3_PAGE_QUERY } from '@graphqlQueries/web3Page';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import Layout from '@components/Layout';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

interface Web3PageProps {
  params: {
    lng: string;
  };
}

export default async function Web3Page({ params: { lng } }: Web3PageProps) {
  const {
    web3Page,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(WEB3_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = web3Page?.data?.attributes?.Hero || {};
  const technologyStackData = web3Page?.data?.attributes.technologyStack || {};
  const coreServicesData = web3Page?.data?.attributes?.coreServices || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  const clientData = {
    sectionName: web3Page?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero page={PageEnum.Web3} data={heroData} />
      <TechnologyStack data={technologyStackData} />
      <CoreServices data={coreServicesData} />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
