import { OUR_WORK_PAGE_QUERY } from '@graphqlQueries/ourWorkPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import Layout from '@components/Layout';

import { OurWorkWrapper } from './OurWorkWrapper';

interface OurWorkPageProps {
  params: {
    lng: string;
  };
}

export default async function OurWorkPage({
  params: { lng },
}: OurWorkPageProps) {
  const { ourWorkPage, clientsLogo, contactForm, header, footer } =
    await fetchGraphQL(OUR_WORK_PAGE_QUERY, {
      locale: lng,
    });

  const ourWorkData = ourWorkPage?.data?.attributes?.OurWorkSection || {};
  const clientData = {
    sectionName:
      ourWorkPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <OurWorkWrapper headerInfo={ourWorkData} lng={lng} />
      <Clients data={clientData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
