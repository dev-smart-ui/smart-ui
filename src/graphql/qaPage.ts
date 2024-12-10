import { HERO_FRAGMENT, PROJECTS_FRAGMENT } from './fragments';

export const QA_PAGE_QUERY = `
query GetQaPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  qaPage(locale: $locale) {
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
