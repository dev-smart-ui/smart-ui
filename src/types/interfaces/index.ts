// projects
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

// experts
export interface IExpert {
  id: string;
  attributes: {
    preview_photo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    direction: string;
    email: string;
    english_level: string;
    level: string;
    behance: string;
    linkedin: string;
    telegram: string;
    name: string;
    position: string;
    price: number;
  };
}

interface IImage {
  data: {
    attributes: {
      url: string;
    };
  };
}
// social
export interface ISocial {
  color: string;
  ariaLabel: string;
  label: string;
  url: string;
  icon: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

interface IToolCard {
  Text: string;
  Title: string;
  Img?: string;
}

export interface IHeroData {
  button: {
    label: string;
  };
  title: {
    part1: string;
    gradientPart: string;
    part2: string;
    color1: string;
    color2: string;
  };
  subTitle: string;
  trust: string;
  socials: ISocial[];
  backgroundImage: IImage;
  backgroundBottomImage: IImage;
  image: IImage;
  cards?: IToolCard[];
}

// services tabs

interface ITab {
  label: string;
  value: string;
}

export interface ITabContent {
  title: string;
  key: string;
  list: {
    list: string[];
  };
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  button: {
    text: string;
    ariaLabel: string;
    color: string;
  };
}

export interface IServicesTabs {
  tabs: ITab[];
  tabsContent: ITabContent[];
}
