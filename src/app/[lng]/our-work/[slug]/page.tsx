import { PageEnum } from '@app-types/enums';
import { PROJECT_DETAIL_QUERY } from '@graphqlQueries/projectDetail';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { Hero } from '@components/Hero';
import Layout from '@components/Layout';
import { Solution } from '@components/Solution';

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
  const heroData = singleProjects?.data[0].attributes?.hero || {};
  const projectOverviewData =
    singleProjects?.data[0].attributes?.projectOverview || {};
  const solutionData = singleProjects?.data[0].attributes?.solution || {};

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
    </Layout>
  );
}
