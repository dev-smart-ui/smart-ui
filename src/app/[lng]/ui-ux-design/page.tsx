import { PageEnum } from '@app-types/enums';
import { UI_UX_DESIGN_PAGE_QUERY } from '@graphqlQueries/uiUxDesignPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

import technologyImg from './img/technologyImg.png';

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
  } = await fetchGraphQL(UI_UX_DESIGN_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = uiUxDesignPage?.data?.attributes?.Hero || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];

  const clientData = {
    sectionName:
      uiUxDesignPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };
  const contactFormData = contactForm?.data?.attributes || [];

  return (
    <>
      <Hero page={PageEnum.UiUxDesign} data={heroData} />
      <TechnologyStack image={technologyImg} page={PageEnum.UiUxDesign} />
      <CoreServices page={PageEnum.UiUxDesign} />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </>
  );
}
