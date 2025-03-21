import { PageEnum } from '@app-types/enums';
import { PROJECT_DETAIL_QUERY } from '@graphqlQueries/projectDetail';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Container } from '@components/Container';
import { Hero } from '@components/Hero';
import Layout from '@components/Layout';
import { Solution } from '@components/Solution';

import { QuestionBlock } from '../../for-agency/components/QuestionBlock';
import { OurWorkWrapper } from '../OurWorkWrapper';
import { ImageSection } from './components/ImageSection';
import { ProjectLifecycle } from './components/ProjectLifecycle';
import { ProjectOverview } from './components/ProjectOverview';

interface ProjectDetailPageProps {
  params: {
    lng: string;
    slug: string;
  };
}

export default async function ProjectDetailPage({
  params: { slug, lng },
}: ProjectDetailPageProps) {
  const { singleProjects, header, footer } = await fetchGraphQL(
    PROJECT_DETAIL_QUERY,
    {
      slug,
      locale: lng,
    },
  );

  const singleProjectsData = singleProjects?.data[0]?.attributes || [];
  const heroData = singleProjects?.data[0]?.attributes?.hero || {};
  const projectOverviewData =
    singleProjects?.data[0]?.attributes?.projectOverview || {};
  const solutionData = singleProjects?.data[0]?.attributes?.solution || {};
  const projectLifecycleData =
    singleProjects?.data[0]?.attributes?.projectLifecycle || {};
  const userFlowData = singleProjects?.data[0]?.attributes?.userFlow || {};
  const colorPaletteData =
    singleProjects?.data[0]?.attributes?.colorPalette || {};
  const desktopData = singleProjects?.data[0]?.attributes?.desktop || {};
  const otherPagesData = singleProjects?.data[0]?.attributes?.otherPages || {};
  const mobileData = singleProjects?.data[0]?.attributes?.mobile || {};
  const questionData = singleProjects?.data[0]?.attributes.consultation || {};
  const ourWorksData = singleProjects?.data[0]?.attributes.ourWorks || {};

  const headerData = header?.data?.attributes || {};
  const footerData = footer?.data?.attributes || {};

  return (
    <Layout headerData={headerData} footerData={footerData}>
      <Hero
        data={{ siteUrl: singleProjectsData?.site_url, ...heroData }}
        page={PageEnum.ProjectDetail}
      />
      <ProjectOverview data={projectOverviewData} />
      <Solution data={solutionData} />
      <ProjectLifecycle data={projectLifecycleData} />
      {userFlowData && Object.keys(userFlowData).length > 0 && (
        <ImageSection data={userFlowData} />
      )}
      {colorPaletteData && Object.keys(colorPaletteData).length > 0 && (
        <ImageSection data={colorPaletteData} />
      )}
      {desktopData && Object.keys(desktopData).length > 0 && (
        <ImageSection data={desktopData} />
      )}
      {otherPagesData && Object.keys(otherPagesData).length > 0 && (
        <ImageSection data={otherPagesData} />
      )}
      {mobileData && Object.keys(mobileData).length > 0 && (
        <ImageSection data={mobileData} />
      )}
      <Container>
        <QuestionBlock data={questionData} lng={lng} />
      </Container>
      <OurWorkWrapper
        lng={lng}
        headerInfo={{ title: ourWorksData }}
        page={PageEnum.ProjectDetail}
        pagSize={3}
      />
    </Layout>
  );
}
