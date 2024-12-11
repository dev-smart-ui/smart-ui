import { OUR_WORK_PAGE_QUERY } from '@graphqlQueries/ourWorkPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';

import { OurWorkWrapper } from './OurWorkWrapper';

interface OurWorkPageProps {
  params: {
    lng: string;
  };
}

export default async function OurWorkPage({
  params: { lng },
}: OurWorkPageProps) {
  const { ourWorkPage, clientsLogo } = await fetchGraphQL(OUR_WORK_PAGE_QUERY, {
    locale: lng,
  });

  const clientData = {
    sectionName:
      ourWorkPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  return (
    <>
      <OurWorkWrapper />
      <Clients data={clientData} />
      <ContactForm />
    </>
  );
}
