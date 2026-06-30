import { PageEnum } from '@app-types/enums';
import { QA_PAGE_QUERY } from '@graphqlQueries/qaPage';
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
  title: 'QA Engineering & Software Testing Services | Smart-UI',
  description:
    'Manual and automated QA testing: functional, performance, security, and usability. CI/CD integration, bug-free deployments.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/qa',
    languages: {
      'x-default': 'https://www.smart-ui.pro/en/qa',
      en: 'https://www.smart-ui.pro/en/qa',
      uk: 'https://www.smart-ui.pro/uk-UA/qa',
    },
  },
  openGraph: {
    title: 'QA Engineering & Software Testing Services | Smart-UI',
    description:
      'Manual and automated QA testing: functional, performance, security, and usability. CI/CD integration, bug-free deployments.',
    url: 'https://www.smart-ui.pro/en/qa',
    type: 'website' as const,
  },
  twitter: {
    title: 'QA Engineering & Software Testing Services | Smart-UI',
    description:
      'Manual and automated QA testing: functional, performance, security, and usability. CI/CD integration, bug-free deployments.',
  },
};

interface QaPageProps {
  params: {
    lng: string;
  };
}

export default async function QaPage({ params: { lng } }: QaPageProps) {
  const {
    qaPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(QA_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = qaPage?.data?.attributes?.Hero || {};
  const technologyStackData = qaPage?.data?.attributes.technologyStack || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const coreServicesData = qaPage?.data?.attributes?.coreServices || {};

  const clientData = {
    sectionName: qaPage?.data?.attributes?.ClientsSection?.sectionName || '',
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
      { '@type': 'ListItem', position: 2, name: 'QA Engineering', item: 'https://smart-ui.pro/qa' },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'QA Engineering',
    provider: { '@type': 'Organization', name: 'Smart-UI', url: 'https://smart-ui.pro' },
    areaServed: ['EU', 'GB', 'US', 'AU'],
    description: 'Manual and automated QA testing: functional, performance, security, and usability. CI/CD integration, bug-free deployments.',
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <Hero page={PageEnum.Qa} data={heroData} />
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
