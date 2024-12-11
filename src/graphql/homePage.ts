import {
  HERO_FRAGMENT,
  PROJECTS_FRAGMENT,
  SERVICES_TABS_FRAGMENT,
} from './fragments';

export const HOME_PAGE_QUERY = `
query GetHomePageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  homePage(locale: $locale) {
    data {
      attributes {
        Hero {
          ...HeroFragment
        }
        ServicesTabs {
          ...ServicesTabsFragment
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
${PROJECTS_FRAGMENT}
${SERVICES_TABS_FRAGMENT}`;
