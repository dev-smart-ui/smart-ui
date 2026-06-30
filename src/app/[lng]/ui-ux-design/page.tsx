import { PageEnum } from '@app-types/enums';
import { UI_UX_DESIGN_PAGE_QUERY } from '@graphqlQueries/uiUxDesignPage';
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
  title: 'UI/UX Design Services — Web & Mobile | Smart-UI',
  description:
    'User-centered UI/UX design: wireframes, prototypes, responsive design. We create intuitive interfaces that drive engagement and conversions.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/ui-ux-design',
    languages: {
      'x-default': 'https://www.smart-ui.pro/en/ui-ux-design',
      en: 'https://www.smart-ui.pro/en/ui-ux-design',
      uk: 'https://www.smart-ui.pro/uk-UA/ui-ux-design',
    },
  },
  openGraph: {
    title: 'UI/UX Design Services — Web & Mobile | Smart-UI',
    description:
      'User-centered UI/UX design: wireframes, prototypes, responsive design. We create intuitive interfaces that drive engagement and conversions.',
    url: 'https://www.smart-ui.pro/en/ui-ux-design',
    type: 'website' as const,
  },
  twitter: {
    title: 'UI/UX Design Services — Web & Mobile | Smart-UI',
    description:
      'User-centered UI/UX design: wireframes, prototypes, responsive design. We create intuitive interfaces that drive engagement and conversions.',
  },
};

interface UiUxDesignPageProps {
  params: {
    lng: string;
  };
}

export default async function UiUxDesignPage({
  params: { lng },
}: UiUxDesignPageProps) {
  const {
    uiUxDesignPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(UI_UX_DESIGN_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = uiUxDesignPage?.data?.attributes?.Hero || {};
  const technologyStackData =
    uiUxDesignPage?.data?.attributes.technologyStack || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];

  const clientData = {
    sectionName:
      uiUxDesignPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };
  const contactFormData = contactForm?.data?.attributes || [];
  const coreServicesData = uiUxDesignPage?.data?.attributes?.coreServices || {};
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'UI/UX Design', item: 'https://smart-ui.pro/ui-ux-design' },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'UI/UX Design',
    provider: { '@type': 'Organization', name: 'Smart-UI', url: 'https://smart-ui.pro' },
    areaServed: ['EU', 'GB', 'US', 'AU'],
    description: 'User-centered UI/UX design: wireframes, prototypes, responsive design. We create intuitive interfaces that drive engagement and conversions.',
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <Hero page={PageEnum.UiUxDesign} data={heroData} />
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
