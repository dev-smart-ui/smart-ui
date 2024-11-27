import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';
import dynamic from 'next/dynamic';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { Hero } from '@components/Hero';
import { OurWork } from '@components/OurWork';

import { Advantages } from './homePage/components/Advantages';
import { OurServices } from './homePage/components/OurServices';
import { ServicesTabs } from './homePage/components/ServicesTabs';
import { WorkTogether } from './homePage/components/WorkTogether';
import styles from './page.module.scss';

const ClientFeedback = dynamic(
  () =>
    import('./homePage/components/ClientFeedback').then(
      (mod) => mod.ClientFeedback,
    ),
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
    <div className={styles.wrapper}>
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
    </div>
  );
}
