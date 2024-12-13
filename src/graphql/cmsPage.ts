import {
  ACCORDION_FRAGMENT,
  CLIENTS_LOGO_FRAGMENT,
  HERO_FRAGMENT,
  PROJECTS_FRAGMENT,
} from './fragments';

export const CMS_PAGE_QUERY = `
query GetCmsPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  cmsPage(locale: $locale) {
    data {
      attributes {
        Hero {
          ...HeroFragment
        }
        ClientsSection {
          sectionName
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
  clientsLogo {
    ...ClientsLogoFragment  
  }
  accordion(locale: $locale) {
    data {
      ...AccordionFragment
    }
  }
}
${HERO_FRAGMENT}
${PROJECTS_FRAGMENT}
${CLIENTS_LOGO_FRAGMENT}
${ACCORDION_FRAGMENT}`;
