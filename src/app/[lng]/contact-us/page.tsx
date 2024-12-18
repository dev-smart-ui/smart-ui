import { CONTACT_US_QUERY } from '@graphqlQueries/contactUs';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import Layout from '@components/Layout';

import { ContactUs } from './ContactUs';

interface ContactUsPageProps {
  params: {
    lng: string;
  };
}

export default async function ContactUsPage({
  params: { lng },
}: ContactUsPageProps) {
  const { contactUsPage, accordion, contactForm, header, footer } =
    await fetchGraphQL(CONTACT_US_QUERY, {
      locale: lng,
    });
  const accordionData = accordion?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  const contactUsPageData = {
    mainData: contactUsPage?.data?.attributes || {},
    contactFormData: contactForm?.data?.attributes || [],
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <ContactUs data={contactUsPageData} />
      <Accordion data={accordionData} />
    </Layout>
  );
}
