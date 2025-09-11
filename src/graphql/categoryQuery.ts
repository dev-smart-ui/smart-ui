export const CATEGORIES_QUERY = `
query GetProjectCategories($locale: I18NLocaleCode) {
  projectCategories(locale: $locale, sort: ["id"]) {
    data {
      id
      attributes {
        slug
        color
        icon{
          data{
          id
            attributes{
              url
            }
          }
        }
        single_projects{
          data{
            id
          }
        }
      }
    }
  }
}
`;
