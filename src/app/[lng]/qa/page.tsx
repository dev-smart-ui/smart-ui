import { PageEnum } from '@app-types/enums';
import { QA_PAGE_QUERY } from '@graphqlQueries/qaPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

import technologyImg from './img/technologyImg.png';

export default async function QaPage() {
  const { qaPage, singleProjects, clientsLogo } = await fetchGraphQL(
    QA_PAGE_QUERY,
    {
      locale: 'en',
      pagination: { limit: 5 },
    },
  );

  const heroData = qaPage?.data?.attributes?.Hero || {};
  const singleProjectsData = singleProjects?.data || [];

  const clientData = {
    sectionName: qaPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  return (
    <>
      <Hero page={PageEnum.Qa} data={heroData} />
      <TechnologyStack image={technologyImg} page={PageEnum.Qa} />
      <CoreServices page={PageEnum.Qa} />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion />
      <ContactForm />
    </>
  );
}
