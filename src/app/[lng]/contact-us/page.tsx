import { CONTACT_US_QUERY } from '@graphqlQueries/contactUs';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { CalendlyWidget } from '@components/CalendlyWidget';
import { JsonLd } from '@components/JsonLd';
import Layout from '@components/Layout';

import { ContactUs } from './ContactUs';

export const metadata = {
  title: 'Contact Us | Smart-UI',
  description:
    'Get in touch with Smart-UI. Let\'s discuss your web development or AI automation project.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/contact-us',
    languages: {
      en: 'https://www.smart-ui.pro/en/contact-us',
      uk: 'https://www.smart-ui.pro/uk-UA/contact-us',
    },
  },
  openGraph: {
    title: 'Contact Us | Smart-UI',
    description:
      'Get in touch with Smart-UI. Let\'s discuss your web development or AI automation project.',
    url: 'https://www.smart-ui.pro/en/contact-us',
    type: 'website' as const,
  },
  twitter: {
    title: 'Contact Us | Smart-UI',
    description:
      'Get in touch with Smart-UI. Let\'s discuss your web development or AI automation project.',
  },
};

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

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://smart-ui.pro/contact-us' },
    ],
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <ContactUs data={contactUsPageData} />
      <CalendlyWidget />
      <Accordion data={accordionData} />
    </Layout>
  );
}
