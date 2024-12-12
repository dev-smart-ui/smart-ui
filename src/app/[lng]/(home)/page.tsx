import { HOME_PAGE_QUERY } from '@graphqlQueries/homePage';
import { fetchGraphQL } from '@lib/fetchGraphQL';
import dynamic from 'next/dynamic';

import { Accordion } from '@components/Accordion';
import { Hero } from '@components/Hero';
import { OurWork } from '@components/OurWork';
import { ServicesTabs } from '@components/ServicesTabs';

import { Advantages } from './components/Advantages';
import { OurServices } from './components/OurServices';
import { WorkTogether } from './components/WorkTogether';

const ClientFeedback = dynamic(
  () => import('./components/ClientFeedback').then((mod) => mod.ClientFeedback),
  {
    ssr: false,
  },
);

const ContactForm = dynamic(
  () => import('@components/ContactForm').then((mod) => mod.ContactForm),
  {
    ssr: false,
  },
);

const Clients = dynamic(
  () => import('@components/Clients').then((mod) => mod.Clients),
  {
    ssr: false,
  },
);

interface HomePageProps {
  params: {
    lng: string;
  };
}

export default async function Home({ params: { lng } }: HomePageProps) {
  const { homePage, singleProjects, clientsLogo, accordion } =
    await fetchGraphQL(HOME_PAGE_QUERY, {
      locale: lng,
      pagination: { limit: 5 },
    });

  const heroData = homePage?.data?.attributes?.Hero || {};
  const servicesTabsData = homePage?.data?.attributes?.ServicesTabs || {};
  const advantagesCards = homePage?.data?.attributes?.AdvantagesSection || {};
  const feedbacksData = homePage?.data?.attributes?.ClientFeedback || {};
  const worTogetherData = homePage?.data?.attributes?.WorkTogetherSection || {};
  const ourServiceData = homePage?.data?.attributes?.OurServiceSection || {};
  const ourWorkData = homePage?.data?.attributes?.OurWorkSection || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];

  const clientData = {
    sectionName: homePage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  return (
    <>
      <Hero data={heroData} />
      <ServicesTabs data={servicesTabsData} />
      <Clients data={clientData} />
      <Advantages data={advantagesCards} />
      <ClientFeedback data={feedbacksData} />
      <WorkTogether data={worTogetherData} />
      <OurServices data={ourServiceData} />
      <OurWork data={singleProjectsData} headerInfo={ourWorkData} />
      <Accordion data={accordionData} />
      <ContactForm />
    </>
  );
}
