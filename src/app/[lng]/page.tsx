import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';
import dynamic from 'next/dynamic';

import { Accordion } from './homePage/components/Accordion';
import { Advantages } from './homePage/components/Advantages';
import { Clients } from './homePage/components/Clients';
import { Hero } from './homePage/components/Hero';
import { OurServices } from './homePage/components/OurServices';
import { OurWork } from './homePage/components/OurWork';
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
  const { data: singleProjectsData } = singleProjects;

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
    </div>
  );
}
