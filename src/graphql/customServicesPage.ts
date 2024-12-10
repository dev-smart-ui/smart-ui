import { HERO_FRAGMENT, PROJECTS_FRAGMENT } from './fragments';

export const CUSTOM_SERVICES_PAGE_QUERY = `
query GetCustomServicesPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  customServicesPage(locale: $locale) {
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
