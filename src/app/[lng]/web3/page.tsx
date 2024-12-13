import { PageEnum } from '@app-types/enums';
import { WEB3_PAGE_QUERY } from '@graphqlQueries/web3Page';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

import technologyImg from './img/technologyImg.png';

interface Web3PageProps {
  params: {
    lng: string;
  };
}

export default async function Web3Page({ params: { lng } }: Web3PageProps) {
  const { web3Page, singleProjects, clientsLogo, accordion } =
    await fetchGraphQL(WEB3_PAGE_QUERY, {
      locale: lng,
      pagination: { limit: 5 },
    });

  const heroData = web3Page?.data?.attributes?.Hero || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];

  const clientData = {
    sectionName: web3Page?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  return (
    <>
      <Hero page={PageEnum.Web3} data={heroData} />
      <TechnologyStack image={technologyImg} page={PageEnum.Web3} />
      <CoreServices page={PageEnum.Web3} />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm />
    </>
  );
}
