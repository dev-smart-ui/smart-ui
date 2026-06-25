import { PageEnum } from '@app-types/enums';
import { ABOUT_US_PAGE_QUERY } from '@graphqlQueries/aboutUsPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { ContactForm } from '@components/ContactForm';
import { Hero } from '@components/Hero';
import { JsonLd } from '@components/JsonLd';
import Layout from '@components/Layout';
import { ServicesTabs } from '@components/ServicesTabs';

import { GoalsAndValues } from './components/GoalsAndValues';
import { OurExperts } from './components/OurExperts';
import { WhoWeAre } from './components/WhoWeAre';

export const metadata = {
  title: 'About Smart-UI — European Software Studio',
  description:
    'Smart-UI is a European software studio founded in 2018. 8+ years of experience, 180+ clients, 315+ projects in EU, UK, US, and Australia.',
  alternates: {
    canonical: 'https://www.smart-ui.pro/en/about-us',
    languages: {
      en: 'https://www.smart-ui.pro/en/about-us',
      uk: 'https://www.smart-ui.pro/uk-UA/about-us',
    },
  },
  openGraph: {
    title: 'About Smart-UI — European Software Studio',
    description:
      'Smart-UI is a European software studio founded in 2018. 8+ years of experience, 180+ clients, 315+ projects in EU, UK, US, and Australia.',
    url: 'https://www.smart-ui.pro/en/about-us',
    type: 'website' as const,
  },
  twitter: {
    title: 'About Smart-UI — European Software Studio',
    description:
      'Smart-UI is a European software studio founded in 2018. 8+ years of experience, 180+ clients, 315+ projects in EU, UK, US, and Australia.',
  },
};

interface AboutUsPageProps {
  params: {
    lng: string;
  };
}

export default async function AboutUsPage({
  params: { lng },
}: AboutUsPageProps) {
  const { aboutUsPage, teams, contactForm, header, footer } =
    await fetchGraphQL(ABOUT_US_PAGE_QUERY, {
      locale: lng,
      pagination: { limit: -1 },
    });

  const whoWeAreData = aboutUsPage?.data?.attributes?.WhoWeAre || {};
  const servicesTabsData = aboutUsPage?.data?.attributes?.ServicesTabs || {};
  const heroData = aboutUsPage?.data?.attributes?.Hero || {};
  const goalsAndValuesData =
    aboutUsPage?.data?.attributes?.GoalsAndValues || {};
  const ourExpertsData = aboutUsPage?.data?.attributes?.OurExperts || {};
  const singleProjectsData = teams?.data || [];
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://smart-ui.pro' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://smart-ui.pro/about-us' },
    ],
  };

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <JsonLd data={breadcrumbJsonLd} />
      <Hero page={PageEnum.AboutUs} data={heroData} />
      <WhoWeAre data={whoWeAreData} />
      <ServicesTabs data={servicesTabsData} />
      <GoalsAndValues data={goalsAndValuesData} />
      <OurExperts data={singleProjectsData} headerInfo={ourExpertsData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
