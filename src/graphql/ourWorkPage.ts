import { CLIENTS_LOGO_FRAGMENT, OUR_WORK_FRAGMENT } from './fragments';

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
}
${CLIENTS_LOGO_FRAGMENT}
${OUR_WORK_FRAGMENT}`;
