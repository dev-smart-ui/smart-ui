import { FOOTER_FRAGMENT, HEADER_FRAGMENT } from './fragments';

export const TERMS_OF_USE_QUERY = `
query GetTermsOfUsePageData($locale: I18NLocaleCode) {
	termsOfUsePage (locale: $locale) {
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
					iconEmail {
						data {
							attributes {
								url
							}
						}
					}
					iconPhone {
						data {
							attributes {
								url
							}
						}
					}
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
