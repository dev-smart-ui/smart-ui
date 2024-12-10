import { HERO_FRAGMENT, PROJECTS_FRAGMENT } from './fragments';

export const WEB3_PAGE_QUERY = `
query GetWeb3PageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  web3Page(locale: $locale) {
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
