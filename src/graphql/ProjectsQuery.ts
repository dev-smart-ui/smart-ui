import {
  CONTACT_FORM_FRAGMENT,
  FOOTER_FRAGMENT,
  HEADER_FRAGMENT,
} from '@graphqlQueries/fragments';

export const PROJECTS_QUERY = `
query GetSingleProjectsData($locale: I18NLocaleCode!, $pagination: PaginationArg) {
  singleProjects(locale: $locale, pagination: $pagination) {
    data {
      id
      attributes {
        project_name
        description_text
        main_img {
          data {
            attributes {
              url
            }
          }
        }
        color
        site_url
        google_page_speed
        seo_title
        seo_description
      }
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
${HEADER_FRAGMENT}
${FOOTER_FRAGMENT}`;
