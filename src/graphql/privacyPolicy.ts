import { FOOTER_FRAGMENT, HEADER_FRAGMENT } from './fragments';

export const PRIVACY_POLICY_QUERY = `
query GetPrivacyPolicyPageData($locale: I18NLocaleCode) {
	privacyPolicyPage (locale: $locale) {
		data {
			attributes {
				sectionName
				title {
					part1
					part2
					gradientPart
					color1
					color2
				}
				description
				content {
					id
					name
					object
				}
				navigation {
					itemId
					text
				}
				topImage {
					data {
						attributes {
							url
						}
					}
				}
			}
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
${HEADER_FRAGMENT}
${FOOTER_FRAGMENT}`;
