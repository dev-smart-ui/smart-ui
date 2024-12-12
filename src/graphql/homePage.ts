import {
  ADVANTAGES_CARDS_FRAGMENT,
  CLIENTS_LOGO_FRAGMENT,
  CLIENT_FEEDBACK_FRAGMENT,
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
        ClientsSection {
          sectionName
        }
        AdvantagesSection {
          ...AdvantagesCardsFragment
        }
        ClientFeedback {
          ...ClientFeedbackFragment
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
}
${HERO_FRAGMENT}
${PROJECTS_FRAGMENT}
${SERVICES_TABS_FRAGMENT}
${CLIENTS_LOGO_FRAGMENT}
${ADVANTAGES_CARDS_FRAGMENT}
${CLIENT_FEEDBACK_FRAGMENT}`;
