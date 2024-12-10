import { PageEnum } from '@app-types/enums';
import { CMS_PAGE_QUERY } from '@graphqlQueries/cmsPage';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Accordion } from '@components/Accordion';
import { Clients } from '@components/Clients';
import { ContactForm } from '@components/ContactForm';
import { CoreServices } from '@components/CoreServices';
import { Hero } from '@components/Hero';
import { OurWork } from '@components/OurWork';
import { TechnologyStack } from '@components/TechnologyStack';

import technologyImg from './img/technologyImg.jpg';

interface CmsPageProps {
  params: {
    lng: string;
  };
}

export default async function CmsPage({ params: { lng } }: CmsPageProps) {
  const { cmsPage, singleProjects } = await fetchGraphQL(CMS_PAGE_QUERY, {
    locale: lng,
    pagination: { limit: 5 },
  });

  const heroData = cmsPage?.data?.attributes?.Hero || {};
  const singleProjectsData = singleProjects?.data || [];

  return (
    <>
      <Hero page={PageEnum.Cms} data={heroData} />
      <TechnologyStack image={technologyImg} />
      <CoreServices />
      <Clients />
      <OurWork data={singleProjectsData} />
      <Accordion />
      <ContactForm />
    </>
  );
}
