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
  const { homePage, singleProjects, clientsLogo } = await fetchGraphQL(
    HOME_PAGE_QUERY,
    {
      locale: lng,
      pagination: { limit: 5 },
    },
  );

  const heroData = homePage?.data?.attributes?.Hero || {};
  const servicesTabsData = homePage?.data?.attributes?.ServicesTabs || {};
  const singleProjectsData = singleProjects?.data || [];

  const clientData = {
    sectionName: homePage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  return (
    <>
      <Hero data={heroData} />
      <ServicesTabs data={servicesTabsData} />
      <Clients data={clientData} />
      <Advantages />
      <ClientFeedback />
      <WorkTogether />
      <OurServices />
      <OurWork data={singleProjectsData} />
      <Accordion />
      <ContactForm />
    </>
  );
}
