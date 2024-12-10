import { PageEnum } from '@app-types/enums';
import { ABOUT_US_PAGE_QUERY } from '@graphqlQueries/aboutUsPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { ContactForm } from '@components/ContactForm';
import { Hero } from '@components/Hero';
import { ServicesTabs } from '@components/ServicesTabs';

import { DrivingSuccess } from './components/DrivingSuccess';
import { GoalsAndValues } from './components/GoalsAndValues';
import { OurExperts } from './components/OurExperts';

interface AboutUsPageProps {
  params: {
    lng: string;
  };
}

export default async function AboutUsPage({
  params: { lng },
}: AboutUsPageProps) {
  const { aboutUsPage, teams } = await fetchGraphQL(ABOUT_US_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: -1 },
  });

  const heroData = aboutUsPage?.data?.attributes?.Hero || {};
  const singleProjectsData = teams?.data || [];
  return (
    <>
      <Hero page={PageEnum.AboutUs} data={heroData} />
      <DrivingSuccess />
      <ServicesTabs />
      <GoalsAndValues />
      <OurExperts data={singleProjectsData} />
      <ContactForm />
    </>
  );
}
