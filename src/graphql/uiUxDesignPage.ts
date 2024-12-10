import { HERO_FRAGMENT, PROJECTS_FRAGMENT } from './fragments';

export const UI_UX_DESIGN_PAGE_QUERY = `
query GetUiUxDesignPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  uiUxDesignPage(locale: $locale) {
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
