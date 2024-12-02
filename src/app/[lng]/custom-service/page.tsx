import { PageEnum } from '@app-types/enums';
import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

import bottomBgImage from './img/bg.png';
import heroImg from './img/heroImg.png';
import technologyImg from './img/technologyImg.png';

export default async function CustomServicePage() {
  const { singleProjects } = await fetchGraphQL(PROJECTS_QUERY, {
    locale: 'en',
    pagination: { limit: 5 },
  });

  const singleProjectsData = singleProjects?.data || [];

  return (
    <>
      <Hero
        page={PageEnum.CustomService}
        image={heroImg}
        bottomBgImage={bottomBgImage}
        colorGradiant="Third"
      />
      <TechnologyStack image={technologyImg} page={PageEnum.CustomService} />
      <CoreServices page={PageEnum.CustomService} />
      <Clients />
      <OurWork data={singleProjectsData} />
      <Accordion />
      <ContactForm />
    </>
  );
}
