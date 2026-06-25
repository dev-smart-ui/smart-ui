import { PageEnum } from '@app-types/enums';
import { FRONTEND_DEV_PAGE_QUERY } from '@graphqlQueries/frontendDevPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import { JsonLd } from '@components/JsonLd';
import Layout from '@components/Layout';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

export const metadata = {
  title: 'Frontend Development — React, Next.js, Vue | Smart-UI',
  description:
    'Pixel-perfect frontend development with React.js, Next.js, and Vue.js. TypeScript, API integrations, high-performance web applications.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/frontend-development',
    languages: {
      en: 'https://www.smart-ui.pro/en/frontend-development',
      uk: 'https://www.smart-ui.pro/uk-UA/frontend-development',
    },
  },
  openGraph: {
    title: 'Frontend Development — React, Next.js, Vue | Smart-UI',
    description:
      'Pixel-perfect frontend development with React.js, Next.js, and Vue.js. TypeScript, API integrations, high-performance web applications.',
    url: 'https://www.smart-ui.pro/en/frontend-development',
    type: 'website' as const,
  },
  twitter: {
    title: 'Frontend Development — React, Next.js, Vue | Smart-UI',
    description:
      'Pixel-perfect frontend development with React.js, Next.js, and Vue.js. TypeScript, API integrations, high-performance web applications.',
  },
};

interface FrontendDevelopmentPageProps {
  params: {
    lng: string;
  };
}

export default async function FrontendDevelopmentPage({
  params: { lng },
}: FrontendDevelopmentPageProps) {
  const {
    frontendDevPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(FRONTEND_DEV_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = frontendDevPage?.data?.attributes?.Hero || {};
  const technologyStackData =
    frontendDevPage?.data?.attributes?.technologyStack || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const clientData = {
    sectionName:
      frontendDevPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes?.clients || {},
  };
  const coreServicesData =
    frontendDevPage?.data?.attributes?.coreServices || {};
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'Frontend Development', item: 'https://smart-ui.pro/frontend-development' },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Frontend Development',
    provider: { '@type': 'Organization', name: 'Smart-UI', url: 'https://smart-ui.pro' },
    areaServed: ['EU', 'GB', 'US', 'AU'],
    description: 'Pixel-perfect frontend development with React.js, Next.js, and Vue.js. TypeScript, API integrations, high-performance web applications.',
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <Hero page={PageEnum.FrontendDevelopment} data={heroData} />
      <TechnologyStack data={technologyStackData} />
      <CoreServices
        data={coreServicesData}
        lng={lng}
        callToAction="contactForm"
      />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
