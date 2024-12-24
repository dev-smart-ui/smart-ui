import {
  CONTACT_FORM_FRAGMENT,
  FOOTER_FRAGMENT,
  HEADER_FRAGMENT,
  PROJECTS_FRAGMENT,
} from '@graphqlQueries/fragments';

export const PROJECTS_QUERY = `
query GetSingleProjectsData($locale: I18NLocaleCode!, $pagination: PaginationArg) {
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
  footer (locale: $locale) {
    data {
      ...FooterFragment
    }
  }
}
${CONTACT_FORM_FRAGMENT}
${PROJECTS_FRAGMENT}
${HEADER_FRAGMENT}
${FOOTER_FRAGMENT}`;
