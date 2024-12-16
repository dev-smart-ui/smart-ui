import {
  CLIENTS_LOGO_FRAGMENT,
  CONTACT_FORM_FRAGMENT,
  HEADER_FRAGMENT,
  OUR_WORK_FRAGMENT,
} from './fragments';

export const OUR_WORK_PAGE_QUERY = `
query GetOurWorkPageData($locale: I18NLocaleCode) {
  ourWorkPage(locale: $locale) {
    data {
      attributes {
        ClientsSection {
          sectionName
        }
        OurWorkSection {
          ...OurWorkFragment
        }
      }
    }
  }
  clientsLogo {
    ...ClientsLogoFragment  
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
${CLIENTS_LOGO_FRAGMENT}
${OUR_WORK_FRAGMENT}
${CONTACT_FORM_FRAGMENT}
${HEADER_FRAGMENT}`;
