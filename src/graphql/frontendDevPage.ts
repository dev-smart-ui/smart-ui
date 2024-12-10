import { HERO_FRAGMENT, PROJECTS_FRAGMENT } from './fragments';

export const FRONTEND_DEV_PAGE_QUERY = `
query GetFrontendDevPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  frontendDevPage(locale: $locale) {
    data {
      attributes {
        Hero {
          ...HeroFragment
        }
      }
    }
  }
  singleProjects(locale: $locale, pagination: $pagination) {
    data {
      ...ProjectsFragment
    }
    meta {
      pagination {
        pageCount
      }
    }
  }
}
${HERO_FRAGMENT}
${PROJECTS_FRAGMENT}`;
