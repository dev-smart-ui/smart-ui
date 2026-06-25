import { PageEnum } from '@app-types/enums';
import { BACKEND_DEV_PAGE_QUERY } from '@graphqlQueries/backendDevPage';
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
  title: 'Backend Development Services — Node.js, Python | Smart-UI',
  description:
    'Scalable backend development: Node.js, Nest.js, Python, Django, FastAPI, PostgreSQL, MongoDB. API design, cloud architecture, AI-ready systems.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/backend-development',
    languages: {
      en: 'https://www.smart-ui.pro/en/backend-development',
      uk: 'https://www.smart-ui.pro/uk-UA/backend-development',
    },
  },
  openGraph: {
    title: 'Backend Development Services — Node.js, Python | Smart-UI',
    description:
      'Scalable backend development: Node.js, Nest.js, Python, Django, FastAPI, PostgreSQL, MongoDB. API design, cloud architecture, AI-ready systems.',
    url: 'https://www.smart-ui.pro/en/backend-development',
    type: 'website' as const,
  },
  twitter: {
    title: 'Backend Development Services — Node.js, Python | Smart-UI',
    description:
      'Scalable backend development: Node.js, Nest.js, Python, Django, FastAPI, PostgreSQL, MongoDB. API design, cloud architecture, AI-ready systems.',
  },
};

interface BackendDevelopmentPageProps {
  params: {
    lng: string;
  };
}

export default async function BackendDevelopmentPage({
  params: { lng },
}: BackendDevelopmentPageProps) {
  const {
    backendDevPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(BACKEND_DEV_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = backendDevPage?.data?.attributes?.Hero || {};
  const technologyStackData =
    backendDevPage?.data?.attributes.technologyStack || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const contactFormData = contactForm?.data?.attributes || [];
  const coreServicesData = backendDevPage?.data?.attributes?.coreServices || {};
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  const clientData = {
    sectionName:
      backendDevPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'Backend Development', item: 'https://smart-ui.pro/backend-development' },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Backend Software Development',
    provider: { '@type': 'Organization', name: 'Smart-UI', url: 'https://smart-ui.pro' },
    areaServed: ['EU', 'GB', 'US', 'AU'],
    description: 'Scalable backend development: Node.js, Nest.js, Python, Django, FastAPI, PostgreSQL, MongoDB. API design, cloud architecture, AI-ready systems.',
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <Hero page={PageEnum.BackendDevelopment} data={heroData} />
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
