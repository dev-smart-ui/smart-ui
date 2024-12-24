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
    header,
    footer,
  } = await fetchGraphQL(FRONTEND_DEV_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = frontendDevPage?.data?.attributes?.Hero || {};
  const technologyStackData =
    frontendDevPage?.data?.attributes?.technologyStack || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const clientData = {
    sectionName:
      frontendDevPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes?.clients || {},
  };
  const coreServicesData =
    frontendDevPage?.data?.attributes?.coreServices || {};
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero page={PageEnum.FrontendDevelopment} data={heroData} />
      <TechnologyStack data={technologyStackData} />
      <CoreServices
        data={coreServicesData}
        lng={lng}
        callToAction="contactForm"
      />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
