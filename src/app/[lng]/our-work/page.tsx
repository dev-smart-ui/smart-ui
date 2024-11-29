import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { OurWork } from '@components/OurWork';

export default async function OurWorkPage() {
  const { singleProjects } = await fetchGraphQL(PROJECTS_QUERY, {
    locale: 'en',
    pagination: { limit: 5 },
  });

  const singleProjectsData = singleProjects?.data || [];

  return (
    <>
      <OurWork data={singleProjectsData} page="ourWork" />
      <Clients />
      <ContactForm />
    </>
  );
}
