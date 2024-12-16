import {
  CONTACT_FORM_FRAGMENT,
  FOOTER_FRAGMENT,
  HEADER_FRAGMENT,
  HERO_FRAGMENT,
  SERVICES_TABS_FRAGMENT,
  TEAM_FRAGMENT,
} from './fragments';

export const ABOUT_US_PAGE_QUERY = `
query GetAboutUsPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  aboutUsPage(locale: $locale) {
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
  teams(locale: $locale, pagination: $pagination) {
    data {
      ...TeamFragment
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
${HERO_FRAGMENT}
${TEAM_FRAGMENT}
${SERVICES_TABS_FRAGMENT}
${CONTACT_FORM_FRAGMENT}
${HEADER_FRAGMENT}
${FOOTER_FRAGMENT}`;
