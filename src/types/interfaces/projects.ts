export interface IProjectData {
  id: string;
  attributes: {
    project_name: string;
    description_text: string;
    google_page_speed: number;
    main_img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    color: string;
    seo_title: string;
    seo_description: string;
    site_url: string;
    about_project: string;
    technologies: Array<{ name: string }> | null;
  };
}
