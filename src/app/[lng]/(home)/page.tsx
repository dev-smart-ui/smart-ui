import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';
import dynamic from 'next/dynamic';

import { Accordion } from '@components/Accordion';
import { Hero } from '@components/Hero';
import { OurWork } from '@components/OurWork';

import { Advantages } from './components/Advantages';
import { OurServices } from './components/OurServices';
import { ServicesTabs } from './components/ServicesTabs';
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

export default async function Home() {
  const { singleProjects } = await fetchGraphQL(PROJECTS_QUERY, {
    locale: 'en',
    pagination: { limit: 5 },
  });

  const singleProjectsData = singleProjects?.data || [];

  return (
    <>
      <Hero />
      <ServicesTabs />
      <Clients />
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
