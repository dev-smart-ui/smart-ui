import { PageEnum } from '@app-types/enums';
import { CUSTOM_SERVICES_PAGE_QUERY } from '@graphqlQueries/customServicesPage';
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
  title: 'Custom Software Development Services | Smart-UI',
  description:
    'Tailor-made software solutions: custom API development, third-party integrations, automation workflows. Built for your unique business needs.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/custom-service',
    languages: {
      'x-default': 'https://www.smart-ui.pro/en/custom-service',
      en: 'https://www.smart-ui.pro/en/custom-service',
      uk: 'https://www.smart-ui.pro/uk-UA/custom-service',
    },
  },
  openGraph: {
    title: 'Custom Software Development Services | Smart-UI',
    description:
      'Tailor-made software solutions: custom API development, third-party integrations, automation workflows. Built for your unique business needs.',
    url: 'https://www.smart-ui.pro/en/custom-service',
    type: 'website' as const,
  },
  twitter: {
    title: 'Custom Software Development Services | Smart-UI',
    description:
      'Tailor-made software solutions: custom API development, third-party integrations, automation workflows. Built for your unique business needs.',
  },
};

interface CustomServicesPageProps {
  params: {
    lng: string;
  };
}

export default async function CustomServicePage({
  params: { lng },
}: CustomServicesPageProps) {
  const {
    customServicesPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(CUSTOM_SERVICES_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = customServicesPage?.data?.attributes?.Hero || {};
  const technologyStackData =
    customServicesPage?.data?.attributes.technologyStack || {};
  const coreServicesData =
    customServicesPage?.data?.attributes?.coreServices || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const contactFormData = contactForm?.data?.attributes || [];

  const clientData = {
    sectionName:
      customServicesPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'Custom Software Development', item: 'https://smart-ui.pro/custom-service' },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Software Development',
    provider: { '@type': 'Organization', name: 'Smart-UI', url: 'https://smart-ui.pro' },
    areaServed: ['EU', 'GB', 'US', 'AU'],
    description: 'Tailor-made software solutions: custom API development, third-party integrations, automation workflows. Built for your unique business needs.',
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <Hero page={PageEnum.CustomService} data={heroData} />
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
