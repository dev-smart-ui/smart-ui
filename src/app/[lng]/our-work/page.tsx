import { OUR_WORK_PAGE_QUERY } from '@graphqlQueries/ourWorkPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { JsonLd } from '@components/JsonLd';
import Layout from '@components/Layout';

import { OurWorkWrapper } from './OurWorkWrapper';

export const metadata = {
  title: 'Our Work — Software Projects Portfolio | Smart-UI',
  description:
    'Explore Smart-UI\'s portfolio of web applications, AI integrations, and custom software projects for clients across Europe and beyond.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/our-work',
    languages: {
      'x-default': 'https://www.smart-ui.pro/en/our-work',
      en: 'https://www.smart-ui.pro/en/our-work',
      uk: 'https://www.smart-ui.pro/uk-UA/our-work',
    },
  },
  openGraph: {
    title: 'Our Work — Software Projects Portfolio | Smart-UI',
    description:
      'Explore Smart-UI\'s portfolio of web applications, AI integrations, and custom software projects for clients across Europe and beyond.',
    url: 'https://www.smart-ui.pro/en/our-work',
    type: 'website' as const,
  },
  twitter: {
    title: 'Our Work — Software Projects Portfolio | Smart-UI',
    description:
      'Explore Smart-UI\'s portfolio of web applications, AI integrations, and custom software projects for clients across Europe and beyond.',
  },
};

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

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'Our Work', item: 'https://smart-ui.pro/our-work' },
    ],
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <OurWorkWrapper
        headerInfo={ourWorkData}
        lng={lng}
        bgImage={
          ourWorkPage?.data?.attributes?.topBgImage?.data?.attributes?.url
        }
      />
      <Clients data={clientData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
