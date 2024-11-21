export const PROJECTS_QUERY = `
query GetSingleProjectsData($locale: I18NLocaleCode!, $pagination: PaginationArg) {
  singleProjects(locale: $locale, pagination: $pagination) {
    data {
      id
      attributes {
        project_name
        description_text
        main_img {
          data {
            attributes {
              url
            }
          }
        }
        color
        site_url
        google_page_speed
        seo_title
        seo_description
      }
    }
  }
}`;
