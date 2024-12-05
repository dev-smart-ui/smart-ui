import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { ContactForm } from '@components/ContactForm';
import { OurWork } from '@components/OurWork';

import { Hero } from './components';

export default async function ForAgencyPage() {
  const { singleProjects } = await fetchGraphQL(PROJECTS_QUERY, {
    locale: 'en',
    pagination: { limit: 5 },
  });

  const singleProjectsData = singleProjects?.data || [];

  return (
    <>
      <Hero />
      <OurWork data={singleProjectsData} />
      <Accordion />
      <ContactForm />
    </>
  );
}
