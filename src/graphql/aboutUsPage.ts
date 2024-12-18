import {
  CONTACT_FORM_FRAGMENT,
  FOOTER_FRAGMENT,
  GOALS_AND_VALUES_FRAGMENT,
  HEADER_FRAGMENT,
  HERO_FRAGMENT,
  OUR_EXPERTS_FRAGMENT,
  SERVICES_TABS_FRAGMENT,
  TEAM_FRAGMENT,
  WHO_WE_ARE_FRAGMENT,
} from './fragments';

export const ABOUT_US_PAGE_QUERY = `
query GetAboutUsPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  aboutUsPage(locale: $locale) {
    data {
      attributes {
        Hero {
          ...HeroFragment
        }
        WhoWeAre {
          ...WhoWeAreFragment
        }
        ServicesTabs {
          ...ServicesTabsFragment
        }
        GoalsAndValues {
          ...GoalsAndValuesFragment
        }
        OurExperts {
          ...OurExpertsFragment
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
${WHO_WE_ARE_FRAGMENT}
${GOALS_AND_VALUES_FRAGMENT}
${OUR_EXPERTS_FRAGMENT}
${SERVICES_TABS_FRAGMENT}
${CONTACT_FORM_FRAGMENT}
${HEADER_FRAGMENT}
${FOOTER_FRAGMENT}`;
