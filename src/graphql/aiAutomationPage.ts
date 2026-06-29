import {
  ACCORDION_FRAGMENT,
  CONTACT_FORM_FRAGMENT,
  FOOTER_FRAGMENT,
  HEADER_FRAGMENT,
} from './fragments';

export const AI_AUTOMATION_PAGE_QUERY = `
query GetAiAutomationPageData($locale: I18NLocaleCode) {
  accordion(locale: $locale) {
    data {
      ...AccordionFragment
    }
  }
  contactForm(locale: $locale) {
    data {
      ...ContactFormFragment
    }
  }
  header(locale: $locale) {
    data {
      ...HeaderFragment
    }
  }
  footer(locale: $locale) {
    data {
      ...FooterFragment
    }
  }
}
${ACCORDION_FRAGMENT}
${CONTACT_FORM_FRAGMENT}
${HEADER_FRAGMENT}
${FOOTER_FRAGMENT}`;
