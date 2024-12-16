import {
  ACCORDION_FRAGMENT,
  CLIENTS_LOGO_FRAGMENT,
  CONTACT_FORM_FRAGMENT,
  HEADER_FRAGMENT,
  HERO_FRAGMENT,
  PROJECTS_FRAGMENT,
} from './fragments';

export const UI_UX_DESIGN_PAGE_QUERY = `
query GetUiUxDesignPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  uiUxDesignPage(locale: $locale) {
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
  contactForm (locale: $locale) {
    data {
      ...ContactFormFragment
    }
  }
  header (locale: $locale) {
    data {
      ...HeaderFragment
    }
  }
}
${HERO_FRAGMENT}
${PROJECTS_FRAGMENT}
${CLIENTS_LOGO_FRAGMENT}
${ACCORDION_FRAGMENT}
${CONTACT_FORM_FRAGMENT}
${HEADER_FRAGMENT}`;
