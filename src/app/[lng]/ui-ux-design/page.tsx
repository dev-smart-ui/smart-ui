import { PageEnum } from '@app-types/enums';
import { UI_UX_DESIGN_PAGE_QUERY } from '@graphqlQueries/uiUxDesignPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import Layout from '@components/Layout';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

interface UiUxDesignPageProps {
  params: {
    lng: string;
  };
}

export default async function UiUxDesignPage({
  params: { lng },
}: UiUxDesignPageProps) {
  const {
    uiUxDesignPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(UI_UX_DESIGN_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = uiUxDesignPage?.data?.attributes?.Hero || {};
  const technologyStackData =
    uiUxDesignPage?.data?.attributes.technologyStack || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];

  const clientData = {
    sectionName:
      uiUxDesignPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };
  const contactFormData = contactForm?.data?.attributes || [];
  const coreServicesData = uiUxDesignPage?.data?.attributes?.coreServices || {};
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero page={PageEnum.UiUxDesign} data={heroData} />
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
