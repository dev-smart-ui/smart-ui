export interface IImage {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface IGradientTitle {
  part1: string;
  gradientPart: string;
  part2: string;
  color1: string;
  color2: string;
}

// projects
export interface IProjectData {
  id: string;
  attributes: {
    project_name: string;
    description_text: string;
    google_page_speed: number;
    main_img: IImage;
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
    preview_photo: IImage;
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

// social
export interface ISocial {
  color: string;
  ariaLabel: string;
  label: string;
  url: string;
  icon: IImage;
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
  title: IGradientTitle;
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
  image: IImage;
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

// clients
interface IClients {
  key: string;
  image: IImage;
}

export interface IClientsSection {
  sectionName: string;
  clients: IClients[];
}

// advantagesCards
interface IAdvantagesCard {
  title: string;
  text: string;
  img: IImage;
}

export interface IAdvantagesCards {
  sectionName: string;
  title: IGradientTitle;
  subTitle: string;
  cards: IAdvantagesCard[];
}

// feedbacks
export interface IClientFeedback {
  id: string;
  author: string;
  work: string;
  company: string;
  feedback: string;
  avatar: IImage;
  image: IImage;
}

export interface IClientSection {
  sectionName: string;
  title: string;
  feedbacks: IClientFeedback[];
}
