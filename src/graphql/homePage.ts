import {
  ACCORDION_FRAGMENT,
  ADVANTAGES_CARDS_FRAGMENT,
  CLIENTS_LOGO_FRAGMENT,
  CLIENT_FEEDBACK_FRAGMENT,
  HERO_FRAGMENT,
  OUR_SERVICE_FRAGMENT,
  OUR_WORK_FRAGMENT,
  PROJECTS_FRAGMENT,
  SERVICES_TABS_FRAGMENT,
  WORK_TOGETHER_FRAGMENT,
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
        WorkTogetherSection {
          ...WorkTogetherFragment
        }
        OurServiceSection {
          ...OurServiceFragment
        }
        OurWorkSection {
          ...OurWorkFragment
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
${SERVICES_TABS_FRAGMENT}
${CLIENTS_LOGO_FRAGMENT}
${ADVANTAGES_CARDS_FRAGMENT}
${CLIENT_FEEDBACK_FRAGMENT}
${WORK_TOGETHER_FRAGMENT}
${OUR_SERVICE_FRAGMENT}
${OUR_WORK_FRAGMENT}
${ACCORDION_FRAGMENT}`;
