import { PageEnum } from '@app-types/enums';
import { CMS_PAGE_QUERY } from '@graphqlQueries/cmsPage';
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
  title: 'CMS Development — Strapi, WordPress, Headless | Smart-UI',
  description:
    'Headless CMS solutions with Strapi, Prismic, and WordPress. Flexible, scalable content management for modern web applications.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/cms',
    languages: {
      en: 'https://www.smart-ui.pro/en/cms',
      uk: 'https://www.smart-ui.pro/uk-UA/cms',
    },
  },
  openGraph: {
    title: 'CMS Development — Strapi, WordPress, Headless | Smart-UI',
    description:
      'Headless CMS solutions with Strapi, Prismic, and WordPress. Flexible, scalable content management for modern web applications.',
    url: 'https://www.smart-ui.pro/en/cms',
    type: 'website' as const,
  },
  twitter: {
    title: 'CMS Development — Strapi, WordPress, Headless | Smart-UI',
    description:
      'Headless CMS solutions with Strapi, Prismic, and WordPress. Flexible, scalable content management for modern web applications.',
  },
};

interface CmsPageProps {
  params: {
    lng: string;
  };
}

export default async function CmsPage({ params: { lng } }: CmsPageProps) {
  const {
    cmsPage,
    singleProjects,
    clientsLogo,
    accordion,
    contactForm,
    header,
    footer,
  } = await fetchGraphQL(CMS_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = cmsPage?.data?.attributes?.Hero || {};
  const technologyStackData = cmsPage?.data?.attributes.technologyStack || {};
  const singleProjectsData = singleProjects?.data || [];
  const accordionData = accordion?.data?.attributes || [];
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};
  const coreServicesData = cmsPage?.data?.attributes?.coreServices || {};

  const clientData = {
    sectionName: cmsPage?.data?.attributes?.ClientsSection?.sectionName || '',
    clients: clientsLogo?.data?.attributes.clients || {},
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'CMS Development', item: 'https://smart-ui.pro/cms' },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'CMS Development',
    provider: { '@type': 'Organization', name: 'Smart-UI', url: 'https://smart-ui.pro' },
    areaServed: ['EU', 'GB', 'US', 'AU'],
    description: 'Headless CMS solutions with Strapi, Prismic, and WordPress. Flexible, scalable content management for modern web applications.',
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <Hero page={PageEnum.Cms} data={heroData} />
      <TechnologyStack data={technologyStackData} />
      <CoreServices data={coreServicesData} lng={lng} callToAction="" />
      <Clients data={clientData} />
      <OurWork data={singleProjectsData} />
      <Accordion data={accordionData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
