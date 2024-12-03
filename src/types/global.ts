export interface IHeaderInfo {
  sectionName: string;
  title: {
    main: string;
    highlighted: string;
    secondary?: string;
  };
  subTitle: string;
}

export interface IBottomBlock {
  title: string;
  description: string;
  buttonLabel: string;
}

export type TSectionHeaderGradientColor = 'Primary' | 'Secondary' | 'Third';
