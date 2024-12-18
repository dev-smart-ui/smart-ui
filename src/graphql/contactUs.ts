import {
  ACCORDION_FRAGMENT,
  CONTACT_FORM_FRAGMENT,
  FOOTER_FRAGMENT,
  HEADER_FRAGMENT,
} from '@graphqlQueries/fragments';

export const CONTACT_US_QUERY = `
query GetContactUsPageData($locale: I18NLocaleCode) {
	contactUsPage(locale: $locale) {
    data {
      attributes {
        sectionName
        subTitle
        topImage {
          data {
            attributes {
              url
            }
          }
        }
        title {
          part1
          part2
          gradientPart
          color1
          color2
        }
        contactInfo {
	        id
	        label
	        text
	        icon {
	          data {
	            attributes {
	              url
	            }
	          }
	        }
        }
      }
    }
  }
	accordion(locale: $locale) {
    data {
      ...AccordionFragment
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
${ACCORDION_FRAGMENT}
${CONTACT_FORM_FRAGMENT}
${HEADER_FRAGMENT}
${FOOTER_FRAGMENT}`;
