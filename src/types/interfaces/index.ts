export interface IImage {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface IGradientTitle {
  part1: string;
  gradientPart: string;
  part2: string;
  color1: string;
  color2: string;
}

// header
export interface ISubMenuLink {
  id: string;
  label: string;
  path: string;
  desc: string;
  gridArea: string;
  icon: IImage;
}

export interface IHeaderLink {
  id: string;
  label: string;
  path: string;
  subMenuLinks?: ISubMenuLink[];
}

export interface IHeader {
  logo: IImage;
  button: {
    icon: IImage;
    label: string;
  };
  links: IHeaderLink[];
}

// footer
export interface IFooterInfoItem {
  id: string;
  label: string;
  url: string;
  icon: IImage;
}

export interface IFooterLink {
  id: string;
  text: string;
  url: string;
}

export interface IFooterServiceItem {
  id: string;
  text: string;
  url: string;
}

export interface IFooterSocialItem {
  id: string;
  label: string;
  url: string;
  color: string;
  ariaLabel: string;
  icon: IImage;
}

export interface IFooter {
  infoDescription: string;
  linksTitle: string;
  servicesTitle: string;
  logo: IImage;
  info: IFooterInfoItem[];
  links: IFooterLink[];
  services: IFooterServiceItem[];
  socials: IFooterSocialItem[];
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

// workTogether
export interface IWorkTogetherCard {
  id: string;
  backgroundColor: string;
  category: string;
  count: string;
  group: string;
  image: IImage;
}

export interface IWorkTogetherSection {
  title: string;
  description: string;
  backgroundImage: IImage;
  button: {
    label: string;
    icon: IImage;
  };
  cards: IWorkTogetherCard[];
}

// ourService
export interface IOurServiceCard {
  id: string;
  title: string;
  description: string;
  image: IImage;
  area: string;
  buttonLabel: string;
  buttonIcon: IImage;
}

export interface IOurServiceSection {
  sectionName: string;
  title: IGradientTitle;
  cards: IOurServiceCard[];
}

// ourWork
export interface IOurWorkSection {
  sectionName: string;
  title: IGradientTitle;
  description: string;
}

// accordion
export interface IAccordionCard {
  id: string;
  label: string;
  hidedText: string;
}

export interface IAccordionSection {
  sectionName: string;
  title: IGradientTitle;
  cards: IAccordionCard[];
}

// contactForm
export interface IContactForm {
  backgroundImage: IImage;
  logo: IImage;
  socialsLabel: string;
  title: string;
  subTitle: string;
  socials: ISocial[];
  button: {
    label: string;
    icon: IImage;
  };
}

// contactUsPage
export interface IContactInfo {
  id: string;
  label: string;
  text: string;
  icon: IImage;
}
export interface IContactUsPage {
  title: IGradientTitle;
  sectionName: string;
  subTitle: string;
  topImage: IImage;
  contactInfo: IContactInfo[];
}

// whoWeAreSection
export interface IWhoWeAre {
  sectionName: string;
  title: IGradientTitle;
  description: string;
}

// goalsAndValues
interface IGoalAndValueCard {
  Title: string;
  Img: IImage;
  Text: string;
}

export interface IGoalsAndValues {
  cards: IGoalAndValueCard[];
}

// heroForAgency
export interface IHeroForAgency {
  sectionName: string;
  title: string;
  description: string;
  smallImage: IImage;
  topSmallText: string;
  button: {
    label: string;
    icon: IImage;
  };
  image: IImage;
}

// advantages forAgency
export interface ISolutionItem {
  id: string;
  text: string;
  icon: IImage;
}
export interface IAdvantagesCardForAgency {
  Title: string;
  Text: string;
}
export interface IAdvantagesForAgency {
  sectionName: string;
  title: string;
  description: string;
  cards: IAdvantagesCardForAgency[];
  solutionTitle: string;
  solutionIcon: IImage;
  solutionDescription: string;
  solutionsList: ISolutionItem[];
}

// questionSection
export interface IQuestionSection {
  title: string;
  text: string;
  image?: IImage;
  bgImage?: IImage;
  button: {
    label: string;
    icon: IImage;
  };
}

// whatWeCanDo
export interface IWhatWeCanDoCard {
  title: string;
  icon: IImage;
  stackList: string[];
}

export interface IWhatWeCanDo {
  sectionName: string;
  title: IGradientTitle;
  cards: IWhatWeCanDoCard[];
  description: string;
  bottomTitle: string;
  bottomText: string;
  bottomButton: {
    label: string;
    icon: IImage;
  };
}

// approaches
export interface IApproachCard {
  id: string;
  title: string;
  text: string;
  img: IImage;
}
export interface IApproaches {
  sectionName: string;
  title: string;
  description: string;
  cards: IApproachCard[];
}

// workAndCollaborate
export interface IWorkAndCollaborate {
  sectionName: string;
  title: string;
  description: string;
  image: IImage;
}
