import { HERO_FRAGMENT, PROJECTS_FRAGMENT } from './fragments';

export const BACKEND_DEV_PAGE_QUERY = `
query GetBackendDevPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  backendDevPage(locale: $locale) {
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
