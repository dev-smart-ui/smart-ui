import {
  ADVANTAGES_FOR_AGENCY_FRAGMENT,
  APPROACHES_FRAGMENT,
  CONTACT_FORM_FRAGMENT,
  FOOTER_FRAGMENT,
  HEADER_FRAGMENT,
  HERO_FOR_AGENCY_FRAGMENT,
  PROJECTS_FRAGMENT,
  QUESTION_SECTION_FRAGMENT,
  WHAT_WE_CAN_DO_SECTION_FRAGMENT,
  WORK_AND_COLLABORATE_FRAGMENT,
} from './fragments';

export const FOR_AGENCY_PAGE_QUERY = `
query GetForAgencyPageData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  forAgency(locale: $locale) {
    data {
      attributes {
        hero {
          ...HeroForAgencyFragment
        }
        advantages {
          ...AdvantagesForAgencyFragment
        }
        question {
          ...QuestionSectionFragment
        }
        whatWeCanDo {
          ...whatWeCanDoFragment
        }
        workAndCollaborate {
          ...WorkAndCollaborateFragment
        }
        approaches {
          ...ApproachesFragment
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
${PROJECTS_FRAGMENT}
${CONTACT_FORM_FRAGMENT}
${HERO_FOR_AGENCY_FRAGMENT}
${ADVANTAGES_FOR_AGENCY_FRAGMENT}
${WORK_AND_COLLABORATE_FRAGMENT}
${WHAT_WE_CAN_DO_SECTION_FRAGMENT}
${APPROACHES_FRAGMENT}
${HEADER_FRAGMENT}
${QUESTION_SECTION_FRAGMENT}
${FOOTER_FRAGMENT}`;
