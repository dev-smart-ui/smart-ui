export const TEAM_QUERY = `
query GetTeamsData($locale: I18NLocaleCode, $pagination: PaginationArg) {
  teams(locale: $locale, pagination: $pagination) {
    data {
      id
      attributes {
        name
        position
        level
        direction
        price
        preview_photo {
          data {
              attributes {
                url
              }
            }
        }
        telegram
        linkedin
        english_level
        email
        direction
      }
    }
  }
}
`;
