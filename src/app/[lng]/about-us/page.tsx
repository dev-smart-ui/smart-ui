import { PageEnum } from '@app-types/enums';
import { ABOUT_US_PAGE_QUERY } from '@graphqlQueries/aboutUsPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { ContactForm } from '@components/ContactForm';
import { Hero } from '@components/Hero';
import Layout from '@components/Layout';
import { ServicesTabs } from '@components/ServicesTabs';

import { GoalsAndValues } from './components/GoalsAndValues';
import { OurExperts } from './components/OurExperts';
import { WhoWeAre } from './components/WhoWeAre';

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
  const singleProjectsData = teams?.data || [];
  const contactFormData = contactForm?.data?.attributes || [];
  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero page={PageEnum.AboutUs} data={heroData} />
      <WhoWeAre data={whoWeAreData} />
      <ServicesTabs data={servicesTabsData} />
      <GoalsAndValues />
      <OurExperts data={singleProjectsData} />
      <ContactForm data={contactFormData} />
    </Layout>
  );
}
