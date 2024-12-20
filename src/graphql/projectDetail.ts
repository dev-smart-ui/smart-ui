import {
  FOOTER_FRAGMENT,
  HEADER_FRAGMENT,
  HERO_FRAGMENT,
  PROJECTS_FRAGMENT,
  PROJECT_OVERVIEW_FRAGMENT,
} from './fragments';

export const PROJECT_DETAIL_QUERY = `
query GetProjectDetailPageData($locale: I18NLocaleCode, $pagination: PaginationArg, $slug: String!) {
  singleProjects(locale: $locale, pagination: $pagination, filters: { slug: { eq: $slug } }) {
    data {
      ...ProjectsFragment
      attributes {
        hero {
          ...HeroFragment
        }
        projectOverview {
          ...ProjectOverviewFragment
        }
      }
    }
    meta {
      pagination {
        pageCount
      }
    }
  }
  header (locale: $locale) {
    data {
      ...HeaderFragment
    }
  }
  footer (locale: $locale) {
    data {
      ...FooterFragment
    }
  }
}
${HERO_FRAGMENT}
${PROJECT_OVERVIEW_FRAGMENT}
${PROJECTS_FRAGMENT}
${HEADER_FRAGMENT}
${FOOTER_FRAGMENT}`;
