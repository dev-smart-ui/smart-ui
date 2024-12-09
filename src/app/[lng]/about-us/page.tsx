import { PageEnum } from '@app-types/enums';
import { TEAM_QUERY } from '@graphqlQueries/allTeamQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { ContactForm } from '@components/ContactForm';
import { Hero } from '@components/Hero';
import { ServicesTabs } from '@components/ServicesTabs';

import { DrivingSuccess } from './components/DrivingSuccess';
import { GoalsAndValues } from './components/GoalsAndValues';
import { OurExperts } from './components/OurExperts';
import heroImg from './img/heroImg.png';

export default async function AboutUsPage() {
  const { teams } = await fetchGraphQL(TEAM_QUERY, {
    locale: 'en',
    pagination: { limit: -1 },
  });

  return (
    <>
      <Hero page={PageEnum.AboutUs} colorGradiant="Third" image={heroImg} />
      <DrivingSuccess />
      <ServicesTabs />
      <GoalsAndValues />
      <OurExperts data={teams.data} />
      <ContactForm />
    </>
  );
}
